$(document).ready(function() {
    var currentIndex = 0;
    var images = $('.slider-image');
    var totalImages = images.length;

    function showImage(index) {
        images.fadeOut(500); // Плавно скрываем текущее изображение
        images.not(':eq(' + index + ')').hide(); // Скрываем все изображения, кроме нового
        images.eq(index).fadeIn(500); // Плавно показываем новое изображение
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % totalImages;
        showImage(currentIndex);
    }

    setInterval(nextImage, 5000); // Задержка в 5000 миллисекунд (5 секунд)
});


document.addEventListener("DOMContentLoaded", function () {
    // Обработчик события загрузки DOM
  
    // Найти элементы color-picker и section-color
    var colorPicker = document.querySelector('.color-picker');
    var sectionColorInput = document.getElementById('section-color');
  
    // Назначить обработчик события изменения цвета
    sectionColorInput.addEventListener('input', function () {
      // Получить выбранный цвет
      var selectedColor = sectionColorInput.value;
  
      // Изменить цвет фона секции
      colorPicker.style.backgroundColor = selectedColor;
    });
  });
