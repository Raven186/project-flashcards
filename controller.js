const model = require('./Model');
const view = require('./view');

async function run() {
  
    const promise = await model.getQuestions();
    const allBonuses = promise.bonuses1+promise.bonuses2+promise.bonuses3
    const phrase = `Молодец! Ты заработал ${allBonuses} баллов`
    view.showQuestions(phrase);
}

run();