

/*
const myAwesomeArray = [5, 4, 3, 2, 1]
console.log(myAwesomeArray.map(x => x )); 
*/

const myAwesomeArray = [1, 2, 3, 4, 5]
//myAwesomeArray.forEach(x => x * x).reduce((total, value) => total + value)
//>>>>>>>>>>>>> Uncaught TypeError: Cannot read property 'reduce' of undefined
myAwesomeArray.map(x => x * x).reduce((total, value) =>

{
    console.log('taotal :'+ total);
    console.log('value : '+value);
    console.log('total + value' +total + value); 
    return total +value;
}
)
//>>>>>>>>>>>>>return value: 55