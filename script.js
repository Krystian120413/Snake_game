const canvas = document.getElementById('snake');
const ctx = canvas.getContext('2d');
let positionX = 0;
let positionY = 0;
let timer;
let snake = [
    {x: 40, y: 0},
    {x: 20, y: 0},
    {x: 0, y: 0}
];

const start = () => {
    //background
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, 600,  600);

    //first rectangle
    ctx.fillStyle = '#fff';
    for(let i = 0; i < snake.length; i++){
        ctx.fillRect(snake[i].x, snake[i].y, 20, 20);
        console.log(snake[i].x, snake[i].y);
    }
}

const move = (x, y) => {
    //background
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, 600,  600);

    for(let i = 0; i < snake.length; i++){
        snake[i].y += y;
        snake[i].x += x;
        if(snake[i].y >= 600) snake[i].y = 0;
        if(snake[i].y < 0) snake[i].y = 580;
        if(snake[i].x >= 600) snake[i].x = 0;
        if(snake[i].x < 0) snake[i].x = 580;

        //first rectangle
        ctx.fillStyle = '#fff';
        ctx.fillRect(snake[i].x, snake[i].y, 20, 20);
        console.log(snake[i].x, snake[i].y);
    }

    clearTimeout(timer);
    timer = setTimeout("move("+x+", "+y+")", 500);
}

//start
start();
move(0, 0);

//moving
const moving = (e) => {
    //down
    if(e.code === 'KeyS'){
        clearTimeout(timer);
        move(0, 20);
    }
    //up
    else if(e.code === 'KeyW'){
        clearTimeout(timer); 
        move(0, -20);
    }
    //left
    else if(e.code === 'KeyA') {
        clearTimeout(timer);
        move(-20, 0);
    }
    //right
    else if(e.code === 'KeyD') {
        clearTimeout(timer);
        move(20, 0);
    }
    else console.log("doesnt work");
    console.log(e.code);
}

document.addEventListener('keypress', moving);
