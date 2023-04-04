function displayTime()
{
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var mins = dateTime.getMinutes();
    var secs = dateTime.getSeconds();
    var sess = document.getElementById('sessions');

    if(hrs>=12)
    {
        sessions .innerHTML='PM';
    }
    else
    {
        sessions .innerHTML='AM';
    }

    hrs = (hrs<10) ? "0"+hrs : hrs;
    mins= (mins<10) ? "0"+mins : mins;
    secs= (secs<10) ? "0"+secs : secs;

    if(hrs>12)
    {
        hrs-=12;
    }
    document.getElementById('hours').innerHTML=hrs;
    document.getElementById('minutes').innerHTML=mins;
    document.getElementById('seconds').innerHTML=secs;
} 
setInterval(displayTime, Infinity);