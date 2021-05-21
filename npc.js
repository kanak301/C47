class Npcclass {
    
        constructor(){
            var xpos = random(10,1200);
            var ypos = random (100,700);

            this.npc = createSprite(xpos,ypos,30,30);
            this.npc.shapeColor = "red";
        }
    }
