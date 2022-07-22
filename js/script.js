let sec = 0;
let mim = 0;
let  hour = 0
let interval;

function twoDigits(digit){
        if(digit < 10){
            return ('0' + digit);
        }else{
            return (digit);
        }
}

function start(){
watch() // to start with one second
interval = setInterval(watch,1000);  
}


function pause(){
clearInterval(interval); // stop intervals
}

function stop(){
    clearInterval(interval); // it is necessary
    sec = 0;
    mim = 0;
    hour = 0
    document.getElementById("timer").innerHTML = "00:00:00"
}



// this function below shows the operation of a watch
function watch(){
    sec ++
    if(sec==60){
        mim++ 
        sec = 0;
        if(mim==60){
            hour++
            mim = 0
        }
    }
    document.getElementById("timer").innerHTML = `${twoDigits(hour)}:${twoDigits(mim)}:${twoDigits(sec)}`;

}