let Api;

async function getApi(){
    let res= await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=dcd202dca0ffeedf83c0a91124cd4ace`)
    

let finalRes = await res.json()
console.log(finalRes)
Api = finalRes.results
displayMovies()
}
getApi()



function displayMovies(){
    var container= ``
    for( let i=0 ; i<Api.length; i++){
        container+= `
        <div class="col-md-3 h-100">
        <div class="movie position-relative rounded w-100 h-100 ">
            <div class="rate position-absolute end-0 top-0">
                <span>${Api[i].vote_average}</span>
            </div>
            <img class=" card-img-top" src="https://image.tmdb.org/t/p/w500/${Api[i].poster_path}" alt="">
        </div>
    </div>`
    }
    document.getElementById('showData').innerHTML=container
    
}
$(document).ready(()=>{
    $('#isLoading img').fadeOut(1500 ,()=>{
       $('#isLoading').slideUp(1500 ,()=>{
           $('#isLoading').remove()
           $('body').css('overflow','auto')
       })
    })
   })

// -----------------------
$(document).ready(()=> $('body').css('overflow' , 'auto'))



