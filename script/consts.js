// Constants for heros id
const BRYNN_ID = "HERO_BRYNN"
const SYRUS_ID = "HERO_SYRUS"
const GALADEN_ID = "HERO_GALADEN"
const VAERIX_ID = "HERO_VAERIX"
const KEHLI_ID = "HERO_KEHLI"
const CHANCE_ID = "HERO_CHANCE"

// Constants for the item types
const WEAPON_TYPE = "WEAPON"
const SKILL_TYPE = "SKILL"
const FEAT_TYPE = "FEAT"
const ARMOR_TYPE = "ARMOR"
const TRINKET_TYPE = "TRINKET"
const CSM_TYPE = "CSM"


const allArmors = [
    "ARMOR_1",
    "ARMOR_2",
    "ARMOR_3",
    "ARMOR_4",
    "ARMOR_5",
    "ARMOR_6",
    "ARMOR_7",
    "ARMOR_8",
    "ARMOR_9",
    "ARMOR_10",
    "ARMOR_11",
    "ARMOR_12",
    "ARMOR_13",
    "ARMOR_14",
    "ARMOR_15",
    "ARMOR_16",
    "ARMOR_17",
    "ARMOR_18"
]


const allTrinkets = [
    "TRINKET1_ID",
    "TRINKET2_ID",
    "TRINKET3_ID",
    "TRINKET4_ID",
    "TRINKET5_ID",
    "TRINKET6_ID",
    "TRINKET7_ID",
    "TRINKET8_ID",
    "TRINKET9_ID",
    "TRINKET10_ID",
    "TRINKET11_ID"
]


const allConsumables = [
    // Common consumables
    "CSM_MIASMA_GRENADE",
    "CSM_RABBITFOOT_POTION",
    "CSM_FIRE_GRENADE",
    "CSM_FOCUS_POTION",
    "CSM_VIGOR_POTION",
    "CSM_ANTIDOTE_POTION",
    // Rare consumables
    "CSM_CRIMSON_POTION",
    "CSM_WARRIOR_BREATH",
    "CSM_MAGE_DUST",
    "CSM_ROGUE_SWEAT",
    "CSM_SMOKE_BOMB",
    "CSM_GUARDIAN_POTION"
]


