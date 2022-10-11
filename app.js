
    // Create Dino Constructor


    // Create Dino Objects


    // Create Human Object

    // Use IIFE to get human data from form


    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 

    
    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.

    
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.


    // Generate Tiles for each Dino in Array
  
        // Add tiles to DOM

    // Remove form from screen


// On button click, prepare and display infographic

let compareBtn = document.getElementById("btn");
let infographicTemp = document.getElementById("grid");
let compareForm = document.getElementById("dino-compare");

compareBtn.addEventListener("click", ()=>{
    infographicTemp.style.display = "flex";
    compareForm.style.display = "none";
})