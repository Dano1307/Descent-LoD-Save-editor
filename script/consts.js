// Hero IDs
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
const CRAFTING_MATERIAL_TYPE = "CRAFTING_MATERIAL"

/**
 * Lamdba function for defining items array.
 * @param {*} prefix 
 * @param {*} n 
 * @returns array of `n` elements, each element is structured in this way: [prefix]_[i].
 *          (i.e. "ARMOR_1", where `prefix` is "ARMOR" and `i` is 1)
 */
const range = (prefix, n) => {
    const result = new Array(n); // Array of n elements

    for(let i = 0; i < n; i++){
        result[i] = `${prefix}_${i+1}`
    }

    return result;
}

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
    "ARMOR_18",
    "ARMOR_19",
    "ARMOR_20",
    "ARMOR_21",
    "ARMOR_22",
    "ARMOR_23",
    "ARMOR_24",
    "ARMOR_25",
    "ARMOR_26",
    "ARMOR_27"
]

/* ATTENTION: "TRINKET14_ID" doesn't exists. For some reason they skipped it
    and instead continued up to id 21*/
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
    "TRINKET11_ID",
    "TRINKET12_ID",
    "TRINKET13_ID",
    // ATTENTION: "TRINKET14_ID" doesn't exists
    "TRINKET15_ID",
    "TRINKET16_ID",
    "TRINKET17_ID",
    "TRINKET18_ID",
    "TRINKET19_ID",
    "TRINKET20_ID",
    "TRINKET21_ID"
]

const allConsumables = [
    // Common consumables
    "CSM_MIASMA_GRENADE",
    "CSM_RABBITFOOT_POTION",
    "CSM_FIRE_GRENADE",
    "CSM_FOCUS_POTION",
    "CSM_VIGOR_POTION",
    "CSM_ANTIDOTE_POTION",
    "CSM_GLITTERDUST",
    // Rare consumables
    "CSM_CRIMSON_POTION",
    "CSM_WARRIOR_BREATH",
    "CSM_MAGE_DUST",
    "CSM_ROGUE_SWEAT",
    "CSM_SMOKE_BOMB",
    "CSM_GUARDIAN_POTION",
    "CSM_WHIRLWIND",
    "CSM_EFFICACIOUS",
    "CSM_STALWART"
]


const allCraftingMaterials = [
    // physical materials
    "MAT_CLOTH",
    "MAT_MINERALS",
    "MAT_BONE",
    "MAT_LEATHER",
    "MAT_METAL",
    "MAT_HERBS",
    "MAT_CURIOS",
    // elemental materials
    "MAT_VIGOS",
    "MAT_ANEMOS",
    "MAT_FORTUNOS",
    "MAT_UMBROS",
    "MAT_AQUOS",
    "MAT_MORTOS",
    "MAT_TOXOS",
    "MAT_LUMOS",
    "MAT_TERROS",
    "MAT_IGNOS"
]

