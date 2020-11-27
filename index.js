const inquirer = require('inquirer');
const fs = require('fs');

console.log(`HELLO THERE, LET'S GET STARTED WITH YOUR NEW PROJECT'S README FILE`);

const questions = [
        {
            type: `input`,
            name: `title`,
            message: `What is the TITLE for this project?`,
            default: `Work in Progress`
        },
        {
            type: `input`,
            name: `description`,
            message: `Please type a clear description of this project's goal. Keep it short but useful:`
        },
        {
            type: `input`,
            name: `installation`,
            message: `What are the steps required to get your project's development environment running?`
        },
        {
            type: `input`,
            name: `usage`,
            message: `Provide instructions and examples for the project's use.`   
        },
        {
            type: `list`,
            name: `licence`,
            message: `Select the type of licence applicable for this project:`,
            choices: [
                {name: `Academic Free License v3.0`},
                {name: `Apache License 2.0`},
                {name: `Artistic License 2.0`},
                {name: `MIT`},
                {name: `Open Software License 3.0`}
            ],
        },
        {
            type: `list`,
            name: `tests`,
            message: `Are any tests being written for your application?`,
            choices: [
                {name: `Test(s) in development`},
                {name: `None planned at the moment`},
                {name: `Test(s) welcome and appreciated, feel free to send any`}
            ],
        },
        {
            type: `input`,
            name: `account`,
            message: 'What GitHub account should be listed for questions?'
        },
        {
            type: `input`,
            name: `email`,
            message: `What email address can receive messages about this project?`
        }
    ];

inquirer.prompt(questions).then(answers => {
    console.log(answers);
        var title = answers.title;
        var description = answers.description;
        var installation = answers.installation;
        var usage = answers.usage;
        var licence = answers.licence;
        var tests = answers.tests;
        var account = answers.account;
        var email = answers.email;
        var output = '# ' + title + `\n` +
                    '## Description' + `\n`+ description + `\n` +
                    '## Table of Contents' + `\n` +
                    `*[Installation](#installation)`+ `\n` +
                    `*[Usage](#usage)` + `\n` +
                    `*[Licence](#licence)` + `\n` +
                    `*[Contributing Guidelines](#contributing)` + `\n` +
                    `*[Tests](#tests)` + `\n` +
                    `*[Questions](#questions)` + `\n` +
                    '## Installation' + `\n` + installation + `\n` +
                    '## Usage' + `\n` + usage + `\n` +
                    '## Licence' + `\n` + licence + `\n` +
                    '## Contributing' + `\n` +
                    `The Contributor Covenant Code of Conduct 
                    https://www.contributor-covenant.org/version/2/0/code_of_conduct/code_of_conduct.md is applicable.`+ `\n` +
                    '## Tests' + `\n` + tests + `\n` +
                    '## Questions' + `\n` +
                    email + 'http://github.com/'+account; 
                     


        fs.writeFile('README.md', JSON.stringify(output), (error) =>
        error ? console.error(error) : console.log("File is saved!"));
    }); 