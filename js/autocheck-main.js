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

// function includes(array, value) {
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

// for (let items of array) {
// 	if (items === value) {
// 		return true;
// 	}
// }
// return false;
// if (array.includes(value)) {
// 	return true;
// }
// return false;
// Change code above this line
// }
// console.log(includes([1, 2, 3, 4, 5], 3));

// Объявлена функция includes(array, value)
// Вызов includes([1, 2, 3, 4, 5], 3) возвращает true
// Вызов includes([1, 2, 3, 4, 5], 17) возвращает false
// Вызов includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter") возвращает true
// Вызов includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus") возвращает false
// Вызов includes(["apple", "plum", "pear", "orange"], "plum") возвращает true
// Вызов includes(["apple", "plum", "pear", "orange"], "kiwi") возвращает false
// Вызов includes() для случайного массива со случайным value возвращает верный boolean
// В функции includes используется for, return, но не метод массива includes

//  ========================== block 3  ========================

// =========================== 12 =================================

// Напиши функцию countProps(object),
// которая считает и возвращает количество
// собственных свойств объекта в параметре object.
// Используй переменную propCount
//  для хранения количества свойств объекта.

// function countProps(object) {
// 	let propCount = 0;
// 	// Change code below this line
// 	const entries = Object.entries(object);
// 	console.log(entries);
// 	let entriesLength = Object.entries(object).length;
// 	console.log(entriesLength);
// 	propCount = entriesLength;
// 	// Change code above this line
// 	return propCount;
// }

// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));
// Вызов countProps({ name: "Mango", age: 2 }) возвращает 2
// Вызов countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }) возвращает 3
// Функция подсчитывает только собственные свойства объекта

//  ========================== 13 ================================

// Перебери объект apartment используя метод Object.keys() и цикл for...of.
//  Запиши в переменную keys массив ключей собственных свойств объекта apartment,
// 	и добавь в массив values все значения его свойств.

// const apartment = {
// 	descr: "Spacious apartment in the city center",
// 	rating: 4,
// 	price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);
// // console.table(keys);
// for (const key of keys) {
// 	console.table(apartment[key]);
// 	values.push(apartment[key]);
// }

// console.log(values);

//     Объявлена переменная apartment.
//     Значение переменной apartment это объект.
//     Объявлена переменная keys.
//     Значение переменной keys это массив ["descr", "rating", "price"].
//     Значение переменной keys получено с помощью метода Object.keys().
//     Объявлена переменная values.
//     Значение переменной values это массив ["Spacious apartment in the city center", 4, 2153].
//         Значение переменной values получено с помощью цикла for...of.

// const keys = Object.keys(apartment);
// const valuesOfAppartment = Object.values(apartment);
// console.log(valuesOfAppartment);
// for (const value of valuesOfAppartment) {
// 	console.log(value);
// 	console.log(values);
// 	values.push(value);
// }

// ========================== 14 =====================

// function countProps(object) {
// 	// Change code below this line
// 	let propCount = 0;
// 	const keys = Object.keys(object);

// 	// console.log(keys);

// 	return Object.keys(object).length;
// 	// Change code above this line
// }

// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500, hello: true }));

// ================ 16 ======================================
// Напиши функцию countTotalSalary(salaries)
// которая принимает объект зарплат, где имя свойства это имя сотрудника,
// 	а значение свойства это зарплата.
// 	Функция должна рассчитать общую сумму зарплат сотрудников и
// 	вернуть её.
//  Используй переменную totalSalary для хранения общей суммы зарплаты.

// function countTotalSalary(salaries) {
// 	let totalSalary = 0;
// 	// Change code below this line
// 	const keys = Object.keys(salaries);
// 	for (let key of keys) {
// 		console.log(salaries[key]);
// 		totalSalary += salaries[key];
// 	}
// 	// Change code above this line
// 	return totalSalary;
// }

// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));
// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));
// Объявлена функция countTotalSalary(salaries)
// Вызов countTotalSalary({}) возвращает 0
// Вызов countTotalSalary({ mango: 100, poly: 150, alfred: 80 }) возвращает 330
// Вызов countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }) возвращает 400
// Функция учитывает только собственные свойства объекта

// ============== 17 ====================

