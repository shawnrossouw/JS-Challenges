const secDail = document.querySelector('.seconds-dail');
const minDail = document.querySelector('.minute-dail');
const hrsDail = document.querySelector('.hour-dail');

const setDate = () => {
    let now = new Date().toLocaleString('en-US', {timeZone: "Africa/Johannesburg"});
    now = new Date(now);
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
    const secondsDegrees = ((seconds / 60) * 360);
    const minutesDegrees = (minutes / 60) * 360;
    const hoursDegrees = ((hours / 60) * 360);
    secDail.style.transform = `rotate(${secondsDegrees}deg)`;
    minDail.style.transform = `rotate(${minutesDegrees}deg)`;
    hrsDail.style.transform = `rotate(${hoursDegrees}deg)`;
}
setInterval(setDate, 1000);
Date.now();
