let cnt=0;
function add(){
    cnt++;
    document.querySelector('h1').innerHTML= cnt;
    if (cnt % 5 === 0){
        alert(`Counter is now ${cnt}`);
    }

}
document.addEventListener("DOMContentLoaded",function(){
    document.querySelector('button').onclick = add;
});