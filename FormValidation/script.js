let user=document.getElementById("user");
let pass=document.getElementById("pass");


function checkForm(){
        if(user=="" || pass==""){
            document.getElementById("error").innerHTML="username and password cannot be empty";
            console.log("arrived1")
            return false;
        }
        
        else if(user.value.length<3 || pass.value.length<6){
            document.getElementById("error").innerHTML="username should be atleast 3 character and password must be atlest 6 chatacter long";
            console.log("arrived2")
            return false;
        }else{
            document.getElementById("error").innerHTML="";
            console.log("arrived3")
            return true;
        }
        
        
        
        


}