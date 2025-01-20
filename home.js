
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

let height=document.getElementById('height')
let weight=document.getElementById('weight')
let bmires=document.getElementById('bmires')
let bmisubmit=document.getElementById('bmisubmit')
let bmimsg=document.getElementById('bmimsg')

bmisubmit.addEventListener('click',()=>{

     let heightcal=(height.value/100)
     console.log(heightcal)

    let BMI=((weight.value)/(heightcal*heightcal))
    console.log(BMI)
      bmires.value=Math.floor(BMI)
    if(bmires.value<'18'){
        bmimsg.textContent="Below 18 Under weighted"
    }
    if((bmires.value>='18')&&(bmires.value<'25')){
        bmimsg.textContent="18-24 Normal weighted"
    }
    if((bmires.value>='25' )&&(bmires.value<='30')){
        bmimsg.textContent="25-30 Over weighted"
    }
      if(bmires.value>'30'){
        bmimsg.textContent="Above 30 Obesity"
        } 
    weight.value=""
    height.value=""
})

let bmibtn=document.getElementById('bmi')
let bmibox=document.getElementById('bmibox')

bmibtn.addEventListener('click',()=>{
if (bmibox.style.display === "block") {
    bmibox.style.display = "none";
  } else {
    bmibox.style.display = "block";
  }
})

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
   