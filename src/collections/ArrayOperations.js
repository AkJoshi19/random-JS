

/*
const matrix = [[1,2,3], [4,5,6] ];

const flatArray = matrix.flat(1).reduce( (a,v	)=>{

  return a+v
} , 4);

console.log(flatArray);*/

/*
const fromScratch = Array.from({length : 5} , (v, i) => '');
console.log(fromScratch);*/


/*const fromScratch = (new Array(5)).fill(0);
console.log(fromScratch);*/


/*const fromScratch = (new Array(5)).fill(0).map((v, i)=>{

    return i;
});
console.log(fromScratch);*/

const func = function(){

    console.log(Array.from(arguments).join(''));
}

console.log(func('A', 'N', 'J', 'A', 'N', 'I'));