import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');

const markup = galleryItems.map(
    ({ preview, original, description }) =>
        `<a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" 
        alt="${description}" />
        </a>`
)
    .join("");

gallery.insertAdjacentHTML("beforeend", markup);
gallery.addEventListener("click", onItemClick);

function onItemClick(e) {
    e.preventDefault();

    var lightbox = new SimpleLightbox(".gallery a", {
        captionData: "alt",
        captionDelay: 250,
    })
}

console.log(galleryItems);




