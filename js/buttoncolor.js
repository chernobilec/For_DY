const slides = document.querySelectorAll('.slide');
  const button = document.querySelector('.button');
  const prevButton = document.getElementById('prev');
  const nextButton = document.getElementById('next');
  const colors = ['hover-green', 'hover-blue', 'hover-purp'];
  let currentIndex = 0;

  function updateSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
    button.className = 'button ' + colors[index]; // Изменяем класс кнопки
  }

  prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlide(currentIndex);
  });

  nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlide(currentIndex);
  });

  // Инициализация первого слайда
  updateSlide(currentIndex);