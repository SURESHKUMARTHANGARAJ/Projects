const box = document.getElementById("Display");

function appendtodisplay(input) {
    if (box.value === "ERROR") {
        box.value = "";
        box.value += input;
    }
    else {
        box.value += input;
    }
}

function cleardisplay() {
    box.value = "";
}

function calculate() {
    try {
        box.value = eval(box.value);
    }
    catch (error) {
        box.value = "ERROR";
    }
}