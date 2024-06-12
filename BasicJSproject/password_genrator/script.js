const upperSet = "QWERTYUIOPASDFGHJKLZXCVBNM"
const lowerSet = "qwertyuiopasdfghjklzxcvbnm"
const numberSet = "1234567890"
const specialSet = "!@~`#$%^&*()_+=-,/?"
const space = " "


const lInput = document.querySelector("#LowerCase");
const uInput = document.querySelector("#UpperCase");
const excludeDuplicate = document.querySelector("#Exclude");
const number = document.querySelector("#Numbers")
const sCharacter = document.querySelector("#Special-characters")
const spaces = document.querySelector("#Include-Spaces")
const showPassword = document.querySelector("#show-password");


// console.log(uInput.checked)
let randomdata = (data)=>{
    const len = Math.floor(Math.random()*data.length);
    return data[len]

}
let generatePassword = ( password = "") =>{
    if (
        !lInput.checked &&
        !uInput.checked &&
        !excludeDuplicate.checked &&
        !number.checked &&
        !sCharacter.checked &&
        !spaces.checked
    ) {
        showPassword.innerText = "Please select at least one setting.";
        return "";
    }
    if (lInput.checked) {
        password += randomdata(lowerSet);
    }
    if (uInput.checked) {
        password += randomdata(upperSet);
    }
    if (excludeDuplicate.checked) {
        password += randomdata(upperSet);
        password += randomdata(lowerSet);
    }
    if (number.checked) {
        password += randomdata(numberSet);
    }
    if (sCharacter.checked) {
        password += randomdata(specialSet);
    }
    if (spaces.checked) {
        password += " ";
    }
    if (password.length < 16) {
        return generatePassword(password);
    }
    return password.slice(0, 16);
}


const generate = document.querySelector("#submit-button").addEventListener('click',(e)=>{
    e.preventDefault();
    showPassword.innerText = generatePassword();
 }) 