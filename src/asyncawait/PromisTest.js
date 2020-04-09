let cleanRoom = function () {

    return new Promise(function (resolve, reject) {

        resolve('clean the room');
    });
};

let removeTheGarbeg = function (message) {

    return new Promise(function (resolve, reject) {

        resolve(message + ' remove the garbej')

    });
};

let getTheIceCream = function (message) {

    return new Promise(function (resolve, reject) {

        resolve('Get The Ice Cream ' + message)

    });
};

/* cleanRoom().then(function(message){

    return removeTheGarbeg(message);

}).then(function (message){

    console.log(message);
}); */

var fetchData = function (data) {

    return new Promise(function (resolve, reject) {
        resolve(data);
    });
};

let myTestFunction = function (message) {

    var output = '';
    var array = ['h', 'e', 'l', 'l', 'o'];

    for (var i = 0; i < array.length; i++) {

        fetchData(array[i]).then(function (data) {
            console.log(data)
        });
    }

};

myTestFunction();