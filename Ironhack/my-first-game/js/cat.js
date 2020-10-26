/*class Cat {
    constructor() {
        this.x =100;
        this.y = 100;
        this.width = 100;
        this.height = 100;
        this.image = "images/freya.jpg"
    }

    drawCat() {
        const catImg = new Image();
        catImg.src = this.img;
        ctx.drawImage(catImg, this.x, this.y, this.width, this.height);
    }

    moveCat(keyCode) {
        console.log('x', this.x);
        console.log('x', this.x);
        ctx.clearRect(this.x, this.y, this.width, this.height);
        document.addEventListener('keydown', e => {
            switch (e.keyCode) {
               case 38: 
                player.speedY -= 1;
                break;
                case 40:
                player.speedY += 1;
                break;
                case 37:
                player.speedX -= 1;
                break;
                case 39:
                player.speedX += 1
                break;
            }
        });
        
document.addEventListener('keyup', () => {
    player.speedX = 0;
    player.speedY = 0;
});



}
*/
