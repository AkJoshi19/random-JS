

function createEmployee(firstName, lastName, designation, age, gender){

    var employee = {};

    employee.firstName = firstName;
    employee.lastName = lastName;
    employee.designation = designation;
    employee.age = age;
    employee.gender = gender;

    return employee;
}

//var emp3 = createEmployee('','');
//console.log(emp3);


function createEmployee2(firstName, lastName, designation, age, gender){


    this.firstName = firstName;
    this.lastName = lastName;
    this.designation = designation;
    this.age = age;
    this.gender = gender;
}

var emp4 = new createEmployee2('','');

console.log(emp4);



