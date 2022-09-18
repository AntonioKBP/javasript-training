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

// function changeEven(numbers, value) {
// 	// Change code below this line
// 	const newArray = [];

// 	numbers.forEach(element => {
// 		if (element % 2 === 0) {
// 			newArray.push(element + value);
// 		} else {
// 			newArray.push(element);
// 		}
// 		// newArray.push(element);
// 	});
// 	return newArray;

// 	// for (let i = 0; i < numbers.length; i += 1) {
// 	// 	if (numbers[i] % 2 === 0) {
// 	// 		numbers[i] = numbers[i] + value;
// 	// 		console.log(numbers[i]);
// 	// 	}
// 	// }
// 	// Change code above this line
// }
// console.log(changeEven([1, 2, 3, 4, 5], 10));

// Вызов changeEven([1, 2, 3, 4, 5], 10)
// возвращает новый массив[1, 12, 3, 14, 5]
// Вызов changeEven([2, 8, 3, 7, 4, 6], 10)
// возвращает новый массив[12, 18, 3, 7, 14, 16]
// Вызов changeEven([17, 24, 68, 31, 42], 100)
// возвращает новый массив[17, 124, 168, 31, 142]
// Вызов changeEven([44, 13, 81, 92, 36, 54], 100)
// возвращает новый массив[144, 13, 81, 192, 136, 154]

// ========================= 14 ==============================

// Дополни код так, чтобы в переменной planetsLengths получился массив длин
// названий планет.Обязательно используй метод map().

//     Объявлена переменная planets
//     Значение переменной planets это массив ["Earth", "Mars", "Venus", "Jupiter"]
//     Объявлена переменная planetsLengths
//     Значение переменной planetsLengths это массив [5, 4, 5, 7]
//     Для перебора массива планет использован метод map()

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// // Change code below this line
// const planetsLengths = planets.map(planet => planet.length);

// console.log(planetsLengths);
// ========================= 17 ==============================
// const users = [
// 	{
// 		name: "Moore Hensley",
// 		email: "moorehensley@indexia.com",
// 		eyeColor: "blue",
// 		friends: ["Sharron Pace"],
// 		isActive: false,
// 		balance: 2811,
// 		skills: ["ipsum", "lorem"],
// 		gender: "male",
// 		age: 37,
// 	},
// 	{
// 		name: "Sharlene Bush",
// 		email: "sharlenebush@tubesys.com",
// 		eyeColor: "blue",
// 		friends: ["Briana Decker", "Sharron Pace"],
// 		isActive: true,
// 		balance: 3821,
// 		skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
// 		gender: "female",
// 		age: 34,
// 	},
// 	{
// 		name: "Ross Vazquez",
// 		email: "rossvazquez@xinware.com",
// 		eyeColor: "green",
// 		friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
// 		isActive: false,
// 		balance: 3793,
// 		skills: ["nulla", "anim", "proident", "ipsum", "elit"],
// 		gender: "male",
// 		age: 24,
// 	},
// 	{
// 		name: "Elma Head",
// 		email: "elmahead@omatom.com",
// 		eyeColor: "green",
// 		friends: ["Goldie Gentry", "Aisha Tran"],
// 		isActive: true,
// 		balance: 2278,
// 		skills: ["adipisicing", "irure", "velit"],
// 		gender: "female",
// 		age: 21,
// 	},
// 	{
// 		name: "Carey Barr",
// 		email: "careybarr@nurali.com",
// 		eyeColor: "blue",
// 		friends: ["Jordan Sampson", "Eddie Strong"],
// 		isActive: true,
// 		balance: 3951,
// 		skills: ["ex", "culpa", "nostrud"],
// 		gender: "male",
// 		age: 27,
// 	},
// 	{
// 		name: "Blackburn Dotson",
// 		email: "blackburndotson@furnigeer.com",
// 		eyeColor: "brown",
// 		friends: ["Jacklyn Lucas", "Linda Chapman"],
// 		isActive: false,
// 		balance: 1498,
// 		skills: ["non", "amet", "ipsum"],
// 		gender: "male",
// 		age: 38,
// 	},
// 	{
// 		name: "Sheree Anthony",
// 		email: "shereeanthony@kog.com",
// 		eyeColor: "brown",
// 		friends: ["Goldie Gentry", "Briana Decker"],
// 		isActive: true,
// 		balance: 2764,
// 		skills: ["lorem", "veniam", "culpa"],
// 		gender: "female",
// 		age: 39,
// 	},
// ];

