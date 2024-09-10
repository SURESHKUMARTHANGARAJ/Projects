var hrs = document.getElementById("hrs");
var min = document.getElementById("min");
var sec = document.getElementById("sec");
setInterval(() => {
    var ct = new Date();
    hrs.innerHTML = ((ct.getHours() < 10 ? '0' : '') + ct.getHours());
    min.innerHTML = ((ct.getMinutes() < 10 ? '0' : '') + ct.getMinutes());
    sec.innerHTML = ((ct.getSeconds() < 10 ? '0' : '') + ct.getSeconds());
}, 1000)


