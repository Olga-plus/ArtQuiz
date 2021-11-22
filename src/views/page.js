import image from '../img/img-game/118.jpg';
import createImage from '../js/createImg';
import menu from '../data/menu';
import {gamePaints, gameArtists, } from '../js/renderPages';


export async function render() {
    const maine = document.createElement('main');
    const containerInsert = document.querySelector('.container-main');
    containerInsert.appendChild(maine);
  
  //  const maine = document.querySelector('main');
    menu.forEach(element => {
        const buttonMenu = document.createElement('button');
        const aBtn = document.createElement('a');
        aBtn.href = `/#/${element}`;
        buttonMenu.classList.add(`button-menu` )
        buttonMenu.classList.add(`${element}`)
        aBtn.innerHTML = element; 
        buttonMenu.appendChild(aBtn);
        maine.appendChild(buttonMenu);
    });
  
    const myImage = await createImage(image);
    myImage.classList.add(`img-start`);
    maine.appendChild(myImage);

    const btmAuthors = document.querySelector('.author');
    const btmPictures = document.querySelector('.pictures');
    const btmAuthor = document.querySelector('.settings');

    btmAuthors.addEventListener('click', () => {gameArtists()});
    btmPictures.addEventListener('click', () => {gamePaints()});
  }
  
  export default {render};