var sayHello = function(a){

    return function(b){

        return function(c){

            console.log("Values are a: "+a + " b: "+b+" c: "+c);
        }
    }
}

//
sayHello(2)(3)(5);