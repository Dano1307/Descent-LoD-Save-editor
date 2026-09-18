// Show the party name in the interface
function showPartyName(){
    let partyName = completeSave.PartyName;
    let nameContainer = document.getElementById("partyName");
    nameContainer.textContent = "Party name: "+partyName;
}

/*___________________________GUIs for HEROES___________________________*/
// Build the GUI for weapons with the save-file data for the indicated hero
function buildWeaponGUI(heroId){
    let heroData = allHeroesData[heroId];

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

    // Adding the list of weapons to the interface
    buildUnlockableGUI(WEAPON_TYPE, weaponTable, availableWeapons, heroData.allWeapons, true)
}

// Build the GUI for skills with the save-file data
function buildSkillGUI(heroId){
    let heroData = allHeroesData[heroId];

    // Table where to put data
    let skillTableId = heroData.tableIds.skillTableId;
    let skillTable = document.getElementById(skillTableId);

    // Getting the list of Brynn skills
    let skillNames = heroData.itemNames.skillNames;
    let availableSkills = completeSave.GameSceneData.GameState.UnlockedSkills.filter( skill =>
        skillNames.some(name => skill.includes(name))
    );

    // Adding the list of Brynn skills to the interface
    buildUnlockableGUI(SKILL_TYPE, skillTable, availableSkills, heroData.allSkills, false)
}

// Build the GUI for feats with the save-file data
function buildFeatGUI(heroId){
    let heroData = allHeroesData[heroId];

    // Table where to put data
    let featTableId = heroData.tableIds.featTableId;
    let featTable = document.getElementById(featTableId);

    // Getting the list of Brynn skills
    let featNames = heroData.itemNames.featNames;
    let availableFeats = completeSave.GameSceneData.GameState.RealCompletedFeats.filter( feat =>
        featNames.some(name => feat.includes(name))
    );

    // Adding the list of Brynn skills to the interface
    buildUnlockableGUI(FEAT_TYPE, featTable, availableFeats, heroData.allFeats, false)
}
/*______________________________________________________________________*/


/*___________________________GUIs for COMMONS___________________________*/
// Build the GUI for gold with the save-file data
function buildGoldGUI(){
    let goldInput = document.getElementById("goldQuantity");

    goldInput.value = completeSave.GameSceneData.GameState.Gold;
}

/**
 * Build the GUI for crafting-materials with the save-file data
 * NOTE: this function creates a unique GUI since crafting materials are not unlockables but "stackables"/"lootables"
 *      So, we need a GUI to modify the quantity of each material
*/
// TODO: add all the missing craft mat to the list
function buildCraftingMaterialGUI(){
    let tableCraftingMaterials = document.getElementById("craftingMaterials");

    // Getting the list of available crafting materials
    let availableCraftingMaterialsObj = completeSave.GameSceneData.GameState.CraftingMaterials;

    /* 
        NOTE: some materials could be missing in the save file, so we have to manually add all the materials one by one:
            if a material is present in the save file, set it to the quantity stored in the save file
            otherwise, set its quantity to 0
    */
    // Creating a list of ALL crafting materials
    let allCraftingMaterialsObj = []
    // For each possibile crafting material
    allCraftingMaterials.forEach( materialId => {
        // If (for this material) there is a quantity specified in the save file, lets get it
        if (availableCraftingMaterialsObj.some(availableMat => availableMat.Id === materialId)) {
            // Get the available material object
            let availableMat = availableCraftingMaterialsObj.find(availableMat => availableMat.Id === materialId)
            allCraftingMaterialsObj.push({"Id":materialId, "Qty":availableMat.Qty})
        }
        // Otherwise, set the quantity to 0
        else {
            allCraftingMaterialsObj.push({"Id":materialId, "Qty":0})
        }
    })

    console.log(allCraftingMaterialsObj)

    // Build the table containing all crafting material with their available quantities
    buildTable(tableCraftingMaterials, allCraftingMaterialsObj, (craftingMaterialObj) => {
        // Adding a new table row for the current material
        let tr = document.createElement("tr");
        let tdMaterialName = document.createElement("td");
        let tdQuantity = document.createElement("td");
        let quantityInput = buildInputNumber(craftingMaterialObj.Id, CRAFTING_MATERIAL_TYPE, craftingMaterialObj.Qty, 0, 9999);

        // Getting the material image and adding it into the table
        let itemImage = getItemImage(craftingMaterialObj.Id, CRAFTING_MATERIAL_TYPE);
        tdMaterialName.appendChild(itemImage);
        tr.appendChild(tdMaterialName);
        
        // Adding the material quantity to the table
        tdQuantity.appendChild(quantityInput);
        tdQuantity.classList.add("quantity-input-container");
        tr.appendChild(tdQuantity);

        return tr;
    })

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
    buildUnlockableGUI(ARMOR_TYPE, tableArmors, availableArmors, allArmors, true)
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
    buildUnlockableGUI(TRINKET_TYPE, tableTrinkets, availableTrinkets, allTrinkets, true)
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
    buildUnlockableGUI(CSM_TYPE, tableConsumables, availableConsumables, allConsumables, true)
}
/*______________________________________________________________________*/



