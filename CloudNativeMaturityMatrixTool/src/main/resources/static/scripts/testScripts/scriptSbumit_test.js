//Build data
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


//is all even
const isAllEven = (value, index, ar) => {
  if (value % 2 == 0) {
    return true;
  }
};

//is all Odd
const isAllOdd = (value, index, ar) => {
  if (value % 2 != 0) {
    return true;
  }
};

//calculate score for even or odd numbers
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

//Mode function
const resultObj2 = JSON.parse(window.localStorage.ans);
const buildData2 = () => {
  let results2 = resultObj2.map(el => {
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
  return results2;
};

const mode = resultsArray => {
   const obj = {};
   Array.from(resultsArray).forEach(el => {
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

//final result
const resultObj3 = JSON.parse(window.localStorage.ans);
const buildData3 = () => {
  let results3 = resultObj3.map(el => {
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
  return results3;
};

const mode2 = resultsArray => {
   const obj = {};
   Array.from(resultsArray).forEach(el => {
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
  topResult = mode2(resultsArray);

  if(topResult == 0){ calculatedResult = 'No Process'}
  if(topResult > 0 && topResult < 0){ calculatedResult = 'Waterfall-ish'}
  if(topResult == 20){ calculatedResult = 'Waterfall'}
  if(topResult > 20 && topResult < 30){ calculatedResult = 'Agile-ish'}
  if(topResult == 30){ calculatedResult = 'Agile'}
  if(topResult > 30 && topResult < 40){ calculatedResult = 'Cloud-Native-ish'}
  if(topResult == 40){ calculatedResult = 'Cloud Native'}

  return calculatedResult;

};