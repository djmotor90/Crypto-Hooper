// Start Screen
document.getElementById('start-button').addEventListener('click', function() {
    document.getElementById('landing-screen').style.display = 'none'; //https://stackoverflow.com/questions/73295576/how-to-create-a-start-screen-for-my-blackjack-game-in-html
    document.getElementById('start-screen').style.display = 'block'; //https://stackoverflow.com/questions/73295576/how-to-create-a-start-screen-for-my-blackjack-game-in-html
    document.body.classList.remove('landing-screen');
    document.body.classList.add('start-screen');
    document.getElementById('bg-music-login').play(); // Play the login music
});

// End Start Screen

// Login Page Code
document.getElementById('new-game-button').addEventListener('click', function() {
    console.log('New Game button was clicked');
    const SID = Math.floor(Math.random() * 10000); //https://www.sitepoint.com/jquery-infinite-scrolling-demos/
    console.log('Generated SID:', SID);
    document.getElementById('sid-display').innerText = `SID: ${SID}`;
    document.getElementById('start-screen').style.display = 'none'; //https://stackoverflow.com/questions/73295576/how-to-create-a-start-screen-for-my-blackjack-game-in-html
    document.getElementById('game-screen').style.display = 'block'; //https://stackoverflow.com/questions/73295576/how-to-create-a-start-screen-for-my-blackjack-game-in-html
    document.body.classList.remove('start-screen');
    document.body.classList.add('game-screen');
    
    document.getElementById('bg-music-login').pause(); // Pause the login music
    document.getElementById('bg-music-game').play(); // Play the game music

    // Reset purchases for new game
    purchasedItems = [];
    savePurchases();
});
//Load game function
document.getElementById('load-game-button').addEventListener('click', function() {
    console.log('Load Game button was clicked');
    const SID = prompt('Enter your SID:');
    console.log('Entered SID:', SID);
    document.getElementById('sid-display').innerText = `SID: ${SID}`;
    document.getElementById('start-screen').style.display = 'none'; //https://stackoverflow.com/questions/73295576/how-to-create-a-start-screen-for-my-blackjack-game-in-html
    document.getElementById('game-screen').style.display = 'block'; //https://stackoverflow.com/questions/73295576/how-to-create-a-start-screen-for-my-blackjack-game-in-html
    document.body.classList.remove('start-screen');
    document.body.classList.add('game-screen');
    
    document.getElementById('bg-music-login').pause(); // Pause the login music
    document.getElementById('bg-music-game').play(); // Play the game music
    
    // Load the player's stats and purchases from localStorage
    loadPlayerStats();
    loadPurchases();
    loadMiningSelection();
    // Update the player dashboard and the purchased items list
    updatePlayerDashboard();
    displayPurchasedItems();
});

// Music controls https://stackoverflow.com/questions/45117705/mute-unmute-button-for-background-sound
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
// Game mute buton logic https://stackoverflow.com/questions/45117705/mute-unmute-button-for-background-sound
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
        button.closest('.modal').style.display = 'none'; // Close the closest parent modal of the clicked button <!-- This function was generated with assistance from ChatGPT by OpenAI -->
    });
});

// Player Dashboard

// Maintain the purchase record
let purchasedItems = [];
const rigList = document.getElementById('mining-rigs-list');
const energyList = document.getElementById('energy-management-list');
const coolingList = document.getElementById('cooling-units-list');
const upgradeList = document.getElementById('upgrade-list');

// Function to save the player's current purchases to localStorage
function savePurchases() {
    const SID = document.getElementById('sid-display').innerText.split(" ")[1];
    localStorage.setItem(`purchasedItems_${SID}`, JSON.stringify(purchasedItems));
}

// Function to load the player's purchases from localStorage
function loadPurchases() {
    const SID = document.getElementById('sid-display').innerText.split(" ")[1];
    const loadedPurchases = localStorage.getItem(`purchasedItems_${SID}`);
    if (loadedPurchases) {
        purchasedItems = JSON.parse(loadedPurchases);
    } else {
        purchasedItems = [];
    }
}

// Function to save the player's current stats to localStorage
function savePlayerStats() {
    const SID = document.getElementById('sid-display').innerText.split(" ")[1];
    localStorage.setItem(`playerStats-${SID}`, JSON.stringify(playerStats));
}

// Function to load the player's stats from localStorage
function loadPlayerStats() {
    const SID = document.getElementById('sid-display').innerText.split(" ")[1];
    const loadedStats = localStorage.getItem(`playerStats-${SID}`);
    if (loadedStats) {
        playerStats = JSON.parse(loadedStats);
    }
}

