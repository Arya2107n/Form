"use strict";
const btn = document.querySelector(".btn");
btn.addEventListener("click", (e) => {
    e.preventDefault();
    const uname = document.querySelector(".uname");
    const email = document.querySelector(".email");
    const password = document.querySelector(".password");
    const number = document.querySelector(".number");
    if (!uname || !email || !password || !number)
        return;
    const unameTrim = uname.value.trim();
    const emailTrim = email.value.trim();
    const passwordTrim = password.value.trim();
    const numberTrim = number.value.trim();
    if (unameTrim === "") {
        alert("please enter uname");
        return;
    }
    if (emailTrim === "") {
        alert("please enter email");
        return;
    }
    if (passwordTrim === "") {
        alert("please enter password");
        return;
    }
    if (numberTrim === "") {
        alert("please enter number");
        return;
    }
    alert("form submitted");
    console.log(unameTrim, emailTrim, passwordTrim, numberTrim);
});
