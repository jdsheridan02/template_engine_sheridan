const Manager = require("./Library/Manager");
const Engineer = require("./Library/Engineer");
const Intern = require("./Library/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./Library/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,

function internSurvey (){
    inquirer.prompt([
            {
                type:"input",
                message: "What is your name?",
                name: "Name"
            },
            {
                type:"input",
                message: "What is your ID?",
                name: "ID"
            },
            {
                type:"input",
                message: "What is your email?",
                name: "Email"
            },
            {
                type:"input",
                message: "What is your role?",
                name: "Job Title"
            },
            {
                type:"input",
                message: "What is your role specific property (School, GitHub Link, Office Number)?",
                name: "Specific Property"
            },
])};

function engSurvey (){
    inquirer.prompt([
            {
                type:"input",
                message: "What is your name?",
                name: "Name"
            },
            {
                type:"input",
                message: "What is your ID?",
                name: "ID"
            },
            {
                type:"input",
                message: "What is your email?",
                name: "Email"
            },
            {
                type:"input",
                message: "What is your role?",
                name: "Job Title"
            },
            {
                type:"input",
                message: "What is your role specific property (School, GitHub Link, Office Number)?",
                name: "Specific Property"
            },
])};

function manSurvey (){
    inquirer.prompt([
            {
                type:"input",
                message: "What is your name?",
                name: "Name"
            },
            {
                type:"input",
                message: "What is your ID?",
                name: "ID"
            },
            {
                type:"input",
                message: "What is your email?",
                name: "Email"
            },
            {
                type:"input",
                message: "What is your role?",
                name: "Job Title"
            },
            {
                type:"input",
                message: "What is your role specific property (School, GitHub Link, Office Number)?",
                name: "Specific Property"
            },
])};

// and to create objects for each team member (using the correct classes as blueprints!)

const intern = new Intern(function(){
    function getName(){
        internName = internSurvey[0].input
    };
    function getId(){
        internId = internSurvey[1].input
    };
    function getEmail(){
        internEmail = internSurvey[2].input
    };
    function getRole(){
        internRole = internSurvey[3].input
    };
    function getSchool(){
        internSchool = internSurvey[4].input
    }
});

const engineer = new Engineer(function(){
    function getName(){
        engName = engSurvey[0].input
    };
    function getId(){
        engId = engSurvey[1].input
    };
    function getEmail(){
        engEmail = engSurvey[2].input
    };
    function getRole(){
        engRole = engSurvey[3].input
    };
    function getGitHub(){
        engGit = engSurvey[4].input
    }
});

const manager = new Manager(function(){
    function getName(){
        manName = manSurvey[0].input
    };
    function getId(){
        manId = manSurvey[1].input
    };
    function getEmail(){
        manEmail = manSurvey[2].input
    };
    function getRole(){
        manRole = manSurvey[3].input
    };
    function getOfficeNum(){
        manOffice = manSurvey[4].input
    }
});

// After the user has input all employees desired, call the `render` function (required above) and pass in an array containing all employee objects; the `render` function will generate and return a block of HTML including templated divs for each employee!



// After you have your html, you're now ready to create an HTML file using the HTML returned from the `render` function. Now write it to a file named `team.html` in the `output` folder. You can use the variable `outputPath` above target this location.

// Hint: you may need to check if the `output` folder exists and create it if it does not.


// HINT: each employee type (manager, engineer, or intern) has slightly different information; write your code to ask different questions via inquirer depending on employee type.

// function employeeChoice() {
//     inquirer.prompt([{
//       type: ‘list’,
//       name: ‘choice’,
//       choices: [‘Intern’, ‘Engineer’, ‘Done’],
//       message: ‘Please choose one of the following: ’,
//     }])
//       .then(function(answers) {
//         if (answers.choice === ‘Intern’) {
//           createIntern();
//         }
//         if (answers.choice === ‘Engineer’) {
//           createEngineer()
//         }
//         if (answers.choice === ‘Done’) {
//           createHTMLFile();
//         }
//       })
//   }
//   function createIntern() {
//     // ask for the name, id, email, and school
//     // push it to teamMembers
//     // call employeeChoice
//   }
//   function createEngineer() {
//     // ask for the name, id, email, and github
//     // push it to teamMembers
//     // call employeeChoice
//   }


// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
