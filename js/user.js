function loadUser() {
    let userPic = document.getElementById("userpic");
    userPic.src = localStorage.getItem("userPic");

    let name = document.getElementById("username");
    name.textContent = localStorage.getItem("username");
}

function logout() {
    document.location.href = "index.html";
}
