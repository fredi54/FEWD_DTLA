![GeneralAssemb.ly](../../img/icons/FEWD_Logo.png)

#FEWD - jQuery Intro

###Lesson #8 - Mar 2, 2016

"The devil is in the details, if you are ready." - <a href="https://www.youtube.com/watch?v=SFmGDSIgRSY">Marnie Stern</a>

---


##Agenda

*	Intro To Programming Reivew
*	Intro To jQuery
*	jQuery Basics
	*	File Structure
	*	Syntax
*	Adding Interactivity

---

##Exit tickets

*	Can we apply hex codes and other css rules such as padding and border for javascript?

Answer: You betcha!  We will be looking at how to do that tonight.

*	Whats the difference between AngularJS and Jquery and all these other JS things? Are they subdivisions?

Answer: JavaScript itself was built rather quickly (5 weeks!), so the language itself is rather clunky at times.  To workaround this, developers create re-usable pieces of code (basically, just their own functions).  That's what a JavaScript library is.  We will primarily be looking at jQuery in this class.

The differences between different JS libraries has to do with what functions the developers created for you to use (and the purpose of those functions).  AngularJS is one of a few new(ish) JS libraries designed specifically for making it easy to connect streams of data to your HTML.

---

##Exit tickets

*	How can i attain code from other websites to test out with my own code?

Answer: CodePen.io is a really good way to do this.  Otherwise, you can get crafty with your Chrome DevTools.

*	Does Javascript only work with html and CSS, can it work independent of the two? 

Answer: JavaScript was designed originally to work client-side, or that is, within a browser.  However, in recent years, it has become adopted for backend (server-side) development with <a href="https://nodejs.org/en/">Node.js</a>.  You can also use JS for hardware hacking with the <a href="https://tessel.io/">Tessel microcontroller</a>, and <a href="https://developer.apple.com/swift/">Apple's Swift language</a> for iOS, OS X, etc development is based on JavaScript.

*	"in the JS file, ""document"" is referring to the html or css file? or js?

Answer:	"document" refers to the entire HTML document.

---
##Exit tickets
*	Where else, other than inline, can you call javascript from the html file?

Answer: Similar to CSS, you can add JavaScript straight into your HTML file (within `<script>` tags).  But also similar to CSS, it's not a good practice to leave JavaScript in your HTML.  It should be in its own separate file.

*	What are the most popular JS tools being used in the industry today? What are the easiest to learn? What are the most complex/comprehensive for making super cool animations?

Answer: Too many to list exhaustively here, but here are a few of my favorites:

*	AngularJs / React JS / Ember / Backbone - these are all for being able to seamlessly integrate large data streams with your HTML
*	d3 - for data visualization and animations 
*	lodash - used for manipulating large data streams 
*	ThreeJS - creates immersive 3-dimensional displays that can be animated
*	Greensock Animation Platform - creates (primarily 2d) animations within the browser
---

##Exit tickets
* 	With larger projects, when incorporating JS actions on to a website, do you tackle JS last? After the html and css have been laid out? Or is it something that you do while you are still building out the website? 

Answer: As you're learning, it is a good practice to start off with HTML/CSS first and then add JS.

*	how do you keep up-to-date with the shifts in best practices or new rules as they come up? are there any good resources or blogs that you would recommend that we keep tabs on?

Answer: General resource for keeping up to date with tech industry: <a href="https://news.ycombinator.com/">HackerNews</a>.  Developer events are also a great place to meet new people & ideas!  This is a great LA-based JavaScript meetup: <a href="http://js.la/">JS.LA</a>


---


##Intro To jQuery


###What Is jQuery?


####jQuery is a cross-browser JavaScript library designed to simplify the client-side scripting of HTML.

A JavaScript **library** is a set of functions written by other developers that you can use.  Usually, these simplify the native JavaScript methods you would have to use, so you can focus on scripting logic and behavior, and worry less about the details of programming language itself. 

---

##jQuery benefits

