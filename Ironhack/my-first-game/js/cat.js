let myCanvas = document.getElementById('canvas');
let ctx = myCanvas.getContext('2d');
class Cat {
    constructor() {
        this.x = 100;
        this.y=120;
        const image = new Image();
        image.src = 'images/freya.jpg';  
        image.addEventListener('load', () => {
            this.image = image;
            this.draw();
        });
        image.src = 'images/freya.jpg'; 
    }
    getPositionX(){
        return this.x;
    }
    getPositionY(){
        return this.y;
    }
    moveUp() {
        this.y -= 25;
    }
    moveDown() {
        this.y += 25;
    }
    moveLeft() {
        this.x -= 25;
    }
    moveRight() {
        this.x += 25;
    }
    draw() {
        ctx.drawImage(this.image,this.x,this.y,50,50);
    }
    updateCanvas(x,y) {
        ctx.clearRect(x, y, 50, 50);
        console.log(this.x);
        console.log(this.y);
        //ctx.clearRect(20, 20, 100, 50); #image top left width height
        this.draw();
    }

}
function refresh(player){
    document.addEventListener('keydown', e => {
        let previousX = player.getPositionX();
        let previousY = player.getPositionY();
        switch(e.keyCode) {
            case 38:
                player.moveUp();
            break;
            case 40:
                player.moveDown();
            break;
            case 37:
                player.moveLeft();
            break;
            case 39:
                player.moveRight();
            break;
        }   
        player.updateCanvas(previousX, previousY);
    });
}

let player = new Cat();
refresh(player);

