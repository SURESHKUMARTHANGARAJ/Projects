var img = document.querySelectorAll(".image");
var dot = document.querySelectorAll(".dot");
var sc = document.querySelector(".sc");
var menu = document.querySelector(".menu");
var cancel = document.querySelector(".cancel");
var sidenav = document.querySelector(".sidenav");
var link = document.querySelectorAll(".link");
const circle = document.querySelector('.circle')
const about = document.querySelector('.alink')
const contact = document.querySelector('.clink')

about.addEventListener("click",()=>{
    sidenav.style.left = "-100%";
})
contact.addEventListener("click",()=>{
    sidenav.style.left = "-100%";
})


function highlight(event) {
    event.preventDefault();
    for (var i = 0; i < link.length; i++) {
        link[i].classList.remove("active");
    }
    event.target.classList.add("active");
}

var count = 0;
function slidenext() {
    img[count].style.animation = "next1 1s ease forwards";
    dot[count].style.backgroundColor = "transparent";

    if (count >= img.length - 1) {
        count = 0;
    } else {
        count++;
    }
    img[count].style.animation = "next2 1s ease forwards";
    dot[count].style.backgroundColor = " rgb(10, 210, 245)";
}
function slideprev() {
    img[count].style.animation = "prev1 1s ease forwards";
    dot[count].style.backgroundColor = "transparent";
    if (count <= 0) {
        count = img.length - 1;
    } else {
        count--;
    }
    img[count].style.animation = "prev2 1s ease forwards";
    dot[count].style.backgroundColor = "black";
}
const t = setInterval(() => {
    slidenext();
}, 3000);

cancel.addEventListener("click", () => {
    sidenav.style.left = "-100%";
})
menu.addEventListener("click", () => {
    sidenav.style.left = "0%";
})


const a = [{
    image: "https://source.unsplash.com/random/900%C3%97700/?CHEETA",
    title: "CHEETAH",
    forum: "ANIMAL CHEETAH"

}, {
    image: "https://source.unsplash.com/random/900%C3%97700/?PANDA",
    title: "PANDA",
    forum: "ANIMAL PANDA"
}, {
    image: "https://source.unsplash.com/random/900%C3%97700/?TIGER",
    title: "TIGER",
    forum: "ANIMAL TIGER"
}, {
    image: "https://source.unsplash.com/random/900%C3%97700/?MONKEY",
    title: "MONKEY",
    forum: "ANIMAL MONKEY"
}, {
    image: "https://source.unsplash.com/random/900%C3%97700/?DOG",
    title: "DOG",
    forum: "ANIMAL DOG"
}, {
    image: "https://source.unsplash.com/random/900%C3%97700/?CAT",
    title: "CAT",
    forum: "ANIMAL CAT"
}, {
    image: "https://source.unsplash.com/random/900%C3%97700/?KANGAROO",
    title: "KANGAROO",
    forum: "ANIMAL KANGAROO"
}, {
    image: "https://source.unsplash.com/random/900%C3%97700/?RAT",
    title: "RAT",
    forum: "ANIMAL RAT"
}, {
    image: "https://source.unsplash.com/random/900%C3%97700/?ROSE",
    title: "ROSE",
    forum: "FLOWER ROSE"

}, {
    image: "https://source.unsplash.com/random/900%C3%97700/?PIGEON",
    title: "PIGEON",
    forum: "BIRD PIGEON"

}, {
    image: "https://source.unsplash.com/random/900%C3%97700/?RAINBOW",
    title: "RAINBOW",
    forum: "NATURE RAINBOW"

}, {
    image: "https://source.unsplash.com/random/900%C3%97700/?SPARROW",
    title: "SPARROW",
    forum: "BIRD SPARROW"

}, {
    image: "https://source.unsplash.com/random/900%C3%97700/?MOUNATIN",
    title: "MOUNTAIN",
    forum: "NATURE MOUNTAIN"

}, {
    image: "https://source.unsplash.com/random/900%C3%97700/?LILY",
    title: "LILY",
    forum: "FLOWER LILY"

}, {
    image: "https://source.unsplash.com/random/900%C3%97700/?PARROT",
    title: "PARROT",
    forum: "BIRD PARROT"


}, {
    image: "https://source.unsplash.com/random/900%C3%97700/?LOTUS",
    title: "LOTUS",
    forum: "FLOWER LOTUS"

},

]

for (var i = 0; i < a.length; i++) {
    create(a[i].image, a[i].title, a[i].forum);
}

function create(image, title, forum) {
    const c = document.querySelector(".mcontainer");
    const div = document.createElement("div");
    c.append(div);
    div.setAttribute("class", "mbox")
    div.innerHTML = `<img src="${image}">
                    <p class="titleguard">${title}</p>
                    <div class="desc">
                    <p class="forum">${forum}<p>
                    <div class="sect2">
                    <button class="sbutton"><a href="${image}" download="pic" src="${image}">Download</a></button>
                    </div>
                    </div>`;

}

function liked(event) {
    event.target.classList.toggle('liked');
}


var tit = document.querySelector(".tit");
var con = document.querySelector(".conatiner");
var search = document.querySelector(".sbar");
var sbutton = document.querySelector(".sbutton");
var mbox = document.querySelector(".mcontainer");
var allcontent = mbox.querySelectorAll(".forum");

function check() {
    sc.style.display = "none";
    con.style.display = "none";
    var nsearch = document.querySelector(".sbar");
    var nentered = nsearch.value.toUpperCase().trim();
    var tit = document.querySelector(".tit");
    if(nentered==""){
        tit.textContent="enter valid"
    }else{
        for (var g = 1; g <= 12; g++) {
            var nlink = "https://source.unsplash.com/random/900%C3%97700/?";
            var nlink1 = ((nlink + nentered) + "/").trim();
            var nlink2 = nlink1 + g;
            create(nlink2, nentered, nentered);
        }
    
        var tit = document.querySelector(".tit");
        var search = document.querySelector(".sbar");
        var sbutton = document.querySelector(".sbutton");
        var mbox = document.querySelector(".mcontainer");
        var allcontent = mbox.querySelectorAll(".forum");
    
        tit.textContent = "Search Result's";
        for (var i = 0; i < allcontent.length; i++) {
            if ((allcontent[i].textContent.toUpperCase().trim().indexOf(nentered)) < 0) {
                allcontent[i].parentElement.parentElement.style.display = "none";
            }
            else {
                allcontent[i].parentElement.parentElement.style.display = "inline-block";
            }
        }
    }
    nsearch.value="";
}

function checkby(event) {

    sc.style.display = "none";
    con.style.display = "none";
    var nentered = event.target.textContent.toUpperCase().trim();
    for (var g = 1; g <= 12; g++) {
        var nlink = "https://source.unsplash.com/random/900%C3%97700/?";
        var nlink1 = ((nlink + nentered) + "/").trim();
        var nlink2 = nlink1 + g;
        create(nlink2, nentered, nentered);
    }

    var tit = document.querySelector(".tit");
    var search = document.querySelector(".sbar");
    var sbutton = document.querySelector(".sbutton");
    var mbox = document.querySelector(".mcontainer");
    var allcontent = mbox.querySelectorAll(".forum");

    tit.textContent = "Search Result's";
    for (var i = 0; i < allcontent.length; i++) {
        if ((allcontent[i].textContent.toUpperCase().trim().indexOf(nentered)) < 0) {
            allcontent[i].parentElement.parentElement.style.display = "none";
        }
        else {
            allcontent[i].parentElement.parentElement.style.display = "inline-block";
        }
    }
}


