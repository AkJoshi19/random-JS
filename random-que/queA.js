
var array = [1,2,3,4,5,6,7];


var double = (array) =>{

    var length = array.length;

  /* array.forEach(element => {
        array.push(element);
    });*/

  //  array = [...array, ...array];

  array =   array.concat(array);

    console.log(array);
    return array;
}

console.log(double(array).length);