const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

let employees = [];

const questionType = [{
    type: "list",
    name: "type",
    message: "Select an employee type to add a new employee, or select RENDER to render the HTML page:",
    choices: ["Manager", "Engineer", "Intern", "RENDER"]
}];

const questionsGeneral = [{
    type: "input",
    name: "name",
    message: "Enter the employee's name:"
},{
    type: "number",
    name: "id",
    message: "Enter the employee's ID number:"
},{
    type: "input",
    name: "email",
    message: "Enter the employee's email:"
}];

const questionManager = [{
    type: "input",
    name: "office",
    message: "Enter the manager's office number:"
}];

const questionEngineer = [{
    type: "input",
    name: "github",
    message: "Enter the engineer's Github:"
}];

const questionIntern = [{
    type: "input",
    name: "school",
    message: "Enter the intern's school:"
}];

async function ask(question) {
    response = await inquirer.prompt(question);
    return response;
}

employees.push(new Manager("fefej", 1, "fk@webkitCa", 456));
employees.push(new Engineer("aaaaa", 1, "fef@tggs", "ffffff"));
employees.push(new Intern("eee", 1, "ukghjk@hjl", "Shcoollelel"));

html = render(employees);

fs.writeFileSync(outputPath, html);

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```