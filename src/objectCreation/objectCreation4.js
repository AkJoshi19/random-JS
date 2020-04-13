
// DynamicProptoTypePattern
var peopleProto = function (age, name, city){

    this.age = age;
    this.name = name;
    this.city = city;

    if(typeof this.printPerson !== 'function'){

        peopleProto.prototype.printPerson = function(){

            console.log('Info Name '+this.name +'  ,  Age '+this.age ,' CIty '+this.city +' PinCode '+this.Pincode);
        }
    }
}


var person1 = new peopleProto(20, 'AK', 'CA');
var person2 = new peopleProto(12, 'JOHN', 'FR');

person1.printPerson();
person2.printPerson();
