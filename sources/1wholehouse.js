"use strict"
const level1State = {

  preload: function() {

  },

  create: function() {
    house = game.add.image(0, 0, "house")

    kitchenb = game.add.image(385, 0, "kitchenb")
    kitchenb.inputEnabled = true
    kitchenb.events.onInputDown.add(goKitchen)

    bathroomb = game.add.image(700, 0, "bathroomb")
    bathroomb.inputEnabled = true
    bathroomb.events.onInputDown.add(goBath)

    bedroomb = game.add.image(650, 257, "bedroomb")
    bedroomb.inputEnabled = true
    bedroomb.events.onInputDown.add(goBed)

    mirrorb = game.add.image(383, 258, "mirrorb")
    mirrorb.inputEnabled = true
    mirrorb.events.onInputDown.add(goMirror)

    livingroomb = game.add.image(126, 3, "livingroomb")
    livingroomb.inputEnabled = true
    livingroomb.events.onInputDown.add(goLiving)


    unlessb = game.add.image(122, 511, "unlessb")
    unlessb.alpha = 0
    unlessb.inputEnabled = true
    unlessb.events.onInputDown.add(notAlert)

    youcant = game.add.image(550, 300, "youcant")
    youcant.alpha = 0
    youcant.anchor.setTo(0.5)
    youcant.scale.setTo(0.8)
    createSoundb()

    aler = game.add.image(550, 300, "aler")
    aler.alpha = 0
    aler.scale.setTo(0.8)
    aler.anchor.setTo(0.5)
  },


  update: function() {
    if (unlessalert == true) {
      unlesstimer++
      if (unlesstimer == 100) {
        unlessalert = false
        unlesstimer = 0
        youcant.alpha = 0
      }
    }
    if ((gotEgg == true) && (gotFlour == true) && (gotMilk == true) && (gotSugar == true) && (gotBP == true) && (gotFrosting == true) && (gotButter == true) && (gotStraw == true) && (gotColoring == true) && (gotVanilla == true)) {
      wonGame = true
    }
    if (wonGame == true) {
      timea++
      aler.alpha = 1
      if (timea >= 100) {
        aler.alpha = 0
        hiddenroomb = game.add.image(122, 511, "hiddenroomb")
        hiddenroomb.alpha = 0
        hiddenroomb.inputEnabled = true
        hiddenroomb.events.onInputDown.add(goHidden)
        wonGame = false
      }
    }
    if (kitchenb.input.pointerOver()) {
      kitchenb.alpha = 0.5;
    }
    else {
      kitchenb.alpha = 0;
    }
    if (bathroomb.input.pointerOver()) {
      bathroomb.alpha = 0.5;
    }
    else {
      bathroomb.alpha = 0;
    }
    if (livingroomb.input.pointerOver()) {
      livingroomb.alpha = 0.5;
    }
    else {
      livingroomb.alpha = 0;
    }
    if (mirrorb.input.pointerOver()) {
      mirrorb.alpha = 0.5;
    }
    else {
      mirrorb.alpha = 0;
    }
    if (bedroomb.input.pointerOver()) {
      bedroomb.alpha = 0.5;
    }
    else {
      bedroomb.alpha = 0;
    }
    if (unlessb.input.pointerOver()) {
      unlessb.alpha = 0.5;
    }
    else {
      unlessb.alpha = 0;
    }
    updateSoundb()
  }
}
let gameStart = false
let toInstructions = false
let wonGame = false
let unlessalert = false
let beenRoom = false
let instructions, understoodb, begin, beginb, house, gameName, recipe, recipeb, backb, milk
let youcant, unlessb, kitchenb, livingroomb, mirrorb, bathroomb, bedroomb, hiddenroomb
let unlesstimer = 0
let cross1, cross2, cross3, cross4, cross5, cross6, cross7, cross8, cross9, cross10
let sp, ss

