
const btn = document.querySelector(".btn") as HTMLButtonElement;

btn.addEventListener("click", (e:Event) =>{
    e.preventDefault();


    const uname = document.querySelector(".uname") as HTMLInputElement;
    const email = document.querySelector(".email") as HTMLInputElement;
    const password = document.querySelector(".password") as HTMLInputElement;
    const number = document.querySelector(".number") as HTMLInputElement;

    if ( !uname || !email || !password || !number) return;

    const unameTrim = uname.value.trim();
    const emailTrim = email.value.trim();
    const passwordTrim = password.value.trim();
    const numberTrim = number.value.trim();

    if(unameTrim === ""){
        alert("please enter uname");
        return;
    }

    if(emailTrim === ""){
         alert("please enter email");
        return;
    }

    if(passwordTrim === ""){
        alert("please enter password");
        return;
    }

    if(numberTrim === ""){
        alert("please enter number");
        return;
    }

    alert("form submitted")

    console.log(unameTrim, emailTrim , passwordTrim, numberTrim)

      
})