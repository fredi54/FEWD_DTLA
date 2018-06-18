#FEWD Week #5: More JavaScript - Hintsheet

A lot of the pieces for this week's assignment, we've covered in class in various code-a-longs.  Below, for each technical requirement, we've listed which code-a-long to find each piece in.

---

###Technical Requirements 

- Call ```$.val()``` on inputs to get the string value of your user's input

**HINT:** We worked with retrieving input values from `<input>` tags in the <a href="../09_variables_conditionals/solution/compare_that">Compare That code-a-long</a>.

- Store user input in ```var city```

**HINT:** We worked with assigning values to variable names in most of the code-a-longs from last week. In the <a href="../09_variables_conditionals/solution/compare_that">Compare That code-a-long</a>, we stored `<input>` values to variables so we could perform additional conditional logic with those values.

- Use ```$.click``` to figure out when the user clicks the "submit" button

**HINT:** The <a href="../09_variables_conditionals/solution/compare_that">Compare That code-a-long</a>, the <a href="../09_variables_conditionals/solution/score_keeper">Scorekeeper code-a-long</a>, and the <a href="../10_functions/solution/blackout">Blackout code-a-long</a> have examples where we respond to the user clicking on a `<button>`.

- Create ```if / else if / else``` conditionals to control the flow of your application

**HINT:** The <a href="../09_variables_conditionals/solution/compare_that">Compare That code-a-long</a> uses conditionals to determine which comparison operator to display on the page.  For the assignment, you will do something similar, except you will be responding to what the user typed in the input.


- Write at least six different lines of pseudocode and display them inline as JavaScript comments


- Prevent a form submission using the ```event.preventDefault()``` function

**HINT:** This is similar to the use of `event.preventDefault()` in the previous Assignment.

- Use the ```$.ready()``` handler to delay your code from executing until all DOM elements have been loaded

**HINT:** This is similar to the use of `event.preventDefault()` in the previous Assignment.

- Switch background images by applying specific classes for each input case ```$.addClass()``` (and its complement ``` $.removeClass() ```)

**HINT:** We used `$.addClass()` and `$.removeClass()` in the <a href="../10_functions/solution/blackout">Blackout code-a-long</a>.  In this assignment, you will want to make sure that as you update the classes, you also remove any previously added classes.

- Use the ```||``` operator in your conditionals to allow for multiple string values to execute ```if/else if``` statement code

**HINT:** Because we want to allow the user to input a variety of possibilities for each city (for example, "New York", "New York City", and "NYC" should all trigger the nyc.jpg background), you may want to employ conditional statements that check for multiple conditions, as we did in the <a href="../10_functions/solution/what_day">What Day code-a-long</a>.

- If a user submits:

  - "New York" or "New York City" or "NYC" make the background of the page nyc.jpg by applying the `nyc` class to the `body`
  - "San Francisco" or "SF" or "Bay Area" make the background of the page sf.jpg by applying the `sf` class to the `body`
  - "Los Angeles" or "LA" or "LAX" make the background of the page la.jpg by applying the `la` class to the `body`
  - "Austin" or "ATX" make the background of the page austin.jpg by applying the `austin` class to the `body`
  - "Sydney" or "SYD" make the background of the page sydney.jpg by applying the `sydney` class to the `body`



