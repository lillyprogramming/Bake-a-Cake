"use strict"
const level7State={

preload:function() 

{
    game.load.image('clock', 'images/LGP/LGPTogether.png')
    game.load.image('redc', 'images/LGP/redc.png')
    game.load.image('wat', 'images/other/wat.jpg')
    game.load.image('insta', 'images/other/insta.png')

    preloadPuzzlem()
},

create:function()

{
    createBack()
    clock = game.add.image(500, 360, "clock")
    clock.anchor.setTo(0.5)

    redc = game.add.image(500, 360, "redc")
    redc.anchor.setTo(0.5)

    game.physics.enable(redc)
    redc.inputEnabled = true

    insta = game.add.image(0, 0, "insta")
    insta.alpha = 0

    wat = game.add.image(1000, 0, "wat")
    wat.scale.setTo(0.5)
    wat.anchor.setTo(1,0)
    wat.scale.setTo(0.35)
    wat.inputEnabled = true



    createPuzzlem()
}, 

update:function()

{         
    smaller -= rate 
    redc.scale.setTo(smaller)

    if(smaller <= 0.02) {
        smaller = 1
        redc.scale.setTo(1)
    }
    if(game.input.mousePointer.isDown) {
        rate = 0
        if((smaller <= 0.48)&&(smaller >=  0.3)) {
            rightm.play()
            game.state.start('eighth',level8State)
            doneClock = true
        }
        else {
        wrongm.play()
        rate = 0.01
        smaller = 1
        }
    }
    if (wat.input.pointerOver())
    {
        insta.alpha = 1;
    }
    else
    {
        insta.alpha = 0;
    }
}
}

let clock, redc
let smaller = 1
let rate = 0.01
let wat, insta