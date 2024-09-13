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
player.buy("Vial", 5);
player.buy("Rope", 18, 7);
player.addItem("Thread", 10);

// Mine for bronze bars
player.nextStep();
player.addItem("Bronze ore box");
player.addItem("Bronze wire");
player.addItem("Bronze bar", 6);
player.gainXP("Mining", 200);
player.gainXP("Smithing", 9 + 30 + 15);

// Buy supplies from Jones
player.nextStep();
player.buy("Watering can", 8);
player.buy("Compost", 20);

// Fish for level 10
player.nextStep();
player.addItem("Raw crayfish");
player.gainXP("Fishing", Math.ceil(player.calculateXP(10) / 10) * 10);
player.gainXP("Woodcutting", 2 * 25);
player.gainXP("Firemaking", 2 * 40);
player.addItem("Ashes", 4);

// Quest: Let Them Eat Pie
player.nextStep();
player.buy("Wizard's Mind Bomb", 2, 10);
player.buy("Pot of flour", 14, 2);
player.buy("Vial of water pack", 500);
player.removeItem("Vial of water pack");
player.addItem("Vial of water", 50);
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
player.buy("Bucket", 2, 7);
player.buy("Pot", 1, 2);
player.buy("Tinderbox", 1, 2);
player.buy("Fishing bait", 3, 10);

// Buy supplies from Beefy Bill
player.nextStep();
player.removeItem("Bucket", 4);
player.addItem("Bucket of milk", 4);
player.buy("Redberries", 3, 10);
player.buy("Pie dish", 3);
player.buy("Jug of water", 1);
player.buy("Bucket of water", 6, 2);

// Varrock Lodestone
player.nextStep();

// Activity: Natural history quiz
player.nextStep();
player.completeActivity("Natural history quiz");
player.addItem("Statue collection bag");

// Quest: Demon Slayer
player.nextStep();
player.completeQuest("Demon Slayer", {
    defence: [100, 100, 100],
});

// Teleport to Ardougne
player.nextStep();

// Quest: Clock Tower
player.nextStep();
player.completeQuest("Clock Tower");

// Quest: Monk's Friend
player.nextStep();
player.completeQuest("Monk's Friend");

// Activity: Archaeology tutorial
player.nextStep();
player.addItem("Plank", 2);
player.addItem("Rotten tomato");
player.addItem("Greenman's ale");
player.completeActivity("Archaeology tutorial");
player.addItem("Archaeology journal");
player.addItem("Soil box");

// Travel to Anachronia and complete the base camp tutorial
player.nextStep();

// Herby Werby
player.nextStep();
player.gainXP("Herblore", 36 * 100);

// Build Anachronia lodestone and buy salt in Burthorpe
player.nextStep();
player.addItem("Bag of salt");

// Train Magic at Shattered Worlds
player.nextStep();
player.gainXP("Magic", player.calculateXP(55) - player.skills.magic);
player.gainXP("Constitution", player.skills.magic * (1 / 3));

// Train Ranged at Shattered Worlds
player.nextStep();
player.gainXP("Ranged", player.calculateXP(45) - player.skills.ranged);
player.gainXP("Constitution", player.skills.ranged * (1 / 3));

// Activity: Supply and Demand
player.nextStep();
player.completeActivity("Supply and Demand", {
    smithing: [180, 180, 180, 180],
    farming: [180, 180, 180],
    divination: [180, 180, 180, 180, 180, 180, 180, 180],
});

// Quest: What's Mine is Yours
player.nextStep();
player.completeQuest("What's Mine is Yours");
player.removeItem("Bucket");
player.addItem("Bucket of sap");
player.buy("Raw sardine", 10);
player.buy("Bronze nail", 7, 2);
player.buy("Woad leaf", 25, 4);

// Quest: Gertrude's Cat
player.nextStep();
player.completeQuest("Gertrude's Cat");
player.buy("Yew shortbow", 800);
player.buy("Iron arrow", 20, 100);

// Quest: A Soul's Bane
player.nextStep();
player.completeQuest("A Soul's Bane");

// Quest: A Shadow over Ashdale
player.nextStep();
player.completeQuest("A Shadow over Ashdale");

// Prepare for The Knight's Sword
player.nextStep();
player.checkLevel("Mining", 10);
player.addItem("Iron ore", 4);
player.checkLevel("Cooking", 10);
player.addItem("Redberry pie");

// Quest: The Knight's Sword
player.nextStep();
player.removeItem("Iron ore", 4);
player.addItem("Iron bar", 2);
player.completeQuest("The Knight's Sword");

// Activity: Stronghold of Security
player.nextStep();
player.completeActivity("Stronghold of Security");

// Quest: Gunnar's Ground
player.nextStep();
player.completeQuest("Gunnar's Ground", {
    divination: 200,
});

// Draynor Lodestone
player.nextStep();

// Quest: Vampyre Slayer
player.nextStep();
player.completeQuest("Vampyre Slayer", {
    defence: 4825,
});

// Quest: Necromancy!
player.nextStep();
player.completeQuest("Necromancy!");
player.addItem("Deathwarden hood (tier 10)");
player.addItem("Deathwarden robe top (tier 10)");
player.addItem("Deathwarden robe bottom (tier 10)");
player.addItem("Deathwarden gloves (tier 10)");
player.addItem("Deathwarden boots (tier 10)");

// Train Necromancy at Troll Cave
player.nextStep();
player.gainXP("Necromancy", player.calculateXP(24) - player.skills.necromancy);
player.gainXP("Prayer", player.calculateXP(10) - player.skills.prayer);

