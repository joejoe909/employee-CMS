let mysql = require("mysql");
let inquirer = require("inquirer");
let qu = require("./query");

//create connection
let connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "enter101",
    database: "employees_DB"
})

connection.connect(function(err){
    if(err) throw err;
    menuStart();
});

function menuStart(){
    inquirer.prompt({
        name:"Welcome",
        type: "list",
        message: "Would you like to [Add] to the orginzation, [View] the orginzation or [Update] the orgination?",
        choices:["Add", "View", "Update", "Quit"]
    }).then(function(answer){
        if(answer.Welcome === "Add"){
            addMenu();
        }else if(answer.Welcome === "View"){
           view()
        }else if(answer.Welcome === "Update"){
            update();
        }else{
            connection.end();
        }
    })
}

function addMenu(){
    inquirer.prompt({
        name: "AddSection",
        type: "list",
        message: "Would you like to add a [Department], add a [Role] or add an [Employee] or go [Back]?",
        choices:["Department", "Role", "Employee", "Back"]
    }).then(function(answer){
        if(answer.AddSection === "Department"){
           addDepartment();
        }else if(answer.AddSection === "Role"){
        //add role
        }else if(answer.AddSection === "Employee"){
            //add employee
        }else{
           menuStart();
        }
    })
}

function view(){
    inquirer.prompt({
        name: "ViewSection",
        type: "list",
        message: "Would you like to view [Departments], [Managers], [employees] or go [Back}?",
        choices:["Departments", "Managers", "Employees", "Back"]
    }).then(function(answer){
        if(answer.ViewSection === "Departments"){
            //viewDept()
        }else if(answer.ViewSection === "Managers"){
            //viewMgr()
        }else if(answer.ViewSection === "Employees"){
            //viewEmp()
        }else{
            menuStart();
        }
    })
}


function update(){
    inquirer.prompt({
        name: "updateRole",
        type: "list",
        message: "[Search] for employee to update, or go [Back]",
        choices: ["Search", "Back"]
    }).then(function(answer){
        //find employee prompt with role to change.
        if(answer.updateRole === "Search"){
            //searchToUpdateRole()
        }else if(answer.updateRole === "Back"){
            menuStart();
        }
    })
}