import '../js/Page';
import image from '../img/118.jpg'
import createImage from '../js/createImage';


console.log('ku!');

let menu = ['Художники', 'Картины', 'Настройки']
const maine = document.querySelector('main');
export async function render() {
 
  menu.forEach(element => {
    
      // const subHeader = document.createElement('button');
      // subHeader.classList.add('button-menu')
      // subHeader.innerHTML = element; 
      // maine.appendChild(subHeader);
      // document.body.appendChild(subHeader);
      
  });

  
  const myImage = await createImage(image);
  maine.appendChild(myImage);

 

}

export default { render, createImage};
