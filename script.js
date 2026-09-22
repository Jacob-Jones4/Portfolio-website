document.getElementById('year').textContent=new Date().getFullYear();
const header=document.querySelector('.nav');document.querySelector('.menu').addEventListener('click',()=>header.classList.toggle('open'));document.querySelectorAll('.nav nav a').forEach(a=>a.addEventListener('click',()=>header.classList.remove('open')));
