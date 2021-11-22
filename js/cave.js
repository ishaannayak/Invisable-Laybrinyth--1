class Cave {
    constructor(){
        this.wall1 = null 
        this.wall2 = null 
        this.wall3 = null

    }
    display(){
        this.wall1 = createSprite(10,325,15,600)
        this.wall1.shapeColor = "white"

        this.wall2 = createSprite(218,33,400,15)
        this.wall2.shapeColor = "white"

        this.wall3 = createSprite(10,800,5,130)
        this.wall3.shapeColor = "white"
   }
}