// const getUserNames = users => {
// 	return users.map(user => user.name);
// 	console.log(user);
// };
// console.log(getUserNames);
// console.log(users);

// ========================= 19 =============================

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Change code below this line

// const evenNumbers = numbers.filter(number => number % 2 === 0);
// const oddNumbers = numbers.filter(number => number % 2 === 1);
// console.log(evenNumbers);
// console.log(oddNumbers);

// ========================= 20 =============================

// const books = [
// 	{
// 		title: "The Last Kingdom",
// 		author: "Bernard Cornwell",
// 		genres: ["adventure", "history"],
// 	},
// 	{
// 		title: "Beside Still Waters",
// 		author: "Robert Sheckley",
// 		genres: ["fiction", "mysticism"],
// 	},
// 	{
// 		title: "Redder Than Blood",
// 		author: "Tanith Lee",
// 		genres: ["horror", "mysticism", "adventure"],
// 	},
// ];
// // Change code below this line
// const allGenres = books.flatMap(book => book.genres);
// const uniqueGenres = allGenres.filter((genre, index, array) => array.indexOf(genre) === index);
// console.log(allGenres);
// console.log(uniqueGenres);
// ========================= 21 ==============================

// Используя метод filter() дополни код так, чтобы:

//     В переменной topRatedBooks получился массив книг рейтинг которых(свойство rating)
// 	 больше либо равно значению переменной MIN_RATING.
//     В переменной booksByAuthor получился массив книг написанных автором с
// именем(свойство author) которое совпадает со значением в переменной AUTHOR

// const books = [
// 	{
// 		title: "The Last Kingdom",
// 		author: "Bernard Cornwell",
// 		rating: 8.38,
// 	},
// 	{
// 		title: "Beside Still Waters",
// 		author: "Robert Sheckley",
// 		rating: 8.51,
// 	},
// 	{
// 		title: "The Dream of a Ridiculous Man",
// 		author: "Fyodor Dostoevsky",
// 		rating: 7.75,
// 	},
// 	{ title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
// 	{ title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";
// // Change code below this line

// const topRatedBooks = books.filter(book => {
// 	return book.rating > MIN_RATING;
// });
// const booksByAuthor = books.filter(book => {
// 	return book.author === AUTHOR;
// });

// console.log(topRatedBooks);
// console.log(booksByAuthor);

// Объявлена переменная books
// Значение переменной books это массив объектов
// Объявлена переменная MIN_RATING
// Значение переменной MIN_RATING это число 8
// Объявлена переменная AUTHOR
// Значение переменной AUTHOR это строка "Bernard Cornwell"
// Объявлена переменная topRatedBooks
// Значение переменной topRatedBooks это массив книг с рейтингов выше 8
// Объявлена переменная booksByAuthor
// Значение переменной booksByAuthor это массив книг автор которых "Bernard Cornwell"
// Для перебора массива books использован метод filter()

// ========================= 24 ==============================

// const users = [
// 	{
// 		name: "Moore Hensley",
// 		email: "moorehensley@indexia.com",
// 		eyeColor: "blue",
// 		friends: ["Sharron Pace"],
// 		isActive: false,
// 		balance: 2811,
// 		gender: "male",
// 		age: 37,
// 	},
// 	{
// 		name: "Sharlene Bush",
// 		email: "sharlenebush@tubesys.com",
// 		eyeColor: "blue",
// 		friends: ["Briana Decker", "Sharron Pace"],
// 		isActive: true,
// 		balance: 3821,
// 		gender: "female",
// 		age: 34,
// 	},
// 	{
// 		name: "Ross Vazquez",
// 		email: "rossvazquez@xinware.com",
// 		eyeColor: "green",
// 		friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
// 		isActive: false,
// 		balance: 3793,
// 		gender: "male",
// 		age: 24,
// 	},
// 	{
// 		name: "Elma Head",
// 		email: "elmahead@omatom.com",
// 		eyeColor: "green",
// 		friends: ["Goldie Gentry", "Aisha Tran"],
// 		isActive: true,
// 		balance: 2278,
// 		gender: "female",
// 		age: 21,
// 	},
// 	{
// 		name: "Carey Barr",
// 		email: "careybarr@nurali.com",
// 		eyeColor: "blue",
// 		friends: ["Jordan Sampson", "Eddie Strong"],
// 		isActive: true,
// 		balance: 3951,
// 		gender: "male",
// 		age: 27,
// 	},
// 	{
// 		name: "Blackburn Dotson",
// 		email: "blackburndotson@furnigeer.com",
// 		eyeColor: "brown",
// 		friends: ["Jacklyn Lucas", "Linda Chapman"],
// 		isActive: false,
// 		balance: 1498,
// 		gender: "male",
// 		age: 38,
// 	},
// 	{
// 		name: "Sheree Anthony",
// 		email: "shereeanthony@kog.com",
// 		eyeColor: "brown",
// 		friends: ["Goldie Gentry", "Briana Decker"],
// 		isActive: true,
// 		balance: 2764,
// 		gender: "female",
// 		age: 39,
// 	},
// ];
// // console.log(users);
// const friendName = "Briana Decker";
// const getUsersWithFriend = (users, friendName) => {
// 	console.log(users);
// 	return users.filter(({ friends }) => {
// 		if (friends.includes(friendName)) {
// 			return friends;
// 		}
// 	});
// };

