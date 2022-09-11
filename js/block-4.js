// ========================= 1 ==============================
// function makePizza() {
// 	return "Your pizza is being prepared, please wait.";
// }
// // Change code below this line

// const result = console.log(makePizza());
// const pointer = console.log(makePizza);
// ========================= # ==============================
function deliverPizza(pizzaName) {
	return `Delivering ${pizzaName} pizza.`;
}

function makePizza(pizzaName) {
	return `Pizza ${pizzaName} is being prepared, please wait...`;
}

// Chande code below this line
function makeMessage(pizzaName, callback) {
	return callback(pizzaName);
}
console.log(makeMessage("Royal Grand", makePizza));
console.log(makeMessage("Ultracheese", deliverPizza));

// Функция makeMessage принимает два параметра,
// названые согласно задания, pizzaName и callback
// Вызов makeMessage("Royal Grand", makePizza)
//  возвращает строку "Pizza Royal Grand is being prepared, please wait..."
// Вызов makeMessage("Ultracheese", deliverPizza)
// возвращает строку "Delivering Ultracheese pizza."

// ========================= # ==============================

// ========================= # ==============================

// ========================= # ==============================
