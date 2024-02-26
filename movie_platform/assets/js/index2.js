var nam= localStorage.getItem("name");
const Top = document.getElementById("to-top");

document.getElementById("hi").innerHTML= `hi ${nam}`;

num=document.getElementById("n");
num.addEventListener("mouseover", myFunction => 
{  var r=Math.round(Math.random()*255)
     g=Math.round(Math.random()*255)
var b=Math.round(Math.random()*255)
document.getElementById("n1").innerHTML=`${r}K`
document.getElementById("n2").innerHTML=`${g}K`
document.getElementById("n3").innerHTML=`${b}K`

});

Top.addEventListener("click", () => {
    document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
  });
  
  // Scroll to anchor ID using scrollTO event
  


  $(document).ready(()=>{
    $('#isLoading img').fadeOut(20 ,()=>{
       $('#isLoading').slideUp(20 ,()=>{
           $('#isLoading').remove()
           $('body').css('overflow','auto')
       })
    })
   })

   window.addEventListener('scroll',function(){
    let windowScroll =window.scrollY
    if(windowScroll > 100){
        $('.navbar').animate({'top':'0px' , 'width':'100%'})
       
    }
    else if (windowScroll < 100)
    {
        $('.navbar').animate({'top':'50px','width':'70%'})
    }
})
  

