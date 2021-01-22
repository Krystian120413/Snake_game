const canvas = document.getElementById('snake');
const ctx = canvas.getContext('2d');

const partSize = 20;
let timer = null;
let snake = [];
let apple = [];
let direction = 4;
let score = 0;

function draw() {
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    snake.forEach(o => {
        ctx.fillStyle = "#FFFFFF";
        ctx.fillRect(o.x, o.y, partSize, partSize);
    });

    ctx.fillStyle = 'red';
    ctx.fillRect(apple[0], apple[1], partSize, partSize);
}

const start = () => {
    snake = [];

    snake.push({ x: 2 * partSize, y: 0 });
    snake.push({ x: partSize, y: 0 });
    snake.push({ x: 0, y: 0 });

    draw();
    setInterval("move()", 200);
}

const move = () => {
    // move parts
    for(let i = snake.length - 1; i > 0; i--){
        snake[i].x = snake[i - 1].x;
        snake[i].y = snake[i - 1].y;
    }

    let x, y;
    switch(direction){
        case 1: {
            x = 0;
            y = partSize;
            break;
        }
        case 2: {
            x = 0;
            y = -partSize;
            break;
        }
        case 3: {
            x = -partSize;
            y = 0;
            break;
        }
        case 4: {
            x = partSize;
            y = 0;
            break;
        }
    }

    // move head
    snake[0].x += x;
    snake[0].y += y;

    // teleport head to the other side of the screen
    if(snake[0].x >= canvas.width) snake[0].x = 0;
    if(snake[0].x < 0) snake[0].x = canvas.width - partSize;
    if(snake[0].y >= canvas.height) snake[0].y = 0;
    if(snake[0].y < 0) snake[0].y = canvas.height - partSize;

    if(snake[0].x === apple[0] && snake[0].y === apple[1]){
        fruit();
        snake.push({x: snake[snake.length - 1].x, y: snake[snake.length - 1].y})
        score++;
        document.getElementById("score").innerHTML = "Score: " + score;
        if(score === 897){
            alert("Wygrana. Twój wynik to: " + score);
            window.location.reload(true);
        }
    }

    console.log(collision());

    if(collision()){
        alert("Przegrana. Twój wynik to: " + score);
        window.location.reload(true);
    }
    else draw();
}

const collision = () => {
    for(let e = 1; e < snake.length; e++){
        if(snake[e].x === snake[0].x && snake[e].y === snake[0].y){
            return true;
        }
    }
}

const fruit = () => {
    let a = Math.floor(Math.random() * (canvas.width + 1));
    let b = Math.floor(Math.random() * (canvas.height + 1))
    a -= a % partSize;
    b -= b % partSize;
    apple = [a, b];
}

start();
fruit();

//moving
const moving = (e) => {
    //down
    if(e.code === 'KeyS' && direction != 2){
        direction = 1;
    }
    //up
    else if(e.code === 'KeyW' && direction != 1){
        direction = 2;
    }
    //left
    else if(e.code === 'KeyA' && direction != 4) {
        direction = 3;
    }
    //right
    else if(e.code === 'KeyD' && direction != 3) {
        direction = 4;
    }
}

document.addEventListener('keypress', moving);
