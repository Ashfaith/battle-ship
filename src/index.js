console.log('app.js loaded');
const { Ship, Gameboard, Player } = require('./modules');
import "./styles.css";

const startGame = document.querySelector('#start-game');
startGame.addEventListener('click', () =>{
    
    const playerOne = new Player;
    const playerTwo = new Player;
    console.log(playerOne.gameboard.board);
});