const allHerosData = {
    "COMMON": {
        name:{
            ita:"Comuni",
            eng:"Commons"
        },
        GUI_divId: "commonData",
    },

    "HERO_BRYNN": {
        name:{
            ita:"Brynn",
            eng:"Brynn"
        },
        /* N.B. Gli id delle armi (WEAPON_PART_A) vanno da 1 a 3 (eccetto brynn che possiede anche la "SWORD_ANCESTRAL")
        Invece quelli dei potenziamenti (WEAPON_PART_B, WEAPON_PART_C) vanno da 0 a 3
        */
        allWeapons: [
            // Weapons
            "WEAPON_PART_A_SWORD_1",    
            "WEAPON_PART_A_SWORD_2",
            "WEAPON_PART_A_SWORD_3",
            "WEAPON_PART_A_SWORD_ANCESTRAL",
            "WEAPON_PART_A_WARHAMMER_1",
            "WEAPON_PART_A_WARHAMMER_2",
            "WEAPON_PART_A_WARHAMMER_3",
            // Parts 1
            "WEAPON_PART_B_SWORD_1",    
            "WEAPON_PART_B_SWORD_2",
            "WEAPON_PART_B_SWORD_3",
            "WEAPON_PART_B_WARHAMMER_1",
            "WEAPON_PART_B_WARHAMMER_2",
            "WEAPON_PART_B_WARHAMMER_3",
            // Parts 2
            "WEAPON_PART_C_SWORD_1",    
            "WEAPON_PART_C_SWORD_2",
            "WEAPON_PART_C_SWORD_3",
            "WEAPON_PART_C_WARHAMMER_1",
            "WEAPON_PART_C_WARHAMMER_2",
            "WEAPON_PART_C_WARHAMMER_3"
        ],
        allSkills: [
            "SKILL_BRYNN_1",
            "SKILL_BRYNN_2",
            "SKILL_BRYNN_3",
            "SKILL_BRYNN_4",
            "SKILL_BRYNN_5",
            "SKILL_BRYNN_6",
            "SKILL_BRYNN_7"
        ],
        allFeats: [
            "FEAT_BRYNN_1",
            "FEAT_BRYNN_2",
            "FEAT_BRYNN_3",
            "FEAT_BRYNN_4",
            "FEAT_BRYNN_5",
            "FEAT_BRYNN_6",
            "FEAT_BRYNN_7",
            "FEAT_BRYNN_8",
            "FEAT_BRYNN_9",
            "FEAT_BRYNN_10",
            "FEAT_BRYNN_11",
            "FEAT_BRYNN_12"
        ],
        tableIds: {
            weaponTableId: "brynnWeapons",
            skillTableId: "brynnSkills",
            featTableId: "brynnFeats"
        },
        itemNames: {
            weaponNames: [
                "_SWORD",
                "_WARHAMMER"
            ],
            skillNames: [
                "SKILL_BRYNN"
            ],
            featNames: [
                "FEAT_BRYNN"
            ]
        },
        GUI_divId: "brynnData",
        GUI_titleId: "brynnTitle"
    },

    "HERO_SYRUS": {
        name:{
            ita:"Syrus",
            eng:"Syrus"
        },
        allWeapons: [
            // Weapons
            "WEAPON_PART_A_STAFF_1",    
            "WEAPON_PART_A_STAFF_2",
            "WEAPON_PART_A_STAFF_3",
            "WEAPON_PART_A_WAND_1",
            "WEAPON_PART_A_WAND_2",
            "WEAPON_PART_A_WAND_3",
            // Parts 1
            "WEAPON_PART_B_STAFF_1",    
            "WEAPON_PART_B_STAFF_2",
            "WEAPON_PART_B_STAFF_3",
            "WEAPON_PART_B_WAND_1",
            "WEAPON_PART_B_WAND_2",
            "WEAPON_PART_B_WAND_3",
            // Parts 2
            "WEAPON_PART_C_STAFF_1",    
            "WEAPON_PART_C_STAFF_2",
            "WEAPON_PART_C_STAFF_3",
            "WEAPON_PART_C_WAND_1",
            "WEAPON_PART_C_WAND_2",
            "WEAPON_PART_C_WAND_3"
        ],
        allSkills: [
            "SKILL_SYRUS_1",
            "SKILL_SYRUS_2",
            "SKILL_SYRUS_3",
            "SKILL_SYRUS_4",
            "SKILL_SYRUS_5",
            "SKILL_SYRUS_6",
            "SKILL_SYRUS_7"
        ],
        allFeats: [
            "FEAT_SYRUS_1",
            "FEAT_SYRUS_2",
            "FEAT_SYRUS_3",
            "FEAT_SYRUS_4",
            "FEAT_SYRUS_5",
            "FEAT_SYRUS_6",
            "FEAT_SYRUS_7",
            "FEAT_SYRUS_8",
            "FEAT_SYRUS_9",
            "FEAT_SYRUS_10",
            "FEAT_SYRUS_11",
            "FEAT_SYRUS_12"
        ],
        tableIds: {
            weaponTableId: "syrusWeapons",
            skillTableId: "syrusSkills",
            featTableId: "syrusFeats"
        },
        itemNames: {
            weaponNames: [
                "_STAFF",
                "_WAND"
            ],
            skillNames: [
                "SKILL_SYRUS"
            ],
            featNames: [
                "FEAT_SYRUS"
            ]
        },
        GUI_divId: "syrusData",
        GUI_titleId: "syrusTitle"
    },

    "HERO_GALADEN": {
        name:{
            ita:"Galaden",
            eng:"Galaden"
        },
        allWeapons: [
            // Weapons
            "WEAPON_PART_A_DUAL_BLADES_1",    
            "WEAPON_PART_A_DUAL_BLADES_2",
            "WEAPON_PART_A_DUAL_BLADES_3",
            "WEAPON_PART_A_BOW_1",
            "WEAPON_PART_A_BOW_2",
            "WEAPON_PART_A_BOW_3",
            // Parts 1
            "WEAPON_PART_B_DUAL_BLADES_1",    
            "WEAPON_PART_B_DUAL_BLADES_2",
            "WEAPON_PART_B_DUAL_BLADES_3",
            "WEAPON_PART_B_BOW_1",
            "WEAPON_PART_B_BOW_2",
            "WEAPON_PART_B_BOW_3",
            // Parts 2
            "WEAPON_PART_C_DUAL_BLADES_1",    
            "WEAPON_PART_C_DUAL_BLADES_2",
            "WEAPON_PART_C_DUAL_BLADES_3",
            "WEAPON_PART_C_BOW_1",
            "WEAPON_PART_C_BOW_2",
            "WEAPON_PART_C_BOW_3"
        ],
        allSkills: [
            "SKILL_GALADEN_1",
            "SKILL_GALADEN_2",
            "SKILL_GALADEN_3",
            "SKILL_GALADEN_4",
            "SKILL_GALADEN_5",
            "SKILL_GALADEN_6",
            "SKILL_GALADEN_7"
        ],
        allFeats: [
            "FEAT_GALADEN_1",
            "FEAT_GALADEN_2",
            "FEAT_GALADEN_3",
            "FEAT_GALADEN_4",
            "FEAT_GALADEN_5",
            "FEAT_GALADEN_6",
            "FEAT_GALADEN_7",
            "FEAT_GALADEN_8",
            "FEAT_GALADEN_9",
            "FEAT_GALADEN_10",
            "FEAT_GALADEN_11",
            "FEAT_GALADEN_12"
        ],
        tableIds: {
            weaponTableId: "galadenWeapons",
            skillTableId: "galadenSkills",
            featTableId: "galadenFeats"
        },
        itemNames: {
            weaponNames: [
                "_DUAL_BLADES",
                "_BOW"
            ],
            skillNames: [
                "SKILL_GALADEN"
            ],
            featNames: [
                "FEAT_GALADEN"
            ]
        },
        GUI_divId: "galadenData",
        GUI_titleId: "galadenTitle"
    },

    "HERO_VAERIX": {
        name:{
            ita:"Vaerix",
            eng:"Vaerix"
        },
        allWeapons: [
            // Weapons
            "WEAPON_PART_A_WARBELL_1",    
            "WEAPON_PART_A_WARBELL_2",
            "WEAPON_PART_A_WARBELL_3",
            "WEAPON_PART_A_SPEAR_1",
            "WEAPON_PART_A_SPEAR_2",
            "WEAPON_PART_A_SPEAR_3",
            // Parts 1
            "WEAPON_PART_B_WARBELL_1",    
            "WEAPON_PART_B_WARBELL_2",
            "WEAPON_PART_B_WARBELL_3",
            "WEAPON_PART_B_SPEAR_1",
            "WEAPON_PART_B_SPEAR_2",
            "WEAPON_PART_B_SPEAR_3",
            // Parts 2
            "WEAPON_PART_C_WARBELL_1",    
            "WEAPON_PART_C_WARBELL_2",
            "WEAPON_PART_C_WARBELL_3",
            "WEAPON_PART_C_SPEAR_1",
            "WEAPON_PART_C_SPEAR_2",
            "WEAPON_PART_C_SPEAR_3"
        ],
        allSkills: [
            "SKILL_VAERIX_1",
            "SKILL_VAERIX_2",
            "SKILL_VAERIX_3",
            "SKILL_VAERIX_4",
            "SKILL_VAERIX_5",
            "SKILL_VAERIX_6",
            "SKILL_VAERIX_7"
        ],
        allFeats: [
            "FEAT_VAERIX_1",
            "FEAT_VAERIX_2",
            "FEAT_VAERIX_3",
            "FEAT_VAERIX_4",
            "FEAT_VAERIX_5",
            "FEAT_VAERIX_6",
            "FEAT_VAERIX_7",
            "FEAT_VAERIX_8",
            "FEAT_VAERIX_9",
            "FEAT_VAERIX_10",
            "FEAT_VAERIX_11",
            "FEAT_VAERIX_12"
        ],
        tableIds: {
            weaponTableId: "vaerixWeapons",
            skillTableId: "vaerixSkills",
            featTableId: "vaerixFeats"
        },
        itemNames: {
            weaponNames: [
                "_WARBELL",
                "_SPEAR"
            ],
            skillNames: [
                "SKILL_VAERIX"
            ],
            featNames: [
                "FEAT_VAERIX"
            ]
        },
        GUI_divId: "vaerixData",
        GUI_titleId: "vaerixTitle" 
    },

    "HERO_KEHLI": {
        name:{
            ita:"Kehli",
            eng:"Kehli"
        },
        allWeapons: [
            // Weapons
            "WEAPON_PART_A_HAMMER_1",    
            "WEAPON_PART_A_HAMMER_2",
            "WEAPON_PART_A_HAMMER_3",
            "WEAPON_PART_A_CROSSBOW_1",
            "WEAPON_PART_A_CROSSBOW_2",
            "WEAPON_PART_A_CROSSBOW_3",
            // Parts 1
            "WEAPON_PART_B_HAMMER_1",    
            "WEAPON_PART_B_HAMMER_2",
            "WEAPON_PART_B_HAMMER_3",
            "WEAPON_PART_B_CROSSBOW_1",
            "WEAPON_PART_B_CROSSBOW_2",
            "WEAPON_PART_B_CROSSBOW_3",
            // Parts 2
            "WEAPON_PART_C_HAMMER_1",    
            "WEAPON_PART_C_HAMMER_2",
            "WEAPON_PART_C_HAMMER_3",
            "WEAPON_PART_C_CROSSBOW_1",
            "WEAPON_PART_C_CROSSBOW_2",
            "WEAPON_PART_C_CROSSBOW_3"
        ],
        allSkills: [
            "SKILL_KEHLI_1",
            "SKILL_KEHLI_2",
            "SKILL_KEHLI_3",
            "SKILL_KEHLI_4",
            "SKILL_KEHLI_5",
            "SKILL_KEHLI_6",
            "SKILL_KEHLI_7"
        ],
        allFeats: [
            "FEAT_KEHLI_1",
            "FEAT_KEHLI_2",
            "FEAT_KEHLI_3",
            "FEAT_KEHLI_4",
            "FEAT_KEHLI_5",
            "FEAT_KEHLI_6",
            "FEAT_KEHLI_7",
            "FEAT_KEHLI_8",
            "FEAT_KEHLI_9",
            "FEAT_KEHLI_10",
            "FEAT_KEHLI_11",
            "FEAT_KEHLI_12"
            
        ],
        tableIds: {
            weaponTableId: "kehliWeapons",
            skillTableId: "kehliSkills",
            featTableId: "kehliFeats"
        },
        itemNames: {
            weaponNames: [
                "_HAMMER",
                "_CROSSBOW"
            ],
            skillNames: [
                "SKILL_KEHLI"
            ],
            featNames: [
                "FEAT_KEHLI"
            ]
        },
        GUI_divId: "kehliData",
        GUI_titleId: "kehliTitle"
    },

    "HERO_CHANCE": {
        name:{
            ita:"Sorte",
            eng:"Chance"
        },
        allWeapons: [
            // Weapons
            "WEAPON_PART_A_GAUNTLET_1",    
            "WEAPON_PART_A_GAUNTLET_2",
            "WEAPON_PART_A_GAUNTLET_3",
            "WEAPON_PART_A_KNIVES_1",
            "WEAPON_PART_A_KNIVES_2",
            "WEAPON_PART_A_KNIVES_3",
            // Parts 1
            "WEAPON_PART_B_GAUNTLET_1",    
            "WEAPON_PART_B_GAUNTLET_2",
            "WEAPON_PART_B_GAUNTLET_3",
            "WEAPON_PART_B_KNIVES_1",
            "WEAPON_PART_B_KNIVES_2",
            "WEAPON_PART_B_KNIVES_3",
            // Parts 2
            "WEAPON_PART_C_GAUNTLET_1",    
            "WEAPON_PART_C_GAUNTLET_2",
            "WEAPON_PART_C_GAUNTLET_3",
            "WEAPON_PART_C_KNIVES_1",
            "WEAPON_PART_C_KNIVES_2",
            "WEAPON_PART_C_KNIVES_3"
        ],
        allSkills: [
            "SKILL_CHANCE_1",
            "SKILL_CHANCE_2",
            "SKILL_CHANCE_3",
            "SKILL_CHANCE_4",
            "SKILL_CHANCE_5",
            "SKILL_CHANCE_6",
            "SKILL_CHANCE_7"
        ],
        allFeats: [
            "FEAT_CHANCE_1",
            "FEAT_CHANCE_2",
            "FEAT_CHANCE_3",
            "FEAT_CHANCE_4",
            "FEAT_CHANCE_5",
            "FEAT_CHANCE_6",
            "FEAT_CHANCE_7",
            "FEAT_CHANCE_8",
            "FEAT_CHANCE_9",
            "FEAT_CHANCE_10",
            "FEAT_CHANCE_11",
            "FEAT_CHANCE_12",
        ],
        tableIds: {
            weaponTableId: "chanceWeapons",
            skillTableId: "chanceSkills",
            featTableId: "chanceFeats"
        },
        itemNames: {
            weaponNames: [
                "_GAUNTLET",
                "_KNIVES"
            ],
            skillNames: [
                "SKILL_CHANCE"
            ],
            featNames: [
                "FEAT_CHANCE"
            ]
        },
        GUI_divId: "chanceData",
        GUI_titleId: "chanceTitle" 
    }
}

