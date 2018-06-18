$(document).ready(readyFunction);


function readyFunction() {

  function compare() {
    
    // We use this variable to store the comparison string we want to use.
    var comparison;

    // We use these variables to store the values from the input field
    // We use the Number() function to *coerce* the value from the input field from a string to a number
    var a = Number($("#a").val());
    var b = Number($("#b").val());
   
    if (a < b) {
      comparison = "<";
    } else if (a > b) {
      comparison = ">";
    } else if (a === b) {
      comparison = "===";
    } else{
      comparison = "N/A";
    }
    
   $("#comparison").html(comparison);
  }

  $("#submit").click(compare);

}

