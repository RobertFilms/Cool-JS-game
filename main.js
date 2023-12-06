/*
THINGS TO ADD/FIX
-----------------
1. Make delete button not type "nan" when deleteing
2.
-----------------
*/

//set game set up
let userInp;
let userValid;

//Gets first and last name from user
let firstName = window.prompt("What is your first name?");
let lastName = window.prompt("What is your last name?");
let age = window.prompt("What is your age?");

console.log(firstName);
console.log(lastName);

if (age <= 14) {
    document.getElementById("funnyLog").innerHTML = "YOU ARE TOO YOUNG!";
    userValid = false;
  } else if (age > 35) {
    document.getElementById("funnyLog").innerHTML = "MR SMITH AGE";
    userValid = false;
  } else {
    document.getElementById("funnyLog").innerHTML = "Welcome " + age + " year old.";
    userValid = true;
  }

if (userValid) {
    document.getElementById("p1").innerHTML = "Hello " + firstName + " " + lastName + "!";
    document.getElementById("button").onclick = function () {
      userInp = document.getElementById("awnser").value;
      console.log("worked.");
      document.getElementById('printed').innerHTML += "<h1>"+userInp+"</h1>";
    }
    document.getElementById("delete").onclick = function () {
      console.log("Deleting answer...");
      // Select all 'h1' elements inside the 'printed' div
      let h1Element = document.getElementById('printed').getElementsByTagName('h1');
      
      // Check if there are 'h1' elements present
      if (h1Element.length > 0) {
        // Remove the last 'h1' element
        h1Element[h1Element.length - 1].remove();
      }
    }
  } else {
    document.getElementById('stuff').hidden = true;
  }