// Перебери массив объектов colors используя цикл for...of.
//  Добавь в массив hexColors значения свойств hex,
// 	а в массив rgbColors значения свойств rgb из всех
// 	 объектов массива colors.

// const colors = [
// 	{ hex: "#f44336", rgb: "244,67,54" },
// 	{ hex: "#2196f3", rgb: "33,150,243" },
// 	{ hex: "#4caf50", rgb: "76,175,80" },
// 	{ hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const color of colors) {
// 	hexColors.push(color.hex);
// 	rgbColors.push(color.rgb);
// }

// console.log(hexColors);
// console.log(rgbColors);
//     Объявлена переменная colors
//     Значение переменной colors это массив
//     Объявлена переменная hexColors
//     Значение переменной hexColors это массив ["#f44336", "#2196f3", "#4caf50", "#ffeb3b"]
//     Объявлена переменная rgbColors
//     Значение переменной rgbColors это массив ["244,67,54", "33,150,243", "76,175,80", "255,235,59"]

// ================ 18 =============

// Напиши функцию getProductPrice(productName)
//  которая принимает один параметр productName - название продукта
// 	.Функция ищет объект продукта с таким именем(свойство name)
// 	 в массиве products и возвращает его цену(свойство price).
// 	 Если продукт с таким названием не найден,
// 	функция должна возвращать null.

// const products = [
// 	{ name: "Radar", price: 1300, quantity: 4 },
// 	{ name: "Scanner", price: 2700, quantity: 3 },
// 	{ name: "Droid", price: 400, quantity: 7 },
// 	{ name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
// 	// Change code below this line
// 	for (const product of products) {
// 		console.log(product);
// 		if (product.name === productName) {
// 			return product.price;
// 		}
// 	}
// 	return null;
// 	// Change code above this line
// }

// console.log(getProductPrice("Scanner"));

//     Объявлена функция getProductPrice(productName).
//     Вызов getProductPrice("Radar") возвращает 1300.
//     Вызов getProductPrice("Grip") возвращает 1200.
//     Вызов getProductPrice("Scanner") возвращает 2700.
//     Вызов getProductPrice("Droid") возвращает 400.
//     Вызов getProductPrice("Engine") возвращает null.

// ================== 19 ===================

// Напиши функцию getAllPropValues(propName)
//  которая принимает один параметр propName - имя(ключ) свойства.
//  Функция должна вернуть массив всех значений свойства с таким
//   именем из каждого объекта в массиве products.Если в объектах
//   нет свойства с таким именем, функция должна вернуть пустой массив.

// const products = [
// 	{ name: "Radar", price: 1300, quantity: 4 },
// 	{ name: "Scanner", price: 2700, quantity: 3 },
// 	{ name: "Droid", price: 400, quantity: 7 },
// 	{ name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
// 	// Change code below this line
// 	const props = [];
// 	for (const product of products)
// 		if (product[propName]) {
// 			props.push(product[propName]);
// 		}
// 	return props;
// 	// Change code above this line
// }

// console.log(getAllPropValues("name"));
// console.log(getAllPropValues("quantity"));
// console.log(getAllPropValues("price"));
// console.log(getAllPropValues("category"));

//     Объявлена функция getAllPropValues(propName)
//     Вызов getAllPropValues("name") возвращает ["Radar", "Scanner", "Droid", "Grip"]
//     Вызов getAllPropValues("quantity") возвращает [4, 3, 7, 9]
//     Вызов getAllPropValues("price") возвращает [1300, 2700, 400, 1200]
//     Вызов getAllPropValues("category") возвращает []

// ================= 20 =======================

// Напиши функцию calculateTotalPrice(productName)
//  которая принимает один параметр productName - название товара.
//  Функция должна вернуть общую стоимость(цена * количество)
//  товара с таким именем из массива products.

// const products = [
// 	{ name: "Radar", price: 1300, quantity: 4 },
// 	{ name: "Scanner", price: 2700, quantity: 3 },
// 	{ name: "Droid", price: 400, quantity: 7 },
// 	{ name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
// 	// Пиши код ниже этой строки
// 	let totalPrice = 0;
// 	for (product of products)
// 		if (product.name === productName) {
// 			// console.log(product.price * product.quantity);
// 			totalPrice = product.price * product.quantity;
// 		}
// 	return totalPrice;
// 	// Пиши код выше этой строки
// }
// console.log(calculateTotalPrice("Radar"));
// console.log(calculateTotalPrice("Blaster"));

