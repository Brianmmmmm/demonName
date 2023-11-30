// script.js
window.onload = function() {
    // Your long JavaScript code here
    // ...
    let testName = demonName.generateName();
    let A = GameMath.randomInteger(0,DEMON_DOMAINS.length-1);
    let B = GameMath.randomInteger(0,DEMON_DOMAINS.length-1);
    let C = GameMath.randomInteger(0,DEMON_DOMAINS.length-1);
    let testTitle = demonName.generateTitle([A,B,C],[HE,SHE,THEY,IT]);
    let fullName = testName + ", the " + testTitle + "!";
    document.getElementById("god-line").innerHTML = fullName;

    let colorLine = WorldTextGenerator.generateColorString();
    colorLine = "Behold! The " + colorLine + " portal opens, revealing your new master!";
    document.getElementById("color-line").innerHTML = colorLine;
};

var demonName = {};
var WorldTextGenerator = {};

WorldTextGenerator.humanoidSpecies = [
    {
        name: "lizardman",
        preferredGeography: ["swamp"],
    },
]

WorldTextGenerator.colors = [
    {
        name: "white",
        weight: 150,
        modifier: ["bone", "ivory", "snow", "pure", "discolored", "chalk", "creamy", "milky", "bleached", "silvery", "alabaster", "pale", "ashen"],
        altName: ["bone", "colorless", "alabaster"]
    },
    {
        name: "red",
        weight: 150,
        modifier: ["blood", "crimson", "scarlet", "ruby", "burgundy", "wine", "dark", "deep"],
        altName: ["crimson", "scarlet", "burgundy", "vermilion"]
    },
    {
        name: "orange",
        weight: 120,
        modifier: ["carrot", "bright", "sunset", "burnt", "autumnal", "rust"],
        altName: ["coral", "tangerine","rust-colored"]
    },
    {
        name: "yellow",
        weight: 125,
        modifier: ["lemon", "golden", "sunny", "bright", "pale", "canary", "amber", "honey"],
        altName: ["gold", "saffron", "amber"]
    },
    {
        name: "teal",
        weight: 50,
        modifier: ["ocean","light","dark"],
        altName: ["teal green","teal blue","aquamarine","turquoise","cyan","verdigris"]
    },
    {
        name: "green",
        weight: 125,
        modifier: ["emerald", "jade", "lime", "forest", "moss", "verdant", "olive", "pale", "teal", "mint", "grass","putrid"],
        altName: ["viridian", "chartreuse", "aquamarine"]
    },
    {
        name: "blue",
        weight: 135,
        modifier: ["azure", "sapphire", "navy", "cobalt", "cerulean", "sky", "pale", "teal", "royal", "deep", "cyan"],
        altName: ["cyan", "teal", "cerulean"]
    },
    {
        name: "purple",
        weight: 150,
        modifier: ["amethyst", "lilac", "orchid", "pale", "mauve", "royal"],
        altName: ["amethyst","mauve", "violet", "indigo", "lavender", "plum", "magenta", "fuchsia"]
    },
    {
        name: "pink",
        weight: 90,
        modifier: ["fleshy", "rose", "coral", "candy", "pale", "shocking"],
        altName: ["salmon"]
    },
    {
        name: "brown",
        weight: 100,
        modifier: ["chocolate", "caramel", "sepia", "rust", "mahogany", "tan", "wooden"],
        altName: ["umber", "chestnut", "cienna"]
    },
    {
        name: "grey",
        weight: 150,
        modifier: ["argent","corpse", "ash", "charcoal", "slate", "steel", "smoky", "pewter", "pale", "silvery", "cloudy", "sky"],
        altName: ["taupe"]
    },
    {
        name: "black",
        weight: 150,
        modifier: ["midnight", "coal", "ebony", "soot", "raven", "shadowy"],
        altName: ["onyx", "sable","pitch-black", "obsidian"]
    },
    {   name: "gold",
        weight: 20,
        modifier: ["tarnished", "pale", "shiny", "burnished", "glittering", "dull"],
        altName: ["pyrite"],
    },
    {   name: "silver",
        weight: 20,
        modifier: ["tarnished", "pale", "shiny", "burnished", "dull", "luminescent"],
        altName: ["platinum","argent"],
    },
    {   name: "bronze",
        weight: 10,
        modifier: ["tarnished", "shiny", "warm", "polished", "dull"],
        altName: ["copper"],
    },
    {   name: "iron",
        weight: 10,
        modifier: ["dark", "rusted", "weathered", "forged", "dull"],
        altName: ["metallic", "steel"],
    }
];


