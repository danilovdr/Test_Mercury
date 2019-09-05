function loadUser() {
    let userPic = document.getElementsByClassName("user__pictures").item(0);
    userPic.src = localStorage.getItem("userPic");

    let name = document.getElementsByClassName("user__name").item(0);
    name.textContent = localStorage.getItem("username");
}

function logout() {
    document.location.href = "index.html";
}
