
let audio = new Audio('gamesounds/music_zapsplat_game_music_fun_tropical_caribean_steel_drums_percussion_008.mp3');
audio.play();
let  = document.querySelector("#replay");
let mute = document.querySelector("#mute");
let audioPlay = true;
console.log(mute);
console.log(replay);


replay.addEventListener("click", ()=>{
    location.reload(); 

   
})
mute.addEventListener("click", ()=>{
    if (audioPlay){
    audio.pause();
    audioPlay = false;
    }
    else {
        audioPlay = true;
        audio.play();
    }
})

let canvas = document.querySelector("#canvas"); 
let ctx = canvas.getContext('2d'); 

let maze = 

[
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,5,0,0,0,2,0,0,0,0,1,1,1,1,1,8,5,0,0],
    [0,0,1,7,0,0,1,1,7,0,1,1,4,0,1,0,1,1,1,0],
    [1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,5],
    [1,4,0,4,1,7,0,8,0,1,4,1,5,1,1,0,1,5,1,0],
    [5,0,0,0,5,0,0,0,0,5,0,0,0,0,0,0,0,0,6,3],
]


let tileSize = 50;
let playerPosition = {x:0, y:0};

let parrotCounter = 0;

let pirat = 2;
pirat = new Image(); 
pirat.src= 'images/pirat.png';

let trunk = 1;
trunk = new Image();
trunk.src= 'images/trunk.png';

let treasure = 3;
treasure = new Image();
treasure.src= 'images/treasure.png';


let bomb = 4;
bomb = new Image();
bomb.src= 'images/bomb.png';

let coin = 5;
coin = new Image();
coin.src= 'images/coin.png';

let parrot = 6;
parrot = new Image();
parrot.src= 'images/parrot.png';

let monkey = 7;
monkey = new Image();
monkey.src= 'images/monkey.png';

let dolphin = 8;
dolphin = new Image();
dolphin.src= 'images/dolphin.png';


let coinCollector = 0;

function playlose(){

    let gameSound = new Audio('gamesounds/zapsplat_cartoon_character_frustrated_urrhh_10463.mp3');
    gameSound.play();
}
function playBomb(){

    let gameSound = new Audio('gamesounds/zapsplat_cartoon_descend_mallets_high_to_low_slow_002_47927.mp3');
    gameSound.play();
}
function playParrot(){

    let gameSound = new Audio('gamesounds/zapsplat_cartoon_parrot_squawk_001_19824.mp3');
    gameSound.play();
}
function playMonkey(){

    let gameSound = new Audio('gamesounds/zapsplat_cartoon_bird_squawk_13903.mp3');
    gameSound.play();
}
function playDolphin(){

    let gameSound = new Audio('gamesounds/zapsplat_cartoon_dolphin_laugh_001_25171.mp3');
    gameSound.play();
}
function playCoin(){

    let gameSound = new Audio('gamesounds/zapsplat_multimedia_game_sound_collect_coin_single_001_40821.mp3');
    gameSound.play();
}
function playCoinLaugh(){

    let gameSound = new Audio('gamesounds/zapsplat_male_laugh_cartoon_like_003_50252.mp3');
    gameSound.play();
}
function playWin(){

    let gameSound = new Audio('gamesounds/zapsplat_male_laugh_cartoon_like_002_50251.mp3');
    gameSound.play();
}
function playWinMusic(){

    let gameSound = new Audio('gamesounds/zapsplat_cartoon_sneaky_walk_music_piano_tuba_marimba_18135.mp3');
    gameSound.play();

}
function CoinCouter() {
    document.querySelector('#coinCollector').innerHTML = coinCollector;
}

let navn = setInterval(parrotWalk,1500);
function parrotWalk(){
    parrotCounter++;
    if(parrotCounter < 4) {

        for(let y= 0; y < maze.length; y++){

            for(let x = 0; x < maze[y].length; x++){

     if(maze[y][x] === 6){
        console.log(maze);
         if(maze[y - 1][x] == 1) {
             maze[y - 1][x] = 6; 
             maze[y][x] = 1;
     
             
             
         }
         else if (maze[y - 1][x] == 2){
             maze[y - 1][x] = 6;
             maze[y][x] = 1;
         }

        
        }
    }
        
    }
    drawMaze();
}else if(parrotCounter < 8) { 
    for(let y= 0; y < maze.length; y++){
        for(let x = 0; x < maze[y].length; x++){

 if(maze[y][x] === 6){
    console.log(parrotCounter);
     if(maze[y + 1][x] == 1 || maze[y + 1][x] == 6) {
         maze[y + 1][x] = 6; 
         maze[y][x] = 1;    
     }
     else if (maze[y + 1][x] == 2){
         maze[y + 1][x] = 6;
         maze[y][x] = 1;
     }

    
    }
}
    }
    drawMaze();

} else {
    parrotCounter = 0;
}
    
}