// console.log(getUsersWithFriend(users, "Briana Decker"));
// console.log(getUsersWithFriend(users, "Goldie Gentry"));

// Дополни функцию getUsersWithFriend(users, friendName) так,
// чтобы она возвращала массив пользователей у которых есть друг с именем в параметре friendName.
//  Массив друзей пользователя хранится в свойстве friends.

// Change code below this line

// Change code above this line

// Объявлена переменная getUsersWithFriend
// Переменной getUsersWithFriend присвоена стрелочная функция с параметрами (users, friendName)
// Для перебора параметра users используется метод filter()
// Если значение параметра friendName это строка "Briana Decker",
// функция возвращает массив объектов пользователей с именами Sharlene Bush и Sheree Anthony
// Если значение параметра friendName это строка "Goldie Gentry",
// функция возвращает массив объектов пользователей с именами Elma Head и Sheree Anthony
// Если значение параметра friendName это строка "Adrian Cross",
// функция возвращает пустой массив
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение

// ========================= 25 =============================
// const users = [
// 	{
// 		name: "Moore Hensley",
// 		email: "moorehensley@indexia.com",
// 		eyeColor: "blue",
// 		friends: ["Sharron Pace"],
// 		isActive: false,
// 		balance: 2811,
// 		gender: "male",
// 		age: 37,
// 	},
// 	{
// 		name: "Sharlene Bush",
// 		email: "sharlenebush@tubesys.com",
// 		eyeColor: "blue",
// 		friends: ["Briana Decker", "Sharron Pace"],
// 		isActive: true,
// 		balance: 3821,
// 		gender: "female",
// 		age: 34,
// 	},
// 	{
// 		name: "Ross Vazquez",
// 		email: "rossvazquez@xinware.com",
// 		eyeColor: "green",
// 		friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
// 		isActive: false,
// 		balance: 3793,
// 		gender: "male",
// 		age: 24,
// 	},
// 	{
// 		name: "Elma Head",
// 		email: "elmahead@omatom.com",
// 		eyeColor: "green",
// 		friends: ["Goldie Gentry", "Aisha Tran"],
// 		isActive: true,
// 		balance: 2278,
// 		gender: "female",
// 		age: 21,
// 	},
// 	{
// 		name: "Carey Barr",
// 		email: "careybarr@nurali.com",
// 		eyeColor: "blue",
// 		friends: ["Jordan Sampson", "Eddie Strong"],
// 		isActive: true,
// 		balance: 3951,
// 		gender: "male",
// 		age: 27,
// 	},
// 	{
// 		name: "Blackburn Dotson",
// 		email: "blackburndotson@furnigeer.com",
// 		eyeColor: "brown",
// 		friends: ["Jacklyn Lucas", "Linda Chapman"],
// 		isActive: false,
// 		balance: 1498,
// 		gender: "male",
// 		age: 38,
// 	},
// 	{
// 		name: "Sheree Anthony",
// 		email: "shereeanthony@kog.com",
// 		eyeColor: "brown",
// 		friends: ["Goldie Gentry", "Briana Decker"],
// 		isActive: true,
// 		balance: 2764,
// 		gender: "female",
// 		age: 39,
// 	},
// ];
// console.log(users);
// Дополни функцию getFriends(users) так, чтобы она возвращала массив друзей всех
// пользователей(свойство friends).У нескольких пользователей могут быть одинаковые друзья,
// сделай так чтобы возвращаемый массив не содержал повторений.
// const getFriends = users => {
// 	return (allUserFriends = users
// 		.flatMap(user => user.friends)
// 		.filter((friend, idx, arr) => arr.indexOf(friend) === idx));
// };
// console.log(getFriends(users));
// Вызов функции с указанным массивом пользователей возвращает массив["Sharron Pace", "Briana Decker",
// 	"Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner", "Goldie Gentry", "Aisha Tran", "Jordan Sampson",
// 	"Eddie Strong", "Jacklyn Lucas", "Linda Chapman"]

