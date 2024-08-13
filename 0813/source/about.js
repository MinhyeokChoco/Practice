import hello_word from './hello.js'; // entry file
import world_word from './world.js'; // entry file
import css from './style.css';
document.querySelector('#root').innerHTML = world_word + ' ' + hello_word;
console.log('css', css);