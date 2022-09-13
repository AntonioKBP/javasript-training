// ========================= 1 ==============================
// function makePizza() {
// 	return "Your pizza is being prepared, please wait.";
// }
// // Change code below this line

// const result = console.log(makePizza());
// const pointer = console.log(makePizza);
// ========================= # ==============================
// function deliverPizza(pizzaName) {
// 	return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
// 	return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// // Chande code below this line
// function makeMessage(pizzaName, callback) {
// 	return callback(pizzaName);
// }
// console.log(makeMessage("Royal Grand", makePizza));
// console.log(makeMessage("Ultracheese", deliverPizza));

// Функция makeMessage принимает два параметра,
// названые согласно задания, pizzaName и callback
// Вызов makeMessage("Royal Grand", makePizza)
//  возвращает строку "Pizza Royal Grand is being prepared, please wait..."
// Вызов makeMessage("Ultracheese", deliverPizza)
// возвращает строку "Delivering Ultracheese pizza."

// ========================= 4 ==============================

// Необходимо написать логику обработки заказа пиццы.Выполни рефакторинг метода order так,
// чтобы он принимал вторым и третим параметрами два колбэка onSuccess и onError.

// Если в свойстве pizzas нет пиццы с названием из параметра pizzaName,
// метод order должен возвращать результат вызова колбэка onError,
// 	передавая ему аргументом строку
// "There is no pizza with a name <имя пиццы> in the assortment."
//     Если в свойстве pizzas есть пицца с названием из параметра pizzaName,
// 	метод order должен возвращать результат вызова колбэка onSuccess,
// 		передавая ему аргументом имя заказанной пиццы.

// После объявления объекта pizzaPalace мы добавили колбэки и вызовы методов.
//  Пожалуйста ничего там не меняй.

// const pizzaPalace = {
// 	pizzas: ["Ultracheese", "Smoked", "Four meats"],
// 	order(pizzaName, onAvailable, onNotAvailable) {
// 		for (const pizza of this.pizzas) {
// 			if (pizzaName === pizza) {
// 				return makePizza(pizzaName); // console.log(pizzaName);
// 			}
// 		}
// 		return onOrderError(`There is no pizza with a name ${pizzaName} in the assortment.`);
// 	},
// };

// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
// 	return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
// 	return `Error! ${error}`;
// }
// console.log(pizzaPalace.order("Smoked", makePizza, onOrderError));
// console.log(pizzaPalace.order("Four meats", makePizza, onOrderError));
// console.log(pizzaPalace.order("Big Mike", makePizza, onOrderError));
// console.log(pizzaPalace.order("Vienna", makePizza, onOrderError));
// // Method calls with callbacks
// pizzaPalace.order("Smoked", makePizza, onOrderError);
// pizzaPalace.order("Four meats", makePizza, onOrderError);
// pizzaPalace.order("Big Mike", makePizza, onOrderError);
// pizzaPalace.order("Vienna", makePizza, onOrderError);
// Метод order объявляет три параметра
// Вызов pizzaPalace.order("Smoked", makePizza, onOrderError)
// возвращает "Your order is accepted. Cooking pizza Smoked."
// Вызов pizzaPalace.order("Four meats", makePizza, onOrderError)
// возвращает "Your order is accepted. Cooking pizza Four meats."
// Вызов pizzaPalace.order("Big Mike", makePizza, onOrderError)
// возвращает "Error! There is no pizza with a name Big Mike in the assortment."
// Вызов pizzaPalace.order("Vienna", makePizza, onOrderError)
// возвращает "Error! There is no pizza with a name Vienna in the assortment."

// ========================= 5 ==============================

// const numbers = [5, 10, 15, 20, 25];

// // Классический for
// for (let i = 0; i < numbers.length; i += 1) {
// 	console.log(`Индекс ${i}, значение ${numbers[i]}`);
// }

// // Перебирающий forEach
// numbers.forEach(function (number, index) {
// 	console.log(`Индекс ${index}, значение ${number}`);
// });

// function calculateTotalPrice(orderedItems) {
// 	let totalPrice = 0;
// 	// Change code below this line

// 	// for (let i = 0; i < orderedItems.length; i += 1) {
// 	// 	totalPrice += orderedItems[i];
// 	// }
// 	orderedItems.forEach(element => {
// 		totalPrice += element;
// 	});

