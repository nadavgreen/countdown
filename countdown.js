var audible = new Date("01 Jun 2020");
var meeting = new Date("20 Apr 2020");
var lastDay = new Date("12 May 2020");

var timer = setInterval(function() {

    let now = new Date();
    let a = audible - now;
    let m = meeting - now;
    let l = lastDay - now;
    
    if (m >= 0) {
    
        let mDays = Math.floor(m / (1000 * 60 * 60 * 24));
        let mHours = Math.floor((m / (1000 * 60 * 60)) % 24);
        let mMins = Math.floor((m / 1000 / 60) % 60);
        let mSecs = Math.floor((m / 1000) % 60);
    
        document.getElementById("root").innerHTML = "Meeting: " + mDays + "d " + mHours + "h " + mMins + "m " + mSecs + "s ";
        
    }
    
    if (l >= 0) {

        let lDays = Math.floor(l / (1000 * 60 * 60 * 24));
        let lHours = Math.floor((l / (1000 * 60 * 60)) % 24);
        let lMins = Math.floor((l / 1000 / 60) % 60);
        let lSecs = Math.floor((l / 1000) % 60);
    
        document.getElementById("root").innerHTML += "Last Day: " + lDays + "d " + lHours + "h " + lMins + "m " + lSecs + "s ";
        
    }
    
    if (a >= 0) {
    
        let aDays = Math.floor(a / (1000 * 60 * 60 * 24));
        let aHours = Math.floor((a / (1000 * 60 * 60)) % 24);
        let aMins = Math.floor((a / 1000 / 60) % 60);
        let aSecs = Math.floor((a / 1000) % 60);

        document.getElementById("root").innerHTML += "Audible: " + aDays + "d " + aHours + "h " + aMins + "m " + aSecs + "s";
        
    } else {

        document.getElementById("root").innerHTML = "The countdown is over!";
    
    }
   
}, 1000);
