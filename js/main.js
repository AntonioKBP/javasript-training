// console.log("JavaScript says hello")
//         console.info("JavaScript says hello")
//         console.error("JavaScript says hello")
//         console.warn("JavaScript says hello")

// var num;
// num = 5;

// var num = 5;
// num = 7;
// console.log("Variables " + num + " check");

//  next lesson

//    first try
// var num_1 = 5;
// var num_2 = 15;
// console.log("minus " + num_1 - num_2); NaN not a number

//    second try works fine

// var num_1 = 5;
// var num_2 = 15;
// var res = num_1 - num_2;
// console.log("minus " + res);

// third try and how to do

// var num_1 = 5;
// var num_2 = 15;
// var res = num_1 - num_2;
// console.log("minus " + (num_1 - num_2));

//  another examples

// var num_1 = 5;
// var num_2 = 15;
// console.log("add " + (num_1 + num_2));

// var num_1 = 5;
// var num_2 = 15;
// console.log("multiple " + (num_1 * num_2));

// var num_1 = 5;
// var num_2 = 15;
// console.log("divide " + (num_1 / num_2));

//  doing things

// var num_3 = 5;
// num_3 = num_3 + 7;
// num_3 += 7; =12
// num_3 *= 7; =35
// num_3 /= 7; =0.7

// num_3++; ++ add 1 total = 6; -- minus 1 total = 4;

// console.log("result " + num_3);

// var str_1 = "12";
// var str_2 = "2";

// console.log("result " + (str_1 + str_2));  stroke add to each other total 122

// var str_1 = Number("12");
// var str_2 = Number("2");

// console.log("result " + (str_1 + str_2)); add Number made good even stroke multiplies to total 14

//    Math examples

// console.log("Math " + Math.PI); 3.141592653589793;

// console.log("Math " + Math.sin(1));

// console.log("Math " + Math.max(0, 3, 7, 9, 5)); 9

// console.log("Math " + Math.min(1, 3, 7, 9, 5)); 1

//    Lesson 6

// var number = 15;

// if (number == 5) {
// 	console.log("Ok!");
// } else if (number < 10) {
// 	console.log("Okeysi");
// } else if (number == 7) {
// 	console.log("7");
// } else if (number >= 5) {
// 	console.log(">=15");
// } else {
// 	console.log("Error");
// }                         total ">=15" win))

// var number = 15;
// var isHasHouse = true;

// if (number == 5 || isHasHouse == true) {              || - or
// 	console.log("Ok!");                                  && - and
// } else if (number < 10) {                             isHasHouse without =true is ok in this ex
// 	console.log("Okeysi");                               isHasHouse == false may write !isHasHouse ( !-not isHasHouse)
// } else if (number == 7) {
// 	console.log("7");
// } else if (number >= 5) {
// 	console.log(">=15");
// } else {
// 	console.log("Error");
// }

// var stroke = "example";

// switch (stroke) {
// 	case "4":
// 		console.log("variables 4");
// 		break;
// 	case "45":
// 		console.log("variables 45");
// 		break;
// 	case "example":
// 		console.log("variables example found");
// 		break;
//     default:
//         console.log("default");
//         break;
// }

//  Lesson 7

//  Massive (array)

// var arr = [5, true, "stroke", -100, 5.7];  index inside [] starts from 0
// arr[3] = "change from -100 to that";
// console.log(arr[3]);

// var arr = [5, true, "stroke", -100, 5.7];
// arr[3] = "change from -100 to that";
// console.log(arr.length);   show tehe lenth of massive(array) in this ex 5

// var arr = [5, true, "stroke", -100, 5.7];
// arr[3] = "change from -100 to that";
// console.log(arr[3]);

// var arrayMatrix = [
// 	[4, 6, 8],
// 	[true, "stroke"],
// 	[-100, 5.7],
// ];

// arrayMatrix[1][0] = "true changed to this";
// console.log(arrayMatrix); to check changes

//  Lesson 8 Cycles

// for (var i = 0; i < 10; i++) {    cycle until 9
// 	console.log(i);
// }

// for (var i = 1; i <= 10; i++) {
// 	console.log(i);
// }

// for (var i = 100; i > 5; i /= 2) {
// 	console.log(i);
// }

// var j = 0;
// while (j < 10) {
// 	console.log(j);
// 	j++;             console    1 2 3 4 5 6 7 8 9
// }

// var j = 1000;
// while (j > 100) {
// 	console.log(j);
// 	j -= 100;
// }

// var isHasCar = true;   dont start this cycle because its infinite
// while (isHasCar) {     because isHasCar is always true

// }

// var x = 100;
// do {
// 	console.log(x);   заведомо некорректно потому-что х=100
// } while (x < 50);  а мы просим выполнять цикл пока х не станет менье 50 но "do" выполнит цикл один раз
// {
// }

