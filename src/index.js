console.log('app.js loaded');

import  { domContentLoader } from'./display';
import "./styles.css";

const newGameButton = document.querySelector('#new-game');
newGameButton.addEventListener('click', () => {
    domContentLoader();
});