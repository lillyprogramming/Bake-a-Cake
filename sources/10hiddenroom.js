"use strict"
const level10State={

preload:function() 

{
    game.load.image("hid", "images/other/hid.png") 
    game.load.image("cake", "images/other/cake.png")
    game.load.image("youwin", 'images/other/youwin.png')
    game.load.audio("endm", ["sound/RPGMaker XP OST Remastered 013 Theme 02.wav"]) 
},

create:function()

{        
    createBack()
    hid = game.add.image(500, 0, "hid")
    hid.anchor.setTo(0.5, 0)
    hid.scale.setTo(0.727)
    
    cake = game.add.image(363, 360, "cake")
    cake.inputEnabled = true
    cake.events.onInputDown.add(getCake)

    youwin = game.add.image(0, 0, "youwin")
    youwin.alpha = 0

    music.stop()

    endm = game.add.audio("endm")
    endm.play()
    endm.loop = true
    endm.volume = 0.5
}, 

update:function()

{ 
    if(gotCake == true) {
        youwin.alpha = 1
        endm.volume = 0    
    }
}
}
function getCake() {
    clickm.play()

    gotCake = true
    cake.destroy()
}
let endm