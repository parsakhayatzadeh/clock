function StartTime() {
    let date = new Date();
    let Hour = date.getHours();
    let Min = date.getMinutes();
    let sec = date.getSeconds();
    let sisson = "AM"

    if (Hour == 0) {

        Hour = 12
        sisson = "AM"

    } else if (Hour > 12) {

        Hour = Hour - 12
        sisson = "PM"
    }

    Hour = (Hour < 10 ) ? "0" + Hour : Hour;
    Min = (Min < 10 ) ? "0" + Min : Min;
    sec = (sec < 10 ) ? "0" + sec : sec ;

    var time = Hour + ':' + Min + ':' + sec + "     " + sisson ;
    

    document.getElementById('MyClockDisplay').innerHTML = time

    setTimeout(StartTime , 1000)
}

StartTime()