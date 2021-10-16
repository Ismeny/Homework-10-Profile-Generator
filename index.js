const fs = require('fs');
const inquirer = require('inquirer');
// const { addListener } = require('process');
// const teamHTML = require('team.html')

const partyPeople =[];


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
        .prompt([
            {
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
            const {managerName, managerID, managerEmail, officeNum} = answers;
            const manager = new Manager(managerName, managerID, managerEmail, officeNum);
            
            console.log(manager)
            partyPeople.push(manager)

            menuPrompt();
        });
                   
};
//present user with a menu or with an option to add an engineer, intern, or finish building their team
function menuPrompt() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'menuOption',
                message: "What would you like to do next",
                choices: [
                    'Add an engineer',
                    'Add an intern',
                    'Finish building my team'
                ]
            }
        ])
        .then((selection) => {
            //  if they want to add engineer, call engineer questions function
            if(selection.menuOption === 'Add an engineer') {
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
        .prompt([
            {
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
            const {engineerName, engineerID, engineerEmail, engineerGitHub} = answers;
            const engineer = new Engineer(engineerName, engineerID, engineerEmail, engineerGitHub);
            
            console.log(engineer)
            partyPeople.push(engineer);
            menuPrompt();
        })
}

// prompt user to enter the intern's name, ID, email and school
function addIntern() {
    inquirer
        .prompt([
            {
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
            const {interName, internID, internEmail, internSchool} = answers;
            const intern = new Intern(interName, internID, internEmail, internSchool);
            
            console.log(intern)
            partyPeople.push(intern);

            menuPrompt();
            
        })
}

function finishTeam() {
    console.log("We're finished!")
}

init();