// ========================= 26 ==============================

// const users = [
// 	{
// 		name: "Moore Hensley",
// 		email: "moorehensley@indexia.com",
// 		eyeColor: "blue",
// 		friends: ["Sharron Pace"],
// 		isActive: false,
// 		balance: 2811,
// 		gender: "male",
// 		age: 37,
// 	},
// 	{
// 		name: "Sharlene Bush",
// 		email: "sharlenebush@tubesys.com",
// 		eyeColor: "blue",
// 		friends: ["Briana Decker", "Sharron Pace"],
// 		isActive: true,
// 		balance: 3821,
// 		gender: "female",
// 		age: 34,
// 	},
// 	{
// 		name: "Ross Vazquez",
// 		email: "rossvazquez@xinware.com",
// 		eyeColor: "green",
// 		friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
// 		isActive: false,
// 		balance: 3793,
// 		gender: "male",
// 		age: 24,
// 	},
// 	{
// 		name: "Elma Head",
// 		email: "elmahead@omatom.com",
// 		eyeColor: "green",
// 		friends: ["Goldie Gentry", "Aisha Tran"],
// 		isActive: true,
// 		balance: 2278,
// 		gender: "female",
// 		age: 21,
// 	},
// 	{
// 		name: "Carey Barr",
// 		email: "careybarr@nurali.com",
// 		eyeColor: "blue",
// 		friends: ["Jordan Sampson", "Eddie Strong"],
// 		isActive: true,
// 		balance: 3951,
// 		gender: "male",
// 		age: 27,
// 	},
// 	{
// 		name: "Blackburn Dotson",
// 		email: "blackburndotson@furnigeer.com",
// 		eyeColor: "brown",
// 		friends: ["Jacklyn Lucas", "Linda Chapman"],
// 		isActive: false,
// 		balance: 1498,
// 		gender: "male",
// 		age: 38,
// 	},
// 	{
// 		name: "Sheree Anthony",
// 		email: "shereeanthony@kog.com",
// 		eyeColor: "brown",
// 		friends: ["Goldie Gentry", "Briana Decker"],
// 		isActive: true,
// 		balance: 2764,
// 		gender: "female",
// 		age: 39,
// 	},
// ];
// Дополни функцию getActiveUsers(users) так, чтобы она возвращала массив активных пользователей,
// значение свойства isActive которых true.
// Change code below this line
// const getActiveUsers = users => users.filter(user => !user.isActive);
// // Change code above this line
// console.log(getActiveUsers(users));
// Объявлена переменная getActiveUsers Переменной getActiveUsers присвоена стрелочная функция с параметром users
// Для перебора параметра users используется метод filter()
// Вызов функции с указанным массивом пользователей возвращает массив объектов пользователей с
// именами Sharlene Bush, Elma Head, Carey Barr и Sheree Anthony
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение

// ========================= 29 ==============================

// Change code below this line

// Дополни функцию getUserWithEmail(users, email) так, чтобы она возвращала объект пользователя,
// почта которого(свойство email) совпадает со значением параметра email.

// const getUserWithEmail = (users, email) => users.find(book => book.email === email);

// // Change code above this line

// console.log(getUserWithEmail(users, "elmahead@omatom.com"));
// console.log(getUserWithEmail(users, "blackburndotson@furnigeer.com"));

// ========================= 30 ==============================

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change code below this line

// const eachElementInFirstIsEven = firstArray.every(number => number % 2 === 0);
// const eachElementInFirstIsOdd = firstArray.every(number => number % 2 === 1);

