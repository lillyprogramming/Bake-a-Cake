"use strict"
const level9State={

preload:function() 

{
    preloadRecipes()
    preloadHouseB()
    preloadSoundb()
    game.load.image("mirror", "images/other/mirror.png") 
    game.load.image("frosting", "images/other/frosting.png") 
},

create:function()

{
    createBack()
    createSoundb()
    beenRoom = true
    
    mirror = game.add.image(500, 0, "mirror")
    mirror.anchor.setTo(0.5, 0)
    
    frosting = game.add.image(465, 520, "frosting")
    frosting.scale.setTo(0.75)
    frosting.inputEnabled = true
    frosting.events.onInputDown.add(getFrosting)

    createHouseB()    
    createRecipes()
}, 

update:function()

{ 
    if(gotFrosting == true) {
        frosting.alpha = 0
}
updateSoundb()
}
}
function getFrosting() {
    clickm.play()
    
    gotFrosting = true
    frosting.destroy()
}