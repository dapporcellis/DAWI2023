 async function valido(){

var password = document.getElementById("isenha") ;
var regex = /^(?=(?:.*?[A-Z]){1})(?=(?:.*?[0-9]){1})(?=(?:.*?[!@#$%*()_+^&}{:;?.]){1})(?!.*\s)[0-9a-zA-Z!@#$%;*(){}_+^&]*$/; 

if(password.length < 8)
{
    alert("A senha deve conter no minímo 8 digitos!");
    password.focus();
    return false;
}
else if(!regex.exec(password))
{
    alert("A senha deve conter no mínimo 1 caracter em maiúsculo, 1 número e 1 caracter especial!");
    password.focus();
    return false;
}
return true;
 }

 module.exports = {valido};