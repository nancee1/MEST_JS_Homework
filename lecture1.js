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
var response = 'Ashwin said, \'Yes Sir!''; //Correct thing is to have single quote inside a double quote or vice versa or use the \ escape sequence		

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


 var pizza = {}; 														//using dot notation
	pizza.sliceShape = "triangle";
	pizza.boxShape = "square";
	pizza.sliceNum = 12;
	pizza.calorieSpec = "vegeterian";


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

/*
 *  5. Build a Animal object by using object constructor function, and add at least two method to prototype,
 *     create two animals from it.
 */

 function Animal()

/*
 * 6. Write a small menu selection function by using if-else and switch, input number, output name of your order
 */

/*
 * 7. var studentScores = [50, 67, 80, 90, 100, 30, 88, 68]; write a program by using studentScores array ,for loop and conditions.
 */

/*
 * 8. var studentScores = [50, 67, 80, 90, 100, 30, 88, 68]; write a program by using studentScores array , array.forEach and conditions.
 */