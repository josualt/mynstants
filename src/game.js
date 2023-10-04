import Button from "./button";

export default class Game extends Phaser.Scene {
    constructor () {
        super({ key: "game" });
        this.player = null;
        this.score = 0;
        this.scoreText = null;
    }

    create(){
        this.cameras.main.setBackgroundColor(0xFFFFFF);
        this.button = new Button(this, 200, 200)
        this.button.setInteractive()
        this.button.on("pointerdown", () => {
            console.log('petxi')
            this.increment()
        },this )
        this.counter = 0;
        this.counterText = this.add.bitmapText(200,100, "arcade",'0', 20).setOrigin(0.5)
    }

    update(){

    }

    increment(){
        this.counter++
        this.counterText.setText(this.counter)
        this.sound.add('click').play()
        if (this.counter === 10) {
        this.flashMessage = this.add.bitmapText(200,300, "arcade",'iaaa', 30).setOrigin(0.5)
        this.tweens.add({
            targets: this.flashMessage,
            alpha: { from: 1, to: 0 },
            duration: 5000,
            onComplete: () => { this.flashMessage.destroy() }
          })
        }
        
    }
}
//petxi