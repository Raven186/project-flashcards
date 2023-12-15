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
    name: 'bonuses1',
    message: 'Что говорит JavaScript, когда его просят рассказать анекдот?',
    choices: [
        { name: 'Мой лучший анекдот - это когда async и await зашли в бар...', value: 5, short: 'А ты шаришь!' },
        { name: 'У меня есть такой хороший анекдот про null, но он undefined', value: 5, short: 'Хорошее чувство юмора ;)' },
        { name: 'Ничего', value: 0, short: 'Не смешно' },
        ],   
    },
    {
    type: 'list',
    name: 'bonuses2',
    message: 'Ты точно понял все темы?',
    choices: [
        { name: 'Всё понял', value: 5, short: 'первый' },
        { name: 'Половину понял', value: 3, short: 'первый' },
        { name: 'Ничего не понял', value: 0, short: 'первый' },
        ],   
    },
    {
      type: 'list',
      name: 'bonuses3',
      message: 'Ты точно понял все темы?',
      choices: [
          { name: 'Всё понял', value: 5, short: 'первый' },
          { name: 'Половину понял', value: 3, short: 'первый' },
          { name: 'Ничего не понял', value: 0, short: 'первый' },
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