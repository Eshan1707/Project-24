class Dustbin{
    constructor(x,y){
        var options = {isStatic:true}
        this.left= Bodies.rectangle(x,y,20,100,options)
        this.base= Bodies.rectangle(x+100,y+40,200,20,options)
        this.right= Bodies.rectangle(x+200,y,20,100,options)
        this.image=loadImage('dustbingreen.png')
        World.add(world,this.left)
        World.add(world,this.base)
        World.add(world,this.right)
    }
    display(){
        var lpos = this.left.position;
        var bpos = this.base.position;
        var rpos = this.right.position;
    
        push()
        fill("white")
        rect(lpos.x,lpos.y,20,100)
        rect(bpos.x,bpos.y,200,20)
        rect(rpos.x,rpos.y,20,100)
        imageMode(CENTER)
        image(this.image,900,300,200,200)
        pop()
    }
}