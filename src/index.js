const Player = require("./player");

process.on("uncaughtException", err => {
    console.error(`Error: ${err.message}`);
    process.exit(1);
});

// Starts at step 1
const player = new Player();

// Informative steps 2-7
player.nextStep();
player.nextStep();
player.nextStep();
player.nextStep();
player.nextStep();
player.nextStep();

// Craft Mind Runes
player.nextStep();
player.addItem("Wicked Hood");
player.gainXP("Runecrafting", 100 * 5.5);

// Skip basic challenges
player.nextStep();

// Quest: Death Plateau
player.nextStep();
player.completeQuest("Death Plateau", {
    farming: [100, 100, 100],
});
player.addItem("Dwarven army axe");

// Quest: Druidic Ritual
player.nextStep();
player.addItem("Coins");
player.addItem("Vial");
player.completeQuest("Druidic Ritual");

// Pick flax and buy supplies from Jack Oval
player.nextStep();
player.gainXP("Crafting", 28 * 15);
player.addItem("Coins", 28 * 30);
player.buyItem("Vial", 5);
player.buyItem("Rope", 18, 7);
player.addItem("Thread", 10);

// Mine for bronze bars
player.nextStep();
player.addItem("Bronze ore box");
player.addItem("Bronze wire");
player.addItem("Bronze bar", 6);
player.gainXP("Smithing", 9 + 30 + 15);

// Buy supplies from Jones
player.nextStep();
player.buyItem("Watering can", 8);
player.buyItem("Compost", 20);

// Fish for level 10
player.nextStep();
player.addItem("Raw crayfish");
player.gainXP("Fishing", Math.ceil(player.calculateXP(10) / 10) * 10);

// Quest: Let Them Eat Pie
player.nextStep();
player.buyItem("Wizard's Mind Bomb", 2, 10);
player.completeQuest("Let Them Eat Pie");

// Quest: Wolf Whistle
player.nextStep();
player.completeQuest("Wolf Whistle");

// Quest: Violet is Blue
player.nextStep();
player.completeQuest("Violet is Blue", {
    summoning: [1000, 1000],
    herblore: 1000,
});

// Quest: Violet is Blue Too
player.nextStep();
player.completeQuest("Violet is Blue Too", {
    herblore: [4000, 4000, 4000],
});

// Ring of kinship
player.nextStep();
player.addItem("Ring of kinship");

// Quest: The Blood Pact
player.nextStep();
player.completeQuest("The Blood Pact");

// Quest: The Restless Ghost
player.nextStep();
player.completeQuest("The Restless Ghost");

// Lumbridge Lodestone
player.nextStep();

// Quest: Cook's Assistant
player.nextStep();
player.completeQuest("Cook's Assistant");

// Quest: The Blood Pact
player.nextStep();
player.completeQuest("Myths of the White Lands", {
    farming: [500],
});

// Buy supplies from Lumbridge
player.nextStep();
player.buyItem("Bucket", 2, 7);
player.buyItem("Pot", 1, 2);
player.buyItem("Tinderbox", 1, 2);
player.buyItem("Fishing bait", 3, 10);

// Buy supplies from Beefy Bill
player.nextStep();
player.removeItem("Bucket", 4);
player.addItem("Bucket of milk", 4);
player.buyItem("Redberries", 3, 10);
player.buyItem("Pie dish", 3);
player.buyItem("Jug of water", 1);
player.buyItem("Bucket of water", 6, 2);

// Varrock Lodestone
player.nextStep();

// Natural history quiz
player.nextStep();
player.gainXP("Slayer", 1000);
player.gainXP("Hunter", 1000);
player.addItem("Statue collection bag");

// Overview
console.log(player.overview());
