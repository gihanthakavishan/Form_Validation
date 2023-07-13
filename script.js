const submitBtn = document.getElementById('submitBtn');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passError = document.getElementById('passError');

submitBtn.addEventListener('click',(e)=>{
   e.preventDefault();

   if( validateName() && validateEmail()&& validatePassword()){
      alert("Form submitted Successfully");
   }
});

function validateName(){
    let name = document.getElementById('name').value;

    if(name.length == 0){
         nameError.innerHTML = "Name is required"
         nameError.previousElementSibling.classList.add('fa-xmark');
         return false;
    }
if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
    nameError.innerHTML = "Write full Name";
    nameError.previousElementSibling.classList.add('fa-xmark');
    return false;
}
    nameError.innerHTML = "";
    nameError.previousElementSibling.classList.add('fa-check');
     return true;
}

function validateEmail(){
    let email = document.getElementById('email').value;

    if(email.length == 0){
         emailError.innerHTML = "Email is required"
         emailError.previousElementSibling.classList.add('fa-xmark');
         return false;
    }
if(!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
    emailError.innerHTML = "Provide valid Email";
    emailError.previousElementSibling.classList.add('fa-xmark');
    return false;
}
    emailError.innerHTML = "";
    emailError.previousElementSibling.classList.add('fa-check');
    return true;
}

function validatePassword(){
   let password = document.getElementById('password').value;

    if(password.length == 0){
        
         passError.innerHTML = "Enter a Strong Password"
         passError.previousElementSibling.classList.add('fa-xmark');
         return false;
    }
if(!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,24}$/)){
    passError.innerHTML = "Password should conatian 1 Uppercase, 1 Lowercase,1 Digit & Alphabet";
    passError.previousElementSibling.classList.add('fa-xmark');
    return false;
}
    passError.innerHTML = "";
    passError.previousElementSibling.classList.add('fa-check');
    return true;
}