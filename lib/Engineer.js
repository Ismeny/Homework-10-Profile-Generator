const Employee = require('./Employee')

class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
    super (name, id, email)
    this.github = github;
    }

    //getRole() overriden to return Engineer
    getRole() {
        console.log("Engineer");
        return 'Engineer';
    }
}
 
module.exports = Engineer;