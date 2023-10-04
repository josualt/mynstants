export default class Bootloader extends Phaser.Scene{
    constructor() {
        super({ key: "bootloader" });
      }

      preload(){
        this.createBars();
        this.load.on(
          "progress",
          function(value) {
            this.progressBar.clear();
            this.progressBar.fillStyle(0x88d24c, 1);
            this.progressBar.fillRect(
              this.cameras.main.width / 4,
              this.cameras.main.height / 2 - 16,
              (this.cameras.main.width / 2) * value,
              16
            );
          },
          this
        );
        this.load.on("complete", () => {
          this.scene.start("game");
        }, this);

        this.load.bitmapFont("splash", "assets/fonts/daydream.png", "assets/fonts/daydream.xml");
        this.load.bitmapFont("arcade", "assets/fonts/arcade.png", "assets/fonts/arcade.xml");
        //this.load.image('background', 'assets/images/background.jpg');
        this.load.audio('splash', 'assets/sounds/splash.mp3');
        this.load.audio('badumtss', 'assets/sounds/badumtss.mp3');
        this.load.audio('dramatic', 'assets/sounds/dramatic.mp3');
        this.load.audio('roblox-oof', 'assets/sounds/roblox-oof.mp3');
        this.load.audio('click', 'assets/sounds/click.mp3');
        //this.load.spritesheet('player', 'assets/images/player.png', { frameWidth: 32, frameHight: 32 })
       // this.load.image("enemy", "assets/images/enemy.png");
             this.load.image("bricks", "assets/maps/bricks.png");
             this.load.image("button", "assets/images/button.png");
             this.load.image("background", "assets/maps/background.png");
       this.load.tilemapTiledJSON('scene0', 'assets/maps/scene0.json')
       this.load.image("cookie", "assets/images/cookie.png");
      }
      
      create(){
      }

      createBars() {
        this.loadBar = this.add.graphics();
        this.loadBar.fillStyle(0x008483, 1);
        this.loadBar.fillRect(
          this.cameras.main.width / 4 - 2,
          this.cameras.main.height / 2 - 18,
          this.cameras.main.width / 2 + 4,
          20
        );
        this.progressBar = this.add.graphics();
      }
    }
