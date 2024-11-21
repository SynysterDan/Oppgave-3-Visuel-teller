let count = 0;
document.getElementById("buttonIncrease").onclick = function (){
    count +=1;
    document.getElementById("countLabel").innerHTML = count;
}
document.getElementById("buttonReset").onclick = function (){
    count =0;
    document.getElementById("countLabel").innerHTML = count;
}
document.getElementById("buttonDecrease").onclick = function (){
    count -=1;
    document.getElementById("countLabel").innerHTML = count;
}