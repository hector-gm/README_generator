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
            type: `confirm`,
            name: `ToC_query`,
            message: `Do we need a Table of Contents for this documentation?`
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
            type: `confirm`,
            name: `contributing_guidelines`,
            message: `Adhere to the Contributor Covenant for this project?`
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
        }
    ];

inquirer.prompt(questions).then(answers => {
    console.log(answers);
        var title = answers.title;
        var description = answers.description;
        // var contents_table = answers.ToC_query;
        var installation = answers.installation;
        var usage = answers.usage;
        var licence = answers.licence;
        // var contributing = answers.contributing_guidelines;
        var tests = answers.tests;


        fs.appendFile('README.md', JSON.stringify(answers), (error) =>
        error ? console.error(error) : console.log("File is saved!"));
    }); 