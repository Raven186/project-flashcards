const inquirer = require("inquirer");
const { EOL } = require("os");

async function getQuestions() {
	return inquirer.prompt([
		{ type: "input", name: "username", message: "Введи имя:" },
		{
			type: "list",
			name: "bonuses1",
			message: "Зачем в Питере солнечные батаерии?",
			choices: [
				{
					name: "Вырабатавать энергию",
					value: 0,
					short: "Че оно там выработает",
				},
				{ name: "Для виду", value: 0, short: "Может и так" },
				{ name: "Бесполезные", value: 5, short: "Ну да " },
			],
		},
		{
			type: "list",
			name: "bonuses2",
			message: "Кто основал Санкт-Петербург",
			choices: [
				{
					name: "Петр I",
					value: 5,
					short: "С js у тебя не клеется, хоть это знаешь ",
				},
				{ name: "Шнуров", value: 0, short: "Это про Ленинград" },
				{
					name: "Сергей Дружко",
					value: 0,
					short: "Сильное заявление, но мимо ",
				},
			],
		},
		{
			type: "list",
			name: "bonuses3",
			message: "Чем славится питер?",
			choices: [
				{
					name: "Петропавловская крепость",
					value: 5,
					short: "Все ответы правильные",
				},
				{ name: "Петергоф", value: 5, short: "Все ответы правильные" },
				{ name: "Погодой", value: 5, short: "Все ответы правильные" },
			],
		},
		{
			type: "list",
			name: "bonuses4",
			message: "В какой стране  Деда Мороза называют Йоулупукки?",
			choices: [
				{ name: "Гавайи", value: 0, short: "не правильно" },
				{ name: "Новая Зеландия", value: 0, short: "не правильно" },
				{ name: "Финляндия", value: 5, short: "Сильное заявление, правильно " },
			],
		},
		{
			type: "list",
			name: "bonuses5",
			message: "Кто наряжается один раз в год?",
			choices: [
				{ name: "Ёлка", value: 5, short: "Ну а ты ее больше и не дастаешь" },
				{ name: "Я", value: 0, short: "мимо" },
				{ name: "Дед мороз", value: 0, short: "Мимо" },
			],
		},
		{
			type: "list",
			name: "bonuses6",
			message: "Где родилась елочка?",
			choices: [
				{ name: "В лесу", value: 5, short: "Ну а где еще?" },
				{ name: "В роддоме", value: 0, short: "Ну почти" },
				{ name: "В лифте", value: 0, short: "Неверно" },
			],
		},
		{
			type: "list",
			name: "bonuses7",
			message: "Чему можно научить дельфина?",
			choices: [
				{ name: "Ходить", value: 0, short: "Иди поспи" },
				{ name: "Программировать", value: 0, short: "Не судьба" },
				{ name: "Рисовать", value: 5, short: "Ну да" },
			],
		},
		{
			type: "list",
			name: "bonuses8",
			message: "Какое животное не боится никого?",
			choices: [
				{ name: "Лев", value: 0, short: "Ну почти" },
				{ name: "Медоед", value: 5, short: "Ему вообще побарабану на всех" },
				{ name: "Черепаха", value: 0, short: "Мимо" },
			],
		},
		{
			type: "list",
			name: "bonuses9",
			message: "Какое животное не умеет прыгать",
			choices: [
				{ name: "Черепаха", value: 0, short: "Могут, отвечаю, могут" },
				{ name: "Слон", value: 5, short: "Так эта туша весит 3-4 тонны" },
				{
					name: "Турбированый ишак",
					value: 0,
					short: "Он не то что прыгать может, он летает",
				},
			],
		},
		{
			type: "list",
			name: "bonuses10",
			message: "Чего больше всего боятся программисты? ",
			choices: [
				{ name: "Когда они забывают сохранить", value: 5, short: "Правильно" },
				{ name: "Толю", value: 0, short: "Мы все любим и уважаем Толю" },
				{
					name: "Что код не запустится",
					value: 0,
					short: "Переделаем, починим, подлатаем",
				},
			],
		},
		{
			type: "list",
			name: "bonuses11",
			message: "Какое золотое правило в программировании? ",
			choices: [
				{
					name: "Если оно работает, не трогайте его.",
					value: 5,
					short: "Правильно",
				},
				{
					name: "Пару раз сломать код",
					value: 0,
					short: "Это база, но не оно",
				},
				{ name: "Пропустить запятую", value: 0, short: "Дай бог найдется" },
			],
		},
		{
			type: "list",
			name: "bonuses12",
			message: "какие языки программирования самые дорогие?",
			choices: [
				{
					name: "Ruby, Perl и Crystal",
					value: 5,
					short: "Вы эти названия вообще слышали? Очевидно же",
				},
				{ name: "C++, C#, C", value: 0, short: "Не звучит" },
				{
					name: "JavaScript, Java, Python",
					value: 0,
					short: "Простите, но вы названия вообще слышали их?",
				},
			],
		},
	]);
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
