const ERROR_COLOR_EMAIL = "#ED4159";
const ERROR_BORDER_EMAIL = "1px solid #ED4159";


function sendLogin() {
    let login = getLogin();

    let json = JSON.stringify(login);

    let xhr = new XMLHttpRequest();
    xhr.open("POST", "https://us-central1-mercdev-academy.cloudfunctions.net/login", true);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            let response = JSON.parse(xhr.responseText);

            if (xhr.status === 200) {
                accessLogin(response)
            } else if (xhr.status === 400) {
                wrongLogin(response);
            }
        }
    };

    xhr.send(json);
}

function getLogin() {
    let inputs = document.getElementsByClassName("login__input");

    let email = inputs.item(0);
    let password = inputs.item(1);

    return {
        "email": email.value,
        "password": password.value,
    };
}

function accessLogin(response) {
    localStorage.setItem("username", response.name);
    localStorage.setItem("userPic", response.photoUrl);

    document.location.href = "user.html";
}


function wrongLogin(response) {
    let error = document.getElementsByClassName("login__error").item(0);
    error.style.display = "block";
    error.textContent = response.error;

    let inputs = document.getElementsByClassName("login__input");

    let email = inputs.item(0);
    email.style.border = ERROR_BORDER_EMAIL;
    email.style.color = ERROR_COLOR_EMAIL;
    email.style.opacity = "1";

    let pass = inputs.item(1);
    pass.value = "";
}