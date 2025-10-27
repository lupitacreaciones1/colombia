document.getElementById('year').textContent = new Date().getFullYear();
function submitContact(e){
  e.preventDefault();
  const form = e.target;
  alert('Gracias, ' + form.name.value + '! Tu mensaje ha sido recibido (simulado).');
  form.reset();
}
// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', function(e){
    const href = this.getAttribute('href');
    if(href.startsWith('#')){
      e.preventDefault();
      const el = document.querySelector(href);
      if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
    }
  });
});
// Reveal on scroll
const reveals = document.querySelectorAll('.reveal');
const obs = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
    }
  });
},{threshold:0.15});
reveals.forEach(r=>obs.observe(r));
