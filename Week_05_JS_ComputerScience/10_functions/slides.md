![GeneralAssemb.ly](../../img/icons/FEWD_Logo.png)

#FEWD - Functions

###Lesson 10 - Mar 9, 2016

"Success is not final, failure is not fatal. It is the courage to continue that counts." - Blake Griffin

---


##Agenda

*	Surveys, please!
*	Exit Ticket Review
*	Conditionals
*	Functions
*	Anonymous Functions
*	Revisiting jQuery
*	Homework + Exit Tix

---


##Exit Tickets

Difference between
	
	$(document).ready(readyFunction);
	function readyFunction() {
		// Code goes here
	}
	
vs.

	$(document).ready(function () {
		// Code goes here
	});

Answer: the top formatting is an example of using a **named** function, the second is where we are using an unnamed or **anonymous** function.  In terms of what happens during execution, there is no difference.  The jQuery documentation uses the anonymous function style.

---
##Exit Tickets

*	is there another site besides jquery documentation that has the events/functions that's more user friendly or easier to read?	

Answer: I'm not aware of such a resource and have spent the past two days trying to find something -- if you see anything, share with the class!  Otherwise, we will continue to practice reading the documentation together in class.  (And hey if anybody needs a Final Project idea...)

*	when would you redefine a variable? wouldn't it just take whatever was last defined?

Answer: Let's revisit the `score_keeper` code from last week.

---

##Exit Tickets

*	What are some common examples of using variables and conditionals? 

Answer: We will be reviewing these things tonight!  Use a variable whenever you need your program to "remember" a value.  Use conditionals whenever you need your program to "make decisions" based on other values within your program.

*	What are some limitations we should be aware of when designing javascript heavy websites. 

Answer: We're all very lucky to be living and developing in a time of increased standardization across browsers.  For now, focus on making your JavaScript do what you want to; we'll talk about optimization next week.


---

##Making Decisions

It's either TRUE or FALSE

If you are greater than 18, (then) 
you are an adult

	if (age > 18){
		document.write("You are an adult");
	}

---


##Comparisons - Equality

Are two things equal?


	10 === 10 //true
	10 === 5 //false
	"hi" === "hi" //true


---


##Logical Operators

<img src="../../img/unit_1/logical_operators.png" style="height: 80%" />

---

##Conditional Syntax


	if (condition is true) {  
		//Do cool stuff
	}


---

##Conditional Syntax

	if (condition is true) {
		//Do cool stuff
	}
	else {
		//Do other cool stuff
	}	

---

##Conditional Syntax


	var topic = "JS";
	if (topic === "JS") {
		console.log("You're learning JavaScript");
	}
	else if (topic === "JavaScript") {
		console.log("You're still learning JavaScript");
	}
	else {
		console.log("You're learning something else");
	}


---

##Multiple Conditions

###We can combine conditions to check if multiple things hold.


`&&` - **AND** : **ALL** things must be true

	if (name === "GA"  && password === "YellowPencil"){
		//Allow access to internet
	}


`||` - **OR** : **AT LEAST ONE** must be true

	if (day === "Monday"  || day === "Wednesday"){
		//We have class today
	}


---


![GeneralAssemb.ly](../../img/icons/code_along.png)
##Do I have class today?

---


##Functions

We have been using them already, but tonight we formalize our understanding and usage of functions!


---

##Functions Syntax


<img src="../../img/unit_2/functions_syntax.png" style="height: 80%" />


---

##Function Calls

<img src="../../img/unit_2/function_calls.png" style="height: 80%" />


---

##Function Arguments


<img src="../../img/unit_2/argument_syntax.png" style="height: 80%" />


---


##Function Arguments



<img src="../../img/unit_2/function_call_argument.png" style="height: 80%" />


---


##Return Functions

<img src="../../img/unit_2/function_return.png" style="width: 80%" />

##Within any function, JavaScript will stop executing as soon as it gets to a return statement; for this reason, you should only use return at the end of a function.

---

![GeneralAssemb.ly](../../img/icons/code_along.png)
##Cash Register

---


##Anonymous Functions


So far we have been using **named** functions, but there is another way to write a function.

An anonymous function works the same way that a named function works; the only difference is that because it doesn't have a name, there is no way to reference it.

This is the style that the jQuery documentation uses because it's less code to read.  Now that we have learned that **named functions** and **anonymous functions** are just two ways to define functions, we can revisit the jQuery documentation.

---

##Homework 

*	<a href="../Assignment">Assignment 5</a>
*	**IF** you have talked to me or Sam about your Final Project proposal
	*	Start working on the HTML + CSS for your Final Project (you will submit a first draft of your HTML + CSS in two weeks)
*	**ELSE**
	*	First let us know what your idea is :D

---

##Exit Tickets - Lesson #10, Topic: Functions

###Please fill out the <a href="https://docs.google.com/forms/d/1Iw2zghHfGgeM1p1G16F6kLi7KViv28tG3HVNnoM3PAc/viewform">exit ticket</a> before you leave


