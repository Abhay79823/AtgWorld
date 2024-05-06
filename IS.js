window.onload =function(){
    var createAccountBtn = document.getElementById("createaccountbtn");
    createAccountBtn.onclick =function(){
        
        
        var signUp =document.getElementById("signup");
        var signIn =document.getElementById("signin");

        signUp.style.display = "flex";

        var signInBtn2 = document.getElementById("signinbtn2");
        signInBtn2.onclick =function(){

           signUp.style.display = "none";
           signIn.style.display = "flex";

        }

        var signUpBtn2 = document.getElementById("signupbtn2");
        signUpBtn2.onclick =function(){

           signIn.style.display = "none";
           signUp.style.display = "flex";

        }

        var removeBtn1 =document.getElementById("removebtn1");
        removeBtn1.onclick = function(){
           signUp.style.display = "none";
        }

        var removeBtn2 =document.getElementById("removebtn2");
        removeBtn2.onclick = function(){
            signIn.style.display = "none";
        }

    }

        var joinBtn =document.getElementById("joinbtn");
        var leaveBtn =document.getElementById("leavebtn");
        joinBtn.onclick =function(){

            joinBtn.style.display ="none";
            leaveBtn.style.display ="flex";
        }
        leaveBtn.onclick =function(){

            leaveBtn.style.display ="none";
            joinBtn.style.display ="flex";
        }


     //For mobile desktop  
        var mbsignBtn =document.getElementById("mbsignbtn");
        mbsignBtn.onclick =function(){
            var signUp =document.getElementById("signup");
            var signIn =document.getElementById("signin");
    
            signUp.style.display = "flex";

            var signInBtn1 = document.getElementById("signinbtn1");
            signInBtn1.onclick =function(){

           signUp.style.display = "none";
           signIn.style.display = "flex";

        }
           
        var signUpBtn1 = document.getElementById("signupbtn1");
        signUpBtn1.onclick =function(){

           signIn.style.display = "none";
           signUp.style.display = "flex";

        }

        var removeBtn1 =document.getElementById("removebtn1");
        removeBtn1.onclick = function(){
           signUp.style.display = "none";
        }

        var removeBtn2 =document.getElementById("removebtn2");
        removeBtn2.onclick = function(){
            signIn.style.display = "none";
        }

        }
     
     var joinBtn1 =document.getElementById("joinbtn1");
        var leaveBtn1 =document.getElementById("leavebtn1");
        joinBtn1.onclick =function(){

            joinBtn1.style.display ="none";
            leaveBtn1.style.display ="flex";
        }
        leaveBtn1.onclick =function(){

            leaveBtn1.style.display ="none";
            joinBtn1.style.display ="flex";
        }

}