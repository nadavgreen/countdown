var endDate = new Date("01 Jun 2020").getTime();

var timer = setInterval(function() {

    let now = new Date().getTime();
    let t = endDate - now;
    
    if (t >= 0) {
    
        let days = Math.floor(t / (1000 * 60 * 60 * 24));
        let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        let mins = Math.floor((t / 1000 / 60) % 60);
        let secs = Math.floor((t / 1000) % 60);
    
        document.getElementById("root").innerHTML = days + "d " + hours + "h " + mins + "m " + secs + "s";

    } else {

        document.getElementById("root").innerHTML = "The countdown is over!";
    
    }
   
}, 1000);
