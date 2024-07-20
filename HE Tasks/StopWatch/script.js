const startbtn=document.querySelector(".start")
const stopbtn=document.querySelector(".stop")
const resetbtn=document.querySelector(".reset")
var hrs=0;
var sec=0;
var min=0;
var ms=0;

startbtn.addEventListener("click",()=>{
 timeIntervel=setInterval(()=>{
    ms++;
    if(ms===100){
        sec++;
        ms=0;
        if(sec==60){
            min++;
            sec=0;
            if(min===60){
                min=0;
                hrs++;
            }
        }
    }
    updateTimer();
},10)
startbtn.classList.add("active");
resetbtn.classList.add("active");
stopbtn.classList.remove("active");
});

stopbtn.addEventListener("click",()=>{
    startbtn.classList.remove("active");
    stopbtn.classList.add("active");
    resetbtn.classList.remove("active");
    clearInterval(timeIntervel);
});

resetbtn.addEventListener("click",()=>{
     hrs=0;
     sec=0;
     min=0;
     ms=0;
updateTimer();
    startbtn.classList.remove("active");
    stopbtn.classList.add("active");
    resetbtn.classList.add("active");
});


function updateTimer(){
    var newhrs=hrs<10?'0'+hrs:hrs;
    var newmin=min<10?'0'+min:min;
    var newsec=sec<10?'0'+sec:sec;
    var newms=ms<10?'0'+ms:ms;
    document.querySelector(".hrs").innerHTML=newhrs;
    document.querySelector(".sec").innerHTML=newsec;
    document.querySelector(".min").innerHTML=newmin;
    document.querySelector(".ms").innerHTML=newms;
}