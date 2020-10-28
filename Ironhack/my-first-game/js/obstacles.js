 class Obstacle {
    constructor(x, y, width, height, game) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.game = game;
    }
    getPositionX(){
        return this.x;
    }
    getPositionY(){
        return this.y;
    }
    drawObstacle() {
        this.game.ctx.fillStyle = 'red';
        this.game.ctx.fillRect(this.x, this.y, this.width, this.height);
        
    }
}
    /*removeObstacle() {
        this.ctx.clearRect(this.x, this.y, this.width, this.height);
        //ctx.clearRect(20, 20, 100, 50); #image top left width height
        
    } 
}

   

    moveLeft() {
        if (this.x -25 > 0) {
            this.x -= 25;
        }
        //let previousX = this.getPositionX();
        //let previousY = this.getPositionY();
        
        //this.updateCanvas(previousX,previousY);
    

    refreshObstacle() {
        console.log('objecto');
        
            obstacle.moveLeft();
            console.log('objecto');
        } 
} */
    //crashWith(obstacle) {
       // return !(this.bottom() < obstacle.top() ||
       // this.top() > obstacle.bottom() || 
       // this.right() < obstacle.left() || 
       // this.left() > obstacle.right())
   // }
//} 











      