// Function to display the list of purchased items in the Player Dashboard
function displayPurchasedItems() {
    const purchasedItemsList = document.getElementById('purchased-items-list');
    
    // Clear the list
    purchasedItemsList.innerHTML = '';
    
    // Populate the list with purchased items
    purchasedItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        const sellButton = document.createElement('button');
        sellButton.textContent = 'Sell';
        sellButton.addEventListener('click', function() {
            // Find the rig's resale value
            const rig = miningRigs.find(rig => rig.name === item);
            if (rig) {
                playerStats.cash += rig.resaleValue; // Add the resale value to player's cash
                alert(`Sold ${item} for $${rig.resaleValue}`);
            } else {
                alert(`Sold ${item}`);
            }
            
            // Remove the item from the purchased items list
            const itemIndex = purchasedItems.indexOf(item);
            if (itemIndex > -1) {
                purchasedItems.splice(itemIndex, 1);
            }
            displayPurchasedItems();
            updatePlayerDashboard();
            savePurchases();
        });
        listItem.appendChild(sellButton);
        purchasedItemsList.appendChild(listItem);
    });
}


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
    savePlayerStats();
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
      const changePercent = Math.random() * 10 - 5; // Random change between -5% and +5% //https://www.sitepoint.com/jquery-infinite-scrolling-demos/
      crypto.value += crypto.value * (changePercent / 100);
      crypto.value = parseFloat(crypto.value.toFixed(2)); // Round to 2 decimal places https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
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
    let modal = document.getElementById(modalId); //https://stackoverflow.com/questions/60248882/modal-does-not-close-when-clicked
    modal.style.display = 'block';
}

function hideModal(modalId) {
    let modal = document.getElementById(modalId); //https://stackoverflow.com/questions/60248882/modal-does-not-close-when-clicked
    modal.style.display = 'none';
}

document.getElementById('show-stats-btn').addEventListener('click', function() {
    showModal('player-dashboard-modal');
    displayPurchasedItems();
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
    const coolingList = document.getElementById('cooling-units-list');
    const rigList = document.getElementById('mining-rigs-list');
    const energyList = document.getElementById('energy-management-list');
    const upgradeList = document.getElementById('upgrade-list');

    // Clear out any previous content
    rigList.innerHTML = '';

    // Populate mining rigs https://www.w3schools.com/jsref/prop_html_innerhtml.asp
    miningRigs.forEach(rig => {
        const rigInfo = document.createElement('div');
        rigInfo.innerHTML = ` 
            <img src="${rig.image}" alt="${rig.name} Image" width="100">    
            <h3>${rig.name}</h3>
            <p>Mining Speed: ${rig.miningSpeed}</p>
            <p>Energy Consumption: ${rig.energyConsumption}</p>
            <p>Cost: $${rig.cost}</p>
            <p>Breakdown Probability: ${(rig.breakdownProbability * 100)}% per hour</p>
            <p>Repair Cost: $${rig.repairCost}</p>
            <p>Heat Generation: ${rig.heatGeneration}</p>
            <p>Resale Value: $${rig.resaleValue}</p>
            <p>Upgrade Slots: ${rig.upgradeSlots}</p>
            <button class="buy-btn" data-cost="${rig.cost}" data-name="${rig.name}">Buy</button>

        `;
        rigList.appendChild(rigInfo);
    });
    rigList.querySelectorAll('.buy-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const cost = parseFloat(this.getAttribute('data-cost'));
            const rigName = this.getAttribute('data-name');
            
            if (playerStats.cash >= cost) {
                playerStats.cash -= cost;  // deduct the cost from player's cash
                purchasedItems.push(rigName);  // Store the rig name in the purchased items array
                savePurchases();  // Save the purchases to localStorage
                alert('Purchase successful!');
                updatePlayerDashboard();  // Update player's cash display
            } else {
                alert('Insufficient funds!');
            }
        });
    });

    // Toggle visibility
    rigList.style.display = 'grid';
    energyList.style.display = 'none';
    coolingList.style.display = 'none';
    upgradeList.style.display = 'none';
}

    // Toggle visibility
    rigList.style.display = 'grid';
    energyList.style.display = 'none';
    coolingList.style.display = 'none';
    upgradeList.style.display = 'none';



