const canvas = document.getElementById('snake');
const ctx = canvas.getContext('2d');
let positionX = 0;
let positionY = 0;
let timer;
let snake = [
    {x:0, y:0},
    {x: 20, y:0},
    {x: 40, y: 0},
    {x: 60, y: 0},
    {x: 80, y: 0},
    {x: 100, y: 0}
];

const start = () => {
    //background
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, 600,  600);

    //first rectangle
    ctx.fillStyle = '#fff';
    for(let i = 0; i < snake.length; i++){
        switch(i){
            case 1: ctx.fillStyle = '#fff';
            break;
            case 2: ctx.fillStyle = 'red';
            break;
            case 3: ctx.fillStyle = 'green';
            break;
            case 4: ctx.fillStyle = 'blue';
            break;
            case 5: ctx.fillStyle = 'cyan';
            break;
            default: ctx.fillStyle = 'yellow';
        }
        ctx.fillRect(snake[i].x, snake[i].y, 19, 19);
        console.log(snake[i].x, snake[i].y);
    }
}

const move = (x, y) => {
    //background
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, 600,  600);
    
    for(let i = 0; i < snake.length; i++){
        if(i > 0){
            snake[i-1].x = snake[i].x;
            snake[i-1].y = snake[i].y;
        }
        snake[i].y += y;
        snake[i].x += x;
        if(snake[i].y >= 600) snake[i].y = 0;
        if(snake[i].y < 0) snake[i].y = 580;
        if(snake[i].x >= 600) snake[i].x = 0;
        if(snake[i].x < 0) snake[i].x = 580;

        //draw rectangle
        ctx.fillStyle = '#fff';
        switch(i){
            case 1: ctx.fillStyle = '#fff';
            break;
            case 2: ctx.fillStyle = 'red';
            break;
            case 3: ctx.fillStyle = 'green';
            break;
            case 4: ctx.fillStyle = 'blue';
            break;
            case 5: ctx.fillStyle = 'cyan';
            break;
            default: ctx.fillStyle = 'yellow';
        }
        ctx.fillRect(snake[i].x, snake[i].y, 19, 19);
        console.log(snake[0].x, snake[0].y);
    }
    
}
    const firstmove = (x, y) => {

        for(let i = 0; i < snake.length; i++){
            snake[i].y -= y;
            snake[i].x -= x;
            if(snake[i].y >= 600) snake[i].y = 0;
            if(snake[i].y < 0) snake[i].y = 580;
            if(snake[i].x >= 600) snake[i].x = 0;
            if(snake[i].x < 0) snake[i].x = 580;
        }
        clearInterval(timer);
        timer = setInterval("move(" + x + ", " + y + ")", 500);
    }

//start
start();
//timer = setInterval("move(20, 0)", 500);

//moving
const moving = (e) => {
    //down
    if(e.code === 'KeyS'){
        firstmove(0, 20);
    }
    //up
    else if(e.code === 'KeyW'){
        firstmove(0, -20);
    }
    //left
    else if(e.code === 'KeyA') {
        firstmove(-20, 0);
    }
    //right
    else if(e.code === 'KeyD') {
        firstmove(20, 0);
    }
    else console.log("doesnt work");
    console.log(e.code);
}

document.addEventListener('keypress', moving);
