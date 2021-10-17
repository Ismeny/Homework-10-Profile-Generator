const fs = require('fs');
const inquirer = require('inquirer');


const team = [];


const Engineer = require('./lib/engineer.js');
const Intern = require('./lib/intern.js');
const Manager = require('./lib/Manager.js');


// create function for generalized validation for questions that are required for the README
function validatorText(response) {
    // Make sure the response is not a number, and that it exists
    let validation = response && isNaN(response) ? true : 'This response is required and it needs to be text! Try again!'
    return validation;
};

function validatorNumber(response) {
    // Make sure the response is not a number, and that it exists
    let validation = response && !isNaN(response) ? true : 'This response is required and it needs to be number! Try again!'
    return validation;
};

//prompt use to enter team manager name, employee ID, email address, office number
function init() {
    inquirer
        .prompt([{
                type: 'input',
                name: 'managerName',
                message: "What is your team manager's name?",
                validate: validatorText
            },
            {
                type: 'input',
                name: 'managerID',
                message: "What is your team manager's employee ID?",
                validate: validatorNumber
            },
            {
                type: 'input',
                name: 'managerEmail',
                message: "What is your team manager's email address?",
                validate: validatorText
            },
            {
                type: 'input',
                name: 'officeNum',
                message: "What is your team manager's office number?",
                validate: validatorNumber
            },

        ])
        // then push answers object onto the array and prompt the user with next questions using seperate functions
        .then((answers) => {
            console.log(answers);
            const {
                managerName,
                managerID,
                managerEmail,
                officeNum
            } = answers;
            const manager = new Manager(managerName, managerID, managerEmail, officeNum);

            console.log(manager)
            team.push(manager)

            menuPrompt();
        });

};
//present user with a menu or with an option to add an engineer, intern, or finish building their team
function menuPrompt() {
    inquirer
        .prompt([{
            type: 'list',
            name: 'menuOption',
            message: "What would you like to do next",
            choices: [
                'Add an engineer',
                'Add an intern',
                'Finish building my team'
            ]
        }])
        .then((selection) => {
            //  if they want to add engineer, call engineer questions function
            if (selection.menuOption === 'Add an engineer') {
                addEngineer();
                //  else if they want to add intern, call inter questions function
            } else if (selection.menuOption === 'Add an intern') {
                addIntern();
                // else if they want to finish their team, call the finish team  function    
            } else if (selection.menuOption === 'Finish building my team') {
                finishTeam();
            } else {
                console.log('SOMETHING WENT WRONG!')
            }
        })
}

// ! Promt use to endter the engineers name, iD, email, and GitHub username
function addEngineer() {
    inquirer
        .prompt([{
                type: 'input',
                name: 'engineerName',
                message: "What is your team engineer's name?",
                validate: validatorText
            },
            {
                type: 'input',
                name: 'engineerID',
                message: "What is your team engineer's employee ID?",
                validate: validatorNumber
            },
            {
                type: 'input',
                name: 'engineerEmail',
                message: "What is your team engineer's email address?",
                validate: validatorText
            },
            {
                type: 'input',
                name: 'engineerGitHub',
                message: "What is your team engineer's Github username?",
                validate: validatorText
            }
        ])
        .then((answers) => {
            console.log(answers);
            const {
                engineerName,
                engineerID,
                engineerEmail,
                engineerGitHub
            } = answers;
            const engineer = new Engineer(engineerName, engineerID, engineerEmail, engineerGitHub);

            console.log(engineer)
            team.push(engineer);
            menuPrompt();
        })
}

// prompt user to enter the intern's name, ID, email and school
function addIntern() {
    inquirer
        .prompt([{
                type: 'input',
                name: 'internName',
                message: "What is your team intern's name?",
                validate: validatorText
            },
            {
                type: 'input',
                name: 'internID',
                message: "What is your team intern's employee ID?",
                validate: validatorNumber
            },
            {
                type: 'input',
                name: 'internEmail',
                message: "What is your team intern's email address?",
                validate: validatorText
            },
            {
                type: 'input',
                name: 'internSchool',
                message: "Where did your intern attend school?",
                validate: validatorText
            }
        ])
        .then((answers) => {
            console.log(answers);
            const {
                internName,
                internID,
                internEmail,
                internSchool
            } = answers;
            const intern = new Intern(internName, internID, internEmail, internSchool);

            console.log(intern)
            team.push(intern);

            menuPrompt();

        })
}

let htmlArray = [];
let name, id, email, extra;


function finishTeam() {
    console.log("We're finished!")
    for (let people of team) {
        let role = people.getRole();
        if (role === "Manager") {
            let name = people.getName();
            let id = people.getId();
            let email = people.getEmail();
            let extra = people.getOfficeNum();
            let extraName = "Office";
        } else if (role === "Intern") {
            let name = people.getName();
            let id = people.getId();
            let email = people.getEmail();
            let extra = people.getSchool();
            let extraName = "School";
        } else if (role === "Engineer") {
            let name = people.getName();
            let id = people.getId();
            let email = people.getEmail();
            let extra = people.getGithub();
            let extraName = "Github";
        }
        let obj = {
            name: name,
            id: id,
            email: email,
            extra: extra,
            role: role,
        }
        htmlArray.push(obj);
    }
    generateHtml(htmlArray);
}

function generateHtml(htmlArray) {
    let htmlString = `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns" crossorigin="anonymous"></script>
    <script src=“https://kit.fontawesome.com/afc27ebdff.js” crossorigin=“anonymous”></script>
    <title>Document</title>
</head>
<body>
    `
    for(let employee of htmlArray) {
        if (employee.extraName === "Github") {
             extraStuff = `<a href="https://github.com/${employee.extra}>"`
        } else {
             extraStuff = employee.extra;
        }
        htmlString = htmlString.concat(
            `<div id="card" class="card" style="width: 17.75rem;">
            <div class="card-body">
              <h5 class="card-title">${employee.name}manager name</h5>
              <h6 class="card-subtitle mb-2 text-muted">
                <i class="fas fa-mug-hot">${employee.role}</i>  
                Manager
            </h6>
            <div class="card" style="width: 15rem;">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">${employee.id}ID:</li>
                  <li class="list-group-item">${employee.email}Email:</li>
                  <li class="list-group-item">${employee.extra}Office Number:</li>
                </ul>
              </div>
            </div>
          </div>`
        )
    }

    htmlString = htmlString.concat (
        `</body>
        </html>`
    )
}

init();


// let obj = {
//     name: name,
//     id: id,
//     email: email,
//     extra: extra,
//role: role,