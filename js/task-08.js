const loginForm = document.querySelector('.login-form');

loginForm.addEventListener("submit", handlerSubmitForm);

function handlerSubmitForm(evt) {
    evt.preventDefault();
    const { email, password } = evt.currentTarget.elements;
    const emailInp = email.value;
    const passwordInp = password.value;
    if (emailInp === "" || passwordInp === "") {
        alert("Всі поля повинні бути заповнені!")
        return
    }
    const obj = {
        email: emailInp,
        password: passwordInp
    }
    console.log(obj);
    loginForm.reset();
}
