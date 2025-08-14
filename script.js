
// Toggle mobile menu
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
if(menuBtn){
  menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

// Scroll to top button
const scrollTopBtn = document.createElement('button');
scrollTopBtn.innerText = '↑';
scrollTopBtn.id = 'scrollTopBtn';
document.body.appendChild(scrollTopBtn);

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollTopBtn.style.display = 'block';
  } else {
    scrollTopBtn.style.display = 'none';
  }
});

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Dark mode toggle
const darkModeBtn = document.createElement('button');
darkModeBtn.innerText = '🌓';
darkModeBtn.id = 'darkModeBtn';
document.body.appendChild(darkModeBtn);

darkModeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
});

if(localStorage.getItem('darkMode') === 'true'){
  document.body.classList.add('dark-mode');
}
