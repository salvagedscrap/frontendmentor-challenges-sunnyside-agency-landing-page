const nav=document.querySelector('.nav')
const openNav= document.querySelector('.nav-icon');
const closeNav=document.querySelector('.close-nav');


  openNav.addEventListener('click',()=> nav.classList.add('nav-active'));
  closeNav.addEventListener('click',()=> nav.classList.remove('nav-active'))
  closeNav.addEventListener('click',()=> nav.classList.add('nav'))
