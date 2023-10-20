const toggleBtn = document.querySelector('.toggle-btn');
const navBar = document.querySelector('header .navBar');
const name = document.querySelector('header .name');

toggleBtn.addEventListener('click', () =>{
    toggleBtn.classList.toggle('active');
    navBar.classList.toggle('active');
    name.classList.toggle('active');
});