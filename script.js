const submitBtn = document.getElementById('submitBtn');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passError = document.getElementById('passError');

submitBtn.addEventListener('click',(e)=>{
   e.preventDefault();

   if(validateName() && validateEmail){
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
    // return true;
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