import { users } from '../database/weekendQuiz.js';

const loginForm = document.querySelector("#form");
const username = loginForm.querySelector("#username");
const password = loginForm.querySelector("#password");

loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    
    const emailInputValue = username.value;
    const passwordInputValue = password.value;
    
    const userFound = users.find((user) => user.email === emailInputValue);
    
    if (!userFound) {
        console.log("Fault in Email Input");
        alert("Email or Password is Incorrect");
        return;
    }
    
    if (userFound.password !== passwordInputValue) {
        console.log("Fault in Password Input");
        alert("Email or Password is Incorrect");
        return;
    }

    window.location.replace('dashboard.html');
    localStorage.setItem('username', userFound.email);
});