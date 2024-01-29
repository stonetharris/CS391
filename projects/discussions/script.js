function checkAge() {
    let input = document.getElementById("input").value;
    input=Number(input);

    if (isNaN(input)) {
        console.log("User entered non number input");
        document.getElementById("alt-output").innerHTML = "Invalid answer";
    } else if (input < 0) {
        // document.getElementById("alt-output").innerHTML = "Invalid answer";
        document.getElementById("alt-output").innerHTML = "negative is Invalid!";
    } else if (input > 17 && input < 120 && input%1===0) {
        console.log("User entered acceptable input");
        document.getElementById("image").style.display = "block";
    } else {
        document.getElementById("alt-output").innerHTML = "Sorry, you are not allowed to see this content.";
    }
}