// const eachElementInSecondIsEven = secondArray.every(number => number % 2 === 0);
// const eachElementInSecondIsOdd = secondArray.every(number => !number % 2 === 0);

// const eachElementInThirdIsEven = thirdArray.every(number => number % 2 === 0);
// const eachElementInThirdIsOdd = thirdArray.every(number => number % 2 === 1);

// console.log(eachElementInFirstIsEven);
// console.log(eachElementInFirstIsOdd);
// console.log(eachElementInSecondIsEven);
// console.log(eachElementInSecondIsOdd);
// console.log(eachElementInThirdIsEven);
// console.log(eachElementInThirdIsOdd);

// Используя метод every() дополни код так, чтобы:

// В переменной eachElementInFirstIsEven был результат проверки всех элементов массива firstArray на чётность.
// В переменной eachElementInFirstIsOdd был результат проверки всех элементов массива firstArray на нечётность.
// В переменной eachElementInSecondIsEven был результат проверки всех элементов массива secondArray на чётность.
// В переменной eachElementInSecondIsOdd был результат проверки всех элементов массива secondArray на нечётность.
// В переменной eachElementInThirdIsEven был результат проверки всех элементов массива thirdArray на чётность.
// В переменной eachElementInThirdIsOdd был результат проверки всех элементов массива thirdArray на нечётность.

// ========================= 31 ==============================
// Дополни функцию isEveryUserActive(users) так,
// чтобы она проверяла все ли пользователи сейчас активны(свойство isActive) и возвращала true или false.

// const isEveryUserActive = users => {
// 	return users.every(user => {
// 		return user.isActive;
// 	});
// };

// const isEveryUserActive = users => users.every(user => user.isActive);

// console.log(isEveryUserActive(users));

// ========================= 32 ==============================
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change below this line

// const anyElementInFirstIsEven = firstArray.some(number => number % 2 === 0);
// const anyElementInFirstIsOdd = firstArray.some(number => number % 2 === 1);

// const anyElementInSecondIsEven = secondArray.some(number => number % 2 === 0);
// const anyElementInSecondIsOdd = secondArray.some(number => number % 2 === 1);

// const anyElementInThirdIsEven = thirdArray.some(number => number % 2 === 0);
// const anyElementInThirdIsOdd = thirdArray.some(number => number % 2 === 1);

// console.log(anyElementInFirstIsEven);
// console.log(anyElementInFirstIsOdd);
// console.log(anyElementInSecondIsEven);
// console.log(anyElementInSecondIsOdd);
// console.log(anyElementInThirdIsEven);
// console.log(anyElementInThirdIsOdd);

// ========================= 33 ==============================
// Дополни функцию isAnyUserActive(users) так,
// чтобы она проверяла наличие активных пользователей(свойство isActive) и возвращала true или false.

// const isAnyUserActive = users => {
// 	return users.some(user => {
// 		return user.isActive;
// 	});
// };

// const isAnyUserActive = users => {
// 	return users.some(user => user.isActive);
// };

// const isAnyUserActive = users => users.some(user => user.isActive);

// console.log(isAnyUserActive(users));

// ========================= 34 ==============================

// Игровому сервису необходим функционал подсчёта среднего времени проведённого в играх.
//  Дополни код так, чтобы в переменной totalPlayTime получилось общее игровое время из массива playtimes.

// const players = {
// 	mango: 1270,
// 	poly: 468,
// 	ajax: 710,
// 	kiwi: 244,
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // Change code below this line

// // const totalPlayTime = playtimes.reduce((acc, player) => {
// // 	return acc + player;
// // });

// const totalPlayTime = playtimes.reduce((acc, player) => acc + player);
// console.log(totalPlayTime);

// // Change code above this line
// const averagePlayTime = totalPlayTime / playtimes.length;
// console.log(averagePlayTime);

// Объявлена переменная players
// Значение переменной players это объект игроков с игровым временем каждого
// Объявлена переменная playtimes
// Значение переменной playtimes это массив [1270, 468, 710, 244]
// Объявлена переменная totalPlayTime
// Значение переменной totalPlayTime это число 2692
// Для перебора массива playtimes используется метод reduce()
// Объявлена переменная averagePlayTime
// Значение переменной averagePlayTime это число 673

// ========================= 35 ==============================

