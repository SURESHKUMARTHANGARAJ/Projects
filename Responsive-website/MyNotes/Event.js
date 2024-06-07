var overlay = document.getElementById('overlay');
var popup = document.getElementById('popup');
var cancel = document.getElementById('book-cancel')
var container = document.getElementById('container')
var bevent = document.getElementById('bookname')
var bdate = document.getElementById('bookauthor')
var btime = document.getElementById('booktime')
var textarea = document.getElementById('textarea')
function add(event) {
    overlay.style.display = "block";
    popup.style.display = "block";
    bevent.focus();
    event.preventDefault();
    
}
function bookcancel(event) {
    event.preventDefault();
    overlay.style.display = "none"
    popup.style.display = "none"
}
function deletebook(event) {
    event.target.parentElement.remove();
    event.preventDefault();
}
function added(event) {
    event.preventDefault();
    if (bevent.value.trim() == "") {
        alert("Enter Event Details");
    } else {
        var div = document.createElement('div')
        container.append(div);
        div.setAttribute("class", 'card');
        div.innerHTML = `<h2 class="h2">Event : ${bevent.value}</h2>
                  <h3 class="h3">Date : ${bdate.value}</h3>
                  <h3 class="h3">Time : ${btime.value}</h3><hr>
                  <p class="p">Description : ${textarea.value}</p>
                  <button id="delete" onclick="deletebook(event)">delete</button>`
        overlay.style.display = "none";
        popup.style.display = "none";
    }
}

