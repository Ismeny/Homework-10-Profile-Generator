//create Employee parent class
class Employee {
    constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    }

    // method to console dot log the name
    getName() {
        console.log(this.name);
    }
    // method to console dot log the id
    getId() {
        console.log(this.id);
    }
    // method to console dot log the email
    getEmail() {
        console.log(this.email);
    }
    // method to console dot log the Employee
    getRole() {
        console.log("Employee")
        return 'Employee';
    }
    
}

module.exports = Employee;