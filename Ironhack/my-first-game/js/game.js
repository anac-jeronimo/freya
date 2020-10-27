class Game {
    constructor() {
        this.player = {},
        this.obstacles = [];
        this.score = 0;
        this.myCanvas = document.getElementById('canvas');
        this.ctx = this.myCanvas.getContext('2d');
    }
    colision(obstacle) {
    
        if(this.player.x + this.player.width > obstacle.x &&
            this.player.x < obstacle.x + obstacle.width &&
            this.player.y + this.player.height > obstacle.y &&
            this.player.y < obstacle.y + obstacle.height) {
                alert ("Meowwwww");
            }
        
        }
        score()  {
            const points = Math.floor(this.frames / 5);
        }

}

