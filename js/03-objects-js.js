//  * Работем с коллекцией товаров в корзине:
//  * - getItems()
//  * - add(product)
//  * - remove(productName)
//  * - clear()
//  * - countTotalPrice()
//  * - increaseQuantity(productName)
//  * - decreaseQuantity(productName)
//  *
//  * { name: '🍎', price: 50 }
//  * { name: '🍇', price: 70 }
//  * { name: '🍋', price: 60 }
//  * { name: '🍓', price: 110 }
//  *

const cart = {
	items: [],
	getItems() {
		return this.items;
	},
	add(product) {
		console.table(this.items);
		for (const item of this.items) {
			if (item.name === product.name) {
				console.log(`product already exists `, product.name);
				item.quantity += 1;
				return;
			}
		}

		const newProduct = {
			...product,
			quantity: 1,
		};

		this.items.push(newProduct);
	},
	remove(productName) {
		const { items } = this;
		for (let i = 0; i < items.length; i += 1) {
			const item = items[i];
			const { name } = items[i];

			if (productName === name) {
				console.log(`found that product `, productName);
				console.log(i);
				items.splice(i, 1);
			}
		}

		// for (const item of this.items) {
		// 	console.log(item);
		// 	if (productName === item.name) {
		// 		console.log(`found that product`, productName);
		// 	}
		// }
	},
	clear() {
		this.items = [];
	},
	countTotalPrice() {
		const { items } = this;
		let total = 0;
		for (const { price, quantity } of items) {
			total += price * quantity;
		}
		return total;
		// let total = 0;

		// for (const item of this.items) {
		// 	console.log(item);
		// 	total += item.price;
		// }
		// return total;
	},
	increaseQuantity(productName) {},
	decreaseQuantity(productName) {},
};

cart.add({ name: "🍎", price: 50 });
cart.add({ name: "🍇", price: 70 });
cart.add({ name: "🍋", price: 60 });
cart.add({ name: "🍓", price: 110 });
cart.add({ name: "🍋", price: 60 });
cart.add({ name: "🍋", price: 60 });
cart.add({ name: "🍋", price: 60 });
cart.add({ name: "🍇", price: 70 });
cart.add({ name: "🍓", price: 110 });

// console.log(cart.items);
console.table(cart.getItems());
// cart.remove("🍋");

// console.table(cart.getItems());
console.table(cart.countTotalPrice());
