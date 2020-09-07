let mysql = require("mysql");
let inquirer = require("inquirer");

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
            //add menu function
        }else if(answer.Welcome === "View"){
            //View
        }else if(answer.Welcome === "Update"){
            //Update
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
            //add department
        }else if(answer.AddSection === "Role"){
        //add role
        }else if(answer.AddSection === "Employee"){
            //add employee
        }else{
            //go back
        }
    })
}

function update(){
    
}