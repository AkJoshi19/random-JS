
// ObjectPattern
var objectFactory = function (firstName, lastName, designation, age, gender){


    this.firstName = firstName;
    this.lastName = lastName;
    this.designation = designation;
    this.age = age;
    this.gender = gender;

    this.printName = function(){
        console.log('Employee Info  FirstName: '+this.firstName +" ##LastName: "+ this.lastName);
    }

}

let employeeObj = new objectFactory('AK' , 'Joshi' , 'Manager' , 30, 'Male');
employeeObj.printName();