<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Stopwatch</title>
    <style>
        #time {
            font-size: 2em;
            margin-bottom: 20px;
        }
        button {
            font-size: 1em;
            margin: 5px;
        }
    </style>
</head>
<body>

<div id="time">00:00:00</div>
<button onclick="start()" id="start">Start</button>
<button onclick="pause()" id="pause" disabled>Pause</button>
<button onclick="stop()" id="stop" disabled>Stop</button>

<script>
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    let timer;
    let isPaused = false;

    function updateTime() {
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }

        document.getElementById('time').innerText = 
            (hours < 10 ? '0' + hours : hours) + ':' + 
            (minutes < 10 ? '0' + minutes : minutes) + ':' + 
            (seconds < 10 ? '0' + seconds : seconds);
    }

    function start() {
        timer = setInterval(updateTime, 1000);
        document.getElementById('start').disabled = true;
        document.getElementById('pause').disabled = false;
        document.getElementById('stop').disabled = false;
    }

    function pause() {
        if (isPaused) {
            timer = setInterval(updateTime, 1000);
            document.getElementById('pause').innerText = 'Pause';
        } else {
            clearInterval(timer);
            document.getElementById('pause').innerText = 'Continue';
        }
        isPaused = !isPaused;
    }

    function stop() {
        clearInterval(timer);
        hours = 0;
        minutes = 0;
        seconds = 0;
        document.getElementById('time').innerText = '00:00:00';
        document.getElementById('start').disabled = false;
        document.getElementById('pause').disabled = true;
        document.getElementById('stop').disabled = true;
        document.getElementById('pause').innerText = 'Pause';
        isPaused = false;
    }
</script>

</body>
</html>