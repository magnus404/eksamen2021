     $(window).scroll(function(){
	$('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
});
       


//Countdown - https://www.w3schools.com/howto/howto_js_countdown.asp

// Set the date we're counting down to
var countDownDate = new Date("Aug 15, 2021 18:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);





//vandtemperatur API - http://api.vandudsigten.dk/doc/beaches


const api_url = 'http://api.vandudsigten.dk/beaches';

async function getWaterTemp() {

    const response = await fetch(api_url);
    const data = await response.json();
    console.log(data);


    console.log(data[32]); //data sæt for Havnebadet Aarhus
    console.log(data[32].data[0].water_temperature); //Vandtemeratur for Havnebadet Aarhus i dag

    const voresData = data[32].data[0].water_temperature;
    document.getElementById('vandTemp').innerHTML = voresData;
}


getWaterTemp();
