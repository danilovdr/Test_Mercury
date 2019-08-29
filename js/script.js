function sendLogin() {
    let emailContainer = document.getElementById("email");
    emailContainer.style.border = "1px solid #f1f1f1";

    let warning = document.getElementById("error");
    warning.style.display = "none";

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let login = {
        "email": email,
        "password": password,
    };

    let json = JSON.stringify(login);

    let xhr = new XMLHttpRequest();
    xhr.open("POST", "https://us-central1-mercdev-academy.cloudfunctions.net/login", true);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            let obj = JSON.parse(xhr.responseText);

            if (xhr.status === 200) {
                let user = {};
                user.name = obj.name;
                user.photoUrl = obj.photoUrl;
                localStorage.setItem("username", obj.name);
                localStorage.setItem("userPic", obj.photoUrl);
                accessLogin(obj)
            } else if (xhr.status === 400) {
                wrongPassword(obj);
            }
        }
    };

    xhr.send(json);
}

function wrongPassword(error) {
    let warning = document.getElementById("error");
    warning.style.display = "block";

    let e = document.getElementById("error-text");
    e.textContent = error.error;

    let email = document.getElementById("email");
    email.style.border = "1px solid #ED4159";
    email.style.color = "#ED4159";

    let pass = document.getElementById("password");
    pass.value = "";
}

function accessLogin() {
    document.location.href = "user.html";
}