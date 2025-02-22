"use strict"
const level8State = {

  preload: function() {

  },

  create: function() {
    createBack()
    createSoundb()
    beenRoom = true

    lg = game.add.image(500, 0, "lg")
    lg.anchor.setTo(0.5, 0)
    lg.scale.setTo(0.72)

    vanilla = game.add.image(555, 415, "vanilla")
    vanilla.scale.setTo(0.75)
    vanilla.inputEnabled = true
    vanilla.events.onInputDown.add(getVanilla)

    sugar = game.add.image(265, 415, "sugar")
    sugar.scale.setTo(0.75)
    sugar.inputEnabled = true
    sugar.events.onInputDown.add(getSugar)

    LGPB = game.add.image(580, 175, "LGPB")
    LGPB.scale.setTo(0.75)
    LGPB.inputEnabled = true
    LGPB.events.onInputDown.add(goToLGPB)

    createHouseB()
    createRecipes()
  },

  update: function() {
    if (gotVanilla == true) {
      vanilla.alpha = 0
    }
    if (doneClock == true) {
      if (gotSugar == false) {
        sugar.alpha = 1
      }
      LGPB.inputEnabled = false
    }
    if (doneClock == false) {
      sugar.alpha = 0
    }
    if (gotSugar == true) {
      sugar.alpha = 0
    }
    if (LGPB.input.pointerOver()) {
      LGPB.tint = 0x90ddff;
    }
    else {
      LGPB.tint = 0xffffff;
    }
    updateSoundb()
  }
}
function goToLGPB() {
  clickm.play()

  game.state.start('seventh', level7State)
}
function getVanilla() {
  clickm.play()

  gotVanilla = true
  vanilla.destroy()
}
function getSugar() {
  clickm.play()

  gotSugar = true
  sugar.destroy()
}