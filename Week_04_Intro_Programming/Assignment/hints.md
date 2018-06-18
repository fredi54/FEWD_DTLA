##Assignment 4 hintsheet

### `$.ready()`

In Lesson 8, we discussed some types of **events** that jQuery/JavaScript can help detect.  This is all that `$.ready()` does -- it is just like when you use `$.click()`, except instead of listening for and responding to when the user clicks on something, it detects when the DOM is fully loaded and ready.

It is a good practice to embed **all** of your code within the function that handles the `$.ready()` event.

```
	$(document).ready(pageReady);
	function pageReady() {
		// All of you site's JavaScript goes here		
	}
```

### `event.preventDefault()`

Something that you may observe as you try to bind click listeners to your `<a>` tags is that they don't appear to trigger the functionality that you want (and if you're really paying attention, you may notice the screen flashing).

This is because, when a user clicks on an `<a>` tag, by default, the browser will attempt to take them to another page.  To prevent this from happening, we use `event.preventDefault()` to tell the browser, within our click handler, to prevent the default action of attempting to take the user to another page, and instead, just trigger the interactive functionality provided by jQuery.

In your HTML:

```
	<a href="#" id="click-target">Click me!</a>
```


In your JS:

```
	// Setting up the click interaction to run handleClick
	$("#click-target").click(handleClick);
		
	// Handling click event
	function handleClick() {
		// This prevents the browser from trying to navigate us away
		event.preventDefault();
		
		// The other interactive functionality you want to change
		// For example:
		$("body").css("background", "pink");
	}
```

### Reading jQuery documentation
You'll notice that in a lot of the examples on the jQuery documentation, the event handlers are set up differently from how we've been doing it in class.  The end effect is the same, but the syntax may appear dramatically different from the method we used this past week.

This will become clearer when we have a chance to formally define and discuss how functions in JavaScript work, but to break it down for you:

Here is a click event listener and handler from the jQuery documentation:

```
	$( "#target" ).click(function() {
	  alert( "Handler for .click() called." );
	});
```

And how we've been doing it in class:

```
	$( "#target" ).click(clickHandler);
	function clickHandler() {
	  alert( "Handler for .click() called." );
	}	
```

In both of these, the `$.click()` method uses the function defined inside of the parentheses to tell the browser what to do after the `#target` item has been clicked.  In the jQuery documentation, they are just supplying the function within the parentheses (a bit of shorthand that requires one less line of code), while in our method we have been **naming** our function (in the example above, the name is `clickHandler` because we typed it after the keyword `function`).  `clickHandler` *refers* to a function -- the same one that is being called in the jQuery example, the only difference is that our function has a **name** and we can use it inside the `()` after the `.click`.

When you are reading the jQuery documentation, know that where you see the **unnamed** function inside of `()`, you can also used a named function in place of unnamed one (the same way we have been doing for `.click`, you can do it for other events, like `.ready`).

