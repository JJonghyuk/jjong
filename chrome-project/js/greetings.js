const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form .login-input");
const greeting = document.querySelector("#greeting");
const logoutBtnWrap = document.querySelector(".btn-wrap.logout");
const logoutBtn = logoutBtnWrap.querySelector(".logout-btn");

const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username"

function onLoginSubmit(event) { 
    event.preventDefault();

    loginForm.classList.add(HIDDEN_CLASSNAME);
    logoutBtnWrap.classList.remove(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    loginInput.value = "";
    localStorage.setItem(USERNAME_KEY, username)
    paintGreetings(username);
}

function paintGreetings(username){
    greeting.innerText = `Hello, ${username}!`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

function onLogout(event) {
    event.preventDefault();
    
    localStorage.removeItem(USERNAME_KEY);
    greeting.classList.add(HIDDEN_CLASSNAME);
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    logoutBtnWrap.classList.add(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY)

if(savedUsername === null){
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
}else{
    // show the greeting
    paintGreetings(savedUsername);
    logoutBtnWrap.classList.remove(HIDDEN_CLASSNAME);
}

const eventHandler = {
    loginSubmit : () => {
        loginForm.addEventListener("submit", onLoginSubmit);
    },
    logoutClick : () => {
        logoutBtn.addEventListener("click",onLogout);
    },
}

eventHandler.loginSubmit();
eventHandler.logoutClick();

