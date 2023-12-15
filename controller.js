const model = require('./Model');
const view = require('./view');

async function run() {
   
    const questions = (await model.getQuestions())
    view.showQuestions(questions);
}

run();