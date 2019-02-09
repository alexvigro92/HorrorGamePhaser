/***@type {import("./typescrip/phaser")} */

import {LoadScene} from "./scenes/LoadScene.js";
import {MenuScene} from "./scenes/MenuScene.js";

let game = new Phaser.Game({
  width:1100,
  height:700,
  scene:[
    LoadScene,
    MenuScene
  ],
  render:{
    pixelArt: true, //this works to set the sprites like pixels and dont blur it
  }
})
