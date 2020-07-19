
/**
 * 
 * 
     A generator is somewhere identical to the regular function except that:
     When the generator gets called, it doesn't run its code. Instead, it returns a special object which is called as 'Generator Object' for managing the execution.
    The generator function can return (or yield) the control back to the caller at any point.
    Unlike the regular function, the generator can return (or yield) the multiple values, one after another, on the requirement.
 *  */

function* gen() {
    yield 100;
    yield 101;
    yield 200;
}
// Calling the Generator Function  
var mygen = gen();
console.log(mygen.next());
console.log(mygen.next());
console.log(mygen.next()); 
console.log(mygen.next()); 