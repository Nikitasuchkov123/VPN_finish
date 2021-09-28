/*
при клике на кнопку GET Started
появляется модальное окно
возможно с анимациями
*/

let btn = document.getElementById('modal_btn');
let modal = document.getElementById('modal');
let x = document.getElementById('close');
btn.onclick = function(){
    alert("есть клик")
    modal.style.display = "flex";
}
x.onclick = function(){
    modal.style.display = "none";
}