# CSS Selectors & Basic Styling
---

### 1. Intro to CSS (Cascading Style Sheets)

* What is CSS?

   A language used for describing the formatting of a HTML document.

* Why CSS?

   CSS enables us to separate the content of a document from its presentation.  This concept of *separation of concerns* is wide-spread throughout software development.

* Where do we write our CSS?

  * Best Practice - Use a `<link>` element to include an external css file

     Always put your css in a separate file with an extension of 'css', for example: `styles.css`
          
     Link to your `styles.css` file by including this in your `<head>` element:
     
     ```HTML
     <!DOCTYPE html>
     <html lang="en">
     <head>
          <meta charset="UTF-8">
          <title>Document</title>
          <link rel="stylesheet" type="text/css" href="css/styles.css">
     </head>
     ```
     
     Note that the *href* path in this case is relative to *index.html*.  This is how you would load an external stylesheets using an absolute path:
     
     `<link rel="stylesheet" type="text/css" href="http://www.somedomain.com/css/stylesheet.css">`

   * Not Recommended (don't do these)

      You may come across css styling being put in the document `<head>` such as this:
      
      ```HTML
      <html>
      <head>
          <meta charset="utf-8">
          <title>My Document</title>
          <style>
              body {
                  font-family: "Lucida Grande";
              }
          </style>
      </head>
      ```
      
      Another way would be use what's called *inline styling* by setting the *style* attribute of an element.  Again, don't do this!
      
      ```HTML
      <p style="color: red">I'm red text</p>
      ```


- Load Order Matters

   Often, there will be multiple CSS files that you want to include in your web page. For example, you may want to load a CSS file from a CSS framework and include your own custom CSS file as well. When there is more than one file being loaded, the load order matters if multiple files define the same CSS rule.
   
   
- CSS Frameworks

   **Disclaimer** - when learning basic CSS, do **not** rely on a CSS framework before you have taken the time to learn the basics of how CSS works. Rarely will you be able to rely solely on a framework to style your web app, so you have to know CSS to write additional CSS to customize the look and feel.
   
   A CSS framework is ready to go CSS that makes you more productive at styling a web application.
   
   They provide code that "resets" the browser's default stylings that look much better than defaults and make pages render more consistently from browser to browser.
   
   They can vary greatly framework to framework, but they almost always include a *grid system* to help with layout and include options to make your page adapt to the size of the display device (*responsive design*).  [We will talk about this in greater depth in classes to come.]

- Web Colors

   In styles, color can be specified three ways:
   - Using one of the pre-defined color keywords, e.g. `red`, `seagreen`.
   - Specifying a RGB value with either the #-hexadecimal `#0e33f4` or `rgb(14, 51, 244)` and `rgba(14, 51, 244, 0.5)` functional notation.
   - Lastly, you can use the HSL system via the hsl() and hsla() functional notations.

   Here is a link that documents in detail the above concepts: [CSS Color Values](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value)

- Font Sizing
   
   Font sizes can specified in pixels, points, em's, and percentages.  This topic warrants a more in depth discussion (we will dive deeper into this next week).  Here's a link to a blog post to get you started:  [CSS Font-Size](http://kyleschaeffer.com/development/css-font-size-em-vs-px-vs-pt-vs/)

### 2. CSS Selectors

The CSS Selectors in a CSS rule do just what they say, they select an element, or elements, to be styled.


#### Basic Selectors

##### *element* Selector

Select all `<h1>` tags:

```HTML
h1 { 
	...
 }
```

For now we will just look at element selector but next week we will dive into other types!


#### CSS Selectors - Key Takeaway

CSS selectors provide enormous capability and flexabiltiy to target any element(s) for styling!  You will spend a good amount of time as a front-end developer learning how to wield their power.

### 3. Basic CSS Properties

#### There are over two hundred CSS properties!  You can view them here: [CSS Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)

No doubt, you will spend a great deal of time getting to know many of these properties.  Diving into the numerous properties, many that apply only to certain elements, would not be prudent use of our lesson time.  However, here are a few common ones we will discuss:

#### *color*

Sets the color of the text.

#### *text-align*

Sets how inline content is aligned within its parent block element.

#### *background-color*

Sets the background color of an element.

#### Shorthand Properties

   Shorthand properties are CSS properties that let you set the values of several CSS properties simultaneously.
   
   Using a shorthand property, a web developer can write more concise and often more readable CSS, saving time and energy. 
  
  A shorthand property groups properties of a common theme.  Here are some examples:

- *font*

   *font* is a shorthand property that can be used to set font related properties.  For example:
  
   ```HTML
	p {
	   font-style: italic;
	   font-weight: bold;
	   font-size: 12px;
	   line-height: 14px;
	   font-family: Arial, sans-serif;
	}
	```

   The five lines of CSS declarations above can be merged into a single declaration as follows:

	```HTML
	p {
	   font: italic bold 12px/14px Arial, sans-serif;
	}
	```

- *margin*

   *margin* is a shorthand property that can be used to set margin related properties.  For example:
  
   ```HTML
	p {
	   margin-top: 10px;
	   margin-right: 5px;
	   margin-bottom: 15px;
	   margin-left: 25px;
	}
	```
   The four lines of CSS declarations above can be merged into a single declaration as follows:
  
	```HTML
	p {
	   margin: 10px 5px 15px 25px;
	}
	```
   
   The above `margin` example happened to specify all four sides (top, right, bottom & left - in that order).  A good word to help remember the order of these values is _T__R_ou_B__L_e.
   
   There are other shorthand properties like `padding`, `margin` and `border-width` that also have the same four values for top, right, bottom and left.  However, we often want to set opposite ends, e.g., top / bottom, or even all four sides to the same value.
   

## Resources

[CSS Reference on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)


