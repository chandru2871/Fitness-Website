let loginname=document.getElementById('loginname')
let form1=document.getElementById('form1')
let logbtn=document.getElementById('logbtm')
let loginemail=document.getElementById('loginemail')
let loginpwd=document.getElementById('loginpwd')
let login=document.getElementById('login')

 form1.addEventListener('submit',(e)=>{
  
  let name= localStorage.getItem("username");
  let pwd= localStorage.getItem("userpwd");
  let mail= localStorage.getItem("usermail");
   if((loginname.value==name) && (loginemail.value==mail) && (loginpwd.value==pwd)){
    alert('Login success')
    login.style.display = "none";
   }
   else{
    alert('Please check crendentails')
    e.preventDefault();
   }
  })
