// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee.js");

class Engineer extends Employee {
    constructor(id, githubUsername ) {
      super(name,id,email);
      this.githubUsername = this.githubUsername;
    
    }


getGithub()

getRole() // Overridden to return 'Engineer'

}

const engineer = new Engineer();

engineer.getRole();
engineer.getGithub();
