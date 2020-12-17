const canvas = document.getElementById('snake');
const ctx = canvas.getContext('2d');
let positionX = 0;
let positionY = 0;
let timer;
const move = (x, y) => {
    //background
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, 600,  600);

    positionY += y;
    positionX += x;
    if(positionY >= 600) positionY = 0;
    if(positionY < 0) positionY = 580;
    if(positionX >= 600) positionX = 0;
    if(positionX < 0) positionX = 580;

    //first rectangle
    ctx.fillStyle = '#fff';
    ctx.fillRect(positionX, positionY, 20, 20);
    console.log(positionX,positionY);

    clearTimeout(timer);
    timer = setTimeout("move("+x+", "+y+")", 500);
}

//start
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
