let currentGame;
//let currentPlayer;
let obstacles = [];
let isOver = false;
let obstacle;




document.getElementById('start-button').addEventListener("click", () => {
    console.log("dog");
    startGame();
}) ;
    
    

function startGame() {
    currentGame = new Game();
    let player = new Cat(currentGame);
    currentGame.player = player;
    refreshObj();
    //console.log("cat");
    //currentGame.score();
    updateCanvas();
   // currentGame.player = currentGame;
    //currentGame.player = drawImage();
    //obstacles.push(new Obstacle(700, 700, 50, 50));
    //setInterval = () => ({
       // updateCanvas();
    //}, 5000)};
}  
    //updateCanvas();

function refreshObj()
    {   
        setInterval(function()
        { 
            let randmX = Math.floor(Math.random()*900)
            let randmY = Math.floor(Math.random()*700)
            let randomH = Math.floor(Math.random()*60) + 30
            let randomY = Math.floor(Math.random()*60) + 30
            //obstacle.moveLeft(); 
        obstacles.push(new Obstacle(randmX, randmY, randomH, randomY, currentGame))
        console.log(obstacles);
        }, 2000);
 
}

function updateCanvas() {
    currentGame.ctx.clearRect(0, 0, 900, 900);
    //ctx.clearRect(20, 20, 100, 50); #image top left width height
    currentGame.player.draw();
    obstacles.forEach(obstacle => {
        currentGame.colision(obstacle);
        obstacle.drawObstacle();
    });
    requestAnimationFrame(updateCanvas);


} 


    document.addEventListener('keydown', e => {
    //let previousX = player.getPositionX();
    //let previousY = player.getPositionY();
    switch(e.keyCode) {
        case 38:
            if(currentGame.player.y - 25 > 0) {
                currentGame.player.moveUp();
                console.log("jhg");
            }   
        break;
        case 40:
            if(currentGame.player.y - 25 < 700) {
                currentGame.player.moveDown();
            }       
        break;
        case 37: 
        if (currentGame.player.x -25 > 0) {
            currentGame.player.moveLeft();
        }
        break;
        case 39:
            if(currentGame.player.x - 25 < 800) {
                currentGame.player.moveRight();
            }               
        break;
    }   
   // player.updateCanvas(previousX, previousY);
});

console.log(startGame);
console.log(updateCanvas);
    //refreshObstacle(obstacle);
    //refresh(obstacle)
//requestAnimationFrame(refreshAll);
//function updateCanvas () {
    //while (!isOver) {
       //obstacles[0].moveLeft();
    //}
     

//}
//requestAnimationFrame(updateCanvas);
/*document.onkeydown = (e) => {
    let whereToGo = e.keyCode;
    currentGame.cat.moveCat(whereToGo);
}



function detectCollision(obstacle) {
    return !((currentCat.y > obstacle.y + obstacle.height) || 
    (currentCat.x + currentCat.width < obstacle.x) || 
    (currentCat.x - currentCat.width  > obstacle.x + obstacle.width))
}

let obstaclesFrequency = 0;
function updateCanvas() {
    ctx.clearRect(0, 0, 500, 600);
    currentGame.cat.drawImage();
    obstaclesFrequency++;

    if (obstaclesFrequency % 100 === 1) {
        //Draw an obstacle
        let randomObstacleX = Math.floor(Math.random() * 450);;
        let randomObstacleY = Math.floor(Math.random() * 450);
        let randomObstacleWidth = Math.floor(Math.random() * 50) + 20;
        let randomObstacleHeight = Math.floor(Math.random() * 50) + 20;
        let newObstacle = new Obstacle(
            randomObstacleX, 
            randomObstacleY, 
            randomObstacleWidth, 
            randomObstacleHeight);

        currentGame.obstacles.push(newObstacle);
        //console.log(currentGame.obstacles);
    }

    for(let i = 0; i<currentGame.obstacles.length; i++) {
        currentGame.obstacles[i].x += 1;
        currentGame.obstacles[i].drawObstacle();

        if (detectCollision(currentGame.obstacles[i])) {
            alert('Meowwwww!')
            obstaclesFrequency = 0;
            currentGame.score = 0;
            document.getElementById('score').innerHTML = 0;
            currentGame.obstacles = [];
            //document.getElementById('game-board').style.display = 'none';
        }
        if (currentGame.obstacles.length > 0 && currentGame.obstacles[i].x >= 600) {
            currentGame.obstacles.splice(i, 1);
            currentGame.score++;
            document.getElementById('score').innerHTML = currentGame.score;
        }
    }

    requestAnimationFrame(updateCanvas);
}  */
