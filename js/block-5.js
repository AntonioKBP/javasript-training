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
// ================================================ 11 =============================================
// class StringBuilder {
// 	constructor(value) {
// 		this.value = value;
// 	}
// 	getValue() {
// 		return this.value;
// 	}
// 	padEnd(str) {
// 		this.value += str;
// 	}
// 	padStart(str) {
// 		this.value = str + this.value;
// 	}
// 	padBoth(str) {
// 		this.value = str + this.value + str;
// 	}
// }

// // Change code above this line
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="
// =================================== 12 ====================================

// Выполни рефакторинг класса Car так,
// 	чтобы свойство brand было приватным и добавь два метода для публичного интерфейса,
// 		для чтения и изменения этого свойства.

//     getBrand() - возвращает значение приватного свойства brand.
//     changeBrand(newBrand) - изменяет значение приватного свойства brand на newBrand.

// class Car {
// 	// Change code below this line
// 	#brand;
// 	constructor({ brand, model, price }) {
// 		this.#brand = brand;
// 		this.model = model;
// 		this.price = price;
// 	}
// 	getBrand() {
// 		return this.#brand;
// 	}
// 	changeBrand(newBrand) {
// 		return (this.#brand = newBrand);
// 	}
// 	// Change code above this line
// }
// const newAudi = new Car({ brand: "Audi", model: "Q3", price: 36000 });

// console.log(newAudi);
// console.log(newAudi.getBrand());
// console.log(newAudi.changeBrand("Honda"));
// console.log(newAudi);

//     Объявлен класс Car
//     Свойство brand в классе Car объявлено приватным
//     Конструктор класса принимает объект со свойствами brand, model и price
//     В результате вызова new Car({ brand: "Audi", model: "Q3", price: 36000 })
// 	 получится объект { model: "Q3", price: 36000 }
//     В результате вызова new Car({ brand: "bmw", model: "X5", price: 58900 })
// 	 получится объект { model: "X5", price: 58900 }
//     В результате вызова new Car({ brand: "Nissan", model: "Murano", price: 31700 })
// 	 получится объект { model: "Murano", price: 31700 }
//     У экземпляра нет публичного свойства brand
//     Метод getBrand() возвращает значение приватного свойства brand.
//     Метод changeBrand("Honda") изменяет значение приватного свойства brand на "Honda"

// =================================== 13 ====================================
// Выполни рефакторинг класса Storage, сделав свойство items приватным.

// Под комментарием мы добавили инициализацию экземпляра и вызовы методов в той последовательности,
// 	в которой твой код будут проверять тесты.Пожалуйста ничего там не меняй.

// class Storage {
// 	// Change code below this line
// 	#items;
// 	constructor(items) {
// 		this.#items = items;
// 	}

// 	getItems() {
// 		return this.#items;
// 	}

// 	addItem(newItem) {
// 		this.#items.push(newItem);
// 	}

// 	removeItem(itemToRemove) {
// 		this.#items = this.#items.filter(item => item !== itemToRemove);
// 	}
// }

// // Change code above this line
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Droid"]

// =================================== 14 ====================================
// Выполни рефакторинг класса StringBuilder, сделав свойство value приватным.

// Под комментарием мы добавили инициализацию экземпляра и вызовы методов в той последовательности,
// 	в которой твой код будут проверять тесты.Пожалуйста ничего там не меняй.

// class StringBuilder {
// 	// Change code below this line
// 	#value;
// 	constructor(initialValue) {
// 		this.#value = initialValue;
// 	}

// 	getValue() {
// 		return this.#value;
// 	}

// 	padEnd(str) {
// 		this.#value += str;
// 	}

// 	padStart(str) {
// 		this.#value = str + this.#value;
// 	}

// 	padBoth(str) {
// 		this.padStart(str);
// 		this.padEnd(str);
// 	}
// }

// // Change code above this line
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="

// =================================== 15 ====================================

// class Car {
// 	// Change code below this line

// 	#brand;
// 	#model;
// 	#price;

// 	constructor({ brand, model, price }) {
// 		this.#brand = brand;
// 		this.#model = model;
// 		this.#price = price;
// 	}

// 	get brand() {
// 		return this.#brand;
// 	}

// 	set brand(newBrand) {
// 		this.#brand = newBrand;
// 	}

// 	get model() {
// 		return this.#model;
// 	}

// 	set model(newModel) {
// 		this.#model = newModel;
// 	}

// 	get price() {
// 		return this.#price;
// 	}

// 	set price(newPrice) {
// 		this.#price = newPrice;
// 	}
// 	// Change code above this line
// }

// =================================== 16 ====================================

// Выполни рефакторинг класса Car.Добавь публичное статическое
// свойство MAX_PRICE со значением 50000 - максимально допустимая цена автомобиля.

// Добавь сеттеру price проверку передаваемого значения параметра newPrice.Если оно больше чем MAX_PRICE,
// 	сеттер ничего не делает, а если меньше или равно, то перезаписывает цену автомобиля.

// class Car {
// 	// Change code below this line

// 	static MAX_PRICE = 50000;

// 	#price;

// 	constructor({ price }) {
// 		this.#price = price;
// 	}

// 	get price() {
// 		return this.#price;
// 	}

// 	set price(newPrice) {
// 		if (newPrice > Car.MAX_PRICE) {
// 			return;
// 		}
// 		return (this.#price = newPrice);
// 	}

// 	// Change code above this line
// }
// // console.log(Car.MAX_PRICE);
// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000

// =================================== 17 ====================================

// =================================== 18 ====================================
// class User {
// 	constructor(email) {
// 		this.email = email;
// 	}

// 	get email() {
// 		return this.email;
// 	}

// 	set email(newEmail) {
// 		this.email = newEmail;
// 	}
// }
// // Change code below this line
// class Admin extends User {
// 	static AccessLevel = { BASIC: "basic", SUPERUSER: "superuser" };
// }

// class Admin {
// 	static AccessLevel = {
// 		BASIC: "basic",
// 		SUPERUSER: "superuser",
// 	};
// }
// =================================== 19 ====================================

class User {
	email;

	constructor(email) {
		this.email = email;
	}

	get email() {
		return this.email;
	}

	set email(newEmail) {
		this.email = newEmail;
	}
}

class Admin extends User {
	// Change code below this line
	constructor({ email, accessLevel }) {
		super({ email, accessLevel });
	}
	static AccessLevel = {
		BASIC: "basic",
		SUPERUSER: "superuser",
	};

	// Change code above this line
}

const mango = new Admin({
	email: "mango@mail.com",
	accessLevel: Admin.AccessLevel.SUPERUSER,
});

console.log(mango.email); // "mango@mail.com"
console.log(mango.accessLevel); // "superuser"

console.log(Admin.AccessLevel.SUPERUSER);
// =================================== 20 ====================================
