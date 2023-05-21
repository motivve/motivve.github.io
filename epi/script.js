window.addEventListener('scroll', revealOnScroll);

function revealOnScroll() {
  const sections = document.querySelectorAll('section');
  
  for (const section of sections) {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const windowHeight = window.innerHeight;
    const scrollY = window.scrollY;
    
    if (scrollY > sectionTop - windowHeight + 200) {
      section.classList.add('active');
    } else {
      section.classList.remove('active');
    }
  }
}
// Sélectionner l'élément conteneur de l'animation
var animationContainer = document.getElementById('carbon-animation');

// Définir les étapes du cycle du carbone
var steps = [
  { name: 'Étape 1', x: 100, y: 100 },
  { name: 'Étape 2', x: 300, y: 100 },
  { name: 'Étape 3', x: 500, y: 100 },
  // ... ajoutez les autres étapes du cycle du carbone
];

// Créer et animer les rectangles représentant les étapes
steps.forEach(function(step) {
  var rectangle = document.createElement('div');
  rectangle.classList.add('carbon-step');
  rectangle.style.left = step.x + 'px';
  rectangle.style.top = step.y + 'px';
  rectangle.textContent = step.name;
  animationContainer.appendChild(rectangle);

  // Animer le déplacement des rectangles
  anime({
    targets: rectangle,
    translateX: 200, // Déplacer de 200 pixels
    duration: 2000,
    easing: 'easeInOutSine',
    loop: true
  });
});

// Créer et animer les flèches entre les étapes
// ... ajoutez le code pour créer et animer les flèches
