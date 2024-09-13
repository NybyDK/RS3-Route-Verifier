const quests = require("./quests");
const activities = require("./activities");

const XPThresholds = [
    0, 83, 174, 276, 388, 512, 650, 801, 969, 1154, 1358, 1584, 1833, 2107, 2411, 2746, 3115, 3523, 3973, 4470, 5018,
    5624, 6291, 7028, 7842, 8740, 9730, 10824, 12031, 13363, 14833, 16456, 18247, 20224, 22406, 24815, 27473, 30408,
    33648, 37224, 41171, 45529, 50339, 55649, 61512, 67983, 75127, 83014, 91721, 101333, 111945, 123660, 136594, 150872,
    166636, 184040, 203254, 224466, 247886, 273742, 302288, 333804, 368599, 407015, 449428, 496254, 547953, 605032,
    668051, 737627, 814445, 899257, 992895, 1096278, 1210421, 1336443, 1475581, 1629200, 1798808, 1986068, 2192818,
    2421087, 2673114, 2951373, 3258594, 3597792, 3972294, 4385776, 4842295, 5346332, 5902831, 6517253, 7195629, 7944614,
    8771558, 9684577, 10692629, 11805606, 13034431, 14391160, 15889109, 17542976, 19368992, 21385073, 23611006,
    26068632, 28782069, 31777943, 35085654, 38737661, 42769801, 47221641, 52136869, 57563718, 63555443, 70170840,
    77474828, 85539082, 94442737, 104273167, 115126838, 127110260, 140341028, 154948977, 171077457, 188884740,
];

const XPThresholdsInvention = [
    0, 830, 1861, 2902, 3980, 5126, 6390, 7787, 9400, 11275, 13605, 16372, 19656, 23546, 28138, 33520, 39809, 47109,
    55535, 64802, 77190, 90811, 106221, 123573, 143025, 164742, 188893, 215651, 245196, 277713, 316311, 358547, 404364,
    454796, 509259, 568254, 632019, 700797, 774834, 854383, 946227, 1044569, 1149696, 1261903, 1381488, 1508756,
    1644015, 1787581, 1939773, 2100917, 2283490, 2476369, 2679907, 2894505, 3120508, 3358307, 3608290, 3870846, 4146374,
    4435275, 4758122, 5096111, 5449685, 5819299, 6205407, 6608473, 7028964, 7467354, 7924122, 8399751, 8925664, 9472665,
    10041285, 10632061, 11245538, 11882262, 12542789, 13227679, 13937496, 14672812, 15478994, 16313404, 17176661,
    18069395, 18992239, 19945833, 20930821, 21947856, 22997593, 24080695, 25259906, 26475754, 27728955, 29020233,
    30350318, 31719944, 33129852, 34580790, 36073511, 37608773, 39270442, 40978509, 42733789, 44537107, 46389292,
    48291180, 50243611, 52247435, 54303504, 56412678, 58575823, 60793812, 63067521, 65397835, 67785643, 70231841,
    72737330, 75303019, 77929820, 80618654, 83370445, 86186124, 89066630, 92012904, 95025896, 98106559, 101255855,
    104474750, 107764216, 111125230, 114558777, 118065845, 121647430, 125304532, 129038159, 132849323, 136739041,
    140708338, 144758242, 148889790, 153104021, 157401983, 161784728, 166253312, 170808801, 175452262, 180184770,
    185007406, 189921255, 194927409,
];

