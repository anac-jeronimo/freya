 class Obstacle {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    getPositionX(){
        return this.x;
    }
    getPositionY(){
        return this.y;
    }
    drawObstacle() {
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }


    updateCanvas(x,y) {
        ctx.clearRect(x, y, 50, 50);
        //ctx.clearRect(20, 20, 100, 50); #image top left width height
        this.drawObstacle();
    }

    moveLeft() {
        let previousX = this.getPositionX();
        let previousY = this.getPositionY();
        this.x -= 25;
        this.updateCanvas(previousX,previousY);
    }
} 

function refreshObstacle(obstacle) {
    console.log('objecto');
    if (obstacle.getPositionX() -25 > 0) 
    {
        obstacle.moveLeft();
        console.log('objecto');
    } 
}