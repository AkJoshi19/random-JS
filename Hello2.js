

// JavaScript array of JavaScript objects

var data = [];

var valueMap = new Map();

     json_data.forEach(element => {

    valueMap.set(element.order_no , element.question_id) ;
}); 


// sort by value
const mapSort1 = new Map([...valueMap.entries()].sort((a, b) =>   a[0] -b[0]));
console.log(valueMap.get(55));


