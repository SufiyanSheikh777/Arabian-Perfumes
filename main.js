const nextButton = document.querySelector('.next');
const perfumeBottle = document.querySelector('.perfume-bottle-big');

nextButton.addEventListener('click', () => {
  perfumeBottle.style.transform = 'translateX(100%)';
  perfumeBottle.style.transition = 'transform 5s';
});