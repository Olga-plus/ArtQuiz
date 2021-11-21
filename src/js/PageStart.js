import image from '../img/118.jpg';
import createImage from './createImage';
import  {gamePaints, gameArtists} from './gamePaints';


console.log('ku!');

let menu = ['artists', 'pictures', 'settings'];

export async function render() {
  const maine = document.createElement('main');
  const containerInsert = document.querySelector('.container-main');
  containerInsert.appendChild(maine);

//  const maine = document.querySelector('main');
  menu.forEach(element => {
    
      const subHeader = document.createElement('button');
      const aBtn = document.createElement('a');
      aBtn.href = `/#/${element}`;
      subHeader.classList.add(`button-menu` )
      subHeader.classList.add(`${element}`)
      aBtn.innerHTML = element; 
      subHeader.appendChild(aBtn);
      maine.appendChild(subHeader);
      
  });

  
  const myImage = await createImage(image);
  myImage.classList.add(`img-start`);
  maine.appendChild(myImage);

  const buttonPaints = document.querySelector('.pictures');
  const buttonArtists = document.querySelector('.artists');
  const buttonSettings = document.querySelector('.settings');



  buttonPaints.addEventListener('click', () => {gamePaints()});
  buttonArtists.addEventListener('click', () => {gameArtists()});
  buttonSettings.addEventListener('click', () => {gameSettings()});
}

export default {render};