const inquirer = require('inquirer') ;
const { EOL } = require('os')

inquirer.prompt([
    {type: 'input', name: 'username', message: 'Введи имя:'},
    {
    type: 'list',
    name: 'bonuses',
    message: 'Ты понял все темы?',
    choices: [
        { name: 'Всё понял', value: 5 },
        { name: 'Половину понял', value: 3 },
        { name: 'Ничего не понял', value: 0 },
        ],   
    },
    {
    type: 'list',
    name: 'bonuses',
    message: 'Ты точно понял все темы?',
    choices: [
        { name: 'Всё понял', value: 5 },
        { name: 'Половину понял', value: 3 },
        { name: 'Ничего не понял', value: 0 },
        ],   
    },
]).then((answers) => console.log(answers));