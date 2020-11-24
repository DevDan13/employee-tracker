const mysql = require("mysql");
const inquirer = require("inquirer");
const logo = require('asciiart-logo');

//const cTable = require("console.table");

// create the connection information for the sql database
const connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "password",
  database: "employee_db"
});

// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
  // run the admin function after the connection is made to prompt the company admin
  admin();
});

function admin(){

    inquirer.prompt({
        name: "adminMenu",
        type: "list",
        message: "what would you like to do?",
        choices: ["Add a Department", "Add a Role", "Add an Employee","View a Department", "View a Role", "View an Employee", "Update Employee Roles"]
    })
     .then(function(answer){
       //  if(answer.adminMenu === "View a Department")

       switch(answer.adminMenu) {
        case 'View a Department':
          viewDepartment();
          break;
        case 'View a Role':
          viewRole();
          break;
        case 'View an Employee':
          viewEmployee();
          break;
        default:
          // code block
          connection.end();
      }
     });
}

function viewDepartment(){
    console.log(`hit`);
    connection.query(
        `SELECT * FROM department`,
        function(error, result){
            if(error) throw error;
            console.log("");
            console.table(result);
        }
    )
    admin();
}

function viewRole(){
    console.log(`hit`);
    connection.query(
        `SELECT * FROM role`,
        function(error, result){
            if(error) throw error;

            console.table(result);
        }
    )
    admin();
}

function viewEmployee(){
    console.log(`hit`);
    connection.query(
        `SELECT * FROM employee`,
        function(error, result){
            if(error) throw error;

            console.table(result);
        }
    )
    admin();
}