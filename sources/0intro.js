"use strict"
const level11State = {

  preload: function() {
    game.load.image("gameName", "images/level1Stuff/gamename2.png")
    game.load.image("begin", "images/level1Stuff/begin.png")
    game.load.image("beginb", "images/level1Stuff/beginb.png")
    game.load.image("instructions", "images/level1Stuff/instructions2.png")
    game.load.image("understoodb", "images/level1Stuff/understoodb.png")
    game.load.image("names", "images/level1Stuff/names.png")
    game.load.audio("lobbym", ["sound/Doki Doki Literature Club! OST - Ohayou Sayori!.mp3"])
    game.load.audio("music", ["sound/Undertale OST - Home Extended.mp3"])
    game.load.audio("clickm", ["sound/Minecraft drop block sound effect.wav"])

    game.load.image("house", "images/level1Stuff/house.png")
    game.load.image("youcant", "images/level1Stuff/youcant.png")
    game.load.image("aler", "images/other/aler.png")
    game.load.image("kitchenb", "images/level1Stuff/kitchenb.png")
    game.load.image("unlessb", "images/level1Stuff/unlessb.png")
    game.load.image("bathroomb", "images/level1Stuff/bathroomb.png")
    game.load.image("bedroomb", "images/level1Stuff/bedroomb.png")
    game.load.image("livingroomb", "images/level1Stuff/livingroomb.png")
    game.load.image("mirrorb", "images/level1Stuff/mirrorb.png")
    game.load.image("hiddenroomb", "images/level1Stuff/hiddenroomb.png")
    game.load.image("cross", "images/general/crossed2.png")

    game.load.image("milk", "images/KitchenStuff/milk.png")
    game.load.image("egg", "images/KitchenStuff/egg.png")
    game.load.image("kitchen", "images/KitchenStuff/kitchen.png")
    game.load.image("coloring", "images/KitchenStuff/coloring.png")
    game.load.image("KNPB", "images/KNP/KNPB.png")

    preloadSoundb()
    preloadRecipes()
    preloadHouseB()

    game.load.image("lg", "images/LivingStuff/lg.jpg")
    game.load.image("LGPB", "images/LGP/LGPB.png")
    game.load.image("vanilla", "images/LivingStuff/vanilla.png")
    game.load.image("sugar", "images/LivingStuff/sugar.png")

    game.load.image("test", "images/KNP/test3.png")
    game.load.image("wrong", "images/KNP/wrong.png")
    game.load.image("correct", "images/KNP/correct.png")
    game.load.image("throwoff", "images/KNP/throwoff.png")

    game.load.image("test", "images/KNP/test3.png")
    game.load.image("wrong", "images/KNP/wrong.png")
    game.load.image("correct", "images/KNP/correct.png")
    game.load.image("throwoff", "images/KNP/throwoff.png")
  },

  create: function() {
    begin = game.add.image(0, 0, "begin")
    names = game.add.image(0, 0, "names")

    beginb = game.add.sprite(500, 600, "beginb")
    beginb.anchor.setTo(0.5)
    beginb.scale.setTo(0.35)
    beginb.inputEnabled = true
    beginb.events.onInputDown.add(beginGame)

    gameName = game.add.sprite(500, 250, "gameName")
    gameName.anchor.setTo(0.5)
    gameName.scale.setTo(1, 1.5)

    lobbym = game.add.audio("lobbym")
    lobbym.play()
    lobbym.loop = true

    music = game.add.audio("music")
    music.loop = true

    clickm = game.add.audio("clickm")
  },


  update: function() {
    if (toInstructions == true) {
      instructions = game.add.image(0, 0, "instructions")

      understoodb = game.add.image(500, 600, "understoodb")
      understoodb.anchor.setTo(0.5)
      understoodb.scale.setTo(0.35)
      understoodb.inputEnabled = true
      understoodb.events.onInputDown.add(closeInstructions)
      toInstructions = false
    }
  }
}

function beginGame() {
  clickm.play()

  toInstructions = true
  beginb.destroy()
  begin.destroy()
}
function closeInstructions() {
  clickm.play()

  lobbym.stop()
  game.state.start('first', level1State)
  music.play()
}
let lobbym, clickm, music, names
//make hidden ing. use x coordinates, so that clicks by mistakes don't happen.