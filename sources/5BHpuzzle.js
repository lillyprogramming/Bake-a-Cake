"use strict"
const level5State={

preload:function() 

{
    game.load.image("bc", "images/BHP/bc.png" )
    game.load.image("dc", "images/BHP/dc.png" )
    game.load.image("ec", "images/BHP/ec.png" )
    game.load.image("yellowc", "images/BHP/yellowc.png" )
    game.load.image("orangec", "images/BHP/orangec.png" )
    game.load.image("blackc", "images/BHP/blackc.png" )
    preloadPuzzlem()
    preloadSoundb()
},

create:function()

{    
    createBack()
    createSoundb()
    dc = game.add.image(400, 100, "dc")
    dc.inputEnabled = true
    dc.events.onInputDown.add(colorDuck)

    bc = game.add.image(370, 160, "bc")
    bc.inputEnabled = true
    bc.events.onInputDown.add(colorBeak)

    ec = game.add.image(470, 130, "ec")
    ec.inputEnabled = true
    ec.events.onInputDown.add(colorEye)

    yellowc = game.add.image(200, 500, "yellowc")
    yellowc.inputEnabled = true
    yellowc.events.onInputDown.add(colorYellow)

    blackc = game.add.image(450, 500, "blackc")
    blackc.inputEnabled = true
    blackc.events.onInputDown.add(colorBlack)

    orangec = game.add.image(700, 500, "orangec")
    orangec.inputEnabled = true
    orangec.events.onInputDown.add(colorOrange)

    createPuzzlem()

    const style={fill:'#141414'}
    text=game.add.text(400,20,'Color the Duck.')
}, 

update:function()

{ 
    if((cO == true)&&(cY == true)&&(cB == true)) 
    {
        quack.play()
        ec.inputEnabled = false
        dc.inputEnabled = false
        bc.inputEnabled = false
        timerd ++
    
        if(timerd == 50) {
        game.state.start('fourth',level4State)
        doneDuck = true               
        }
     
    }
    updateSoundb()

}
}

function colorOrange() {
    clickm.play()
    
    cYellow = false
    cBlack = false
    cOrange = true
}

function colorBlack() {
    clickm.play()
    
    cYellow = false
    cBlack = true
    cOrange = false
}
function colorYellow() {
    clickm.play()
    
    cYellow = true
    cBlack = false
    cOrange = false
}
function colorDuck() {
    if(cYellow == true) {
        dc.tint = 0xfffD36;
        cY = true
    }
    if(cBlack == true) {
        dc.tint = 0x141414;
        cY = false
    }
    if(cOrange == true) {
        dc.tint = 0xFF790B;
        cY = false
    }
}
function colorEye() {
    if(cBlack == true) {
        ec.tint = 0x141414;
        cB = true
    }
    if(cOrange == true) {
        ec.tint = 0xFF790B;
        cB = false
    }
    if(cYellow == true) {
        ec.tint = 0xfffD36;
        cB = false
    }
}
function colorBeak() {
    if(cOrange == true) {
        bc.tint = 0xFF790B;
        cO = true
    }
    if(cYellow == true) {
        bc.tint = 0xfffD36;
        cO = false
    }
    if(cBlack == true) {
        bc.tint = 0x141414;
        cO = false
    }
}
let orangec, yellowc, blackc, ec, dc, bc, back
let cYellow = false, cBlack = false, cOrange = false
let cY = false, cB = false, cO = false, timerd = 0, text