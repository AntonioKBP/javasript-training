// for (let i = 100; i <= 10000; i *= 2) {
// 	console.log(i);
// }

// Repeta first task

//   First

// const minSalary = 500;
// const maxSalary = 1500;
// const employees = 4;
// let totalSalary = 0;

// for (i = 1; i <= employees; i += 1) {
// 	const salary = Math.round(Math.random() * (maxSalary - minSalary) + minSalary);

// 	console.log(`Employee salary no ${i} - ${salary}`);

// 	totalSalary += salary;
// }

// console.log(totalSalary);

// Second

/* Напиши скрипт который подсчитывает сумму все чётных чисел .
 * которые входят в диапазон чисел в переменных от min до max.
 * Например если мин=0 и мах=5 . то диапазон 0-5 . и в нём два чётных числа 2 и 4.  их сумма 6 */

// 1 пишем вары
// const min = 0;
// const max = 5;
// let total = 0;

// // 2 for от мин до макс с шагом 1

// for (let i = min; i <= max; i += 1) {
// 	if (i % 2 !== 0) {
// 		console.log("не чётное: ", i);
// 		continue;
// 	}
//     console.log("чётное: ", i);
//    3 // пишем сумму
// 	total += i;
// }
// // 4 проверяем остаток от деления
// console.log(`total: `, total);

// Third

// let balance = 10000;
// const payment = 2000;

// console.log(`Общая стоимость заказа ${payment} кредитов. Проверяем кол-во доступных средств на счету`);

// if (balance >= payment) {
// 	console.log("Ok");
// 	balance -= payment;
// 	console.log(`На рахунку лишилось ${balance} кредитів`);
// } else {
// 	console.log(`Не достатньо коштів на рахунку`);
// }

// console.log("Transaction complete");

// Fourth

// let totalSpent = 2000;
// let payment = 500;
// let discount = 0;

// if (totalSpent >= 100 && totalSpent < 1000) {
// 	console.log("Bronze partner your discount 2%");
// 	discount = 0.02;
// } else if (totalSpent >= 1000 && totalSpent < 5000) {
// 	console.log("Silver partner your discount 5%");
// 	discount = 0.05;
// } else if (totalSpent > 5000) {
// 	console.log("Gold partner your discount 10%");
// 	discount = 0.1;
// } else {
// 	console.log("Not a partner discount 0%");
// }

// payment -= payment * discount;
// // payment = payment - payment * discount;

// console.log(`Creating payment wich is cost ${payment} with discount ${discount * 100}%`);

// totalSpent += payment;

// console.log(`Total spended in shop: ${totalSpent}`);

// const btnAdd = document.querySelector("button[data-add]");
// const resetBtn = document.querySelector("button[data-reset]");
// const valueInput = document.querySelector("input[data-value]");
// const outputEl = document.querySelector(".js-output span");

// let total = 0;

// btnAdd.addEventListener("click", function () {
// 	console.log("click hehehe");

// 	const value = Number(valueInput.value);
// 	console.log(value);

// 	total += value;

// 	outputEl.textContent = total;

// 	console.log("total; ", total);

// 	valueInput.value = "";
// });

// resetBtn.addEventListener("click", function () {
// 	outputEl.textContent = 0;
// 	total = 0;
// });

// console.log(valueInput);

// function getSubstring(string, length) {
// 	const substring = string.slice(0, length); // Change this line

// 	return substring;
// }

function formatMessage(message, maxLength) {
	let result;
	// Change code below this line
	//
	if (message.length <= maxLength) {
		result = maxLength;
	} else {
		result = message.slice(0, maxLength) + "...";
	}
	/// Change code above this line
	return result;
}
