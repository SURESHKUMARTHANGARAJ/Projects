var n=document.getElementById('num');
var result=document.getElementById('result');
var score=10;
var s=document.getElementById('score')

function check(){
var enter=Number(n.value);
var random=Math.floor(Math.random()*10)+1;
if(enter==random){
    result.textContent="Right";
    score=score+1;
    s.textContent="score : "+score;
    alert("You Won");
}else{
    result.textContent="Wrong";
    score=score-1;
    s.textContent="score : "+score;
    if(score==0){
        alert("you lose");
        
    }

}


}