
let myCanvas = document.getElementById('canvas');
let ctx = myCanvas.getContext('2d');



const image = new Image();
image.src ="images/simple_but_beautiful_by_xflutt_de4lmm9.png";


const backgroundImage = {
    image: image,      
    /*x: 0,
    speed: -0.5,
    move : function() {
        this.x += this.speed;
        this.x %= canvas.width;
    }, 
    draw: function() {
        ctx.drawImage(this.image, this.x,0);
        ctx.drawImage(this.image, this.x + canvas.width, 0);
    }*/
    
    draw: function() {
        ctx.drawImage(this.image, this.x,0);
        ctx.drawImage(this.image, 0, 0, image.width,    image.height,     // source rectangle
            0, 0, myCanvas.width, myCanvas.height); // destination rectangle
    }

}

function updateCanvas() {
    //backgroundImage.move();
    //ctx.clearRect(0, 0,  canvas.width, canvas.height);
    backgroundImage.draw();
    //ctx.drawImage(image,700,700);
    

    requestAnimationFrame(updateCanvas);
}

updateCanvas();