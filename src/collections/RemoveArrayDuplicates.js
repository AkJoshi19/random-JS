const array = ['R', 'T', 'V', 'R', 'S', 'H', 'R','',''];

/* 1 Way
const array2 =  [...new Set(array)];
console.log(array2);
*/

/**  2 Way  
const uniqueSet = new Set(array);
console.log(uniqueSet);

const backToArray = [...uniqueSet];
console.log(backToArray);
*/

/*
array.filter((item, index) =>{

    console.log(
        item,
        index,
        array.indexOf(item),
        array.indexOf(item) == index    
    );
})*/

//const newArray =  array.filter((item, index) =>  array.indexOf(item) !== index );
const newArray =  array.filter((item, index) =>  {
    return array.indexOf(item) !== index
} );

console.log(newArray);
