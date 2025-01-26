/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((module) => {

eval("// import \"./styles.css\";\n\n\nclass Ship {\n    constructor(length, hits = 0){\n        this.length = length;\n        this.hits = hits;\n        this.sunk = false;\n    }\n\n    receivedHits() {\n        this.hits++;\n        this.isSunk();\n        if (this.sunk === true){ \n            return \"sunk\";\n        } else {\n            return \"hit\";\n        }\n    }\n\n    isSunk() {\n        if (this.hits >= this.length){\n            this.sunk = true;\n        }\n    }\n\n}\n\nclass Gameboard {\n    constructor(){\n        this.rows = 10;\n        this.cols = 10;\n        this.board = Array.from({ length: this.rows }, () => new Array(this.cols).fill(\".\"));\n    }\n\n    placeShip(shipLength, direction, x, y){\n        const ship = new Ship(shipLength);\n        \n        //check which way ship is facing\n        if(direction === 'horizontal'){\n            //check if ship is placed within boundary of board\n            if (y < 0 || y > this.cols) {\n                throw new Error(\"Trying to access index out of bounds\");\n            }\n\n            //place into arrays\n            for (let i = 0; i < ship.length; i++){\n                this.board[x][y + i] = '1';\n            }\n            console.log(this.board);\n        } else {\n            //check if ship fits into board\n            if (x < 0 || x > this.rows) {\n                throw new Error(\"Trying to access index out of bounds\");\n            }\n\n            //place into arrays\n            for (let i = 0; i < ship.length; i++){\n                this.board[x + i][y] = '1';\n            }\n            console.log(this.board);\n        }\n\n        return ship;\n    }\n}\n\nconst gameboard = new Gameboard;\n// gameboard.board[0][5] = 1\n// console.log(gameboard.board)\ngameboard.placeShip(3, 'vertical', 3, 3);\n\nmodule.exports = { Ship, Gameboard };\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;