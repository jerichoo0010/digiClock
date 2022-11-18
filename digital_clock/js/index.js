const hr = document.getElementById("hour");
const min = document.getElementById("minute");
const secs = document.getElementById("second");
const tm_ampm = document.getElementById("ampm");

function clock(){
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let am = "AM";
    
    
    if(h >= 12){
         
        if(h > 12){
            h = h - 12;
        }
        
        am = "PM";

       
    }

    if(s < 10)
    {
        s = "0" + s
    }

    if(h < 10)
    {
        h = "0" + h
    }
    
    if(m < 10)
    {
        m = "0" + m
    }

    hr.innerText = h;
    min.innerText = m;
    secs.innerText = s;
    tm_ampm.innerText = am;
    setTimeout(() => {
        clock()
    }, 1000)
}

clock()