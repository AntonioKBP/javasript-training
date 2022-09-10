const atTheOldToad = {
	potions: [
		{ name: "Speed potion", price: 460 },
		{ name: "Dragon breath", price: 780 },
		{ name: "Stone skin", price: 520 },
	],
	getPotions() {
		return this.potions;
	},
	addPotion(newPotion) {
		for (let i = 0; i < this.potions.length; i += 1) {
			const potion = this.potions[i];
			console.log(i);
			if (newPotion === potion.name) {
				return `Error! Potion ${newPotion} is already in your inventory!`;
			}
		}
		return this.potions.push(newPotion);
	},
	removePotion(potionName) {
		for (let i = 0; i < this.potions.length; i += 1) {
			const potion = this.potions[i];
			if (potionName === potion.name) {
				return this.potions.splice(i, 1);
			}
		}
		return `Potion ${potionName} is not in inventory!`;

		// const potionIndex = this.potions.indexOf(potionName);
		// console.log(potionIndex);
		// for (const potion of this.potions) {
		// 	if (potion.name === potionName) {
		// 		return this.potions.splice(potionIndex, 1);
		// 	}
		// }
		// return `Potion ${potionName} is not in inventory!`;
	},
	updatePotionName(oldName, newName) {
		for (const potion of this.potions) {
			if (potion.name === oldName) {
				potion.name = newName;
			}
		}
		return `Potion ${oldName} is not in inventory!`;
	},
};
console.log(atTheOldToad.addPotion({ name: "Stone skin", price: 240 }));
// console.log(atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }));

// console.log(atTheOldToad.removePotion("Dragon breath"));

// Для вызов`atTheOldToad.addPotion({ name: 'Stone skin', price: 240 })`,
// возвращает`'Error! Potion Stone skin is already in your inventory!'`.
// right answer
// Для вызов`atTheOldToad.addPotion({ name: 'Dragon breath', price: 700 })`,
// возвращает строку`'Error! Potion Dragon breath is already in your inventory!'`.
// right answer
// Для  вызова метода`atTheOldToad.removePotion('Dragon breath')`,
//  будет массив`[ { name: 'Speed potion', price: 460 }, { name: 'Stone skin', price: 520 } ]`
// right answer
// Для исходного объекта после вызова метода`atTheOldToad.removePotion('Speed potion')`,
//  будет массив`[ { name: 'Dragon breath', price: 780 }, { name: 'Stone skin', price: 520 }]`

// console.log(atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }));
// console.log(atTheOldToad.addPotion({ name: "Power potion", price: 270 }));

// console.log(atTheOldToad.removePotion("Speed potion"));
// console.log(atTheOldToad.removePotion("To check potion"));
// console.log(atTheOldToad.removePotion("Dragon breath"));

// console.log(atTheOldToad.updatePotionName("Ouch skipper", "Invulnerability potion"));
// console.log(atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion"));

console.table(atTheOldToad.potions);
