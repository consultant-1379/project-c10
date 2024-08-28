'use strick';

const convertedResult = JSON.parse(window.localStorage.convertedResult);
const finnalResult = window.localStorage.finnalResult;
let resultP = document.querySelector('#result');
let downloadIcon = document.querySelector('#download');
let graph = document.querySelector('.graphCont');
let resetBtn = document.querySelector('.btn.reset');

resetBtn.addEventListener('click', function () {
   window.location = './index.html';
});

resultP.innerHTML = resultP.innerText + ' ' + finnalResult;

downloadIcon.addEventListener('click', function () {
    let iframe = document.querySelector('#myFrame1');
    let canvas = iframe.contentWindow.document.querySelector('#line-chart');
    if (canvas) {
        var image = canvas.toDataURL();

        var tmpLink = document.createElement('a');
        tmpLink.download = 'image.jpg';
        tmpLink.href = image;

        document.body.appendChild(tmpLink);
        tmpLink.click();
        document.body.removeChild(tmpLink);
    }
});

console.log(convertedResult);

let template = `<tr>
<th>Stage</th>
<th>Score</th> 
<th>Result</th></tr>`;

const converScore = (score,index) => {
  let converedScore = ""

  let scoreMap = new Map([
       [1,["Individualist","Predictive","Iterative","Collaborative","Experimental"]],
       [2,["Arbitrary","Long-term plan","Feature driven","Data driven","All driven"]],
       [3,["No organization","Hierarchy","Cross-functional teams","DevOps/SRE","Internal supply chains"]],
       [4,["Random","Waterfall","Agile(Scrum/Kanban)","Design Thinking + Agile + Lean","Distributed, self-organized"]],
       [5,["Emerging from trial and error","Tightly coupled monolith","Client server","Microservices","Functions"]],
       [6,["Respond to user complaints","Ad-hoc monitoring","Alerting","Full observability & self-healing","Preventative ML, AI"]],
       [7,["Irregular releases","Periodic releases","Continuous Integration","Continuous Delivery","Continuous Deployment"]],
       [8,["Manual","Scripted","Config. management (Puppet/Chef/Ansible)","Orchestration (Kubernetes)","Serverless"]],
       [9,["Single Server","Multiple Servers","VMs (pets)","Containers/hybrid cloud (cattle)","Edge computing"]]
  ])

  if (score >= 0 && score <= 10) {
    converedScore = scoreMap.get(index)[0];
  } else if (score > 10 && score < 20) {
    converedScore = scoreMap.get(index)[0] + " / " + scoreMap.get(index)[1];
  } else if (score === 20) {
    converedScore = scoreMap.get(index)[1];
  } else if (score > 20 && score < 30) {
    converedScore = scoreMap.get(index)[1] + " / " + scoreMap.get(index)[2];
  } else if (score === 30) {
    converedScore = scoreMap.get(index)[3];
  } else if (score > 30 && score < 40) {
    converedScore = scoreMap.get(index)[2] + " / " + scoreMap.get(index)[3];
  } else if (score === 40) {
    converedScore = scoreMap.get(index)[3];
  } else {
    converedScore = scoreMap.get(index)[4];
  }
  return converedScore;
};

let index =1;
convertedResult.forEach(el => {
  template += `<tr>
    <td>${el.title}</td>
    <td>${el.ans}</td>
    <td>${converScore(el.ans,index)}</td>
  </tr> `;
});

template2 = `<iframe id="myFrame1" src="./chart.html" title="Result chart" width="90%" height="100%" frameBorder="0">`

graph.innerHTML = template2;

