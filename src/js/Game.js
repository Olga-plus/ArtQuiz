// import {linkJPG, questions} from '../data/sortData';
import questions from '../data/sortData';
import removeEl from './removeEl';
import { linkJPG } from '../data/sortData';
import createImage from './createImg';
import getRandomNum from './rundomNum';

// "Hyper Text Markup Language Stands For?", ["JQuery", "XHTML", "CSS", "HTML"], "HTML"
export async function gameQuestionsArr(a) {
   let arr = [];
   let arrVariantAnswer = [linkJPG[a[0].imageNum]];

arr.push(`КАКУЮ КАРТИНУ НАПИСАЛ ${a[0].author} ?`)
for(let i = 0; i < 3; i++) {
    let rundom = getRandomNum(0, 240)
    console.log('hey', rundom, a[0].imageNum )
    if (rundom !== a[0].imageNum){
        arrVariantAnswer.push(linkJPG[rundom])
    }
    // return arrVariantAnswer
}
arr.push(arrVariantAnswer);
arr.push(linkJPG[a[0].imageNum])

console.log(arr);

const header = document.querySelector('header');
    const h1 = document.querySelector('h1');
    h1.innerHTML = 'score';

    const question = document.createElement('h2');
    question.innerHTML = `КАКУЮ КАРТИНУ НАПИСАЛ ${a[0].author} ?`
    header.appendChild(question);

    removeEl('.container-main');
    const container = document.querySelector('.container-main');
    container.id = 'four-img';
    const sectionAswer = document.createElement('div');
        for (let i = 0; i < 4; i++){
        const imgSection = document.createElement('div');
        imgSection.classList.add('img-name');
        let imageC = await createImage(arrVariantAnswer[i]);
        imageC.classList.add('img-card');
        // sectionCard.appendChild(imgSection);
        imgSection.appendChild(imageC);
        container.appendChild(imgSection);
    }

// return arr;
}

export async function gameQuestionsArrName(a) {
    let arr = [];
    let arrVariantAnswer = [linkJPG[a[0].imageNum]];
 
 arr.push(`КАКУЮ КАРТИНУ НАПИСАЛ ${a[0].author} ?`)
 for(let i = 0; i < 3; i++) {
     let rundom = getRandomNum(0, 240)
     console.log('hey', rundom, a[0].imageNum )
     if (rundom !== a[0].imageNum){
         arrVariantAnswer.push(a[i].author)
     }
     // return arrVariantAnswer
 }
 arr.push(arrVariantAnswer);
 arr.push(linkJPG[a[0].imageNum])
 
 console.log(arr);
 
 const header = document.querySelector('header');
     const h1 = document.querySelector('h1');
     h1.innerHTML = 'score';
 
     const question = document.createElement('h2');
     question.innerHTML = `КТО АВТОР ДАННОЙ КАРТИНЫ?`
     header.appendChild(question);
 
     removeEl('.container-main');
     const container = document.querySelector('.container-main')
     container.id = 'four-author';
     
     const sectionAswer = document.createElement('div');

        const imgSection = document.createElement('div');
            imgSection.classList.add('img-name');
            let imageC = await createImage(linkJPG[a[0].imageNum]);
            imageC.classList.add('img-card');
            // sectionCard.appendChild(imgSection);
            imgSection.appendChild(imageC);
            container.appendChild(imgSection);

         for (let i = 0; i < 4; i++){
            const answerText = document.createElement('div');
            answerText.classList.add('answer-text');
            answerText.innerHTML = a[i].author
            container.appendChild(answerText);
     }
 
 // return arr;
 }
 

export async function gameTenQuestionsArr(){
    let tenQuestion = [];
}

export async function createPageQ(a) {
    const header = document.querySelector('header');
    const h1 = document.querySelector('h1');
    h1.innerHTML = 'score';

    const question = document.createElement('h2');
    question.innerHTML = `КАКУЮ КАРТИНУ НАПИСАЛ ${a[0].author} ?`
    header.appendChild(question);

    removeEl('.container-main');
    const container = document.querySelector('.container-main')
    const sectionAswer = document.createElement('div');
        for (let i = 0; i < 4; i++){
        const imgSection = document.createElement('div');
        imgSection.classList.add('img-name');
        let imageC = await createImage(arrVariantAnswer[i]);
        imageC.classList.add('img-card');
        // sectionCard.appendChild(imgSection);
        imgSection.appendChild(imageC);
        container.appendChild(imgSection);
    }

}

export default {gameQuestionsArr, gameQuestionsArrName};