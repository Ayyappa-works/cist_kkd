function Apply(){
    //name validation
    let name=document.getElementById("Fullname").value;
    const nameexp=/^[a-z]+$/;
    namestatus = false;
    if(name ===""){
        document.getElementById("emptyname").innerHTML="name is mandatory";
    }
    else{
        if(name.match(nameexp)){
            namestatus = true;
        }
        else{
            document.getElementById("empryname").innerHTML="only characters";
        }
    }

    //number validation
    let number=document.getElementById("number").value;
    const numberexp=/^[0-9]+$/;
    numberstatus= false;

    if(number ===""){
        document.getElementById("emptynumber").innerHTML="number is mandatory";
    }
    else{
        if(number.match(numberexp)){
            numberstatus=true;
        }
        else{
            document.getElementById("emptynumber").innerHTML="only numbers";
        }
    }

    //email validation
    let email = document.getElementById("emailid").value;
    const emailexp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let emailstatus=false;

    if(email === ""){
        document.getElementById("emptyemail").innerHTML="email is mandatory";
    }
    else{
        if(email.match(emailexp)){
            emailstatus = true;
        }
        else{
            document.getElementById("emptyemail").innerHTML="email format is not correct";
        }
    }

    //valid or not city
    let city = document.getElementById("city").value;
    citystatus = false;
    if(city===""){
        document.getElementById("emptycity").innerHTML="city name is mandatory";
    }
    else{
        if(city.match(nameexp)){
            citystatus = true;
            }
            else{
                document.getElementById("emptycity").innerHTML="our delivery facility is not available to your loction"
            }
        }

    //state
    let state = document.getElementById("State").value;
    const statestatus = false;
    if(state === ""){
        document.getElementById("emptystate").innerHTML="state name is mandatory";
    }
    else{
        if(state.match(nameexp)){ 
            statestatus = true;
        }
    }

    //Course
    let course = document.getElementById("Course").value;
    const coursestatus = false;
    if(course === ""){
        document.getElementById("emptycourse").innerHTML="course name is mandatory";
    }
    else{
        if(course.match(nameexp)){ 
            coursestatus = true;
        }
    }

    //branch
    let branch = document.getElementById("Branch").value;
    const branchstatusstatus = false;
    if(branch === ""){
        document.getElementById("emptybranch").innerHTML="branch name is mandatory";
    }
    else{
        if(branch.match(nameexp)){ 
            branchstatus = true;
        }
    }

    // return
    if(namestatus === true && numberstatus === true && emailstatus === true && citystatus === true && statestatus === true && coursestatus === true && branchstatus === true){
        alert("Thank you for submitting your application to CIST College. We appreciate your interest in joining our vibrant and diverse community.");
    }
    else {
        return false;
    }
    
}

function submit(){

    //fullname
    let name=document.getElementById("Fullname").value;
    const nameexp=/^[a-z]+$/;
    namestatus = false;
    if(name ===""){
        document.getElementById("emptyname").innerHTML="name is mandatory";
    }
    else{
        if(name.match(nameexp)){
            namestatus = true;
        }
        else{
            document.getElementById("empryname").innerHTML="only characters";
        }
    }

    let email = document.getElementById("emailid").value;
    const emailexp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let emailstatus=false;

    if(email === ""){
        document.getElementById("emptyemail").innerHTML="email is mandatory";
    }
    else{
        if(email.match(emailexp)){
            emailstatus = true;
        }
        else{
            document.getElementById("emptyemail").innerHTML="email format is not correct";
        }
    }

    if(name ===""){
        document.getElementById("emptyname").innerHTML="name is mandatory";
    }
    else{
        if(name.match(nameexp)){
            namestatus = true;
        }
        else{
            document.getElementById("empryname").innerHTML="only characters";
        }
    }
}