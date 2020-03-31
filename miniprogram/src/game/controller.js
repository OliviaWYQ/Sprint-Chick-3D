import view from './view.js';
import model from './model.js';

class Controller {
    constructor (){
        this.view = view;
        this.model = model;
        this.model.stageChange.attach((sender, args)=>{
            const stageName = args.stage
            switch (stageName ) {
                case 'game-over':
                    this.view.showGameOverPage();
                    break;
                case 'game':
                    this.view.showGamePage();
                    break;
                default:
            }
        })
    }

    showGameOverPage = () => {
        this.view.showGameOverPage()
    }

    restartGame = () => {
        this.view.restartGame();
    }

    init(){
        const gamePageCallbacks = {
            showGameOverPage: ()=>{
                this.model.setStage('game-over')
            }
        }

        const gameOverPageCallbacks = () => {
            this.model.setStage('game')
        }

        this.view.initGamePage(gamePageCallbacks);
        this.view.initGameOverPage(gameOverPageCallbacks)

    }
}

export default new Controller()
