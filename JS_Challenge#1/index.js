
var cinemaMovies = 0;
var streamMovies = 0;



function removeCinemaMovie() {
    let movies = document.getElementById("cinema_num");

    if(movies.innerHTML > 0){
    movies.innerHTML -=1;
    cinemaMovies --;
    moviesLeft();
    calculateCinema();

    }    
    if(movies.innerHTML == 0) {
        document.getElementById("cinema_minus").disabled = true;
    }
}

function addCinemaMovie() {
    let movies = document.getElementById("cinema_num");
    if(movies.innerHTML == 0) {
        document.getElementById("cinema_minus").disabled = false;
    }
    movies.innerHTML = Number(movies.innerHTML) + 1;
    cinemaMovies++;
    moviesLeft();
    calculateCinema();
}

function calculateCinema(){
    let movies = Number(document.getElementById("cinema_num").innerHTML);
    let price = Number(document.getElementById("cinema_cost").value);
    let total = document.getElementById("cinema_total");
    let pricePerMovie = document.getElementById("cinema_per_movie");
    pricePerMovie.innerHTML = price;
    total.innerHTML = `${movies * price}`;
}


function removeStreamingMovie( num_id , minus_id , cost_id, total_id) {
    let movies = document.getElementById(num_id);

    if(movies.innerHTML > 0){
    movies.innerHTML -=1;
    streamMovies--;
    moviesLeft();
    calculateService(num_id,cost_id,total_id);
    }    
    if(movies.innerHTML == 0) {
        document.getElementById(minus_id).disabled = true;
    }
}

function addStreamingMovie( num_id , minus_id, cost_id, total_id) {
    let movies = document.getElementById(num_id);
    if (streamMovies < cinemaMovies) {
        if(movies.innerHTML == 0) {
            document.getElementById(minus_id).disabled = false;
        }
      movies.innerHTML = Number(movies.innerHTML) + 1;
      streamMovies++; 
      moviesLeft(); 
    }
    calculateService(num_id,cost_id,total_id);
}

function calculateService(num_id, cost_id, total_id)
{
    let movies = Number(document.getElementById(num_id).innerHTML);
    let price = Number(document.getElementById(cost_id).value);
    let total = document.getElementById(total_id);
    (movies == 0 || price == 0) ? total.innerHTML = `0`: total.innerHTML = `${(price / movies).toFixed(2)}`;
    streamTotal();
}

function moviesLeft(){
    let left = document.getElementById("stream_left");
    left.innerHTML = `Movies Left: ${cinemaMovies - streamMovies}`;
}

function streamTotal(){
    let streamCost = document.querySelectorAll('*[id^="stream_cost"]');
    let streamPerMovie = document.querySelectorAll('*[id^="stream_total"]');
    let moviecost = 0;
    let cost = 0;
    let activeService = 0;
    let streamPerMovieText= document.getElementById('stream_per_movie');
    let total = document.getElementById('stream_final');
    
    streamCost.forEach(element => {
         cost +=Number(element.value);
      });

      streamPerMovie.forEach(element => {
        moviecost +=Number(element.innerHTML);
        if(Number(element.innerHTML) > 0){
            activeService+=1;
        }
     });
    
    moviecost = moviecost / activeService;
    total.innerHTML = cost
     streamPerMovieText.innerHTML = moviecost;
}
