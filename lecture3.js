/**
 * Created by Jerry on 2016-10-22.
 */

/*  1. Explain the following code:
 *
 *  function func() {
 *      console.log(this);
 *  }
 *
 *  func(); // what is the output? Why? The output is a list of methods available on the 'window' object. 
             // This is because by default 'this' refers to the globally available 'window' object. 
 *
 *  var obj = {
 *      func: func // what is the second func here?
 *  }; //The second func is a member of the obj object that invokes the predefined func() method.

 *  obj.func(); //what is the output? try to explain why. 
 	The output is an empty object with no members/properties 
 *
 *  obj.func.bind(window)(); // what is the output? why?
 *
 *  obj.func.bind(this)();  // what is the output? why?
 *
 *  var people = {
 *      name: 'ashwin',
 *      age: 40
 *  };
 *
 *  obj.func.bind(people)(); //what is the output? why?
 */

/* 2. write a function to convert first letter of every word in a string
 *     to upper case.
 *     eg input = 'hi, welcome to mest;'
 *        output = 'Hi Welcome To Mest';
 *        input2 = 'today is Sunday';
 *        output2 = 'Today is Sunday';
 */

/*
 *  3. Write reg expresion for email validation(This is not an easy
 *  question, please make sure you do your research on this).
 *  reg expression for email validation - 
      [-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i
 */
 

/*
 * 4. what is localStorage and sessionStorge under window object? What is the
 *    difference?

 Local storage stores data until it is explicity deleted. 
 Data such as username and password of sites frequently visited are stored on local storage so user doesn't have to input them again
 Session storage stores data for just a session.
 Data stored in session storage is cleared up when the session ends/browser is closed. 

 The difference is that data stored in localStorage has no expiration time,
 while data stored in sessionStorage gets cleared when the browsing session ends—that is, when the browser is closed.
 */

