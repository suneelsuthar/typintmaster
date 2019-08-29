let database = firebase.database().ref(`/`);
console.log(database)
var email = document.getElementById("inpt1");
var pass = document.getElementById("inpt2");
function signup(){
if(pass.value.length >=8){
var regex = /^[\w\-\.\+]+\@[a-zA-Z0-9\. \-]+\.[a-zA-z0-9]{2,4}$/;
   if (!(email.value.match(regex))) {
   alert("Please correct email address");
   }
  
database.child("loginData").on("value",myfunc=>{
    var data = myfunc.val();
    console.log(data)
    var database_email = data.email;
    var database_password = data.password;

    console.log("=> "+email.value);

    console.log("=> "+pass.value);
    var check = "false";
    for (var key in data){
    console.log(data[key].email);
    console.log(data[key].password);

    if(data[key].email === email.value && data[key].password === pass.value){
        document.getElementById("message").innerHTML="your email is already present";
        check ="true"
        
        }
    }
            console.log(check)
   
    if(check=== "false"){
var myObj = {
    email:email.value,
    password:pass.value,

}
console.log(myObj)
database.child("loginData").push(myObj)
  
    document.getElementById("message").style="color:green"
    document.getElementById("message").innerHTML="signup successful";
    window.location.href="wpn.html";
}
})


}

else{
  alert("enter correct passcode")  
}

}



function login(){
    // if(pass.value.length >=8){
    
    
    // var regex = /^[\w\-\.\+]+\@[a-zA-Z0-9\. \-]+\.[a-zA-z0-9]{2,4}$/;
    //    if (!(email.value.match(regex))) {
    //    alert("Please correct email address");
    // //    return false;
    //    }
    
      
       
    // var myObj = {
    //     email:email.value,
    //     password:pass.value,
    
    // }
    // database.child("loginData").push(myObj)
        
    
    
    
    
    database.child("loginData").on("child_added" , myfunc=>{
        var data = myfunc.val();
        // console.log(data);
        var database_email = data.email;
        // console.log(database_email);
        var database_password = data.password;
        // console.log(database_password);
        console.log(data.email);
        console.log("=> "+email.value);
    
        console.log(data.password);
        console.log("=> "+pass.value);
        var checking = "false";
        if(data.email === email.value && data.password === pass.value){
            alert("congratulation");
            checking ="true"
            window.location.href="wpn.html";
        }
        if(checking === "false"){
            "please enter your email password correct";
        }
       
          
    })
    
    
    }
    
    
    