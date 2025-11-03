// Tema simples
const root=document.documentElement;
document.querySelectorAll('.theme-switcher .btn').forEach(b=>{
  b.addEventListener('click',()=>{
    const t=b.dataset.theme;
    if(t==='neo'){root.removeAttribute('data-theme');}
    else{root.setAttribute('data-theme', t);}
  });
});

document.querySelector('.menu-toggle')?.addEventListener('click',()=>{
  const nav=document.querySelector('.nav');
  nav.style.display=(nav.style.display==='block')?'none':'block';
});

// Slideshow básico
const slides=Array.from(document.querySelectorAll('.slideshow .slide'));
let cur=0;
function show(i){slides.forEach((s,ix)=>s.classList.toggle('active', ix===i));}
function next(){cur=(cur+1)%slides.length;show(cur);}
function prev(){cur=(cur-1+slides.length)%slides.length;show(cur);}
document.querySelector('.slideshow .next')?.addEventListener('click', next);
document.querySelector('.slideshow .prev')?.addEventListener('click', prev);
if(slides.length){show(0); setInterval(next, 5000);}

// Contato (mock)
document.getElementById('contatoForm')?.addEventListener('submit', e=>{
  e.preventDefault();
  const nome = new FormData(e.currentTarget).get('nome');
  alert(`Obrigado, ${nome}! Recebemos sua mensagem.`);
  e.currentTarget.reset();
});

//trocar de cor
function trocar(cor){
  document.body.style.background=cor;
}