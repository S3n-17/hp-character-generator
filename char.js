console.log("CHAR JS LOADED");
// inp = document.querySelector("#name");
// var n=inp.value;

const patronuses = [
  "Abraxan Winged Horse",
  "Adder",
  "Aardvark",
  "Badger",
  "Bat",
  "Bay Mare",
  "Bay Stallion",
  "Beagle",
  "Black Bear",
  "Black Mamba",
  "Black Swan",
  "Black and White Cat",
  "Blackbird",
  "Bloodhound",
  "Borzoi",
  "Brown Bear",
  "Brown Hare",
  "Brown Owl",
  "Buffalo",
  "Buzzard",
  "Calico Cat",
  "Capuchin Monkey",
  "Cheetah",
  "Chestnut Mare",
  "Chestnut Stallion",
  "Chow Dog",
  "Crow",
  "Dapple Grey Mare",
  "Dapple Grey Stallion",
  "Deerhound",
  "Doe",
  "Dolphin",
  "Dragon",
  "Dragonfly",
  "Dun Mare",
  "Dun Stallion",
  "Eagle",
  "Eagle Owl",
  "Elephant",
  "Erumpent",
  "Falcon",
  "Field Mouse",
  "Fire-Dwelling Salamander",
  "Fox",
  "Fox Terrier",
  "Ginger Cat",
  "Goshawk",
  "Granian Winged Horse",
  "Grass Snake",
  "Great Grey Owl",
  "Grey Squirrel",
  "Greyhound",
  "Hare",
  "Hedgehog",
  "Heron",
  "Hippogriff",
  "Horse",
  "Hummingbird",
  "Hyena",
  "Ibizan Hound",
  "Impala",
  "Irish Wolfhound",
  "King Cobra",
  "Kingfisher",
  "Leopard",
  "Lion",
  "Little Owl",
  "Lynx",
  "Magpie",
  "Manx Cat",
  "Marsh Harrier",
  "Mastiff",
  "Mink",
  "Mole",
  "Mongrel Dog",
  "Mountain Hare",
  "Nebelung Cat",
  "Newfoundland",
  "Nightjar",
  "Occamy",
  "Ocicat",
  "Orangutan",
  "Oryx",
  "Otter",
  "Owl",
  "Peacock",
  "Pheasant",
  "Pine Marten",
  "Polar Bear",
  "Polecat",
  "Ragdoll Cat",
  "Rat",
  "Rattlesnake",
  "Raven",
  "Red Squirrel",
  "Red Fox",
  "Rhinoceros",
  "Robin",
  "Rottweiler",
  "Salmon",
  "Scops Owl",
  "Seal",
  "Shark",
  "Sheepdog",
  "Shrew",
  "Siberian Cat",
  "Snowy Owl",
  "Sparrow",
  "Sparrowhawk",
  "St. Bernard",
  "Stag",
  "Stoat",
  "Swallow",
  "Swan",
  "Tiger",
  "Tortoiseshell Cat",
  "Unicorn",
  "Vole",
  "Vulture",
  "Weasel",
  "West Highland Terrier",
  "White Mare",
  "White Stallion",
  "White Swan",
  "Wild Boar",
  "Wild Rabbit",
  "Wildcat",
  "Wolf",
  "Wood Mouse"
];

const bloodStatus = [
  "Muggle-born",
  "Half-blood",
  "Pure-blood"
];

const favoriteSubjects = [
  "Nothing",
  "Defense Against the Dark Arts",
  "Potions",
  "Charms",
  "Transfiguration",
  "Herbology",
  "Astronomy",
  "History of Magic",
  "Care of Magical Creatures",
  "Divination",
  "Ancient Runes",
  "Arithmancy"
];

const boggart = [
  "Dementor",
  "Dark wizard",
  "Giant spider",
  "Being alone forever",
  "Failure",
  "Losing loved ones",
  "Snakes",
  "Heights",
  "Fire",
  "The dark",
  "A mirror showing your worst self",
  "A faceless shadow",
  "Thunderstorms",
  "Being forgotten"
];

const pets = [
  "Owl",
  "Cat",
  "Toad",
  "Rat",
  "Barn owl",
  "Snowy owl",
  "Black cat",
  "Ginger cat",
  "Grey cat",
  "Scabbers-like rat",
  "White owl",
  "Tiny owl",
  "Kneazle (cat-like magical creature)",
];

const personalityByHouse = {
  Gryffindor: [
    ["Brave", "Bold", "Reckless"],
    ["Daring", "Confident", "Impulsive"],
    ["Loyal", "Protective", "Strong-willed"],
    ["Adventurous", "Fearless", "Energetic"],
    ["Passionate", "Determined", "Hot-headed"]
  ],

  Slytherin: [
    ["Ambitious", "Cunning", "Resourceful"],
    ["Strategic", "Calm", "Manipulative"],
    ["Confident", "Driven", "Competitive"],
    ["Secretive", "Intelligent", "Calculated"],
    ["Charismatic", "Persuasive", "Sharp"]
  ],

  Ravenclaw: [
    ["Intelligent", "Curious", "Analytical"],
    ["Creative", "Imaginative", "Unique"],
    ["Logical", "Observant", "Thoughtful"],
    ["Independent", "Quiet", "Insightful"],
    ["Inventive", "Open-minded", "Abstract"]
  ],

  Hufflepuff: [
    ["Kind", "Patient", "Loyal"],
    ["Hardworking", "Dedicated", "Reliable"],
    ["Friendly", "Warm", "Supportive"],
    ["Honest", "Fair", "Trustworthy"],
    ["Gentle", "Empathetic", "Soft-hearted"]
  ]
};

const wandWoods = [
  "Acacia", "Alder", "Apple", "Ash", "Aspen", "Beech", "Blackthorn",
  "Black Walnut", "Cedar", "Cherry", "Chestnut", "Cypress",
  "Dogwood", "Ebony", "Elder", "Elm", "English Oak", "Fir",
  "Hawthorn", "Hazel", "Holly", "Hornbeam", "Larch", "Laurel",
  "Maple", "Pear", "Pine", "Poplar", "Red Oak", "Redwood",
  "Rowan", "Silver Lime", "Spruce", "Sycamore", "Vine",
  "Walnut", "Willow", "Yew"
];

const wandCores = [
  "Phoenix Feather",
  "Dragon Heartstring",
  "Unicorn Hair",
  "Veela Hair",
  "Thestral Tail Hair",
  "Basilisk Horn",
  "Troll Whisker"
];

const wandLengths = [
  "8 inches", "8.5 inches", "9 inches", "9.5 inches",
  "10 inches", "10.5 inches", "11 inches", "11.5 inches",
  "12 inches", "12.5 inches", "13 inches", "13.5 inches",
  "14 inches", "14.5 inches", "15 inches"
];

const wandFlexibility = [
  "Rigid", "Unyielding", "Solid", "Stiff",
  "Slightly Springy", "Supple", "Flexible",
  "Swishy", "Very Flexible", "Brittle"
];
