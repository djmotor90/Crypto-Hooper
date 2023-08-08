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

// Energy Management
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

// Crypto

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

//   Player Dashboard
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

// Colling Management

const coolingUnits = [
    {
        name: "Boreas' Breath",
        coolingPower: 10,
        energyConsumption: 2,
        cost: 1000,
        description: "Harness the north wind's chilly gusts for basic cooling."
    },
    {
        name: "Poseidon's Wave",
        coolingPower: 20,
        energyConsumption: 4,
        cost: 2000,
        description: "Utilize the refreshing power of sea waves for better cooling."
    },
    {
        name: "Eurus' Zephyr",
        coolingPower: 30,
        energyConsumption: 6,
        cost: 3000,
        description: "Draw on the eastern wind's gentle breezes for efficient cooling."
    },
    {
        name: "Hephaestus' Aether",
        coolingPower: 40,
        energyConsumption: 8,
        cost: 4000,
        description: "Use the pure upper air that the gods breathe for high-level cooling."
    },
    {
        name: "Helios' Eclipse",
        coolingPower: 50,
        energyConsumption: 10,
        cost: 5000,
        description: "Employ the shadow of the sun god for powerful cooling."
    },
    {
        name: "Notus' Mist",
        coolingPower: 60,
        energyConsumption: 12,
        cost: 6000,
        description: "Utilize the southern wind's foggy curtain for superior cooling."
    },
    {
        name: "Hades' Chill",
        coolingPower: 70,
        energyConsumption: 14,
        cost: 7000,
        description: "Exploit the underworld's icy cold for supreme cooling."
    },
    {
        name: "Demeter's Frost",
        coolingPower: 80,
        energyConsumption: 16,
        cost: 8000,
        description: "Leverage the goddess of harvest's wintry touch for efficient cooling."
    },
    {
        name: "Artemis' Moonlight",
        coolingPower: 90,
        energyConsumption: 18,
        cost: 9000,
        description: "Use the cool light of the moon for effective cooling."
    },
    {
        name: "Kronos' Void",
        coolingPower: 100,
        energyConsumption: 20,
        cost: 10000,
        description: "Utilize the void of the titan of time for ultimate cooling."
    }
];

// Upgrades

const rigUpgrades = [
    {
        name: "Aegis Shield",
        effect: "Reduces breakdown probability by 10%",
        energyConsumption: 1,
        cost: 1000,
        description: "The divine shield reduces wear and tear on your rig."
    },
    {
        name: "Hermes' Winged Sandals",
        effect: "Increases mining speed by 10%",
        energyConsumption: 2,
        cost: 2000,
        description: "Fly through computations with the speed of Hermes."
    },
    {
        name: "Aphrodite's Charm",
        effect: "Increases resale value by 10%",
        energyConsumption: 3,
        cost: 3000,
        description: "Make your rigs irresistible to buyers with Aphrodite's charm."
    },
    {
        name: "Dionysus' Vine",
        effect: "Reduces energy consumption by 10%",
        energyConsumption: 4,
        cost: 4000,
        description: "Tap into the god of wine's ability to relax and reduce power drain."
    },
    {
        name: "Athena's Owl",
        effect: "Increases efficiency by 10%",
        energyConsumption: 5,
        cost: 5000,
        description: "Boost your rig's wisdom and efficiency with Athena's owl."
    },
    {
        name: "Apollo's Lyre",
        effect: "Reduces heat generation by 10%",
        energyConsumption: 6,
        cost: 6000,
        description: "Keep your rigs cool with the soothing tunes of Apollo's lyre."
    },
    {
        name: "Hephaestus' Hammer",
        effect: "Reduces repair costs by 10%",
        energyConsumption: 7,
        cost: 7000,
        description: "Make repairs easier and cheaper with the blacksmith god's hammer."
    },
    {
        name: "Poseidon's Trident",
        effect: "Increases rig capacity by 10%",
        energyConsumption: 8,
        cost: 8000,
        description: "Expand your rig's capacity with the sea god's trident."
    },
    {
        name: "Hades' Helm",
        effect: "Makes breakdowns less likely during peak hours",
        energyConsumption: 9,
        cost: 9000,
        description: "Keep your rig safe during peak hours with the invisibility helm of Hades."
    },
    {
        name: "Zeus' Thunderbolt",
        effect: "Increases mining speed, efficiency, and capacity by 10%",
        energyConsumption: 10,
        cost: 10000,
        description: "Supercharge your rig with the king god's thunderbolt."
    }
];
