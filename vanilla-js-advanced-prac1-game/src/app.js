import dd from 'debugdump';

var gamePlaySpeed = 1000;
var gameMainLoopSpeed = 100;


const factoryTemplate = (id, title) => {
    let name = title
        .toLowerCase()
        .replace(/[ _.]/g, '-');

    // let data = {
    //     id: id,
    //     name: name,
    // };

    let factoryWrapperEl = document.createElement('div');
    let titleEl = document.createElement('h3');
    let actionsWrapperEl = document.createElement('div');
    let increaseButtonEl = document.createElement('button');
    let decreaseButtonEl = document.createElement('button');
    let statsWrapperEl = document.createElement('div');


    return {
        data: {
            id: id,
            name: name,

        },
        cost: {
            currencies: []
        },
        produce: {
            currencies: []
        },
        elements: {
            factory: factoryWrapperEl
        },
        methods: {},
        computed: {}
    };
}

const currencyTemplate = () => {

};

/*
* ************************************************************
* Game GUI
* */
const appDiv = document.getElementById('app');
const workFactory = new factoryTemplate('work', 'Work');

const factories = new Map();
factories.set(workFactory.name, workFactory);
factories.forEach((factory, factoryName) => {
    dd(factory);
    appDiv.appendChild(factory.elements.factory);
});


/*
* ************************************************************
* Game Speed Controls
* */
function setGameSpeed(newGameSpeed) {
    gamePlaySpeed = newGameSpeed;
}

let gameSpeedSlowEl = document.createElement("button");
gameSpeedSlowEl.setAttribute('id', 'game-speed-slow');
gameSpeedSlowEl.innerText = "Game Speed >";


let gameSpeedNormalEl = document.createElement("button");
gameSpeedNormalEl.setAttribute('id', 'game-speed-normal');
gameSpeedNormalEl.innerText = "Game Speed >>";


let gameSpeedFastEl = document.createElement("button");
gameSpeedFastEl.setAttribute('id', 'game-speed-fast');
gameSpeedFastEl.innerText = "Game Speed >>> ";


let gamePauseEl = document.createElement("button");
gamePauseEl.setAttribute('id', 'game-pause');
gamePauseEl.innerText = "Pause Game | | ";

appDiv.appendChild(gameSpeedSlowEl);
appDiv.appendChild(gameSpeedNormalEl);
appDiv.appendChild(gameSpeedFastEl);
appDiv.appendChild(gamePauseEl);

document.addEventListener('click', (e) => {
        if (!e.target) {
            return;
        }
        if (e.target.id === "game-speed-slow") {
            gamePlaySpeed = 2000;
        } else if (e.target.id === "game-speed-normal") {
            gamePlaySpeed = 1000;
        } else if (e.target.id === "game-speed-fast") {
            gamePlaySpeed = 500;
        } else if (e.target.id === "game-pause") {
            gamePaused = !gamePaused;
        }
    }
);


/*
* ************************************************************
* Main game loop & update timer.
* */
var gameAwaitingUpdate = true;
var gamePaused = false;

function updateGame() {
    let tickDateTime = new Date();
    dd('tick - ' + tickDateTime.toLocaleDateString() + " - " + tickDateTime.toLocaleTimeString());
}

function main() {

    if (gamePaused) {
        dd('game has been paused');
        return;
    }
    if (gameAwaitingUpdate) {
        gameAwaitingUpdate = false;
        setTimeout(() => {
            gameAwaitingUpdate = true;
            updateGame()
        }, gamePlaySpeed); // 33 milliseconds = ~ 30 frames per sec
    }
    dd('game looped ! Game Speed = ' + gamePlaySpeed);

}

setInterval(main, gameMainLoopSpeed); // 33 milliseconds = ~ 30 frames per sec

