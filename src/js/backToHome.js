import {render} from '../views/page';
import {removeEl} from './removeEl';

export function backToHome() {
    const header = document.querySelector('.home-container')
    const container = document.querySelector('.container-main')
    container.removeAttribute('id')
    header.remove()
    removeEl('.container-main');
    const h2 = document.querySelector('h2');
    if(h2){
    h2.remove(); 
    }
    const h1 = document.querySelector('h1');
    if(h1){
        h1.innerHTML = 'ARTQUIZ'; 
        }
    
    render();
}