document.getElementById('year').textContent = new Date().getFullYear();

function submitContact(e){
  e.preventDefault();
  const form = e.target;
  const data = {
    name: form.name.value,
    message: form.message.value
  };
  alert('Gracias, ' + data.name + '! Tu mensaje ha sido recibido (simulado).\nTambién puedes escribir por WhatsApp.');
  form.reset();
}

// Simple menu toggle for small screens
document.querySelector('.menu-toggle')?.addEventListener('click', ()=>{
  const nav = document.querySelector('.nav');
  if(nav.style.display === 'block') nav.style.display = '';
  else nav.style.display = 'block';
});
