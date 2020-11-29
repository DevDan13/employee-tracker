const mysql = require("mysql");
const inquirer = require("inquirer");
const logo = require('asciiart-logo');

const cTable = require("console.table");

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
connection.connect(function (err) {
  if (err) throw err;
  // run the admin function after the connection is made to prompt the company admin
  admin();
});

function admin() {

  console.log(
    logo({
      name: 'Employee Tracker',
      font: 'Speed',
      lineChars: 10,
      padding: 2,
      margin: 3,
      borderColor: 'yellow',
      logoColor: 'bold-green',
      textColor: 'green',
    })
      .emptyLine()
      .render()
  );
  inquirer.prompt({
    name: "adminMenu",
    type: "list",
    message: "what would you like to do?",
    choices: ["Add a Department", "Add a Role", "Add an Employee", "View all Departments", "View all Roles", "View all Employees", "Update Employee Role"]
  })
    .then(function (answer) {
      //  if(answer.adminMenu === "View a Department")

      switch (answer.adminMenu) {
        case 'Add a Department':
          addDepartment();
          break;
        case 'Add a Role':
          addRole();
          break;
        case 'Add an Employees':
          addEmployee();
          break;
        case 'View all Departments':
          viewDepartments();
          break;
        case 'View all Roles':
          viewRoles();
          break;
        case 'View all Employees':
          viewEmployees();
          break;
        case 'Update Employee role':
          updateEmployeeRole();
          break;
        default:
          // code block
          connection.end();
      }
    });
}

function addDepartment() {

  inquirer.prompt([
    {
      name: "department",
      type: "input",
      message: "what is the name of your new department?: "
    }
  ])
    .then(function (answer) {
      connection.query(
        `INSERT INTO department SET ?`,
        {
          dep_name: answer.department
        },
        function(error){
          if (error) throw error;
          console.log("Department created sucessfully")
          admin();
        }
      );
    });
}

function addRole() {

  inquirer.prompt([
    {
      name: "role",
      type: "input",
      message: "what is the title of your new role?: "
    },
    {
      name: "salary",
      type: "input",
      message: "what is the salary of your new role?: "
    },
    {
      name: "id",
      type: "input",
      message: "what is the id of your new role?: "
    },
  ])
    .then(function (answer) {
      connection.query(
        `INSERT INTO role SET ?`,
        {
          title: answer.role,
          salary: answer.salary,
          department_id: answer.id
        },
        function(error){
          if (error) throw error;
          console.log("role created sucessfully")
          admin();
        }
      );
    });
}

function addEmployee() {

  inquirer.prompt([
    {
      name: "firstName",
      type: "input",
      message: "what is your employee's first name?: "
    },
    {
      name: "lastName",
      type: "input",
      message: "what is your employee's last name?: "
    },
    {
      name: "roleId",
      type: "input",
      message: "what is your employee's role? Input ID number please (1,2,3,4,5,etc): ",
    },
  ])
    .then(function (answer) {
      connection.query(
        `INSERT INTO employee SET ?`,
        {
          first_name: answer.firstName,
          last_name: answer.lastName,
          role_id: answer.roleId
        },
        function(error){
          if (error) throw error;
          console.log("Employee created sucessfully")
          admin();
        }
      );
    });
}

function viewDepartments() {
  console.log(`hit`);
  connection.query(
    `SELECT * FROM department`,
    function (error, result) {
      if (error) throw error;
      console.log("");
      console.table(result);
    }
  )
  admin();
}

function viewRoles() {
  console.log(`hit`);
  connection.query(
    `SELECT * FROM role`,
    function (error, result) {
      if (error) throw error;
      console.log("");
      console.table(result);
    }
  )
  admin();
}

function viewEmployees() {
  console.log(`hit`);
  connection.query(
    `SELECT * FROM employee`,
    function (error, result) {
      if (error) throw error;
      console.log("");
      console.table(result);
     
    }
  )
  admin();
}

// function updateEmployeeRole(){

// }