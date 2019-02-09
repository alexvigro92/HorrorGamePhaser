import { CST } from "../CST.js"

export class MenuScene extends Phaser.Scene {
  constructor(){
    super({
      key: CST.SCENES.MENU
    })
  }
  init(data){
    console.log(data);
    console.log("GOT IT!!");
  }
  create(){//creating menu screen

    //create images z order
    this.add.image(this.game.renderer.width/2,((this.game.renderer.height/2) - 150),"logo").setDepth(1).setScale(.6,.4);
    this.add.image(0,0,"cemetery").setOrigin(0).setDepth(0);
    let playButton = this.add.image(((this.game.renderer.width/2)-150),((this.game.renderer.height/2)+120),"play").setDepth(2).setScale(.4);
    let optionsButton = this.add.image(((this.game.renderer.width/2)+150),((this.game.renderer.height/2)+120),"options").setDepth(3).setScale(.4);
    
    //create sprites
    // let skullSprite = this.add.sprite(100,100,"skull");
    // skullSprite.setScale(1.5);
    // skullSprite.setVisible(false);

    //create audio, disable pauseonblur
    // this.sound.pauseOnBlur = false;
    this.sound.play("title_music",{
      loop: true
    });

    //create animation
    // this.anims.create({
    //   key: "skullWalk",
    //   frameRate: 10,
    //   repeat: -1,
    //   frames: this.anims.generateFrameNumbers("skull",{
    //     frames: [1,2,3,4,5,6,7,8]
    //   })
    // })

    //make image interactives
    // skullSprite.play("skullWalk")

    playButton.setInteractive();
    optionsButton.setInteractive();

    playButton.on("pointerover",() => {
      playButton.setScale(.5);
    })
    playButton.on("pointerout",() => {
      playButton.setScale(.4);
    })
    playButton.on("pointerup",() => {
    })
    optionsButton.on("pointerover",() => {
      optionsButton.setScale(.5);
    })
    optionsButton.on("pointerout",() => {
      optionsButton.setScale(.4);
    })
    optionsButton.on("pointerup",() => {
    })

  }
}
