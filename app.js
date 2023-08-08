// Start Screen
document.getElementById('start-button').addEventListener('click', function() {
    document.getElementById('landing-screen').style.display = 'none';
    document.getElementById('start-screen').style.display = 'block';
    document.body.classList.remove('landing-screen');
    document.body.classList.add('start-screen');
    document.getElementById('bg-music-login').play(); // Play the login music
});

// End Start Screen

// Login Page Code
document.getElementById('new-game-button').addEventListener('click', function() {
    console.log('New Game button was clicked');
    const SID = Math.floor(Math.random() * 10000);
    console.log('Generated SID:', SID);
    document.getElementById('sid-display').innerText = `SID: ${SID}`;
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('game-screen').style.display = 'block';
    document.body.classList.remove('start-screen');
    document.body.classList.add('game-screen');
    
    document.getElementById('bg-music-login').pause(); // Pause the login music
    document.getElementById('bg-music-game').play(); // Play the game music
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
    
    document.getElementById('bg-music-login').pause(); // Pause the login music
    document.getElementById('bg-music-game').play(); // Play the game music
});

// Music controls
document.getElementById('mute-button').addEventListener('click', function() {
    const bgMusicLogin = document.getElementById('bg-music-login');
    const bgMusicGame = document.getElementById('bg-music-game');
    
    if (bgMusicLogin.muted || bgMusicGame.muted) {
        bgMusicLogin.muted = false;
        bgMusicGame.muted = false;
        this.innerText = 'Mute';
    } else {
        bgMusicLogin.muted = true;
        bgMusicGame.muted = true;
        this.innerText = 'Unmute';
    }
});

document.getElementById('mute-button-game').addEventListener('click', function() {
    const bgMusic = document.getElementById('bg-music-game');
    if (bgMusic.muted) {
        bgMusic.muted = false;
        this.innerText = 'Mute';
    } else {
        bgMusic.muted = true;
        this.innerText = 'Unmute';
    }
});

// End of music Controls


// Player Dashboard

const playerStats = {
    cash: 50001, // Starting balance
    btc: 0,
    eth: 0,
    ltc: 0,
    bch: 0,
    xmr: 0,
    dash: 0,
    zec: 0,
    etc: 0,
    neo: 0
};

// Function to update the display with player stats
function updatePlayerDashboard() {
    document.getElementById('player-cash').textContent = playerStats.cash;
    document.getElementById('player-btc').textContent = playerStats.btc;
    document.getElementById('player-eth').textContent = playerStats.eth;
    document.getElementById('player-ltc').textContent = playerStats.ltc;
    document.getElementById('player-bch').textContent = playerStats.bch;
    document.getElementById('player-xmr').textContent = playerStats.xmr;
    document.getElementById('player-dash').textContent = playerStats.dash;
    document.getElementById('player-zec').textContent = playerStats.zec;
    document.getElementById('player-etc').textContent = playerStats.etc;
    document.getElementById('player-neo').textContent = playerStats.neo;
}


updatePlayerDashboard();

// Modal Logic
let modal = document.getElementById('player-dashboard-modal');
let btn = document.getElementById('show-stats-btn');
let span = document.getElementsByClassName('close')[0];

btn.onclick = function() {
    modal.style.display = 'block';
}

span.onclick = function() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}
// End of Player Dashboard