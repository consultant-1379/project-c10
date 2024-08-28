const chai = window.chai
const expect = chai.expect

/*************************************** scriptSbumit.js ************************************************************/
//
//Build data function
let mockAns = JSON.stringify([{title:"a",ans:['Yes']},{title:"b",ans:['No']},{title:"c",ans:['No',2,4]},{title:"d",ans:['No',1,3]},{title:"e",ans:['Yes']}]);
window.localStorage.ans = mockAns;
describe('Convert answers to numerical scores (i.e Answer "Yes" = 40)', () => {
    it('should convert answers into scores given "[Yes],[Yes],[2,4],[1,3],[Yes]"', () => {
        expect(JSON.stringify(buildData())).to.deep.equal(JSON.stringify([{title:"a",ans:40},{title:"b",ans:25},{title:"c",ans:30},{title:"d",ans:20},{title:"e",ans:40}]))
    })
})

//
//Calculate result for number function
let oddArray1 = [1,3,5,7];
let oddArray2 = [11,13,15,17];
let oddArray3 = [15,37,53,71];

let evenArray1 = [2,4,6,8];
let evenArray2 = [20,40,62,82];
let evenArray3 = [2,10,8,46];

let mixedArray1 = [3,4,6,9];
let mixedArray2 = [34,41,64,97];
let mixedArray3 = [56,74,86,91];
let empty = [];
describe('Get score 30 for all even number array with "calResultForNo" function', () => {
  it('calResultForNo function should give score depending on the given array (i.e. all even in array = 30; all odd in array = 20; mixed/empty = 25)', () => {
    expect(calResultForNo(evenArray1)).to.deep.equal(30)
    expect(calResultForNo(evenArray2)).to.deep.equal(30)
    expect(calResultForNo(evenArray3)).to.deep.equal(30)
  })
})

describe('Get score 20 for all even number array with "calResultForNo"o function', () => {
  it('calResultForNo function should give score depending on the given array (i.e. all even in array = 30; all odd in array = 20; mixed/empty = 25)', () => {
    expect(calResultForNo(oddArray1)).to.deep.equal(20)
    expect(calResultForNo(oddArray2)).to.deep.equal(20)
    expect(calResultForNo(oddArray3)).to.deep.equal(20)
  })
})

describe('Get score 25 for all mixed number or empty array with "calResultForNo" function', () => {
  it('calResultForNo function should give score depending on the given array (i.e. all even in array = 30; all odd in array = 20; mixed/empty = 25)', () => {
    expect(calResultForNo(mixedArray1)).to.deep.equal(25)
    expect(calResultForNo(mixedArray2)).to.deep.equal(25)
    expect(calResultForNo(mixedArray3)).to.deep.equal(25)
  })
})

//
//Finding mode of results array function
let mockResultsArray = buildData2();
describe('Find mode of array', () => {
  it('should give the mode of the array (i.e. Mode of [40,25,30,20,40] is 40', () => {
    expect(mode(mockResultsArray)).to.deep.equal(40)
  })
})

//
//Calculate final result
describe('Get final result of test (i.e. Mode 40 = cloud native, Mode 25 = agile-ish etc.)', () => {
  it('should label the result of test based on mode of scores', () => {
    expect(calFinalResult(mockResultsArray)).to.deep.equal("Cloud Native")
  })
})


/*************************************** result.js ************************************************************/
describe('Get stages score equivalent', () => {
  it('should convert score into specific stage description (i.e.Culture stage = Individualist)', () => {
    expect(converScore(40,1)).to.deep.equal("Collaborative")
    expect(converScore(25,2)).to.deep.equal("Long-term plan / Feature driven")
    expect(converScore(30,3)).to.deep.equal("DevOps/SRE")
    expect(converScore(20,4)).to.deep.equal("Waterfall")
    expect(converScore(30,5)).to.deep.equal("Microservices")
    expect(converScore(40,6)).to.deep.equal("Full observability & self-healing")
  })
})