// Нашему сервису необходимо рассчитать среднее время проведённое в одной игре для каждого игрока,
// 	и получить общую сумму этих времён.Рассчитать время для каждого из игроков,
// 	можно разделив его время(свойство playtime) на количество игр(свойство gamesPlayed).

// const players = [
// 	{ name: "Mango", playtime: 1270, gamesPlayed: 4 },
// 	{ name: "Poly", playtime: 469, gamesPlayed: 2 },
// 	{ name: "Ajax", playtime: 690, gamesPlayed: 3 },
// 	{ name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// // // Change code below this line

// const totalAveragePlaytimePerGame = players.reduce((total, player) => total + player.playtime / player.gamesPlayed, 0);
// console.log(totalAveragePlaytimePerGame);

// Объявлена переменная players
// Значение переменной players это массив объектов игроков
// Объявлена переменная totalAveragePlaytimePerGame
// Значение переменной totalAveragePlaytimePerGame это число 1023
// Для перебора массива players используется метод reduce()

// ========================= 36 ==============================
// Дополни функцию calculateTotalBalance(users) так, чтобы она считала и возвращала сумму всех
// средств(свойство balance) которые хранят пользователи из массива users.

// const calculateTotalBalance = users => users.reduce((total, user) => total + user.balance, 0);

// console.log(calculateTotalBalance(users));

// Объявлена переменная calculateTotalBalance
// Переменной calculateTotalBalance присвоена стрелочная функция с параметром (users)
// Для перебора параметра users используется метод reduce()
// Вызов функции с указанным массивом пользователей возвращает число 20916
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение

// ========================= 37 ==============================

const users = [
	{
		name: "Moore Hensley",
		email: "moorehensley@indexia.com",
		eyeColor: "blue",
		friends: ["Sharron Pace"],
		isActive: false,
		balance: 2811,
		gender: "male",
		age: 37,
	},
	{
		name: "Sharlene Bush",
		email: "sharlenebush@tubesys.com",
		eyeColor: "blue",
		friends: ["Briana Decker", "Sharron Pace"],
		isActive: true,
		balance: 3821,
		gender: "female",
		age: 34,
	},
	{
		name: "Ross Vazquez",
		email: "rossvazquez@xinware.com",
		eyeColor: "green",
		friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
		isActive: false,
		balance: 3793,
		gender: "male",
		age: 24,
	},
	{
		name: "Elma Head",
		email: "elmahead@omatom.com",
		eyeColor: "green",
		friends: ["Goldie Gentry", "Aisha Tran"],
		isActive: true,
		balance: 2278,
		gender: "female",
		age: 21,
	},
	{
		name: "Carey Barr",
		email: "careybarr@nurali.com",
		eyeColor: "blue",
		friends: ["Jordan Sampson", "Eddie Strong"],
		isActive: true,
		balance: 3951,
		gender: "male",
		age: 27,
	},
	{
		name: "Blackburn Dotson",
		email: "blackburndotson@furnigeer.com",
		eyeColor: "brown",
		friends: ["Jacklyn Lucas", "Linda Chapman"],
		isActive: false,
		balance: 1498,
		gender: "male",
		age: 38,
	},
	{
		name: "Sheree Anthony",
		email: "shereeanthony@kog.com",
		eyeColor: "brown",
		friends: ["Goldie Gentry", "Briana Decker"],
		isActive: true,
		balance: 2764,
		gender: "female",
		age: 39,
	},
];

// Дополни функцию getTotalFriendCount(users) так,
// чтобы она считала и возвращала общее количество друзей(свойство friends) всех пользователей из массива users.

// const getTotalFriendCount = users => users.reduce((total, user) => total + user.friends.length, 0);

// console.log(getTotalFriendCount(users));

// Объявлена переменная getTotalFriendCount
// Переменной getTotalFriendCount присвоена стрелочная функция с параметром (users)
// Для перебора параметра users используется метод reduce()
// Вызов функции с указанным массивом пользователей возвращает число 14
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение

// ========================= 38 ==============================

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = ["Tanith Lee", "Bernard Cornwell", "Robert Sheckley", "Fyodor Dostoevsky"];
// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort();

// const alphabeticalAuthors = [...authors].sort();

// // const ascendingReleaseDates = releaseDates.sort();

// // const alphabeticalAuthors = authors.sort();

// console.log(releaseDates);

// console.log(ascendingReleaseDates);
// console.log(authors);
// console.log(alphabeticalAuthors);
// ========================= 39 ==============================

