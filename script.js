
const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() +10);

  function updateCountdown() {
    const currentDate = new Date();
    const difference = targetDate - currentDate;
    if (difference<=0) {
        clearInterval(timerinterval);
        document.getElementById('countDown').innerHTML = 'Countdown Over!';
    } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(difference % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
        const minutes = Math.floor(difference % (1000 * 60 * 60) / (1000 * 60));
        const seconds = Math.floor(difference % (1000 * 60 ) / 1000);


        document.getElementById('days').innerHTML = days;
        document.getElementById('hours').innerHTML = hours;
        document.getElementById('minutes').innerHTML = minutes;
        document.getElementById('seconds').innerHTML = seconds;
    }
  }

  const timerInterval = setInterval(updateCountdown, 1000);

  const endDate = targetDate.toLocaleString('en-US', {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'});
     document.getElementById('giveaway.message').innerHTML = "Giveaway Ends At 11:59:59 on $(endDate)";















































/*
// Set the date we're counting down to
const countDownDate = new Date().getTime() + 10 * 24 * 60 * 60 * 1000; // 10 days in milliseconds

// Update the countdown every second
const timerinterval = setInterval(updateCountdown, 1000);
(function() {

    // Get the current date and time
    const now = new Date().getTime();

    // Calculate the distance between now and the countdown date
    const distance = countDownDate - now;

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the countdown timer
    document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    // If the countdown is over, display a message
    if (distance <=0) {
        clearInterval(timerinterval);
        document.getElementById("countdown").innerHTML = "GIVEAWAY HAS EXPIRED";

        constendDate =countDownDate.toLocaleString('en-US',{weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'});
        document.getElementById("giveaway message").innerHTML = "Giveaway stops on $(countDownDate) at 11:59pm";
    }
}, 1000);*/