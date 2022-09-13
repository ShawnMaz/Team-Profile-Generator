const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer= require('./lib/Engineer');
const Intern = require('./lib/Intern');
const template = require('./src/template');
const fs = require('fs');

const team = [];

function createEngineer(){
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Please enter the engineer's name: ",        
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the engineer's Id: ",        
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the engineer's email: ",        
        },
        {
            type: 'input',
            name: 'github',
            message: "Please enter the engineer's GitHub username: ",        
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
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the intern's Id: ",        
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the intern's email: ",        
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter the intern's school name: ",        
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
        name: 'managerName',
        message: "Please enter the manager's name: ",        
    },
    {
        type: 'input',
        name: 'employeeId',
        message: "Please enter the manager's Id: ",        
    },
    {
        type: 'input',
        name: 'email',
        message: "Please enter the manager's email: ",        
    },
    {
        type: 'input',
        name: 'managerOfficeNumber',
        message: "Please enter the manager's office number: ",        
    }    
]).then(data => {
    const manager = new Manager(data.managerName, data.employeeId, data.email, data.managerOfficeNumber);
    team.push(manager);
    createTeamMember();
})