const xhrRequest = new XMLHttpRequest();



function getMoonPhase() {
            let input = document.getElementById('date').value
    xhrRequest.open('GET', `http://api.usno.navy.mil/moon/phase?date=${input}&nump=1`);


    xhrRequest.onreadystatechange = function() {
        if (xhrRequest.readyState === 4 && xhrRequest.status === 200) {

            parsedData = JSON.parse(xhrRequest.responseText);
            console.log(parsedData.phasedata[0].phase);

            let moon = document.getElementById('moon')
            let phase = document.getElementById('phase')
             moon.src = `http://api.usno.navy.mil/imagery/moon.png?date=${input}`
             phase.innerHTML =  `${parsedData.phasedata[0].phase}`
        }
    }
    xhrRequest.send();
}
