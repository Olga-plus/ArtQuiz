import {render} from '../views/page';
import {removeEl} from './removeEl';

export function backToHome() {
    const header = document.querySelector('.home-container')
    header.remove()
    removeEl('.container-main');
    render();
}