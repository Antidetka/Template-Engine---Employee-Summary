// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee.js");

class Engineer extends Employee {
    constructor(name, id, email, githubUsername ) {
      super(name,id,email);
      this.githubUsername = githubUsername;
    
    }


getGithub() {
  return this.githubUsername;
}
// Overridden to return 'Engineer'
getRole() {
  return "Engineer";
}

}

const engineer = new Engineer();

engineer.getRole();
engineer.getGithub();
