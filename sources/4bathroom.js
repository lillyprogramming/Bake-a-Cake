"use strict"
const level4State={

preload:function() 

{
    preloadRecipes()
    preloadHouseB()
    preloadSoundb()
    game.load.image("bathroom", "images/BathStuff/bathroom2 fixed.jpg") 
    game.load.image("BHPB", "images/BHP/dg.png") 
    game.load.image("BHPB1", "images/BHP/duck.png") 
    game.load.image("straw", "images/BathStuff/straw.png") 
    game.load.image("flour", "images/BathStuff/flour.png") 
},

create:function()

{
    createBack()
    createSoundb()
    beenRoom = true

    bathroom = game.add.image(500, 0, "bathroom")
    bathroom.anchor.setTo(0.5, 0)

    flour = game.add.image(465, 385, "flour")
    flour.scale.setTo(0.75)
    flour.inputEnabled = true
    flour.events.onInputDown.add(getFlour)

    straw = game.add.image(557, 160, "straw")
    straw.scale.setTo(0.75)
    straw.inputEnabled = true
    straw.events.onInputDown.add(getStraw)

    BHPB1 = game.add.image(527, 180, "BHPB1")
    BHPB1.scale.setTo(0.75)
    BHPB1.alpha = 0

    BHPB = game.add.image(527, 180, "BHPB")
    BHPB.scale.setTo(0.75)
    BHPB.inputEnabled = true
    BHPB.events.onInputDown.add(goToBHPB)

    createHouseB()    
    createRecipes()
}, 

update:function()

{ 
    if(gotFlour == true) {
        flour.alpha = 0
    }
    if(doneDuck == true) {
        if(gotStraw == false) {
            straw.alpha = 1
        }
        BHPB.inputEnabled = false
        BHPB1.alpha = 1
        BHPB.alpha = 0
    }
    if(doneDuck == false) {
        straw.alpha = 0
    }
    if(gotStraw == true) {
        straw.alpha = 0
    }
    if (BHPB.input.pointerOver())
    {
        BHPB.tint = 0x90ddff;
    }
    else
    {
        BHPB.tint = 0xffffff;
    }
    updateSoundb()
}
}
function goToBHPB() {
    clickm.play()

    game.state.start('fifth',level5State)
}
function getFlour() {
    clickm.play()

    gotFlour = true
    flour.destroy()
}
function getStraw() {
    clickm.play()
    
    gotStraw = true
    straw.destroy()
}
let BHPB1