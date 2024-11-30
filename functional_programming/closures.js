/**
 * CLOSURES
 
  The function body has access to variables that are defined
  outside the function body
 */

var me = "Bruce Wayne";

function greetMe() {
  console.log("Hello, " + me + "!");
}

me = "Batman";
greetMe();
greetMe();