demonName.maleRoyalTitles = [
    "Sovereign",
    "Highpriest",
    "Bishop",
    "Father",
    "Patriarch",
    "God",
    "Godking",
    "King",
    "Prince",
    "Lord",
    "Lord",
    "Duke",
    "Emperor",
    "Baron",
    "Margrave",
    "Sultan",
    "Tsar",
    "Earl",
    "Viscount",
    "Sheikh",
    "Thane",
    "Doge",
    "Patron"
]

demonName.monstrousTitles = [
    "Flesh",
    "Goat",
    "Thing",
    "Devil",
    "Angel",
    "Corpse",
    "Serpent",
    "Dragon",
    "Spider",
    "Raven",
    "Lion",
    "Tyger",
    "Avatar",
    "Embodiment"
]
//8 characters seems like the cutoff when things like "Blood Lord" become unwieldy
demonName.femaleRoyalTitles = [
    "Sovereign",
    "Highpriestess",
    "Mother",
    "Matriarch",
    "Goddess",
    "Queen",
    "Princess",
    "Lady",
    "Lady",
    "Duchess",
    "Empress",
    "Baroness",
    "Margravine",
    "Sultana",
    "Tsarina",
    "Countess",
    "Viscountess",
    "Sheikha",
    "Thane",
    "Dogess",
];


demonName.progenitorTitles = [
    "God",
    "God",
    "Demigod",
    "Deity",
    "Master",
    "Creator",
    "Designer",
    "Scholar",
    "Artisan",
    "Composer",
    "Curator",
    "Wizard",
    "President",
    "Primogen"
]

demonName.avatarForms = [
    { name: "knight", features: ["armor", "sword", "shield", "helm", "cloak"]},
    { name: "magician", features: [""]}
]

demonName.beasts = [
    { name: "crow", type: "bird", features: ["feathers", "eyes", "wings"] },
    { name: "raven", type: "bird", features: ["feathers", "eyes", "wings"] },
    { name: "eagle", type: "bird", features: ["feathers", "eyes", "talons", "wings"] },
    { name: "wolf", type: "mammal", features: ["fur", "*snout", "eyes", "*tail"] },
    { name: "hound", type: "mammal", features: ["fur", "*snout", "eyes", "*tail"] },
    { name: "serpent", type: "reptile", features: ["scales", "eyes"] },
    { name: "goat", type: "mammal", features: ["fur", "horns", "hooves"] },
    { name: "bull", type: "mammal", features: ["fur", "horns", "hooves","eyes"] },
    { name: "stallion", type: "mammal", features: ["fur", "*mane", "hooves"] },
    { name: "mare", type: "mammal", features: ["fur", "*mane", "hooves"] },
    { name: "stag", type: "mammal", features: ["fur", "antlers", "hooves"] },
    { name: "panther", type: "mammal", features: ["fur", "eyes", "claws"] },
    { name: "tyger", type: "mammal", features: ["fur", "eyes", "claws"] },
    { name: "lion", type: "mammal", features: ["fur", "*mane", "eyes", "claws"] },
    { name: "leopard", type: "mammal", features: ["fur", "spots", "eyes", "claws"] },
    { name: "bear", type: "mammal", features: ["fur", "eyes", "claws"] },
    { name: "salamander", type: "amphibian", features: ["*hide", "eyes", "*tail"] },
    { name: "octopus", type: "aquatic", features: ["tentacles","eyes"] },
    { name: "spider", type: "arachnid", features: ["legs", "*thorax"] },
    { name: "scorpion", type: "arachnid", features: ["claws", "*tail"] },
    { name: "hyena", type: "mammal", features: ["fur", "*mane", "*snout", "eyes"] },
    { name: "cobra", type: "reptile", features: ["scales", "*hood"] },
    { name: "python", type: "reptile", features: ["scales", "eyes"] },
    { name: "buffalo", type: "mammal", features: ["fur", "horns", "hooves"] },
    { name: "elephant", type: "mammal", features: ["*trunk", "tusks","*hide"] },
    { name: "ape", type: "mammal", features: ["fur", "arms", "legs","eyes"] },
    { name: "ape", type: "mammal", features: ["fur", "arms", "legs","eyes"] },
    { name: "jaguar", type: "mammal", features: ["fur", "spots","claws"] },
    { name: "crocodile", type: "reptile", features: ["scales", "snout"] },
    { name: "vulture", type: "bird", features: ["feathers", "*head", "talons"] },
    { name: "bat", type: "mammal", features: ["wings", "ears", "fangs"] },
    { name: "fox", type: "mammal", features: ["fur", "ears", "*tail"] },
    { name: "coyote", type: "mammal", features: ["fur", "ears", "*tail"] },
    { name: "badger", type: "mammal", features: ["fur", "stripes", "*snout"] },
    { name: "puma", type: "mammal", features: ["fur", "eyes", "claws"] },
    { name: "hawk", type: "bird", features: ["feathers", "*beak", "talons"] },
    { name: "falcon", type: "bird", features: ["feathers", "*beak", "talons"] },
    { name: "lynx", type: "mammal", features: ["fur", "*ears", "eyes"] },
    { name: "owl", type: "bird", features: ["feathers", "*eyes", "*beak","talons"] },
    { name: "squid", type: "aquatic", features: ["tentacles", "*beak", "eyes"] },
    { name: "jackal", type: "mammal", features: ["fur", "ears", "*snout"] },
    { name: "butterfly", type: "insect", features: ["wings", "*thorax"] },
    { name: "dragonfly", type: "insect", features: ["wings", "*thorax"] },
    { name: "moth", type: "insect", features: ["wings", "antennae"] },
    { name: "centipede", type: "insect", features: ["legs", "body"]},
]