*	makes DOM manipulation simple (no more `document.getElementById('id-name');`)*	Cross browser - works the same in *all* browsers (yay!)*	Allows:
	*	Document traversal	*	CSS Manipulation	*	Event Handling	*	Animation	*	and more!

---

##Getting started with jQuery: Script Tags

Adding jQuery to your website:

`<script src="js/jquery-1.8.3.min.js"></script>` - This method requires that you have a local copy of the jQuery source code in your project files.

**OR**

`<script src="https://code.jquery.com/jquery-1.12.1.min.js"></script>` - no need to download anything, you are just using a CDN (Content Delivery Network) to retrieve this remotely.  **We will be using this method.**

---


##Syntax

__Syntax:__ Spelling and grammar rules of a language.


In a programming language, similar to a natural language (languages that humans speak natively), there are formal rules around how to write it. This is the syntax.


---

##JavaScript Syntax - Punctuation

*	Semicolon
*	Brackets
*	Parentheses
*	Quotation Marks

---

##JavaScript Syntax - Comments

	//Single Line Comments

	/* Multi line comments */

---


##jQuery Syntax

###$

`$` tells the browser to use a method from the jQuery library.  The most common use case for this will be using the `$` as a method itself to fetch a DOM element.  (We will cover other usages of `$` next week).

---

##jQuery Syntax - Selectors


Selectors are just like CSS

	$(".test-class") // Selects ALL items with class "test-class"
	$("#test-id") // Selects SINGLE item with id "test-id"


---

##jQuery Syntax - Selectors

Vanilla JS: 

	document.getElementById("foo").onclick = doSomething;

	function doSomething() {
    	// make something happen here
	}

In jQuery, this might look more like:

	$("#foo").click(doSomething);

	function doSomething() {
		// make something happen here
   	}

---


##jQuery Events


A lot of JavaScript programming is about creating ways to detect *events* and respond to them.  Today we will focus on just one kind of event, the click event.  But the basics behind how we treat the click event will carry over to the way other events are *handled*.

**Events** are things that happen within the browser, usually triggered by user interaction.  Here are some common event types:

*	click
*	hover (shorthand for mouseenter and mouseleave)
*	drag
*	swipe
*	load (not based on user interaction but on assets loading!)

---


##jQuery Events


Anytime you **listen** for an **event**, you need to tell the browser what to do in response (this is called the **event handler**).  In jQuery, you wire up the **event handler** to the **event listener** like so:

	$("#foo").click(doSomething);

	function doSomething() {
		// make something happen here
		alert('I clicked on something!');
   	}

**Event handlers** are *always* **functions**.

---



![GeneralAssemb.ly](../../img/icons/code_along.png)
##jQuery Traffic Light

---

![GeneralAssemb.ly](../../img/icons/exercise_icon_md.png)
##Syntax Drill  

Open the following CodePen and follow the TODO comments in the JavaScript window to add interactivity with jQuery.  You do **NOT** need to import JavaScript here because we have already set it up for you in the CodePen.

CodePen link: http://codepen.io/emmacunningham/pen/vGOBXe

**Do your best to get through these drills on your own. You may need to utilize Google and look through some documentation.**

Solution code: http://codepen.io/emmacunningham/pen/WwvENp

---


##Adding Interactivity

<a href="http://codepen.io/emmacunningham/pen/dMomaa">Solution code for interactive Frequently Asked Questions page.</a>

---


##Homework

*	<a href="../Assignment">Assignment #4</a>
*	Wireframe + Proposal for your <a href="../../Final_Project">final project</a>
*	**OPTIONAL**: Additional DOM manipulation exercise in Assignment folder

---

##Exit Tickets - Lesson #8, Topic: Intro to jQuery

###Please fill out the <a href="https://docs.google.com/forms/d/1Iw2zghHfGgeM1p1G16F6kLi7KViv28tG3HVNnoM3PAc/viewform">exit ticket</a> before you leave
