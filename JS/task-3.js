const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const fullGallery = document.querySelector('#gallery');
console.log(fullGallery);
const cardGallery = createImageEl(images);
fullGallery.insertAdjacentHTML('beforeend', cardGallery);
function createImageEl (images) {
  const imageEl = images.map(({url, alt}) => {
    return `<li class="image">
      <a href=""><img src="${url}" alt="${alt}" width="370">
    </li>`;
  }).join('');
  return imageEl;
}
console.log(cardGallery);