const allHeroesData = {
    "COMMON": {
        name:{
            ita:"Comuni",
            eng:"Commons"
        },
        GUI_divId: "commonData",
    },

    [BRYNN_ID]: {
        name:{
            ita:"Brynn",
            eng:"Brynn"
        },
        /* N.B. Gli id delle armi (WEAPON_PART_A) vanno da 1 a 3 per il gioco base (eccetto Brynn che possiede anche la "SWORD_ANCESTRAL") + da 4 a 5 per l'espansione
        Invece quelli dei potenziamenti (WEAPON_PART_B, WEAPON_PART_C) vanno da 0 a 3 per il gioco base + da 4 a 5 per l'espansione.
        */
        allWeapons: [
            // Weapons (example "WEAPON_PART_A_SWORD_1", "WEAPON_PART_A_WARHAMMER_1")
            ...range("WEAPON_PART_A_SWORD", 5),
            "WEAPON_PART_A_SWORD_ANCESTRAL",    // Brynn extra weapon
            ...range("WEAPON_PART_A_WARHAMMER", 5),
            // Parts 1 (example "WEAPON_PART_B_SWORD_1", "WEAPON_PART_B_WARHAMMER_1")
            ...range("WEAPON_PART_B_SWORD", 5),
            ...range("WEAPON_PART_B_WARHAMMER", 5),
            // Parts 2 (example "WEAPON_PART_C_SWORD_1", "WEAPON_PART_C_WARHAMMER_1")
            ...range("WEAPON_PART_C_SWORD", 5),
            ...range("WEAPON_PART_C_WARHAMMER", 5)
        ],
        // example "SKILL_BRYNN_1"
        allSkills: range("SKILL_BRYNN", 11),
        // example "FEAT_BRYNN_1"
        allFeats: range("FEAT_BRYNN", 20),
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

    [SYRUS_ID]: {
        name:{
            ita:"Syrus",
            eng:"Syrus"
        },
        allWeapons: [
            // Weapons (example "WEAPON_PART_A_STAFF_1", "WEAPON_PART_A_WAND_1")
            ...range("WEAPON_PART_A_STAFF", 5),
            ...range("WEAPON_PART_A_WAND", 5),
            // Parts 1 (example "WEAPON_PART_B_STAFF_1", "WEAPON_PART_B_WAND_1")
            ...range("WEAPON_PART_B_STAFF", 5),
            ...range("WEAPON_PART_B_WAND", 5),
            // Parts 2 (example "WEAPON_PART_C_STAFF_1", "WEAPON_PART_C_WAND_1")
            ...range("WEAPON_PART_C_STAFF", 5),
            ...range("WEAPON_PART_C_WAND", 5)
        ],
        // example "SKILL_SYRUS_1"
        allSkills: range("SKILL_SYRUS", 11),
        // example "FEAT_SYRUS_1"
        allFeats: range("FEAT_SYRUS", 20),
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

    [GALADEN_ID]: {
        name:{
            ita:"Galaden",
            eng:"Galaden"
        },
        allWeapons: [
            // Weapons (example "WEAPON_PART_A_DUAL_BLADES_1", "WEAPON_PART_A_BOW_1")
            ...range("WEAPON_PART_A_DUAL_BLADES", 5),
            ...range("WEAPON_PART_A_BOW", 5),
            // Parts 1 (example "WEAPON_PART_B_DUAL_BLADES_1", "WEAPON_PART_B_BOW_1")
            ...range("WEAPON_PART_B_DUAL_BLADES", 5),
            ...range("WEAPON_PART_B_BOW", 5),
            // Parts 2 (example "WEAPON_PART_C_DUAL_BLADES_1", "WEAPON_PART_C_BOW_1")
            ...range("WEAPON_PART_C_DUAL_BLADES", 5),
            ...range("WEAPON_PART_C_BOW", 5),
        ],
        // example "SKILL_GALADEN_1"
        allSkills: range("SKILL_GALADEN", 11),
        // example "FEAT_GALADEN_1"
        allFeats: range("FEAT_GALADEN", 20),
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
    
    [VAERIX_ID]: {
        name:{
            ita:"Vaerix",
            eng:"Vaerix"
        },
        allWeapons: [
            // Weapons (example "WEAPON_PART_A_WARBELL_1", "WEAPON_PART_A_SPEAR_1")
            ...range("WEAPON_PART_A_WARBELL", 5),
            ...range("WEAPON_PART_A_SPEAR", 5),
            // Parts 1 (example "WEAPON_PART_B_WARBELL_1", "WEAPON_PART_B_SPEAR_1")
            ...range("WEAPON_PART_B_WARBELL", 5),
            ...range("WEAPON_PART_B_SPEAR", 5),
            // Parts 2 (example "WEAPON_PART_C_WARBELL_1", "WEAPON_PART_C_SPEAR_1")
            ...range("WEAPON_PART_C_WARBELL", 5),
            ...range("WEAPON_PART_C_SPEAR", 5)
        ],
        // example "SKILL_VAERIX_1"
        allSkills: range("SKILL_VAERIX", 11),
        // example "FEAT_VAERIX_1"
        allFeats: range("FEAT_VAERIX", 20),
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
    
    [KEHLI_ID]: {
        name:{
            ita:"Kehli",
            eng:"Kehli"
        },
        allWeapons: [
            // Weapons (example "WEAPON_PART_A_HAMMER_1", "WEAPON_PART_A_CROSSBOW_1")
            ...range("WEAPON_PART_A_HAMMER", 5),
            ...range("WEAPON_PART_A_CROSSBOW", 5),
            // Parts 1 (example "WEAPON_PART_B_HAMMER_1", "WEAPON_PART_B_CROSSBOW_1")
            ...range("WEAPON_PART_B_HAMMER", 5),
            ...range("WEAPON_PART_B_CROSSBOW", 5),
            // Parts 2 (example "WEAPON_PART_C_HAMMER_1", "WEAPON_PART_C_CROSSBOW_1")
            ...range("WEAPON_PART_C_HAMMER", 5),
            ...range("WEAPON_PART_C_CROSSBOW", 5)
        ],
        // example "SKILL_KEHLI_1"
        allSkills: range("SKILL_KEHLI", 11),
        // example "FEAT_KEHLI_1"
        allFeats: range("FEAT_KEHLI", 20),
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
    
    [CHANCE_ID]: {
        name:{
            ita:"Sorte",
            eng:"Chance"
        },
        allWeapons: [
            // Weapons (example "WEAPON_PART_A_GAUNTLET_1", "WEAPON_PART_A_KNIVES_1")
            ...range("WEAPON_PART_A_GAUNTLET", 5),
            ...range("WEAPON_PART_A_KNIVES", 5),
            // Parts 1 (example "WEAPON_PART_B_GAUNTLET_1", "WEAPON_PART_B_KNIVES_1")
            ...range("WEAPON_PART_B_GAUNTLET", 5),
            ...range("WEAPON_PART_B_KNIVES", 5),
            // Parts 2 (example "WEAPON_PART_C_GAUNTLET_1", "WEAPON_PART_C_KNIVES_1")
            ...range("WEAPON_PART_C_GAUNTLET", 5),
            ...range("WEAPON_PART_C_KNIVES", 5)
        ],
        // example "SKILL_CHANCE_1"
        allSkills: range("SKILL_CHANCE", 11),
        // example "FEAT_CHANCE_1"
        allFeats: range("FEAT_CHANCE", 20),
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

