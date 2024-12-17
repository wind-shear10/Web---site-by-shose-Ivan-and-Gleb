const gallery = document.querySelector('.gallery');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');

// Индекс текущего элемента
let currentIndex = 0;


// Ширина одного элемента (динамически определяем)
const containerWidth = document.querySelector('.gallery-item').offsetWidth;

// Обработчик кнопки "Вперёд"
nextButton.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex > 3) {
        currentIndex = 3;
    }
    updateGalleryPosition();

});

// Обработчик кнопки "Назад"
prevButton.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < -3) {
        currentIndex = -3;
    }
    updateGalleryPosition();

});

// Функция для обновления позиции галереи
function updateGalleryPosition() {
    let offset = -currentIndex * containerWidth; // Смещение
    gallery.style.transform = `translateX(${offset}px)`; // Применяем смещение
}



let block = document.querySelector('.headerImage1');

block.addEventListener('mouseenter', function() {
    block.classList.add('color1');
});
block.addEventListener('mouseleave', function() {
    block.classList.remove('color1');
});

let block1 = document.querySelector('.headerImage2');

block1.addEventListener('mouseenter', function() {
    block1.classList.add('color1');
});
block1.addEventListener('mouseleave', function() {
    block1.classList.remove('color1');
});

let block2 = document.querySelector('.headerImage3');

block2.addEventListener('mouseenter', function() {
    block2.classList.add('color1');
});
block2.addEventListener('mouseleave', function() {
    block2.classList.remove('color1');
});