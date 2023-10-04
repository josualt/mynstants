
class Button extends Phaser.GameObjects.Sprite  {
    constructor(scene, x, y) {
      super(scene, x, y, 'button')
      this.setOrigin(0)
      this.scene = scene
      this.scene.add.existing(this)
      this.scene.physics.add.existing(this)
      this.body.allowGravity = false
      this.body.immovable = true
      //this.body.collideWorldBounds = true
      //this.move()
    }
  }
  export default Button