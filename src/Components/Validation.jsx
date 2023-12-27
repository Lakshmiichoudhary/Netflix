export const Validation = (email, password) => {
    const emailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const passwordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    
    if (!emailValid) return "Enter a valid email";
    if (!passwordValid) return "Enter a valid password";
    
    return null;
}