// var x = 0;
// do {
// 	console.log(x);
// 	x++;
// } while (x < 10);                        123456789

// for (var i = 10; i <= 20; i += 2) {      10 12 14 break cycle
// 	if (i > 15) break;                      when i > 15

// 	console.log(i);
// }

// for (var i = 10; i <= 20; i++) {
// 	if (i % 2 == 0) continue;             i % 2 == 0 (условие если i при делении на 2 является четной ) спрацьовує (12 14 16 18 20)але
// 	console.log(i);                       оператор continue продовжує цикл і ми маємо нечет (11 13 15 17 19)
// }

// var array = [5, 7, 3, 8, 9, "check"];

// for (var i = 0; i < array.length; i++) {
// 	console.log("Element " + i + ": " + array[i]);   array count until array.lenght (0-5) because index from 0
// }

// var array = [5, 7, 3, 8, 9, "check"];

// for (var i = 0; i < array.length; i++) {
// 	console.log("Element " + (i + 1) + ": " + array[i]);  (i + 1) для красоти індексаціі с единиці
// }

// var array = [5, 7, 3, 8, 9, 22];

// for (var i = 0; i < array.length; i++) {
// 	array[i] *= 2;                                       you may do what you want with you array(masive) in ex multiply every part of array(masive)*2
// 	console.log("Element " + i + ": " + array[i]);
// }

//  Lesson 9   Alert Prompt Confirm

// alert("Hello JavaScript");

// confirm("Are you Ready for a party?");

// var data = confirm("Are you Ready for a party?");  true or false in console
// console.log(data);

// var data = confirm("Are you Ready for a party?");
// if (data) {
// 	alert("Very Good");
// }
// Prompt
// prompt("How old are you", 21);

// var data = prompt("How old are you?");
// console.log(data);

// var person = null;
// if (confirm("Are you sure?")) {
// 	person = prompt("Enter your name");
// 	alert("Hello " + person);
// } else {
// 	alert("You pushed cancel");
// }

//  Lesson 10

// function info(word) {
// 	console.log(word + "!");
// }

// function sum(a, b) {
// 	var res = a + b;
// 	console.log(res);
// 	info(res);
// }

// sum(5, 7);

// info("Hello");

// function summa(arr) {
// 	var sum = 0;
// 	for (var i = 0; i < arr.length; i++) sum += arr[i];

// 	return sum;
// }

// var array = [6, 8, 1];
// // var array_2 = [6, 8, 17, 9];
// // var array_3 = [6, 8, 14, 99];

// summa(array);
// // summa(array_2);
// // summa(array_3);

// var res = summa(array);
// console.log("Result " + res);

//  Local and Global

// var num = 10;             global var - outside the function

// function info() {
// 	var num = 20;            local var - inside the function
// 	console.log(num);
// }

// info();

// console.log(num);

//   Actions

// function onClickButton() {
// 	alert("You pushed me");
// }

// var counter = 0;

// function onClickButton() {
// 	counter++;
// 	console.log(counter);
// }

// var counter = 0;

// function onClickButton(element) {
// 	counter++;
// 	element.innerHTML = "You pushed button: " + counter;
// 	console.log(element.value);
// 	// element.style.background = "grey";
// 	// element.style.color = "green";
// 	element.style.cssText = "border-radius: 4px; border: none";
// }

// function onInput(element) {
// 	if (element.value == "Hello") alert("Hello there");
// 	console.log(element.value);
// }

//   Lesson 12

// var text = document.getElementById("text");
// console.log(text.id);
// text.title = "New usual text";
// console.log(text.title);

// text.style.color = "red";
// text.style.backgroundColor = "grey";

// text.innerHTML = "New<br>text<br>for check";

// document.getElementById("text").style.color = "white";

// var spans = document.getElementsByTagName("span");

// var spans = document.getElementsByClassName("simple-text");

// for (var i = 0; i < spans.length; i++) {
// 	console.log(spans[i].innerHTML);
// }

document.getElementById("main-form").addEventListener("submit", checkForm);

function checkForm(event) {
	// var name = document.getElementById("name").value;
	event.preventDefault();

	var el = document.getElementById("main-form");
	var name = el.name.value;
	var pass = el.pass.value;
	var repass = el.repass.value;
	var state = el.state.value;
	var error = "";
	// console.log(name + " - " + state + " - " + pass + " - " + repass);

	if (name == "" || pass == "" || state == "") error = "Fill the fields";
	else if (name.length <= 1 || name.length > 50) error = "Enter correct name";
	else if (pass != repass) error = "Pass and repass should be the same";
	else if (pass.split("&").length > 1) error = "incorrect password";

	if (error != "") {
		document.getElementById("error").innerHTML = error;
	} else {
		alert("All data is correct");
		window.location = "https://ukr.net";
	}
}