ctx.drawImage(pirat,0*tileSize,0*tileSize,tileSize,tileSize);

function drawMaze(){

    for(let y= 0; y < maze.length; y++){

      for(let x = 0; x < maze[y].length; x++){



        if(maze[y][x] === 0){
            ctx.fillStyle = 'transparent';
            ctx.fillRect(x*tileSize,y*tileSize,tileSize,tileSize);
        }else if(maze[y][x] === 1){
            ctx.drawImage(trunk,x*tileSize,y*tileSize,tileSize,tileSize);
        }else if(maze[y][x] === 2){
            playerPosition.x = x; 
            playerPosition.y = y;
            ctx.drawImage(trunk,x*tileSize,y*tileSize,tileSize,tileSize);
            ctx.drawImage(pirat,x*tileSize,y*tileSize,tileSize,tileSize);
        }else if(maze[y][x] === 3){
            ctx.drawImage(treasure,x*tileSize,y*tileSize,tileSize,tileSize);
        }else if(maze[y][x] === 4){
            ctx.drawImage(trunk,x*tileSize,y*tileSize,tileSize,tileSize);
            ctx.drawImage(bomb,x*tileSize,y*tileSize,tileSize,tileSize);
        }else if(maze[y][x] === 5){
            ctx.drawImage(trunk,x*tileSize,y*tileSize,tileSize,tileSize);
            ctx.drawImage(coin,x*tileSize,y*tileSize,tileSize,tileSize);
        }else if(maze[y][x] === 6){ 
            ctx.drawImage(trunk,x*tileSize,y*tileSize,tileSize,tileSize);
            ctx.drawImage(parrot,x*tileSize,y*tileSize,tileSize,tileSize);
        }else if(maze[y][x] === 7){ 
            ctx.drawImage(trunk,x*tileSize,y*tileSize,tileSize,tileSize);
            ctx.drawImage(monkey,x*tileSize,y*tileSize,tileSize,tileSize);
        }else if(maze[y][x] === 8){ 
            ctx.drawImage(dolphin,x*tileSize,y*tileSize,tileSize,tileSize);
        

        }

      }
    }

}



function walk(){

    let gameSound = new Audio('gamesounds/zapsplat_cartoon_imoact_hollow_plonk_002_50049.mp3');
    gameSound.play();

}

