// ==============================================================================================

// =================================== 1 ====================================

// const pizzaPalace = {
// 	pizzas: ["Supercheese", "Smoked", "Four meats"],
// 	// Change code below this line
// 	checkPizza(pizzaName) {
// 		return this.pizzas.includes(pizzaName);
// 	},
// 	order(pizzaName) {
// 		const isPizzaAvailable = this.checkPizza(pizzaName);

// 		if (!isPizzaAvailable) {
// 			return `Sorry, there is no pizza named «${pizzaName}»`;
// 		}

// 		return `Order accepted, preparing «${pizzaName}» pizza`;
// 	},
// 	// Change code above this line
// };

// console.log(pizzaPalace.order("Four meats"));
// =================================== 2 ====================================

// const customer = {
// 	username: "Mango",
// 	balance: 24000,
// 	discount: 0.1,
// 	orders: ["Burger", "Pizza", "Salad"],
// 	// Change code below this line
// 	getBalance() {
// 		return this.balance;
// 	},
// 	getDiscount() {
// 		return this.discount;
// 	},
// 	setDiscount(value) {
// 		this.discount = value;
// 	},
// 	getOrders() {
// 		return this.orders;
// 	},
// 	addOrder(cost, order) {
// 		this.balance -= cost - cost * this.discount;
// 		this.orders.push(order);
// 	},
// 	// Change code above this line
// };

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, "Steak");
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]

// =================================== 3 ====================================

// const historyService = {
// 	orders: [
// 		{ email: "jacob@hotmail.com", dish: "Burrito" },
// 		{ email: "solomon@topmail.net", dish: "Burger" },
// 		{ email: "artemis@coldmail.net", dish: "Pizza" },
// 		{ email: "solomon@topmail.net", dish: "Apple pie" },
// 		{ email: "jacob@hotmail.com", dish: "Taco" },
// 	],
// 	// Change code below this line
// 	getOrdersLog() {
// 		return this.orders.map(order => `email: ${order.email} dish: ${order.dish}`).join(" - ");
// 	},
// 	getEmails() {
// 		const emails = this.orders.map(order => order.email);
// 		const uniqueEmails = new Set(emails);
// 		return [...uniqueEmails];
// 	},
// 	getOrdersByEmail(email) {
// 		return this.orders.filter(order => order.email === email);
// 	},
// 	// Change code above this line
// };
// console.log(historyService.getOrdersByEmail("solomon@topmail.net"));
// =================================== 4 ====================================

// =================================== 5 ====================================
// const ancestor = {
// 	name: "Paul",
// 	age: 83,
// 	surname: "Dawson",
// 	heritage: "Irish",
// };
// // Change code below this line

// const parent = Object.create(ancestor);
// parent.name = "Stacey";
// parent.surname = "Moore";
// parent.age = 54;

// const child = Object.create(parent);
// child.name = "Jason";
// child.age = 27;

// console.log(ancestor.isPrototypeOf("parent"));
// console.log(parent.hasOwnProperty("surname"));
// console.log(ancestor.hasOwnProperty("heritage"));
// console.log(child.heritage);

// Вызов ancestor.isPrototypeOf("parent") возвращает true
// Вызов parent.isPrototypeOf("child") возвращает true
// Вызов ancestor.hasOwnProperty("surname") возвращает true
// Обращение к ancestor.surname возвращает "Dawson"
// Вызов parent.hasOwnProperty("surname") возвращает true
// Обращение к parent.surname возвращает "Moore"
// Вызов child.hasOwnProperty("surname") возвращает false
// Обращение к child.surname возвращает "Moore"
// Вызов ancestor.hasOwnProperty("heritage") возвращает true
// Обращение к ancestor.heritage возвращает "Irish"
// Вызов parent.hasOwnProperty("heritage") возвращает false
// Обращение к parent.heritage возвращает "Irish"
// Вызов child.hasOwnProperty("heritage") возвращает false
// Обращение к child.heritage возвращает "Irish"
// Используется метод Object.create()
// =================================== 6 ====================================

// =================================== 7 ====================================

// =================================== 8 ====================================

// =================================== 9 ====================================

// =================================== 10 ====================================

// =================================== 11 ====================================
// class Storage {
// 	constructor(items) {
// 		this.items = items;
// 	}
// 	getItems() {
// 		return this.items;
// 	}
// 	addItem(newItem) {
// 		this.items.push(newItem);
// 	}
// 	removeItem(itemToRemove) {
// 		// const idx = items.indexOf(itemToRemove);

// 		if (this.items.includes(itemToRemove)) {
// 			const idx = this.items.indexOf(itemToRemove);
// 			this.items.splice(1, 1);
// 		}
// 	}
// }

// // Change code above this line
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
// =================================== 12 ====================================

// Напиши класс StringBuilder, который принимает один параметр initialValue - произвольную строку,
//     которая записывается на создаваемый объект в свойство value.

// Объяви следующие методы класса:

// getValue() - возвращает текущее значение свойства value.
// padEnd(str) - получает парметр str(строку) и
// добавляет её в конец значения свойства value объекта который вызывает этот метод.
// padStart(str) - получает парметр str(строку) и
// добавляет её в начало значения свойства value объекта который вызывает этот метод.
// padBoth(str) - получает парметр str(строку) и
// добавляет её в начало и в конец значения свойства value объекта который вызывает этот метод.
class StringBuilder {
	constructor(initialValue) {
		this.value = "";
	}
	getValue() {
		this.value;
	}
}

// Change code above this line
const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
// =================================== 13 ====================================

// =================================== 14 ====================================

// =================================== 15 ====================================

// =================================== 16 ====================================

// =================================== 17 ====================================

// =================================== 18 ====================================

// =================================== 19 ====================================

// =================================== 20 ====================================
