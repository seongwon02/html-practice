function getTime(){
    const time = new Date();
    const hour = time.getHours();
    const minute = time.getMinutes();
    const second = time.getSeconds();
    clock.innerHTML = `${hour<10 ? `0${hour}` : hour}:${minute<10 ? `0${minute}` : minute}:${second<10 ? `0${second}` : second}`
}

function init(){
    setInterval(getTime, 1000);
}

var clock = document.querySelector(".clock");

init();