demonName.linkingCharacter = [
    "'",
    "'",
    "'",
    "-",
    "-",
    " ",
    " ",
    "",
]

demonName.classicStartsConsonant = [
    "baph",
    "lok",
    "rav",
    "luc",
    "myr",
    "paz",
    "baal",
    "bal",
    "balth",
    "dag",
    "fel",
    "ghul",
    "hel",
    "kil",
    "kor",
    "hag",
    "hel",
    "mal",
    "mal",
    "mol",
    "rah",
    "sam",
    "shed",
    "xaph",
    "zag",
    "ur",
    "valk",
    "nerg",
    "sever",
    "tyr",
    "yam",
]

demonName.classicStartsVowel = [
    "asmo",
    "aba",
    "abra",
    "ala",
    "asu",
    "ebl",
    "ere",
    "incu",
    "oni",
    "orcu",
    "oro",
]

demonName.consonantStart = [
    "b",
    "bh",
    "d",
    "g",
    "gn",
    "h",
    "hr",
    "k",
    "kh",
    "kh",
    "kz",
    "l",
    "m",
    "n",
    "p",
    "ph",
    "q",
    "r",
    "sh",
    "sk",
    "sl",
    "skr",
    "t",
    "th",
    "thr",
    "tz",
    "v",
    "x",
    "z",
  ];

demonName.vowel = [
    "a",
    "aa",
    "ae",
    "ae",
    "ae",
    "ai",
    "e",
    "ei",
    "ee",
    "i",
    "o",
    //"oo",
    "ou",
    "u",
    "uu",
    "ue",
    "y",
    ""
];

demonName.consonantEnd = [
    "ch",
    "b",
    "d",
    "kh",
    "k",
    "kk",
    "l",
    "ll",
    "m",
    "n",
    "ng",
    "p",
    "ph",
    "rn",
    "r",
    "rth",
    "s",
    "sh",
    "sk",
    "sm",
    "st",
    "tch",
    "th",
    "tz",
    "x",
    "xx",
    "z",
];

WorldTextGenerator.getRandomColor = function() {
    return GameMath.randomWeightedTableValue(this.colors);
}

WorldTextGenerator.generateColorString = function(modifierChance) {
    modifierChance = modifierChance || 0.67;
    let color = this.getRandomColor();
    let output = "";
    const modifierLength = color.modifier.length || 0;
    const altNameLength = color.altName.length || 0;
    let colorPick = GameMath.randomInteger(1,modifierLength + altNameLength);
    if (colorPick <= modifierLength) {
        output = output + color.name;
        if (Math.random() < modifierChance) {
            output = GameMath.randomTableValue(color.modifier) + " " + output;
        }
    } else {
        output = GameMath.randomTableValue(color.altName);
    }
    return output;
}

