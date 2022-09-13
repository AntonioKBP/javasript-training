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

const pizzaPalace = {
	pizzas: ["Ultracheese", "Smoked", "Four meats"],
	order(pizzaName, onAvailable, onNotAvailable) {
		for (const pizza of this.pizzas) {
			if (pizzaName === pizza) {
				return makePizza(pizzaName); // console.log(pizzaName);
			}
		}
		return onOrderError(`There is no pizza with a name ${pizzaName} in the assortment.`);
	},
};

// Change code above this line

// Callback for onSuccess
function makePizza(pizzaName) {
	return `Your order is accepted. Cooking pizza ${pizzaName}.`;
}

// Callback for onError
function onOrderError(error) {
	return `Error! ${error}`;
}
console.log(pizzaPalace.order("Smoked", makePizza, onOrderError));
console.log(pizzaPalace.order("Four meats", makePizza, onOrderError));
console.log(pizzaPalace.order("Big Mike", makePizza, onOrderError));
console.log(pizzaPalace.order("Vienna", makePizza, onOrderError));
// Method calls with callbacks
pizzaPalace.order("Smoked", makePizza, onOrderError);
pizzaPalace.order("Four meats", makePizza, onOrderError);
pizzaPalace.order("Big Mike", makePizza, onOrderError);
pizzaPalace.order("Vienna", makePizza, onOrderError);
// Метод order объявляет три параметра
// Вызов pizzaPalace.order("Smoked", makePizza, onOrderError)
// возвращает "Your order is accepted. Cooking pizza Smoked."
// Вызов pizzaPalace.order("Four meats", makePizza, onOrderError)
// возвращает "Your order is accepted. Cooking pizza Four meats."
// Вызов pizzaPalace.order("Big Mike", makePizza, onOrderError)
// возвращает "Error! There is no pizza with a name Big Mike in the assortment."
// Вызов pizzaPalace.order("Vienna", makePizza, onOrderError)
// возвращает "Error! There is no pizza with a name Vienna in the assortment."

// ========================= # ==============================

// ========================= # ==============================
