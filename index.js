const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer= require('./lib/Engineer');
const Intern = require('./lib/Intern');
const template = require('./src/template');
const fs = require('fs');
const chalk = require('chalk');
const emailValidator = require('email-validator');

const team = [];

function createEngineer(){
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Please enter the engineer's name: ",
            validate: function(nameInput){
                if(nameInput){
                    return true;
                } else {
                    console.log(chalk.red('\n\tPlease enter a valid name!'));
                    return false;
                }
            }        
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the engineer's Id: ", 
            validate: function(idInput){
                if(idInput && parseInt(idInput)){
                    return true;
                } else {
                    console.log(chalk.red('\n\tPlease enter a valid ID!'));
                    return false;
                }
            }       
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the engineer's email: ", 
            validate: function(emailInput){
                if(emailInput && emailValidator.validate(emailInput)){
                    return true;
                } else {
                    console.log(chalk.red('\n\tPlease enter a valid email!'));
                    return false;
                }
            }       
        },
        {
            type: 'input',
            name: 'github',
            message: "Please enter the engineer's GitHub username: ", 
            validate: function(githubInput){
                if(githubInput){
                    return true;
                } else {
                    console.log(chalk.red('\n\tPlease enter a valid GitHub username!'));
                    return false;
                }
            }       
        }    
    ]).then(data => {
        const engineer = new Engineer(data.name, data.id, data.email, data.github);
        team.push(engineer);
        createTeamMember();
    });
}

function createIntern(){
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Please enter the intern's name: ", 
            validate: function(nameInput){
                if(nameInput){
                    return true;
                } else {
                    console.log(chalk.red('\n\tPlease enter a valid name!'));
                    return false;
                }
            }       
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the intern's Id: ",
            validate: function(idInput){
                if(idInput && parseInt(idInput)){
                    return true;
                } else {
                    console.log(chalk.red('\n\tPlease enter a valid ID!'));
                    return false;
                }
            }        
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the intern's email: ", 
            validate: function(emailInput){
                if(emailInput && emailValidator.validate(emailInput)){
                    return true;
                } else {
                    console.log(chalk.red('\n\tPlease enter a valid email!'));
                    return false;
                }
            }       
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter the intern's school name: ",
            validate: function(schoolInput){
                if(schoolInput){
                    return true;
                } else {
                    console.log(chalk.red('\n\tPlease enter a valid school name!'));
                    return false;
                }
            }        
        }    
    ]).then(data => {
        const intern = new Intern(data.name, data.id, data.email, data.school);
        team.push(intern);
        createTeamMember();
    });
}

function buildTeam(){
    console.log('Building team');
    fs.writeFile('./dist/index.html', template(team), err => {
        if(err){
            console.log(err);
        }
        console.log('Successfully created the index file');
    })
}

function createTeamMember(){
    inquirer.prompt([
        {
            type: 'list',
            name:'teamChoice',
            message: 'Please choose an option:',
            choices: ['Engineer', 'Intern', 'Done building team']    
        }
    ]).then (data => {
        if(data.teamChoice === 'Engineer'){
            createEngineer();
        } else if (data.teamChoice === 'Intern'){
            createIntern();
        } else {
            buildTeam();
        }
    })
}

inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: "Please enter the manager's name: ",
        validate: function(nameInput){
            if(nameInput){
                return true;
            } else {
                console.log(chalk.red('\n\tPlease enter a valid name!'));
                return false;
            }
        }        
    },
    {
        type: 'input',
        name: 'id',
        message: "Please enter the manager's Id: ",
        validate: function(idInput){
            if(idInput && parseInt(idInput)){
                return true;
            } else {
                console.log(chalk.red('\n\tPlease enter a valid ID!'));
                return false;
            }
        }        
    },
    {
        type: 'input',
        name: 'email',
        message: "Please enter the manager's email: ",
        validate: function(emailInput){
            if(emailInput && emailValidator.validate(emailInput)){
                return true;
            } else {
                console.log(chalk.red('\n\tPlease enter a valid email!'));
                return false;
            }
        }        
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "Please enter the manager's office number: ",
        validate: function(officeNumberInput){
            if(officeNumberInput && parseInt(officeNumberInput) && officeNumberInput.length === 10){
                return true;
            } else {
                console.log(chalk.red('\n\tPlease enter a valid office number!'));
                return false;
            }
        }        
    }    
]).then(data => {
    const manager = new Manager(data.name, data.id, data.email, data.officeNumber);
    team.push(manager);
    createTeamMember();
})