const preloadSoundb = function() {
  game.load.image("sp", "images/general/sp.png")
  game.load.image("ss", "images/general/ss.png")
}
const createSoundb = function() {
  sp = game.add.image(1550, 660, "sp")
  sp.scale.setTo(0.2)
  sp.inputEnabled = true
  sp.anchor.setTo(0, 1)
  sp.events.onInputDown.add(playSound)

  ss = game.add.image(900, 660, "ss")
  ss.scale.setTo(0.2)
  ss.inputEnabled = true
  ss.anchor.setTo(0, 1)
  ss.events.onInputDown.add(stopSound)
}
const updateSoundb = function() {
  if (music.volume == 0) {
    sp.x = 900
    ss.x = 1500
  }
  else if (music.volume == 1) {
    sp.x = 1500
    ss.x = 900
  }
}
const playSound = function() {
  music.volume = 1
  clickm.volume = 1
  ss.x = 900
  sp.x = 1550
}
const stopSound = function() {
  music.volume = 0
  clickm.volume = 0
  sp.x = 900
  ss.x = 1550
}
const preloadRecipes = function() {
  game.load.image("back", "images/BHP/b.png")
  game.load.image("recipeb", "images/general/recipeb2.png")
  game.load.image("recipe", "images/general/recipe.png")
  game.load.image("backb", "images/general/backb.png")
}
const createRecipes = function() {
  recipe = game.add.sprite(0, 0, "recipe")
  recipe.alpha = 0

  recipeb = game.add.image(900, 10, "recipeb")
  recipeb.scale.setTo(0.07)
  recipeb.inputEnabled = true
  recipeb.events.onInputDown.add(goToRecipe)

  backb = game.add.image(9000, -25, "backb")
  backb.scale.setTo(0.15)
  backb.inputEnabled = true
  backb.events.onInputDown.add(goBackFromRecipe)

  tryOut()
}
const createBack = function() {
  back = game.add.image(0, 0, "back")
}
function goToRecipe() {
  clickm.play()

  recipeb.x = 10000
  backb.x = 850
  houseb.alpha = 0
  recipe.alpha = 1

  if (gotEgg == true) {
    cross1.alpha = 1
  }
  if (gotFlour == true) {
    cross2.alpha = 1
  }
  if (gotMilk == true) {
    cross3.alpha = 1
  }
  if (gotSugar == true) {
    cross4.alpha = 1
  }
  if (gotBP == true) {
    cross5.alpha = 1
  }
  if (gotFrosting == true) {
    cross6.alpha = 1
  }
  if (gotButter == true) {
    cross7.alpha = 1
  }
  if (gotStraw == true) {
    cross8.alpha = 1
  }
  if (gotColoring == true) {
    cross9.alpha = 1
  }
  if (gotVanilla == true) {
    cross10.alpha = 1
  }
}

function goBackFromRecipe() {
  clickm.play()

  recipeb.x = 900
  backb.x = 10000
  recipe.alpha = 0
  houseb.alpha = 1

  cross1.alpha = 0
  cross2.alpha = 0
  cross3.alpha = 0
  cross4.alpha = 0
  cross5.alpha = 0
  cross6.alpha = 0
  cross7.alpha = 0
  cross8.alpha = 0
  cross9.alpha = 0
  cross10.alpha = 0
}
function goKitchen() {
  game.state.start('second', level2State)
}
function goHidden() {
  game.state.start('tenth', level10State)
}
function goLiving() {
  game.state.start('eighth', level8State)
}
function goMirror() {
  game.state.start('ninth', level9State)
}
function goBed() {
  game.state.start('sixth', level6State)
}
function goBath() {
  game.state.start('fourth', level4State)
}


function notAlert() {
  clickm.play()
  unlessalert = true
  youcant.alpha = 1
}

function tryOut() {
  cross1 = game.add.image(105, 145, 'cross')
  cross1.scale.setTo(0.2, 1)

  cross2 = game.add.image(105, 203, 'cross')
  cross2.scale.setTo(0.25, 1)

  cross3 = game.add.image(105, 260, 'cross')
  cross3.scale.setTo(0.22, 1)

  cross4 = game.add.image(105, 315, 'cross')
  cross4.scale.setTo(0.3, 1)

  cross5 = game.add.image(105, 380, 'cross')
  cross5.scale.setTo(0.72, 1)

  cross6 = game.add.image(105, 435, 'cross')
  cross6.scale.setTo(0.4, 1)

  cross7 = game.add.image(105, 495, 'cross')
  cross7.scale.setTo(0.3, 1)

  cross8 = game.add.image(105, 555, 'cross')
  cross8.scale.setTo(0.65, 1)

  cross9 = game.add.image(105, 610, 'cross')

  cross10 = game.add.image(105, 670, 'cross')
  cross10.scale.setTo(0.4, 1)

  cross1.alpha = 0
  cross2.alpha = 0
  cross3.alpha = 0
  cross4.alpha = 0
  cross5.alpha = 0
  cross6.alpha = 0
  cross7.alpha = 0
  cross8.alpha = 0
  cross9.alpha = 0
  cross10.alpha = 0
}
let timea = 0, aler