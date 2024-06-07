let aside=document.querySelector("aside");

function menu(e){
    aside.style.left="0";
};
function closed(e){
    aside.style.left="-100%";
};

const submit=document.getElementById("submit");
const mbox=document.getElementById("m-box");

submit.addEventListener("click",()=>{
    mbox.value="";
})