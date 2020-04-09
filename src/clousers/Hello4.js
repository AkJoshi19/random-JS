 function createCounter() {
     let counter = 0
     const myFunction = function() {
        counter = counter + 1
       return counter
      }
       return myFunction
     }
     const increment = createCounter()
    const c1 = increment()
    const c2 = increment()
    const c3 = increment()
    console.log('example increment', c1, c2, c3)



let c = 4
const addX = x => n => n + x
const addThree = addX(3)
let d = addThree(c)
console.log('example partial application', d)