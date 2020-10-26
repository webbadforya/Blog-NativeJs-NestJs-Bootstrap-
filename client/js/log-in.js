class Authorization{
static authorization(res){
   name = res;
mainForm.style.display = "none";
userName.innerText = `${name}`;
logMenu.style.display = "block"
}
}

function loginOut(ev){
   userName.innerText = '';
   name = null;
   mainForm.style.display = 'block';
   logMenu.style.display = 'none';
   document.querySelector("#inputPassword").value = "";
 }

 async function loginIn(ev){
   ev.preventDefault();
   let formData = new FormData(mainForm);
   let userData = CreateData.createUserObject(formData);
   console.log(userData);
   if (userData.name && userData.email && userData.password) {
     let res = await SendUserData.sendData(
       userData,
       'login',
       'POST',
     ).then(res => res.text());
     if (res) {
       Authorization.authorization(res);
     } else console.log('User is not found');
   } else console.log('invalid data');
 }