// Indsæt dato, som vi tæller ned til
var countDownDate = new Date("Aug 15, 2021 18:00:00").getTime();

// Vores countdown skal opdateres hvert sekund
var x = setInterval(function() {
    

  // Få dagens dato og tidspunkt
  var now = new Date().getTime();
    
  // Find tiden mellem nu og countdown datoen
  var distance = countDownDate - now;
    
  // Tidsudregninger for dage, timer, minutter og sekunder
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Vis resultatet af variablerne med fx id="Countdown"
  document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // Hvis vores countdown er ovre, skriv en tekst, fx ''Begivenheden er slut''
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "Begivenheden er slut";
  }
}, 1000);
