document.getElementById("btn").addEventListener("click",validation);
function validation(){
    let f_name= document.getElementById("fname").value;
    let l_name= document.getElementById("lname").value;
    const name_ptr=/^[a-zA-Z]+$/;
    const last_ptr=/^[a-zA-Z]+$/;
    // User First Name Validation
    if(f_name === ""){
        document.getElementById("error_mess_f1").innerHTML="Please Enter Your Name."
        document.getElementById("fname").focus();
    }
    else if(!f_name.match(name_ptr)){
        document.getElementById("error_mess_f1").innerHTML="Please Name Should be Charecters."
        document.getElementById("fname").focus();
    }
    else{
        document.getElementById("error_mess_f1").innerHTML=""
    }
    // User Lname Validation
    if(l_name === ""){
        document.getElementById("error_mess_last").innerHTML="Please Enter Your Name."
        document.getElementById("lname").focus();
    }
    else if(!l_name.match(name_ptr)){
        document.getElementById("error_mess_last").innerHTML="Please Name Should be Charecters."
        document.getElementById("lname").focus();
    }
    else{
        document.getElementById("error_mess_last").innerHTML=""
    }
    // Contact no Validation
    let cont_no=document.getElementById("tel").value;
    const cont_ptr=/^[0-9]$/;
    if(cont_no==""){
        document.getElementById("error_mess_cont").innerHTML="Please Enter Contact NO."
        document.getElementById("tel").focus();
    }
    else if(!cont_no.match(cont_ptr)){
        document.getElementById("error_mess_cont").innerHTML="Mobile No should be 10 digit only.";
        document.getElementById("tel").focus();
    }
    else{
        document.getElementById("error_mess_cont").innerHTML="";
        
    }
    // Email Validation 
    let email_id=document.getElementById("email").value;
    const email_ptr=	
    /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if(email_id==""){
        document.getElementById("error_mess_email").innerHTML="Please Enter Your Email id."
        document.getElementById("email").focus();
    }
    else if(!email_id.match(email_ptr)){
        document.getElementById("error_mess_email").innerHTML="Please Email should be Valid";
        document.getElementById("email").focus();
    }
    else{
        document.getElementById("error_mess_email").innerHTML="";
        
    }
    // Password Validation create a strong password
    let u_pass= document.getElementById("pass").value;
    let pass_ptr=/^([a-zA-Z0-9@*#]{8,15})$/;
    if(u_pass==""){
        document.getElementById("error_mess_pass").innerHTML="Please Make a Stong Password."
        document.getElementById("pass").focus();
    }
    else if(!u_pass.match(pass_ptr)){
        document.getElementById("error_mess_pass").innerHTML="Password should be must char, digits and special Symbol at least 8 characters and more than 15 characters like( #67jhgt@erd ).";
        document.getElementById("pass").focus();
    }
    else{
        document.getElementById("error_mess_pass").innerHTML="";
        
    }


    // Password matching expression. Match all alphanumeric character and predefined wild characters. 
    // Password must consists of at least 8 characters and not more than 15 characters.

    // Password should be must char, digits and special Symbol at least 8 characters and more than 15 characters.
}
