$(document).ready(function() {
    let currentIndex=0;
    const slides=$('.slide');
    const totalSlides=slides.length;
    const slideInterval = 3000;

    function showSlide(index) {
      slides.removeClass('active'); // Удаляем класс active у всех слайдов
      slides.eq(index).addClass('active'); // Добавляем класс active к текущему слайду
      $('.dot').removeClass('active');
      $('.dot').eq(index).addClass('active'); // Обновляем точки прогресса

          // Кликабельность точек
          $('.dot').click(function() {
            currentIndex=$(this).index();
            showSlide(currentIndex);
          });

      // Получаем цвет активной точки
      const activeDotColor=$('.dot.active').attr('class').split(' ')[1];
      $('.dot.active').css('background-image', `url('../../img/logo_study_${activeDotColor}.png')`);
      // Изменяем изображение фона для неактивных точек в зависимости от цвета активной точки
      $('.dot').each(function() {
        if ( !$(this).hasClass('active')) {
          $(this).css('background-image', `url('../../img/ellipse.png')`);
        }
      });

      $('.slide__level').removeClass('active');
      $('.slide__level').eq(index).addClass('active');
      $('.logo__text-color').removeClass('active');
      $('.logo__text-color').eq(index).addClass('active');
    }



    $('#next').click(function() {
      currentIndex=(currentIndex + 1) % totalSlides;
      showSlide(currentIndex);
    });
    $('#prev').click(function() {
      currentIndex=(currentIndex - 1 + totalSlides) % totalSlides;
      showSlide(currentIndex);
});
    // Обработчик наведения на точки
    $('.dot').hover(function() {
      if ( !$(this).hasClass('active')) {
        const activeDotColor=$('.dot.active').attr('class').split(' ')[1];
        $(this).css('background-image', `url('../../img/ellipse_${activeDotColor}.png')`);
      }
    }
    , function() {
      // Восстанавливаем изображение при уходе курсора
        if ( !$(this).hasClass('active')) {
          $(this).css('background-image', `url('../../img/ellipse.png')`);
        }
      });

    $(document).swipe( {
        swipe: function(_event, direction) {
          if (direction==='left') {
            currentIndex=(currentIndex + 1) % totalSlides;
            showSlide(currentIndex);
          }
          else if (direction==='right') {
            currentIndex=(currentIndex - 1 + totalSlides) % totalSlides;
            showSlide(currentIndex);
          }
        },
        threshold: 50 // Минимальное расстояние для распознавания свайпа
      });

      const autoPlay = setInterval(function() {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
    }, slideInterval);

    showSlide(currentIndex);
  });