const canvas = document.getElementById('snake');
const ctx = canvas.getContext('2d');

const partSize = 20;
let timer = null;
let snake = [];
let apple = [];

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
}

const move = (x, y) => {
    // move parts
    for(let i = snake.length - 1; i > 0; i--){
        snake[i].x = snake[i - 1].x;
        snake[i].y = snake[i - 1].y;
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
    }

    draw();
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
    if(e.code === 'KeyS'){
        clearInterval(timer);
        timer = setInterval("move(0, " + partSize + ")", 500);
    }
    //up
    else if(e.code === 'KeyW'){
        clearInterval(timer);
        timer = setInterval("move(0, " + -partSize + ")", 500);
    }
    //left
    else if(e.code === 'KeyA') {
        clearInterval(timer);
        timer = setInterval("move(" + -partSize + ", 0)", 500);
    }
    //right
    else if(e.code === 'KeyD') {
        clearInterval(timer);
        timer = setInterval("move(" + partSize + ", 0)", 500);
    }
    
    console.log(e.code);
}

document.addEventListener('keypress', moving);
