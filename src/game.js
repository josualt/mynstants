import Button from "./button";

export default class Game extends Phaser.Scene {
  constructor() {
    super({ key: "game" });
    this.player = null;
    this.score = 0;
    this.scoreText = null;
  }

  create() {
    this.cameras.main.setBackgroundColor(0xffffff);
    this.counter = 0;
    this.counterText = this.add
      .bitmapText(200, 100, "arcade", "0", 20)
      .setOrigin(0.5);
      this.audios = ['roblox-oof','click','dramatic','badumtss']
    this.addButtons();
  }

  update() {}

  increment(value) {
    console.log(value)
    this.counter++;
    this.counterText.setText(this.counter);
    this.sound.add(this.audios[value]).play();
    if (this.counter === 10) {
      this.flashMessage = this.add
        .bitmapText(200, 300, "arcade", "iaaa", 30)
        .setOrigin(0.5);
      this.tweens.add({
        targets: this.flashMessage,
        alpha: { from: 1, to: 0 },
        duration: 5000,
        onComplete: () => {
          this.flashMessage.destroy();
        },
      });
    }
}

  addButtons() {
    for (let row = 0; row < 2; row++) {
        for (let index = 0; index < 4; index++) {
            let button = new Button(this, 100 +(index * 100), 100 +(row * 200));
            button.setInteractive();
            button.setScale(0.5)
            button.on(
              "pointerdown",
              () => {
                console.log("petxi");
                this.increment(index + (1 * row));
              },
              this,
            );
          }  
    }

  }
}
// petxi
