class SendUserData{
   static async sendData(body, url, method) {
    return await fetch(`http://localhost:3000/users/${url}`, {
      method: method,
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(body),
    })
  }
 }

 class UserNameValidation {
   static criteria = 'name';
   static validation(inputValue) {
     return inputValue.length > 4 && inputValue.length < 15 && isNaN(inputValue) && !inputValue.includes(" ")
   }
 }
 class PasswordValidation {
   static criteria = 'password';
   static validation(inputValue) {
     return isNaN(inputValue) && inputValue.length > 4 && inputValue.length < 16 && !inputValue.includes(" ")
   }
 }
 class EmailValidation {
   static criteria = 'email';
   static validation(inputValue) {
      const emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
     return isNaN(inputValue) 
     && inputValue.length > 4 
     && inputValue.length < 25
     && !inputValue.includes(" ")
     && emailReg.test(inputValue)
   }
}

const validationArray = [UserNameValidation, PasswordValidation, EmailValidation]

class CreateData{
  static createUserObject(formData){
     let userData = {}
     for(const data of formData){
      for(const item of validationArray){
        if(item.criteria === data[0] && item.validation(data[1])) {
           userData[data[0].toLowerCase()] = data[1].toLowerCase();
        }
      }
  }
  return userData
  }
}

async function registration(ev){
  ev.preventDefault();
  let formData = new FormData(mainForm);
  let userData = CreateData.createUserObject(formData);
  console.log(userData);
  if (userData.name && userData.email && userData.password) {
    let res = await SendUserData.sendData(
      userData,
      'signup',
      'PUT',
    ).then(res => res.text());
    if (res) console.log(res);
    else console.log('user is already registered');
  } else console.log('invalid data');
}
