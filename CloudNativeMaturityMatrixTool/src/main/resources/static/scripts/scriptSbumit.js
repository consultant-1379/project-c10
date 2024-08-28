'use strict';

window.localStorage.finnalResult = null;
window.localStorage.convertedResult =null;
let submitBtn = document.querySelector('.btn.submit');
const email = document.getElementById('email');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const cname = document.getElementById('cname');
const resultObj = JSON.parse(window.localStorage.ans);

const buildData = () => {
  let results = resultObj.map(el => {
    if (el.ans[0] === 'Yes') {
      el.ans = 40;
    } else if (el.ans[0] === 'No') {
      el.ans.shift();
      el.ans = calResultForNo(el.ans);
    } else {
      el.ans = 25;
    }
    return el;
  });
  return results;
};

const isAllEven = (value, index, ar) => {
  if (value % 2 == 0) {
    return true;
  }
};
const isAllOdd = (value, index, ar) => {
  if (value % 2 != 0) {
    return true;
  }
};

const calResultForNo = ansArray => {
  let result = 2.5;

  if (ansArray.length === 0) {
    result = 2.5;
  } else {
    if (ansArray.every(isAllEven)) {
      result = 3;
    }
    if (ansArray.every(isAllOdd)) {
      result = 2;
    }
  }
  return result*10;
};

//Added
const mode = resultsArray => {
   const obj = {};
   resultsArray.forEach(el => {
        if(!obj[el.ans]){
            obj[el.ans] = 1;
        } else {
            obj[el.ans] += 1;
        }
   })
   let highestValue = 0;
   let highestValueKey = -Infinity;
   for(let key in obj){
     const value = parseFloat(obj[key]);
     if (`${value}` > highestValue){
        highestValue = parseFloat(`${value}`);
        highestValueKey = parseFloat(`${key}`);
     }
   }
   return highestValueKey;
}

const calFinalResult = resultsArray => {
  let calculatedResult = '';
  let topResult = mode(resultsArray);

  if(topResult == 0){ calculatedResult = 'No Process'}
  if(topResult > 0 && topResult < 0){ calculatedResult = 'Waterfall-ish'}
  if(topResult == 20){ calculatedResult = 'Waterfall'}
  if(topResult > 20 && topResult < 30){ calculatedResult = 'Agile-ish'}
  if(topResult == 30){ calculatedResult = 'Agile'}
  if(topResult > 30 && topResult < 40){ calculatedResult = 'Cloud-Native-ish'}
  if(topResult == 40){ calculatedResult = 'Cloud Native'}

  return calculatedResult;

};

if (submitBtn) {
  submitBtn.addEventListener('click', function () {
    let resultsArray = buildData();
    let finnalResult = calFinalResult(resultsArray);
    let resultsObj = {};
    resultsArray.forEach(el => {
      resultsObj[el.title] = el.ans;
    });

    let data = {
      email: email.value,
      firstName: fname.value,
      lastName: lname.value,
      companyName: cname.value,
      result: finnalResult,
    };
    data = Object.assign(data, resultsObj);

    fetch('http://localhost:8080/api/results/add', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then(res => {
      if(res.status === 200){
        window.localStorage.finnalResult = finnalResult;
        window.localStorage.convertedResult = JSON.stringify(resultsArray);
        window.open('./result.html', '_self');
      }else{
        alert("Your record has not been recorded, please try again")
      }
    });
  });
}

