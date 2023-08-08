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

document.getElementById('show-shop-btn').addEventListener('click', function() {
    showModal('shop-modal');
    displayMarketValues();
});

window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        hideModal(event.target.id);
    }
}


// Create Mining Rigs
let shopModal = document.getElementById('shop-modal');
let shopBtn = document.getElementById('show-shop-btn');
let closeShop = shopModal.querySelector('.close');

function showMiningRigs() {
    const rigList = document.getElementById('mining-rigs-list');
    const energyList = document.getElementById('energy-management-list');

    // Clear out any previous content
    rigList.innerHTML = '';

    // Populate mining rigs
    miningRigs.forEach(rig => {
        const rigInfo = document.createElement('div');
        rigInfo.innerHTML = `
            <h3>${rig.name}</h3>
            <p>Mining Speed: ${rig.miningSpeed}</p>
            <p>Energy Consumption: ${rig.energyConsumption}</p>
            <p>Cost: $${rig.cost}</p>
            <p>Breakdown Probability: ${(rig.breakdownProbability * 100)}% per hour</p>
            <p>Repair Cost: $${rig.repairCost}</p>
            <p>Heat Generation: ${rig.heatGeneration}</p>
            <p>Resale Value: $${rig.resaleValue}</p>
            <p>Upgrade Slots: ${rig.upgradeSlots}</p>
            <button>Buy</button>
        `;
        rigList.appendChild(rigInfo);
    });

    // Toggle visibility
    rigList.style.display = 'grid';
    energyList.style.display = 'none';
}


// Energy management
function showEnergyManagement() {
    const rigList = document.getElementById('mining-rigs-list');
    const energyList = document.getElementById('energy-management-list');

    // Clear out any previous content
    energyList.innerHTML = '';

    // Populate energy units
    energyUnits.forEach(unit => {
        const unitInfo = document.createElement('div');
        unitInfo.innerHTML = `
            <h3>${unit.name}</h3>
            <p>Power Output: ${unit.powerOutput}</p>
            <p>Cost: $${unit.cost}</p>
            <p>Description: ${unit.description}</p>
            <button>Buy</button>
        `;
        energyList.appendChild(unitInfo);
    });

    // Toggle visibility
    rigList.style.display = 'none';
    energyList.style.display = 'grid';
}

// Colling management

function showCoolingUnits() {
    const coolingList = document.getElementById('cooling-units-list');
    const rigList = document.getElementById('mining-rigs-list');
    const energyList = document.getElementById('energy-management-list');

    // Clear out any previous content
    coolingList.innerHTML = '';

    // Populate cooling units
    coolingUnits.forEach(unit => {
        const unitInfo = document.createElement('div');
        unitInfo.innerHTML = `
            <h3>${unit.name}</h3>
            <p>Cooling Power: ${unit.coolingPower}</p>
            <p>Energy Consumption: ${unit.energyConsumption}</p>
            <p>Cost: $${unit.cost}</p>
            <p>Description: ${unit.description}</p>
            <button>Buy</button>
        `;
        coolingList.appendChild(unitInfo);
    });

    // Toggle visibility
    rigList.style.display = 'none';
    energyList.style.display = 'none';
    coolingList.style.display = 'grid';
}

// Upgrade List

// Upgrade Units
function showRigUpgrades() {
    const upgradeList = document.getElementById('upgrade-list');
    const rigList = document.getElementById('mining-rigs-list');
    const energyList = document.getElementById('energy-management-list');
    const coolingList = document.getElementById('cooling-units-list');

    // Clear out any previous content
    upgradeList.innerHTML = '';

    // Populate upgrades
    rigUpgrades.forEach(upgrade => {
        const upgradeInfo = document.createElement('div');
        upgradeInfo.innerHTML = `
            <h3>${upgrade.name}</h3>
            <p>Effect: ${upgrade.effect}</p>
            <p>Energy Consumption: ${upgrade.energyConsumption}</p>
            <p>Cost: $${upgrade.cost}</p>
            <p>Description: ${upgrade.description}</p>
            <button>Buy</button>
        `;
        upgradeList.appendChild(upgradeInfo);
    });

    // Toggle visibility
    rigList.style.display = 'none';
    energyList.style.display = 'none';
    coolingList.style.display = 'none';
    upgradeList.style.display = 'grid';
}

