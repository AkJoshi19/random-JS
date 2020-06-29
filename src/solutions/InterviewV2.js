

function y(){

    console.log(this.length);
}


var x = {

    length: 5,
    method : function(y){
        arguments[0]();
    }
};

