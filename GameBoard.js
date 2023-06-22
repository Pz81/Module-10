import { GRID_SIZE, CELL_SIZE, OBJECT_TYPE, CLASS_LIST } from './setup';

class GameBoard {
    constructor(DOMGrid) {
        this.dotCount = o;
        this.grid = [];
        this.DOMGrid = DOMGrid;
    }

showgameStatus(gameWin) {
    const div =ducument.createElement('div');
    div.classList.add('game-status');
    div.innerHTML = `${gameWin ? 'WIN!' : 'GAME OVER!'}`;
    this.DOMGrid.appendChild(div);
}

createGrid(level)
}