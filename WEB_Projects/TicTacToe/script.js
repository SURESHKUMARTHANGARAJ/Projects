const statusText = document.querySelector('.status-text');
const cells = document.querySelectorAll('.cell');
const resetBtn = document.querySelector('.reset');

let currentPlayer = 'X';
let options = ["","","","","","","","",""];
const winning = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
let isRun=true;

function cellClicked(e) {
    if(isRun){
        const cellIndex = e.target.getAttribute("cellIndex");
        updateCell(e.target,cellIndex);
        checkWinnner();
    }
}

function changePlayer(){
    currentPlayer = (currentPlayer == 'X')?"O":"X";
    statusText.textContent = `${currentPlayer}'s Turn`;
    
}
function updateCell(cell,index){
    if(options[index] != "") return;
    options[index] = currentPlayer;
    cell.textContent = currentPlayer;
}
function resetGame(){
    currentPlayer = "X";
    options = ["","","","","","","","",""];
    statusText.textContent = `${currentPlayer}'s Turn`;
    statusText.style.color= 'black';
    cells.forEach(cell => cell.textContent="");
    isRun = true;
}
function checkWinnner(){

    let isWon = false;

    for(let i=0;i<winning.length;i++){
        const condition = winning[i]
        let cell1 = options[condition[0]]
        let cell2 = options[condition[1]]
        let cell3 = options[condition[2]]
        if(cell1 == "" || cell2 == "" || cell3 == ""){
            continue;
        }
        if(cell1 == cell2 && cell2 == cell3){
            statusText.style.color= 'green';
            isWon = true;
            break;
        }
    }
    if(isWon){
        statusText.textContent = `${currentPlayer} wins`;
        isRun = false;
    }else if(!options.includes("")){
        statusText.textContent = `draw!`;
        resetGame();
    }else{
        changePlayer();
    }
    }

