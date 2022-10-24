if (!localStorage.getItem('cnt'))
    localStorage.setItem('cnt',0);
function add(){
    let cnt =localStorage.getItem('cnt');
    cnt++;
    document.querySelector('h1').innerHTML= cnt;
    if (cnt % 500 === 0){
        alert(`Counter is now ${cnt}`);
    }
    localStorage.setItem('cnt',cnt);

}
document.addEventListener("DOMContentLoaded",function(){
    document.querySelector('h1').innerHTML=localStorage.getItem('cnt');
    document.querySelector("button").onclick = add;
    
    // setInterval(add,1000);
});