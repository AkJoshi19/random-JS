function greeting() {
    console.log('Hello World');
  }
  // Invoking the function
  greeting();  // prints 'Hello World'


  // We can add properties to functions like we do with objects
greeting.lang = 'English';
// Prints 'English'
console.log(greeting.lang);