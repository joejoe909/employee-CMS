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
    console.log("connected");
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
            addRole();
        }else if(answer.AddSection === "Employee"){
           addEmployee();
        }else{
           menuStart();
        }
    })
}

function view(){
    inquirer.prompt({
        name: "ViewSection",
        type: "list",
        message: "Would you like to view [Departments], [Roles], [employees] or go [Back}?",
        choices:["Departments", "Roles", "Employees", "Back"]
    }).then(function(answer){
        if(answer.ViewSection === "Departments"){
            viewDept();
        }else if(answer.ViewSection === "Roles"){
            viewRoles();
        }else if(answer.ViewSection === "Employees"){
            viewEmp();
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
            searchToUpdateRole()
        }else if(answer.updateRole === "Back"){
            menuStart();
        }
    })
}


function addDepartment(){
   let depQuestions = [
        {
            type: "input",
            message: "What is the name of the department?",
            name: "deptName"
        }
    ];

    inquirer.prompt(depQuestions).then(function(newDept) {
        connection.query("INSERT INTO department SET ?", 
        {
           Department_Name: newDept.deptName,
        },
        function(err){
            if(err)throw err;
            console.log("Write successful...");
            menuStart();
        }
        );
         
    });
}

function addRole() {
    roleQuestion = [
        {
            type: "input",
            message: "Please enter the Title of the role you wish to input",
            name: "title"
        },
        {
            type: "input",
            message: "Enter the salary of the role",
            name: "salary",
            validate: function (value) {
                let valid = !isNaN(parseFloat(value));
                return valid || "Please enter a numerical value";
            },
            filter: Number,
        },
        {
            type: "input",
            message: "What is the department id?",
            name: "deptID",
            validate: function(Dvalue){
                let valid = !isNaN(parseFloat(Dvalue));
                return valid || "Please enter a numberical value";
            }
        }
    ];
    inquirer.prompt(roleQuestion).then(function (newRole) {
        connection.query("INSERT INTO role SET ?",
            {
                title: newRole.title,
                salary: newRole.salary,
                department_id: newRole.deptID
            },
            function (err) {
                if (err) throw err;
                console.log("Write successful...");
                addMenu();
            });
    });
}

function addEmployee(){
    let empQ = [
        {
            type:"input",
            name: "firstName",
            message: "What is the first name of the employee?"
        },
        {
            type:"input",
            name: "lastName",
            message:"What is the last name of the employee?"
        },
        {
            type:"input",
            name:"role",
            message: "Please enter the ID of the employee(enter a number)?",
            validate: function (value) {
            let valid = !isNaN(parseFloat(value));
            return valid || "Please enter a numerical value";   
            filter: Number
         }
        },    
        {
            type:"input",
            name: "manager",
            message:"Please enter the ID the employees manager.",
            validate: function (value) {
            let valid = !isNaN(parseFloat(value));
            return valid || "Please enter a numerical value";
            filter: Number
            }
        }
    ];

    inquirer.prompt(empQ).then(function(employee){
        connection.query("INSERT INTO employee SET ?", 
            {
                first_name: employee.firstName,
                last_name: employee.lastName,
                role_id: employee.role,
                manager_id: employee.manager,
            },
            function (err) {
                if (err) throw err;
                console.log("Write successful...");
                menuStart();
            })    
        }
    );
};

function viewDept(){
    connection.query("SELECT * FROM department ", function(err, res){
        if(err) throw err;
        console.table(res);
        view();
    })
}


function viewRoles(){
    connection.query("SELECT * FROM role ", function(err, res){
        if(err) throw err;
        console.table(res);
        view();
    })

}


function viewEmp(){
    connection.query("SELECT employee.first_name, employee.last_name, role.title, department.Department_Name, role.salary, employee.manager_id FROM employee INNER JOIN role ON employee.role_id=role.id INNER JOIN department ON role.department_id=department.id", function (err, res) {
    if(err) throw err;
        console.table(res);
        view();
    })
}

function searchToUpdateRole(){
    
}