'use strict';

var yLabels = {
    1 : 'INFRASTRUCTURE', 2 : 'PROVISIONING', 3 : 'DELIVERY', 4 : 'MAINTENANCE',
    5 : 'ARCHITECTURE', 6 : 'PROCESS', 7 : 'TEAM', 8 : 'PROD/SERVICE DESIGN',
    9 : 'CULTURE', 10 : ' '
}

var xLabels = {
    10 : ' ', 20 : 'NO PROCESS', 30 : 'WATERFALL', 40 : 'AGILE',
    50 : 'CLOUD NATIVE', 60 : 'NEXT', 70 : ' '
}

var texts = [
  {"text":"Individualist", "x" : 3.4, "y" : 12},
  {"text":"Predictive", "x" : 2.3, "y" : 12},
  {"text":"Iterative", "x" : 1.75, "y" : 12},
  {"text":"Collaborative", "x" : 1.4, "y" : 12},
  {"text":"Experimental", "x" : 1.175, "y" : 12},
  {"text":"Arbitrary", "x" : 3.4, "y" : 5.5},
  {"text":"Long-term plan", "x" : 2.3, "y" : 5.5},
  {"text":"Feature driven", "x" : 1.75, "y" : 5.5},
  {"text":"Data driven", "x" : 1.4, "y" : 5.5},
  {"text":"All driven", "x" : 1.175, "y" : 5.5},
  {"text":"No organization", "x" : 3.4, "y" : 3.7},
  {"text":"Hierarchy", "x" : 2.3, "y" : 3.7},
  {"text":"Cross-functional", "x" : 1.75, "y" : 3.7},
  {"text":"DevOps / SRE", "x" : 1.4, "y" : 3.7},
  {"text":"Internal supply chains", "x" : 1.175, "y" : 3.7},
  {"text":"Random", "x" : 3.4, "y" : 2.7},
  {"text":"Waterfall", "x" : 2.3, "y" : 2.7},
  {"text":"Agile", "x" : 1.75, "y" : 2.7},
  {"text":"Design Thinking + Agile", "x" : 1.4, "y" : 2.7},
  {"text":"Distributed", "x" : 1.175, "y" : 2.7},
  {"text":"Emerging from trial & error", "x" : 3.4, "y" : 2.1},
  {"text":"Tightly coupled monolith", "x" : 2.3, "y" : 2.1},
  {"text":"Client server", "x" : 1.75, "y" : 2.1},
  {"text":"Microservices", "x" : 1.4, "y" : 2.1},
  {"text":"Functions", "x" : 1.175, "y" : 2.1},
  {"text":"Response to user complaints", "x" : 3.4, "y" : 1.7},
  {"text":"Ad-hoc monitoring", "x" : 2.3, "y" : 1.7},
  {"text":"Alerting", "x" : 1.75, "y" : 1.7},
  {"text":"Full observability & self-healing", "x" : 1.4, "y" : 1.7},
  {"text":"Preventive ML, AI", "x" : 1.175, "y" : 1.7},
  {"text":"Irregular releases", "x" : 3.4, "y" : 1.45},
  {"text":"Periodic releases", "x" : 2.3, "y" : 1.45},
  {"text":"Continuous Integration", "x" : 1.75, "y" : 1.45},
  {"text":"Continuous Delivery", "x" : 1.4, "y" : 1.45},
  {"text":"Continuous Deployment", "x" : 1.175, "y" : 1.45},
  {"text":"Manual", "x" : 3.4, "y" : 1.25},
  {"text":"Scripted", "x" : 2.3, "y" : 1.25},
  {"text":"Config management", "x" : 1.75, "y" : 1.25},
  {"text":"Orchestration", "x" : 1.4, "y" : 1.25},
  {"text":"Serverless", "x" : 1.175, "y" : 1.25},
  {"text":"Single server", "x" : 3.4, "y" : 1.125},
  {"text":"Multi servers", "x" : 2.3, "y" : 1.125},
  {"text":"VMs", "x":1.75, "y" : 1.125},
  {"text":"Containers / hybrid cloud", "x" : 1.4, "y" : 1.125},
  {"text":"Edge computing", "x":1.175, "y" : 1.125}
]

