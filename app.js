// Logoin Page Code
document.getElementById('new-game-button').addEventListener('click', function() {
    console.log('New Game button was clicked');
    const SID = Math.floor(Math.random() * 10000);
    console.log('Generated SID:', SID);
    document.getElementById('sid-display').innerText = `SID: ${SID}`;
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('game-screen').style.display = 'block';
    document.body.classList.remove('start-screen');
  
    document.body.classList.add('game-screen');
   
    
});

document.getElementById('load-game-button').addEventListener('click', function() {
    console.log('Load Game button was clicked');
    const SID = prompt('Enter your SID:');
    console.log('Entered SID:', SID);
    document.getElementById('sid-display').innerText = `SID: ${SID}`;
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('game-screen').style.display = 'block';
    document.body.classList.remove('start-screen');
  
    document.body.classList.add('game-screen');
    
    
});



// Music controlls
document.getElementById('mute-button').addEventListener('click', function() {
    const bgMusic = document.getElementById('bg-music');
    if (bgMusic.muted) {
        bgMusic.muted = false;
        this.innerText = 'Mute';
    } else {
        bgMusic.muted = true;
        this.innerText = 'Unmute';
    }
});
document.getElementById('new-game-button').addEventListener('click', function() {
    document.getElementById('bg-music').src = './assets/Music/The Inner Sound - Jesse Gallagher.mp3';
  
});

// End of music Controlls

// End of login page


// Start of the game


document.getElementById('mute-button-game').addEventListener('click', function() {
    const bgMusic = document.getElementById('bg-music');
    if (bgMusic.muted) {
        bgMusic.muted = false;
        this.innerText = 'Mute';
    } else {
        bgMusic.muted = true;
        this.innerText = 'Unmute';
    }
});