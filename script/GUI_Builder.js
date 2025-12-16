// Show the party name in the interface
function showPartyName(){
    let partyName = completeSave.PartyName;
    let nameContainer = document.getElementById("partyName");
    nameContainer.textContent = "Party name: "+partyName;
}

// Build the GUI for weapons with the save-file data for the indicated hero
function buildWeaponGUI(heroId){
    let heroData = allHerosData[heroId];

    // Table where to put data
    let weaponTableId = heroData.tableIds.weaponTableId;
    let weaponTable = document.getElementById(weaponTableId);

    // Getting the list of available weapons
    let weaponNames = heroData.itemNames.weaponNames;
    let availableWeaponsObj = completeSave.GameSceneData.GameState.ItemInventory.filter( item =>
        weaponNames.some(name => item.Id.includes(name))
    );
    // Maintaning only ids
    let availableWeapons = availableWeaponsObj.map(x => x.Id);

    // Adding the list of Brynn weapons to the interface
    buildGUI(WEAPON_TYPE, weaponTable, availableWeapons, heroData.allWeapons, true)
}

// Build the GUI for skills with the save-file data
function buildSkillGUI(heroId){
    let heroData = allHerosData[heroId];

    // Table where to put data
    let skillTableId = heroData.tableIds.skillTableId;
    let skillTable = document.getElementById(skillTableId);

    // Getting the list of Brynn skills
    let skillNames = heroData.itemNames.skillNames;
    let availableSkills = completeSave.GameSceneData.GameState.UnlockedSkills.filter( skill =>
        skillNames.some(name => skill.includes(name))
    );

    // Adding the list of Brynn skills to the interface
    buildGUI(SKILL_TYPE, skillTable, availableSkills, heroData.allSkills, false)
}

// Build the GUI for feats with the save-file data
function buildFeatGUI(heroId){
    let heroData = allHerosData[heroId];

    // Table where to put data
    let featTableId = heroData.tableIds.featTableId;
    let featTable = document.getElementById(featTableId);

    // Getting the list of Brynn skills
    let featNames = heroData.itemNames.featNames;
    let availableFeats = completeSave.GameSceneData.GameState.RealCompletedFeats.filter( feat =>
        featNames.some(name => feat.includes(name))
    );

    // Adding the list of Brynn skills to the interface
    buildGUI(FEAT_TYPE, featTable, availableFeats, heroData.allFeats, false)
}


// Build the GUI for armors with the save-file data
function buildArmorGUI(){
    let tableArmors = document.getElementById("armors");

    // Getting the list of available armors
    let availableArmorsObj = completeSave.GameSceneData.GameState.ItemInventory.filter( item =>
        item.Id.includes("ARMOR")
    );
    // Maintaning only ids
    let availableArmors = availableArmorsObj.map(x => x.Id);

    // Adding the list of armors to the interface
    buildGUI(ARMOR_TYPE, tableArmors, availableArmors, allArmors, true)
}

// Build the GUI for trinkets with the save-file data
function buildTrinketGUI(){
    let tableTrinkets = document.getElementById("trinkets");

    // Getting the list of available trinkets
    let availableTrinketsObj = completeSave.GameSceneData.GameState.ItemInventory.filter( item =>
        item.Id.includes("TRINKET")
    );
    // Maintaning only ids
    let availableTrinkets = availableTrinketsObj.map(x => x.Id);

    // Adding the list of trinkets to the interface
    buildGUI(TRINKET_TYPE, tableTrinkets, availableTrinkets, allTrinkets, true)
}

// Build the GUI for trinkets with the save-file data
function buildConsumableGUI(){
    let tableConsumables = document.getElementById("consumables");

    // Getting the list of available consumables
    let availableConsumablesObj = completeSave.GameSceneData.GameState.ItemInventory.filter( item =>
        item.Id.includes("CSM")
    );
    // Maintaning only ids
    let availableConsumables = availableConsumablesObj.map(x => x.Id);

    // Adding the list of consumables to the interface
    buildGUI(CSM_TYPE, tableConsumables, availableConsumables, allConsumables, true)
}




/**
 * Build the GUI of the indicated item-type
 * @param {String} itemType Type of the item (see "_TYPE" consts in const.js)
 * @param {HTMLTable} table Table where the data will be shown
 * @param {StringArray} availableItemList List of available item
 * @param {StringArray} completeItemList List of all items
 * @param {boolean} canBeUpgraded True if the item can be upgraded
 */
