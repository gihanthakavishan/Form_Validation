const submitBtn = document.getElementById('submitBtn');
const nameError = document.getElementById('nameError');

submitBtn.addEventListener('click',(e)=>{
   e.preventDefault();

   if(validateName()){
      alert("Form submitted Successfully");
   }
});

function validateName(){
    let name = document.getElementById('name').value;

    if(name.length == 0){
         nameError.innerHTML = "Name is required"
         return false;
    }
if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
    nameError.innerHTML = "Write full Name";
    return false;
}
    nameError.innerHTML = "";
    return true;
}