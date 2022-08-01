// Создание и рендер разметки по массиву данных galleryItems и 
// предоставленному шаблону элемента галереи.
// Используй готовый код из первого задания.
// Подключение скрипта и стилей библиотеки используя CDN сервис cdnjs. 
// Необходимо добавить ссылки на два файла: simple - lightbox.min.js 
// и simple - lightbox.min.css.
// Инициализация библиотеки после того как элементы галереи созданы и 
// добавлены в div.gallery.Для этого ознакомься с документацией SimpleLightbox - в первую очередь секции «Usage» и «Markup».
// Посмотри в документации секцию «Options» и добавь отображение 
// подписей к изображениям из атрибута alt.
// Пусть подпись будет снизу и появляется через 250 миллисекунд после 
// открытия изображения.

import { galleryItems } from './gallery-items.js';
// Change code below this line

const ulEl = document.querySelector('.gallery');
function createListGalleryItems(items) {
    return items.map(({ preview, original, description }) => `
    <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`).join('');
}
const listGallaryItems = createListGalleryItems(galleryItems);
ulEl.insertAdjacentHTML("beforeend", listGallaryItems);
// ulEl.addEventListener('click', onSelectImgGallery);
console.log(galleryItems);

// var lightbox = $('.gallery a').simpleLightbox({ /* options */ });
let galleryEl = new SimpleLightbox('.gallery a',{
    
    captionPosition: `bottom`,
    captionsData: "alt",
    captionDelay: 250,
});
// galleryEl.on('show.simplelightbox', function () {   
// });

// galleryEl.on('error.simplelightbox', function (e) {
// 	console.log(e); // Some usefull information
// });

// with jQuery nearly the same
// let galleryEl = $('.gallery a').simpleLightbox();
// galleryEl.on('show.simplelightbox', function () {
// 	// Do something…
// });