const Manager = require("./Library/Manager");
const Engineer = require("./Library/Engineer");
const Intern = require("./Library/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./Library/htmlRenderer");
const employees = [];

// Write code to use inquirer to gather information about the development team members,
employeeChoice();

function employeeChoice() {
    inquirer.prompt([{
        type: "list",
        name: "choice",
        choices: ['Intern', 'Engineer', 'Manager', 'Done'],
        message: "Please choose one of the following: ",
    }])
        .then(function (answers) {
            if (answers.choice === "Intern") {
                internSurvey();
            }
            if (answers.choice === "Engineer") {
                engSurvey();
            }
            if (answers.choice === "Manager") {
                manSurvey();
            }
            if (answers.choice === "Done") {
                createHTMLFile();
            }
        })
}
function internSurvey() {
    // ask for the name, id, email, and school
     inquirer.prompt([
        {
            type: "input",
            message: "What is your name?",
            name: "Name"
        },
        {
            type: "input",
            message: "What is your ID?",
            name: "ID"
        },
        {
            type: "input",
            message: "What is your email?",
            name: "Email"
        },
        {
            type: "input",
            message: "What is your role specific property (School, GitHub Link, Office Number)?",
            name: "Property"
        },
    ]).then (function (internAnswers){ 
        // function is pushing all the answers into an array which will be used by the htmlrender.js file
        console.log(internAnswers);

        const intern = new Intern (internAnswers.Name, internAnswers.ID, internAnswers.Email, internAnswers.Property)
        console.log(intern);
        employees.push(intern);
        console.log(employees);
        
        // executing initial function for multiple employees, or to finish running the function and build the HTML file
        employeeChoice();
    })
};



function engSurvey() {
    // ask for the name, id, email, and github

    inquirer.prompt([
        {
            type: "input",
            message: "What is your name?",
            name: "Name"
        },
        {
            type: "input",
            message: "What is your ID?",
            name: "ID"
        },
        {
            type: "input",
            message: "What is your email?",
            name: "Email"
        },
        {
            type: "input",
            message: "What is your role specific property (School, GitHub Link, Office Number)?",
            name: "Property"
        },
    ]).then (function (engAnswers){ 
        // function is pushing all the answers into an array which will be used by the htmlrender.js file
        console.log(engAnswers);

        const engineer = new Engineer (engAnswers.Name, engAnswers.ID, engAnswers.Email, engAnswers.Property)
        console.log(engineer);
        employees.push(engineer);
        console.log(employees);

        // executing initial function for multiple employees, or to finish running the function and build the HTML file
        employeeChoice();
    })
};


function manSurvey() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is your name?",
            name: "Name"
        },
        {
            type: "input",
            message: "What is your ID?",
            name: "ID"
        },
        {
            type: "input",
            message: "What is your email?",
            name: "Email"
        },
        {
            type: "input",
            message: "What is your role specific property (School, GitHub Link, Office Number)?",
            name: "Property"
        },
    ]).then (function (manAnswers){ 
        // function is pushing all the answers into an array which will be used by the htmlrender.js file
        console.log(manAnswers);

        const manager = new Manager (manAnswers.Name, manAnswers.ID, manAnswers.Email, manAnswers.Property)
        console.log(manager);
        employees.push(manager);
        console.log(employees);

        // executing initial function for multiple employees, or to finish running the function and build the HTML file
        employeeChoice();
    })
};

// and to create objects for each team member (using the correct classes as blueprints!)

function createHTMLFile(){
    const html = render(employees);
    console.log(html);

    fs.writefile
};

// After the user has input all employees desired, call the `render` function (required above) and pass in an array containing all employee objects; the `render` function will generate and return a block of HTML including templated divs for each employee!



// After you have your html, you're now ready to create an HTML file using the HTML returned from the `render` function. Now write it to a file named `team.html` in the `output` folder. You can use the variable `outputPath` above target this location.

// Hint: you may need to check if the `output` folder exists and create it if it does not.


// HINT: each employee type (manager, engineer, or intern) has slightly different information; write your code to ask different questions via inquirer depending on employee type.



// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
