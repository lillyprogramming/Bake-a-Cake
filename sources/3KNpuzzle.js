"use strict"
const level3State={

preload:function() 

{

    //preloadPuzzlem()
    //preloadSoundb()
},

create:function()

{
    createBack()
    createSoundb()
    test = game.add.image(0, 0, "test")

    throwoff = game.add.image(180, 290, "throwoff")
    throwoff.inputEnabled = true
    throwoff.events.onInputDown.add(Wrong)

    correct = game.add.image(180, 430, "correct")
    correct.inputEnabled = true
    correct.events.onInputDown.add(Correct)

    wrong = game.add.image(0, 0, "wrong")
    wrong.alpha = 0

    createPuzzlem()
}, 

update:function()

{ 
    if(wrongA == true) {
        timerT ++
        correct.inputEnabled = false
        throwoff.inputEnabled = false
        if(timerT == 50) {
            wrong.alpha = 0
            timerT = 0
            wrongA = false
        }
    }
    else {
        correct.inputEnabled = true
        throwoff.inputEnabled = true
    }
    updateSoundb()
}
}

let test
let correct, wrong
let throwoff, timerT = 0
let wrongA = false

function Wrong() {
    wrongm.play()

    wrong.alpha = 1
    wrongA = true
}
function Correct() {
    rightm.play()

    doneTest = true
    game.state.start('second',level2State)
}
function preloadPuzzlem() {
    game.load.audio("wrongm", ["sound/Minecraft Splash potion Sound Effect.wav"])
    game.load.audio("rightm", ["sound/Ding Sound Effect.wav"])
    game.load.audio("quack", ["sound/Duck Quack - Sound Effect (HD).mp3"])
}
function createPuzzlem() {
    wrongm = game.add.audio("wrongm")
    rightm = game.add.audio("rightm")
    quack = game.add.audio("quack")
} 
let wrongm, rightm, quack