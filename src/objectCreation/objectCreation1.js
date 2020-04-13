
// FactoryPattern
var employeeFactory = function (firstName, lastName, designation, age, gender){

    var employee = {};

    employee.firstName = firstName;
    employee.lastName = lastName;
    employee.designation = designation;
    employee.age = age;
    employee.gender = gender;

    employee.printName = function(){
        console.log('Employee Info  FirstName: '+employee.firstName +" ##LastName: "+ employee.lastName);
    }

    return employee;
}

let employeeObj = employeeFactory('AK' , 'Joshi' , 'Manager' , 30, 'Male');
employeeObj.printName();