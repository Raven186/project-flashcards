const model = require('./Model');
const view = require('./view');

async function run() {
  
    const promise = await model.getQuestions();
    const allBonuses = promise.bonuses1+promise.bonuses2+promise.bonuses3+promise.bonuses4+promise.bonuses5+promise.bonuses6+promise.bonuses7+promise.bonuses8+promise.bonuses9+promise.bonuses10+promise.bonuses11+promise.bonuses12
    const phrase = `Молодец! Ты заработал ${allBonuses} баллов`
    view.showQuestions(phrase);
}

run();