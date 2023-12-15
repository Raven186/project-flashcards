const inquirer = require('inquirer')

inquirer.prompt([
  { type: 'input', name: 'username', message: 'Как звать? ' },
  {
    type: 'list',
    name: 'Кем будешь?',
    massage: 'Тут у нас сам вопрос',
    choices: [
      { name: 'Чушпан', value: 2, short: 'Валил бы ты отсюда' },
      { name: 'Скорлупа', value: 1, short: 'Ну здарова' },
      { name: 'Пацан', value: 0, short: 'Здарова, братан' },
      { name: 'Смотрящий', value: 0, short: 'Моё уважение' },
      
    ],
  }
],
)then.(answers)=> console.log(([
  { type: 'input', name: 'username', message: 'Как звать? ' },
  {
    type: 'list',
    name: 'Кем будешь?',
    massage: 'Тут у нас сам вопрос',
    choices: [
      { name: 'Чушпан', value: 2, short: 'Валил бы ты отсюда' },
      { name: 'Скорлупа', value: 1, short: 'Ну здарова' },
      { name: 'Пацан', value: 0, short: 'Здарова, братан' },
      { name: 'Смотрящий', value: 0, short: 'Моё уважение' },
      
    ],
  }
])))


// inquirer.prompt([
//   {
//     type: 'list',
//     name: 'Какой был вопрос',
//     massage: 'щещен амсугин',
//     choices: [
//       { name: 'кутахбас', value: 2, short: 'молод222ец' },
//       { name: 'вариа321313нт2', value: 1, short: 'могло бы222ть и лучше' },
//       { name: 'вариа23123нт3', value: 0, short: 'совсе222м не то' },

      
//     ],
//   }
// ],
// )







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



// inquirer.prompt([
//   'Как звать?'
//   ])
//   .then((answers) => {
//     'Здарова'
//     console.log(answers)
//   })
//   .catch((error) => {
//     if (error.isTtyError) {
//     console.log('fail')
//     } else {
//       console.log('fails')
//     }  
    
//   });


// const prompts = new Rx.Subject();
// inquirer.prompt(prompts);

// 'sdsdds'
// prompts.next({
//   /* cscscs */
// });
// prompts.next({
//   /* aaaa */
// });

// sddadad
// prompts.complete();



inquirer
  .prompt([
    *fff*
  ])
  .then((answers) => {
    cccccccc
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
  console.log(inquirer)