// Energy management
function showEnergyManagement() {
    const coolingList = document.getElementById('cooling-units-list');
    const rigList = document.getElementById('mining-rigs-list');
    const energyList = document.getElementById('energy-management-list');
    const upgradeList = document.getElementById('upgrade-list');

    // Clear out any previous content
    energyList.innerHTML = '';

    // Populate energy units https://www.w3schools.com/jsref/prop_html_innerhtml.asp
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
    coolingList.style.display = 'none';
    upgradeList.style.display = 'none';
}

// Colling management

function showCoolingUnits() {
    const coolingList = document.getElementById('cooling-units-list');
    const rigList = document.getElementById('mining-rigs-list');
    const energyList = document.getElementById('energy-management-list');
    const upgradeList = document.getElementById('upgrade-list');

    // Clear out any previous content
    coolingList.innerHTML = '';

    // Populate cooling units https://www.w3schools.com/jsref/prop_html_innerhtml.asp
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
    upgradeList.style.display = 'none';
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

    // Populate upgrades https://www.w3schools.com/jsref/prop_html_innerhtml.asp
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

// Function to increment the player's cash by $0.01 as a standart for everyone
function incrementCash() {
    playerStats.cash += 0.01;
    updatePlayerDashboard();
    savePlayerStats();
}

// Schedule the function to be called every 1 minute
setInterval(incrementCash, 60000);


//Populate the dropdown with crypto symbols for mining
const cryptoDropdown = document.getElementById('crypto-selection');

cryptocurrencies.forEach(crypto => {
    const option = document.createElement('option');
    option.value = crypto.symbol;
    option.textContent = `${crypto.name} (${crypto.symbol})`;
    cryptoDropdown.appendChild(option);
});
//This will save the selection in the localstorage
cryptoDropdown.addEventListener('change', function() {
    const SID = document.getElementById('sid-display').innerText.split(" ")[1];
    localStorage.setItem(`currentlyMining_${SID}`, this.value);
});

function loadMiningSelection() {
    const SID = document.getElementById('sid-display').innerText.split(" ")[1];
    const savedMiningSelection = localStorage.getItem(`currentlyMining_${SID}`);
    if (savedMiningSelection) {
        cryptoDropdown.value = savedMiningSelection;
    }
}

const selectedCryptoSymbol = cryptoDropdown.value;


//logic for the purchased mininig rigs

function mineCryptocurrency() {
    // Get the selected cryptocurrency from the dropdown.
    const selectedSymbol = document.getElementById('crypto-selection').value;
    const selectedCrypto = cryptocurrencies.find(crypto => crypto.symbol === selectedSymbol);

    // Compute the total mining rate from all purchased rigs.
    let totalMiningRate = 0;
    purchasedItems.forEach(itemName => {
        const rig = miningRigs.find(rig => rig.name === itemName);
        if (rig) {
            // 3. Compute the mining rate for this rig.
            const miningRate = 0.00001* rig.miningSpeed / selectedCrypto.difficulty;
            totalMiningRate += miningRate;
        }
    });

    // Update the player's balance for that cryptocurrency.
    playerStats[selectedSymbol.toLowerCase()] += totalMiningRate;
    updatePlayerDashboard();  // Assuming you have this function to update the player's displayed stats.
    
    // Save to localStorage
    savePlayerStats();
}

// Call the mining function every 10 seconds
setInterval(mineCryptocurrency, 10000);


// Get all sell buttons
const sellButtons = document.querySelectorAll('.sell-btn');

// Add event listener to each sell button
sellButtons.forEach(btn => {
    btn.addEventListener('click', function() {
        const cryptoType = this.getAttribute('data-crypto');

        if (playerStats[cryptoType] > 0) { // Check if player has some of this cryptocurrency
            const crypto = cryptocurrencies.find(c => c.symbol.toLowerCase() === cryptoType);
            const saleAmount = crypto.value * playerStats[cryptoType];
            playerStats.cash += saleAmount; // Update player's cash
            playerStats[cryptoType] = 0;    // Set cryptocurrency balance to zero
            
            // Update player's dashboard
            document.getElementById(`player-${cryptoType}`).textContent = playerStats[cryptoType];
            document.getElementById('player-cash').textContent = playerStats.cash.toFixed(2); //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
            
            alert(`Sold all your ${crypto.name} for $${saleAmount.toFixed(2)}!`); //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed

            // Save updated playerStats to localStorage
            localStorage.setItem('playerStats', JSON.stringify(playerStats));

        } else {
            alert(`You don't have any ${cryptoType.toUpperCase()} to sell.`);
        }
    });
});