// 	// Change code above this line
// 	return totalPrice;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));

// ========================= 6 ==============================

// Функция filterArray(numbers, value) принимает массив чисел numbers
// и возвращает новый массив, в котором будут только те элементы оригинального
// массива, которые больше чем значение параметра value.

// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала
//  метод forEach.

// function filterArray(numbers, value) {
// 	const filteredNumbers = [];
// 	// Change code below this line
// 	numbers.forEach(element => {
// 		if (element > value) {
// 			filteredNumbers.push(element);
// 		}
// 	});

// 	// for (let i = 0; i < numbers.length; i += 1) {
// 	// 	if (numbers[i] > value) {
// 	// 		filteredNumbers.push(numbers[i]);
// 	// 	}
// 	// }

// 	// Change code above this line
// 	return filteredNumbers;
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));
// Объявлена функция filterArray(numbers, value)
// Для перебора массива numbers использован метод forEach
// Вызов функции filterArray([1, 2, 3, 4, 5], 3) возвращает [4, 5]
// Вызов функции filterArray([1, 2, 3, 4, 5], 4) возвращает [5]
// Вызов функции filterArray([1, 2, 3, 4, 5], 5) возвращает []
// Вызов функции filterArray([12, 24, 8, 41, 76], 38) возвращает [41, 76]
// Вызов функции filterArray([12, 24, 8, 41, 76], 20) возвращает [24, 41, 76]
// Вызов функции со случайными, но валидными аргументами,
// возвращает правильное значение

// ========================= 7 ==============================

// function getCommonElements(firstArray, secondArray) {
// 	const commonElements = [];
// 	// Change code below this line

// 	firstArray.forEach(element => {
// 		if (secondArray.includes(element)) {
// 			commonElements.push(element);
// 		}
// 	});

// 	// for (let i = 0; i < firstArray.length; i += 1) {
// 	// 	if (secondArray.includes(firstArray[i])) {
// 	// 		commonElements.push(firstArray[i]);
// 	// 	}
// 	// }

// 	return commonElements;
// 	// Change code above this line
// }
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));

// ========================= 10 ==============================

// Выполни рефакторинг функции calculateTotalPrice(orderedItems)
// заменив её объявление на стрелочную функцию.
//  Замени коллбек - функцию передаваемую в метод forEach() на стрелочную функцию.

// const calculateTotalPrice = orderedItems => {
// 	let totalPrice = 0;

// 	orderedItems.forEach((number, index, array) => {
// 		// console.log(` this number ${number} has index ${index} from that array ${array}`);
// 		totalPrice += number;
// 	});

// 	return totalPrice;
// };

// console.log(calculateTotalPrice([12, 85, 37, 4]));
// ========================= 13 =============================

// Функция changeEven(numbers, value)
// принимает массив чисел numbers и обновляет каждый элемент,
// значение которого это чётное число, добавляя к нему значение параметра value.

// Выполни рефакторинг функции так, чтобы она стала чистой
// 	- не изменяла массив чисел numbers,
// 	а создавала, наполняла и возвращала новый массив с
// 		обновлёнными значениями.

function changeEven(numbers, value) {
	// Change code below this line
	const newArray = [];
	// console.log(newArray);
	numbers.forEach(element => {
		if (element % 2 === 0) {
			newArray.push(element + value);
			// console.log(newArray);
		}
	});
	return newArray;

	// for (let i = 0; i < numbers.length; i += 1) {
	// 	if (numbers[i] % 2 === 0) {
	// 		numbers[i] = numbers[i] + value;
	// 		console.log(numbers[i]);
	// 	}
	// }
	// Change code above this line
}
console.log(changeEven([1, 2, 3, 4, 5], 10));

// Вызов changeEven([1, 2, 3, 4, 5], 10)
// возвращает новый массив[1, 12, 3, 14, 5]
// Вызов changeEven([2, 8, 3, 7, 4, 6], 10)
// возвращает новый массив[12, 18, 3, 7, 14, 16]
// Вызов changeEven([17, 24, 68, 31, 42], 100)
// возвращает новый массив[17, 124, 168, 31, 142]
// Вызов changeEven([44, 13, 81, 92, 36, 54], 100)
// возвращает новый массив[144, 13, 81, 192, 136, 154]
// ========================= # ==============================
// ========================= # ==============================
// ========================= # ==============================
