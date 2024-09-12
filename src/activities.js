module.exports = [
    {
        name: "Natural history quiz",
        requirements: {
            skills: {},
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
];
