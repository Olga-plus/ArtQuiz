import { questions } from '../data/sortData';
import categories from '../data/catiegoriesName';
import  {renderCategoriesArtists} from '../views/authorPages';
import  {renderCategoriesPictures} from '../views/picturesPages';
import {gameQuestionsArr, gameQuestionsArrName} from './Game';
// console.log( questions)
// questionsByAuthor: newQuestionsByAuthor,
// questionsByName: newQuestionsByName,
export async function gamePaints() {
    
    await renderCategoriesPictures();
    const containeCard = document.querySelector('.card-container');
    containeCard.onclick = function(event) {
        let card = event.target.closest('.card');
        if(!card){
            return
        }
        let gameCategory = questions.questionsByAuthor[card.id];
        gameQuestionsArr(gameCategory);
    //    console.log('game');
    }
    // await
    
}

export async function gameArtists() {

    await renderCategoriesArtists();
    const containeCard = document.querySelector('.card-container');
    containeCard.onclick = function(event) {
        let card = event.target.closest('.card');
        if(!card){
            return
        }
        let gameCategory = questions.questionsByAuthor[card.id];
    gameQuestionsArrName(gameCategory)
}
}

export function gameSettings() {

    renderCategoriesArtists();
}

export default {gamePaints, gameArtists};