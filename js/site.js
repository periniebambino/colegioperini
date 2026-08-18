
(function(){
  const btn=document.getElementById('menu-toggle');
  const menu=document.getElementById('mobile-menu');
  const close=()=>{menu?.classList.remove('is-open');document.body.classList.remove('menu-open');btn?.setAttribute('aria-expanded','false')};
  btn?.addEventListener('click',()=>{const open=!menu.classList.contains('is-open');menu.classList.toggle('is-open',open);document.body.classList.toggle('menu-open',open);btn.setAttribute('aria-expanded',String(open));});
  document.querySelectorAll('.mobile-link').forEach(a=>a.addEventListener('click',close));
  document.addEventListener('keydown',e=>{if(e.key==='Escape')close()});
  const y=document.getElementById('year'); if(y) y.textContent=new Date().getFullYear();
})();
