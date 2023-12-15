const inquirer = require('inquirer')

inquirer.prompt([
  { type: 'input', name: 'username', message: 'Знакомство: ' },
  {
    type: 'list',
    name: 'Какой был вопрос',
    massage: 'Тут у нас сам вопрос',
    choices: [
      { name: 'вармант1', value: 2, short: 'молодец' },
      { name: 'вариант2', value: 1, short: 'могло быть и лучше' },
      { name: 'вариант3', value: 0, short: 'совсем не то' },

    ],
  }
],
).then((answers) => console.log(answers));







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