window.addEventListener("keydown", (e)=>{

switch(e.keyCode){

    case 37: // left

    if(maze[playerPosition.y][playerPosition.x -1] === 1){
       maze[playerPosition.y ][playerPosition.x -1] = 2 
       maze[playerPosition.y ][playerPosition.x] = 1
       drawMaze();
       walk();
       playsound();
    
} 
if (maze[playerPosition.y ] [playerPosition.x -1] === 4){
        audio.pause();
        playlose();
        playBomb();
        setTimeout(function() { alert("GAME OVER"); location.reload(); }, 1000);


    }
    else if (maze[playerPosition.y -1] [playerPosition.x ] === 6){
        audio.pause();
        playlose();
        playParrot();
        setTimeout(function() { alert("GAME OVER"); location.reload(); }, 1000);

    }
    else if (maze[playerPosition.y -1] [playerPosition.x ] === 7){
        audio.pause();
        playlose();
        playMonkey();
        setTimeout(function() { alert("GAME OVER"); location.reload(); }, 1000);

    }
    else if (maze[playerPosition.y -1] [playerPosition.x ] === 8){
        audio.pause();
        playlose();
        playDolphin();
        setTimeout(function() { alert("GAME OVER"); location.reload(); }, 1000);

    }
    else if (maze[playerPosition.y -1] [playerPosition.x ] === 5){
        playCoin();
        playCoinLaugh();
        coinCollector++;
        CoinCouter();
    }

    break; 

    case 38: // up

    if(maze[playerPosition.y -1][playerPosition.x] === 1){
       maze[playerPosition.y -1 ][playerPosition.x] = 2 //players nye position
       maze[playerPosition.y ][playerPosition.x] = 1//players nye position
       drawMaze();
       walk();
    }
    else if (maze[playerPosition.y -1] [playerPosition.x ] === 4){
        audio.pause();
        playlose();
        playBomb();
        setTimeout(function() { alert("GAME OVER"); location.reload(); }, 1000);

    }
    else if (maze[playerPosition.y -1] [playerPosition.x ] === 6){
        audio.pause();
        playlose();
        playParrot();
        setTimeout(function() { alert("GAME OVER"); location.reload(); }, 1000);
       
    }
    else if (maze[playerPosition.y -1] [playerPosition.x ] === 7){
        audio.pause();
        playlose();
        playMonkey();
        setTimeout(function() { alert("GAME OVER"); location.reload(); }, 1000);
    }
    else if (maze[playerPosition.y -1] [playerPosition.x ] === 8){
        audio.pause();
        playlose();
        playDolphin();
        setTimeout(function() { alert("GAME OVER"); location.reload(); }, 1000);
    }
    else if (maze[playerPosition.y -1] [playerPosition.x ] === 5){
        playCoin();
        playCoinLaugh();
        coinCollector++;
        CoinCouter();
    }
    break; 
    case 39: // right

    if(maze[playerPosition.y][playerPosition.x +1] === 1){
       maze[playerPosition.y ][playerPosition.x +1] = 2 //players nye position
       maze[playerPosition.y ][playerPosition.x] = 1//players nye position
       drawMaze();
       walk();
    }
    else if (maze[playerPosition.y ] [playerPosition.x +1 ] === 4){
        audio.pause();
        playlose();
        playBomb();
        setTimeout(function() { alert("GAME OVER"); location.reload(); }, 1000);
    }
    else if (maze[playerPosition.y ] [playerPosition.x +1] === 6){
        audio.pause();
        playlose();
        playParrot();
        setTimeout(function() { alert("GAME OVER"); location.reload(); }, 1000);
    }
    else if (maze[playerPosition.y ] [playerPosition.x +1] === 7){
        audio.pause();
        playlose();
        playMonkey();
        setTimeout(function() { alert("GAME OVER"); location.reload(); }, 1000);
    }
    else if (maze[playerPosition.y ] [playerPosition.x +1] === 8){
        audio.pause();
        playlose();
        playDolphin();
        setTimeout(function() { alert("GAME OVER"); location.reload(); }, 1000);
    }    
    else if (maze[playerPosition.y ] [playerPosition.x +1] === 5){
        playCoin();
        playCoinLaugh();
        coinCollector++;
        CoinCouter();
    }

else if (maze[playerPosition.y ] [playerPosition.x +1] === 3){
    audio.pause();
    playWin();
    playWinMusic();
    alert("CONGRATULATIONS! YOU WON THE GAME");
}
    break; 
    case 40: // down

    if(maze[playerPosition.y+1][playerPosition.x] === 1){
       maze[playerPosition.y+1 ][playerPosition.x] = 2 //players nye position
       maze[playerPosition.y ][playerPosition.x] = 1//players nye position
       drawMaze();
       walk();
    }
    else if (maze[playerPosition.y +1] [playerPosition.x ] === 4){
        audio.pause();
        playlose();
        playBomb();
        setTimeout(function() { alert("GAME OVER"); location.reload(); }, 1000);
    }
    else if (maze[playerPosition.y +1] [playerPosition.x ] === 6){
        audio.pause();
        playlose();
        playParrot();
        setTimeout(function() { alert("GAME OVER"); location.reload(); }, 1000);
    }
    else if (maze[playerPosition.y +1] [playerPosition.x ] === 7){
        audio.pause();
        playlose();
        playMonkey();
        setTimeout(function() { alert("GAME OVER"); location.reload(); }, 1000);
    }
    else if (maze[playerPosition.y +1] [playerPosition.x ] === 8){
        audio.pause();
        playlose();
        playDolphin();
        setTimeout(function() { alert("GAME OVER"); location.reload(); }, 1000);
    }
    else if (maze[playerPosition.y +1] [playerPosition.x ] === 5){
        playCoin();
        playCoinLaugh();
        coinCollector++;
        CoinCouter();
    }

    break; 

}
    
    //left 37

    // up 38

    //right 39

    //down 40
})




window.addEventListener("keydown", keyDownTextField, false);
window.addEventListener("load", drawMaze);