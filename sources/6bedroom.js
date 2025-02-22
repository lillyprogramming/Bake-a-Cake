"use strict"
const level6State={

    preload:function() 

    {
        preloadRecipes()
        preloadHouseB()
        preloadSoundb()
        game.load.image("bedroom", "images/other/bedroom3.png") 
        game.load.image("bp", "images/other/bp.png") 
        game.load.image("butter", "images/other/butter.png") 
    },
        
    create:function()
        
    {
        createBack()
        createSoundb()
        beenRoom = true
        
        bedroom = game.add.image(500, 0, "bedroom")
        bedroom.anchor.setTo(0.5, 0)
        
        butter = game.add.image(545, 215, "butter")
        butter.scale.setTo(0.5)
        butter.inputEnabled = true
        butter.events.onInputDown.add(getButter)
        
        bp = game.add.image(675, 555, "bp")
        bp.scale.setTo(0.5)
        bp.inputEnabled = true
        bp.events.onInputDown.add(getBP)
    
        createHouseB()    
        createRecipes()
    }, 
        
    update:function()
        
    { 
        if(gotButter == true) {
                butter.alpha = 0
        }
        if(gotBP == true) {
            bp.alpha = 0
        }
        updateSoundb()
    }
    }
    
function getBP() {
    clickm.play()

    gotBP = true
    bp.destroy()
}
function getButter() {
    clickm.play()
    
    gotButter = true
    butter.destroy()
}

//game.state.start('first',level1State)
