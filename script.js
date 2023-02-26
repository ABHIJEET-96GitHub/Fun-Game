score = 0;
cross = true;

audio = new Audio('');
audiogo = new Audio('');
setTimeout(() => {
    audio.play();
},1000);
document.onkeydown = function (e) {
    console.log("Key code is: ", e.key)
    if (e.key == 'ArrowUp') {
        player = document.querySelector('.player');
        player.classList.add('animatePlayer');
        setTimeout(() => {
            player.classList.remove('animatePlayer')
        }, 700);
    }

    if (e.key == 'ArrowRight') {
        player = document.querySelector('.player');
        playerX = parseInt(window.getComputedStyle(player, null).getPropertyValue('left'));
        player.style.left = playerX + 112 + "px";
    }

    if (e.key == 'ArrowLeft') {
        player = document.querySelector('.player');
        playerX = parseInt(window.getComputedStyle(player, null).getPropertyValue('left'));
        player.style.left = (playerX - 112) + "px";
    }
}

setInterval(() => {
    player = document.querySelector('.player');
    gameOver = document.querySelector('.gameOver');
    obstacle = document.querySelector('.obstacle');
    audiogo.play();
    setTimeout(() => {
        audiogo.pause();
        audio.pause();
    },1000);

    px = parseInt(window.getComputedStyle(player, null).getPropertyValue('left'));
    py = parseInt(window.getComputedStyle(player, null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    offsetX = Math.abs(px - ox);
    offsetY = Math.abs(py - oy);
    if (offsetX < 50 && offsetY < 30) {
        gameOver.innerHTML = "Game Over - Reload to start over";
        obstacle.classList.remove('obstacleAni')
    }
    else if (offsetX < 45 && cross) {
        score += 1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        
    }
}, 100);

function updateScore(score) {
    scoreCont.innerHTML = "Your Score: " + score
}