module.exports = class Player {
    constructor() {
        this.step = 1;
        this.skills = {
            attack: 0,
            defence: 0,
            strength: 0,
            constitution: 1154,
            ranged: 0,
            prayer: 0,
            magic: 0,
            cooking: 0,
            woodcutting: 0,
            fletching: 0,
            fishing: 0,
            firemaking: 0,
            crafting: 0,
            smithing: 0,
            mining: 0,
            herblore: 0,
            agility: 0,
            thieving: 0,
            slayer: 0,
            farming: 0,
            runecrafting: 0,
            hunter: 0,
            construction: 0,
            summoning: 0,
            dungeoneering: 0,
            divination: 0,
            invention: 0,
            archaeology: 0,
            necromancy: 0,
        };
        this.items = [];
        this.quests = [];
        this.activities = [];
    }

    nextStep() {
        this.step++;
    }

    gainXP(skill, xp) {
        skill = skill.toLowerCase();

        if (this.skills[skill] === undefined) {
            throw new Error(`Skill '${skill}' does not exist during step ${this.step}`);
        }

        if (xp === undefined || xp < 0) {
            throw new Error(`Invalid XP amount '${xp}' for skill '${skill}' during step ${this.step}`);
        }

        this.skills[skill] += xp;
    }

    calculateLevel(xp, invention = false) {
        if (!invention) {
            for (let i = 0; i < XPThresholds.length; i++) {
                if (xp < XPThresholds[i]) {
                    return i;
                }
            }
            return XPThresholds.length;
        }

        for (let i = 0; i < XPThresholdsInvention.length; i++) {
            if (xp < XPThresholdsInvention[i]) {
                return i;
            }
        }
        return XPThresholdsInvention.length;
    }

    calculateXP(level, invention = false) {
        if (!invention) {
            return XPThresholds[level - 1];
        }

        return XPThresholdsInvention[level - 1];
    }

    calculateQuestPoints() {
        return this.quests.reduce((total, questName) => {
            const quest = quests.find(q => q.name === questName);
            return total + quest.points;
        }, 0);
    }

    calculateStats() {
        return Object.entries(this.skills).reduce((levels, [skill, xp]) => {
            levels[skill.charAt(0).toUpperCase() + skill.slice(1)] = {
                Level: this.calculateLevel(xp, skill === "invention"),
                XP: xp,
            };
            return levels;
        }, {});
    }

    overview() {
        return {
            Items: this.items,
            Quests: this.quests,
            Stats: this.calculateStats(),
            QP: this.calculateQuestPoints(),
            Step: this.step,
        };
    }

    addItem(itemName, quantity = 1) {
        if (itemName === undefined) {
            throw new Error(`Item not specified during step ${this.step}`);
        }

        const item = this.items.find(item => item.name === itemName);

        if (item) {
            item.quantity += quantity;
        } else {
            this.items.push({ name: itemName, quantity });
        }
    }

    buy(itemName, price, quantity = 1) {
        if (itemName === undefined) {
            throw new Error(`Item not specified during step ${this.step}`);
        }

        const item = this.items.find(item => item.name === itemName);

        if (item) {
            item.quantity += quantity;
        } else {
            this.items.push({ name: itemName, quantity });
        }

        this.removeItem("Coins", quantity * price);
    }

    removeItem(itemName, quantity = 1) {
        const item = this.items.find(item => item.name === itemName);

        if (!item) {
            throw new Error(`Item '${itemName}' not found during step ${this.step}`);
        }

        if (item.quantity < quantity) {
            throw new Error(
                `Not enough '${item.name}' to remove ${quantity}. Available: ${item.quantity} during step ${this.step}`,
            );
        }

        item.quantity -= quantity;

        if (item.quantity === 0) {
            this.items = this.items.filter(item => item.quantity > 0);
        }
    }

    checkLevel(skill, level, invention = false) {
        skill = skill.toLowerCase();

        if (this.calculateLevel(this.skills[skill], invention) < level) {
            throw new Error(`Skill '${skill}' must be at least level ${level} during step ${this.step}`);
        }
    }

    checkItem(itemName, quantity) {
        const item = this.items.find(item => item.name === itemName);

        if (!item) {
            throw new Error(`Item '${itemName}' not found during step ${this.step}`);
        }

        if (item.quantity < quantity) {
            throw new Error(
                `You only have ${item.quantity} of ${quantity} '${itemName}' required during step ${this.step}`,
            );
        }
    }

    checkQuestPoints(qp) {
        const QPs = this.calculateQuestPoints();
        if (QPs < qp) {
            throw new Error(`You only have ${QPs}/${qp} QP during step ${this.step}`);
        }
    }

    completeQuest(questName, xpDistribution = {}) {
        const quest = quests.find(q => q.name === questName);

        if (!quest) {
            throw new Error(`Quest '${questName}' not found`);
        }

        if (this.quests.includes(questName)) {
            throw new Error(`Quest '${questName}' is already completed during step ${this.step}`);
        }

        for (const [skill, level] of Object.entries(quest.requirements.skills)) {
            if (this.calculateLevel(this.skills[skill], skill === "invention") < level) {
                throw new Error(
                    `Skill '${skill}' must be at least level ${level} to complete ${questName} during step ${this.step}`,
                );
            }
        }

        for (const requiredQuest of quest.requirements.quests) {
            if (!this.quests.includes(requiredQuest)) {
                throw new Error(
                    `Quest '${requiredQuest}' is required to complete ${questName} during step ${this.step}`,
                );
            }
        }

        for (const requiredItem of quest.requirements.items) {
            const item = this.items.find(item => item.name === requiredItem.name);

            if (!item) {
                throw new Error(
                    `Item '${requiredItem.name}' is required to complete ${questName} during step ${this.step}`,
                );
            }

            if (item.quantity < requiredItem.quantity) {
                throw new Error(
                    `You only have ${item.quantity} of ${requiredItem.quantity} '${requiredItem.name}' required to complete '${questName}' during step ${this.step}`,
                );
            }
        }

        for (const requiredItem of quest.requirements.items) {
            if (!requiredItem.notConsumed) {
                this.removeItem(requiredItem.name, requiredItem.quantity);
            }
        }

        const rewardXP = quest.rewards.xp.choice.map(reward => reward.amount);
        const distributedXP = Object.values(xpDistribution).flat();

        rewardXP.sort((a, b) => a - b);
        distributedXP.sort((a, b) => a - b);

        if (rewardXP.length !== distributedXP.length || !rewardXP.every((xp, index) => xp === distributedXP[index])) {
            throw new Error(
                `XP distribution does not match the quest rewards for ${questName} during step ${this.step}`,
            );
        }

        let rewardIndex = 0;
        for (const [skill, XPValue] of Object.entries(xpDistribution)) {
            const XPArray = Array.isArray(XPValue) ? XPValue : [XPValue];

            for (const XP of XPArray) {
                const reward = quest.rewards.xp.choice[rewardIndex];
                rewardIndex++;

                if (reward.skills && !reward.skills.includes(skill)) {
                    throw new Error(`XP for ${skill} is not allowed for ${questName} during step ${this.step}`);
                }

                if (reward.req && this.calculateLevel(this.skills[skill], skill === "invention") < reward.req) {
                    throw new Error(
                        `Skill '${skill}' must be at least level ${reward.req} to receive XP from ${questName} during step ${this.step}`,
                    );
                }
                this.gainXP(skill, XP);
            }
        }

        for (const { amount, skill } of quest.rewards.xp.forced) {
            this.gainXP(skill, amount);
        }

        for (const item of quest.rewards.items) {
            this.addItem(item.name, item.quantity);
        }

        this.quests.push(questName);
    }

    completeActivity(activityName, xpDistribution = {}) {
        const activity = activities.find(q => q.name === activityName);

        if (!activities) {
            throw new Error(`Activity '${activityName}' not found`);
        }

        if (this.activities.includes(activityName)) {
            throw new Error(`Activity '${activityName}' is already completed during step ${this.step}`);
        }

        for (const [skill, level] of Object.entries(activity.requirements.skills)) {
            if (this.calculateLevel(this.skills[skill], skill === "invention") < level) {
                throw new Error(
                    `Skill '${skill}' must be at least level ${level} to complete ${activityName} during step ${this.step}`,
                );
            }
        }

        for (const requiredQuest of activity.requirements.quests) {
            if (!this.quests.includes(requiredQuest)) {
                throw new Error(
                    `Quest '${requiredQuest}' is required to complete ${activityName} during step ${this.step}`,
                );
            }
        }

        for (const requiredItem of activity.requirements.items) {
            const item = this.items.find(item => item.name === requiredItem.name);

            if (!item) {
                throw new Error(
                    `Item '${requiredItem.name}' is required to complete ${activityName} during step ${this.step}`,
                );
            }

            if (item.quantity < requiredItem.quantity) {
                throw new Error(
                    `You only have ${item.quantity} of ${requiredItem.quantity} '${requiredItem.name}' required to complete '${activityName}' during step ${this.step}`,
                );
            }
        }

        for (const requiredItem of activity.requirements.items) {
            if (!requiredItem.notConsumed) {
                this.removeItem(requiredItem.name, requiredItem.quantity);
            }
        }

        const rewardXP = activity.rewards.xp.choice.map(reward => reward.amount);
        const distributedXP = Object.values(xpDistribution).flat();

        rewardXP.sort((a, b) => a - b);
        distributedXP.sort((a, b) => a - b);

        if (rewardXP.length !== distributedXP.length || !rewardXP.every((xp, index) => xp === distributedXP[index])) {
            throw new Error(
                `XP distribution does not match the activity rewards for ${activityName} during step ${this.step}`,
            );
        }

        let rewardIndex = 0;
        for (const [skill, XPValue] of Object.entries(xpDistribution)) {
            const XPArray = Array.isArray(XPValue) ? XPValue : [XPValue];

            for (const XP of XPArray) {
                const reward = activity.rewards.xp.choice[rewardIndex];
                rewardIndex++;

                if (reward.skills && !reward.skills.includes(skill)) {
                    throw new Error(`XP for ${skill} is not allowed for ${activityName} during step ${this.step}`);
                }

                if (reward.req && this.calculateLevel(this.skills[skill], skill === "invention") < reward.req) {
                    throw new Error(
                        `Skill '${skill}' must be at least level ${reward.req} to receive XP from ${activityName} during step ${this.step}`,
                    );
                }
                this.gainXP(skill, XP);
            }
        }

        for (const { amount, skill } of activity.rewards.xp.forced) {
            this.gainXP(skill, amount);
        }

        for (const item of activity.rewards.items) {
            this.addItem(item.name, item.quantity);
        }
    }
};
