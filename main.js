//set game set up
let userIMP;
let userValid;

//Gets first and last name from user
let firstName = window.prompt("What is your first name?");
let lastName = window.prompt("What is your last name?");
let age = window.prompt("What is your age?");

//prints name into conslole
console.log(firstName);
console.log(lastName);

//checks if user is old enough
if (age <= 14) {
    document.getElementById("funnyLog").innerHTML = "YOU ARE TOO YOUNG!";
    userValid = false;

} else {
    document.getElementById("funnyLog").innerHTML = "Welcome " + age + " year old.";
    userValid = true;
}

//tells user their info
if (userValid) {
    document.getElementById("p1").innerHTML = "Hello " + firstName + " " + lastName + "!";

    //actual game part i guess
    document.getElementById("button").onclick = function () {

        userIMP = document.getElementById("awnser").value;
        console.log("worked");
        //document.getElementById("gameText").innerHTML = userIMP;
        document.getElementById('printed').innerHTML += "<h1>"+userIMP+"</h1>";
    }

// hides button if 14 or under
} else {

    document.getElementById('stuff').hidden = true;

}