/*
    Per aggiungere un arma o potenziamento di arma basta aggiungere il suo ID in:
        -GameSceneData/GameState/ItemInventory
        -GameSceneData/GameState/DiscoveredRecipies
        -GameSceneData/GameState/AvaiableItemIds

    N.B. forse è sufficiente metterlo solo in AvaiableItemIds, però per evitare che ricompaia in negozio
        lo metterei anche negli altri 2 elenchi
 */
var completeSave;

// Language
var language = "eng";




// Load save-file content into completeSave
function loadFile() {
    let input, file, fr;

    // Check API compatibility
    if (typeof window.FileReader !== 'function') {
        alert("The file API isn't supported on this browser yet.");
        return;
    }

    input = document.getElementById('fileinput');
    // Check if file exists and can be opened
    if (!input) {
        alert("Um, couldn't find the fileinput element.");
    }
    else if (!input.files) {
        alert("This browser doesn't seem to support the `files` property of file inputs.");
    }
    else if (!input.files[0]) {
        alert("Please select a file before clicking 'Load'");
    }
    // If the file is allright
    else {
        // Take the given file
        file = input.files[0];
        fr = new FileReader();
        // Assign receiveText() function to the FileReader
        fr.onload = receivedText;
        // Read the file content
        fr.readAsText(file);
        console.log("Done")
    }

    function receivedText(e) {
        // Read all lines of the file
        let lines = e.target.result;
        // Convert all the lines into a single JSON Object
        completeSave = JSON.parse(lines);
        // Build the interface to modify the save file
        buildCompleteGUI()
    }
}

// Download the completeSave object into a json file
function downloadUpdatedSaveFile(){
    const filename = 'updatedSave.sav';
    // Stringify the json object of the save
    const jsonStr = JSON.stringify(completeSave);

    // Create a temporary link to download the file(it will not be visible) and auto-click on it
    let tempLink = document.createElement('a');
    tempLink.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(jsonStr));
    tempLink.setAttribute('download', filename);

    tempLink.style.display = 'none';
    document.body.appendChild(tempLink);

    tempLink.click();

    document.body.removeChild(tempLink);
}

// Create the GUI to edit the save file
function buildCompleteGUI(){
    let divSaveData = document.getElementById("saveData");

    // Getting party name
    showPartyName();

    // Filling the armors GUI
    buildArmorGUI();
    // Filling the trinkets GUI
    buildTrinketGUI();
    // Filling the consumables GUI
    buildConsumableGUI();

    // Filling the weapons GUI
    buildWeaponGUI(BRYNN_ID);
    buildWeaponGUI(SYRUS_ID);
    buildWeaponGUI(GALADEN_ID);
    buildWeaponGUI(VAERIX_ID);
    buildWeaponGUI(KEHLI_ID);
    buildWeaponGUI(CHANCE_ID);

    // Filling the skill GUI
    buildSkillGUI(BRYNN_ID);
    buildSkillGUI(SYRUS_ID);
    buildSkillGUI(GALADEN_ID);
    buildSkillGUI(VAERIX_ID);
    buildSkillGUI(KEHLI_ID);
    buildSkillGUI(CHANCE_ID);

    // Filling the feat GUI
    buildFeatGUI(BRYNN_ID);
    buildFeatGUI(SYRUS_ID);
    buildFeatGUI(GALADEN_ID);
    buildFeatGUI(VAERIX_ID);
    buildFeatGUI(KEHLI_ID);
    buildFeatGUI(CHANCE_ID);
}

// Change language
function changeLanguage(){
    // Get language
    let select = document.getElementById("selLanguage");
    // Change global language
    language = select.value;

    // Change navigation bar names
    let navigationBar = document.getElementById("navigationBar");
    let list = navigationBar.getElementsByTagName('li');
    for(li of list) {
        li.textContent = allHerosData[li.dataset.id].name[language];
    }
    // Change hero title names
    let heroTitles = document.getElementsByClassName("heroTitle");
    for(title of heroTitles) {
        title.textContent = allHerosData[title.dataset.id].name[language];
    }

    // Refresh GUI
    buildCompleteGUI()
}


// PROVA
function setup(){
    // Adding listener to navigation bar
    let navigationBar = document.getElementById("navigationBar");
    let list = navigationBar.getElementsByTagName('li');
    
    for(li of list) {
        li.addEventListener("click", switchGUI);
    };
}

//PROVA
function switchGUI(event){
    let li = event.target;
    let heroId = li.dataset.id;
    let targetDiv;
    let targetTitle;
    // divs
    let commonDiv = document.getElementById(allHerosData.COMMON.GUI_divId)
    let brynnDiv = document.getElementById(allHerosData.HERO_BRYNN.GUI_divId)
    let syrusDiv = document.getElementById(allHerosData.HERO_SYRUS.GUI_divId)
    let galadenDiv = document.getElementById(allHerosData.HERO_GALADEN.GUI_divId)
    let vaerixDiv = document.getElementById(allHerosData.HERO_VAERIX.GUI_divId)
    let kehliDiv = document.getElementById(allHerosData.HERO_KEHLI.GUI_divId)
    let chanceDiv = document.getElementById(allHerosData.HERO_CHANCE.GUI_divId)
    // titles
    let brynnTitle = document.getElementById(allHerosData.HERO_BRYNN.GUI_titleId)
    let syrusTitle = document.getElementById(allHerosData.HERO_SYRUS.GUI_titleId)
    let galadenTitle = document.getElementById(allHerosData.HERO_GALADEN.GUI_titleId)
    let vaerixTitle = document.getElementById(allHerosData.HERO_VAERIX.GUI_titleId)
    let kehliTitle = document.getElementById(allHerosData.HERO_KEHLI.GUI_titleId)
    let chanceTitle = document.getElementById(allHerosData.HERO_CHANCE.GUI_titleId)

    // Making all GUIs invisible
    //divs
    commonDiv.style.display = "none";
    brynnDiv.style.display = "none";
    syrusDiv.style.display = "none";
    galadenDiv.style.display = "none";
    vaerixDiv.style.display = "none";
    kehliDiv.style.display = "none";
    chanceDiv.style.display = "none";
    // titles
    brynnTitle.style.display = "none";
    syrusTitle.style.display = "none";
    galadenTitle.style.display = "none";
    vaerixTitle.style.display = "none";
    kehliTitle.style.display = "none";
    chanceTitle.style.display = "none";
    
    // Make the choose GUI visible
    switch(heroId){
        case "COMMON":
            targetDiv = commonDiv
            targetTitle = ""
            break;
        case BRYNN_ID:
            targetDiv = brynnDiv
            targetTitle = brynnTitle
            break;
        case SYRUS_ID:
            targetDiv = syrusDiv
            targetTitle = syrusTitle
            break;
        case GALADEN_ID:
            targetDiv = galadenDiv
            targetTitle = galadenTitle
            break;
        case VAERIX_ID:
            targetDiv = vaerixDiv
            targetTitle = vaerixTitle
            break;
        case KEHLI_ID:
            targetDiv = kehliDiv
            targetTitle = kehliTitle
            break;
        case CHANCE_ID:
            targetDiv = chanceDiv
            targetTitle = chanceTitle
            break;
        default:
            console.error("ERROR: hero id '" + heroId + "' not found");
            break;
    }
    targetDiv.style.display = "flex";
    if(targetTitle != "")
        targetTitle.style.display = "block";
}