// Онлайн бибилиотеке необходимо отображать книги сортированные по дате издания,
// 	по её возрастанию или убыванию.Дополни код так, чтобы в переменной ascendingReleaseDates получилась
// 	 отсортированная по возрастанию копия массива releaseDates,
// а в переменной descendingReleaseDates копия отсортированная по убыванию.

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);

// const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);

// console.log(ascendingReleaseDates);
// console.log(descendingReleaseDates);
// Объявлена переменная releaseDates
// Значение переменной releaseDates это массив [2016, 1967, 2008, 1984, 1973, 2012, 1997]
// Объявлена переменная ascendingReleaseDates
// Значение переменной ascendingReleaseDates это массив [1967, 1973, 1984, 1997, 2008, 2012, 2016]
// Объявлена переменная descendingReleaseDates
// Значение переменной descendingReleaseDates это массив [2016, 2012, 2008, 1997, 1984, 1973, 1967]
// Использован метод sort()

// ========================= 40 ==============================

// ========================= 41 ==============================
// Дополни код так, чтобы:

// В переменной sortedByAuthorName получился массив
//  книг отсортированный по имени автора в алфавитном порядке.
// В переменной sortedByReversedAuthorName получился массив книг отсортированный по имени автора
// в обратном алфавитном порядке.
// В переменной sortedByAscendingRating получился массив книг отсортированный по возрастанию рейтинга.
// В переменной sortedByDescentingRating получился массив книг отсортированный по убыванию рейтинга.

// const books = [
// 	{
// 		title: "The Last Kingdom",
// 		author: "Bernard Cornwell",
// 		rating: 8.38,
// 	},
// 	{
// 		title: "Beside Still Waters",
// 		author: "Robert Sheckley",
// 		rating: 8.51,
// 	},
// 	{
// 		title: "The Dream of a Ridiculous Man",
// 		author: "Fyodor Dostoevsky",
// 		rating: 7.75,
// 	},
// 	{ title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
// 	{ title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// const sortedByAuthorName = [...books].sort((firstBook, secondBook) =>
// 	firstBook.author.localeCompare(secondBook.author),
// );

// const sortedByReversedAuthorName = [...books].sort((firstBook, secondBook) =>
// 	secondBook.author.localeCompare(firstBook.author),
// );

// const sortedByAscendingRating = [...books].sort((firstBook, secondBook) => firstBook.rating - secondBook.rating);

// const sortedByDescentingRating = [...books].sort((firstBook, secondBook) => secondBook.rating - firstBook.rating);

// console.table(books);

// console.log(sortedByAuthorName);
// console.log(sortedByReversedAuthorName);
// console.log(sortedByAscendingRating);
// console.log(sortedByDescentingRating);

//     Объявлена переменная books
//     Значение переменной books это исходный массив объектов книг
//     Объявлена переменная sortedByAuthorName
//     Значение переменной sortedByAuthorName это массив книг отсортированный по имени автора в алфавитном порядке
//     Объявлена переменная sortedByReversedAuthorName
//     Значение переменной sortedByReversedAuthorName это массив книг отсортированный по имени автора в
// 	 обратном алфавитном порядке
//     Объявлена переменная sortedByAscendingRating
//     Значение переменной sortedByAscendingRating это массив книг отсортированный по возрастанию рейтинга
//     Объявлена переменная sortedByDescentingRating
//     Значение переменной sortedByDescentingRating это массив книг отсортированный по убыванию рейтинга
//     Для перебора массива books используется метод sort()

// ========================= 42 ==============================

// Дополни функцию sortByAscendingBalance(users) так,
// чтобы она возвращала массив пользователей отсортированный по возрастанию их баланса(свойство balance).

// const sortByAscendingBalance = users => {
// 	return [...users].sort((firstUser, secondUser) => firstUser.balance - secondUser.balance);
// };

// const sortByAscendingBalance = users =>
// 	[...users].sort((firstUser, secondUser) => firstUser.balance - secondUser.balance);

// console.log(sortByAscendingBalance(users));
// Объявлена переменная sortByAscendingBalance
// Переменной sortByAscendingBalance присвоена стрелочная функция с параметром (users)
// Значение параметра users не изменяется
// Вызов функции с указанным массивом пользователей возвращает новый
// массив пользователей отсортированный по возрастанию их баланса
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение
// Для перебора параметра users использован метод sort()

