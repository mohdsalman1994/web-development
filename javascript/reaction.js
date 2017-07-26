var startTime = new Date().getTime();

var endTime;

var fastestTime = 0;

var timer;


function getRandomColor() {

    var letters = '0123456789ABCDEF'.split('');

    var color = '#';

    for (var i = 0; i < 6; i++) {

        color += letters[Math.floor(Math.random() * 16)];

    }

    return color;

}



function makeShapeAppear() {

    var top = (Math.random() * 300);
    var left = (Math.random() * 400);
    var width = (Math.random() * 300) + 100;
    if (Math.random() > 0.5) {
        document.getElementById("shape").style.borderRadius = "50%";
    } else {
        document.getElementById("shape").style.borderRadius = "0";
    }

    document.getElementById("shape").style.backgroundColor = getRandomColor();
    document.getElementById("shape").style.width = width + "px";
    document.getElementById("shape").style.height = width + "px";
    document.getElementById("shape").style.top = top + "px";
    document.getElementById("shape").style.left = left + "px";
    document.getElementById("shape").style.display = "block";

    startTime = new Date().getTime();
}


function appearAfterDelay() {
    timer = setTimeout(makeShapeAppear, Math.random() * 2000);

}

function start() {
    console.log("Inside start");
    appearAfterDelay();

}


function stop() {
    console.log("Inside stop");
    clearTimeout(timer);
    document.getElementById("shape").style.display = "none";
}



document.getElementById("shape").onclick = function () {

    var endTime = new Date().getTime();

    timeTaken = (endTime - startTime) / 1000;


    if (fastestTime === 0 | timeTaken < fastestTime) {
        fastestTime = timeTaken;
        document.getElementById("fastest-time").innerHTML = fastestTime + "s";
    }


    document.getElementById("shape").style.display = "none";

    document.getElementById("time-taken").innerHTML = timeTaken + "s";

    appearAfterDelay();

}
document.getElementById("start").onclick = start;
document.getElementById("stop").onclick = stop;
