let signupname=document.getElementById('signupname')
let signupemail=document.getElementById('signupemail')
let signuppwd=document.getElementById('signuppwd')
let signupconfpwd=document.getElementById('signupconfpwd')
let form2=document.getElementById('form2')
let signbtn=document.getElementById('signupbtn')

  form2.addEventListener('submit',(e)=>{

    localStorage.setItem('username',signupname.value);
    localStorage.setItem('usermail',signupemail.value);
    localStorage.setItem('userpwd',signuppwd.value);

    if(signupconfpwd.value==signuppwd.value){
      alert('Success')
    }
    else{
        alert('Please Enter Correct Password')
       e.preventDefault();
      }
  })

  