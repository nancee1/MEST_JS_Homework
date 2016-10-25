/*
 * 1. Are the following variable valid? If it is not please explain it and correct them using the best practise
 */

var firstCar = 'Doge'; //variable names should begin with a letter
var var = 'variable'; //variable names should make sense and should not be reserved javascript words.
var firstName = 'Jerry'; //variable names should not contain white space and camelCase is preferred
var schoolName = 'MEST'; // variable name is correct but camleCase is preferred for best practise and readability
var totalNumber = 100;// variable name is correct but camleCase is preferred for best practise and readability

/*
 * 2. Are the following variable valid? If it is not please explain it and correct them by using the best practise
 */
var greeting  =  "It's nice to meet you today!"; //The value of variable is not valid because single quotes are used inside single quotes
var greeting  =  'It\'s nice to meet you today!'; //Correct thing is to have single quote inside a double quote or vice versa or use the \ escape sequence		
var response = "Ashwin said, 'Yes Sir!'"; //The value of variable is not valid because single quotes are used inside single quotes

/*
 * 3. Try 0.3 + 0.1 === 0.4, explain what happen here
 */


/*
 * 4. Build a pizza object by using all three object creation method, it must has at least 4 properties
 */
 var pizza = {  														// using object literal notation.
 	sliceShape:"triangle",
 	boxShape:"square", 
 	sliceNum:12, 
 	calorieSpec:"vegeterian"
 	};
 	console.log(boxShape);


 var pizza = {}; 														//using dot notation
	pizza.sliceShape = "triangle";
	pizza.boxShape = "square";
	pizza.sliceNum = 12;
	pizza.calorieSpec = "vegeterian";
	console.log(pizza.calorieSpec);


 function Pizza(sliceShape, boxShape, sliceNum, calorieSpec) {         //using object constructor function
    this.sliceShape = sliceShape;
    this.boxShape = boxShape;
    this.sliceNum = sliceNum;
    this.calorieSpec = calorieSpec;
	}
var pepperoniPizza = new Pizza("triangle", "square", 12, "vegetarian");
	console.log (pepperoniPizza);


var pizza = { 															//using object.create
	sliceShape: "triangle",
	boxShape: "square",
	sliceNum: 12,
	calorieSpec: "vegeterian"
	};
var firstPizza = Object.create(pizza);
	console.log (firstPizza.sliceNum);

/*
 *  5. Build a Animal object by using object constructor function, and add at least two method to prototype,
 *     create two animals from it.
 */

 function Animal(name, ears, legs, mouth) {         
    this.name = name;
    this.ears = ears;
    this.legs = legs;
    this.mouth = mouth;
	}

 Animal.prototype.hear = function() {
    console.log (this.name + " uses it's ears to hear");
 };
  Animal.prototype.see = function() {
    console.log (this.name + " uses it's eyes to see");
 };
 
 	lion = new Animal("Lion");
 	console.log(lion.name);
 	console.log(lion.hear());

 
 	cat = new Animal("Cat");
 	console.log(cat.name);
 	console.log(cat.see());
/*
 * 6. Write a small menu selection function by using if-else and switch, input number, output name of your order
 */
function make_order(orderNo) { 																//using if-else
	console.log("----Menu----");
	var menu = [ "Fried rice and chicken", "Spaghetti", "Nigerian Jollof"];
	
	for (var i = 0; i < menu.length; i++) {
		console.log(i + 1 + " - " + menu[i]);
	}
	
	if (orderNo === 1) {
		console.log("Your Order: Fried rice and chicken");
	} else if (orderNo === 2) {
		console.log("Your Order: Spaghetti");
	} else if (orderNo === 3) {
		console.log("Your Order: Nigerian Jollof");
	}
}

function make_order(orderNo) { 																	//using switch
	console.log("----Menu----");
	var menu = [ "Fried rice and chicken", "Spaghetti", "Nigerian Jollof"];
	
	for (var i = 0; i < menu.length; i++) {
		console.log(i + 1 + " - " + menu[i]);
	}
	
	switch(orderNo) {
		case 1:
			console.log("Your Order: Fried rice and chicken");
			break;
		case 2:
			console.log("Your Order: Spaghetti");
			break;
		case 3:
			console.log("Your Order: Nigerian Jollof");
			break;
	}
}
/*
 * 7. var studentScores = [50, 67, 80, 90, 100, 30, 88, 68]; write a program by using studentScores array ,for loop and conditions.
 */

var studentScores = [50, 67, 80, 90, 100, 30, 88, 68]
for (var i = 0; i < studentScores.length; i++) {
	if (studentScores[i] > 70) {
		console.log("Student with score " + studentScores[i] + " is above average");
	} else {
		console.log("Student with score " + studentScores[i] + " is below average");
	}
}
/*
 * 8. var studentScores = [50, 67, 80, 90, 100, 30, 88, 68]; write a program by using studentScores array , array.forEach and conditions.
 */

 var studentScores = [50, 67, 80, 90, 100, 30, 88, 68]
studentScores.forEach(function(score, index) {
	if (score > 70)  {
		console.log("Student with " + score + " marks did great");
	} else {
		console.log("Studen with " + score+ " marks can do better");
	}
});
