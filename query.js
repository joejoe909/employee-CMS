//Add the Department

const inquirer = require("inquirer");
class department{
    constructor(deptName){
        this.Name = deptName;
    }

    depQuestions = [
        {
            type: "input",
            message: "What is the name of the department?",
            name: "deptName"
        }
    ];

 addDepartment() {
    inquirer(depQuestions).then(function (newDept) {
        var insertDep = `INSERT INTO department(id, name)` +
            `,VALUES(,${newDept.deptName}`;
    });
}

module.exports = qu;
  
  
