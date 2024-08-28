'use strict';
const email = document.querySelector('#email');
const submitBtn = document.querySelector('.btn.submit');
const results = document.querySelector('.resultList');
const singleResult = document.querySelector('.singleResult');
let resetBtn = document.querySelector('.btn.reset');
let retrieveBtn = document.querySelector('.btn.retrieve');
let downloadIcon = document.querySelector('#download');

downloadIcon.addEventListener('click', function () {
    let iframe = document.querySelector('#myFrame');
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
resetBtn.addEventListener('click', function () {
    window.location = './index.html';
});

retrieveBtn.addEventListener('click', function () {
    window.location = './retrive.html';
});

submitBtn.addEventListener('click', function () {
    let emailAddress = email.value;
    let link =
        'http://localhost:8080/api/results/GetUser?email=' + emailAddress;
    fetch(link, {
        method: 'GET',
        mode: 'no-cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {},
    })
        .then(response => response.json())
        .then(data => displayResult(data));

    document.getElementById("resultList").style.display = "block";
});

const convertDate = date => {
    let year = date.getFullYear();

    let month = (1 + date.getMonth()).toString();
    month = month.length > 1 ? month : '0' + month;

    let day = date.getDate().toString();
    day = day.length > 1 ? day : '0' + day;

    let hour = date.getHours().toString();
    hour = hour.length > 1 ? hour : '0' + hour;

    let minute = date.getMinutes().toString();
    minute = minute.length > 1 ? minute : '0' + minute;

    return `${year}-${month}-${day} ${hour}:${minute}`;
};

let sortedData;
const displayResult = data => {
    sortedData = data.sort(function (a, b) {
        return new Date(b.date_added) - new Date(a.date_added);
    });
    let template = '';
    sortedData.forEach((d, i) => {
        let date = convertDate(new Date(d.date_added));
        template += `<li>
                    <a href="#singleResult${i}"
                    onclick="clickable(event,${i}); hideElements();">
                    ${date}
                    ${d.result}
                    </a>
                    </li> `;
    });
    results.innerHTML = template;
};

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

function hideElements(){
    document.getElementById("detailsContainer").style.display = "none";
    document.getElementById("allResultsContainer").style.display = "none";
    document.getElementById("resultList").style.display = "none";
    document.getElementById("btnRetrieve").style.display = "inline-block";
}


const clickable = (e, i) => {
    if(sortedData){
        let cur = sortedData[i];
        let objArray = [
            { title: 'culture', ans: cur.culture },
            { title: 'SERVICE', ans: cur.service },
            { title: 'TEAM', ans: cur.team },
            { title: 'PROCESS', ans: cur.process },
            { title: 'ARCHITECTURE', ans: cur.architecture },
            { title: 'MAINTENANCE', ans: cur.maintenance },
            { title: 'DELIVERY', ans: cur.delivery },
            { title: 'PROVISIONING', ans: cur.provisioning },
            { title: 'INFRASTRUCTURE', ans: cur.infrastructure },
        ];
        window.localStorage.convertedResult = JSON.stringify(objArray);
        window.localStorage.finnalResult = cur.result;

        singleResult.classList.remove('hide');
        downloadIcon.classList.remove('hide');
        downloadIcon.style.cursor="pointer";

        let template2 = `
             <p id="result">Your result is: ${cur.result}</p>
            <iframe id="myFrame" src="./chart.html"  title="Result chart" width="1000" height="500" frameBorder="0">`;

        singleResult.innerHTML = template2;
    }
};

let index = 1;
const convertEntry = obj => {
    let temp = '';
    for (let [key, value] of Object.entries(obj)) {
        temp += ` <tr><td>${key}</td>
                <td>${value}</td>
                <td>${converScore(value,index)}</td>`;
    }
    return temp;
};
