const MenuEl = document.getElementById('menu-btn')
const MenuMobile = document.getElementById('menu')
MenuEl.addEventListener('click',onToggle)
function onToggle(){
    MenuEl.classList.toggle('open')
    MenuMobile.classList.toggle('hidden')
}