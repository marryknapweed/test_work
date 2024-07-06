// jQuery
$(document).ready(function() {
  const countDownDate = new Date().getTime() + 30 * 60 * 1000; // 30 минут с текущего момента

  // Обновляем таймер каждую секунду
  const x = setInterval(function() {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    $("#timer").html(`${minutes}м ${seconds}с`);

    if (distance < 0) {
      clearInterval(x);
      $("#timer").html("Акция завершена");
    }
  }, 1000);

  $('#phone').on('input', function() {
    this.value = this.value.replace(/[^0-9]/g, '');
  });
});


$(document).ready(function() {
  const $carousel = $('.carousel-inner');
  const $items = $('.review-item');
  const itemCount = $items.length;
  let itemWidth = $items.outerWidth(true);
  let currentIndex = 0;

  $(window).resize(function() {
    itemWidth = $items.outerWidth(true);
  });

  function moveCarousel() {
    $carousel.css('transform', `translateX(-${currentIndex * itemWidth}px)`);
  }

  $('.next-btn').click(function() {
    if (currentIndex < itemCount - 1) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    moveCarousel();
  });

  $('.prev-btn').click(function() {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = itemCount - 1;
    }
    moveCarousel();
  });
});
