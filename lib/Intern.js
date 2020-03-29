// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee.js");

class Intern extends Employee {
    constructor(id, school) {
      super(name,id,email);
      this.school= this.school;
    
    }
   

    getSchool()
    
    getRole() // Overridden to return 'Intern'
    
    
}

const intern = new Intern();

intern.getSchool();
intern.getRole();