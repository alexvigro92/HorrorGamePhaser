import { CST } from '../CST.js'

export class LoadScene extends Phaser.Scene {
  constructor(){
    super({
      key: CST.SCENES.LOAD
    })
  }
  init(){

  }
  preload(){
    //importing all the files from assets
    this.load.image("logo","./assets/logo.png");
    this.load.image("options","./assets/options.png");
    this.load.image("play","./assets/play.png");
    this.load.image("cemetery","./assets/cemetery.jpg");

    //importing the player character
    this.load.spritesheet("skull","./assets/skull.png",{
      frameHeight: 64,
      frameWidth: 64
    });

    //importing the audio
    this.load.audio("title_music","./assets/heavyRain.mp3");

    //creating the loading bar
    let loadingBar = this.add.graphics({
      fillStyle: {
        color: 0xffffff
      }
    });

    //simulate large load
    // for (var i = 0; i < 100; i++) {
    //   this.load.spritesheet("skull" + i,"./assets/skull.png",{
    //     frameHeight: 64,
    //     frameWidth: 64
    //   })
    // }

    //creating the loading bar
    this.load.on("progress", (percent) => {
      loadingBar.fillRect(0,this.game.renderer.height / 2,this.game.renderer.width * percent,50);
      console.log(percent);
    })

    //when the load is complete
    this.load.on("complete", () => {
      // this.scene.start(CST.SCENES.MENU,"PASSING ARGUMENT TO MENU SCENE");
    })


  }

  create(){
    this.scene.start(CST.SCENES.MENU,"PASSING ARGUMENT TO MENU SCENE");
    // this.scene.launch();
  }
}
