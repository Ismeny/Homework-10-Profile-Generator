const Employee = require('./Employee')

class Engineer extends Employee {
    constructor(name, id, email, github) {
    super (name, id, email)
    this.github = github;
    }
    //create method to print the github profile username
    getGithub() {
        console.log(this.github);
        return this.github
    }

    //getRole() overriden to return Engineer
    getRole() {
        console.log("Engineer");
        return 'Engineer';
    }
}
 

module.exports = Engineer;