const btn = document.getElementById("btn");
const Dbtn = document.getElementById("delete");
const last = document.getElementById("lst");
const inputbar = document.getElementById("input-text");
const count = document.getElementById("count");
const count1 = document.getElementById("count1");
const incrementor = document.querySelector(".incrementor")
const percentage = document.querySelector(".percentage")

let inputtext, newValue, newHeight;

btn.addEventListener("click", (e) => {
    event.preventDefault();
    inputtext = inputbar.value;
    if(inputtext!=""){
    newValue = Number(count.innerText) + 1;
    if (newValue == 100) {
        btn.style.pointerEvents = "none";
    } else {
        last.innerText = inputtext;
        count.innerHTML = newValue;
        count1.innerHTML = newValue;
        let newFontSize = Number(newValue) + 15;
        count.style.fontSize = newFontSize + "px";
        newHeight = newValue * 2;
        incrementor.style.height = newHeight + "px";
        generateItem(inputtext);
    }
    colorchecker(newValue);
}else{
    alert("Please Enter Something")
}
})

function deletekey(e) {
    event.preventDefault();
    event.target.parentElement.parentElement.remove();
    newValue = Number(count.innerText) - 1;
    count.innerHTML = newValue;
    count1.innerHTML = newValue;
    newHeight = newValue * 2;
    let newFontSize = Number(newValue) + 15;
    count.style.fontSize = newFontSize + "px";
    incrementor.style.height = newHeight + "px";
    colorchecker(newValue);
}

function colorchecker(newValue) {
    if (newValue >= 0 && newValue <= 33) {
        incrementor.style.backgroundColor = "green";
        percentage.style.color = "green";
    } else if (newValue >= 34 && newValue <= 66) {
        incrementor.style.backgroundColor = "orange";
        percentage.style.color = "orange";
    } else if (newValue >= 67 && newValue <= 99) {
        incrementor.style.backgroundColor = "red";
        percentage.style.color = "red";
    }
}

function generateItem(item) {
    let container = document.getElementById("product-container");
    let div = document.createElement("div");
    div.setAttribute("class", "product");
    div.innerHTML = `<p>${item}</p>
    <button type="submit"><i class="fa-solid fa-trash-can" onclick="deletekey(Event)"></i></button>`;
    container.append(div);
}

