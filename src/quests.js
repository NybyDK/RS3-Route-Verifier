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
            items: [
                { name: "Rabbit Sandwich", quantity: 4 },
                { name: "Climbing boots", quantity: 1 },
            ],
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
            items: [],
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
            items: [
                { name: "Silverlight", quantity: 1 },
                { name: "Kudos", quantity: 5 },
            ],
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
                { name: "Cat", quantity: 1, notConsumed: true },
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
            quests: ["Buyers and Cellars"],
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
    {
        name: "Waterfall Quest",
        requirements: {
            skills: {
                construction: 24,
            },
            quests: [],
            items: [
                { name: "Air rune", quantity: 6 },
                { name: "Earth rune", quantity: 6 },
                { name: "Water rune", quantity: 6 },
                { name: "Rope", quantity: 5 },
                { name: "Oak plank", quantity: 3 },
            ],
        },
        rewards: {
            xp: {
                choice: [],
                forced: [
                    { amount: 13750, skill: "attack" },
                    { amount: 13750, skill: "strength" },
                ],
            },
            items: [
                { name: "Gold bar", quantity: 2 },
                { name: "Diamond", quantity: 2 },
                { name: "Mithril seeds", quantity: 40 },
            ],
        },
        points: 1,
    },
    {
        name: "Dwarf Cannon",
        requirements: {
            skills: {},
            quests: [],
            items: [],
        },
        rewards: {
            xp: {
                choice: [],
                forced: [{ amount: 750, skill: "crafting" }],
            },
            items: [{ name: "Ammo mould", quantity: 1 }],
        },
        points: 1,
    },
    {
        name: "Hazeel Cult",
        requirements: {
            skills: {},
            quests: [],
            items: [],
        },
        rewards: {
            xp: {
                choice: [],
                forced: [{ amount: 1500, skill: "thieving" }],
            },
            items: [
                { name: "Coins", quantity: 2005 },
                { name: "Kudos", quantity: 5 },
            ],
        },
        points: 1,
    },
    {
        name: "Fight Arena",
        requirements: {
            skills: {},
            quests: [],
            items: [{ name: "Coins", quantity: 5 }],
        },
        rewards: {
            xp: {
                choice: [],
                forced: [
                    { amount: 12175, skill: "attack" },
                    { amount: 2175, skill: "thieving" },
                ],
            },
            items: [{ name: "Coins", quantity: 1000 }],
        },
        points: 2,
    },
    {
        name: "Witch's House",
        requirements: {
            skills: {},
            quests: [],
            items: [],
        },
        rewards: {
            xp: {
                choice: [],
                forced: [{ amount: 6325, skill: "constitution" }],
            },
            items: [{ name: "Coins", quantity: 1000 }],
        },
        points: 4,
    },
    {
        name: "Imp Catcher",
        requirements: {
            skills: {},
            quests: [],
            items: [{ name: "Bowl of hot water", quantity: 1 }],
        },
        rewards: {
            xp: {
                choice: [],
                forced: [{ amount: 875, skill: "magic" }],
            },
            items: [{ name: "Amulet of accuracy", quantity: 1 }],
        },
        points: 1,
    },
    {
        name: "Rune Mysteries",
        requirements: {
            skills: {},
            quests: [],
            items: [],
        },
        rewards: {
            xp: {
                choice: [],
                forced: [
                    { amount: 250, skill: "magic" },
                    { amount: 250, skill: "runecrafting" },
                ],
            },
            items: [
                { name: "Mind rune", quantity: 70 },
                { name: "Air talisman", quantity: 1 },
                { name: "Kudos", quantity: 5 },
            ],
        },
        points: 1,
    },
    {
        name: "Rune Memories",
        requirements: {
            skills: {},
            quests: ["Rune Mysteries"],
            items: [],
        },
        rewards: {
            xp: {
                choice: [],
                forced: [
                    { amount: 300, skill: "magic" },
                    { amount: 300, skill: "runecrafting" },
                ],
            },
            items: [],
        },
        points: 1,
    },
    {
        name: "Missing, Presumed Death",
        requirements: {
            skills: {},
            quests: [],
            items: [],
        },
        rewards: {
            xp: {
                choice: [
                    { amount: 1500, skills: ["attack", "strength", "defence", "constitution", "magic", "ranged"] },
                ],
                forced: [
                    { amount: 500, skill: "prayer" },
                    { amount: 1000, skill: "agility" },
                ],
            },
            items: [{ name: "Invitation box", quantity: 1 }],
        },
        points: 2,
    },
    {
        name: "Priest in Peril",
        requirements: {
            skills: {},
            quests: [],
            items: [
                { name: "Wicked Hood", quantity: 1 },
                { name: "Bucket", quantity: 1 },
            ],
        },
        rewards: {
            xp: {
                choice: [],
                forced: [{ amount: 1406, skill: "prayer" }],
            },
            items: [{ name: "Kudos", quantity: 5 }],
        },
        points: 1,
    },
    {
        name: "Merlin's Crystal",
        requirements: {
            skills: {},
            quests: [],
            items: [{ name: "Coins", quantity: 24 }],
        },
        rewards: {
            xp: {
                choice: [],
                forced: [],
            },
            items: [
                { name: "Excalibur", quantity: 1 },
                { name: "Kudos", quantity: 5 },
            ],
        },
        points: 6,
    },
    {
        name: "Holy Grail",
        requirements: {
            skills: {
                attack: 30,
            },
            quests: ["Merlin's Crystal"],
            items: [{ name: "Excalibur", quantity: 1 }],
        },
        rewards: {
            xp: {
                choice: [],
                forced: [
                    { amount: 11000, skill: "prayer" },
                    { amount: 15300, skill: "defence" },
                ],
            },
            items: [],
        },
        points: 2,
    },
    {
        name: "Observatory Quest",
        requirements: {
            skills: {},
            quests: [],
            items: [
                { name: "Plank", quantity: 3 },
                { name: "Bronze bar", quantity: 1 },
                { name: "Molten glass", quantity: 1 },
            ],
        },
        rewards: {
            xp: {
                choice: [],
                forced: [{ amount: 2250, skill: "crafting" }],
            },
            items: [{ name: "Kudos", quantity: 5 }],
        },
        points: 2,
    },
    {
        name: "Elemental Workshop I",
        requirements: {
            skills: {
                crafting: 20,
                mining: 20,
                smithing: 20,
            },
            quests: [],
            items: [
                { name: "Thread", quantity: 1 },
                { name: "Coal", quantity: 4 },
            ],
        },
        rewards: {
            xp: {
                choice: [],
                forced: [
                    { amount: 5000, skill: "crafting" },
                    { amount: 5000, skill: "smithing" },
                ],
            },
            items: [{ name: "Elemental shield", quantity: 1 }],
        },
        points: 1,
    },
    {
        name: "Elemental Workshop II",
        requirements: {
            skills: {
                magic: 20,
                smithing: 30,
            },
            quests: ["Elemental Workshop I"],
            items: [{ name: "Coal", quantity: 8 }],
        },
        rewards: {
            xp: {
                choice: [],
                forced: [
                    { amount: 7500, skill: "crafting" },
                    { amount: 7500, skill: "smithing" },
                ],
            },
            items: [],
        },
        points: 1,
    },
    {
        name: "Tribal Totem",
        requirements: {
            skills: {
                thieving: 21,
            },
            quests: [],
            items: [],
        },
        rewards: {
            xp: {
                choice: [],
                forced: [{ amount: 1775, skill: "crafting" }],
            },
            items: [{ name: "Swordfish", quantity: 5 }],
        },
        points: 1,
    },
    {
        name: "Troll Stronghold",
        requirements: {
            skills: {
                agility: 15,
                thieving: 30,
            },
            quests: ["Death Plateau"],
            items: [{ name: "Climbing boots", quantity: 1, notConsumed: true }],
        },
        rewards: {
            xp: {
                choice: [
                    { req: 30, amount: 10000 },
                    { req: 30, amount: 10000 },
                ],
                forced: [],
            },
            items: [],
        },
        points: 1,
    },
    {
        name: "Recruitment Drive",
        requirements: {
            skills: {
                herblore: 3,
            },
            quests: [],
            items: [],
        },
        rewards: {
            xp: {
                choice: [],
                forced: [
                    { amount: 1000, skill: "prayer" },
                    { amount: 1000, skill: "herblore" },
                    { amount: 1000, skill: "agility" },
                ],
            },
            items: [{ name: "Initiate sallet", quantity: 1 }],
        },
        points: 1,
    },
    {
        name: "The Golem",
        requirements: {
            skills: {
                crafting: 20,
                thieving: 25,
            },
            quests: [],
            items: [
                { name: "Vial", quantity: 1 },
                { name: "Soft clay", quantity: 4 },
                { name: "Papyrus", quantity: 1 },
            ],
        },
        rewards: {
            xp: {
                choice: [],
                forced: [
                    { amount: 1000, skill: "thieving" },
                    { amount: 1000, skill: "crafting" },
                ],
            },
            items: [
                { name: "Ruby", quantity: 2 },
                { name: "Emerald", quantity: 2 },
                { name: "Sapphire", quantity: 2 },
            ],
        },
        points: 1,
    },
    {
        name: "Shadow of the Storm",
        requirements: {
            skills: {
                crafting: 30,
            },
            quests: ["Demon Slayer", "The Golem"],
            items: [
                { name: "Silverlight", quantity: 1 },
                { name: "Silver bar", quantity: 1 },
                { name: "Vial", quantity: 1 },
                { name: "Black wizard hat", quantity: 1, notConsumed: true },
                { name: "Black wizard robe top", quantity: 1, notConsumed: true },
                { name: "Black wizard robe bottom", quantity: 1, notConsumed: true },
            ],
        },
        rewards: {
            xp: {
                choice: [
                    {
                        amount: 10000,
                        skills: ["attack", "strength", "defence", "constitution", "ranged", "magic", "necromancy"],
                    },
                ],
                forced: [],
            },
            items: [{ name: "Darklight", quantity: 1 }],
        },
        points: 1,
    },
    {
        name: "Once Upon a Slime",
        requirements: {
            skills: {},
            quests: [],
            items: [],
        },
        rewards: {
            xp: {
                choice: [],
                forced: [{ amount: 2500, skill: "cooking" }],
            },
            items: [{ name: "Bucket", quantity: 1 }],
        },
        points: 1,
    },
    {
        name: "Fishing Contest",
        requirements: {
            skills: {
                fishing: 10,
            },
            quests: [],
            items: [
                { name: "Coins", quantity: 5 },
                { name: "Red vine worm", quantity: 3 },
            ],
        },
        rewards: {
            xp: {
                choice: [],
                forced: [{ amount: 2437, skill: "fishing" }],
            },
            items: [],
        },
        points: 1,
    },
    {
        name: "Sea Slug",
        requirements: {
            skills: {
                firemaking: 30,
            },
            quests: [],
            items: [{ name: "Swamp paste", quantity: 1 }],
        },
        rewards: {
            xp: {
                choice: [],
                forced: [{ amount: 7175, skill: "fishing" }],
            },
            items: [],
        },
        points: 1,
    },
    {
        name: "Jungle Potion",
        requirements: {
            skills: {
                herblore: 3,
            },
            quests: [],
            items: [],
        },
        rewards: {
            xp: {
                choice: [],
                forced: [{ amount: 775, skill: "herblore" }],
            },
            items: [
                { name: "Clean snake weed", quantity: 2 },
                { name: "Clean ardrigal", quantity: 1 },
                { name: "Clean rogue's purse", quantity: 1 },
            ],
        },
        points: 1,
    },
    {
        name: "Shilo Village",
        requirements: {
            skills: {
                agility: 32,
                crafting: 20,
            },
            quests: ["Jungle Potion"],
            items: [
                { name: "Bronze wire", quantity: 1 },
                { name: "Coins", quantity: 18 + 14 + 4 },
            ],
        },
        rewards: {
            xp: {
                choice: [],
                forced: [{ amount: 3875, skill: "crafting" }],
            },
            items: [{ name: "Coins", quantity: 2000 }],
        },
        points: 2,
    },
    {
        name: "Temple of Ikov",
        requirements: {
            skills: {
                ranged: 40,
                thieving: 42,
            },
            quests: [],
            items: [
                { name: "Bullseye lantern (lit)", quantity: 1, notConsumed: true },
                { name: "Yew shortbow", quantity: 1, notConsumed: true },
                { name: "Limpwurt root", quantity: 20 },
            ],
        },
        rewards: {
            xp: {
                choice: [],
                forced: [
                    { amount: 10500, skill: "ranged" },
                    { amount: 8000, skill: "fletching" },
                ],
            },
            items: [
                { name: "Boots of lightness", quantity: 1 },
                { name: "Kudos", quantity: 5 },
            ],
        },
        points: 1,
    },
    {
        name: "The Feud",
        requirements: {
            skills: {
                thieving: 30,
            },
            quests: [],
            items: [
                { name: "Coins", quantity: 1506 },
                { name: "Leather gloves", quantity: 1, notConsumed: true },
            ],
        },
        rewards: {
            xp: {
                choice: [],
                forced: [{ amount: 15000, skill: "thieving" }],
            },
            items: [{ name: "Coins", quantity: 500 }],
        },
        points: 1,
    },
    {
        name: "Lost Her Marbles (miniquest)",
        requirements: {
            skills: {
                thieving: 41,
            },
            quests: ["From Tiny Acorns (miniquest)"],
            items: [],
        },
        rewards: {
            xp: {
                choice: [],
                forced: [{ amount: 5000 + 4800, skill: "thieving" }],
            },
            items: [
                { name: "Coal stone spirit", quantity: 46 },
                { name: "Gold stone spirit", quantity: 46 },
                { name: "Teak logs", quantity: 126 },
                { name: "Maple logs", quantity: 255 },
                { name: "Raw lobster", quantity: 37 },
                { name: "Raw swordfish", quantity: 19 },
                { name: "Nature rune", quantity: 55 },
                { name: "Law rune", quantity: 45 },
            ],
        },
        points: 0,
    },
    {
        name: "The Tourist Trap",
        requirements: {
            skills: {
                fletching: 10,
                smithing: 20,
            },
            quests: [],
            items: [
                { name: "Bronze bar", quantity: 2 },
                { name: "Coins", quantity: 360 },
            ],
        },
        rewards: {
            xp: {
                choice: [
                    { amount: 4650, skills: ["agility", "fletching", "smithing", "thieving"] },
                    { amount: 4650, skills: ["agility", "fletching", "smithing", "thieving"] },
                ],
                forced: [],
            },
            items: [],
        },
        points: 2,
    },
    {
        name: "The Grand Tree",
        requirements: {
            skills: {
                agility: 25,
            },
            quests: [],
            items: [],
        },
        rewards: {
            xp: {
                choice: [
                    {
                        amount: 18400,
                        skills: ["attack", "strength", "defence", "constitution", "ranged", "magic", "necromancy"],
                    },
                ],
                forced: [
                    { amount: 7900, skill: "agility" },
                    { amount: 2150, skill: "magic" },
                ],
            },
            items: [{ name: "Kudos", quantity: 5 }],
        },
        points: 5,
    },
    {
        name: "Recipe for Disaster: Freeing Evil Dave",
        requirements: {
            skills: {
                cooking: 25,
            },
            quests: ["Recipe for Disaster: Another Cook's Quest", "Gertrude's Cat", "Shadow of the Storm"],
            items: [
                { name: "Cat", quantity: 1, notConsumed: true },
                { name: "Stew", quantity: 10 },
            ],
        },
        rewards: {
            xp: {
                choice: [],
                forced: [{ amount: 7000, skill: "cooking" }],
            },
            items: [],
        },
        points: 1,
    },
    {
        name: "Evil Dave's Big Day Out",
        requirements: {
            skills: {
                agility: 30,
                cooking: 30,
                herblore: 30,
                magic: 30,
            },
            quests: ["Recipe for Disaster: Freeing Evil Dave"],
            items: [],
        },
        rewards: {
            xp: {
                choice: [],
                forced: [
                    { amount: 50000, skill: "magic" },
                    { amount: 20000, skill: "herblore" },
                    { amount: 20000, skill: "agility" },
                    { amount: 20000, skill: "cooking" },
                ],
            },
            items: [{ name: "Dave's spellbook", quantity: 1 }],
        },
        points: 2,
    },
    {
        name: "Beneath Cursed Tides",
        requirements: {
            skills: {
                attack: 30,
                cooking: 30,
                firemaking: 30,
                magic: 30,
                mining: 30,
                smithing: 30,
                strength: 30,
                woodcutting: 30,
            },
            quests: [],
            items: [],
        },
        rewards: {
            xp: {
                choice: [
                    {
                        req: 10,
                        amount: 10000,
                        skills: [
                            "attack",
                            "constitution",
                            "strength",
                            "defence",
                            "ranged",
                            "prayer",
                            "magic",
                            "necromancy",
                            "herblore",
                            "slayer",
                            "summoning",
                        ],
                    },
                ],
                forced: [
                    { amount: 5000, skill: "cooking" },
                    { amount: 5000, skill: "fishing" },
                ],
            },
            items: [],
        },
        points: 1,
    },
    {
        name: "Monkey Madness",
        requirements: {
            skills: {},
            quests: ["The Grand Tree", "Tree Gnome Village"],
            items: [
                { name: "Gold bar", quantity: 1 },
                { name: "Ball of wool", quantity: 1 },
                { name: "Monkey bones", quantity: 1 },
            ],
        },
        rewards: {
            xp: {
                choice: [],
                forced: [
                    { amount: 35000, skill: "attack" },
                    { amount: 35000, skill: "defence" },
                    { amount: 20000, skill: "strength" },
                    { amount: 20000, skill: "constitution" },
                ],
            },
            items: [
                { name: "Coins", quantity: 10000 },
                { name: "Diamond", quantity: 3 },
            ],
        },
        points: 3,
    },
];
