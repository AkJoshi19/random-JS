var example = 'potato potato';
console.log(example.replace(/pot/, "tom")); 
// "tomato potato"
console.log(example.replace(/pot/g, "tom")); 
// "tomato tomato"