demonName.duplicateSingleCharacters = function (array) {
    let doubledArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].length === 1) {
            doubledArray.push(array[i]);
            doubledArray.push(array[i]);
        } else {
            doubledArray.push(array[i]);
        }
    }
    return doubledArray;
};

demonName.consonantStart = demonName.duplicateSingleCharacters(demonName.consonantStart);
demonName.consonantEnd = demonName.duplicateSingleCharacters(demonName.consonantEnd);
demonName.vowel = demonName.duplicateSingleCharacters(demonName.vowel);

demonName.generateWord = function (syllableCount) {
    const startWithVowelChance = 0.35;
    let word = "";
    syllableCount = syllableCount || (Math.floor(Math.random() * 3) + 3);
    let startWithVowel = false;

    if (startWithVowelChance > Math.random()) {
        syllableCount += 1;
        startWithVowel = true;
    }

    // Chance of starting with a classic demon prefix, rather than randomly generating phonemes
    if (Math.random() < 0.05) {
        let classicArray = demonName.classicStartsConsonant;
        if (startWithVowel = true) {
            classicArray = demonName.classicStartsVowel;
        }
        let n = Math.floor(Math.random() * classicArray.length);
        word = classicArray[n];
        syllableCount -= 1;
        startWithVowel = !startWithVowel;
    }

    for (let i = 0 + startWithVowel; i < syllableCount; i++) {
        let phoneme = "";
        let listToUse = [];

        if (i == 0) {
            listToUse = demonName.consonantStart;
        } else if ((i == syllableCount - 1) && (i % 2 == 0)) {
            listToUse = demonName.consonantEnd;
        } else if (i % 2 == 0) {
            if (Math.random() > 0.5) {
                listToUse = demonName.consonantStart;
            } else {
                listToUse = demonName.consonantEnd;
            };
        } else {
            listToUse = demonName.vowel;
        }

        let n = Math.floor(Math.random() * listToUse.length);
        phoneme = listToUse[n];
        word = word + phoneme;
    };
    
    return word;
}

demonName.generateName = function () {
    let name = demonName.generateWord();
    while(true) {
        let chance = 0;
        if (name.length === 2) chance += 0.8;
        if (name.length === 3) chance += 0.4;
        if (name.length === 4) chance += 0.075;
        if (name.length < 9) chance += 0.1;
        let roll = Math.random();

        if (roll < chance) {
            let randomIndex = Math.floor(Math.random() * demonName.linkingCharacter.length);
            let linkingCharacter = demonName.linkingCharacter[randomIndex];
            let suffixName = demonName.generateWord();
            if (linkingCharacter === " ") {
                suffixName = suffixName[0].toUpperCase() + suffixName.slice(1);
            }
            if (linkingCharacter !== "" ) {
                if (Math.random() < 0.25) {
                    suffixName = suffixName[0].toUpperCase() + suffixName.slice(1);
                }
            }
            name = name + linkingCharacter + suffixName;
        } else {
            break;
        }
    }
    name = name[0].toUpperCase() + name.slice(1);
    return name;
}

demonName.generateTitle = function(domains, gender) {
    let prefixDomain = GameMath.randomTableValue(domains);
    let suffixDomain = GameMath.randomTableValue(domains);
    let titleGender = gender;
    let titleArray = [];
    let output = "";
    if (Array.isArray(gender)) {
        titleGender = GameMath.randomTableValue(gender);
    }
    if (titleGender !== SHE) {
        titleArray = titleArray.concat(demonName.maleRoyalTitles);
    }
    if (titleGender !== HE) {
        titleArray = titleArray.concat(demonName.femaleRoyalTitles);
    }
    titleArray = titleArray.concat(demonName.progenitorTitles);
    chanceOfMonstrousTitle = 0.5;
    if (titleGender === IT) {
        chanceOfMonstrousTitle += 0.5;
    }
    if (Math.random() < chanceOfMonstrousTitle) {
        titleArray = titleArray.concat(demonName.monstrousTitles);
    }
    for (let i = 0; i < domains.length; i++) {
        if ("standaloneTitles" in DEMON_DOMAINS[domains[i]]) {
            titleArray = titleArray.concat(DEMON_DOMAINS[domains[i]].standaloneTitles);
        }
    }

    for (let i = 0; i < 5; i++) {
        let prefixString = GameMath.randomTableValue(DEMON_DOMAINS[prefixDomain].titlePrefix);
        let suffixString = GameMath.randomTableValue(DEMON_DOMAINS[suffixDomain].titleSuffix);
        let titleString = GameMath.randomTableValue(titleArray);

        let comparisonPrefix = prefixString.substring(0, 3).toLowerCase();
        let comparisonTitle = titleString.substring(0, 3).toLowerCase();
        let comparisonSuffix = suffixString;
        if (suffixString.substring(0,4) === "the ") {
            comparisonSuffix = suffixString.substring(4);
        }
        comparisonSuffix = comparisonSuffix.substring(0, 3).toLowerCase();
        output = prefixString + " " + titleString + " of " + suffixString;
        if (comparisonPrefix !== comparisonSuffix && comparisonPrefix !== comparisonTitle
            && comparisonSuffix !== comparisonTitle) {
            break;
        }
    }
    return output
}

