var score=0
var count=0
var bg=creeateSprite(0,0,10,200)

function preload(){
    
    
}
function setup(){
    //background animation
    bg.setAnimation(city)
    
    bg.scale=0.1
    bg.velocityX=-4
    bg.visible=false
//homescreen background animation
bg1=creeateSprite(0,0,10,200)
bg1.setAnimation(homescreen)
bg1.scale=0.1
//instruction screen background
bg2=creeateSprite(0,0,10,200)
bg2.setAnimation(instructionscreen)
bg2.scale=0.1
bg2.visible=false

ground=creeateSprite(10,10,200,300)
ground.setAnimation(groundImage)
ground.x=ground.width/2
ground.scale=0.1
ground.visible=false

invisibleground=creeateSprite(10,10,200,300)
invisibleground.visible=false

man=creeateSprite(10,10,10,10)
man.setAnimation(manImage)
man.scale=0.1                                                   
man.visible=false
man.setCollider("rectangle",10,0,75,320)

glovesGroup=createGroup()
virusGroup=createGroup()
carGroup=createGroup()
maskGroup=createGroup()
suitGroup=creeateSprite()
vaccineGroup=createGroup()
cactusGroup=createGroup()
rockGroup=createGroup()

var flag
playSound();

}

function draw(){
    background()
    if(frameCount>100){
        bg1.visible=false
        bg2.visible=true
    }
    if(frameCount>200){
        bg2.visible=false
        bg.visible=true
        ground.visible=true
        man.visible=true
        
    }
    if(frameCount>200&&frameCount<205){
        playSound()
    }
    ground.velocityX=-(6+3*count/100)
    score=Math.round(frameCount/100)

    if(bg.x<0){
        bg.x=bg.width/2
    }
    if(ground.x<0){
        ground.x=ground.width/2
    }

    if(keyDown("space")&&man.y>=300){
        man.velocityY=-15
        playSound()
    }
    man.velocityY=man.velocityY+0.8
    man.collide(invisibleground)
    if(score>2&&score<7){
        spawnVirus()
        spawnCars()
    }else if(score>8&&score<15){
        spawnVirus1()
        spawnCactus()
    }else if(score>16&&score<25){
        spawnVirus2()
        spawnRock()
    }else if(score>26&&score<34){
        spwanVirus3()

    }
    spwanGloves()
    spwanSuit()
    spawnVaccine()
    spawnMask()
} 