/**
 * Build the GUI of the indicated unlockable item-type
 * @param {String} itemType Type of the item (see "_TYPE" consts in const.js)
 * @param {HTMLTable} table Table where the data will be shown
 * @param {StringArray} availableItemList List of available item
 * @param {StringArray} completeItemList List of all items
 * @param {boolean} canBeUpgraded True if the item can be upgraded
 */
function buildUnlockableGUI(itemType, table, availableItemList, completeItemList, canBeUpgraded){
    // Calling the buildTable function passing to it a new rowBuilder function
    buildTable(table, completeItemList, (itemId) => {
        // Adding a new table row for the item
        let tr = document.createElement("tr");
        let tdItemName = document.createElement("td");
        let tdCheckboxBase = document.createElement("td");
        tdCheckboxBase.classList.add("checkbox-container")

        // Item-name or item-image
        switch(itemType){
            // If I've got an image, I put it
            case SKILL_TYPE:
            case CSM_TYPE:
            case ARMOR_TYPE:
            case TRINKET_TYPE:
            case WEAPON_TYPE:
            case FEAT_TYPE:
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

        return tr;
    })
}


/**
 * Add, to the specified `table`, rows containing informations extracted from `items` with
 *  the function `rowBuilder`
 * @param {*} table Table where to add rows
 * @param {*} items Data structure containing all informations to be added to the table
 * @param {*} rowBuilder Function wich builds table-rows from `items` data
 */
function buildTable(table, items, rowBuilder){
    // Clear the table content
    clearTable(table);

    // For each item, build a table row 
    items.forEach(item => {
        // Build the table row
        let tr = rowBuilder(item);
        // Adding the row to the table
        table.appendChild(tr);
    })
}


/**
 * Remove all rows from the specified table (besides headers)
 * @param {*} table to be cleared
 */
function clearTable(table){
    // Remove all table rows (besides headers)
    var tableRows = table.getElementsByTagName('tr');
    var rowCount = tableRows.length;
    for(let i = rowCount-1; i > 0; i--){
        table.removeChild(tableRows[i]);
    }
}


/**
 * Build a input[type=number] and add to it the specified id, type, quantity, min, max
 * @param {*} itemId 
 * @param {*} quantity 
 * @param {*} min 
 * @param {*} max 
 */
function buildInputNumber(itemId, itemType, quantity, min, max){
    let quantityInput = document.createElement("input");
    quantityInput.type = "number";
    quantityInput.value = quantity;
    quantityInput.min = min;
    quantityInput.max = max;
    quantityInput.dataset.id = itemId;
    quantityInput.dataset.type = itemType;
    quantityInput.name = itemId;
    quantityInput.classList.add("quantity-input");
    // Adding event listener to the input so each time the value is changed, the changes are applied to the save file
    quantityInput.onchange = inputQuantityUpdate;

    return quantityInput;
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
    checkbox.dataset.id = itemId;
    checkbox.dataset.type = itemType;
    checkbox.onchange = itemToggle
    // Only items in availableItemList has to be checked
    if (availableItemList.includes(itemId)){
        checkbox.checked = true
    }

    return checkbox;
}

/**
 * Update the quantity of a specific item (the item is identified by the input[type=number] who generated the event)
 * @param {*} event 
 */
function inputQuantityUpdate(event){
    let input = event.target;
    let id = input.dataset.id;
    let type = input.dataset.type;
    let value = input.value;

    console.log("[Item type: "+type+"]")
    switch(type){
        case CRAFTING_MATERIAL_TYPE:
            console.log("[Material id: "+id+", New quantity: "+value+"]")
            updateMaterialQuantity(id, value);
            break;
        default:
            console.error("ERROR: unknown type '" + type + "' for item '" + id + "'")
            break;
    }
}

/**
 * Add or remove an item from the save file based on the checkbox status
 * @param {*} event 
 */
function itemToggle(event){
    let checkbox = event.target;
    let itemId = checkbox.dataset.id;
    let itemType = checkbox.dataset.type;

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
                break;
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




/**
 * @param {*} itemId Id of the item
 * @param {*} itemType Type of the item
 * @returns The image of the item with the specified `itemId` and `itemType`
 */
function getItemImage(itemId, itemType){
    let image = document.createElement("img");
    if(itemType == SKILL_TYPE || itemType == FEAT_TYPE){
        image.src = "img/"+itemType+"/"+language+"/"+itemId+".png"
    }
    else{
        image.src = "img/"+itemType+"/"+itemId+".png"
    }

    // Set different styles based on the itemType
    switch(itemType){
        case CSM_TYPE:
        case ARMOR_TYPE:
        case TRINKET_TYPE:
        case WEAPON_TYPE:
        case CRAFTING_MATERIAL_TYPE:
            image.classList.add("item-image")
            break;
        default:
            image.classList.add("item-text-image")
    }

    return image;
}

