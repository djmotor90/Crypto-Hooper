// Logoin Page Code
document.getElementById('new-game-button').addEventListener('click', function() {
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('game-screen').style.display = 'block';
    // Generates a new SID and start a new game
});

document.getElementById('load-game-button').addEventListener('click', function() {
    const SID = prompt('Enter your SID:');
    // Load the game state from localStorage and continue the game
});

// End of login page