//Default data
let userData = [{x: 40,y: 1},{x:40,y: 2},{x: 40,y: 3},{x: 30,y: 4},{x: 40,y: 5},{x: 40,y: 6},{x: 45,y: 7},{x: 40,y: 8},{x: 30,y: 9}]

//Update user data
const convertedResult = JSON.parse(window.localStorage.convertedResult);
const reversedConvertedResult = convertedResult.reverse();
console.log(reversedConvertedResult);

let index= 0;
reversedConvertedResult.forEach(el => {
  let newValue = el.ans + 10;
  userData[index].x = newValue;
  index++;
});

var userPlot = {
         label: "USER",
         showLine: true,
         lineTension: 0,
         fill: +4,
         borderColor: 'rgba(38, 42, 163)',
         borderDash: [4,2],
         backgroundColor: "rgba(255, 71, 81, 0.1)",
         data: userData
}


Chart.plugins.register({
  afterDraw: chart => {
      var ctx = chart.chart.ctx;
      ctx.save();
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.font = "11px Arial";
      ctx.fillStyle = "gray";
      texts.forEach(output => ctx.fillText(output.text, chart.chart.width / output.x, chart.chart.height / output.y));
      ctx.restore();
  }
});

new Chart(document.getElementById("line-chart"), {
  type: 'scatter',
   data: {
      datasets: [{
         label: "NO PROCESS",
         showLine: true,
         fill: +3,
         backgroundColor: "rgba(38, 42, 203, .2)",
         borderColor: 'rgba(0,0,0,0)',
         data: [{x: 20,y: 1},{x: 20,y: 2},{x: 20,y: 3},{x: 20,y: 4},{x: 20,y: 5},{x: 20,y: 6},{x: 20,y: 7},{x: 20,y: 8},{x: 20,y: 9},]
      },{
         label: "WATERFALL",
         showLine: true,
         borderColor: 'rgba(0,0,0,0)',
         data: [{x: 30,y: 1},{x: 30,y: 2},{x: 30,y: 3},{x: 30,y: 4},{x: 30,y: 5},{x: 30,y: 6},{x: 30,y: 7},{x: 30,y: 8},{x: 30,y: 9},]
      },{
         label: "AGILE",
         showLine: true,
         borderColor: 'rgba(0,0,0,0)',
         data: [{x: 40,y: 1},{x: 40,y: 2},{x: 40,y: 3},{x: 40,y: 4},{x: 40,y: 5},{x: 40,y: 6},{x: 40,y: 7},{x: 40,y: 8},{x: 40,y: 9},]
      },
      userPlot,
      {
         label: "CLOUD NATIVE",
         showLine: true,
         lineTension: 0,
         borderColor: 'rgba(255, 71, 81)',
         borderDash: [4,2],
         data: [{x: 50,y: 1},{x: 50,y: 2},{x: 50,y: 3},{x: 50,y: 4},{x: 50,y: 5},{x: 50,y: 6},{x: 50,y: 7},{x: 50,y: 8},{x: 50,y: 9},]
      },
      {
         label: "NEXT",
         showLine: true,
         borderColor: 'rgba(0,0,0,0)',
         data: [{x: 60,y: 1},{x: 60,y: 2},{x: 60,y: 3},{x: 60,y: 4},{x: 60,y: 5},{x: 60,y: 6},{x: 60,y: 7},{x: 60,y: 8},{x: 60,y: 9},]}, ]
   },

  options: {
       tooltips: { enabled: false},
  legend: { display: false },
    scales: {
        yAxes: [{
            ticks: {
            min: 1,
            max: 10,
            stepSize: 1,
            fontStyle: "bold",
                callback: function(value, index, values) {
                    return yLabels[value];
                }
            }
        }],
         xAxes: [{
         gridLines: {
                color: "rgba(0, 0, 0, 0)",
            },
            ticks: {
            min: 10,
            max: 70,
            stepSize: 10,
            fontStyle: "bold",
                callback: function(value, index, values) {
                    return xLabels[value];
                }
            }
        }]
    }
  }
});
