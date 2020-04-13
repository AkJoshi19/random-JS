let x = function(){
    console.log('This is X');
}

let y = function(callback){
    console.log('In Y');
    callback();
}

y(x);