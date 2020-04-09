
var json_data = '{"order_data": [   {"order_no": 2,	"question_id": "21"},    {"order_no": 3,	"question_id": "18"},    {"order_no": 4,	"question_id": "19"},    {"order_no": 5,	"question_id": "35"},    {"order_no": 6,	"question_id": "36"}, {"order_no": 1,"question_id": "20"}]}';

// JavaScript array of JavaScript objects

json_data = JSON.parse(json_data) ;
json_data = json_data.order_data;

var valueMap = new Map();

 json_data.forEach(element => {

    valueMap.set(element.order_no , element.question_id) ;
}); 


// sort by value
const mapSort1 = new Map([...valueMap.entries()].sort((a, b) =>   a[0] -b[0]));
console.log(mapSort1);


