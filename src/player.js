class Player extends Phaser.GameObjects.Rectangle {
    constructor (scene, x, y, number) {
      super(scene, x, y, 32, 32, 0x00ff00)
      this.setOrigin(0.5)
      this.scene = scene;
      this.scene.add.existing(this);
      this.scene.physics.add.existing(this);
      this.setScale(1)
      this.jumping = false;
      this.invincible = false;
      this.health = 10;
      this.body.mass = 10;
      this.body.setDragY = 10;+
      this.body.setVelocityX(100)
    }  
  }
export default Player;
  