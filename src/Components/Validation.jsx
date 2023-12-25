const Validation = (name, email, password) => {

    const emailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
    const passwordValid = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password);
    const namevalid = /^[a-zA-Z]+(?: [a-zA-Z]+)*$/.test(name);

    if(!emailValid) return "Enter a valid email";
    if(!passwordValid) return "Enter a valid password";
    if(!namevalid) return "Enter a valid name";

    return null;
}

export default Validation
