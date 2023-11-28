function displayClock (){
    
    let DateTime = new Date()
    let ampm = document.getElementById('ampm')
    let hrs = DateTime.getHours();
    let mins = padZero(DateTime.getMinutes());
    let sec =padZero( DateTime.getSeconds());
    if(hrs>12){
          hrs = hrs-12
            ampm.innerHTML = 'PM'
    }
     
    else 
       ampm.innerHTML = 'AM'

    document.getElementById('hr').innerHTML = padZero(hrs) 
    document.getElementById('min').innerHTML = mins
    document.getElementById('seconds').innerHTML = sec
}

function padZero (num){
    return num <10?"0"+num:num
}

setInterval(displayClock,500)