// const inquirer = require('inquirer')

// inquirer.prompt([
//   { type: 'input', name: 'username', message: 'Знакомство: ' },
//   {
//     type: 'list',
//     name: 'Какой был вопрос',
//     massage: 'Тут у нас сам вопрос',
//     choices: [
//       { name: 'вармант1', value: 2, short: 'молодец' },
//       { name: 'вариант2', value: 1, short: 'могло быть и лучше' },
//       { name: 'вариант3', value: 0, short: 'совсем не то' },

//     ],
//   }
// ],
// ).then((answers) => console.log(answers));

const inquirer = require('inquirer') ;
const { EOL } = require('os')

async function getQuestions() {
  return inquirer.prompt([
    {type: 'input', name: 'username', message: 'Введи имя:'},
    {
    type: 'list',
    name: 'bonuses',
    message: 'Ты понял все темы?',
    choices: [
        { name: 'Всё понял', value: 5, short: 'молодец'},
        { name: 'Половину понял', value: 3, short: 'молодец'},
        { name: 'Ничего не понял', value: 0,  short: 'молодец'},
        ],   
    },
    {
    type: 'list',
    name: 'bonuses2',
    message: 'Ты точно понял все темы?',
    choices: [
        { name: 'Всё понял', value: 5 },
        { name: 'Половину понял', value: 3 },
        { name: 'Ничего не понял', value: 0 },
        ],   
    },
])
}


module.exports = { getQuestions };




// class Question {
//   #question
//   #answers
//   #correctAnswer
//   constructor(question, answers = [], correctAnswer) {
//     this.#question = question,
//       this.#answers = answers,
//       this.#correctAnswer = correctAnswer
//   }

// }