

const tuple =  Object.freeze(["Bob" , 24])

let [name, age] = tuple
console.log(name); // "Bob"
console.log(age); // 24



const tuple1 =  Object.freeze({name:"Bob" , age:24})

console.log(tuple1.name); // "Bob"
console.log(tuple1.age); // 24


function show(...args) {  
 
 
    let sum = 0;  
     for (let i of args) {  
        sum += i;  
    } 
    let elementArray = [...args];
    elementArray.forEach(element =>{
        sum += element;  
    })
    
    
    console.log("Sum = "+sum);  
  }  
    
  show(10, 20, 30);  