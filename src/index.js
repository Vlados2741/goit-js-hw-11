import './css/styles.css';
import axios from 'axios'
import Notiflix from 'notiflix';
const API_KEY = '29230090-341e91ba352ddd311dc4a279b';
const refs = {
    form: document.querySelector(`.search-form`),
    input: document.querySelector(`input`),
    button: document.querySelector(`button`),
    gallery: document.querySelector(`.gallery`),
    loadMore: document.querySelector(`.load-more`)
};

refs.form.addEventListener("submit", searchSubmit);
// refs.form.addEventListener("click", onLoadMore);

function searchSubmit(e) {
    e.preventDefault();
    const searchRequest = e.target.firstElementChild.value;
    getImages(searchRequest);
};

const getImages = async (request) => {
    try {
        const response = await axios.get(
            `https://pixabay.com/api/?key=${API_KEY}&q=${request}&image_type=photo&per_page=40&orientation=horizontal&safesearch=true`
        );
        console.log(response.data);
        if (response.data.total === 0) {
            Notiflix.Notify.failure("Sorry, there are no images matching your search query. Please try again.")
        } else {
            Notiflix.Notify.success("Hooray! We found totalHits images.")
            renderImagesList(response.data.hits)
        }    
    } catch (error) {
        console.log(error)
    }
};
function renderImagesList(images) {
        const markup = images
            .map((image) => {
                return `
        <div class="photo-card">
            <img src="${image.webformatURL}" alt="${image.tags}" loading="lazy" width="220px" height="150px"/>
            <div class="info">
                <p class="info-item">
                <b>Likes:</b> <br>${image.likes}
                </p>
                <p class="info-item">
                <b>Views:</b> <br>${image.views}
                </p>
                <p class="info-item">
                <b>Comments:</b> <br>${image.comments}
                </p>
                <p class="info-item">
                <b>Downloads:</b> <br>${image.downloads}
                </p>
            </div>
        </div>
      `;}).join("");
        refs.gallery.innerHTML = markup;
};
// const onLoadMore = async (e) => {
//     try {
//         const response = await axios.get(
//             `https://pixabay.com/api/?key=${API_KEY}&q=${request}&image_type=photo&per_page=40&orientation=horizontal&safesearch=true`
//         );
//         console.log(response.data);
//         if (response.data.total === 0) {
//             Notiflix.Notify.failure("Sorry, there are no images matching your search query. Please try again.")
//         } else {
//             Notiflix.Notify.success("Hooray! We found totalHits images.")
//             renderImagesList(response.data.hits)
//         }    
//     } catch (error) {
//         console.log(error)
//     }

// }