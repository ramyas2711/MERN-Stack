const year=document.getElementById("year")
const days=document.getElementById("days")
const hours=document.getElementById("hours")
const minutes=document.getElementById("minutes")
const seconds=document.getElementById("seconds")
const loading=document.getElementById("loading")
const coutndown=document.getElementById("countdown")

let currentyear=new Date().getFullYear()
let nextyear = currentyear+1;

year.innerHTML = nextyear

let newYearTime = new Date(`January 01 ${nextyear} 00:00:00`)
function updateCountDown(){
    let currentTime = new Date()
    let time = newYearTime-currentTime
    console.log(time);
    let d= Math.floor(time/1000/60/60/24);
    let h= Math.floor(time/1000/60/60)%24;
    let m= Math.floor(time/1000/60)%60;
    let s= Math.floor(time/1000)%60;
    
    days.innerHTML = d < 10 ? "0"+d : d;
    hours.innerHTML = h < 10 ? "0"+h : h;
    minutes.innerHTML = m < 10 ? "0"+m : m;
    seconds.innerHTML = s < 10 ? "0"+s : s;
}
updateCountDown()
setInterval(updateCountDown,1000)
setTimeout(()=>{
    loading.remove()
    coutndown.style.display="flex"
},1000)