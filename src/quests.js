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
];
