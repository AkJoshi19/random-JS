 function testblock() {

    try {
        throw  new Error('Hello World');
        console.log('the code is working');
    } catch (error) {

        console.log('Hello');
        console.log(error);
      //next(error);
    }
  }

  testblock();