class Coin extends Phaser.GameObjects.Sprite {
    constructor (scene, x, y) {
        super(scene, x, y, "coin")
        scene.add.existing(this)
        scene.physics.add.existing(this);
        this.body.setAllowGravity(false);
        const alpha = 1/Phaser.Math.Between(1, 3)

        this.init();
    }
    
    init(){
        const coinAnimation = this.scene.anims.create({
            key: "coin",
            frames: this.scene.anims.generateFrameNumbers("coin", { start: 0, end: 7 }, ),
            frameRate: 8,
        });
        this.play({ key: "coin", repeat: -1 });
    }
}

export default Coin