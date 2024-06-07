const overlay = document.querySelector(".overlay");
const program ={
    febonacciseries:"hello",
    primenumber:"hiiii",
    armstrongNumber:"weeeedddddd"
}

console.log(program.febonacciseries);

function cli(e) {
    var parenting = e.target.parentElement;
    var data = parenting.querySelector(".des");
    var messages = document.querySelector(".message");
    var para = messages.querySelector(".p");
    console.log(data.innerText);
    para.innerText = data.innerText;
    messages.style.display = "block";
    var heading = parenting.querySelector(".head");
    var mhead = messages.querySelector(".heading");
    mhead.innerText = heading.innerText;
    overlay.style.display = "block";
}

function canceling() {
    const messages = document.querySelector(".message");
    messages.style.display = "none";
    overlay.style.display = "none";
}

function copytoclipboard(e) {
    var parenting = e.target.parentElement;
    var data = parenting.querySelector(".p");
    var code = data.innerText;
    navigator.clipboard.writeText(code);
    console.log(code);
}