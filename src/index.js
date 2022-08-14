import './css/styles.css';
import axios from 'axios'
import Notiflix from 'notiflix';
const API_KEY = '29230090-341e91ba352ddd311dc4a279b';
// const refs = {
//     form: document.querySelector(`.search-form`),
//     input: document.querySelector(`input`),
//     button: document.querySelector(`button`),
//     gallery: document.querySelector(`.gallery`)
// };

// refs.form.addEventListener("submit", getImages);

// function searchSubmit(e) {
//     e.preventDefault();
//     const searchRequest = e.target.firstElementChild.value;
//     getImages(searchRequest);
// };

const getImages = async () => {
    try {
        const response = await axios.get(
            `https://pixabay.com/api/?key=29230090-341e91ba352ddd311dc4a279b&q=cat&image_type=photo`
        );
        console.log(response.data);
    } catch (error) {
        console.log(error)
    }
};
getImages()
// function renderImagesList(images) {
//         const markup = images
//             .map((image) => {
//                 return `
//         <div class="photo-card">
//             <img src="" alt="" loading="lazy" />
//         <div class="info">
//             <p class="info-item">
//             <b>Likes</b>
//             </p>
//             <p class="info-item">
//             <b>Views</b>
//             </p>
//             <p class="info-item">
//             <b>Comments</b>
//             </p>
//             <p class="info-item">
//             <b>Downloads</b>
//             </p>
//         </div>
//         </div>
//       `;}).join("");
//         refs.gallery.innerHTML = markup;
// };