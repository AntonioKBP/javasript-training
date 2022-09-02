// Напиши функцию calculateTotal(number),
// 	которая принимает целое число(параметр number)
// 	и возвращает сумму всех целых чисел от единицы и до этого числа.
// 	Например, если number равно 3, то сумма это 1 + 2 + 3, то есть 6.

// создать переменную клторая разобьёт число

// создать переменную клторая сплюсует эти числа
// function calculateTotal(number) {
// 	// Change code below this line
// 	let sum = 0;
// 	for (let i = 0; i >= number; i += 1) {
// 		sum += i;
// 	}
// 	return sum;
// 	// Change code above this line
// }

// console.log(calculateTotal(1236));

// 22 ================================================================================

// function createArrayOfNumbers(min, max) {
// 	const numbers = [];
// 	// Change code below this line
// 	for (let i = min; i <= max; i += 1)
// 		// i = newArray
// 		// numbers.push(newArray);
// 		numbers.push(i);
// 	// Change code above this line
// 	return numbers;
// }
// console.log(createArrayOfNumbers(29, 34));

// 23 ================================================================================

// Напиши функцию filterArray(numbers, value),
// 	которая принимает массив чисел(параметр numbers) и возвращает новый массив,
// 	в котором будут только те элементы массива numbers,
// 	которые больше чем значение параметра value(число).

// 1 перечислить массив через for

// 2 исползовать push для чисел более value

// function filterArray(numbers, value) {
// 	let newArray = [];
// 	for (const number of numbers) {
// 		if (numbers[i] > value) {
// 			newArray.push(number[i]);
// 		}
// 		return newArray;
// 	}
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));

// function filterArray(numbers, value) {
// 	const newArray = [];

// 	for (let i = 0; i < numbers.length; i += 1) {
// 		if (numbers[i] > value) {
// 			newArray.push(numbers[i]);
// 		}
// 	}
// 	return newArray;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));

// Вызов функции filterArray([1, 2, 3, 4, 5], 3) возвращает [4, 5]
// Вызов функции filterArray([1, 2, 3, 4, 5], 4) возвращает [5]
// Вызов функции filterArray([1, 2, 3, 4, 5], 5) возвращает []
// Вызов функции filterArray([12, 24, 8, 41, 76], 38) возвращает [41, 76]
// Вызов функции filterArray([12, 24, 8, 41, 76], 20) возвращает [24, 41, 76]
// Вызов функции filterArray() со случайным массивом и числом возвращает правильный массив
// В цикле for использовался метод push

// ==========================   25   ================================

// Общими элементами массивов называют те элементы,
//     которые присутствуют во всех массивах.
//     Например, в двух массивах[1, 3, 5] и[0, 8, 5, 3]
//     общими будут числа 3 и 5, т.к.они присутствуют в обоих
//     исходных массивах.А числа 0, 1 и 8
//     присутствуют только в одном из массивов.

// Напиши функцию getCommonElements(array1, array2)
//  которая получает два массива произвольной длины в
//  параметры array1 и array2, и возвращает новый массив,
// состоящий из тех элементов, которые присутствуют в обоих
//  исходных массивах.

// write here

// Вызов getCommonElements([1, 2, 3], [2, 4]) возвращает [2]
// Вызов getCommonElements([1, 2, 3], [2, 1, 17, 19]) возвращает [1, 2]
// Вызов getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]) возвращает [12, 27, 3]
// Вызов getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]) возвращает [10, 30, 40]
// Вызов getCommonElements([1, 2, 3], [10, 20, 30]) возвращает []

// ==========================   26  =================================
// function calculateTotalPrice(order) {
// 	let total = 0;
// 	// Change code below this line

// 	for (const item of order) {
// 		total += item;
// 		console.log(item);
// 	}
// 	// Change code above this line
// 	return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));

// ====================   27  ==========================

// function filterArray(numbers, value) {
// 	// Change code below this line
// 	const filteredNumbers = [];

