let aside=document.querySelector("aside");
let overlay=document.querySelector(".overlay");

function menu(e){
    aside.style.left="0";
    overlay.style.display="block";
};
function closed(e){
    aside.style.left="-100%";
    overlay.style.display="none";

};




function zoom(e){
    var img=event.target.src;
    console.log(img);

    // let bigimg=document.getElementById("bigimg");
    // let imgcontainer=bigimg.getElementsByTagName(img);
    // imgcontainer.src=event.target.src;
    // console.log(bigimg.getElementsByTagName("img").src);
    // bigimg.style.display="block";

        let bigimg=document.getElementById("bigimg");
        bigimg.innerHTML=`<img src="${img}" >
        <button onclick="bigimgclose()"><i class="fa-solid fa-xmark"></i></button>`;
            bigimg.style.display="block";


}
function bigimgclose(){
    let bigimg=document.getElementById("bigimg");
    bigimg.style.display="none";
}



