import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const picturesMarkup = createPicturesMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', picturesMarkup);

function createPicturesMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
   <img
    class="gallery__image"
     src="${preview}"
     data-source="${original}"
     alt="${description}"
    >
  </a>
</div>
`
    }).join('');
}
galleryContainer.addEventListener('click', onGalleryContainerClick);

function onGalleryContainerClick(e) {
    e.preventDefault();
    if (e.target.className === galleryItems.preview) {
    return;
  };
};
console.log(galleryItems);
