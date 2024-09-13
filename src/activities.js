module.exports = [
    {
        name: "Natural history quiz",
        requirements: {
            skills: {},
            quests: [],
            items: [],
        },
        rewards: {
            xp: {
                choice: [],
                forced: [
                    { amount: 1000, skill: "slayer" },
                    { amount: 1000, skill: "hunter" },
                ],
            },
            items: [],
        },
    },
    {
        name: "Water filtration",
        requirements: {
            skills: {},
            quests: [],
            items: [
                { name: "bronze bar", quantity: 5 },
                { name: "silver bar", quantity: 2 },
                { name: "bucket of sand", quantity: 6 },
                { name: "big fishing net", quantity: 1 },
            ],
        },
        rewards: {
            xp: {
                choice: [],
                forced: [],
            },
            items: [],
        },
    },
    {
        name: "Archaeology tutorial",
        requirements: {
            skills: {},
            quests: [],
            items: [],
        },
        rewards: {
            xp: {
                choice: [],
                forced: [{ amount: 388, skill: "archaeology" }],
            },
            items: [],
        },
    },
    {
        name: "Supply and Demand",
        requirements: {
            skills: {},
            quests: [],
            items: [],
        },
        rewards: {
            xp: {
                choice: [
                    { amount: 180 },
                    { amount: 180 },
                    { amount: 180 },
                    { amount: 180 },
                    { amount: 180 },
                    { amount: 180 },
                    { amount: 180 },
                    { amount: 180 },
                    { amount: 180 },
                    { amount: 180 },
                    { amount: 180 },
                    { amount: 180 },
                    { amount: 180 },
                    { amount: 180 },
                    { amount: 180 },
                ],
                forced: [],
            },
            items: [],
        },
    },
    {
        name: "Stronghold of Security",
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
            items: [{ name: "Coins", quantity: 10000 }],
        },
    },
    {
        name: "Easy Underworld achievements",
        requirements: {
            skills: {
                prayer: 10,
                necromancy: 24,
                smithing: 15,
                mining: 20,
            },
            quests: ["Kili Row", "Rune Mythos"],
            items: [{ name: "Lesser unensouled bar", quantity: 2 }],
        },
        rewards: {
            xp: {
                choice: [],
                forced: [],
            },
            items: [],
        },
    },
    {
        name: "PoF Tutorial",
        requirements: {
            skills: {
                farming: 17,
                construction: 20,
            },
            quests: [],
            items: [],
        },
        rewards: {
            xp: {
                choice: [],
                forced: [],
            },
            items: [],
        },
    },
];
