let scouts = [];

function addScout() {
    let name = Math.floor(Math.random()*100);
    let rank = 'first';
    let mnoznik = 1;
    scouts.push({ name, rank, mnoznik });
    wyswietlanie(name, rank, mnoznik);
}

function wyswietlanie(name, rank, mnoznik) {
    document.getElementById("team").innerHTML += '<b>' + name + '</b> <br />' + rank + '<br />' + mnoznik  + '<br />';
}

let licznik = 0;
setInterval(onTimerTick, 1000); // 33 milliseconds = ~ 30 frames per sec

function onTimerTick() {
    document.getElementById("hajs").innerHTML = licznik;
    licznik += scouts.length;
}