// ========================= 43 ==============================
// Дополни функцию sortByDescendingFriendCount(users) так,
// чтобы она возвращала массив пользователей отсортированный по убыванию количества их друзей(свойство friends).

// const sortByDescendingFriendCount = users => {
// 	return [...users].sort(
// 		(firstUserFriends, secondUserFriends) => secondUserFriends.friends.length - firstUserFriends.friends.length,
// 	);
// };

// const sortByDescendingFriendCount = users =>
// 	[...users].sort(
// 		(firstUserFriends, secondUserFriends) => secondUserFriends.friends.length - firstUserFriends.friends.length,
// 	);

// console.log(sortByDescendingFriendCount(users));
// Объявлена переменная sortByDescendingFriendCount
// Переменной sortByDescendingFriendCount присвоена стрелочная функция с параметром (users)
// Значение параметра users не изменяется
// Для перебора параметра users использован метод sort()
// Вызов функции с указанным массивом пользователей возвращает новый массив
// пользователей отсортированный по убыванию количества их друзей
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение

// ========================= 44 ==============================

// Дополни функцию sortByName(users) так, чтобы она возвращала массив пользователей
//  отсортированный по их имени(свойство name) в алфавитном порядке.

// const sortByName = users => {
// 	return [...users].sort((firstBookName, secondBookName) => firstBookName.name.localeCompare(secondBookName.name));
// };

// const sortByName = users =>
// 	[...users].sort((firstBookName, secondBookName) => firstBookName.name.localeCompare(secondBookName.name));

// console.log(sortByName(users));
// console.log(users);
// Объявлена переменная sortByName
// Переменной sortByName присвоена стрелочная функция с параметром (users)
// Значение параметра users не изменяется
// Для перебора параметра users использован метод sort()
// Вызов функции с указанным массивом пользователей возвращает новый массив пользователей
//  отсортированный по имени в алфавитном порядке
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение

// ========================= 45 ==============================

// Дополни код так, чтобы в переменной names получился массив имён авторов в алфавитном порядке,
// 	рейтинг книг которых больше значения переменной MIN_BOOK_RATING.

const books = [
	{
		title: "The Last Kingdom",
		author: "Bernard Cornwell",
		rating: 8.38,
	},
	{
		title: "Beside Still Waters",
		author: "Robert Sheckley",
		rating: 8.51,
	},
	{
		title: "The Dream of a Ridiculous Man",
		author: "Fyodor Dostoevsky",
		rating: 7.75,
	},
	{ title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
	{
		title: "The Dreams in the Witch House",
		author: "Howard Lovecraft",
		rating: 8.67,
	},
];
const MIN_BOOK_RATING = 8;
// Change code below this line

const names = books;
//     Объявлена переменная books
//     Значение переменной books это исходный массив объектов
//     Объявлена переменная MIN_BOOK_RATING
//     Значение переменной MIN_BOOK_RATING это число 8
//     Объявлена переменная names
//     Значение переменной names это массив ["Bernard Cornwell", "Howard Lovecraft", "Robert Sheckley"]
//     Нет объявленых переменных кроме books, MIN_BOOK_RATING и names
//     Используется цепочка методов filter, map, sort

// ========================= 46 ==============================
// ========================= 47 ==============================
// ========================= 48 ==============================
// const a = [1, 8, 2, 3, 42, 7, 4];
// max = a[0];
// for (let i = 0; i < a.length; i += 1) {
// 	if (a[i] > max) {
// 		max = a[i];
// 		index = i;
// 	}
// }
// console.log(index);
// let d = a.reduce(
// 	(prev, item, index) => {
// 		if (item > prev[1]) {
// 			return [index, item];
// 		} else {
// 			return prev;
// 		}
// 	},
// 	[0, a[0]],
// );
// console.log(d);
// const data = [
// 	[1, 2, 3],
// 	[3, 4, 5],
// 	[5, 6, 7],
// ];
// const flat = data.reduce((prev, item) => {
// 	return prev.concat(item);
// });
// console.log(flat);

// const data = [
// 	[1, 2, 3],
// 	[3, 4, 5],
// 	[5, 6, 7],
// ];
// const flat = data.reduce((prev, item) => {
// 	newArray = [];
// 	newArray.push(...item);
// });
// console.log(newArray);
