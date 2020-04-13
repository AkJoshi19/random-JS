
// ProptoTypePattern
var peopleProto = function (){

}


peopleProto.prototype.age = 0;
peopleProto.prototype.name = 'No Name';
peopleProto.prototype.city = 'No City';

peopleProto.prototype.printPerson = function(){

    console.log('Info Name '+this.name +'  ,  Age '+this.age ,' CIty '+this.city +' PinCode '+this.Pincode);
}

var person1 = new peopleProto();
//person1.name = 'AK';
person1.age = 20;
person1.city = 'CA';
person1.Pincode = '12675';

var person2 = new peopleProto();
person2.name = 'John';
person2.age = 12;
person2.city = 'FR';


//person1.printPerson();
//person2.printPerson();

console.log('name' in person1);
//console.log('blob' in person1);

console.log(person1.hasOwnProperty('name'));