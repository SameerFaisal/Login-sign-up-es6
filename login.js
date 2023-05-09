
let users=[];

(
    ()=>{
 let item=localStorage.getItem("users")
    if(item){
        users=JSON.parse(item)
    } 
    }
) ()


function logIn(e) {
    e.preventDefault();

   
    let email=document.querySelector("#email").value
    let password=document.querySelector("#password").value
    
 let isFound=false

    for(let i=0;i<users.length;i++){
if(users[i].email===email){
    isFound=true
   if(users[i].password===password){
       document.querySelector("#result").innerHTML=`Welcome ${users[i].firstname} ${users[i].lastname}`

       break;
   }else{
    document.querySelector("#error").innerHTML="Password Incorrect"

   }
}
    }

    if(!isFound){
        document.querySelector("#error").innerHTML="User not found"
    }

   
    
   
  

setTimeout(() => {
    document.querySelector("#result").innerHTML=""
    document.querySelector("#error").innerHTML=""
}, 5000);
    e.target.reset();
}