"use strict"
const game=new Phaser.Game(1000, 720, Phaser.AUTO,'game-canvas')
game.state.add('first',level1State)
game.state.add('second',level2State)
game.state.add('third',level3State)
game.state.add('fourth',level4State)
game.state.add('fifth',level5State)
game.state.add('sixth',level6State)
game.state.add('seventh',level7State)
game.state.add('eighth',level8State)
game.state.add('ninth',level9State)
game.state.add('tenth',level10State)
game.state.add("eleventh", level11State)

game.state.start("eleventh", level11State)
//game.state.start("tenth", level10State)


//game.state.add('finish', FinishState)
//game.state.start('intro', IntroState)

//first: whole House & nothing
//second: kitchen & coloring + egg + PZ milk
//third: Kitchen Puzzle & milk
//fourth: Bathroom & flour + PZ strawberries
//fifth: bathroom Puzzle & strawberries
//sixth: bedroom & baking powder +  butter
//eighth: living room & sugar + PZ vanilla
//ninth: living room Puzzle & vanilla
//tenth: mirror & frosting
//eleventh: hidden room
//twelfth: connect