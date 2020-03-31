import Controller from './controller.js';

class Game {
    constructor(){
        this.controller = Controller;
    }

    init(){
        this.controller.init();
    }
}

export default new Game()
