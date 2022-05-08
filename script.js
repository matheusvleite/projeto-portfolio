var arrow = document.getElementById('anim')

arrow.addEventListener('click', function(){

arrow.classList.toggle('rotate')    
var display = document.getElementById('cont') 
display.classList.toggle('displayCont')
    
})


var hamburguerMenu = document.getElementById('hamburguerMenu')

hamburguerMenu.addEventListener('click' , function(){
   var menuNav = document.querySelector('nav')
    menuNav.classList.toggle('menuHa')
})


var send = document.getElementById('send')

send.addEventListener('click' , function(){
    var modal = document.getElementById('modal-email')
    modal.classList.add('mostrar')  

    var closeModal = document.getElementById('closeModal')

closeModal.addEventListener('click' , function(){
    modal.classList.remove('mostrar')
})
})


