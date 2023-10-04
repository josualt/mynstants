import Phaser from "phaser";
import Game from "./game";
import GameOver from "./gameover";
import Bootloader from "./bootloader";
import Splash from "./splash";
/*
This is the main configuration file for the game.
*/
const config = {
    width: 600,
    height: 600,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    autoRound: false,
    parent: "contenedor",
    physics: {
        default: "arcade",
        arcade: {
            gravity: { y: 350 },
            debug: true
        }
    },
    scene: [
        Bootloader,
        Splash,
        Game,
        GameOver
    ]
};

const game = new Phaser.Game(config);
