"use strict"
const level2State = {

  preload: function() {
  },

  create: function() {
    createBack()
    createSoundb()
    beenRoom = true

    kitchen = game.add.image(500, 0, "kitchen")
    kitchen.scale.setTo(0.72)
    kitchen.anchor.setTo(0.5, 0)

    egg = game.add.image(415, 435, "egg")
    egg.scale.setTo(0.75)
    egg.inputEnabled = true
    egg.events.onInputDown.add(getEgg)

    coloring = game.add.image(562, 365, "coloring")
    coloring.scale.setTo(0.75)
    coloring.inputEnabled = true
    coloring.events.onInputDown.add(getColoring)

    KNPB = game.add.image(407, 190, "KNPB")
    KNPB.scale.setTo(0.75)
    KNPB.inputEnabled = true
    KNPB.events.onInputDown.add(goToKNPB)

    milk = game.add.image(600, 195, "milk")
    milk.inputEnabled = true
    milk.events.onInputDown.add(getMilk)

    createRecipes()
    createHouseB()
  },

  update: function() {
    if (gotEgg == true) {
      egg.alpha = 0
    }
    if (gotColoring == true) {
      coloring.alpha = 0
    }
    if (doneTest == true) {
      if (gotMilk == false) {
        milk.alpha = 1
      }
      KNPB.inputEnabled = false
    }
    if (doneTest == false) {
      milk.alpha = 0
    }
    if (gotMilk == true) {
      milk.alpha = 0
    }

    if (KNPB.input.pointerOver()) {
      KNPB.tint = 0x90ddff;
    }
    else {
      KNPB.tint = 0xffffff;
    }
    updateSoundb()
  }
}

let egg, flour, sugar, bp, butter, straw, coloring, vanilla, frosting
let kitchen, lg, mirror, bathroom, bedroom, hiddenroom
let houseb, KNPB, BHPB, LGPB
let gotEgg = false, gotFlour = false, gotMilk = false
let gotSugar = false, gotBP = false, gotFrosting = false, gotButter = false
let gotStraw = false, gotColoring = false, gotVanilla = false, gotCake = false
let hid, cake, youwin

let doneDuck = false, doneTest = false, doneClock = false

const preloadHouseB = function() {
  game.load.image("houseb", "images/general/houseb.png")
}
const createHouseB = function() {
  houseb = game.add.image(800, 7, "houseb")
  houseb.scale.setTo(0.15)
  houseb.inputEnabled = true
  houseb.events.onInputDown.add(backHome)
}
function backHome() {
  clickm.play()

  game.state.start('first', level1State)
}
function goToKNPB() {
  clickm.play()

  game.state.start('third', level3State)
}
function getEgg() {
  clickm.play()

  gotEgg = true
  egg.destroy()
}
function getColoring() {
  clickm.play()

  gotColoring = true
  coloring.destroy()
}
function getMilk() {
  clickm.play()

  gotMilk = true
  milk.destroy()
}