var GameMath = {};

GameMath.randomInteger = function(rangeBottom, rangeTop) {
    let output = Math.floor(Math.random() * (1 + rangeTop - rangeBottom));
    output += rangeBottom;
    return output
}

GameMath.randomTableValue = function(array) {
    if (!(Array.isArray(array) && array.length > 0)) {
        throw new Error("Passed non-array variable to GameMath.randomTableValue");
    }
    if (typeof array[0] === "object" && "weight" in array[0]) {
        return GameMath.randomWeightedTableValue(array);
    }
    let index = GameMath.randomInteger(0,array.length-1);
    return array[index]
}

GameMath.randomWeightedTableValue = function(array) {
    let totalWeight = 0;
    for (let i = 0; i < array.length; i++) {
        if ("weight" in array[i]) {
            totalWeight += array[i].weight;
        } else {
            totalWeight += 100;
        }
    }
    let randomWeight = GameMath.randomInteger(1,totalWeight);
    let weightIncrementor = 0;
    for (let i = 0; i < array.length; i++) {
        if ("weight" in array[i]) {
            weightIncrementor += array[i].weight;
        } else {
            weightIncrementor += 100;
        }
        if (randomWeight <= weightIncrementor) {
            return array[i]
        }
    }
    console.log("ERROR: this shouldn't happen");
}

var GameString = {};

GameString.they = function(gender, capitalize) {
    let output = GameString.getPronoun(PRONOUNS_THEY,gender,capitalize);
    return output;
}

GameString.their = function(gender, capitalize) {
    let output = GameString.getPronoun(PRONOUNS_THEIR,gender,capitalize);
    return output;
}

GameString.them = function(gender, capitalize) {
    let output = GameString.getPronoun(PRONOUNS_THEM,gender,capitalize);
    return output;
}

GameString.getPronoun = function(pronounList,gender,capitalize) {
    if (Array.isArray(gender)) {
        gender = THEY;
    }
    let output = pronounList[gender];
    capitalize = capitalize || false;
    if (capitalize) output = GameString.capitalizeFirstLetter(output);
    return output;
}

GameString.isSimilarWordStart = function(word1, word2, length) {
    length = length || 3;
    let string1 = word1.substring(0,length);
    let string2 = word2.substring(0,length);
    if (string1 === string2) {
        return true;
    }
    return false;
}

GameString.isAlliterative = function(word1, word2) {
    let phoneme1 = word1.substring(0,length);
    let phoneme2 = word2.substring(0,length);
    if (phoneme1 === "k") phoneme1 = "c";
    if (phoneme2 === "k") phoneme2 = "c";
    if (phoneme1 === phoneme2) {
        return true;
    }
    return false;
}

GameString.capitalizeFirstLetter = function(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}

GameString.interpolateString = function(string) {
    for (let i = 0; i < string.length; i++) {
        if (string[i] === "|") {
            let tableName = "";
            for (var j = i + 1; j < string.length; j++) {
                if (string[j] === "|") break;
                tableName = tableName + string[j];
            }
            if (!WorldTextGenerator.hasOwnProperty(tableName)) {
                throw new Error(`Unknown table name: ${tableName}`);
            }
            let table = WorldTextGenerator[tableName];
            let insertedString = GameMath.randomTableValue(table);
            let stringStart = string.slice(0,i);
            let stringEnd = string.slice(j+1);
            string = stringStart + insertedString + stringEnd;
        }
    }
    return string
}

GameString.deleteCharacters = function(string, startIndex, count) {
    return string.slice(0, startIndex) + string.slice(startIndex + count);
}

