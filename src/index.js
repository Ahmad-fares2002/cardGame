
import Phaser from "phaser";



class example extends Phaser.Scene{
  preload () {
   this.load.atlas('cards','assets/cards.png','assets/cards.json')
   this.load.image('background','assets/background.jpg')
   this.load.image('hand','assets/hand.png')
   this.load.image('nextLevel','assets/nextLevel.png')
 }
 
  create () {
   const back = this.add.image(0,0,'background')  
   .setOrigin(0,0)

   this.nextLevel = this.add.image(config.width/2,config.height/2,'nextLevel')  
   .setOrigin(0.5)
   this.nextLevel.alpha = 0
  
   
 
 
   
   var frames = this.textures.get('cards').getFrameNames();
  
     var x = config.width/2 - 10*15;
     var y = config.height+40;
     var rotation = -1
     var objectx;
     var objecty;
     let moveStart = true;
     let hoverstart = true
     for (var i = 0; i < 20; i++)
     {
       this.image =  this.add.image(x, y, 'cards', Phaser.Math.RND.pick(frames))
       this.image.setScale(.5)
     
       this.image.setInteractive();
       this.image.setOrigin(0,1)
       this.input.setDraggable(this.image);
       this.image.rotation = rotation
 
       rotation += 0.07
       
       
         x += 15;
 
     }
     
 
     var zone = this.add.zone(100, 50, 350, 100).setRectangleDropZone(350, 100);
     var graphics = this.add.graphics();
     graphics.lineStyle(2, 0xffff00);
    
 
 
     this.hand = this.add.image(500,config.height-50,'hand')
     this.hand.setOrigin(1,1)
     this.hand.setScale(0.1)
     this.hand.setTint(0XFFFFFF)
     this.hand.tintFill= true
     this.hand.flipY = true

 
 
 
 this.input.on('dragstart', function (pointer, gameObject, dragX, dragY) {
 
   if(hoverstart){
             objectx = gameObject.x
             rotation = gameObject.rotation
             objecty = gameObject.y
             console.log(objectx)
          }
 
   
 
  
 });
 this.input.on('drag', function (pointer, gameObject, dragX, dragY) {
  this.hand.destroy()

  this.hand = this.add.image(190,140,'hand')
  this.hand.setOrigin(1,1)
  this.hand.setScale(0.1)
  this.hand.setTint(0XFFFFFF)
  this.hand.tintFill= true
  this.hand.flipY = true
  this.hand.angle =90

   gameObject.x = dragX;
   gameObject.y = dragY;
 
 
 
 
 
 },this);
 
 let a;
 this.input.on('drop', function (pointer, gameObject, dropZone) {
   
   gameObject.x = dropZone.x;
   gameObject.y = dropZone.y;
   gameObject.rotation = 0
   if(a){
     a.destroy()
     
   }
   a = gameObject;
   alert('You won')
   gameObject.input.enabled = false;
 
   
 
 });
 this.input.on('dragend', function (pointer, gameObject) {
   gameObject.setOrigin(0,1)
       if(gameObject.x != zone.x && gameObject.y != zone.y){
         
         gameObject.x = objectx
         gameObject.rotation = rotation
         gameObject.y = objecty
        
       }
       else{
        gameObject.setOrigin(0,0)
     
        
       }
 


 
 
 });
 

 
 
  

 
 
 
   }
   


   update(time){
 
}
}
const config = {
  type: Phaser.AUTO,
  width: 555,
  height: 260,
  physics: {
    default: 'arcade',
    arcade: {
      debug: true,
    }
  },
  scene: [example]
};

new Phaser.Game(config);


