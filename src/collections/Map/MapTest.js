
var myMap ;
{

    const x = 'X';

    //var myMap = new Map();
    myMap = new WeakMap();
    myMap.set(x , 'Hello Wolrd');
}


console.log(myMap);