const HE = 0;
const SHE = 1;
const THEY = 2;
const IT = 3;

const PRONOUNS_THEY = ["he","she","they","it"];
const PRONOUNS_THEIR = ["his","her","their","its"];
const PRONOUNS_THEM = ["him","her","them","it"];

var DEMON_DOMAINS = [
    {
    name: "Stars",
    titlePrefix: ["Zodiac","Radiant","Starlit","Celestial","Stellar","Eldritch","Astral","Cosmic","Sidereal","Moon","Solar","Meteoric","Void","Star"],
    titleSuffix: ["the Stars","the Cosmos","Meteors","the Void","Comets","the Abyss"],
    standaloneTitles: ["Sun","Navigator","Star"],
    colors: ["black","white","yellow"],
    },

    {
    name: "Fate",
    titlePrefix: ["Doomed","Cursed","Inevitable","Auspicious","All-seeing","All-knowing","Fated","Infinite","Oracular","Destined"],
    titleSuffix: ["Destiny","Infinity","Foresight","Augury","the Inevitable","Doom","Curses","Fate","Scrying"],
    standaloneTitles: ["Seer","Augur","Haruspex","Destined","Oracle","Auspex"],
    colors: ["purple","blue"],
    },

    {
    name: "Death",
    titlePrefix: ["Dispiteous","Cthonic","Black", "Spirit","Necromancer","Corpse","Bone","Grave","Undead","Dead","Death","Rotted","Sepulchre","Lich","Undying","Grim"],
    titleSuffix: ["Souls","Necromancy","Corpses","Bones","Graves","the Undead","the Dead","Death","Tombs","Skeletons"],
    standaloneTitles: ["Lich","Undying","Wraith"],
    colors: ["black","grey"],
    avatarAttributes: ["pallid","rotting","skeletal","dying","albino","shadowed"],
    preferredAvatars: ["raven", "crow", "skeleton"]
    },

    {
    name: "Seas",
    titlePrefix: ["Dreadwater","Maelstrom","Watery","Cartilaginous","Thalassic","Pelagic","Sea","Deep","Salt","Abyssal","Ocean","Tentacled","Scaled"],
    titleSuffix: ["the Sea","the Ocean","Maelstroms","Oceans","the Abyss","the Depths","the Seas","Saltwater"],
    standaloneTitles: ["Navigator"],
    colors: ["blue","teal"],
    },

    {
    name: "Secrets",
    titlePrefix: ["Ophidian","Arcane","Occult","Secret","Hidden","Cryptic","All-seeing","Furtive","Whispering","Shrouded","Unseen"],
    titleSuffix: ["Secrets","Truth","Whispers","Night","Mysteries","Conspiracies","Revelation","the Hidden","the Unrevealed"],
    standaloneTitles: ["Whisperer","Conspirator","Alchemist","Deceiver"],
    colors: ["pink","black"],
    },

    {
    name: "Dreams",
    titlePrefix: ["Dream","Oneiric","Dreaming","Hypnotic","Somnolent","Mystic","Enchanted","Nightmare"],
    titleSuffix: ["the Dreamer","Reverie","Slumber","Nightmares","Hypnosis","Visions","Phantasms","Oneiromancy","Apparitions"],
    standaloneTitles: ["Dreamer"],
    colors: [],
    },

    {
    name: "Greed",
    titlePrefix: ["Insatiable","Gilded","Greedy","Aureate","Argent","Covetous","Hoarding","Gleaming","Miserly","Opulent"],
    titleSuffix: ["Fortunes","Greed","Avarice","Opulence","Riches","Gold","Silver"],
    standaloneTitles: ["Magnate","Thief","Merchant"],
    colors: ["gold","silver"],
    },

    {
    name: "Sorcery",
    titlePrefix: ["Wizard","Arcane","Sorcerer","All-powerful","Uncanny","Witch","Ensorcelled","Mystic","Diabolic","Rune"],
    titleSuffix: ["Magic","Sorcery","Witchcraft","Warlocks","Diablerie","Wizardry","the Doomed Circle","Incantations"],
    standaloneTitles: ["Archwizard","Avatar","Eye","Sorcerer"],
    colors: ["purple"]
    },

    {
    name: "Shadow",
    titlePrefix: ["Fell","Caliginous","Darkened","Shadow","Umbral","Dark","Eclipse","Obsidian","Twilight","Cimmerian",],
    titleSuffix: ["Gloaming","Shadows","Dark","Twilight","Umbra","Shrouds"],
    standaloneTitles: ["Deceiver","Liar","Illusionist"],
    colors: ["black"],
    },

    {
    name: "Revelry",
    titlePrefix: ["Decadent","Lubricious","Lecherous","Sensate","Worldly","Drunken","Dancing","Wild","Lascivious","Lustful","Vulgar","Libertine","Orgiastic","Voluptuous","Wanton","Carnal"],
    titleSuffix: ["Passions","Revelry","Debauchery","Sin","Lust","Flesh","the Senses","Pleasures","Night","Wine","Joy","Filth"],
    standaloneTitles: ["Whisperer","Artist"],
    colors: ["pink","red","gold"]
    },

    {
    name: "Madness",
    titlePrefix: ["Screaming","Lunatic","Mad","Insane","Delirious","Raving","Demented","Bedlam"],
    titleSuffix: ["Madness","Visions","Bedlam","Chaos","Delirium","Derangement"],
    standaloneTitles: ["Hellkite"]
    },


    {
    name: "Flesh",
    titlePrefix: ["Many-eyed","Tentacled","Twisting","Undulating","Carnal","Flesh","Corporeal","Mutant","Beast","Chimeric"],
    titleSuffix: ["Flesh","Mutation","Forms","Metamorphosis","Convergence","Beasts","Grotesques","Abominations"],
    standaloneTitles: ["Thing","Abomination","Chimera"],
    colors: ["pink"]
    },

    {
    name: "Fire",
    titlePrefix: ["Calefacient","Burned","Burning","Ember","Blazing","Smoldering","Pyroclastic","Devouring"],
    titleSuffix: ["the Pyre","Embers","Ash","Smoke","Fire","Immolation","Conflagration","the Inferno"],
    standaloneTitles: ["Inferno","Flame"],
    colors: ["orange","red"],
    },

    {
    name: "Blood",
    titlePrefix: ["Bisected","Grisly","Sanguisuge","Rubicund","Sanguine","Scarlet","Crimson","Red","Bloody","Blood","Corpse","Gore","Wounded"],
    titleSuffix: ["Blood","Blood","Gore","Bloodletting","Ichor","Vampires","Wounds","Gashes","Gore","Impalement","Decapitation","Disembowlment"],
    standaloneTitles: ["Vampire","Heart","Carnifex","Gash"],
    colors: ["red","red","red"],
    },

    {
    name: "Wrath",
    titlePrefix: ["Dispiteous","Armipotent","Vengeful","Blood-soaked","Bloody","War","Wrathful","Fearsome","Terrible","Rampaging","Raging","Berserker","Frenzied","Furious"],
    titleSuffix: ["War","Wrath","Rage","Frenzy","Carnage","Fury","Slaughter","Annihilation"],
    standaloneTitles: ["War Machine","Berserker","Butcher","Carnifex"],
    colors: ["red","bronze","iron"],
    },

    {
    name: "Ruin",
    titlePrefix: ["Fell","Entropic","Cataclysmic","Apocalyptic","Ruined","Annihilating"],
    titleSuffix: ["Entropy","Destruction","Annihilation","Ruin","the Apocalypse","Endings","Collapse","Unmaking","Storms","Abscession"],
    standaloneTitles: ["Destroyer","Ruiner","Annihilator","Harbinger","Unmaker"],
    colors: ["red","black"],
    },

    {
    name: "Plague",
    titlePrefix: ["Bubonic","Toxic","Virulent","Infected","Febrile","Shivering","Unclean","Plague","Pus-filled","Sickly","Rotted","Slime","Dying","Blighted","Venomous"],
    titleSuffix: ["Filth","Plagues","Pus","Vomit","Sickness","Rot","Slime","Contagion","the Afflicted","Outbreaks","Flies"],
    standaloneTitles: ["Doctor","Maggot"],
    colors: ["green","brown"],
    },

    {
    name: "Sylvan",
    titlePrefix: ["Elemental","Feral","Chitonous","Verdant","Sylvan","Wild","Beast","Druid","Primaeval"],
    titleSuffix: ["the Wild","Beasts","the Woods","the Swamp","the Weald","the Primaeval"],
    standaloneTitles: ["Warden","Beast","Wolf","Predator"],
    colors: ["green","brown"],
    }
];