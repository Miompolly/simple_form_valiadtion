let myForm=document.forms.myForm;
let message=document.getElementById("message");
let submit=document.getElementById("submit");
myForm.onsubmit=function(){
    if(myForm.fname.value==""||myForm.lname.value==""||myForm.email.value==""){
        message.innerHTML="Please all fields";
    }else{
        message.innerHTML="Account created"; 
    }
}