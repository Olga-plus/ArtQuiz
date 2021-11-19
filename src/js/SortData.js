import images from "../image-data/images";
import image from '../img/118.jpg'
import createImage from '../js/createImage'
import img from '../image-data/img/12.jpg'


const solitArr = (arr, chunks) =>[
    ...Array(chunks),
].map((_, c) => arr.filter((n, index) => index % chunks === c) )
const questionsByAuthor = [];
const questionsByName = [];

images.forEach((item, index) => {
    if (index % 2 === 0) {
        questionsByAuthor.push({
            ...item,
        type: 'author',
    });
    }

    if (index % 2 !== 0) {
        questionsByName.push({
            ...item,
        type: 'author',
    });
    }
});

const uniqAnswersByAuthor = [... new Set(questionsByAuthor.map(item => item.author))];
const uniqAnswersByName = [... new Set(questionsByName.map(item => item.author))];

const newQuestionsByAuthor = solitArr(questionsByAuthor, 12);
const newQuestionsByName = solitArr(questionsByName, 12)

console.log('ByAuthor',newQuestionsByAuthor);
console.log(newQuestionsByName);

const answers = {
    uniqAnswersByAuthor,
    uniqAnswersByName,
}

const questions = {
    questionsByAuthor: newQuestionsByAuthor,
    questionsByName: newQuestionsByName,

}
console.log(questions);
//----------------------------------------------------------------------

const reqSvgs = require.context ( '../image-data/img', true, /\.jpg$/ );

const svgs = reqSvgs
  .keys ()
  .reduce ( ( images, path ) => {
    images[path] = reqSvgs ( path )
    return images
  }, {} )

  console.log(Object.values(svgs));
  let linkJPG = Object.values(svgs);

const maine = document.querySelector('main');
const container = document.querySelector('.container-main')

 const section = ['Portrait', 'Landscape', 'Still Life', 'Graphic', 'Antique', 'Avant-Garde', 'Renaissance', 'Surrealism', "Kitsch", "Minimalism", "Avangard", "Industrial"]


export async function renderCard() {
    maine.remove();
    const divContain = document.createElement('div');
    divContain.classList.add('card-container');

    
    section.forEach((element, index) => {
        const sectionDiv = document.createElement('div');
        sectionDiv.classList.add('card')
        sectionDiv.innerHTML = element; 
        divContain.appendChild(sectionDiv);
        container.appendChild(divContain);

        const imgSection = document.createElement('div');
        imgSection.classList.add('img-section');
        // let imageC = async() => { await createImage(linkJPG[index])};
        let imageC =  createImage(linkJPG[index]);
        // imgSection.innerHTML = 
        sectionDiv.appendChild(imgSection);
        imgSection.appendChild(imageC);


    }); 


    const cardImageK = await createImage(linkJPG[0]);
    container.appendChild(cardImageK);

    const cardImage = await createImage(img);
    container.appendChild(cardImage);
}
 export default renderCard;
