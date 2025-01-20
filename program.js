let homenav=document.getElementById('homenav')
function changeBg(){
    
    let scrollvalue= window.scrollY;
    if(scrollvalue<120){
        homenav.classList.remove('navbg');
    }
    else{
        homenav.classList.add('navbg')
    }
}
window.addEventListener('scroll', changeBg)

let hamberger=document.getElementById('hamberger')
let ham=document.getElementById('hamsub')
let hambergercancel=document.getElementById('hambergercancel')

hamberger.addEventListener('click',()=>{

        ham.style.display = "block";
    
})
hambergercancel.addEventListener('click',()=>{

    
  ham.style.display = "none";

})

function selectedvalue() {

    let option=document.getElementById("filter")
    let none=document.getElementById("none")
    let begin=document.getElementById("begin")
    let inter=document.getElementById("inter")
    let advan=document.getElementById("advan")
    
    console.log(option.value)
    if (option.value=== "Beginner") {
        none.style.display = "none";
        begin.style.display = "block";
        inter.style.display = "none";
        advan.style.display = "none"; 
      }
      else if (option.value=== "Intermediate") {
        none.style.display = "none";
        begin.style.display = "none";
        inter.style.display = "block";
        advan.style.display = "none";
      }
      else if (option.value=== "Advanced") {
        none.style.display = "none";
        begin.style.display = "none";
        inter.style.display = "none";
        advan.style.display = "block";
      }
       else {
        none.style.display = "block";
        begin.style.display = "none";
        inter.style.display = "none";
        advan.style.display = "none";
      }
    
}
selectedvalue()

let login=document.getElementById('login')

let name= localStorage.getItem("username");
  let pwd= localStorage.getItem("userpwd");
  let mail= localStorage.getItem("usermail");
   if((name) && (mail) && (pwd)){
   
    login.style.display = "none";
   }

   let logout=document.getElementById('profsub')
   logout.addEventListener('click',()=>{

    
  
    localStorage.clear(); 
  
  })