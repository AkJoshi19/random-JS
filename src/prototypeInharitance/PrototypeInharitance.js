
// rembember  
// typeof car           :: is a function
// typeof car.prototype :: is an object


let car =  function(modelName, modelYear){

    this.modelName = modelName;
    this.modelYear = modelYear;
}

/** Adding specific property to car function object*/ 
car.setEngininfo = function(enginInfo){    
    this.enginInfo = enginInfo;
}

car.getEnginNo = function(){
    return this.enginInfo;
}

car.setEngininfo('Chasis 4564654JHVJHKJ')



/*
 * Prototype Inharitance
*/
car.prototype.getModelName = function(){

    return 'this is '+this.modelName;
}

car.prototype.getModelYear = function(){

    return 'Manufacting year '+this.modelYear;
}

let toyota = new car('toyota' , '1999');

/**
 *  toyota object access method though 'Prototype Inharitance' 
 *  */ 
console.log(toyota.getModelName()) ; // output: toyota
console.log(toyota.getModelYear()) ; // output: 1999

//console.log('car has own property ',car.__proto__.hasOwnProperty('getModelName'));  
//console.log('has own property ',toyota.__proto__.hasOwnProperty('getModelName'));  

 console.log('Engin Info ',car.getEnginNo());   // output: Chasis 4564654JHVJHKJ
 //console.log('asdasdasd ',toyota.getEngineNo());//** Will give error  