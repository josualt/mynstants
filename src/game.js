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
    this.addButtons();
  }

  update() {}

  increment() {
    this.counter++;
    this.counterText.setText(this.counter);
    this.sound.add("click").play();
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
    for (let index = 0; index < 4; index++) {
      let button = new Button(this, 200 +(index * 15), 200);
      button.setInteractive();
      button.on(
        "pointerdown",
        () => {
          console.log("petxi");
          this.increment();
        },
        this,
      );
    }
  }
}
// petxi
