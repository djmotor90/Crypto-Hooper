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

// Close button
let closeButtons = document.querySelectorAll('.close');

closeButtons.forEach(button => {
    button.addEventListener('click', function() {
        button.closest('.modal').style.display = 'none'; // Close the closest parent modal of the clicked button
    });
});


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


// End of Player Dashboard


// Market Value
const cryptocurrencies = [
    { name: 'Bitcoin', symbol: 'BTC', value: 29041.99 },
    { name: 'Ethereum', symbol: 'ETH', value: 1833.75 },
    { name: 'Litecoin', symbol: 'LTC', value: 82.69 },
    { name: 'Bitcoin Cash', symbol: 'BCH', value: 225.1 },
    { name: 'Monero', symbol: 'XMR', value: 75.85 },
    { name: 'Dash', symbol: 'DASH', value: 31.13 },
    { name: 'Zcash', symbol: 'ZEC', value: 28.40 },
    { name: 'Ethereum Classic', symbol: 'ETC', value: 17.90 },
    { name: 'NEO', symbol: 'NEO', value: 8.39 }
  ];

  function updateMarketValues() {
    cryptocurrencies.forEach(crypto => {
      const changePercent = Math.random() * 10 - 5; // Random change between -5% and +5%
      crypto.value += crypto.value * (changePercent / 100);
      crypto.value = parseFloat(crypto.value.toFixed(2)); // Round to 2 decimal places
    });
  }

  setInterval(() => {
    updateMarketValues();
    displayMarketValues(); // This will be a new function to update the values on the page
  }, 10000); // Update every 10 seconds
  

  function displayMarketValues() {
    const marketList = document.getElementById('market-list');
    marketList.innerHTML = '';
    
    cryptocurrencies.forEach(crypto => {
      const listItem = document.createElement('li');
      listItem.textContent = `${crypto.name} (${crypto.symbol}) = $${crypto.value}`;
      marketList.appendChild(listItem);
    });
    
    const updateTime = document.getElementById('update-time');
    updateTime.textContent = `Last Updated: ${new Date().toLocaleString()}`;
  }

  // Market Info Modal Logic
let marketInfoModal = document.getElementById('market-info-modal');
let marketInfoBtn = document.getElementById('show-market-info-btn');
let closeMarketInfo = document.getElementsByClassName('close')[0];



// End of Market Value

// Unified Modal Logic for all modals
function showModal(modalId) {
    let modal = document.getElementById(modalId);
    modal.style.display = 'block';
}

function hideModal(modalId) {
    let modal = document.getElementById(modalId);
    modal.style.display = 'none';
}

document.getElementById('show-stats-btn').addEventListener('click', function() {
    showModal('player-dashboard-modal');
});

document.getElementById('show-market-info-btn').addEventListener('click', function() {
    showModal('market-info-modal');
    displayMarketValues();
});

window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        hideModal(event.target.id);
    }
}