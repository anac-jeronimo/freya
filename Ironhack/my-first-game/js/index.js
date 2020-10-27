let currentGame;
let currentPlayer;
let obstacles = [];
let isOver = false;
let obstacle;

let myCanvas = document.getElementById('canvas');
let ctx = myCanvas.getContext('2d');

document.getElementById('start-button').onclick = () => {
    startGame();
}

function startGame() {
  //  currentGame = new Game();
    player = new Cat();
    obstacle = new Obstacle(1000, 700, 50,50);
    refreshObj(obstacle);
    refresh(player);
   // currentGame.player = currentGame;
    //currentGame.player = drawImage();
    //obstacles.push(new Obstacle(700, 700, 50, 50));
    //setInterval = () => ({
       // updateCanvas();
    //}, 5000)};
}  
    //updateCanvas();

function refreshObj(obstacle)
    {   
        setInterval(function()
        { 
            refreshObstacle(obstacle); 
        }, 5000);
    };
    
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
