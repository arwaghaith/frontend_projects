var log=document.getElementById('log')
var namm=document.getElementById('exampleInputtext1')
var maill=document.getElementById('exampleInputEmail1')
var passs=document.getElementById('exampleInputPassword1')
var nam="";
    var pass="";
    var mail="";

 
log.addEventListener('click',function(){
    nam=namm.value;
    pass=passs.value;
    mail=maill.value;
    


    localStorage.setItem("name", nam);
    

    if(validtionName()==true && validtionEmail()==true && validtionPassword()==true)
    {
        document.getElementById("log").href = "index2.html";


        localStorage.setItem("name", nam);
    }

    
        
    // while(validtionName()==false && validtionEmail()==false && validtionPassword()==false)
    // {var nam=document.getElementById('exampleInputtext1')
    // var mail=document.getElementById('exampleInputEmail1')
    // var pass=document.getElementById('exampleInputPassword1')

    // }


});




function validtionName(){
    var regx =   /^[a-zA-Z ]{2,30}$/


    if(regx.test(nam)==true){
        return true
    }
    else{
        var x=document.getElementById('error');
        x.classList.remove("d-none");
        x.innerHTML=`<div class="alert alert-danger">Name Invalid...!</div>`
        return false

    }
    console.log('name',nam)
}

function validtionEmail(){
    var regx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    // /.*\S.*/

    if(regx.test(mail)==true){
        return true
    }
    else{
        var x=document.getElementById('error')
        x.classList.remove("d-none");
        x.innerHTML =`<div class="alert alert-danger">Mail Invalid...!</div>`
        return false
    }
    console.log('mail',mail)
}
function validtionPassword(){
    var regx = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/

    if(regx.test(pass)==true){
        return true
    }
    else{
        var x=document.getElementById('error')
        x.classList.remove("d-none");
        x.innerHTML=`<div class="alert alert-danger">password Invalid...!</div>`
        return false
    }
    console.log('pass',pass)
}







