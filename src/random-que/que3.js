
function y(){
    console.log(this.length);
}

var x = {

    length:5,
    method: function(y){
        console.log(arguments[0]);
        arguments[0]();
    }
};

x.method(y , 1);