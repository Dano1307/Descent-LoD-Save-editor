/*--------------------------------------ADD FUNCTIONS-------------------------------------- */
function addToItemInventory(weaponId){
    let item = {
        "Id": weaponId,
        "SoldOut": true
    }

    addToObjectArray(completeSave.GameSceneData.GameState.ItemInventory, item);
}

function addToDiscoveredRecipes(weaponId){
    let item = {
        "Id": "RECIPE_"+weaponId,
        "Crafted": true
    }

    addToObjectArray(completeSave.GameSceneData.GameState.DiscoveredRecipes, item);
}

function addToAvailableItemIds(weaponId){
    addToArray(completeSave.GameSceneData.GameState.AvailableItemIds, weaponId);
}

function addToUnlockedSkills(skillId){
    addToArray(completeSave.GameSceneData.GameState.UnlockedSkills, skillId);
}

function addToRealCompletedFeats(featId){
    addToArray(completeSave.GameSceneData.GameState.RealCompletedFeats, featId);
}
/*----------------------------------------------------------------------------------------- */


/*------------------------------------REMOVE FUNCTIONS------------------------------------- */
function removeFromItemInventory(targetWeaponId){
    removeFromObjectArray(completeSave.GameSceneData.GameState.ItemInventory, targetWeaponId);
}

function removeFromDiscoveredRecipes(targetWeaponId) {
    let targetRecipeId = "RECIPE_"+targetWeaponId
    removeFromObjectArray(completeSave.GameSceneData.GameState.DiscoveredRecipes, targetRecipeId);
}

function removeFromAvailableItemIds(targetWeaponId) {
    removeFromArray(completeSave.GameSceneData.GameState.AvailableItemIds, targetWeaponId);
}

function removeFromUnlockedSkills(targetSkillId){
    removeFromArray(completeSave.GameSceneData.GameState.UnlockedSkills, targetSkillId); 
}

function removeFromRealCompletedFeats(targetFeatId){
    removeFromArray(completeSave.GameSceneData.GameState.RealCompletedFeats, targetFeatId); 
}
/*----------------------------------------------------------------------------------------- */






/*====================================UTILITY FUNCTIONS=========================================*/
// Generic function that add the specified element into the specified array
function addToArray(array, newItem){
    // Add only if the element is not already in the array
    if (array.findIndex(item => item.localeCompare(newItem)==0) == -1)
        array.push(newItem)
}

// Generic function that add the specified element into the specified array of objects
function addToObjectArray(array, newItem){
    // Add only if there is not already an element with the same id of the newItem
    if (array.findIndex(item => item.Id.localeCompare(newItem.Id)==0) == -1)
        array.push(newItem)
}

// Generic function that removes the specified element from the specified array
function removeFromArray(array, target){
    // Getting the index of the target in the array
    let targetIndex = array.findIndex( item => item === target);

    // Deleting the element at the found index (the "1" means that only one element will be deleted)
    // Delete only if the target was found
    if (targetIndex != -1)
        array.splice(targetIndex, 1)
}

// Generic function that removes the element with the specified id from the specified array (array of objects)
function removeFromObjectArray(array, targetId){
    // Getting the index of the element with targetId in the array
    let targetIndex = array.findIndex( item => item.Id === targetId);

    // Deleting the element at the found index (the "1" means that only one element will be deleted)
    // Delete only if the target was found
    if (targetIndex != -1)
        array.splice(targetIndex, 1)
}
/*==============================================================================================*/
