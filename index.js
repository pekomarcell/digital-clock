const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minutes");
const secEl = document.getElementById("sec");
const ampmEL = document.getElementById("ampm");

function updateClock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";

    if(h > 12){
        h = h - 12;
        ampm = "PM";
        console.log(ampm)
    }

    hourEl.innerText = h;
    minuteEl.innerText = m;
    secEl.innerText = s;
    ampmEL.innerText = ampm;
    setTimeout(()=>{
        updateClock();        
    },1000)
}
updateClock();
