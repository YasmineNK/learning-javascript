const increaseB = document.getElementById("increaseB");
const resetB = document.getElementById("resetB");
const decreaseB = document.getElementById("decreaseB");
const labelB = document.getElementById("myLabel");

let count = 0;
increaseB.onclick = function(){
    count++;
    labelB.textContent=count;

}
decreaseB.onclick= function(){
    count--;
    labelB.textContent =count;
}
resetB.onclick =function(){
    count= 0;
    labelB.textContent=count;
}


