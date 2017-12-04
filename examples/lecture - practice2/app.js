import Component from './component.js';
import auth from './auth';
window.auth = auth;

const one = new Component(target, '<h1>Component One</h1>');
const two = new Component(target, '<h1>Component Two</h1>');

document
    .querySelectorAll('a')
    .forEach((item) => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            console.log([e.target]);
            switch(e.target.dataset.ref) {
                case 'one':
                    one.render();
                break;
                case 'two':
                    two.render();
                break;
            }
        });
    })
    