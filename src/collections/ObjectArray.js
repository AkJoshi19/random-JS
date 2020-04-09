
let x = {
    a:1,
    b:2
};

const peopleObj = {
    jim: {
      name: "jim",
      age: 20
    },
    tim: {
      name: "tim",
      age: 22
    }
  }

/**
 * 
 */
//const xArray = Object.entries(x);


//const xArray = Object.values(x);
const xArray = Object.keys(peopleObj).map(i,v  => v);
console.log(xArray);