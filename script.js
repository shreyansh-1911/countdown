let countDownDate = new Date("Nov 19 2023 00:00:00").getTime();
let x = setInterval(() => {

    let now = new Date().getTime();
    let distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.querySelector(".days h1").innerHTML = days;
    document.querySelector(".hrs h1").innerHTML = hours;
    document.querySelector(".min h1").innerHTML = minutes;
    document.querySelector(".sec h1").innerHTML = seconds;

}, 1000);

let v = new Date();
console.log(v)