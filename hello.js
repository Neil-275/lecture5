document.addEventListener("DOMContentLoaded",{
    function () {
        document.querySelector('form').onsubmit = function(){
            const va= document.querySelector('#name').value;
            alert(`Hello ${va}`);
        }
    }

})