//     Объявлена функция calculateTotalPrice(productName)
//     Вызов calculateTotalPrice("Blaster") возвращает 0
//     Вызов calculateTotalPrice("Radar") возвращает 5200
//     Вызов calculateTotalPrice("Droid") возвращает 2800
//     Вызов calculateTotalPrice("Grip") возвращает 10800
//     Вызов calculateTotalPrice("Scanner") возвращает 8100

// ================= 21 =======================

// Пришел трёхдневный прогноз максимальных температур и мы считаем среднюю температуру
//  за три дня(meanTemperature).Замени объявления переменных yesterday, today и tomorrow
//  одной операцией деструктуризации свойств объекта highTemperatures.

// const highTemperatures = {
// 	yesterday: 28,
// 	today: 26,
// 	tomorrow: 33,
// };
// // Change code below this line
// const { yesterday, today, tomorrow } = highTemperatures;

// // const yesterday = highTemperatures.yesterday;
// // const today = highTemperatures.today;
// // const tomorrow = highTemperatures.tomorrow;

// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;

//     Объявлена переменная highTemperatures
//     Значение переменной highTemperatures это объект
//     Объявлена переменная yesterday с помощью деструктуризации
//     Значение переменной yesterday это число 28
//     Объявлена переменная today с помощью деструктуризации
//     Значение переменной today это число 26
//     Объявлена переменная tomorrow с помощью деструктуризации
//     Значение переменной tomorrow это число 33
//     Объявлена переменная meanTemperature
//     Значение переменной meanTemperature это число 29
//     Используется синтаксис деструктуризации объекта highTemperatures

// ================= 22 =======================
// const highTemperatures = {
// 	yesterday: 28,
// 	today: 26,
// 	tomorrow: 33,
// };
// // Change code below this line
// const {
// 	yesterday,
// 	today,
// 	tomorrow,
// 	icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
// } = highTemperatures;
// // const yesterday = highTemperatures.yesterday;
// // const today = highTemperatures.today;
// // const tomorrow = highTemperatures.tomorrow;
// // const icon = highTemperatures.icon;

// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;
// console.log(meanTemperature);

// ================= 23 =======================
// const highTemperatures = {
// 	yesterday: 28,
// 	today: 26,
// 	tomorrow: 33,
// };
// // Change code below this line

// const {
// 	yesterday: highYesterday,
// 	today: highToday,
// 	tomorrow: highTomorrow,
// 	icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
// } = highTemperatures;

// // const highYesterday = highTemperatures.yesterday;
// // const highToday = highTemperatures.today;
// // const highTomorrow = highTemperatures.tomorrow;
// // const highIcon = highTemperatures.icon;

// // Change code above this line
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

// ================= 24 =======================
// const colors = [
// 	{ hex: "#f44336", rgb: "244,67,54" },
// 	{ hex: "#2196f3", rgb: "33,150,243" },
// 	{ hex: "#4caf50", rgb: "76,175,80" },
// 	{ hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const { hex, rgb } of colors) {
// 	hexColors.push(hex);
// 	rgbColors.push(rgb);
// }

// console.log(hexColors);

// ================= 25 =======================
// const forecast = {
// 	today: {
// 		low: 28,
// 		high: 32,
// 		icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
// 	},
// 	tomorrow: {
// 		low: 27,
// 		high: 31,
// 	},
// };
// Change code below this line

// const {
// 	today: {
// 		low: lowToday,
// 		high: highToday,
// 		icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
// 	},
// 	tomorrow: {
// 		low: lowTomorrow,
// 		high: highTomorrow,
// 		icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
// 	},
// } = forecast;

// console.log(highTomorrow);

// const highToday = forecast.today.high;
// const lowToday = forecast.today.low;
// const todayIcon = forecast.today.icon;

// const highTomorrow = forecast.tomorrow.high;
// const lowTomorrow = forecast.tomorrow.low;
// const tomorrowIcon = forecast.tomorrow.icon;

// ================= 26 =======================

// Замени объявления переменных todayLow, todayHigh,
// 	tomorrowLow и tomorrowHigh одной операцией деструктуризации
// 	 свойств объекта forecast.