// 	for (const number of numbers) {
// 		if (number > value) {
// 			filteredNumbers.push(number);
// 		}
// 	}
// 	return filteredNumbers;

// 	// Change code above this line
// }

// ======================   28 =========================

// const a = 3 % 3;
// console.log(`a =`, a);
// const b = 4 % 3;
// console.log(`b =`, b);
// const c = 11 % 4;
// console.log(`c =`, c);
// const d = 12 % 7;
// console.log(`d =`, d);
// const e = 8 % 6;
// console.log(`e =`, e);

// Объявлена переменная a
// Значение переменной a это число 0
// Объявлена переменная b
// Значение переменной b это число 1
// Объявлена переменная c
// Значение переменной c это число 3
// Объявлена переменная d
// Значение переменной d это число 5
// Объявлена переменная e
// Значение переменной e это число 2

// =================    29    =====================

// Напиши функцию getEvenNumbers(start, end)
// которая возвращает массив всех чётных чисел от start до end.
// Чётным считается число которое делится на 2 без остатка(10 % 2 === 0).

// function getEvenNumbers(start, end) {
// 	const evenArray = [];
// 	for (let i = start; i <= end; i += 1) {
// 		if (i % 2 === 0) {
// 			evenArray.push(i);
// 		}
// 	}
// 	return evenArray;
// }

// console.log(getEvenNumbers(7, 7));
// Объявлена функция getEvenNumbers(start, end)
// Вызов функции getEvenNumbers(2, 5) возвращает [2, 4]
// Вызов функции getEvenNumbers(3, 11) возвращает [4, 6, 8, 10]
// Вызов функции getEvenNumbers(6, 12) возвращает [6, 8, 10, 12]
// Вызов функции getEvenNumbers(8, 8) возвращает [8]
// Вызов функции getEvenNumbers(7, 7) возвращает []
// Вызов функции getEvenNumbers() со случайными start и end
// возвращает правильный массив

// =========================  30  =====================

// Дополни код так, чтобы в переменную number записывалось
//  первое число от start до end,
// которое делится на 5 без остатка.

// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
// 	if (i % 5 === 0) {
// 		number = i;
// 		break;
// 	}
// }

// Объявлена переменная start со значением 6
// Объявлена переменная end со значением 27
// Объявлена переменная number без инициализации
// Итоговое значение переменной number равно 10
// В цикле for используется break для выхода
// до завершения всех итераций цикла

// =========================  32  ========================

function includes(array, value) {
	// Change code below this line
	// const arrLength = array.length;
	// for (let i = 0; i <= arrLength; i += 1) {
	// 	// console.log(array[i]);
	// 	if (array[i] === value) {
	// 		return true;
	// 	}
	// }
	// return false;
	//  Correct(dont forget } at the end)

	// for (let i = 0; i < array.length; i += 1) {
	// 	if (array[i] === value) {
	// 		return true;
	// 	}
	// 	return false;
	// }

	// const clients = ["Mango", "Ajax", "Poly"];

	// for (const client of clients) {
	// 	console.log(client);
	// }

	// const string = "javascript";

	// for (const character of string) {
	// 	console.log(character);
	// }

	for (let items of array) {
		if (items === value) {
			return true;
		}
	}
	return false;
	// if (array.includes(value)) {
	// 	return true;
	// }
	// return false;
	// Change code above this line
}
console.log(includes([1, 2, 3, 4, 5], 3));

// Объявлена функция includes(array, value)
// Вызов includes([1, 2, 3, 4, 5], 3) возвращает true
// Вызов includes([1, 2, 3, 4, 5], 17) возвращает false
// Вызов includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter") возвращает true
// Вызов includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus") возвращает false
// Вызов includes(["apple", "plum", "pear", "orange"], "plum") возвращает true
// Вызов includes(["apple", "plum", "pear", "orange"], "kiwi") возвращает false
// Вызов includes() для случайного массива со случайным value возвращает верный boolean
// В функции includes используется for, return, но не метод массива includes
