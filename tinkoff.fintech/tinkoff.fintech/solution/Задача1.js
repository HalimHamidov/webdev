// function f(x) {
// 	if (x < 1 || x > 12) 
// 		return "oh my god danila are you crazy";
// 	// if (x < 1 || abs(x) > pow(10, 3)) 
// 	return 28 + (x + Math.floor(x/8)) % 2 + 2 % x + 2 * Math.floor(1/x);
// }

// f(4)
// https://habr.com/ru/post/261773/

// Задача 1
// Данила называет месяц в не високосном году, а Герман отвечает, сколько дней в этом месяце. Помогите Герману ответить на вопрос Данилы.

// Входные данные
// Первая и единственная строка содержит единственное целое число – номер месяца. Нумерация начинается с 1: январь – 1, февраль – 2 и т.д. Число по модулю не превосходит 10^310 
// 3
//  .
// Результат работы
// Выведите единственное число – количество дней в указанном месяце. Если введенное число не является номером месяца, выведите без кавычек "oh my god danila are you crazy"

// Примеры
// Входные данные
// 5
// Результат работы
// 31

// Примеры
// Входные данные
// -2
// Результат работы
// oh my god danila are you crazy

var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let total = 0;
process.stdin.on('end', () => { console.log(total); process.exit(0); });

rl.on('line', function (data) {
    total = f(Number(data));
});

function f(x) {
	if (x < 1 || x > 12) 
		return "oh my god danila are you crazy";
	// if (x < 1 || abs(x) > pow(10, 3)) 
	return 28 + (x + Math.floor(x/8)) % 2 + 2 % x + 2 * Math.floor(1/x);
}