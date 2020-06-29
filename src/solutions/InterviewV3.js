



//const x = 'constructor';
//console.log(x[x](01));

//console.log(0.1 +0.2);

//console.log(('hi').__proto__.__proto__.__proto__);


let x = function(){
    console.log(arguments);
    return [].slice.call(arguments).length; 
}

console.log(x(1,2,3,4,3));