function buildGUI(itemType, table, availableItemList, completeItemList, canBeUpgraded){
    // Remove all table rows (besides headers)
    var tableRows = table.getElementsByTagName('tr');
    var rowCount = tableRows.length;
    for(let i = rowCount-1; i > 0; i--){
        table.removeChild(tableRows[i]);
    }

    // Adding the list of items to the interface
    completeItemList.forEach(itemId => {
        // Adding a new table row for the item
        let tr = document.createElement("tr");
        let tdItemName = document.createElement("td");
        let tdCheckboxBase = document.createElement("td");
        tdCheckboxBase.classList.add("checkbox-container")

        // PROVA
        switch(itemType){
            // If I've got an image, I put it
            case SKILL_TYPE:
            case CSM_TYPE:
            case ARMOR_TYPE:
            case TRINKET_TYPE:
            case WEAPON_TYPE:
            case FEAT_TYPE:
                /*let itemName = document.createElement("p")
                itemName.textContent = itemId;
                tdItemName.appendChild(itemName)*/

                let itemImage = getItemImage(itemId, itemType)
                tdItemName.appendChild(itemImage)

                break;
            // Oteherwise just write the id
            default:
                tdItemName.textContent = itemId;
        }
        tr.appendChild(tdItemName);

        // Adding checkbox for BASE item
        let checkboxBase = buildCheckbox(itemId, itemType, availableItemList);
        tdCheckboxBase.appendChild(checkboxBase);
        tr.appendChild(tdCheckboxBase);

        // Adding checkbox for UPGRADED item (if it can be upgraded)
        if (canBeUpgraded){
            // Creating the id of the upgraded item
            let upgradedItemId = itemId;
            switch(itemType){
                case WEAPON_TYPE:
                    upgradedItemId += "_UPGRADED"
                    break;
                case ARMOR_TYPE: 
                case TRINKET_TYPE:
                case CSM_TYPE:
                    upgradedItemId += "_PLUS"
                    break;
                default:
                    console.error("ERROR: there is no upgraded versione for type '" + itemType + "'")
                    break;
            }

            let tdCheckboxUpgraded = document.createElement("td");
            tdCheckboxUpgraded.classList.add("checkbox-container")
            let checkboxUpgraded = buildCheckbox(upgradedItemId, itemType, availableItemList);
            tdCheckboxUpgraded.appendChild(checkboxUpgraded)
            tr.appendChild(tdCheckboxUpgraded);
        }

        // Adding the weapon row to the interface
        table.appendChild(tr);
    });
}

/**
 * Build the checkbox for the specified itemId
 * @param {*} itemId 
 * @param {*} itemType 
 * @param {*} availableItemList 
 * @returns 
 */
function buildCheckbox(itemId, itemType, availableItemList){
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.value = itemId;
    checkbox.class = itemType;
    checkbox.onchange = itemToggle
    // Only items in availableItemList has to be checked
    if (availableItemList.includes(itemId)){
        checkbox.checked = true
    }

    return checkbox;
}


/**
 * Add or remove an item from the save file based on the checkbox status
 * @param {*} event 
 */
function itemToggle(event){
    let checkbox = event.target;
    let itemId = checkbox.value;
    let itemType = checkbox.class;

    console.log("[Item type: "+itemType+"]")
    // Item enabled
    if (checkbox.checked){
        console.log("Enabling "+itemId)

        switch(itemType){
            case WEAPON_TYPE:
            case ARMOR_TYPE:
            case TRINKET_TYPE:
                addToItemInventory(itemId)
                addToDiscoveredRecipes(itemId)
                addToAvailableItemIds(itemId)
                break;
            case CSM_TYPE:
                addToItemInventory(itemId)
                addToDiscoveredRecipes(itemId)
                break;
            case SKILL_TYPE:
                addToUnlockedSkills(itemId)
                break;
            case FEAT_TYPE:
                addToRealCompletedFeats(itemId)
                break;
            default:
                console.error("ERROR: unknown type '" + itemType + "' for item '" + itemId + "'")
                break;
        }
    }
    // Item disabled
    else{
        console.log("Disabling "+itemId)
        
        switch(itemType){
            case WEAPON_TYPE:
            case ARMOR_TYPE:
            case TRINKET_TYPE:
                removeFromItemInventory(itemId)
                removeFromDiscoveredRecipes(itemId)
                removeFromAvailableItemIds(itemId)
                break;
            case CSM_TYPE:
                removeFromItemInventory(itemId)
                removeFromDiscoveredRecipes(itemId)
            case SKILL_TYPE:
                removeFromUnlockedSkills(itemId)
                break;
            case FEAT_TYPE:
                removeFromRealCompletedFeats(itemId)
                break;
            default:
                console.error("ERROR: unknown type '" + itemType + "' for item '" + itemId + "'")
                break;
        }
    }
}

// PROVA
function getItemImage(itemId, itemType){
    let image = document.createElement("img");
    if(itemType == SKILL_TYPE || itemType == FEAT_TYPE){
        image.src = "img/"+itemType+"/"+language+"/"+itemId+".png"
    }
    else{
        image.src = "img/"+itemType+"/"+itemId+".png"
    }
    image.classList.add("item-image")

    return image;
}

