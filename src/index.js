console.log('app.js loaded');

import  { domContentLoader } from'./display';
import "./styles.css";

const startGameButton = document.querySelector('#start-game');
startGameButton.addEventListener('click', () => {
    domContentLoader();
});

//test