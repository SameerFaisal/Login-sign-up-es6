
let users=[];

(
    ()=>{
 let item=localStorage.getItem("users")
    if(item){
        users=JSON.parse(item)
    } 
    }
) ()


function signUp(e) {
    e.preventDefault();

    let firstname=document.querySelector("#fname").value
    let lastname=document.querySelector("#lname").value
    let gender=document.querySelector("#gender").value
    let email=document.querySelector("#email").value
    let password=document.querySelector("#password").value
    let confirmpassword=document.querySelector("#rp").value
 

    for(let i=0;i<users.length;i++){
if(users[i].email===email){
    document.querySelector("#error").innerHTML="Email already exists"
return;
}
    }

    if(password!==confirmpassword){
document.querySelector("#error").innerHTML="Password does not match"
return;
    }
    
    let newUser={
        firstname,
        lastname,
        gender,
        email,
        password,
        confirmpassword
    }

    users.push(newUser)
    
    let stringified=JSON.stringify(users)
    
    localStorage.setItem("users",stringified)
    document.querySelector("#result").innerHTML="Account created successfully"

setTimeout(() => {
    document.querySelector("#result").innerHTML=""
    document.querySelector("#error").innerHTML=""
}, 5000);
    e.target.reset();
}