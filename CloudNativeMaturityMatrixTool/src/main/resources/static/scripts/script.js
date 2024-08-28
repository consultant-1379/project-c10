'use strict';

window.localStorage.ans = null;
let answersObj = [];
let questionTitle = document.querySelector('.questionTitle');
let question = document.querySelector('.question');
let originalOpt = document.querySelectorAll('.originalOpt');
let originalOptLabel = document.querySelectorAll('.originalOptLabel');
let nextBtn = document.querySelector('.btn.next');
let prevBtn = document.querySelector('.btn.prev');
let resetBtn = document.querySelector('.btn.reset');
let additionalQuestion = document.querySelector('.additionalQuestion');

let currentAnswer;

fetch('./data/questions.json')
  .then(res => res.json())
  .then(data => startQuiz(data));

const startQuiz = elements => {
  let index = 0;
  const len = elements.length;
  updateQuestion(elements, index);

  originalOpt.forEach(el => {
    el.addEventListener('click', function () {
      currentAnswer = {
        title: elements[index].title.toLowerCase(),
        ans: [el.value],
      };
      if (el.value === 'No') {
        updateQuestion(elements, index, el.value);
      }
    });
  });

  nextBtn.addEventListener('click', function () {
    removeExistingAnswer(index);
    index++;
    if (index > elements.length - 1) {
      openWithData('./submit.html', answersObj);
    }
    if (index < elements.length) updateQuestion(elements, index);
  });

  prevBtn.addEventListener('click', function () {
    index--;
    if (index < 0) {
      index = 0;
      updateQuestion(elements, 0);
    } else {
      updateQuestion(elements, index, 'prev');
    }
  });

  resetBtn.addEventListener('click', function () {
    window.location = './index.html';
  });
};

const removeExistingAnswer = index => {
  if (answersObj[index]) {
    if (currentAnswer.title === answersObj[index].title) {
      answersObj.splice(index, 1);
    }
  }
  answersObj.push(currentAnswer);
};

const updateQuestion = (elements, index, mode) => {
  // nextBtn.classList.add('hide');
  originalOpt.forEach(el => {
    el.checked = false;
    el.hidden = false;
  });
  originalOptLabel.forEach(el => (el.hidden = false));
  questionTitle.textContent = elements[index].title;
  question.textContent = elements[index].question;
  additionalQuestion.innerHTML = '';
  if (mode === 'No') updateQuestionWithNoMode(elements, index);
  if (mode === 'prev') {
    restoreOptions(elements, index);
  }
};
const restoreOptions = (elements, index) => {
  console.log(answersObj, index);
  if (answersObj[index].ans[0] === 'Yes') {
    originalOpt[0].checked = true;
  } else {
    updateQuestionWithNoMode(elements, index);
    console.log(answersObj[index].ans);
    let additionalOpt = document.querySelectorAll('.additionalOpt');
    for (let i = 1; i < answersObj[index].ans.length; i++) {
      let cur = answersObj[index].ans[i] - 1;
      additionalOpt[cur].checked = true;
    }
  }
};
const updateQuestionWithNoMode = (elements, index) => {
  let template = '';
  const selections = elements[index].additional.selections;
  question.textContent = elements[index].additional.description;
  originalOpt.forEach(el => (el.hidden = true));
  originalOptLabel.forEach(el => (el.hidden = true));
  selections.forEach(el => {
    template += ` <div>
      <input type="checkbox" name="additionalOpt" value="No" class="additionalOpt" />
      <label for="no" class="additionalOptLebel">${el}</label>
    </div>`;
  });
  additionalQuestion.innerHTML = template;
  recordAnswer();
};

const recordAnswer = () => {
  let additionalOpt = document.querySelectorAll('.additionalOpt');
  additionalOpt.forEach((el, i) => {
    el.addEventListener('click', function () {
      if (el.checked) {
        currentAnswer.ans.push(i + 1);
      }else {
        let index = currentAnswer.ans.indexOf(i + 1);
        if (index > -1) {
          currentAnswer.ans.splice(index, 1);
        }
      }
    });
  });
};

const openWithData = (url, data) => {
  window.localStorage.ans = JSON.stringify(data);
  // console.log('open with data');
  // console.log(data);
  window.open(url, '_self');
};
