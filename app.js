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

const miningRigs = [
    {
        name: 'Zeus Miner',
        miningSpeed: 50,
        energyConsumption: 20,
        cost: 10000,
        breakdownProbability: 0.02,
        repairCost: 800,
        heatGeneration: 15,
        resaleValue: 7000,
        upgradeSlots: 4
    },
    {
        name: 'Hera Excavator',
        miningSpeed: 45,
        energyConsumption: 18,
        cost: 9000,
        breakdownProbability: 0.018,
        repairCost: 750,
        heatGeneration: 14,
        resaleValue: 6300,
        upgradeSlots: 3
    },
    {
        name: 'Poseidon Drill',
        miningSpeed: 40,
        energyConsumption: 16,
        cost: 8000,
        breakdownProbability: 0.016,
        repairCost: 700,
        heatGeneration: 13,
        resaleValue: 5600,
        upgradeSlots: 3
    },
    {
        name: 'Athena Processor',
        miningSpeed: 35,
        energyConsumption: 14,
        cost: 7000,
        breakdownProbability: 0.015,
        repairCost: 650,
        heatGeneration: 12,
        resaleValue: 4900,
        upgradeSlots: 2
    },
    {
        name: 'Ares Harvester',
        miningSpeed: 30,
        energyConsumption: 12,
        cost: 6000,
        breakdownProbability: 0.014,
        repairCost: 600,
        heatGeneration: 11,
        resaleValue: 4200,
        upgradeSlots: 2
    },
    {
        name: 'Apollo Rig',
        miningSpeed: 25,
        energyConsumption: 10,
        cost: 5000,
        breakdownProbability: 0.012,
        repairCost: 550,
        heatGeneration: 10,
        resaleValue: 3500,
        upgradeSlots: 1
    },
    {
        name: 'Artemis Extractor',
        miningSpeed: 20,
        energyConsumption: 8,
        cost: 4000,
        breakdownProbability: 0.01,
        repairCost: 500,
        heatGeneration: 9,
        resaleValue: 2800,
        upgradeSlots: 1
    },
    {
        name: 'Hermes Miner',
        miningSpeed: 15,
        energyConsumption: 6,
        cost: 3000,
        breakdownProbability: 0.008,
        repairCost: 450,
        heatGeneration: 8,
        resaleValue: 2100,
        upgradeSlots: 0
    },
    {
        name: 'Hephaestus Furnace',
        miningSpeed: 10,
        energyConsumption: 4,
        cost: 2000,
        breakdownProbability: 0.006,
        repairCost: 400,
        heatGeneration: 7,
        resaleValue: 1400,
        upgradeSlots: 0
    },
    {
        name: 'Demeter Digger',
        miningSpeed: 5,
        energyConsumption: 2,
        cost: 1000,
        breakdownProbability: 0.004,
        repairCost: 300,
        heatGeneration: 6,
        resaleValue: 700,
        upgradeSlots: 0
    }
];

let shopModal = document.getElementById('shop-modal');
let shopBtn = document.getElementById('show-shop-btn');
let closeShop = shopModal.querySelector('.close');

function showMiningRigs() {
    const rigList = document.getElementById('mining-rigs-list');
    rigList.innerHTML = '';

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
}


// Energy management
const energyUnits = [
    {
        name: "Hestia's Hearth",
        powerOutput: 100,
        cost: 1000,
        description: "Harness the divine hearth's energy for basic power needs."
    },
    {
        name: "Helios' Radiance",
        powerOutput: 200,
        cost: 2000,
        description: "Utilize the sun god's brilliance for a consistent power supply."
    },
    {
        name: "Hermes' Dynamo",
        powerOutput: 300,
        cost: 3000,
        description: "Leverage the messenger god's speed for dynamic power generation."
    },
    {
        name: "Demeter's Bounty",
        powerOutput: 400,
        cost: 4000,
        description: "Use the harvest goddess's riches for abundant power production."
    },
    {
        name: "Poseidon's Surge",
        powerOutput: 500,
        cost: 5000,
        description: "Employ the sea god's tidal force for a high-energy power boost."
    },
    {
        name: "Aeolus' Gale",
        powerOutput: 600,
        cost: 6000,
        description: "Use the wind lord's gusts for efficient wind power generation."
    },
    {
        name: "Hephaestus' Forge",
        powerOutput: 700,
        cost: 7000,
        description: "Harness the blacksmith god's fiery forge for high-temperature power production."
    },
    {
        name: "Apollo's Beam",
        powerOutput: 800,
        cost: 8000,
        description: "Utilize the sun god's piercing light for powerful solar energy generation."
    },
    {
        name: "Zeus' Bolt",
        powerOutput: 900,
        cost: 9000,
        description: "Employ the king god's thunderbolt for electrifying power supply."
    },
    {
        name: "Gaia's Pulse",
        powerOutput: 1000,
        cost: 10000,
        description: "Leverage the earth mother's life force for sustainable geothermal energy."
    }
];



function showEnergyManagement() {
    const energyList = document.getElementById('energy-management-list');
    energyList.innerHTML = '';

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
}


