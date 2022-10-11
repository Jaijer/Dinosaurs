const dinoData = [
    {
        "species": "Triceratops",
        "weight": 13000,
        "height": 114,
        "diet": "herbavor",
        "where": "North America",
        "when": "Late Cretaceous",
        "fact": "First discovered in 1889 by Othniel Charles Marsh"
    },
    {
        "species": "Tyrannosaurus Rex",
        "weight": 11905,
        "height": 144,
        "diet": "carnivor",
        "where": "North America",
        "when": "Late Cretaceous",
        "fact": "The largest known skull measures in at 5 feet long."
    },
    {
        "species": "Anklyosaurus",
        "weight": 10500,
        "height": 55,
        "diet": "herbavor",
        "where": "North America",
        "when": "Late Cretaceous",
        "fact": "Anklyosaurus survived for approximately 135 million years."
    },
    {
        "species": "Brachiosaurus",
        "weight": 70000,
        "height": "372",
        "diet": "herbavor",
        "where": "North America",
        "when": "Late Jurasic",
        "fact": "An asteroid was named 9954 Brachiosaurus in 1991."
    },
    {
        "species": "Stegosaurus",
        "weight": 11600,
        "height": 79,
        "diet": "herbavor",
        "where": "North America, Europe, Asia",
        "when": "Late Jurasic to Early Cretaceous",
        "fact": "The Stegosaurus had between 17 and 22 seperate places and flat spines."
    },
    {
        "species": "Elasmosaurus",
        "weight": 16000,
        "height": 59,
        "diet": "carnivor",
        "where": "North America",
        "when": "Late Cretaceous",
        "fact": "Elasmosaurus was a marine reptile first discovered in Kansas."
    },
    {
        "species": "Pteranodon",
        "weight": 44,
        "height": 20,
        "diet": "carnivor",
        "where": "North America",
        "when": "Late Cretaceous",
        "fact": "Actually a flying reptile, the Pteranodon is not a dinosaur."
    },
    {
        "species": "Pigeon",
        "weight": 0.5,
        "height": 9,
        "diet": "herbavor",
        "where": "World Wide",
        "when": "Holocene",
        "fact": "All birds are living dinosaurs."
    }
]
    // Create Dino Constructor
    function Dino(species, weight, height, diet, place, time, fact){
        this.species = species;
        this.weight = weight;
        this.height = height;
        this.diet = diet;
        this.place = place;
        this.time = time;
        this.fact = fact;
    }


    // Create Dino Objects

    const triceratops = new Dino(dinoData[0].species, dinoData[0].weight, dinoData[0].height, dinoData[0].diet, dinoData[0].where, dinoData[0].when, dinoData[0].fact);
    const tyrannosaurusRex = new Dino(dinoData[1].species, dinoData[1].weight, dinoData[1].height, dinoData[1].diet, dinoData[1].where, dinoData[1].when, dinoData[1].fact);
    const anklyosaurus = new Dino(dinoData[2].species, dinoData[2].weight, dinoData[2].height, dinoData[2].diet, dinoData[2].where, dinoData[2].when, dinoData[2].fact);
    const brachiosaurus = new Dino(dinoData[3].species, dinoData[3].weight, dinoData[3].height, dinoData[3].diet, dinoData[3].where, dinoData[3].when, dinoData[3].fact);
    const stegosaurus = new Dino(dinoData[4].species, dinoData[4].weight, dinoData[4].height, dinoData[4].diet, dinoData[4].where, dinoData[4].when, dinoData[4].fact);
    const elasmosaurus = new Dino(dinoData[5].species, dinoData[5].weight, dinoData[5].height, dinoData[5].diet, dinoData[5].where, dinoData[5].when, dinoData[5].fact);
    const pteranodon = new Dino(dinoData[6].species, dinoData[6].weight, dinoData[6].height, dinoData[6].diet, dinoData[6].where, dinoData[6].when, dinoData[6].fact);
    const pigeon = new Dino(dinoData[7].species, dinoData[7].weight, dinoData[7].height, dinoData[7].diet, dinoData[7].where, dinoData[7].when, dinoData[7].fact);
    const arrayOfDino = [triceratops, tyrannosaurusRex, anklyosaurus, brachiosaurus, stegosaurus, elasmosaurus, pteranodon, pigeon];
    // Create Human Object

    function human(name, height, weight, diet){
        this.name = name;
        this.height = height;
        this.weight = weight;
        this.diet = diet;
        this.species = 'human';
    }
    
    const myHuman = new human();
    

    // Use IIFE to get human data from form
    
    const getHumanData = (
        function() {
            let nameInput = document.getElementById('name');
            let feetInput = document.getElementById('feet');
            let inchesInput = document.getElementById('inches');
            let weightInput = document.getElementById('weight');
            let dietInput = document.getElementById('diet');
            return function(){
                myHuman.name = nameInput.value;
                myHuman.height = parseInt(feetInput.value) * 12 + parseInt(inchesInput.value);
                myHuman.weight = weightInput.value;
                myHuman.diet = dietInput.value;
            }   
        }
    )();

    

    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 
    function compareHeight(first, second){
        return first.height == second.height;
    }


    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.
    function compareHeight(first, second){
        return first.weight == second.weight;
    }
    
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.
    function compareHeight(first, second){
        return first.diet == second.diet;
    }

    // Generate Tiles for each Dino in Array
    const getRandomDino = function() {
        const result = [];
        const dinoClone = arrayOfDino.slice();
        for (let i = 0; i < 8; i++){
            let randomNum = Math.floor(Math.random() * (8 - i));
            result.push(dinoClone[randomNum]);
            dinoClone.splice(randomNum, 1);
        }
        getHumanData();
        result.splice(4, 0, myHuman);
        return result;
    }

    const generateTiles = function(){
        const randomDino = getRandomDino();
        const result = [];
        randomDino.forEach((creature)=>{
            const container = document.createElement('div');
            const img = document.createElement('img');
            img.src = './images/' + creature.species + '.png';
            const header = document.createElement('h3');
            const fact = document.createElement('p');
            if (creature.species == 'human') {
                header.innerHTML = creature.name;
            }
            else {
                header.innerHTML = creature.species;
                fact.innerHTML = creature.fact;
            }
            container.classList.add('grid-item');
            container.appendChild(header);
            container.appendChild(img);
            container.appendChild(fact);
            result.push(container);
        })
        return result;
    }
  
        // Add tiles to DOM
            const addTiles = function() {
            const tiles = generateTiles();
            let mainContainer = document.getElementById('grid');
            for (let i = 0; i < tiles.length; i++){
                mainContainer.appendChild(tiles[i]);
            }
        }

    // Remove form from screen


// On button click, prepare and display infographic
        const compareBtn = document.getElementById('btn');
        const form = document.getElementById('dino-compare');
        compareBtn.addEventListener('click', ()=>{
            form.style.display = 'none';
            addTiles();
        })