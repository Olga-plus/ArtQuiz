import {linkJPG, questions,jpgs} from '../js/SortData'
import categories from '../image-data/categoriesName';
import createImage from '../js/createImage';
import iconHome from '../img/icon-home.svg';
import {backToHome} from '../js/backToHome';

const h1 = document.querySelector('h1');
const parenth1 = h1.parentNode;

const container = document.querySelector('.container-main')


export async function renderCategoriesArtists() {
    const maine = document.querySelector('main');
    maine.remove();

    const headerContainer = document.createElement('div');
    headerContainer.classList.add('home-container');
    parenth1.insertBefore(headerContainer,h1)

    const divContain = document.createElement('div');
    divContain.classList.add('card-container');


    const homeIcon = await createImage(iconHome);
    homeIcon.classList.add('icon-home');
    headerContainer.appendChild(homeIcon);
    //вставляем 
    await Promise.all(categories.map(async (element, index) => {
        const sectionCard = document.createElement('div');
        const sectionDiv = document.createElement('div');
        sectionCard.classList.add('card')
        sectionDiv.classList.add('name')
        sectionDiv.innerHTML = element; 

        divContain.appendChild(sectionCard);
        sectionCard.appendChild(sectionDiv)
        container.appendChild(divContain);

        const imgSection = document.createElement('div');
        imgSection.classList.add('img-name');
        let imageC = await createImage(linkJPG[questions.questionsByAuthor[index][0].imageNum]);
        imageC.classList.add('img-card');
        sectionCard.appendChild(imgSection);
        imgSection.appendChild(imageC);
    }) 
    );

    headerContainer.addEventListener('click', () => {backToHome()});
}

export async function renderCategoriesPictures() {
    const maine = document.querySelector('main');
    maine.remove();

    const headerContainer = document.createElement('div');
    headerContainer.classList.add('home-container');
    parenth1.insertBefore(headerContainer,h1)

    const divContain = document.createElement('div');
    divContain.classList.add('card-container');


    const homeIcon = await createImage(iconHome);
    homeIcon.classList.add('icon-home');
    headerContainer.appendChild(homeIcon);
    //вставляем 
    await Promise.all(categories.map(async (element, index) => {
        const sectionCard = document.createElement('div');
        const sectionDiv = document.createElement('div');
        sectionCard.classList.add('card')
        sectionDiv.classList.add('name')
        sectionDiv.innerHTML = element; 

        divContain.appendChild(sectionCard);
        sectionCard.appendChild(sectionDiv)
        container.appendChild(divContain);

        const imgSection = document.createElement('div');
        imgSection.classList.add('img-name');
        let imageC = await createImage(linkJPG[questions.questionsByName[index][0].imageNum]);
        imageC.classList.add('img-card');
        sectionCard.appendChild(imgSection);
        imgSection.appendChild(imageC);
    }) 
    );

    headerContainer.addEventListener('click', () => {backToHome()});
}

export default {renderCategoriesPictures, renderCategoriesArtists};