// Quest: Kili Row
player.nextStep();
player.addItem("Regular ghostly ink", 2);
player.addItem("Basic ghostly ink", 7);
player.addItem("Basic ritual candle", 4);
player.completeQuest("Kili Row");

// Quest: Rune Mythos
player.nextStep();
player.completeQuest("Rune Mythos");

// Quest: Ernest the Chicken
player.nextStep();
player.completeQuest("Ernest the Chicken");

// Quest: Swept Away
player.nextStep();
player.buy("Raw sardine", 10, 10);
player.buy("Chocolate bar", 20);
player.buy("Bread", 24);
player.completeQuest("Swept Away");
for (let i = 0; i < 10; i++) {
    player.gainXP("Herblore", player.calculateLevel(player.skills.herblore) * 10);
}

// Talk to Aggie
player.nextStep();
player.removeItem("Redberries", 3);
player.addItem("Red dye");
player.addItem("Yellow dye");
player.removeItem("Woad leaf", 4);
player.addItem("Blue dye", 2);

// Quest: Goblin Diplomacy
player.nextStep();
player.completeQuest("Goblin Diplomacy");

// Claim 25 QP Reward from May
player.nextStep();
player.checkQuestPoints(25);
player.addItem("Coins", 250_000);

// Varrock and Void Knight Shopping
player.nextStep();
player.buy("Rune hatchet", 8340);
player.buy("Fire rune", 17, 300);
player.buy("Water rune", 17, 300);
player.buy("Air rune", 17, 300);
player.buy("Earth rune", 17, 300);
player.addItem("Air rune", 30);
player.addItem("Mind rune", 30);
player.buy("Taverley House", 1000);
player.buy("Fire rune", 17, 1000);
player.buy("Water rune", 17, 1000);
player.buy("Air rune", 17, 1000);
player.buy("Earth rune", 17, 1000);

// Train Runecrafting and make Vis Wax
player.nextStep();
player.gainXP("Runecrafting", player.calculateXP(50) - player.skills.runecrafting);

// Quest: Tree Gnome Village
player.nextStep();
player.completeQuest("Tree Gnome Village");

// Grand Tree Shopping
player.nextStep();
player.buy("Gnome spice", 2);
player.buy("Orange", 70);

// Quest: Stolen Hearts
player.nextStep();
player.completeQuest("Stolen Hearts", {
    prayer: 250,
});

// Quest: Diamond in the Rough
player.nextStep();
player.completeQuest("Diamond in the Rough", {
    prayer: 250,
});

// Quest: The Jack of Spades
player.nextStep();
player.completeQuest("The Jack of Spades");

// Train Firemaking to 30
player.nextStep();
player.gainXP("Firemaking", player.calculateXP(30) - player.skills.firemaking);
player.addItem("Ashes");

// Train Woodcutting to 30 for Willow log
player.nextStep();
player.addItem("Logs", 119);
player.addItem("Oak logs", 3);
player.gainXP("Woodcutting", player.calculateXP(30) - player.skills.woodcutting);
player.addItem("Willow logs");
player.gainXP("Woodcutting", 67.5);

// Quest: Icthlarin's Little Helper
player.nextStep();
player.completeQuest("Icthlarin's Little Helper");

// Claim 50 QP Reward from May
player.nextStep();
player.checkQuestPoints(50);
player.addItem("Coins", 250_000);

// Quest: Heartstealer
player.nextStep();
player.completeQuest("Heartstealer");

// Quest: The Dig Site
player.nextStep();
player.completeQuest("The Dig Site");
player.addItem("Fruit blast");
player.addItem("Charcoal");

// Activity: Easy Underworld achievements
player.nextStep();
player.addItem("Lesser unensouled bar", 2);
player.completeActivity("Easy Underworld achievements");

// Quest: Recipe for Disaster: Another Cook's Quest
player.nextStep();
player.completeQuest("Recipe for Disaster: Another Cook's Quest");

// Quest: Recipe for Disaster: Freeing the Goblin Generals
player.nextStep();
player.completeQuest("Recipe for Disaster: Freeing the Goblin Generals");

// Quest: Buyers and Cellars
player.nextStep();
player.completeQuest("Buyers and Cellars");

// Quest: From Tiny Acorns (miniquest)
player.nextStep();
player.completeQuest("From Tiny Acorns (miniquest)");

// Quest: Perils of Ice Mountain
player.nextStep();
player.completeQuest("Perils of Ice Mountain");

// Quest: New Foundations
player.nextStep();
player.removeItem("Logs", 20 + 96);
player.addItem("Plank", 20 + 96);
player.gainXP("Construction", 20 * 3 + 96 * 3);
player.buy("Limestone brick", 21, 250);
player.removeItem("Limestone brick", 250);
player.addItem("Stone wall segment", 88);
player.gainXP("Construction", 88 * 40);
player.removeItem("Plank", 96);
player.addItem("Wooden frame", 8);
player.gainXP("Construction", 8 * 54);
player.completeQuest("New Foundations");
player.removeItem("Logs");
player.addItem("Plank");
player.removeItem("Oak logs", 3);
player.addItem("Oak plank", 3);
player.gainXP("Construction", 1 * 3 + 3 * 4.5);

// Quest: Bringing Home the Bacon
player.nextStep();
player.completeQuest("Bringing Home the Bacon");

// PoF Tutorial and Beehives
player.nextStep();
player.buy("Woad leaf", 25, 1000);
player.completeActivity("PoF Tutorial");
player.removeItem("Woad leaf", 27 * 7);

// Overview
console.log(player.overview());
