//Add the Department

const inquirer = require("inquirer");

let depQuestions = [
    {
        type: "input",
        message: "What is the name of the department?",
        name: "deptName"
    }
];
  
function addDepartment(){
    inquirer(depQuestions).then(function(newDept){
        var insertDep = `INSERT INTO department(id, name)` +
        `,VALUES(,${newDept.deptName}`;   
    })
}


module.exports = query;
  
  
