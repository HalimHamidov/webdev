
// Задача 3
// Герман меняет пароль от учетной записи. Пароль должен удовлетворять следующим условиям:

// 1) Он содержит строчные и заглавные латинские буквы;

// 2) Его длина не менее 8 символов;

// 3) Он содержит цифры;

// 4) В нем нет других символов.

// По паролю Германа определите, удовлетворяет ли он этим условиям.

// Входные данные
// Первая и единственная строка, содержащая латинские буквы, цифры и знаки препинания длинной до 10^310 
// 3
//   символов.
// Результат работы
// Выведите YES, если указанный пароль удовлетворяет описанным условиям и NO иначе.

// Примеры
// Входные данные
// HelloItsMe8
// Результат работы
// YES

var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const f = (x) => {
    let pattern = /^(?=.*[0-9])[a-zA-Z0-9]{8,1000}$/; 
    if (x.match(pattern))
        return "YES";
    else
        return "NO"; 
} 

let total = 0;
process.stdin.on('end', () => { console.log(total); process.exit(0); });

rl.on('line', function (data) {
    total = f(data);
});


