const images = [
    'images/01.jpeg',
    'images/02.jpg',
    'images/03.jpg',
    'images/04.jpg',
    'images/05.jpeg',
    'images/06.jpg',
    'images/07.jpg',
    'images/08.jpg',
    'images/09.jpeg',
    'images/10.jpg'
];
let imgIndex = 0;
const imgElement = document.getElementById('slider-image');
setInterval(() => {
    if (imgIndex >= images.length) {
        imgIndex = 0;
    }
    const imgUrl = images[imgIndex];
    imgElement.setAttribute('src', imgUrl);
    imgIndex++;
}, 1000)