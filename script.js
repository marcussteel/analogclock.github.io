const clock = document.querySelector(".clock");
const yelkovan = document.querySelector(".yelkovan");
const akrep = document.querySelector(".akrep");
const saniye = document.querySelector(".saniye");



function setTime (){
let date = new Date();
console.log(date);
let dayOrNight = "AM";
let hour = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();

if(hour == 0){
    hour = 12;
}

if (hour>12){
    hour = hour-12;
    dayOrNight = "PM";
};

// hour = (hour<10) ? "0"+hour : hour;
// min = (min<10) ? "0"+min : min;
// sec = (sec<10) ? "0"+sec : sec;

// console.log(hour, " : ", min, " : ", sec, " ", dayOrNight);

setTimeout(setTime,1000);

const yelkovanDerece = min/60*360 +90;
const akrepDerece = hour/12*360 +90;
const saniyeDerece = sec/60*360 +90;

yelkovan.style.transform = `rotate(${yelkovanDerece}deg)`
saniye.style.transform = `rotate(${saniyeDerece}deg)`
akrep.style.transform = `rotate(${akrepDerece}deg)`


let theTime= hour + " : " + min + " : " + sec + " " + dayOrNight;
// clock.innerHTML = theTime
}
setTime();

