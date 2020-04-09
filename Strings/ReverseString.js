let x = 'hi';
let y = 'ih';

const reverseString = (str) =>{

  
  /*  var spliteArray = str.split('');
    var reverseArray =   spliteArray.reverse();
    var joinArray =   reverseArray.join('');*/

    return str.split('').reverse().join('');
}

console.log(reverseString(x));
