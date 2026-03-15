document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // stop default redirect
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    // Example check (Must have "umamusume" entered, username can be anything)
    if (pass.toLowerCase() === "umamusume") {
        localStorage.setItem("username", user); //Stores username in a local storage to be accessed later
        window.location.href = "Frontpage.html"; // go to homepage
    } else {
        alert("Invalid password!"); //Displays error message if password is incorrect
    }
});

//Background image changer
const images = [
    "https://umamusu.wiki/w/thumb.php?f=Bg_0002_08111.png&width=1200",
    "https://umamusu.wiki/w/thumb.php?f=Bg_0001_01110.png&width=1200",
    "https://umamusu.wiki/w/thumb.php?f=Bg_0005_03110.png&width=1200",
    "https://umamusu.wiki/w/thumb.php?f=Bg_0006_00110.png&width=1200",
    "https://umamusu.wiki/w/thumb.php?f=Bg_0010_00111.png&width=1200"
];

let index = 0;
function changeBackground() {
    document.body.style.backgroundImage = "url('" + images[index] + "')"; //Set backgorund to current image in array, according to index
    index++;

    if (index >= images.length) {
        index = 0; //Resets to first image after reaching last picture
    }
}

changeBackground(); //first image
setInterval(changeBackground, 30000); //change every 30 seconds