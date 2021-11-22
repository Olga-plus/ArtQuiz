import  {renderCategoriesArtists} from '../views/authorPages';
import  {renderCategoriesPictures} from '../views/picturesPages';

export function gamePaints() {
    
    renderCategoriesPictures();
}

export function gameArtists() {

    renderCategoriesArtists();
}

export function gameSettings() {

    renderCategoriesArtists();
}

export default {gamePaints, gameArtists};