module.exports = [
    // {
    //     name: "Test Quest",
    //     requirements: {
    //         skills: {
    //             cooking: 30,
    //         },
    //         quests: ["Death Plateau"],
    //         items: [{ name: "Bucket", quantity: 2 }],
    //     },
    //     rewards: {
    //         xp: {
    //             choice: [
    //                 { req: 15, amount: 5000, skills: ["slayer"] },
    //                 { req: 10, amount: 2500, skills: ["magic"] },
    //                 { req: 20, amount: 7500, skills: ["fishing"] },
    //             ],
    //             forced: [],
    //         },
    //         items: [],
    //     },
    //     points: 1,
    // },
    {
        name: "Death Plateau",
        requirements: {
            skills: {},
            quests: [],
            items: [],
        },
        rewards: {
            xp: {
                choice: [{ amount: 100 }, { amount: 100 }, { amount: 100 }],
                forced: [],
            },
            items: [{ name: "Rabbit Sandwich", quantity: 4 }],
        },
        points: 1,
    },
    {
        name: "Druidic Ritual",
        requirements: {
            skills: {},
            quests: [],
            items: [
                { name: "Coins", quantity: 1 },
                { name: "Vial", quantity: 1 },
            ],
        },
        rewards: {
            xp: { choice: [], forced: [{ amount: 250, skill: "herblore" }] },
            items: [
                { name: "Grimy guam", quantity: 15 },
                { name: "Eye of newt", quantity: 15 },
            ],
        },
        points: 4,
    },
    {
        name: "Let Them Eat Pie",
        requirements: {
            skills: {},
            quests: [],
            items: [{ name: "Raw crayfish", quantity: 1 }],
        },
        rewards: {
            xp: {
                choice: [],
                forced: [
                    { amount: 100, skill: "cooking" },
                    { amount: 150, skill: "thieving" },
                ],
            },
            items: [
                { name: "Expensive spices", quantity: 1 },
                { name: "Meat pie", quantity: 5 },
            ],
        },
        points: 1,
    },
    {
        name: "Wolf Whistle",
        requirements: {
            skills: {},
            quests: [],
            items: [],
        },
        rewards: {
            xp: {
                choice: [],
                forced: [{ amount: 276, skill: "summoning" }],
            },
            items: [{ name: "Gold charm", quantity: 276 }],
        },
        points: 1,
    },
    {
        name: "Violet is Blue",
        requirements: {
            skills: {},
            quests: [],
            items: [],
        },
        rewards: {
            xp: {
                choice: [{ amount: 1000 }, { amount: 1000 }, { amount: 1000 }],
                forced: [],
            },
            items: [],
        },
        points: 1,
    },
    {
        name: "Violet is Blue Too",
        requirements: {
            skills: {},
            quests: ["Violet is Blue"],
            items: [],
        },
        rewards: {
            xp: {
                choice: [{ amount: 4000 }, { amount: 4000 }, { amount: 4000 }],
                forced: [],
            },
            items: [],
        },
        points: 1,
    },
    {
        name: "The Blood Pact",
        requirements: {
            skills: {},
            quests: [],
            items: [],
        },
        rewards: {
            xp: {
                choice: [],
                forced: [
                    { amount: 100, skill: "attack" },
                    { amount: 100, skill: "strength" },
                    { amount: 100, skill: "defence" },
                    { amount: 100, skill: "ranged" },
                    { amount: 100, skill: "magic" },
                ],
            },
            items: [{ name: "Caitlin's staff", quantity: 1 }],
        },
        points: 1,
    },
    {
        name: "The Restless Ghost",
        requirements: {
            skills: {},
            quests: [],
            items: [],
        },
        rewards: {
            xp: {
                choice: [],
                forced: [{ amount: 125 + 200 * 5, skill: "prayer" }],
            },
            items: [{ name: "Ghostspeak amulet", quantity: 1 }],
        },
        points: 1,
    },
    {
        name: "Cook's Assistant",
        requirements: {
            skills: {},
            quests: [],
            items: [],
        },
        rewards: {
            xp: {
                choice: [],
                forced: [{ amount: 300, skill: "cooking" }],
            },
            items: [
                { name: "Coins", quantity: 500 },
                { name: "Sardine", quantity: 20 },
            ],
        },
        points: 1,
    },
    {
        name: "Myths of the White Lands",
        requirements: {
            skills: {},
            quests: [],
            items: [],
        },
        rewards: {
            xp: {
                choice: [{ amount: 500 }],
                forced: [],
            },
            items: [{ name: "Coins", quantity: 5000 }],
        },
        points: 2,
    },
    {
        name: "Demon Slayer",
        requirements: {
            skills: {},
            quests: [],
            items: [],
        },
        rewards: {
            xp: {
                choice: [
                    {
                        amount: 100,
                        skills: ["attack", "strength", "defence", "constitution", "ranged", "magic", "necromancy"],
                    },
                    {
                        amount: 100,
                        skills: ["attack", "strength", "defence", "constitution", "ranged", "magic", "necromancy"],
                    },
                    {
                        amount: 100,
                        skills: ["attack", "strength", "defence", "constitution", "ranged", "magic", "necromancy"],
                    },
                ],
                forced: [],
            },
            items: [{ name: "Silverlight", quantity: 1 }],
        },
        points: 3,
    },
    {
        name: "Gertrude's Cat",
        requirements: {
            skills: {},
            quests: [],
            items: [
                { name: "Bucket of milk", quantity: 1 },
                { name: "Raw sardine", quantity: 1 },
                { name: "Coins", quantity: 100 },
            ],
        },
        rewards: {
            xp: {
                choice: [],
                forced: [{ amount: 1525, skill: "cooking" }],
            },
            items: [
                { name: "Cat", quantity: 1 },
                { name: "Chocolate cake", quantity: 1 },
                { name: "Stew", quantity: 1 },
            ],
        },
        points: 1,
    },
    {
        name: "Clock Tower",
        requirements: {
            skills: {},
            quests: [],
            items: [{ name: "Bucket of water", quantity: 1 }],
        },
        rewards: {
            xp: {
                choice: [],
                forced: [],
            },
            items: [{ name: "Coins", quantity: 500 }],
        },
        points: 1,
    },
    {
        name: "Monk's Friend",
        requirements: {
            skills: {},
            quests: [],
            items: [{ name: "Jug of water", quantity: 1 }],
        },
        rewards: {
            xp: {
                choice: [],
                forced: [{ amount: 2000, skill: "woodcutting" }],
            },
            items: [{ name: "Law rune", quantity: 8 }],
        },
        points: 1,
    },
    {
        name: "What's Mine is Yours",
        requirements: {
            skills: {
                smithing: 5,
            },
            quests: [],
            items: [],
        },
        rewards: {
            xp: {
                choice: [],
                forced: [
                    { amount: 1000, skill: "mining" },
                    { amount: 400, skill: "smithing" },
                ],
            },
            items: [{ name: "Coins", quantity: 180 }, { name: "Gofannon amulet" }],
        },
        points: 1,
    },
    {
        name: "The Knight's Sword",
        requirements: {
            skills: {
                mining: 10,
                cooking: 10,
                smithing: 10,
            },
            quests: [],
            items: [
                { name: "Redberry pie", quantity: 1 },
                { name: "Iron bar", quantity: 2 },
            ],
        },
        rewards: {
            xp: {
                choice: [],
                forced: [{ amount: 12725, skill: "smithing" }],
            },
            items: [],
        },
        points: 1,
    },
    {
        name: "Gunnar's Ground",
        requirements: {
            skills: {
                crafting: 5,
            },
            quests: [],
            items: [],
        },
        rewards: {
            xp: {
                choice: [{ amount: 200 }],
                forced: [{ amount: 300 + 125, skill: "crafting" }],
            },
            items: [],
        },
        points: 5,
    },
    {
        name: "Vampyre Slayer",
        requirements: {
            skills: {},
            quests: [],
            items: [{ name: "Coins", quantity: 2 }],
        },
        rewards: {
            xp: {
                choice: [
                    {
                        req: 10,
                        amount: 4825,
                        skills: ["attack", "strength", "defence", "constitution", "ranged", "magic", "necromancy"],
                    },
                ],
                forced: [],
            },
            items: [],
        },
        points: 3,
    },
    {
        name: "A Soul's Bane",
        requirements: {
            skills: {},
            quests: [],
            items: [],
        },
        rewards: {
            xp: {
                choice: [],
                forced: [
                    { amount: 500, skill: "defence" },
                    { amount: 500, skill: "constitution" },
                ],
            },
            items: [{ name: "Coins", quantity: 500 }],
        },
        points: 1,
    },
    {
        name: "A Shadow over Ashdale",
        requirements: {
            skills: {},
            quests: [],
            items: [],
        },
        rewards: {
            xp: {
                choice: [],
                forced: [
                    { amount: 300, skill: "attack" },
                    { amount: 300, skill: "strength" },
                    { amount: 300, skill: "defence" },
                    { amount: 300, skill: "constitution" },
                ],
            },
            items: [{ name: "Black pearl", quantity: 3 }],
        },
        points: 1,
    },
    {
        name: "Necromancy!",
        requirements: {
            skills: {},
            quests: [],
            items: [],
        },
        rewards: {
            xp: {
                choice: [],
                forced: [{ amount: 200, skill: "necromancy" }],
            },
            items: [
                { name: "Death guard (tier 10)", quantity: 1 },
                { name: "Skull lantern (tier 10)", quantity: 1 },
                { name: "Ectoplasm", quantity: 25 },
            ],
        },
        points: 1,
    },
    {
        name: "Kili Row",
        requirements: {
            skills: {
                necromancy: 20,
            },
            quests: ["Necromancy!"],
            items: [
                { name: "Regular ghostly ink", quantity: 2 },
                { name: "Basic ghostly ink", quantity: 7 },
                { name: "Basic ritual candle", quantity: 4 },
            ],
        },
        rewards: {
            xp: {
                choice: [],
                forced: [{ amount: 310, skill: "necromancy" }],
            },
            items: [],
        },
        points: 1,
    },
    {
        name: "Rune Mythos",
        requirements: {
            skills: {
                necromancy: 24,
            },
            quests: ["Necromancy!"],
            items: [],
        },
        rewards: {
            xp: {
                choice: [],
                forced: [
                    { amount: 1500, skill: "necromancy" },
                    { amount: 250, skill: "runecrafting" },
                ],
            },
            items: [],
        },
        points: 1,
    },
    {
        name: "Ernest the Chicken",
        requirements: {
            skills: {},
            quests: [],
            items: [],
        },
        rewards: {
            xp: {
                choice: [],
                forced: [],
            },
            items: [
                { name: "Coins", quantity: 3000 },
                { name: "Egg", quantity: 10 },
                { name: "Feather", quantity: 300 },
            ],
        },
        points: 4,
    },
    {
        name: "Swept Away",
        requirements: {
            skills: {},
            quests: [],
            items: [],
        },
        rewards: {
            xp: {
                choice: [],
                forced: [],
            },
            items: [{ name: "Broomstick", quantity: 1 }],
        },
        points: 2,
    },
    {
        name: "Goblin Diplomacy",
        requirements: {
            skills: {},
            quests: [],
            items: [
                { name: "Blue dye", quantity: 1 },
                { name: "Red dye", quantity: 1 },
                { name: "Yellow dye", quantity: 1 },
            ],
        },
        rewards: {
            xp: {
                choice: [],
                forced: [{ amount: 200, skill: "crafting" }],
            },
            items: [{ name: "Gold bar", quantity: 1 }],
        },
        points: 5,
    },
    {
        name: "Tree Gnome Village",
        requirements: {
            skills: {},
            quests: [],
            items: [],
        },
        rewards: {
            xp: {
                choice: [],
                forced: [{ amount: 11450, skill: "attack" }],
            },
            items: [{ name: "Gnome amulet", quantity: 1 }],
        },
        points: 2,
    },
    {
        name: "Stolen Hearts",
        requirements: {
            skills: {},
            quests: [],
            items: [],
        },
        rewards: {
            xp: {
                choice: [
                    {
                        amount: 250,
                        skills: [
                            "attack",
                            "strength",
                            "defence",
                            "constitution",
                            "ranged",
                            "magic",
                            "necromancy",
                            "prayer",
                        ],
                    },
                ],
                forced: [
                    { amount: 250, skill: "constitution" },
                    { amount: 250, skill: "agility" },
                    { amount: 250, skill: "thieving" },
                ],
            },
            items: [{ name: "Coins", quantity: 2500 }],
        },
        points: 3,
    },
    {
        name: "Diamond in the Rough",
        requirements: {
            skills: {},
            quests: ["Stolen Hearts"],
            items: [],
        },
        rewards: {
            xp: {
                choice: [
                    {
                        amount: 250,
                        skills: [
                            "attack",
                            "strength",
                            "defence",
                            "constitution",
                            "ranged",
                            "magic",
                            "necromancy",
                            "prayer",
                        ],
                    },
                ],
                forced: [
                    { amount: 250, skill: "constitution" },
                    { amount: 250, skill: "agility" },
                    { amount: 250, skill: "thieving" },
                ],
            },
            items: [],
        },
        points: 1,
    },
    {
        name: "The Jack of Spades",
        requirements: {
            skills: {},
            quests: ["Diamond in the Rough"],
            items: [],
        },
        rewards: {
            xp: {
                choice: [],
                forced: [
                    { amount: 500, skill: "agility" },
                    { amount: 500, skill: "construction" },
                    { amount: 500, skill: "dungeoneering" },
                    { amount: 500, skill: "thieving" },
                ],
            },
            items: [],
        },
        points: 1,
    },
    {
        name: "Icthlarin's Little Helper",
        requirements: {
            skills: {},
            quests: ["Gertrude's Cat", "Diamond in the Rough"],
            items: [
                { name: "Cat", quantity: 1 },
                { name: "Bag of salt", quantity: 1 },
                { name: "Coins", quantity: 30 },
                { name: "Willow logs", quantity: 1 },
                { name: "Bucket of sap", quantity: 1 },
            ],
        },
        rewards: {
            xp: {
                choice: [],
                forced: [
                    { amount: 4500, skill: "thieving" },
                    { amount: 4000, skill: "agility" },
                    { amount: 4000, skill: "woodcutting" },
                ],
            },
            items: [{ name: "Catspeak amulet", quantity: 1 }],
        },
        points: 2,
    },
    {
        name: "Heartstealer",
        requirements: {
            skills: {
                thieving: 20,
            },
            quests: [],
            items: [],
        },
        rewards: {
            xp: {
                choice: [],
                forced: [{ amount: 2500, skill: "thieving" }],
            },
            items: [],
        },
        points: 1,
    },
    {
        name: "The Dig Site",
        requirements: {
            skills: {
                agility: 10,
                herblore: 10,
                thieving: 25,
            },
            quests: [],
            items: [
                { name: "Vial", quantity: 1 },
                { name: "Rope", quantity: 2 },
            ],
        },
        rewards: {
            xp: {
                choice: [],
                forced: [
                    { amount: 15300, skill: "mining" },
                    { amount: 2000, skill: "herblore" },
                ],
            },
            items: [{ name: "Gold bar", quantity: 2 }],
        },
        points: 1,
    },
    {
        name: "Recipe for Disaster: Another Cook's Quest",
        requirements: {
            skills: {
                cooking: 10,
            },
            quests: ["Cook's Assistant"],
            items: [
                { name: "Eye of newt", quantity: 1 },
                { name: "Greenman's ale", quantity: 1 },
                { name: "Rotten tomato", quantity: 1 },
                { name: "Ashes", quantity: 1 },
                { name: "Fruit blast", quantity: 1 },
            ],
        },
        rewards: {
            xp: {
                choice: [],
                forced: [],
            },
            items: [],
        },
        points: 1,
    },
    {
        name: "Recipe for Disaster: Freeing the Goblin Generals",
        requirements: {
            skills: {},
            quests: ["Recipe for Disaster: Another Cook's Quest", "Goblin Diplomacy"],
            items: [
                { name: "Charcoal", quantity: 1 },
                { name: "Gnome spice", quantity: 1 },
                { name: "Fishing bait", quantity: 1 },
                { name: "Bucket of water", quantity: 1 },
                { name: "Bread", quantity: 1 },
                { name: "Orange", quantity: 1 },
                { name: "Blue dye", quantity: 1 },
            ],
        },
        rewards: {
            xp: {
                choice: [],
                forced: [
                    { amount: 1000, skill: "cooking" },
                    { amount: 1000, skill: "farming" },
                    { amount: 1000, skill: "crafting" },
                ],
            },
            items: [],
        },
        points: 1,
    },
    {
        name: "Buyers and Cellars",
        requirements: {
            skills: {},
            quests: [],
            items: [],
        },
        rewards: {
            xp: {
                choice: [],
                forced: [{ amount: 500 + 175 * 3, skill: "thieving" }],
            },
            items: [],
        },
        points: 1,
    },
    {
        name: "From Tiny Acorns (miniquest)",
        requirements: {
            skills: {
                thieving: 24,
            },
            quests: [],
            items: [],
        },
        rewards: {
            xp: {
                choice: [],
                forced: [{ amount: 1000, skill: "thieving" }],
            },
            items: [],
        },
        points: 0,
    },
    {
        name: "Perils of Ice Mountain",
        requirements: {
            skills: {
                construction: 5,
                farming: 5,
                hunter: 5,
                thieving: 5,
            },
            quests: [],
            items: [
                { name: "Watering can", quantity: 1 },
                { name: "Compost", quantity: 1 },
                { name: "Plank", quantity: 2 },
                { name: "Bronze nail", quantity: 2 },
            ],
        },
        rewards: {
            xp: {
                choice: [],
                forced: [
                    { amount: 500, skill: "farming" },
                    { amount: 500, skill: "hunter" },
                    { amount: 500, skill: "construction" },
                    { amount: 500, skill: "thieving" },
                ],
            },
            items: [],
        },
        points: 1,
    },
    {
        name: "New Foundations",
        requirements: {
            skills: {},
            quests: [],
            items: [
                { name: "Plank", quantity: 20 },
                { name: "Stone wall segment", quantity: 88 },
                { name: "Wooden frame", quantity: 8 },
            ],
        },
        rewards: {
            xp: {
                choice: [],
                forced: [{ amount: 2880 + 12 * 3360, skill: "construction" }],
            },
            items: [],
        },
        points: 1,
    },
    {
        name: "Bringing Home the Bacon",
        requirements: {
            skills: {
                construction: 14,
                farming: 14,
                summoning: 14,
            },
            quests: [],
            items: [],
        },
        rewards: {
            xp: {
                choice: [],
                forced: [
                    { amount: 350, skill: "farming" },
                    { amount: 350, skill: "construction" },
                    { amount: 350, skill: "summoning" },
                ],
            },
            items: [],
        },
        points: 1,
    },
];
