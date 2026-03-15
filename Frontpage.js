const username = localStorage.getItem("username");
if (username) {
    document.getElementById("userDisplay").textContent = username; //Get username according to username stored in local storage from 'index.html'
} else {
    document.getElementById("userDisplay").textContent = "Guest"; // fallback
}