// Change code below this line
// const forecast = {
// 	today: { low: 10, high: 20 },
// 	tomorrow: { low: 20, high: 30 },
// };

// function calculateMeanTemperature(forecast) {
// 	//   const todayLow = forecast.today.low;
// 	//   const todayHigh = forecast.today.high;
// 	//   const tomorrowLow = forecast.tomorrow.low;
// 	//   const tomorrowHigh = forecast.tomorrow.high;

// 	const {
// 		today: { low: todayLow, high: todayHigh },
// 		tomorrow: { low: tomorrowLow, high: tomorrowHigh },
// 	} = forecast;
// 	// Change code above this line
// 	return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }
// console.log(calculateMeanTemperature({ today: { low: 28, high: 32 }, tomorrow: { low: 25, high: 29 } }));
//     Объявлена функция calculateMeanTemperature(forecast)
//     В теле функции используется деструктуризация объекта
//     В теле функции объявлена переменная todayHigh с помощью деструктуризации
//     В теле функции объявлена переменная todayLow с помощью деструктуризации
//     В теле функции объявлена переменная tomorrowLow с помощью деструктуризации
//     В теле функции объявлена переменная tomorrowHigh с помощью деструктуризации
//     Вызов calculateMeanTemperature({ today: {low: 28, high: 32}, tomorrow: {low: 25, high: 29} }) возвращает 28.5
//     Вызов calculateMeanTemperature({ today: {low: 37, high: 40}, tomorrow: {low: 33, high: 38} }) возвращает 37

// ================= 27 =======================

// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);

// console.log(bestScore);
// console.log(worstScore);

// ================= 28 =======================

// ================= 29 =======================

// ================= 30 =======================

// Напиши функцию makeTask(data) которая принимает один параметр data
// 	- объект со следующими свойствами.

//     text - текст задачи.
//     category - категория задачи.
//     priority - приоритет задачи.

// Функция должна составить и вернуть новый объект задачи,
// 	не изменяя напрямую параметр data.
// 	В новом объекте должно быть свойство completed,
// 	значение которого хранится в одноимённой локальной переменной.

// В параметре data гарантированно будет только свойство text,
// 	а остальные два, category и priority, могут отсутствовать.
// 	Тогда, в новом объекте задачи,
// 	в свойствах category и priority должны быть значения по
// умолчанию, хранящиеся в одноимённых локальных переменных.

// function makeTask(data) {
// 	const completed = false;
// 	const category = "General";
// 	const priority = "Normal";
// 	// Change code below this line
// 	const myArray = { category, priority, ...data, completed };

// 	return myArray;
// 	// Change code above this line
// }

// console.log(makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" }));
// console.log(makeTask({ priority: "Low", text: "Choose shampoo" }));
//     Объявлена функция makeTask(data)
//     Вызов makeTask({}) возвращает { category: "General", priority: "Normal", completed: false }
//     Вызов makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" }) возвращает { category: "Homemade", priority: "Low", text: "Take out the trash", completed: false }
//     Вызов makeTask({ category: "Finance", text: "Take interest" }) возвращает { category: "Finance", priority: "Normal", text: "Take interest", completed: false }
//     Вызов makeTask({ priority: "Low", text: "Choose shampoo" }) возвращает { category: "General", priority: "Low", text: "Choose shampoo", completed: false }
//     Вызов makeTask({ text: "Buy bread" }) возвращает { category: "General", priority: "Normal", text: "Buy bread", completed: false }

// ================= 31 =======================

// Change code below this line
// function add(...args) {
// 	let total = 0;
// 	for (let arg of args) {
// 		total += arg;
// 	}
// 	return total;
// 	// Change code above this line
// }
// console.log(add(12, 4, 11, 48));
// console.log(add(32, 6, 13, 19, 8));
// ================= 32 =======================

function addOverNum(firstNumber, ...args) {
	let total = 0;

	for (const arg of args) {
		// console.log(args);
		if (firstNumber > arg) {
			total += arg;
		}
	}

	//   total += arg;
	// }

	return total;
	// Change code above this line
}
console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));

// ================= 33 =======================

// ================= 34 =======================

// ================= 35 =======================

// ================= 36 =======================

// ================= 37 =======================

// ================= 39 =======================

// ================= 40 =======================

// ================= 41 =======================
