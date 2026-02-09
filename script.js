//DATA and CONSTANTS//
//function fromBase64url(b64url){
  //const b64 = b64url.replace(/-/g,"+").replace(/_/g,"/") + "===".slice((b64url.length + 3) % 4);
  //const bin = atob(b64);
 // const bytes = Uint8Array.from(bin, c => c.charCodeAt(0));
 // return new TextDecoder().decode(bytes);
//}
// 30×30 Tile Matching Game - Complete Content Pack
// Category names are base64 encoded to prevent spoilers
// Usage: const categories = getCategories();
const CATEGORIES = {
  "QmFzZWJhbGwgVGVybXM=": ["Strike", "Ball", "Home run", "Double", "Triple", "Walk", "Stolen base", "Bunt", "Fly out", "Ground out", "Tag up", "Wild pitch", "Passed ball", "Balk", "Sacrifice fly", "Hit by pitch", "Intentional walk", "Pickoff", "Rundown", "Force out", "Throwing error", "Fielding error", "Infield fly", "Foul tip", "Check swing", "Lead off", "Squeeze play", "Hit and run", "Pitch out", "Appeal play"],
  "Q2F0cw==": ["Persian", "Siamese", "Maine Coon", "Ragdoll", "Bengal", "Sphynx", "British Shorthair", "Abyssinian", "Scottish Fold", "Birman", "Russian Blue", "Norwegian Forest", "Devon Rex", "Himalayan", "Burmese", "Exotic Shorthair", "Manx", "Cornish Rex", "Tonkinese", "Turkish Angora", "Somali", "Chartreux", "Ocicat", "Balinese", "Havana Brown", "Korat", "Singapura", "LaPerm", "Munchkin", "Selkirk Rex"],
  "RGlubmVyd2FyZQ==": ["Plate", "Bowl", "Mug", "Cup", "Saucer", "Salad plate", "Charger", "Bread plate", "Soup bowl", "Cereal bowl", "Pasta bowl", "Serving platter", "Gravy boat", "Tureen", "Ramekin", "Souffle dish", "Au gratin dish", "Butter dish", "Creamer", "Sugar bowl", "Teapot", "Coffee pot", "Pitcher", "Decanter", "Carafe", "Trivet", "Egg cup", "Demitasse", "Compote", "Cake stand"],
  "Q29mZmVlIE9yZGVycw==": ["Americano", "Cappuccino", "Latte", "Macchiato", "Cortado", "Flat white", "Mocha", "Affogato", "Red eye", "Con panna", "Breve", "Gibraltar", "Ristretto", "Lungo", "Doppio", "Cafe au lait", "Vienna", "Irish coffee", "Spanish latte", "Dirty chai", "Shakerato", "Mazagran", "Guillermo", "Cafe bombon", "Carajillo", "Barraquito", "Cafe con leche", "Cafe cubano", "Turkish coffee", "Greek frappe"],
  "V2luZXM=": ["Cabernet Sauvignon", "Merlot", "Pinot Noir", "Chardonnay", "Sauvignon Blanc", "Riesling", "Syrah", "Zinfandel", "Malbec", "Grenache", "Pinot Grigio", "Moscato", "Chianti", "Barolo", "Rioja", "Champagne", "Prosecco", "Cava", "Port", "Sherry", "Madeira", "Marsala", "Sangiovese", "Tempranillo", "Viognier", "Gewurztraminer", "Chenin Blanc", "Semillon", "Vermentino", "Barbera"],
  "U2VhdHRsZSBOZWlnaGJvcmhvb2Rz": ["Ballard", "Fremont", "Wallingford", "Queen Anne", "Magnolia", "Green Lake", "Greenwood", "Phinney Ridge", "Ravenna", "Laurelhurst", "Wedgwood", "Maple Leaf", "Northgate", "Lake City", "Sand Point", "Seward Park", "Columbia City", "Beacon Hill", "Georgetown", "SoDo", "Pioneer Square", "Belltown", "Lower Queen Anne", "Eastlake", "Montlake", "Madison Park", "Madrona", "Leschi", "Rainier Valley", "West Seattle"],
  "Q2hlZXNlIFZhcmlldGllcw==": ["Cheddar", "Gouda", "Brie", "Camembert", "Manchego", "Gruyere", "Parmesan", "Pecorino", "Fontina", "Asiago", "Provolone", "Mozzarella", "Ricotta", "Mascarpone", "Gorgonzola", "Roquefort", "Stilton", "Havarti", "Muenster", "Colby", "Monterey Jack", "Feta", "Halloumi", "Paneer", "Cotija", "Boursin", "Goat", "Swiss", "Blue", "Pepper Jack"],
  "R2VtIFN0b25lcw==": ["Diamond", "Ruby", "Sapphire", "Emerald", "Amethyst", "Topaz", "Garnet", "Opal", "Turquoise", "Aquamarine", "Peridot", "Citrine", "Onyx", "Jade", "Moonstone", "Tanzanite", "Alexandrite", "Tourmaline", "Spinel", "Zircon", "Morganite", "Kunzite", "Iolite", "Chrysoprase", "Larimar", "Labradorite", "Sunstone", "Amazonite", "Lapis Lazuli", "Malachite"],
  "IEJyZWFkIFR5cGVz": ["Sourdough", "Rye", "Pumpernickel", "Ciabatta", "Focaccia", "Baguette", "Challah", "Brioche", "Naan", "Pita", "Roti", "Flatbread", "Cornbread", "Biscuit", "Scone", "Croissant", "Multigrain", "Whole wheat", "White", "Ezekiel", "Injera", "Lavash", "Paratha", "Chapati", "Arepa", "Bannock", "Damper", "Fry bread", "Johnnycake", "Hardtack"],
  "U3BpY2VzIGFuZCBTZWFzb25pbmdz": ["Cumin", "Coriander", "Turmeric", "Paprika", "Cayenne", "Cardamom", "Cinnamon", "Nutmeg", "Clove", "Allspice", "Ginger", "Garlic powder", "Onion powder", "Chili powder", "Oregano", "Basil", "Thyme", "Rosemary", "Sage", "Dill", "Parsley", "Cilantro", "Bay leaf", "Fennel", "Mustard seed", "Celery seed", "Caraway", "Sumac", "Za'atar", "Fenugreek"],
  "Q29zbWV0aWNz": ["Foundation", "Concealer", "Powder", "Blush", "Bronzer", "Highlighter", "Primer", "Setting spray", "Mascara", "Eyeliner", "Eyeshadow", "Brow pencil", "Brow gel", "Lipstick", "Lip gloss", "Lip liner", "Lip balm", "Contour", "Tinted moisturizer", "BB cream", "CC cream", "Color corrector", "Lash curler", "Makeup sponge", "Brush", "Kabuki", "Pressed powder", "Loose powder", "Cream blush", "Liquid liner"],
  "U2tpbmNhcmUgSW5ncmVkaWVudHM=": ["Retinol", "Niacinamide", "Hyaluronic acid", "Glycerin", "Ceramide", "Salicylic acid", "Glycolic acid", "Lactic acid", "Vitamin C", "Vitamin E", "Squalane", "Peptide", "Bakuchiol", "Centella", "Azelaic acid", "Kojic acid", "Tranexamic acid", "Arbutin", "Alpha arbutin", "Mandelic acid", "Ferulic acid", "Resveratrol", "Niacin", "Panthenol", "Allantoin", "Urea", "Beta glucan", "Adenosine", "Caffeine", "Green tea extract"],
  "QnJlYWtmYXN0IERpc2hlcw==": ["Scrambled eggs", "Fried eggs", "Poached eggs", "Omelet", "Frittata", "Quiche", "Shakshuka", "Huevos rancheros", "Eggs Benedict", "French toast", "Pancakes", "Waffles", "Crepes", "Oatmeal", "Granola", "Yogurt parfait", "Smoothie bowl", "Avocado toast", "Bagel and lox", "Breakfast burrito", "Hash browns", "Home fries", "Grits", "Congee", "Chilaquiles", "Migas", "Biscuits and gravy", "Eggs Florentine", "Denver omelet", "Breakfast sandwich"],
  "UGFzdGEgVHlwZXM=": ["Spaghetti", "Fettuccine", "Linguine", "Penne", "Rigatoni", "Ziti", "Fusilli", "Rotini", "Farfalle", "Orecchiette", "Conchiglie", "Bucatini", "Campanelle", "Cavatappi", "Gemelli", "Radiatore", "Tagliatelle", "Pappardelle", "Lasagna", "Cannelloni", "Manicotti", "Ravioli", "Tortellini", "Agnolotti", "Cappelletti", "Gnocchi", "Orzo", "Ditalini", "Pastina", "Acini di pepe"],
  "Cml2ZXJz": ["Amazon", "Nile", "Mississippi", "Yangtze", "Ganges", "Danube", "Mekong", "Rhine", "Volga", "Thames", "Seine", "Tigris", "Euphrates", "Congo", "Zambezi", "Murray", "Yukon", "Colorado", "Columbia", "Rio Grande", "Brahmaputra", "Indus", "Ob", "Yenisei", "Lena", "Amur", "Yellow", "Parana", "Orinoco", "Mackenzie"],
  "VHJlZXM=": ["Oak", "Maple", "Pine", "Birch", "Cedar", "Spruce", "Fir", "Elm", "Ash", "Willow", "Poplar", "Aspen", "Redwood", "Sequoia", "Cypress", "Sycamore", "Beech", "Chestnut", "Walnut", "Hickory", "Cherry", "Dogwood", "Hawthorn", "Cottonwood", "Juniper", "Hemlock", "Larch", "Alder", "Basswood", "Locust"],
  "T2NlYW4gQ3JlYXR1cmVz": ["Dolphin", "Whale", "Shark", "Octopus", "Squid", "Jellyfish", "Starfish", "Sea urchin", "Clam", "Oyster", "Mussel", "Scallop", "Lobster", "Crab", "Shrimp", "Sea turtle", "Seal", "Sea lion", "Walrus", "Manatee", "Orca", "Stingray", "Manta ray", "Swordfish", "Tuna", "Marlin", "Barracuda", "Eel", "Seahorse", "Clownfish"],
  "S2l0Y2hlbiBUb29scw==": ["Spatula", "Whisk", "Ladle", "Tongs", "Peeler", "Grater", "Colander", "Strainer", "Can opener", "Corkscrew", "Garlic press", "Potato masher", "Pizza cutter", "Rolling pin", "Zester", "Mortar", "Pestle", "Skimmer", "Spider", "Bench scraper", "Pastry brush", "Basting brush", "Citrus juicer", "Mandoline", "Meat tenderizer", "Kitchen shears", "Egg slicer", "Apple corer", "Melon baller", "Ice cream scoop"],
  "Um9ja3MgYW5kIE1pbmVyYWxz": ["Granite", "Marble", "Limestone", "Sandstone", "Basalt", "Slate", "Shale", "Quartzite", "Obsidian", "Pumice", "Gneiss", "Schist", "Quartz", "Feldspar", "Mica", "Calcite", "Dolomite", "Gypsum", "Talc", "Halite", "Pyrite", "Hematite", "Magnetite", "Sulfur", "Graphite", "Coal", "Flint", "Chert", "Travertine", "Tuff"],
  "VGVsZXZpc2lvbiBHZW5yZXM=": ["Sitcom", "Drama", "Reality", "Documentary", "Crime", "Medical", "Legal", "Comedy", "Anthology", "Miniseries", "Soap opera", "Talk show", "Game show", "Variety", "Cooking", "Competition", "News", "Sports", "Police procedural", "Science fiction", "Fantasy", "Horror", "Western", "Spy", "Period", "Teen", "Mockumentary", "Late night", "Sketch", "Panel"],
  "U2FsYWQgVHlwZXM=": ["Caesar", "Greek", "Cobb", "Caprese", "Waldorf", "Nicoise", "Shopska", "Wedge", "Antipasto", "Panzanella", "Fattoush", "Tabbouleh", "Olivier", "Ambrosia", "Coleslaw", "Three bean", "Macaroni", "Potato", "Egg", "Chef", "Chicken", "Kale", "Spinach", "Arugula", "Quinoa", "Farro", "Asian sesame", "Southwest", "Strawberry spinach", "Apple walnut"],
  "QmljeWNsZSBUeXBlcw==": ["Road", "Mountain", "Hybrid", "Cruiser", "BMX", "Gravel", "Touring", "Cyclocross", "Track", "Triathlon", "Time trial", "Recumbent", "Tandem", "Folding", "Electric", "Fat", "Commuter", "City", "Cargo", "Penny farthing", "Beach cruiser", "Dutch", "Downhill", "Enduro", "Trail", "Cross country", "All mountain", "Dirt jumper", "Single speed", "Fixie"],
  "SGF0IFN0eWxlcw==": ["Fedora", "Trilby", "Bowler", "Top", "Stetson", "Cowboy", "Sombrero", "Beret", "Newsboy", "Flat cap", "Baseball cap", "Trucker", "Snapback", "Beanie", "Cloche", "Bucket", "Panama", "Boater", "Sun", "Wide brimmed", "Safari", "Pork pie", "Homburg", "Derby", "Fez", "Turban", "Ushanka", "Visor", "Fascinator", "Tam o'shanter"],
  "TWlsayBWYXJpZXRpZXM=": ["Whole", "Skim", "Two percent", "One percent", "Buttermilk", "Evaporated", "Condensed", "Lactose free", "Chocolate", "Strawberry", "Pistachio", "Soy", "Oat", "Coconut", "Cashew", "Rice", "Hemp", "Pea", "Macadamia", "Flax", "Yak", "Sheep", "Buffalo", "Camel", "Kefir", "Raw", "Ultra filtered", "A2", "Fairlife", "Organic"],
  "Q29va2llIFZhcmlldGllcw==": ["Chocolate chip", "Oatmeal raisin", "Peanut butter", "Sugar", "Snickerdoodle", "Gingerbread", "Shortbread", "Biscotti", "Macaroon", "Macaron", "Thumbprint", "Linzer", "Pizzelle", "Madeline", "Spritz", "Russian tea cake", "Mexican wedding", "Pfeffernusse", "Gingersnap", "Molasses", "Almond", "Lemon bar", "Brownie", "Blondie", "Hermit", "Whoopie pie", "Black and white", "Rainbow", "Meringue", "Ladyfinger"],
  "U291cCBWYXJpZXRpZXM=": ["Chicken noodle", "Tomato", "Minestrone", "Clam chowder", "French onion", "Butternut squash", "Broccoli cheddar", "Potato leek", "Mushroom", "Vegetable", "Lentil", "Split pea", "Beef stew", "Gazpacho", "Vichyssoise", "Borscht", "Wonton", "Miso", "Pho", "Tom yum", "Hot and sour", "Egg drop", "Tortilla", "Corn chowder", "Lobster bisque", "Gumbo", "Posole", "Menudo", "Mulligatawny", "Avgolemono"],
  "Qm9vayBQYXJ0cw==": ["Cover", "Spine", "Pages", "Foreword", "Preface", "Introduction", "Prologue", "Epilogue", "Appendix", "Index", "Glossary", "Bibliography", "Footnotes", "Endnotes", "Dedication", "Acknowledgments", "Table of contents", "Chapter", "Margin", "Header", "Footer", "Dust jacket", "Endpapers", "Frontispiece", "Title page", "Copyright page", "Colophon", "Verso", "Recto", "Blurb"],
  "Rm9vdGJhbGwgVGVybXM=": ["Touchdown", "Field goal", "Safety", "Interception", "Fumble", "Sack", "Blitz", "Audible", "Snap", "Handoff", "Pitch", "Lateral", "Screen pass", "Hail Mary", "Onside kick", "Punt", "Fair catch", "Touchback", "Two point conversion", "Extra point", "Red zone", "First down", "Fourth down", "Scramble", "Play action", "Bootleg", "Draw play", "Sweep", "Quarterback sneak", "Trick play"],
  "U3BvcnRzIEVxdWlwbWVudA==": ["Basketball", "Football", "Baseball", "Bat", "Glove", "Helmet", "Shin guards", "Cleats", "Racket", "Tennis ball", "Volleyball", "Soccer ball", "Hockey stick", "Puck", "Golf club", "Golf ball", "Skateboard", "Surfboard", "Snowboard", "Skis", "Bicycle", "Swim goggles", "Kickboard", "Jump rope", "Yoga mat", "Dumbbell", "Kettlebell", "Medicine ball", "Foam roller", "Resistance band"],
  "Rmxvd2Vycw==": ["Rose", "Tulip", "Daisy", "Sunflower", "Lily", "Orchid", "Carnation", "Iris", "Peony", "Dahlia", "Chrysanthemum", "Daffodil", "Hyacinth", "Gardenia", "Camellia", "Jasmine", "Lavender", "Marigold", "Poppy", "Zinnia", "Geranium", "Begonia", "Petunia", "Snapdragon", "Aster", "Cosmos", "Pansy", "Violet", "Hibiscus", "Azalea"]
};

const CATEGORY_HINTS = {
  "QmFzZWJhbGwgVGVybXM=": ["Actions, calls, and plays that happen during America's pastime.", "From what the umpire shouts to what happens on the basepaths."],
  "Q2F0cw==": ["Feline friends with pedigrees and distinct looks.", "From fluffy Persians to hairless Sphynx."],
  "RGlubmVyd2FyZQ==": ["Items you'd set on a dining table for a formal meal.", "From what holds your food to what serves it."],
  "Q29mZmVlIE9yZGVycw==": ["What you might ask for at a cafe or coffee shop.", "From simple espresso drinks to elaborate specialty beverages."],
  "V2luZXM=": ["Grape varieties and regional specialties you'd find in a cellar.", "From bold reds to crisp whites to sparkling options."],
  "U2VhdHRsZSBOZWlnaGJvcmhvb2Rz": ["Distinct areas and communities within the Emerald City.", "From waterfront to hilltop residential pockets."],
  "Q2hlZXNlIFZhcmlldGllcw==": ["Dairy delights from around the world.", "From mild and melty to sharp and crumbly."],
  "R2VtIFN0b25lcw==": ["Precious and semi-precious minerals used in jewelry.", "From the hardest substance to colorful crystals."],
  "IEJyZWFkIFR5cGVz": ["Baked goods that are staples across cultures.", "From leavened loaves to flat and fried varieties."],
  "U3BpY2VzIGFuZCBTZWFzb25pbmdz": ["Flavor boosters you'd find in a spice rack.", "From aromatic seeds to dried herbs to ground powders."],
  "Q29zbWV0aWNz": ["Beauty products for face makeup.", "From base layers to color to finishing touches."],
  "U2tpbmNhcmUgSW5ncmVkaWVudHM=": ["Active compounds you'd see on skincare labels.", "From acids to vitamins to soothing extracts."],
  "QnJlYWtmYXN0IERpc2hlcw==": ["Morning meals from various cuisines.", "From egg preparations to sweet options to regional specialties."],
  "UGFzdGEgVHlwZXM=": ["Italian noodle shapes and forms.", "From long strands to tubes to stuffed varieties."],
  "Cml2ZXJz": ["Major waterways around the world.", "From the longest to the most historically significant."],
  "VHJlZXM=": ["Woody plants that grow tall.", "From deciduous to evergreen species."],
  "T2NlYW4gQ3JlYXR1cmVz": ["Animals that live in saltwater habitats.", "From tiny invertebrates to massive mammals."],
  "S2l0Y2hlbiBUb29scw==": ["Hand implements for cooking and food prep.", "From stirring to cutting to specialized tasks."],
  "Um9ja3MgYW5kIE1pbmVyYWxz": ["Geological materials from the earth's crust.", "From igneous to sedimentary to individual minerals."],
  "VGVsZXZpc2lvbiBHZW5yZXM=": ["Categories of TV programming.", "From scripted to reality to specialized formats."],
  "U2FsYWQgVHlwZXM=": ["Named salad preparations you might order.", "From classic restaurant staples to regional specialties."],
  "QmljeWNsZSBUeXBlcw==": ["Different styles of two-wheeled transportation.", "From racing to commuting to off-road adventures."],
  "SGF0IFN0eWxlcw==": ["Headwear designs from around the world.", "From formal to casual to functional styles."],
  "TWlsayBWYXJpZXRpZXM=": ["Different kinds you'd find in the dairy aisle or cafe.", "From cow's milk variations to plant-based alternatives."],
  "Q29va2llIFZhcmlldGllcw==": ["Sweet baked treats in different styles.", "From chewy to crispy to sandwich cookies."],
  "U291cCBWYXJpZXRpZXM=": ["Hot bowls of comfort from various cuisines.", "From cream-based to broth to international specialties."],
  "Qm9vayBQYXJ0cw==": ["Components that make up a physical book.", "From structural elements to informational sections."],
  "Rm9vdGJhbGwgVGVybXM=": ["Actions and plays in American football.", "From scoring to penalties to strategic moves."],
  "U3BvcnRzIEVxdWlwbWVudA==": ["Gear used to play various sports and activities.", "From balls to protective gear to training tools."],
  "Rmxvd2Vycw==": ["Blooming plants grown in gardens.", "From common backyard varieties to exotic hothouse specimens."]
};




function getCategories() {
  return CATEGORIES;
}

// Validation
console.log("[PACKED] categories:", Object.keys(CATEGORIES).length);
console.log("[PACKED] all lengths ok:", Object.values(CATEGORIES).every(a => a.length === 30));
console.log("[PACKED] hints ok:", Object.keys(CATEGORIES).every(k => (CATEGORY_HINTS[k] || []).length === 2));


// Utility to decode and access the full pack:
// const data = JSON.parse(atob(window.TILE_PACK_ENCODED.join('')));
// console.log(data.CATEGORIES);
// console.log(data.CATEGORY_HINTS);const data //=JSON.parse(atob(window.TILE_PACK_ENCODED.join('')));

//const PACKED_SET = PACKED_PARTS.join("");

//const { CATEGORIES, CATEGORY_HINTS } = loadPackedCategories(PACKED_SET);
//console.log("[PACKED] categories:", Object.keys(CATEGORIES).length);
//console.log("[PACKED] all lengths ok:", Object.values(CATEGORIES).every(a => a.length === 30));
//console.log("[PACKED] hints ok:", Object.keys(CATEGORIES).every(k => //(CATEGORY_HINTS[k] || []).length === 2));

//function getCategories(){
  //return CATEGORIES;
//}

// Decode the packed data
//const { CATEGORIES, CATEGORY_HINTS } = //JSON.parse(atob(window.TILE_PACK_ENCODED.join('')));


// Your function
//function getCategories(){
  //return CATEGORIES;
//}

(() => {
  const BOARD_SIZE = 30;
  const GROUP_SIZE = 30;
  const NUM_GROUPS = 30;
const STORAGE_KEY = "groups30_state_v2";
  const GOAL_RATIO = 1;
  // UI icons
const EMOJI_OVEN = `<svg class="emoji emoji--oven" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">

  <!-- Outer body -->
  <rect x="18" y="20" width="92" height="88" rx="18" fill="#D6D7DC"/>

  <!-- Top control strip -->
  <rect x="26" y="28" width="76" height="14" rx="7" fill="#B7B8BE"/>

  <!-- Single status dot (heat/on) -->
<circle cx="94" cy="35" r="4" fill="#FFB340"/>
  <!-- Door frame -->
  <rect x="30" y="46" width="68" height="52" rx="12" fill="#A8A9B1"/>

  <!-- Door window (high contrast) -->
<rect x="40" y="55" width="48" height="34" rx="8" fill="#2C2C2E"/>
  <!-- Tiny highlight to read at small sizes -->
  <rect x="42" y="58" width="12" height="4" rx="2" fill="#3F3F42" opacity="0.9"/>

</svg>
`;
  
  const PENCIL_SVG = `
<svg class="emoji-icon" viewBox="0 0 24 24" aria-hidden="true">
  <path d="M12 20h9" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round"/>
  <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4 11.5-11.5z"
        fill="none" stroke="currentColor" stroke-width="1.75"
        stroke-linejoin="round" stroke-linecap="round"/>
</svg>
`;

     let state = null;

function _totalOptions_(){
  return state?.tiles?.length || (BOARD_SIZE * BOARD_SIZE);
}

function _winScore_(){
  return Math.ceil(GOAL_RATIO * _totalOptions_());
}

//IIFE//
 const els = {
  board: document.getElementById("board"),
  score: document.getElementById("score"),
   scoreTip: document.getElementById("scoreTip"),
elimToggle: document.getElementById("elimToggle"),

  mistakes: document.getElementById("mistakes"),
  mistakesStat: document.getElementById("mistakesStat"),

  goal: document.getElementById("goal"),
  deselect: document.getElementById("deselect"),
  helpBtn: document.getElementById("helpBtn"),
  clusterTip: document.getElementById("clusterTip"),
   stickyBtn: document.getElementById("stickyBtn"),
   stickyToggle: document.getElementById("stickyToggle"),
hideEmojiToggle: document.getElementById("hideEmojiToggle"),
holdingToggle: document.getElementById("holdingToggle"),
holdingZone: document.getElementById("holdingZone"),
holdingList: document.getElementById("holdingList"),
holdingCount: document.getElementById("holdingCount"),
  selectedLabel: document.getElementById("selectedLabel"),
  msg: document.getElementById("hudMsg"),
     modeStack: document.getElementById("modeStack"),
  elimPill: document.getElementById("elimPill"),
  stickyPill: document.getElementById("stickyPill"),
dimToggle: document.getElementById("dimToggle"),
dimPill: document.getElementById("dimPill"),
dragDropToggle: document.getElementById("dragDropToggle"),
dragDropPill: document.getElementById("dragDropPill"),
dimSelPill: document.getElementById("dimSelPill"),
  hintsUsed: document.getElementById("hintsUsed"),
  hintBtn: document.getElementById("hintBtn"),
  hintMenu: document.getElementById("hintMenu"),
  hintCatList: document.getElementById("hintCatList"),

  newGameBtn: document.getElementById("newGameBtn"),
  newGameMenu: document.getElementById("newGameMenu"),
   playModesBtn: document.getElementById("playModesBtn"),
playModesMenu: document.getElementById("playModesMenu"),
   endOverlay: document.getElementById("endOverlay"),
endOverlayText: document.getElementById("endOverlayText"),
endOverlayClose: document.getElementById("endOverlayClose"),


};
els.hintPreview = document.getElementById("hintPreview");
els.hintList = document.getElementById("hintList");

els.goal.textContent = String(_winScore_());
  els.board.style.setProperty("--cols", String(BOARD_SIZE));  
  els.board.classList.add("board");
els.selectedLabel?.addEventListener("click", (e) => {
  const x = e.target.closest?.(".selX");
  if (!x) return;
  e.preventDefault();
  e.stopPropagation();
  deselect();        
});
els.elimToggle?.addEventListener("change", (e) => {
  state.eliminationMode = !!els.elimToggle.checked;

  _closeHintMenu_();   // your requirement: close menu after selection
  renderAll();         // applies/removes dimming on board
  setHUD();
  save();
});
els.stickyToggle?.addEventListener("change", () => {
  state.stickyMode = !!els.stickyToggle.checked;
  _closeHintMenu_();
  setHUD();
  save();
});


els.elimPill?.addEventListener("click", (e) => {
  e.preventDefault(); e.stopPropagation();
  state.eliminationMode = false;
  if (els.elimToggle) els.elimToggle.checked = false;
  setHUD(); save(); renderAll();
});


els.stickyPill?.addEventListener("click", (e) => {
  e.preventDefault(); e.stopPropagation();
  state.stickyMode = false;
  if (els.stickyToggle) els.stickyToggle.checked = false;
  setHUD();
  save();
});
  
  els.dimPill?.addEventListener("click", (e) => {
  e.preventDefault(); e.stopPropagation();
  state.dimMode = false;
  if (els.dimToggle) els.dimToggle.checked = false;
  document.body.classList.remove("dim-on");
  setHUD();
  save();
});

els.dragDropToggle?.addEventListener("change", () => {
  state.dragDropMode = !!els.dragDropToggle.checked;
  _closeHintMenu_();
  renderAll();
  setHUD();
  save();
});

els.dragDropPill?.addEventListener("click", (e) => {
  e.preventDefault(); e.stopPropagation();
  state.dragDropMode = false;
  if (els.dragDropToggle) els.dragDropToggle.checked = false;
  renderAll();
  setHUD();
  save();
});

els.dimSelPill?.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();

  // clear ALL dimmed tiles
  for (const t of (state.tiles || [])){
    if (!t || t.done || t.removed) continue;
    t.dim = false;
  }

  // clear bookkeeping
  state._dimLastIds = [];
  state._dimLastAction = null;

  renderAll();
  setHUD();
  save();
}, true); // capture phase so it always runs


  
  els.hideEmojiToggle?.addEventListener("change", () => {
  state.hideEmojis = !!els.hideEmojiToggle.checked;

  _closeHintMenu_(); // close the menu like the others
  renderAll();
  setHUD();
  save();

  // transient only (no persistent HUD label)
  showMsg(state.hideEmojis ? "Hide emojis: ON" : "Hide emojis: OFF");
});
//holding handler
els.holdingToggle?.addEventListener("change", () => {
  state.holdingMode = !!els.holdingToggle.checked;

  _closeHintMenu_();
  setHUD();
  save();

  // transient only (no persistent HUD label)
  showMsg(state.holdingMode ? "Holding zone: ON" : "Holding zone: OFF");

  // If turning OFF, return everything to the board so nothing “disappears”
  if (!state.holdingMode){
    _unholdAll_({ preferOrigin:true });
    state.holdingArm = false;
  }
  document.body.classList.toggle("holding-on", state.holdingMode);

  renderAll();
});

// ---------- Hint target highlighting ----------
function _clearHintTargets_(){
  document.querySelectorAll(".tile.hint-target,.tile.hint-dim").forEach(el => {
    el.classList.remove("hint-target","hint-dim");
  });
}


function _setHintOutline_(ids){
  state.hintOutlineIds = (ids || []).map(String);
  const set = new Set(state.hintOutlineIds);

  // DEBUG (delete later if you want)
  console.log("[HINT] setHintOutline", { ids: state.hintOutlineIds });

  const root = document.getElementById("board") || document;
  root.querySelectorAll(".tile").forEach(el => {
    const id = String(el.dataset.id || "");
    el.classList.toggle("hint-outline", set.has(id));
  });
}


function _clearHintOutline_(){
  state.hintOutlineIds = null;
  document.querySelectorAll(".tile.hint-outline").forEach(el => el.classList.remove("hint-outline"));
}

  function _setHintTargets_(targetIds){
  const set = new Set((targetIds || []).map(String));
  const sel = String(state?.selectedId || "");

  document.querySelectorAll(".tile").forEach(el => {
    const id = String(el.dataset.id || "");

    const isTarget = set.has(id);
    const isSel = (id === sel);

    el.classList.toggle("hint-target", isTarget);
    el.classList.toggle("hint-dim", !!id && !isTarget && !isSel); // <- key change
  });
}


function _startHelpCat_(baseIdOverride){
  const baseId = String(baseIdOverride || state.selectedId || "");

  if (!baseId){
    // arm: next tile click becomes the base tile
    state.hintMode = { type: "helpCatArm" };
    showMsg("Tap a tile to choose the base for “Help with a category”.", { sticky:true });
    return;
  }

  const base = getTileById(baseId);
  if (!base || base.removed || base.done) return;

  // Need 1 true match + 4 decoys (all distinct tiles)
  const live = state.tiles.filter(t => !t.removed && !t.done);

  const matches = live.filter(t => String(t.id) !== baseId && t.cat === base.cat);
  const decoys  = live.filter(t => String(t.id) !== baseId && t.cat !== base.cat);

  if (matches.length < 1){
    showMsg("No matches left for that tile.", { sticky:true });
    setTimeout(() => showMsg("", { sticky:false }), 2200);
    return;
  }

  // pick 1 match
  const pick1 = matches[Math.floor(Math.random() * matches.length)];

  // pick up to 4 decoys; if fewer than 4 exist, we’ll run with fewer highlights
  const wantDecoys = 4;
  const pickedDecoys = [];
  const pool = decoys.slice();
  while (pool.length && pickedDecoys.length < wantDecoys){
    const idx = Math.floor(Math.random() * pool.length);
    pickedDecoys.push(pool.splice(idx, 1)[0]);
  }

  const targets = [pick1, ...pickedDecoys].map(t => String(t.id));

  if (targets.length < 2){
    showMsg("Not enough tiles left to offer decoys.", { sticky:true });
    setTimeout(() => showMsg("", { sticky:false }), 2200);
    return;
  }
const hintIds = [baseId, ...targets];

  state.hintMode = {
    type: "helpCat",
    baseId,
    targets
  };

  state.selectedId = baseId; // ensure it’s selected
  _setHintTargets_(targets);
  showMsg("Pick one of the highlighted tiles to try a match.", { sticky:true });
}

els.dimToggle?.addEventListener("change", () => {
  state.dimMode = !!els.dimToggle.checked;
  document.body.classList.toggle("dim-on", state.dimMode);

  // turning dim mode OFF clears all dim + last selection
  if (!state.dimMode){
    for (const t of (state.tiles || [])){
      if (!t || t.done || t.removed) continue;
      t.dim = false;
    }
    state._dimLastIds = [];
    state._dimLastAction = null;
    renderAll();
  }

  setHUD();
  save();
});


function _startHelpMatches_(baseIdOverride){
  const baseId = String(baseIdOverride || state.selectedId || "");

  if (!baseId){
    state.hintMode = { type:"helpMatchesArm" };
    showMsg("Tap a tile to choose what you want to match.", { sticky:true });
    return;
  }

  const base = getTileById(baseId);
  if (!base || base.removed || base.done) return;

  const live = state.tiles.filter(t => !t.removed && !t.done);

  // true candidates: same-category (excluding base)
  const matches = live.filter(t => String(t.id) !== baseId && t.cat === base.cat);
  if (matches.length < 1){
    showMsg("No matches left for that tile.", { sticky:true });
    setTimeout(() => showMsg("", { sticky:false }), 2200);
    return;
  }

  // pick exactly 1 true match
  const pickTrue = matches[Math.floor(Math.random() * matches.length)];

  // decoys: any other-category tiles
  const decoyPool = live.filter(t => t.cat !== base.cat && String(t.id) !== baseId);
  if (decoyPool.length < 1){
    showMsg("Not enough tiles to offer decoys.", { sticky:true });
    setTimeout(() => showMsg("", { sticky:false }), 2200);
    return;
  }

  const wantDecoys = 4;
  const pickedDecoys = [];
  const pool = decoyPool.slice();
  while (pool.length && pickedDecoys.length < wantDecoys){
    const idx = Math.floor(Math.random() * pool.length);
    pickedDecoys.push(pool.splice(idx, 1)[0]);
  }

  const targets = [pickTrue, ...pickedDecoys].map(t => String(t.id));

  state.hintMode = { type:"helpMatches", baseId, targets };

  // keep base selected so matching feels natural
  state.selectedId = baseId;

  // use your persistent yellow outline for the 5 candidates
  _setHintOutline_(targets);

  showMsg("Pick one of the highlighted tiles to try a match.", { sticky:true });
}





  
  //GENERAL HELPERS
  
function escapeHtml(str){
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}



function smartWrap(text, target=25){
  const s = String(text);

  // Find best breakpoint <= target: prefer comma/dash, else space.
  const prefix = s.slice(0, target + 1);

  const punctIdx = Math.max(
    prefix.lastIndexOf(","),
    prefix.lastIndexOf("—"),
    prefix.lastIndexOf("–"),
    prefix.lastIndexOf("-")
  );

  const spaceIdx = prefix.lastIndexOf(" ");

  const cut =
    punctIdx >= 0 ? punctIdx + 1 :
    spaceIdx >= 0 ? spaceIdx :
    -1;

  const escaped = escapeHtml(s);

  // Always add wrap opportunities at punctuation too
  let withPunct = escaped
    .replace(/,\s*/g, ",<wbr> ")
    .replace(/\s*[-–—]\s*/g, "<wbr>—<wbr>");

  // If long, add one extra soft break near ~target without breaking words
  if (s.length > target && cut > 0){
    const left = escapeHtml(s.slice(0, cut));
    const right = escapeHtml(s.slice(cut));
    withPunct = (left + "<wbr>" + right)
      .replace(/,\s*/g, ",<wbr> ")
      .replace(/\s*[-–—]\s*/g, "<wbr>—<wbr>");
  }

  return withPunct;
}
function _syncSelectionClass_(){
  const board = document.querySelector(".board");
  if (!board) return;
  board.classList.toggle("has-selection", !!state.selectedId);
}

function hashToLightColor(str){
  let hash = 0;
  for (let i = 0; i < str.length; i++) hash = str.charCodeAt(i) + ((hash << 5) - hash);
  const h = Math.abs(hash) % 360, s = 65, l = 75; // was s=70 l=86
  return `hsl(${h} ${s}% ${l}%)`;
}

 function shuffle(arr){
    for (let i = arr.length - 1; i > 0; i--){
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
function _shuffleInPlace_(arr){
  for (let i = arr.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}
  
  
  function groupKey(clusterA, clusterB){
  const A = [...clusterA].sort().join("|");
  const B = [...clusterB].sort().join("|");
  return [A, B].sort().join("||");
}
function pairKey(aId, bId){
  const a = String(aId);
  const b = String(bId);
  return (a < b) ? `${a}|${b}` : `${b}|${a}`;
}
function countColor(n){
  // n is cluster length (3..30)
  if (n <= 6)  return "#d11";     // red
  if (n <= 11)  return "#f57c00";  // orange
  if (n <= 17) return "#d4a400";  // gold
  if (n <= 22) return "#8a9b2f";  // olive (new)
  if (n <= 27) return "#6aa84f";  // yellow-green
  return "#1b8f3a";               // green (22+)
}


  function tileLabel(cluster){
  if (!Array.isArray(cluster) || cluster.length === 0) return "";

  // single item
  if (cluster.length === 1){
    return escapeHtml(cluster[0]);
  }

  const a = cluster[0];
  const b = cluster[1];

const nameHtml = smartWrap([cluster[0], cluster[1]].join(", "));

  // exactly 2 → bold only, NO count
  if (cluster.length === 2){
return `
  <div class="label">
    <span class="label-text"><b>${nameHtml}</b></span>
  </div>
`;
  }

  // 3+ → bold first two + count
return `
  <div class="label">
    <span class="label-text">
      <b>${nameHtml}</b>
      <span class="label-count" style="color:${countColor(cluster.length)}"> (${cluster.length})</span>
    </span>
  </div>
`;
}
  function _tileDisplayText_(t){
  const cl = t.cluster || [];
  if (t.done) return t.cat; // completed tiles show category name
  if (cl.length <= 1) return cl[0] || "";
  const a = cl[0] || "";
  const b = cl[1] || "";
  const n = cl.length;
  return (n >= 3) ? `${a}, ${b} (${n})` : `${a}, ${b}`;
}
  
  
  const EMOJI_LIBRARY = [
   
// 🌲 Trees, Plants & Nature
{ e:"🌲", k:"tree evergreen forest" },
{ e:"🌴", k:"palm tree tropical" },
{ e:"🌵", k:"tree cactus desert" },
{ e:"🌾", k:"plant grain field agriculture" },
{ e:"🌿", k:"plant herb greenery" },
{ e:"☘️", k:"plant shamrock clover" },
{ e:"🍁", k:"maple leaf autumn" },
{ e:"🌷", k:"tulip flower" },
{ e:"🌸", k:"cherry blossom flower" },
{ e:"🌻", k:"sunflower" },
{ e:"🌼", k:"daisy flower" },
{ e:"🪻", k:"lavender flower" },
{ e:"🪴", k:"potted plant houseplant" },
{ e:"🌱", k:"plant seedling sprout" },
{ e:"🍄", k:"mushroom fungi" },
{ e:"🪨", k:"rock stone" },
{ e:"🌊", k:"ocean wave water river" },
{ e:"🏔️", k:"mountain peak" },

// 🐦 Birds
{ e:"🐤", k:"chick bird" },
{ e:"🦅", k:"bird eagle raptor" },
{ e:"🦆", k:"bird duck waterfowl" },
{ e:"🐓", k:"bird chicken rooster" },
{ e:"🦩", k:"flamingo bird" },

// 🐾 Animals (General / Pets)
{ e:"🐶", k:"animal dog pet" },
{ e:"🐈‍⬛", k:"animal black cat pet" },
{ e:"🐭", k:"animal mouse rodent" },
{ e:"🦊", k:"fox animal" },
{ e:"🐻", k:"bear animal" },
{ e:"🐼", k:"panda animal" },
{ e:"🦁", k:"lion animal" },
{ e:"🐷", k:"pig farm animal" },
{ e:"🐸", k:"animal frog amphibian" },
{ e:"🐵", k:"animal monkey primate" },
{ e:"🦄", k:"animal unicorn fantasy" },
 { e:"🪲", k:"bug insect beetle" },
{ e:"🕷️", k:"spider bug insect" },
 { e:"🐛", k:"bug insect beetle caterpillar" },
 { e:"🐝", k:"bug insect bee bumblebee" },
 { e:"🤖", k:"robot technology" },

// 🌊 Ocean & Water Animals
{ e:"🐬", k:"dolphin ocean" },
{ e:"🐠", k:"tropical fish" },
{ e:"🐡", k:"puffer fish" },
{ e:"🦑", k:"squid cephalopod" },
{ e:"🦞", k:"lobster shellfish" },
{ e:"🦀", k:"crab shellfish" },
{ e:"🐚", k:"ocean seashell beach" },

// 🧀 Food – Dairy & Cheese
{ e:"🧀", k:"food cheese dairy" },
{ e:"🥛", k:"drink beverage milk dairy" },
{ e:"🥖", k:"food bread baguette" },
{ e:"🥯", k:"food bagel bread" },
{ e:"🥐", k:"food croissant pastry" },
 { e:"🍳", k:"food fried egg cooking" },
{ e:"🔪", k:"kitchen knife cooking cut" },
 { e:"🥄", k:"kitchen spoon cooking scoop" },
 { e:"🍽️", k:"food knife fork plate eat utensil" },
    
// 🍝 Food – Meals & Ingredients
{ e:"🍝", k:"food pasta dish spaghetti" },
{ e:"🍣", k:"food sushi seafood" },
{ e:"🍕", k:"food pizza" },
{ e:"🌮", k:"food taco" },
{ e:"🌯", k:"food burrito wrap" },
{ e:"🥣", k:"food cereal bowl breakfast" },
{ e:"🍿", k:"food popcorn" },
{ e:"🥪", k:"food sandwich" },
{ e:"🥗", k:"food salad" },
{ e:"🍅", k:"tomato vegetable" },
{ e:"🧅", k:"onion vegetable" },
{ e:"🌽", k:"corn vegetable" },
{ e:"🥕", k:"carrot vegetable" },
{ e:"🧂", k:"salt seasoning" },
{ e:"🌶️", k:"chili pepper spice" },
{ e:"🍎", k:"apple fruit" },
{ e:"🍍", k:"pineapple fruit" },
{ e:"🍇", k:"grapes fruit" },
{ e:"🍓", k:"strawberry berry fruit" },
{ e:"🫐", k:"blueberry berry fruit" },
{ e:"🫘", k:"beans legume food" },

// 🍰 Desserts & Sweets
{ e:"🍰", k:"food cake dessert" },
{ e:"🍪", k:"food cookie dessert" },
{ e:"🍩", k:"food donut dessert" },
{ e:"🍫", k:"chocolate candy" },
{ e:"🍭", k:"lollipop candy" },
{ e:"🥧", k:"food pie dessert" },
{ e:"🍦", k:"ice cream" },

// ☕ Drinks (Coffee / Cocktails)
{ e:"☕", k:"coffee hot drink" },
{ e:"🍵", k:"tea hot drink" },
{ e:"🍸", k:"drink cocktail martini" },
{ e:"🍹", k:"drink tropical cocktail" },
{ e:"🍷", k:"drink wine glass" },
{ e:"🍾", k:"drink champagne bottle wine" },
{ e:"🍺", k:"drink beer" },
{ e:"🥃", k:"drink whiskey glass" },
{ e:"🥤", k:"drink pop soft drink soda" },

// 🏀 Sports & Games
{ e:"⚾", k:"baseball sport" },
{ e:"🏈", k:"football sport" },
{ e:"⚽", k:"soccerball sport" },
{ e:"🏀", k:"basketball sport" },
{ e:"🏓", k:"ping pong table tennis sport" },
{ e:"🎲", k:"dice game" },
{ e:"♟️", k:"chess game" },
{ e:"🧩", k:"puzzle" },
{ e:"🎮", k:"video game controller" },
{ e:"🏋️‍♀️", k:"weightlifter sport muscle strong" },

// 🎬 Media, Arts & Culture
{ e:"🎬", k:"film movie" },
{ e:"🎭", k:"theater play drama" },
{ e:"🎥", k:"camera film movie" },
{ e:"📷", k:"camera photography" },
{ e:"📺", k:"television tv" },
{ e:"💻", k:"computer laptop tech" }, 
{ e:"🎵", k:"music note" },
{ e:"🎸", k:"guitar instrument music" }, 
{ e:"🎷", k:"saxophone music instrument" }, 
{ e:"🎤", k:"microphone music instrument" }, 
{ e:"🎨", k:"art painting" },
{ e:"📚", k:"books reading" },
{ e:"📱", k:"smart phone iphone" },
{ e:"☎️", k:"telephone" },
{ e:"⚖️", k:"scale justice tool law" },
       
// 🛠️ Tools, Objects & Misc
{ e:"✏️", k:"pencil edit" },
{ e:"📝", k:"note writing memo paper" },
{ e:"📜", k:"scroll note writing memo paper" },
{ e:"📁", k:"file folder note writing memo paper" },
{ e:"🗓️", k:"calendar paper date memo" },
 { e:"✉️", k:"letter email card memo mail" },
{ e:"📬", k:"letter email card memo mailbox" },
 { e:"🛒", k:"shopping cart store" },
{ e:"🔨", k:"hammer tool" },
 { e: EMOJI_OVEN, k: "oven appliance kitchen bake cook" },
{ e:"🪡", k:"needle sewing craft hobby thread" },
{ e:"🧶", k:"yarn knitting craft hobby" },
{ e:"🔗", k:"link metal chain infinity clasp" },
{ e:"🃏", k:"card playing joker game" },
{ e:"⏱️", k:"timer stopwatch clock" },
 { e:"🧮", k:"math abacus count number" },
{ e:"#️", k:"math number pound count" },    
{ e:"📦", k:"package box" },
{ e:"🪄", k:"magic wand" },
    { e:"🚀", k:"rocket space" },
    { e:"🧪", k:"science test tube" },
    { e:"🔭", k:"science space telescope" },
      { e:"🕔", k:"clock time math" },
{ e:"🪏", k:"shovel" },
{ e:"🪑", k:"chair" },
    
{ e:"🛋️", k:"couch furniture chair living room" },
 { e:"🛏️", k:"bed bedroom sleep" },
{ e:"⚙️", k:"gear" },
{ e:"🧰", k:"toolbox" },
{ e:"👕", k:"shirt clothes clothing" },
{ e:"🎓", k:"graduation cap" },
{ e:"👗", k:"dress clothes clothing" },
    { e:"🧢", k:"hat baseball cap" },
 { e:"🎀", k:"ribbon bow knot" },
    { e:"🧼", k:"soap clean" },
    { e:"🥾", k:"shoe boots" },
{ e:"💄", k:"lipstick makeup" },
    { e:"💍", k:"diamond gemstone jewelery ring" },
{ e:"💎", k:"diamond gemstone jewelery" },
{ e:"🗳️", k:"ballot box" },
   
    
    //People etc
 { e:"🏃‍", k:"running runner" },
 { e:"💃", k:"dancing dancer person salsa" },

 { e:"👷‍♀️", k:"construction worker" },
 { e:"🧟", k:"monster zombie" },
 { e:"💅", k:"nails care" },
 { e:"👩‍", k:"person woman" },
{ e:" 👴", k:"person old man" },
      
 { e:"💁‍♀️", k:"person woman information help desk" },
 { e:"✋", k:"person hand body" },
 { e:"👀", k:"person eyes" },
 { e:"🫀", k:"person heart anatomical" },
 { e:"👃", k:"person nose smell" },

 //Transport
{ e:"🚗", k:"car transportation vehicle" },
{ e:"✈️", k:"airplane plane transportation vehicle" },
    { e:"🚲", k:"bike bicycle transportation vehicle" },
{ e:"🚨", k:"siren alert alarm" },
{ e:"🚌", k:"bus train transportation vehicle" },
{ e:"⛴️", k:"boat ferry water transportation vehicle" },

    

// 🌆 Places & Cities
 { e:"🌍", k:"world globe planet africa" },
 { e:"🌏", k:"world globe planet asia australia" },
     { e:"🌎", k:"world globe planet north south america" },
{ e:"🏙️", k:"city skyline" },
{ e:"🇺🇸", k:"usa america flag" },
      { e:"🇪🇺", k:"european union flag" },
 { e:"🗽", k:"landmark city nyc statue of liberty new york" },
     { e:" 🏞️", k:"usa national park" },
    { e:" 🌌", k:"space milky way" },
    { e:"🏝️", k:"island palm tree" },
    { e:"🏜️", k:"desert hot" },
{ e:"🏰", k:"castle historic" },
{ e:"🏛️", k:"civic court political building museum" },
{ e:"🕌", k:"mosque religious building" },
{ e:"⛩️", k:"shrine temple" },
{ e:"🏠", k:"house neighborhood" },
{ e:"🏨", k:"hotel building" },
{ e:"🏢", k:"office building" },
    { e:"🏕️", k:"tent camping outside nature" },
    
// ⭐ Symbols & Visual Markers
{ e:"⭐", k:"star favorite space" },
{ e:"💫", k:"sparkle motion star space" },
{ e:"🔥", k:"fire hot" },
{ e:"💥", k:"impact explosion bang boom" },
{ e:"⚡", k:"energy lightning weather" },
 { e:"🌧️", k:"rain cloud water weather" },
 { e:"☀️", k:"sun weather" },
 { e:"❄️", k:"snow weather" },
{ e:"✅", k:"marker check success" },
{ e:"❌", k:"marker error no" },
{ e:"❓", k:"marker question unknown" },
{ e:"❗", k:"marker important alert bang" },
{ e:"➕", k:"marker plus"},
{ e:"❤️", k:"heart red" },
{ e:"🧡", k:"heart orange" },
{ e:"💛", k:"heart yellow" },
{ e:"💚", k:"heart green" },
{ e:"💙", k:"heart blue" },
{ e:"💜", k:"heart purple" },
{ e:"🅰️", k:"letter text alphabet" },
 { e:"🌀", k:"spiral swirl pattern" }  
]

let _emojiPop = null;
let _emojiSearch = null;
let _emojiGrid = null;
let _emojiActiveCat = null;
document.addEventListener("mousedown", (e) => {
  if (!els.playModesMenu || els.playModesMenu.hidden) return;

  if (
    e.target.closest("#playModesBtn") ||
    e.target.closest("#playModesMenu")
  ) return;

  els.playModesMenu.hidden = true;
  els.playModesBtn.textContent = "Play modes ▾";
});

function _ensureEmojiPicker_(){
  if (_emojiPop) return;

  _emojiPop = document.createElement("div");
  _emojiPop.className = "emoji-pop";
  _emojiPop.innerHTML = `
    <div class="emoji-searchRow">
      <span class="emoji-searchIcon" aria-hidden="true">🔎</span>
      <input type="text" placeholder="Search emoji …" />
    </div>
    <div class="emoji-grid"></div>
    <div class="emoji-actions">
      <button type="button" data-act="clear">Clear</button>
      <button type="button" data-act="close">Close</button>
    </div>
  `;
  document.body.appendChild(_emojiPop);

  _emojiSearch = _emojiPop.querySelector("input");
  _emojiGrid = _emojiPop.querySelector(".emoji-grid");

  _emojiSearch.addEventListener("input", () => _renderEmojiGrid_(_emojiSearch.value));

  // close when clicking outside (single handler; flex check is correct)
  document.addEventListener("mousedown", (e) => {
    if (!_emojiPop) return;
    if (_emojiPop.style.display !== "flex") return;
    if (e.target.closest(".emoji-pop")) return;
    _closeEmojiPicker_();
  });


  _emojiSearch.addEventListener("keydown", (e) => {
    if (e.key === "Escape"){
      _closeEmojiPicker_();
      return;
    }

    if (e.key === "Enter"){
  e.preventDefault();

  const first = _emojiGrid?.querySelector(".emoji-cell");
  if (first?.dataset?.emoji){
    _setCategoryEmoji_(_emojiActiveCat, first.dataset.emoji); // EXACT library string
  }
  return;
    }
  });

  _emojiPop.addEventListener("click", (e) => {
    e.stopPropagation();

    const cell = e.target.closest("[data-emoji]");
    if (cell){
      _setCategoryEmoji_(_emojiActiveCat, cell.dataset.emoji); // exactly from library
      return;
    }

    const btn = e.target.closest("button[data-act]");
    if (!btn) return;

    const act = btn.getAttribute("data-act");
    if (act === "close") _closeEmojiPicker_();
    if (act === "clear") _setCategoryEmoji_(_emojiActiveCat, "");
  });

 

  _renderEmojiGrid_("");
}



function _renderEmojiGrid_(query = ""){
  if (!_emojiGrid) return;

  const q = String(query || "").trim().toLowerCase();
  const list = (Array.isArray(EMOJI_LIBRARY) ? EMOJI_LIBRARY : []);

  const filtered = !q
    ? list
    : list.filter(opt => {
        const e = String(opt?.e || "");
        const k = String(opt?.k || "").toLowerCase();
        return k.includes(q) || e.toLowerCase().includes(q);
      });

  _emojiGrid.innerHTML = "";

  for (const opt of filtered){
    const emoji = String(opt?.e || "");
    if (!emoji) continue;

    const cell = document.createElement("div");
    cell.className = "emoji-cell";

    // Keep existing behavior: store exactly the library string
    cell.dataset.emoji = emoji;

    // Render: if it's SVG, insert as HTML; otherwise as text
    if (emoji.trim().startsWith("<svg")){
      cell.innerHTML = emoji;
    } else {
      cell.textContent = emoji;
    }

    _emojiGrid.appendChild(cell);
  }
}

function _normEmoji_(s){
  return String(s || "")
    .normalize("NFC")
    .replace(/\uFE0E/g, "")   // strip TEXT variation selector only
    .trim();
}

  function _renderEmojiInto_(el, emoji){
  if (!el) return;
  const s = String(emoji || "");
  if (s.trim().startsWith("<svg")){
    el.innerHTML = s;
  } else {
    el.textContent = s;
  }
}
  
function _openEmojiPicker_(anchorEl, cat){
  _ensureEmojiPicker_();
  _emojiActiveCat = cat;

  const r = anchorEl.getBoundingClientRect();
  const w = 280;
  const h = 360;           // give it a real height budget
  const M = 14;            // margin from screen edges

  // Prefer to the right of anchor; clamp to viewport
  const x = Math.min(window.innerWidth - w - M, r.right + 8);

  // Prefer above anchor; if not enough room, go below; clamp
  const aboveY = r.top - h - 8;
  const belowY = r.bottom + 8;
  let y = aboveY >= M ? aboveY : belowY;
  y = Math.min(window.innerHeight - h - M, Math.max(M, y));

  _emojiPop.style.left = `${Math.max(M, x)}px`;
  _emojiPop.style.top  = `${y}px`;
_emojiPop.style.display = "flex";

  _emojiSearch.value = "";
  _renderEmojiGrid_("");
  _emojiSearch.focus();
}

function _closeEmojiPicker_(){
  if (_emojiPop) _emojiPop.style.display = "none";
  _emojiActiveCat = null;
}

function _setCategoryEmoji_(key, emoji){
  if (!key) return;
  if (!state.categoryEmoji) state.categoryEmoji = {};
console.log("saved emoji starts:", String(emoji).slice(0, 20));
  const val = _normEmoji_(emoji);
  if (val) state.categoryEmoji[key] = val;
  else delete state.categoryEmoji[key];

  save();
  renderAll();
  setHUD();
  _closeEmojiPicker_();
}

function _setEmojiByKey_(key, emoji){
  if (!state.categoryEmoji) state.categoryEmoji = {};
  const val = _normEmoji_(emoji);
  if (val) state.categoryEmoji[key] = val;
  else delete state.categoryEmoji[key];
}
function _emojiForTile_(t){
  // Robust: supports both legacy per-tile emoji fields and your key-based storage
  const direct = _normEmoji_(t?.emoji);
  if (direct) return direct;

  const key = _emojiKeyForTile_(t);
  const fromMap = _normEmoji_(state?.categoryEmoji?.[key]);
  if (fromMap) return fromMap;

  // fallback (some older saves used tile:<id> only)
  const tileKey = `tile:${t?.id}`;
  return _normEmoji_(state?.categoryEmoji?.[tileKey]);
}



    //LAYOUT AND GRID HELPERS

function _measureTextPx_(text){
  // Cache a canvas context for measurements
  if (!_measureTextPx_.ctx){
    const c = document.createElement("canvas");
    _measureTextPx_.ctx = c.getContext("2d");
  }
  const ctx = _measureTextPx_.ctx;

  // Match the tile font (fallback if computedStyle isn't ready yet)
  const tile = document.querySelector(".tile");
  const cs = tile ? getComputedStyle(tile) : null;
  const font = cs ? `${cs.fontWeight} ${cs.fontSize} ${cs.fontFamily}` : `600 16px system-ui`;
  ctx.font = font;

  return ctx.measureText(text).width;
}

  
function _colsNow_(){
  if (Number.isFinite(state.boardColsOverride) && state.boardColsOverride > 0){
    return state.boardColsOverride;
  }

  const counts = new Map();
  for (const t of _boardTiles_()){
    counts.set(t.row, (counts.get(t.row) || 0) + 1);
  }
  return Math.max(1, ...counts.values());
}

  function _setBoardCols_(cols){
  const n = Math.max(1, Number(cols) || 0);
  state.boardColsOverride = n;

  // optional: keep your CSS var aligned (mostly cosmetic right now)
  document.documentElement.style.setProperty("--cols", String(n));

  const ordered = _sortedActive_();
_repackByUnits_(ordered, n);

  renderAll();
  setHUD();
  save();
}

function _rowCapNow_(){
  const counts = new Map();
  for (const t of _boardTiles_()){
    counts.set(t.row, (counts.get(t.row) || 0) + 1);
  }
  let cap = 0;
  for (const c of counts.values()) cap = Math.max(cap, c);
  return cap || 1;
}

function _repackByCols_(orderedTiles, cols){
  let i = 0;
  for (const t of orderedTiles){
    if (!t || t.removed) continue;
    t.row = Math.floor(i / cols);
    t.col = i % cols;
    i++;
  }
}

  
function _repackByWidth_(orderedTiles){
  // Preserve row assignment; only re-number columns within each row.
  const rows = new Map();

  for (const t of orderedTiles){
    if (t.removed) continue;
    const r = t.row ?? 0;
    if (!rows.has(r)) rows.set(r, []);
    rows.get(r).push(t);
  }

  // Optional: width measurement support (so your t._w still works)
  const tileEl = document.querySelector(".tile");
  const tcs = tileEl ? getComputedStyle(tileEl) : null;
  const paddingX = tcs ? (parseFloat(tcs.paddingLeft) + parseFloat(tcs.paddingRight)) : 24;
  const borderX  = tcs ? (parseFloat(tcs.borderLeftWidth) + parseFloat(tcs.borderRightWidth)) : 2;
  const maxW = tcs ? parseFloat(tcs.maxWidth || "320") : 320;

  for (const [r, tiles] of rows){
    tiles.sort((a,b) => (a.col ?? 0) - (b.col ?? 0));

    tiles.forEach((t, i) => {
      t.col = i;

      // keep your width cap logic (no boardWidth needed)
      const label = _tileDisplayText_(t);
      const textW = _measureTextPx_(label);
      const wRaw = textW + paddingX + borderX + 18;
      t._w = Math.min(wRaw, maxW);
    });
  }
}


  
function _sortedActive_(){
  return _sortedBoard_();
}

function _compactRow_(r){
  const rowTiles = state.tiles
    .filter(t => t.row === r && !t.removed && !t.held)
    .sort((a,b) => a.col - b.col);

  rowTiles.forEach((t, i) => {
    t.col = i;
  });
}

function _retireEmptyRows_(){
  let changed = false;

  while (true){
    const active = state.tiles.filter(t => !t.removed && !t.held);
    if (!active.length) break;

    const maxRow = Math.max(...active.map(t => t.row));
    let retiredAny = false;

    for (let r = 0; r <= maxRow; r++){
      const hasAny = active.some(t => t.row === r);
      if (hasAny) continue;

      // retire row r: shift everything below it up by 1
      state.tiles.forEach(t => {
        if (!t.removed && t.row > r) t.row -= 1;
      });

      retiredAny = true;
      changed = true;
      break; // restart scan from top after shifting
    }

    if (!retiredAny) break;
  }

  if (changed){
    const rows = new Set(state.tiles.filter(t => !t.removed).map(t => t.row));
    rows.forEach(_compactRow_);
  }

  return changed;
}

  
  //STATE SELECTORS AND COUNTERS
function getTileById(id){
  const needle = String(id);
  return state.tiles.find(x => String(x.id) === needle);
}

  
function _activeTiles_(){
  return state.tiles.filter(t => !t.removed);
}

function _boardTiles_(){
  return state.tiles.filter(t => !t.removed && !t.held);
}

function _sortedBoard_(){
  return _boardTiles_().slice().sort((a,b) => (a.row - b.row) || (a.col - b.col));
}

function _holdMax_(){ return 5; }
function _clearHoldingSelection_(){
  state.holdingSelectedId = null;
}

function _holdingCount_(){
  return (Array.isArray(state.holdingIds) ? state.holdingIds.length : 0);
}

function _ensureHolding_(){
  if (!Array.isArray(state.holdingIds)) state.holdingIds = [];
  if (!state.holdingOrigins || typeof state.holdingOrigins !== "object" || Array.isArray(state.holdingOrigins)) state.holdingOrigins = {};
  if (typeof state.holdingMode !== "boolean") state.holdingMode = false;
  if (typeof state.holdingArm !== "boolean") state.holdingArm = false;
}

function _removeFromBoardLayoutForHold_(t){
  const r = t.row;

  const rowTiles = state.tiles
    .filter(x => x.row === r && !x.removed && !x.held)
    .sort((a,b) => a.col - b.col);

  const idx = rowTiles.findIndex(x => x.id === t.id);
  if (idx === -1) return;

  // shift everything after it left by 1
  for (let k = idx + 1; k < rowTiles.length; k++){
    rowTiles[k].col -= 1;
  }
}

function _insertIntoRow_(t, r, c){
  const rowTiles = state.tiles
    .filter(x => x.row === r && !x.removed && !x.held && x.id !== t.id)
    .sort((a,b) => a.col - b.col);

  // clamp col
  let col = Math.max(0, Number(c) || 0);
  if (col > rowTiles.length) col = rowTiles.length;

  // shift right to make room
  for (let i = rowTiles.length - 1; i >= col; i--){
    rowTiles[i].col += 1;
  }

  t.row = r;
  t.col = col;
}

function _holdTileById_(id){
  _ensureHolding_();

  if (_holdingCount_() >= _holdMax_()){
    showMsg(`Holding is full (${_holdMax_()}).`);
    return false;
  }

  const t = getTileById(id);
  if (!t || t.removed || t.done) return false;
  if (t.held) return false;

  state.holdingOrigins[String(id)] = state.holdingOrigins[String(id)] || { row: t.row, col: t.col };

  _removeFromBoardLayoutForHold_(t);
  t.held = true;

  state.holdingIds.push(String(id));

  // clear selection if we just held the selected tile
  if (String(state.selectedId) === String(id)) state.selectedId = null;
  state.holdingArm = false;

  return true;
}

function _unholdTileById_(id, opts = {}){
  _ensureHolding_();
  const preferOrigin = (opts.preferOrigin !== false);

  const t = getTileById(id);
  if (!t || t.removed) return false;

  const sid = String(id);

  // remove from list
  state.holdingIds = (state.holdingIds || []).filter(x => String(x) !== sid);

  t.held = false;

  const origin = state.holdingOrigins?.[sid];
  let targetRow = 0;
  let targetCol = 0;

  if (preferOrigin && origin && Number.isFinite(origin.row) && Number.isFinite(origin.col)){
    targetRow = origin.row;
    targetCol = origin.col;
  } else {
    const board = _sortedBoard_();
    if (board.length){
      const last = board[board.length - 1];
      targetRow = last.row;
      targetCol = (last.col ?? 0) + 1;
    }
  }

  _insertIntoRow_(t, targetRow, targetCol);

  // cleanup empty rows on board
  _retireEmptyRows_?.();

  // if selected was this tile, clear it
  if (String(state.selectedId) === sid) state.selectedId = null;

  return true;
}

function _unholdAll_(opts = {}){
  _ensureHolding_();
  const ids = (state.holdingIds || []).slice();
  // return in reverse so earlier things keep their “near origin” better
  for (let i = ids.length - 1; i >= 0; i--){
    _unholdTileById_(ids[i], opts);
  }
  state.holdingIds = [];
}

  
  function _allTilesMatched_(){
  return state.tiles.every(t => t.removed || t.done);
}

 function _unmatchedCountByCategory_(){
  const counts = {};
  for (const t of _boardTiles_()){
    if (t.removed || t.done) continue;
    counts[t.cat] = (counts[t.cat] || 0) + 1;
  }
  return counts;
}

function _hintEligibleCatsUnder_(n){
  const counts = _unmatchedCountByCategory_();
  return Object.keys(getCategories()).filter(cat => (counts[cat] || 0) < n);
}
 
function _categoryCounts_(){
  // counts only clusters with length > 1
  const active = _activeTiles_();
  const seen = new Set();
  let completed = 0;
  let inProgress = 0;

  for (const t of active){
    const cl = t.cluster || [];
    if (cl.length <= 1) continue;

    const sig = cl.slice().sort().join("\u0001");
    if (seen.has(sig)) continue;
    seen.add(sig);

    if (t.done) completed++;
    else inProgress++;
  }

  return { completed, inProgress };
}

function _inProgressClusterSigsByCat_(){
  const active = _activeTiles_();
  const seenSig = new Set();
  const byCat = new Map();

  for (const t of active){
    const cl = t.cluster || [];
    if (t.done) continue;
    if (cl.length <= 1) continue;

    const sig = cl.slice().sort().join("\u0001");
    if (seenSig.has(sig)) continue;
    seenSig.add(sig);

    if (!byCat.has(t.cat)) byCat.set(t.cat, new Set());
    byCat.get(t.cat).add(sig);
  }
  return byCat;
}
function _makeDoneColors_(){
  const cats = Object.keys(getCategories());
  const out = {};
  for (const cat of cats){
    // muted, non-neon
    const h = Math.floor(Math.random() * 360);
    const s = 35 + Math.floor(Math.random() * 20); // 35–54
    const l = 78 + Math.floor(Math.random() * 10); // 78–87
    out[cat] = `hsl(${h} ${s}% ${l}%)`;
  }
  return out;
}

function _doneBg_(cat){
  return state?.doneColors?.[cat] || hashToLightColor(cat);
}

  
  //PERSISTANCE
  
function save(){
  const payload = {
    score: state.score,
    mistakes: state.mistakes,
    selectedId: state.selectedId,
    triedGroups: state.triedGroups,
    triedPairs: state.triedPairs,
    gameOver: !!state.gameOver,
mode: state.mode || "regular",
    hintsUsed: state.hintsUsed || 0,
    stickyMode: !!state.stickyMode,
    dimMode: !!state.dimMode,
    dragDropMode: !!state.dragDropMode,

    hideEmojis: !!state.hideEmojis,
    holdingMode: !!state.holdingMode,
    holdingIds: Array.isArray(state.holdingIds) ? state.holdingIds.slice() : [],
    holdingOrigins: (state.holdingOrigins && typeof state.holdingOrigins === "object") ? state.holdingOrigins : {},
doneColors: state.doneColors || null,

    categoryEmoji: state.categoryEmoji || {},
    tiles: state.tiles.map(t => ({
      id: t.id,
      groupId: t.groupId,
      text: t.text,
      cat: t.cat,
      cluster: t.cluster,
      removed: t.removed,
      done: t.done,
      row: t.row,
      col: t.col,
      held: !!t.held,
      _w: t._w,
      dim: !!t.dim
    })),

    boardColsOverride: (Number.isFinite(state.boardColsOverride) ? state.boardColsOverride : null),
    eliminationMode: !!state.eliminationMode,
    hintMode: state.hintMode || null
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
}


function load(){
  try{
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;

    const parsed = JSON.parse(raw);
    if (!parsed || !Array.isArray(parsed.tiles)) return null;

    parsed.gameOver = !!parsed.gameOver;
    parsed.mode = parsed.mode || "regular";
    parsed.hintsUsed = parsed.hintsUsed || 0;

    // ✅ normalize emojis
    parsed.categoryEmoji = parsed.categoryEmoji || {};

    // ✅ normalize held tiles
    parsed.tiles.forEach(t => { if (t && typeof t.held !== "boolean") t.held = false; });
parsed.stickyMode = !!parsed.stickyMode;
if (!parsed.doneColors || typeof parsed.doneColors !== "object" || Array.isArray(parsed.doneColors)){
  parsed.doneColors = null;
}

    // ✅ normalize triedGroups
    if (!parsed.triedGroups || typeof parsed.triedGroups !== "object" || Array.isArray(parsed.triedGroups)){
      parsed.triedGroups = {};
    }
    if (!parsed.triedPairs || typeof parsed.triedPairs !== "object" || Array.isArray(parsed.triedPairs)){
      parsed.triedPairs = {};
    }
if (!Number.isFinite(parsed.boardColsOverride)) parsed.boardColsOverride = null;
parsed.eliminationMode = !!parsed.eliminationMode;
    parsed.hideEmojis = !!parsed.hideEmojis;
    parsed.dimMode = !!parsed.dimMode;
    parsed.dragDropMode = !!parsed.dragDropMode;

    parsed.holdingMode = !!parsed.holdingMode;
    if (!Array.isArray(parsed.holdingIds)) parsed.holdingIds = [];
    if (!parsed.holdingOrigins || typeof parsed.holdingOrigins !== "object" || Array.isArray(parsed.holdingOrigins)) parsed.holdingOrigins = {};
    parsed.holdingArm = false;


    return parsed;
  }catch{
    return null;
  }
}


  
  let msgTimer = null;
let msgSticky = false;

// --- sticky HUD message (clears on next click when sticky)
function showMsg(text, { sticky = false } = {}){
  if (!els.msg) return;

  // don't let anything clear/overwrite the fast-sort HUD message
  if (state?.fastSorting){
    if (!text) return;            // ignore clears
    sticky = true;                 // force sticky during fast sort
  }

  // don't let stray clears wipe the narrow-down HUD
  if (state?.hintMode?.type === "narrowDown" && !text){
    return;
  }

  els.msg.textContent = text;

  clearTimeout(msgTimer);
  msgSticky = !!sticky;

  if (!msgSticky){
    msgTimer = setTimeout(() => { els.msg.textContent = ""; }, 3200);
  }
}
document.addEventListener("click", () => {
  if (!msgSticky) return;
  if (state?.eliminationMode) return; // keep elim HUD message up
  if (state?.fastSorting) return;     // fast sort simulates clicks; don't clear
  if (state?.hintMode?.type === "narrowDown") return; // keep narrow-down HUD up
  els.msg.textContent = "";
  msgSticky = false;
}, true);


// --- hint pair highlight (keeps yellow+shake until resolved)
let hintedPair = null;   // { ids:[a,b], selected:Set() }
let hintClearArmed = false;
function showEndOverlay(text){
  if (!els.endOverlay || !els.endOverlayText) return;
  els.endOverlayText.textContent = text;
  els.endOverlay.hidden = false;
}

function hideEndOverlay(){
  if (!els.endOverlay) return;
  els.endOverlay.hidden = true;
}

  
  
function _tileElById_(id){
  const sel = `[data-id="${CSS.escape(String(id))}"]`;
  const elBoard = els.board?.querySelector(sel);
  const elHold  = els.holdingList?.querySelector?.(sel);
  const el = elBoard || elHold;
  if (!el) return null;
  return el.closest(".tile") || el.closest("[data-id]") || el;
}



function _clearHintedPair_(){
  hintedPair = null;
  document.querySelectorAll(".tile.hinted").forEach(el => el.classList.remove("hinted"));
  showMsg("", { sticky:false });
}


function _hintPairUntilResolved_(id1, id2){
  _clearHintedPair_();
  hintedPair = { ids: [id1, id2], selected: new Set() };

  _tileElById_(id1)?.classList.add("hinted");
  _tileElById_(id2)?.classList.add("hinted");

  hintClearArmed = false;
  setTimeout(() => { hintClearArmed = true; }, 0);
}
function _pickNotStartedCategory_(){
  // started = category has any in-progress pile (cluster >=2) or is completed
  const started = new Set();
  for (const t of state.tiles){
    if (t.removed) continue;
    const n = (t.cluster?.length || 1);
    if (t.done) started.add(t.cat);
    else if (n >= 2) started.add(t.cat);
  }

  const allCats = Object.keys(CATEGORIES || {});
  const notStarted = allCats.filter(c => !started.has(c));
  if (!notStarted.length) return null;

  return notStarted[Math.floor(Math.random() * notStarted.length)];
}
function _categoriesWithFewUnmatched_(maxLeft = 10){
  // Count singles remaining per category (unmatched tiles)
  const left = new Map();     // cat -> singles count
  const started = new Set();  // cat -> has a pile in progress

  for (const t of state.tiles){
    if (t.removed) continue;
    if (t.done) continue;

    const n = (t.cluster?.length || 1);

    if (n >= 2) started.add(t.cat);
    if (n === 1){
      left.set(t.cat, (left.get(t.cat) || 0) + 1);
    }
  }

  const out = [];
  for (const [cat, cnt] of left.entries()){
    if (cnt <= maxLeft && started.has(cat)) out.push({ cat, cnt });
  }
  return out.sort((a,b) => a.cnt - b.cnt);
}

  //HUD AND MESSAGING
 function setHUD(){
  els.score.textContent = String(state.score);

  if (els.hintsUsed) els.hintsUsed.textContent = String(state.hintsUsed || 0);

  const isChill = (state.mode === "chill");
  els.mistakesStat.style.display = isChill ? "none" : "";
  if (!isChill) els.mistakes.textContent = String(state.mistakes);

  // Selected chip + X
  if (!state.selectedId){
    els.selectedLabel.innerHTML = "";
  } else {
    const t = getTileById(state.selectedId);
    if (t){
      els.selectedLabel.innerHTML =
        `<span class="selChip">Selected: <b>${escapeHtml(t.cluster[0])}</b>
          <button class="selX" type="button" aria-label="Deselect">×</button>
        </span>`;
    } else {
      els.selectedLabel.innerHTML = "";
    }
  }

  // Mode pills (only show when ON)
  const elimOn = !!state.eliminationMode;
  const stickyOn = !!state.stickyMode;

  if (els.elimPill){
  els.elimPill.hidden = !elimOn;
  if (elimOn) els.elimPill.innerHTML = `Elimination: ON <span class="modeX" aria-hidden="true">×</span>`;
}

if (els.stickyPill){
  els.stickyPill.hidden = !stickyOn;
  if (stickyOn) els.stickyPill.innerHTML = `Sticky: ON <span class="modeX" aria-hidden="true">×</span>`;
}

if (els.elimPill) els.elimPill.title = "Dims tiles you’ve already tried against the selected tile.";
if (els.stickyPill) els.stickyPill.title = "Keeps the first tile selected after wrong guesses.";

  // Drag & drop pill
  const dragDropOn = !!state.dragDropMode;

  if (els.dragDropPill){
    els.dragDropPill.hidden = !dragDropOn;
    if (dragDropOn) els.dragDropPill.innerHTML = `Drag & drop: ON <span class="modeX" aria-hidden="true">×</span>`;
    els.dragDropPill.title = "Drag a tile onto another to attempt a match.";
  }

     // Dim brush pill
  const dimOn = !!state.dimMode;

  if (els.dimPill){
    els.dimPill.hidden = !dimOn;
    if (dimOn) els.dimPill.innerHTML = `Dim brush: ON <span class="modeX" aria-hidden="true">×</span>`;
    els.dimPill.title = "Drag a box on empty space to dim tiles. Click to turn off.";
  }

  // Dim selection pill (shows when there’s a recorded last selection)
  // Dim selection pill — shows total dimmed tiles
if (els.dimSelPill){
  const dimmedCount = (state.tiles || []).reduce(
    (n, t) => n + (t && !t.done && !t.removed && t.dim ? 1 : 0),
    0
  );

  els.dimSelPill.hidden = (dimmedCount === 0);
  if (dimmedCount){
els.dimSelPill.innerHTML = `Dimmed: ${dimmedCount} <span class="modeX" aria-hidden="true">×</span>`;
    els.dimSelPill.title = "Click to clear all dimmed tiles.";
  }
}


  // keep checkbox in sync with state
  if (els.dimToggle) els.dimToggle.checked = dimOn;

   
   if (els.elimToggle) els.elimToggle.checked = !!state.eliminationMode;
if (els.stickyToggle) els.stickyToggle.checked = !!state.stickyMode;
if (els.dragDropToggle) els.dragDropToggle.checked = !!state.dragDropMode;


}

  
  //CORE GAMEPLAY
  function newGame(mode = "regular"){
    stopFireworks();
    

  const cats = getCategories();
  const tiles = [];
  let idCounter = 1;

  for (const [cat, words] of Object.entries(cats)){
    if (!Array.isArray(words) || words.length !== GROUP_SIZE){
      throw new Error("Bad category data shape.");
    }
    for (const w of words){
      const id = String(idCounter++);
      tiles.push({
        id,
        groupId: id,
        text: w,
        cat,
        cluster: [w],
        removed: false,
        done: false,
         });
    }
  }

  shuffle(tiles);
  tiles.forEach((t, i) => {
    t.row = Math.floor(i / BOARD_SIZE);
    t.col = i % BOARD_SIZE;
  });

  state = {
    mode,               
    hintsUsed: 0,         
    score: 0,
    mistakes: 0,
    selectedId: null,
    tiles,
    triedGroups: {},
    triedPairs: {}, 
    gameOver: false,
    categoryEmoji: {},
    boardColsOverride: null,
eliminationMode: false,
hintMode: null,
    stickyMode: false,
    dimMode: false,
    dragDropMode: false,
    hideEmojis: false,
holdingMode: false,
holdingIds: [],
holdingOrigins: {},
holdingArm: false,
doneColors: _makeDoneColors_(),


  };

  renderAll();
  save();
}

 function deselect(){
  if (!state.selectedId) return;

  console.log("[ELIM] deselect()", { prevSelectedId: state.selectedId, eliminationMode: state.eliminationMode });

  state.selectedId = null;

  // optional immediate visual cleanup (renderAll will also cover this)
  els.board.querySelectorAll(".tile.selected").forEach(b => b.classList.remove("selected"));

  setHUD();
  save();

  // One canonical rerender to clear elim-dim and selection everywhere
  renderAll();
}

async function onTileClick(tileId){
  if (els.hintMenu && !els.hintMenu.hidden) _closeHintMenu_();
  document.querySelectorAll(".tile.shake").forEach(el => el.classList.remove("shake"));

  const clickedId = String(tileId);

  // --------------------------------------------------
  // 1) ARMED HINTS CONSUME THE CLICK FIRST
  // --------------------------------------------------

  if (state.hintMode?.type === "helpCatArm"){
    state.hintMode = null;
    state.selectedId = clickedId;

    renderAll();
    setHUD();
    save?.();

    _startHelpCat_(clickedId);
    return;
  }

  if (state.hintMode?.type === "helpMatchesArm"){
    state.hintMode = null;
    state.selectedId = clickedId;

    renderAll();
    setHUD();
    save?.();

    _startHelpMatches_(clickedId);
    return;
  }

  if (state.hintMode?.type === "tileHomeArm"){
    state.hintMode = null;

    const ok = _doTileHome_(clickedId);
    if (ok) _spendHint_?.(1);

    showMsg("", { sticky:false });
    save?.();
    return;
  }

  // --------------------------------------------------
  // 1b) NARROW DOWN — tile selection phase
  // --------------------------------------------------
  if (state.hintMode?.type === "narrowDown" && !state.hintMode.active){
    _narrowDownToggleTile_(clickedId);
    return;
  }

  // --------------------------------------------------
  // 2) HINTED PAIR (GIMME MATCH) — CLICK-AWAY CLEARS
  // --------------------------------------------------

  if (hintedPair && Array.isArray(hintedPair.ids)){
    const inPair = hintedPair.ids.map(String).includes(clickedId);
    if (!inPair){
      _clearHintedPair_();
    }
  }

  // --------------------------------------------------
  // 3) TARGETED HINT FOCUS — CLICK-AWAY CLEARS
  // --------------------------------------------------

  if (typeof _clearHintFocus_ === "function" && hintFocus?.ids?.length){
    const keep = hintFocus.ids.map(String).includes(clickedId);
    if (!keep) _clearHintFocus_();
  }

  _clearHintTargets_();

  // --------------------------------------------------
  // 4) NORMAL TILE LOGIC (UNCHANGED BEHAVIOR)
  // --------------------------------------------------

  const t = getTileById(clickedId);
  if (!t || t.removed || (t.done && state.hintMode?.type !== "tileHome")) return;

  // Holding add is armed
  if (state.holdingMode && state.holdingArm){
    const ok = _holdTileById_(clickedId);
    if (ok){
      showMsg("");
      renderAll();
      save();
    } else {
      showMsg("Select a tile to add to holding");
    }
    return;
  }

  // Clicking the same tile toggles off
  if (String(state.selectedId) === clickedId){
    deselect();
    return;
  }

  // -------- First pick --------
  if (!state.selectedId){
    state.selectedId = clickedId;
    setHUD();
    save();

    document.querySelectorAll("[data-row]").forEach(el => {
      const r = Number(el.getAttribute("data-row"));
      rerenderRow(r);
    });
    renderHolding();
    return;
  }

  // -------- Second pick --------
  const firstId = state.selectedId;
  const a = getTileById(firstId);
  if (!a || a.removed || a.done) return;

  const stickyOn = !!state.stickyMode;
  state.selectedId = stickyOn ? firstId : null;
  setHUD();

  const aCat = a.cat;
  const tCat = t.cat;

  // Same group guard
  if (a.groupId && t.groupId && a.groupId === t.groupId){
    save();
    document.querySelectorAll("[data-row]").forEach(el => {
      const r = Number(el.getAttribute("data-row"));
      rerenderRow(r);
    });
    return;
  }

  // -------- WRONG MATCH --------
  if (aCat !== tCat){
    const gKey = groupKey(a.cluster || [], t.cluster || []);
    state.triedGroups[gKey] = (state.triedGroups[gKey] || 0) + 1;

    const pKey = pairKey(a.id, t.id);
    const prevPair = (state.triedPairs && state.triedPairs[pKey]) || 0;
    state.triedPairs = state.triedPairs || {};
    state.triedPairs[pKey] = prevPair + 1;

    if (state.mode !== "chill"){
      state.mistakes += 1;
      _pulseMistakes_?.();
    }

    const aEl = _tileElById_(String(a.id));
    const bEl = _tileElById_(String(t.id));

    const kick = (el) => {
      if (!el) return;
      el.classList.remove("shake");
      void el.offsetWidth;
      el.classList.add("shake");
      el.addEventListener("animationend", () => el.classList.remove("shake"), { once: true });
    };

    kick(aEl);
    kick(bEl);

    // Make the second-picked tile look selected during the wrong-shake
    if (bEl){
      bEl.classList.add("selected");

    }

    if (!stickyOn){
      state.selectedId = null;
      setHUD();
    }

    _clearHintedPair_?.();

    if (prevPair >= 1) showMsg(`Already guessed (x${prevPair + 1}).`);

   setTimeout(() => {
  if (bEl) bEl.classList.remove("selected");

  document.querySelectorAll("[data-row]").forEach(el => {
    const r = Number(el.getAttribute("data-row"));
    rerenderRow(r);
  });
  renderHolding?.();
  // restore narrow-down HUD after rerender
  if (state.hintMode?.type === "narrowDown") _narrowDownUpdateHud_();
}, 1200);

    save();
    return;
  }

  // -------- CORRECT MATCH / MERGE --------
  const keeper = t;
  const absorbed = a;

  const finalEmoji = _chooseFinalEmojiForMerge_(keeper, absorbed);

  const kCl = Array.isArray(keeper.cluster) && keeper.cluster.length ? keeper.cluster : [keeper.text || keeper.id];
  const aCl = Array.isArray(absorbed.cluster) && absorbed.cluster.length ? absorbed.cluster : [absorbed.text || absorbed.id];
  keeper.cluster = kCl.concat(aCl);

  // Emoji transfer/cleanup
  const keeperTileKey = _emojiTileKey_(keeper.id);
  const keeperPileKey = _emojiPileKey_(keeper.id);
  const absorbedTileKey = _emojiTileKey_(absorbed.id);
  const absorbedPileKey = _emojiPileKey_(absorbed.id);

  _clearEmojiKey_(absorbedTileKey);
  _clearEmojiKey_(absorbedPileKey);

  if (finalEmoji){
    if (!keeper.done && keeper.cluster.length >= 2 && keeper.cluster.length < GROUP_SIZE){
      _setEmojiByKey_(keeperPileKey, finalEmoji);
      _clearEmojiKey_(keeperTileKey);
    }
  }

  state.score += 1;

  if (keeper.cluster.length === GROUP_SIZE){
    keeper.done = true;
    keeper._celebrate = true;
    if (finalEmoji){
      _setEmojiByKey_(_emojiDoneKey_(keeper.cat), finalEmoji);
    }
    _clearEmojiKey_(keeperPileKey);
    _clearEmojiKey_(keeperTileKey);
  }

  removeTile(absorbed);
  _clearHintedPair_?.();

  state.selectedId = null;
  renderAll();
  setHUD();
  _checkEndGame_();
  save();
}




 function finishTile(t, btn){
  t.done = true;
  btn.classList.add("done");
  btn.disabled = true;
  btn.innerHTML = t.cat;

  btn.style.background = hashToLightColor(t.cat);
  btn.style.color = "#000";              // ← force black text
  btn.style.fontWeight = "600";          // optional, improves legibility
  btn.title = "";
}

  
function removeTile(t){
  // If the tile is currently in the holding zone, just remove it from play
  if (t.held){
    t.removed = true;
    t.held = false;
    if (Array.isArray(state.holdingIds)){
      state.holdingIds = state.holdingIds.filter(x => String(x) !== String(t.id));
    }
    return;
  }

  const r = t.row;

 const rowTiles = state.tiles
  .filter(x => x.row === r && !x.removed && !x.held)
  .sort((a,b) => a.col - b.col);

  const idx = rowTiles.findIndex(x => x.id === t.id);
  if (idx === -1) return;

  t.removed = true;

  for (let k = idx + 1; k < rowTiles.length; k++){
    rowTiles[k].col -= 1;
  }

  rerenderRow(r);
}
function _emojiKeyForTile_(t){
  // Completed: one per category
  if (t.done) return `done:${t.cat}`;

  const n = (t.cluster?.length || 1);

  // In-progress piles: per survivor tile id
  if (n >= 2) return `pile:${t.id}`;

  // Singles: per tile id (draft emoji)
  return `tile:${t.id}`;
}

function _emojiTileKey_(id){ return `tile:${id}`; }
function _emojiPileKey_(id){ return `pile:${id}`; }
function _emojiDoneKey_(cat){ return `done:${cat}`; }

function _getEmojiByKey_(key){
  const v = state?.categoryEmoji?.[key];
  return v ? String(v) : "";
}
function _setEmojiByKey_(key, emoji){
  if (!state.categoryEmoji) state.categoryEmoji = {};
  const val = String(emoji || "").trim();
  if (val) state.categoryEmoji[key] = val;
  else delete state.categoryEmoji[key];
}
function _clearEmojiKey_(key){
  if (state?.categoryEmoji) delete state.categoryEmoji[key];
}

// Prefer: keeper pile > keeper tile > absorbed pile > absorbed tile > done(cat)
function _chooseFinalEmojiForMerge_(keeper, absorbed){
  const keeperPile = _getEmojiByKey_(_emojiPileKey_(keeper.id));
  const keeperTile = _getEmojiByKey_(_emojiTileKey_(keeper.id));
  const absorbedPile = _getEmojiByKey_(_emojiPileKey_(absorbed.id));
  const absorbedTile = _getEmojiByKey_(_emojiTileKey_(absorbed.id));
  const doneCat = _getEmojiByKey_(_emojiDoneKey_(keeper.cat));

  return keeperPile || keeperTile || absorbedPile || absorbedTile || doneCat || "";
}

  function _shakeTileNow_(id){
  const el = _tileElById_(String(id));
  if (!el) return;

  el.classList.remove("shake");
  void el.offsetWidth;   // restart animation
  el.classList.add("shake");

  el.addEventListener("animationend", () => {
    el.classList.remove("shake");
  }, { once: true });
}

  
function rerenderRow(r){
  const rowEl = document.querySelector(`[data-row="${r}"]`);
  if (!rowEl) return;
  rowEl.innerHTML = "";

  const rowTiles = state.tiles
    .filter(x => x.row === r && !x.removed && !x.held)
    .sort((a,b) => (a.col ?? 0) - (b.col ?? 0));

  const visibleCount = rowTiles.length;
  rowEl.style.setProperty("--row-cols", String(visibleCount));

  const sel = state.selectedId;
  const elimOn = !!state.eliminationMode;
  const triedPairs = state.triedPairs || {};

  for (let i = 0; i < visibleCount; i++){
    const t = rowTiles[i];
    if (!t) continue;

    const btn = document.createElement("button");
    btn.className = "tile";
    btn.type = "button";
btn.dataset.id = String(t.id);

    // selected styling via class only
    if (sel === t.id) btn.classList.add("selected");
// keep "gimme a match" highlight across rerenders
if (hintedPair && Array.isArray(hintedPair.ids) && hintedPair.ids.map(String).includes(String(t.id))){
  btn.classList.add("hinted");
}


    // ✅ ELIMINATION DIM LOGIC
    const k = (elimOn && sel && !t.done && t.id !== sel) ? pairKey(sel, t.id) : null;
const triedVal = k ? triedPairs[k] : 0;
const willDim = !!(elimOn && sel && !t.done && t.id !== sel && triedVal);


    // User dim (ignore)
   if (t.dim && t.id !== sel) {
  btn.classList.add("user-dim");
} else {
  btn.classList.remove("user-dim");
}
// Elimination / hint dim
if (willDim && t.id !== sel) {
  btn.classList.add("elim-dim");
} else {
  btn.classList.remove("elim-dim");
}

// Narrow down: preserve pick highlights and dim state across rerenders
if (state.hintMode?.type === "narrowDown"){
  const ndMode = state.hintMode;
  if (ndMode.selected.includes(String(t.id))){
    btn.classList.add("narrow-pick");
  }
  if (ndMode.active){
    const ndCats = ndMode.cats ? new Set(ndMode.cats) : new Set();
    if (!t.done && !ndCats.has(t.cat)){
      btn.classList.add("hint-dim");
    }
  }
}

    // width (optional)
    btn.style.width = t._w ? `${t._w}px` : "";

    // base content (label)
    btn.innerHTML = t.done
      ? `<span class="done-text">${escapeHtml(atob(t.cat))}</span>`
      : tileLabel(t.cluster);

   if (t.done){
  btn.classList.add("done");
  btn.disabled = true;
  btn.style.background = _doneBg_(t.cat);

  if (t._celebrate){
    btn.classList.add("celebrate");
    t._celebrate = false;
    setTimeout(() => btn.classList.remove("celebrate"), 1100);
  }
} else {
  btn.addEventListener("click", () => onTileClick(t.id));

  // Holding zone drag (board -> holding, board -> board match)
  if (state.holdingMode && !t.done){
    btn.draggable = true;

    btn.addEventListener("dragstart", (e) => {
      try{
        e.dataTransfer?.setData("text/plain", JSON.stringify({ id: String(t.id), from: "board" }));
        e.dataTransfer.effectAllowed = "move";
      }catch{}
    });

    // allow dropping a dragged tile onto this tile to attempt a match
    btn.addEventListener("dragover", (e) => { e.preventDefault(); });

    btn.addEventListener("drop", async (e) => {
      e.preventDefault();
      let payload = null;
      try{
        payload = JSON.parse(e.dataTransfer?.getData("text/plain") || "");
      }catch{}
      const fromId = payload?.id ? String(payload.id) : null;
      const from = payload?.from ? String(payload.from) : "";
      if (!fromId || fromId === String(t.id)) return;

      // Treat drop as: dragged tile selected, then attempt match with target
      state.selectedId = fromId;
      state.holdingArm = false;
      setHUD();

      // update selection visuals everywhere
      document.querySelectorAll("[data-row]").forEach(el => {
        const r = Number(el.getAttribute("data-row"));
        rerenderRow(r);
      });
      renderHolding();

      await onTileClick(String(t.id));
    });
  }
}



    // emoji logic
    const n = (t.cluster?.length || 1);
    const key = _emojiKeyForTile_(t);
    const emoji = _emojiForTile_(t) || "";

    btn.classList.toggle("draft-emoji", (!t.done && n === 1 && !!emoji));

    // ✅ FIX: DO NOT inject a <button> inside the tile <button>.
    // Create a tight clickable element and prepend it.
    if (emoji){
      btn.classList.add("has-emoji");

      const emojiEl = document.createElement("span");
      emojiEl.className = "tile-emoji-btn";
      emojiEl.setAttribute("role", "button");
      emojiEl.setAttribute("aria-label", "Edit emoji");
      emojiEl.tabIndex = 0;


const s = String(emoji || "").trim();
if (s.startsWith("<svg")){
  emojiEl.innerHTML = s;
} else {
  emojiEl.textContent = s;
};

      const openEmoji = (e) => {
        e.preventDefault();
        e.stopPropagation();

        // If another tile is selected, treat emoji-click as clicking the tile (match attempt)
        if (state.selectedId && state.selectedId !== t.id){
          onTileClick(t.id);
          return;
        }

        _openEmojiPicker_(emojiEl, key);
      };

      emojiEl.addEventListener("click", openEmoji);
      emojiEl.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") openEmoji(e);
      });

      btn.prepend(emojiEl);
    }

    const showEmojiUI = true;

    // pencil only when no emoji AND no active selection (your current rule)
    if (showEmojiUI && !emoji && !state.selectedId){
      const eb = document.createElement("span");
      eb.className = "emoji-btn";
            eb.setAttribute("role", "button");
      eb.tabIndex = 0;
      eb.innerHTML = (typeof PENCIL_SVG !== "undefined") ? PENCIL_SVG : "✎";

      const open = (e) => {
        e.preventDefault();
        e.stopPropagation();

        // If another tile is selected, treat pencil click as clicking the tile (match attempt).
        if (state.selectedId && state.selectedId !== t.id){
          onTileClick(t.id);
          return;
        }

        if (typeof _openEmojiPicker_ === "function"){
          _openEmojiPicker_(eb, key);
        }
      };

      eb.addEventListener("click", open);
      eb.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") open(e);
      });

      btn.appendChild(eb);
    }

    rowEl.appendChild(btn);
  }
}


function renderHolding(){
  _ensureHolding_();

  if (!els.holdingZone || !els.holdingList) return;

  // show/hide rail
  const on = !!state.holdingMode;
  els.holdingZone.hidden = !on;
  document.body.classList.toggle("holding-on", on);


  // If off, nothing to render
  if (!on){
    els.holdingList.innerHTML = "";
    if (els.holdingCount) els.holdingCount.textContent = `0 / ${_holdMax_()}`;
    document.body.classList.toggle("holding-on", on);

    return;
  }

  // update count
  if (els.holdingCount) els.holdingCount.textContent = `${_holdingCount_()} / ${_holdMax_()}`;

  const list = els.holdingList;
  list.innerHTML = "";

  const ids = Array.isArray(state.holdingIds) ? state.holdingIds.slice() : [];
  const max = _holdMax_();

  const mkDragPayload = (id, from) => JSON.stringify({ id: String(id), from: String(from) });

  const parsePayload = (e) => {
    try{
      const raw = e.dataTransfer?.getData("text/plain");
      if (!raw) return null;
      const o = JSON.parse(raw);
      if (!o || !o.id) return null;
      return { id: String(o.id), from: String(o.from || "") };
    }catch{
      return null;
    }
  };

  const tryHoldFromPayload = async (payload, slotIndex) => {
    if (!payload) return;
    const sid = String(payload.id);

    // from holding -> move/swap
    if (payload.from === "holding"){
      const fromIdx = ids.findIndex(x => String(x) === sid);
      if (fromIdx === -1) return;

      // dropping on the trailing placeholder => move to end
      if (slotIndex === ids.length){
        ids.splice(fromIdx, 1);
        ids.push(sid);
        state.holdingIds = ids;
        renderHolding();
        save();
        return;
      }

      // swap
      if (slotIndex >= 0 && slotIndex < ids.length){
        const tmp = ids[slotIndex];
        ids[slotIndex] = sid;
        ids[fromIdx] = tmp;
        state.holdingIds = ids;
        renderHolding();
        save();
        return;
      }
      return;
    }

    // from board -> hold
    if (payload.from === "board"){
      const ok = _holdTileById_(sid);
      if (ok){
        renderAll();
        save();
      }
    }
  };

  // render held tiles
  for (let i = 0; i < ids.length; i++){
    const id = String(ids[i]);
    const t = getTileById(id);
    if (!t || t.removed) continue;

    const btn = document.createElement("button");
    btn.className = "tile";
    btn.type = "button";
    btn.dataset.id = String(t.id);

    if (String(state.selectedId) === String(t.id)) btn.classList.add("selected");
    // keep "gimme a match" highlight across rerenders (holding zone too)
if (hintedPair && Array.isArray(hintedPair.ids) && hintedPair.ids.includes(String(t.id))){
  btn.classList.add("hinted");
}


    // label
    btn.innerHTML = t.done
      ? `<span class="done-text">${escapeHtml(atob(t.cat))}</span>`
      : tileLabel(t.cluster);

    // emoji (same behavior as board)
    const n = (t.cluster?.length || 1);
    const key = _emojiKeyForTile_(t);
    const emoji = _emojiForTile_(t) || "";

    btn.classList.toggle("draft-emoji", (!t.done && n === 1 && !!emoji));

    if (emoji){
      btn.classList.add("has-emoji");

     const emojiEl = document.createElement("span");
emojiEl.className = "tile-emoji-btn";
emojiEl.setAttribute("role", "button");
emojiEl.setAttribute("aria-label", "Edit emoji");
emojiEl.tabIndex = 0;
const s = String(emoji || "").trim();
if (s.startsWith("<svg")){
  emojiEl.innerHTML = s;
} else {
  emojiEl.textContent = s;
}

      const openEmoji = (e) => {
        e.preventDefault();
        e.stopPropagation();

        // If another tile is selected, treat emoji-click as clicking the tile (match attempt)
        if (state.selectedId && state.selectedId !== t.id){
          onTileClick(t.id);
          return;
        }
        _openEmojiPicker_(emojiEl, key);
      };

      emojiEl.addEventListener("click", openEmoji);
      emojiEl.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") openEmoji(e);
      });

      btn.prepend(emojiEl);
    }

    if (!emoji && !state.selectedId){
      const eb = document.createElement("span");
      eb.className = "emoji-btn";
      eb.setAttribute("role", "button");
      eb.tabIndex = 0;
      eb.innerHTML = (typeof PENCIL_SVG !== "undefined") ? PENCIL_SVG : "✎";

      const open = (e) => {
        e.preventDefault();
        e.stopPropagation();

        if (state.selectedId && state.selectedId !== t.id){
          onTileClick(t.id);
          return;
        }
        if (typeof _openEmojiPicker_ === "function"){
          _openEmojiPicker_(eb, key);
        }
      };

      eb.addEventListener("click", open);
      eb.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") open(e);
      });

      btn.appendChild(eb);
    }

    // remove X
    const x = document.createElement("span");
    x.className = "holdX";
    x.textContent = "×";
    x.title = "Return to board";
    x.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      _unholdTileById_(t.id, { preferOrigin:true });
      renderAll();
      save();
    });
    btn.appendChild(x);

    // click = normal tile click
    btn.addEventListener("click", () => onTileClick(t.id));

  // Holding zone drag (board -> holding, board -> board match)
  if (state.holdingMode && !t.done){
    btn.draggable = true;

    btn.addEventListener("dragstart", (e) => {
      try{
        e.dataTransfer?.setData("text/plain", JSON.stringify({ id: String(t.id), from: "board" }));
        e.dataTransfer.effectAllowed = "move";
      }catch{}
    });

    // allow dropping a dragged tile onto this tile to attempt a match
    btn.addEventListener("dragover", (e) => { e.preventDefault(); });

    btn.addEventListener("drop", async (e) => {
      e.preventDefault();
      let payload = null;
      try{
        payload = JSON.parse(e.dataTransfer?.getData("text/plain") || "");
      }catch{}
      const fromId = payload?.id ? String(payload.id) : null;
      const from = payload?.from ? String(payload.from) : "";
      if (!fromId || fromId === String(t.id)) return;

      // Treat drop as: dragged tile selected, then attempt match with target
      state.selectedId = fromId;
      state.holdingArm = false;
      setHUD();

      // update selection visuals everywhere
      document.querySelectorAll("[data-row]").forEach(el => {
        const r = Number(el.getAttribute("data-row"));
        rerenderRow(r);
      });
      renderHolding();

      await onTileClick(String(t.id));
    });
  }

    // drag
    btn.draggable = true;
    btn.addEventListener("dragstart", (e) => {
      e.dataTransfer?.setData("text/plain", mkDragPayload(t.id, "holding"));
      e.dataTransfer?.setData("text/holding", String(t.id));
      e.dataTransfer?.setDragImage?.(btn, 10, 10);
    });

    // allow dropping other holding tiles onto this (swap), or board tiles into holding
    btn.addEventListener("dragover", (e) => { e.preventDefault(); btn.classList.add("drag-over"); });
    btn.addEventListener("dragleave", () => btn.classList.remove("drag-over"));
    btn.addEventListener("drop", (e) => {
      e.preventDefault();
      btn.classList.remove("drag-over");
      const payload = parsePayload(e);
      const slotIndex = i;
      tryHoldFromPayload(payload, slotIndex);
    });

    list.appendChild(btn);
  }

  // placeholder slot (if space)
  if (ids.length < max){
    const slotIndex = ids.length;

    const ph = document.createElement("button");
    ph.className = "tile tile--placeholder";
    ph.type = "button";
    ph.innerHTML = `<span class="plus">＋</span>`;
    ph.title = "Add to holding";

    ph.addEventListener("click", () => {
      if (state.selectedId){
        const ok = _holdTileById_(state.selectedId);
        if (ok){
          renderAll();
          save();
        }
        return;
      }
      state.holdingArm = true;
      showMsg("Select a tile to add to holding");
      save();
    });

    ph.addEventListener("dragover", (e) => { e.preventDefault(); ph.classList.add("drag-over"); });
    ph.addEventListener("dragleave", () => ph.classList.remove("drag-over"));
    ph.addEventListener("drop", (e) => {
      e.preventDefault();
      ph.classList.remove("drag-over");
      const payload = parsePayload(e);
      tryHoldFromPayload(payload, slotIndex);
    });

    list.appendChild(ph);
  }
}

function renderAll(){
  els.board.innerHTML = "";

  const active = state.tiles.filter(t => !t.removed && !t.held);
  const maxRow = active.length ? Math.max(...active.map(t => t.row)) : 0;

  for (let r = 0; r <= maxRow; r++){
    const row = document.createElement("div");
    row.className = "row";
    row.dataset.row = String(r);
    els.board.appendChild(row);
    rerenderRow(r);
  }

els.goal.textContent = String(_winScore_());
document.body.classList.toggle("hide-emojis", !!state.hideEmojis);
  const toolsWrap = document.getElementById("shuffleToolsWrap");
if (toolsWrap) toolsWrap.hidden = !!state.hideEmojis;

if (els.hideEmojiToggle) els.hideEmojiToggle.checked = !!state.hideEmojis;
if (els.holdingToggle) els.holdingToggle.checked = !!state.holdingMode;

renderHolding();

  setHUD();
}


  // Fallback for :has(): when hovering emoji button, toggle a class on the parent tile
els.board?.addEventListener("mouseover", (e) => {
  const btn = e.target.closest?.(".tile-emoji-btn");
  if (!btn) return;
  const tile = btn.closest?.(".tile");
  if (tile) tile.classList.add("emoji-hovered");
});

els.board?.addEventListener("mouseout", (e) => {
  const btn = e.target.closest?.(".tile-emoji-btn");
  if (!btn) return;

  // avoid flicker when moving within the button
  if (btn.contains(e.relatedTarget)) return;

  const tile = btn.closest?.(".tile");
  if (tile) tile.classList.remove("emoji-hovered");
});

function _checkEndGame_(){
 const total = _totalOptions_();
const winScore = _winScore_();
  if (state.gameOver) return;
  if (!_allTilesMatched_()) return;

  state.gameOver = true;

  // Chill: always celebrate, no % message
  if (state.mode === "chill"){
    showEndOverlay("You did it! 🎉");
    startFireworks();
    save();
    return;
  }

  
  
    const successScore = total - state.mistakes;
  const errRate = total ? (state.mistakes / total) : 0;

  // current full-fireworks cutoff implied by your existing win rule:
  // successScore >= winScore  <=>  mistakes/total <= (total - winScore)/total
  const fullErrMax = total ? ((total - winScore) / total) : 0;

  if (errRate <= fullErrMax){
    // full fireworks (same as current “win” fireworks)
    showEndOverlay("You did it! 🎉");
    startFireworks({ grayscale:false });
  } else if (errRate <= 0.50){
    // between current cutoff and 50% => short greyscale fireworks
    showEndOverlay("You did it! 🎉  (a little messy)");
    startFireworks({ grayscale:true, durationMs: 3000 });
  } else {
    const errPct = errRate * 100;
    showEndOverlay(`You did it. ${errPct.toFixed(1)}% error rate — still counts.`);
  }

  save();
}

  //HINT
// =====================

// ----- hint spend (supports costs; gimme-a-match is 2)
  els.hintPreview = document.getElementById("hintPreview");
els.hintList = document.getElementById("hintList");




function _pulseHintCounter_(cost = 1){
  if (!els.hintsUsed) return;
  els.hintsUsed.classList.remove("hint-spend");
  // force reflow so animation retriggers
  void els.hintsUsed.offsetWidth;
  els.hintsUsed.classList.add("hint-spend");
  els.hintsUsed.addEventListener("animationend", () => {
    els.hintsUsed.classList.remove("hint-spend");
  }, { once:true });
}

function _spendHint_(cost = 1){
  if (state.mode === "chill") return;
  state.hintsUsed = (state.hintsUsed || 0) + (Number(cost) || 1);
  setHUD();
  _pulseHintCounter_(cost);
  save();
}

// ----- utilities
  function _syncHudHeight_(){
  const hud = document.querySelector(".hud");
  if (!hud) return;
  document.documentElement.style.setProperty("--hud-height", `${hud.offsetHeight}px`);
}

window.addEventListener("resize", _syncHudHeight_);
_syncHudHeight_();

function _uniqClusters_(tiles){
  // returns representative tiles for unique clusters (by sig)
  const seen = new Set();
  const reps = [];
  for (const t of tiles){
    const cl = t.cluster || [];
    const sig = cl.slice().sort().join("\u0001");
    if (seen.has(sig)) continue;
    seen.add(sig);
    reps.push(t);
  }
  return reps;
}

function _incompleteCats_(){
  const active = _activeTiles_();
  const cats = Object.keys(getCategories());
  return cats.filter(cat => active.some(t => t.cat === cat && !t.done));
}

function _unmatchedCountForCat_(cat){
  const active = _activeTiles_().filter(t => !t.removed && !t.done && t.cat === cat);
  return active.filter(t => (t.cluster?.length || 1) === 1).length;
}

function _catIsStarted_(cat){
  const active = _activeTiles_().filter(t => !t.removed && !t.done && t.cat === cat);
  return active.some(t => (t.cluster?.length || 1) > 1);
}

// ----- “show me a new category”
function _hintRevealNewCategory_(){
  const cat = _pickNotStartedCategory_();
  if (!cat){
    showMsg("No new categories — you've already started them all.", { sticky:true });
    return false; // ← CHANGED: don't consume hint
  }
  showMsg(CATEGORY_HINTS?.[cat]?.[0] || "Try a fresh theme you haven't started yet.", { sticky:true });
  return true;
}

// ----- “help, I'm stuck” — reveal the selected tile's category name
function _hintRevealSelectedCategory_(){
  const id = state?.selectedId;
  if (!id){
    showMsg("Select a tile first.", { sticky:true });
    return false; // ← CHANGED
  }
  const t = getTileById(String(id));
  if (!t || t.removed){
    showMsg("Select a tile first.", { sticky:true });
    return false; // ← CHANGED
  }
  if (t.done){
    showMsg("That tile is already completed.", { sticky:true });
    return false; // ← CHANGED
  }
  showMsg(`Category: ${atob(t.cat)}`, { sticky:true });
  return true; // ← Keep this one as true (success case)
}

// ----- small/strong: only categories with <=10 unmatched (and incomplete)
function _canRunSmallOrStrongHint_(){
  // Find the largest cluster size per category
  const maxClusterByCat = {};
  const cats = Object.keys(getCategories());
  cats.forEach(c => maxClusterByCat[c] = 0);

  for (const t of state.tiles){
    if (!t) continue;
    const cat = t.cat;
    if (!(cat in maxClusterByCat)) continue;

    // Count cluster size (or 1 if no cluster)
    const clusterSize = (t.cluster && t.cluster.length) || 1;
    
    if (clusterSize > maxClusterByCat[cat]) {
      maxClusterByCat[cat] = clusterSize;
    }
  }

  // Check if ANY category has its biggest cluster smaller than 8
  const candidates = cats.filter(c => (maxClusterByCat[c] || 0) < 8);
  return candidates.length > 0;
}
  
function _pickHintableCatUnder8_(){
  const counts = {};
  for (const t of _boardTiles_()){
    if (t.removed || t.done) continue;
    counts[t.cat] = (counts[t.cat] || 0) + 1;
  }
  const candidates = Object.keys(getCategories())
    .filter(cat => (counts[cat] || 0) < 8);

  if (!candidates.length) return null;
  return candidates[Math.floor(Math.random() * candidates.length)];
}


function _hintSmall_(){
  const cat = _pickHintableCatUnder8_();
  if (!cat){
    showMsg("No small hints right now — too many loose tiles in every category.", { sticky:true });
    return false;
  }
  showMsg(CATEGORY_HINTS?.[cat]?.[0] || "Small nudge: look for a tight theme.", { sticky:true });
  return true;
}

function _hintStrong_(){
  const cat = _pickHintableCatUnder8_();
  if (!cat){
    showMsg("No strong hints right now — too many loose tiles in every category.", { sticky:true });
    return false;
  }
  showMsg(CATEGORY_HINTS?.[cat]?.[1] || "Stronger clue: narrow the theme and commit.", { sticky:true });
  return true;
}

// ----- keep your overlapping-groups check exactly as-is
function _hintMergeGroups_(){
  const byCat = _inProgressClusterSigsByCat_();
  const cats = [...byCat.entries()]
    .filter(([_, sigs]) => sigs.size >= 2)
    .map(([cat]) => cat);

  if (!cats.length){
    showMsg("Nice try, but you don't need it — no overlapping groups!", { sticky: true });
    return false; // ← CHANGED from true
  }

  showMsg("Yep — at least two of your piles match. Try merging them.", { sticky: true });
  return true;
}

// ----- gimme a match (COST 2) — can involve an existing in-progress pile
function _hintGiveMatch_(){
  const active = _activeTiles_().filter(t => !t.removed && !t.done);

  // build lists
  const singlesByCat = new Map();
  const inProgRepsByCat = new Map(); // representative tile for each in-progress cluster (unique)

  for (const t of active){
    const clLen = (t.cluster?.length || 1);

    if (clLen === 1){
      if (!singlesByCat.has(t.cat)) singlesByCat.set(t.cat, []);
      singlesByCat.get(t.cat).push(t);
    } else {
      // capture unique cluster reps
      if (!inProgRepsByCat.has(t.cat)) inProgRepsByCat.set(t.cat, []);
      inProgRepsByCat.get(t.cat).push(t);
    }
  }

  // uniquify in-progress reps per cat
  for (const [cat, reps] of inProgRepsByCat.entries()){
    inProgRepsByCat.set(cat, _uniqClusters_(reps));
  }

  // prefer: in-progress pile + a single from same cat
  const catsWithPileAndSingle = _incompleteCats_().filter(cat =>
    (inProgRepsByCat.get(cat)?.length || 0) >= 1 && (singlesByCat.get(cat)?.length || 0) >= 1
  );

  if (catsWithPileAndSingle.length){
    const cat = catsWithPileAndSingle[Math.floor(Math.random() * catsWithPileAndSingle.length)];
    const pileRep = inProgRepsByCat.get(cat)[0];
    const singles = singlesByCat.get(cat);
    const single = singles[Math.floor(Math.random() * singles.length)];

    showMsg("Match assist (costs 2): one tile belongs with that pile.", { sticky:true });
    _hintPairUntilResolved_(pileRep.id, single.id);
    return true;
  }

  // fallback: two singles
  const catsWithTwoSingles = [...singlesByCat.keys()].filter(cat => (singlesByCat.get(cat)?.length || 0) >= 2);
  if (!catsWithTwoSingles.length){
   showMsg("No clean match to hand you — everything's already in motion.", { sticky:true });
return false; // ← CHANGED from true
  }

  const cat = catsWithTwoSingles[Math.floor(Math.random() * catsWithTwoSingles.length)];
  const arr = singlesByCat.get(cat);
  const a = arr[Math.floor(Math.random() * arr.length)];
  let b = arr[Math.floor(Math.random() * arr.length)];
  while (b.id === a.id) b = arr[Math.floor(Math.random() * arr.length)];

  showMsg("Match assist (costs 2): here’s a pair.", { sticky:true });
  _hintPairUntilResolved_(a.id, b.id);
  return true;
}

// ----- fill a gap: pick an in-progress pile and highlight ONE missing tile
function _hintFillGap_(){
  const active = _activeTiles_().filter(t => !t.removed && !t.done);

  // unique in-progress clusters (len 2..GROUP_SIZE-1)
  const inProg = _uniqClusters_(active.filter(t => {
    const n = (t.cluster?.length || 1);
    return n >= 2 && n < GROUP_SIZE;
  }));

  if (!inProg.length){
    showMsg("No gaps to fill — you don’t have any incomplete piles.", { sticky:true });
    return true;
  }

  const pileRep = inProg[Math.floor(Math.random() * inProg.length)];
  const cat = pileRep.cat;

  // find a single from same cat
  const singles = active.filter(t => t.cat === cat && (t.cluster?.length || 1) === 1);
  if (!singles.length){
    showMsg("That pile has no loose missing tiles (weird, but okay).", { sticky:true });
    return true;
  }

  const single = singles[Math.floor(Math.random() * singles.length)];
  showMsg("Gap fill: one tile belongs in that incomplete pile.", { sticky:true });
  _hintPairUntilResolved_(pileRep.id, single.id);
  return true;
}

// ----- targeted highlight (separate from hintedPair)
let hintFocus = null;   // { ids:[...], dimAll:boolean }
let hintFocusClearArmed = false;

function _clearHintFocus_(){
  if (!hintFocus) return;
  const all = document.querySelectorAll(".tile.hint-target, .tile.hint-dim");
  all.forEach(el => el.classList.remove("hint-target", "hint-dim"));
  hintFocus = null;
  hintFocusClearArmed = false;
}

function _setHintFocus_(ids, { dimOthers = true } = {}){
  const sel = String(state?.selectedId ?? "");
  const arr = Array.isArray(ids) ? ids.map(x => String(x)) : [];

  // ensure selected is never dimmed even if it's not one of the 5
  if (sel && !arr.includes(sel)) arr.push(sel);

  _clearHintFocus_();
  hintFocus = { ids: [...arr], dimAll: !!dimOthers };

  if (dimOthers){
    document.querySelectorAll(".tile").forEach(el => el.classList.add("hint-dim"));
  }

  for (const id of arr){
    const el = _tileElById_(id);
    if (!el) continue;
    el.classList.remove("hint-dim");
    el.classList.add("hint-target");
    el.scrollIntoView({ block:"center", inline:"center", behavior:"smooth" });
  }

  hintFocusClearArmed = false;
  setTimeout(() => { hintFocusClearArmed = true; }, 0);
}


// --- Cluster hover tooltip (3+ only, 2s delay, and only when nothing is selected) ---
let _clusterTipRAF_ = null;
let _clusterTipTimer_ = null;
let _clusterHoverId_ = null;

function _hideClusterTip_(){
  if (_clusterTipTimer_) { clearTimeout(_clusterTipTimer_); _clusterTipTimer_ = null; }
  _clusterHoverId_ = null;
  if (!els.clusterTip) return;
  els.clusterTip.hidden = true;
  els.clusterTip.innerHTML = "";
}

function _showClusterTip_(tileId, x, y){
  const tip = els.clusterTip;
  if (!tip) return;

  const t = state?.tiles?.find(tt => String(tt.id) === String(tileId));
  const cl = t?.cluster || [];
  if (!Array.isArray(cl) || cl.length < 3) return _hideClusterTip_();

  // newest on top, oldest on bottom
  const items = [...cl].reverse()
    .map(s => `<div class="clusterTip__item">${escapeHtml(String(s))}</div>`)
    .join("");

  tip.innerHTML = items;
  tip.hidden = false;

  const pad = 12;
  const w = tip.offsetWidth || 260;
  const h = tip.offsetHeight || 120;
  const left = Math.min(window.innerWidth - w - pad, x + 14);
  const top  = Math.min(window.innerHeight - h - pad, y + 14);
  tip.style.left = Math.max(pad, left) + "px";
  tip.style.top  = Math.max(pad, top) + "px";
}

els.board?.addEventListener("pointermove", (e) => {
  const tileEl = e.target.closest?.(".tile");
  if (!tileEl) return _hideClusterTip_();

  const id = tileEl.dataset?.id;
  if (!id) return _hideClusterTip_();

  // no tooltip while a tile is selected
  if (state?.selectedId) return _hideClusterTip_();

  // only piles (2+) show; but we check inside _showClusterTip_
  if (String(id) !== String(_clusterHoverId_)){
    _hideClusterTip_(); // disappear immediately when switching tiles
    _clusterHoverId_ = String(id);
    _clusterTipTimer_ = setTimeout(() => {
      // still hovering same tile?
      if (String(_clusterHoverId_) !== String(id)) return;
      if (_clusterTipRAF_) cancelAnimationFrame(_clusterTipRAF_);
      _clusterTipRAF_ = requestAnimationFrame(() => _showClusterTip_(id, e.clientX, e.clientY));
    }, 2000);
  }
});

els.board?.addEventListener("pointerleave", _hideClusterTip_);

// --- Dim brush (marquee rectangle) ---
let _dimRectStart_ = null;
let _dimMarqueeEl_ = null;
let _dimRectActive_ = false;

function _ensureDimMarquee_(){
  if (_dimMarqueeEl_) return _dimMarqueeEl_;
  const d = document.createElement("div");
  d.className = "dimMarquee";
  d.hidden = true;
  document.body.appendChild(d);
  _dimMarqueeEl_ = d;
  return d;
}

function _hideDimMarquee_(){
  if (!_dimMarqueeEl_) return;
  _dimMarqueeEl_.hidden = true;
  _dimMarqueeEl_.style.left = "0px";
  _dimMarqueeEl_.style.top = "0px";
  _dimMarqueeEl_.style.width = "0px";
  _dimMarqueeEl_.style.height = "0px";
}

function _clearUserDim_(){
  if (!state?.tiles) return;
  state.tiles.forEach(t => { if (t && !t.done) t.dim = false; });
  renderAll();
  save();
}

function _applyDimRect_(rect){
  const tiles = state?.tiles || [];
  const sel = String(state?.selectedId ?? "");

  // collect hits + whether any are not dimmed
  const hit = [];
  let anyNotDimmed = false;

  for (const t of tiles){
    if (!t || t.done || t.removed) continue;
    if (sel && String(t.id) === sel) continue; // never touch selected

    const el = _tileElById_(t.id);
    if (!el) continue;

    const r = el.getBoundingClientRect();
    const intersects =
      !(r.right < rect.left || r.left > rect.right || r.bottom < rect.top || r.top > rect.bottom);

    if (!intersects) continue;

    hit.push(t);
    if (!t.dim) anyNotDimmed = true;
  }

  if (!hit.length) return false;

  // prioritize dimming if mixed; only undim when ALL are already dimmed
  const nextVal = anyNotDimmed ? true : false;

  for (const t of hit) t.dim = nextVal;

  // last selection tracking for HUD clear
  state._dimLastIds = hit.map(t => String(t.id));
state._dimLastAction = nextVal ? "dim" : "undim";


  return true;
}



els.board?.addEventListener("pointerdown", (e) => {
  if (!state?.dimMode) return;

  // ✅ If you start on a tile, let normal tile-click/matching happen.
  if (e.target.closest?.(".tile")) return;

  // allow normal UI interactions
  if (e.target.closest?.(".menu, .hud, .btn, .iconBtn, .modePill")) return;

  e.preventDefault();
  e.stopPropagation();

  const m = _ensureDimMarquee_();
  _dimRectStart_ = { x: e.clientX, y: e.clientY };
  _dimRectActive_ = false;

  document.body.classList.add("dim-dragging");
  els.board.setPointerCapture?.(e.pointerId);

  m.hidden = false;
  m.style.left = `${_dimRectStart_.x}px`;
  m.style.top = `${_dimRectStart_.y}px`;
  m.style.width = "0px";
  m.style.height = "0px";
});

els.board?.addEventListener("pointermove", (e) => {
  if (!state?.dimMode || !_dimRectStart_) return;

  const dx = e.clientX - _dimRectStart_.x;
  const dy = e.clientY - _dimRectStart_.y;
  if (!_dimRectActive_ && (Math.abs(dx) + Math.abs(dy)) > 4) _dimRectActive_ = true;

  const m = _ensureDimMarquee_();
  const left = Math.min(_dimRectStart_.x, e.clientX);
  const top  = Math.min(_dimRectStart_.y, e.clientY);
  const w    = Math.abs(dx);
  const h    = Math.abs(dy);

  m.hidden = false;
  m.style.left = `${left}px`;
  m.style.top = `${top}px`;
  m.style.width = `${w}px`;
  m.style.height = `${h}px`;
});

els.board?.addEventListener("pointerup", (e) => {
  if (!state?.dimMode || !_dimRectStart_) return;

  e.preventDefault();
  e.stopPropagation();

  const end = { x: e.clientX, y: e.clientY };
  const rect = {
    left: Math.min(_dimRectStart_.x, end.x),
    top: Math.min(_dimRectStart_.y, end.y),
    right: Math.max(_dimRectStart_.x, end.x),
    bottom: Math.max(_dimRectStart_.y, end.y)
  };

  if (_dimRectActive_){
    _applyDimRect_(rect);
    renderAll();
    save();
  }

  _dimRectStart_ = null;
  _dimRectActive_ = false;
  document.body.classList.remove("dim-dragging");
  _hideDimMarquee_();
});

// Esc clears user dim
document.addEventListener("keydown", (e) => {
  if (e.key !== "Escape") return;

  // clear dim even if menu/overlay has focus
  if (state?.dimMode){
    for (const t of (state.tiles || [])){
      if (!t || t.done || t.removed) continue;
      t.dim = false;
    }
    state._dimLastIds = [];
    state._dimLastAction = null;
    renderAll();
    setHUD();
    save();
  }
}, true); // <-- capture phase


// ----- elimination mode visuals




// ----- narrow down mode
const NARROW_DOWN_MIN = 4;
const NARROW_DOWN_MAX = 8;

function _narrowDownCost_(n){
  if (n >= 8) return 3;
  if (n >= 5) return 4;
  return 5; // 4 tiles
}

function _narrowDownArm_(){
  if (state.selectedId) deselect();
  state.hintMode = { type: "narrowDown", selected: [] };
  _narrowDownUpdateHud_();
  renderAll();
  save();
}

function _narrowDownUpdateHud_(){
  const mode = state.hintMode;
  if (!mode || mode.type !== "narrowDown") return;
  const n = mode.selected.length;

  if (mode.active){
    showMsg("", { sticky: true });
    const msgEl = els.msg;
    if (msgEl){
      msgEl.innerHTML = `<span class="nd-hud">Narrow down active <button id="narrowDownClear" class="btn btn--mini nd-btn" type="button">Clear</button></span>`;
      document.getElementById("narrowDownClear")?.addEventListener("click", (e) => {
        e.stopPropagation();
        _narrowDownExit_();
      });
    }
    return;
  }

  const cost = _narrowDownCost_(n);
  const remaining = NARROW_DOWN_MIN - n;
  let html = `<span class="nd-hud">Narrow down: ${n} selected`;
  if (remaining > 0) html += ` — pick ${remaining} more`;
  html += ` (cost: ${cost}) `;
  if (n >= NARROW_DOWN_MIN) html += `<button id="narrowDownGo" class="btn btn--mini nd-btn nd-go" type="button">Go</button> `;
  html += `<button id="narrowDownCancel" class="btn btn--mini nd-btn" type="button">Cancel</button>`;
  html += `</span>`;

  showMsg("", { sticky: true });
  const msgEl = els.msg;
  if (msgEl) msgEl.innerHTML = html;

  document.getElementById("narrowDownGo")?.addEventListener("click", (e) => {
    e.stopPropagation();
    _narrowDownActivate_();
  });
  document.getElementById("narrowDownCancel")?.addEventListener("click", (e) => {
    e.stopPropagation();
    _narrowDownExit_();
  });
}

function _narrowDownToggleTile_(clickedId){
  const mode = state.hintMode;
  if (!mode || mode.type !== "narrowDown" || mode.active) return false;

  const t = getTileById(clickedId);
  if (!t || t.removed || t.done) return false;

  const idx = mode.selected.indexOf(clickedId);
  if (idx >= 0){
    mode.selected.splice(idx, 1);
  } else {
    if (mode.selected.length >= NARROW_DOWN_MAX) return true;
    mode.selected.push(clickedId);
  }

  // apply yellow highlight to selected tiles
  document.querySelectorAll(".tile").forEach(el => {
    const id = String(el.dataset.id || "");
    el.classList.toggle("narrow-pick", mode.selected.includes(id));
  });

  _narrowDownUpdateHud_();
  save();
  return true;
}

function _narrowDownActivate_(){
  const mode = state.hintMode;
  if (!mode || mode.type !== "narrowDown" || mode.selected.length < NARROW_DOWN_MIN) return;

  // collect categories of selected tiles
  const cats = new Set();
  for (const id of mode.selected){
    const t = getTileById(id);
    if (t) cats.add(t.cat);
  }

  // dim all tiles NOT in those categories (keep narrow-pick highlights on selected tiles)
  document.querySelectorAll(".tile").forEach(el => {
    const id = String(el.dataset.id || "");
    const t = getTileById(id);
    if (!t || t.done) return;
    const inCat = cats.has(t.cat);
    el.classList.toggle("hint-dim", !inCat);
  });

  mode.active = true;
  mode.cats = [...cats];
  const cost = _narrowDownCost_(mode.selected.length);
  _spendHint_(cost);
  _narrowDownUpdateHud_();
}

function _narrowDownExit_(){
  document.querySelectorAll(".tile.narrow-pick").forEach(el => el.classList.remove("narrow-pick"));
  document.querySelectorAll(".tile.hint-dim").forEach(el => el.classList.remove("hint-dim"));
  state.hintMode = null;
  showMsg("", { sticky: false });
  renderAll();
  save();
}

// ----- targeted hint modes
function _hintCancel_({ silent = false } = {}){
  if (state.hintMode?.type === "narrowDown"){
    _narrowDownExit_();
    return;
  }
  state.hintMode = null;
  // also cancel selection to avoid accidental merges
  if (state.selectedId) deselect();
  if (!silent) showMsg("Canceled.", { sticky:false });
  setHUD();
  save();
}

function _hintArmCategorySpotlight_(){
  state.hintMode = { type:"catSpotlight" };
  if (state.selectedId) deselect();
  showMsg("Pick a category: I’ll spotlight a few tiles for it.", { sticky:true });
  _hintRenderCategoryList_();
  setHUD(); save();
}

function _hintRenderCategoryList_(){
  const box = els.hintMenu?.querySelector?.("#hintCatList");
  if (!box) return;
  box.innerHTML = "";

  const cats = _incompleteCats_(); // incomplete only
  for (const cat of cats){
    const b = document.createElement("button");
    b.type = "button";
    b.setAttribute("data-cat", cat);
    b.textContent = cat;
    box.appendChild(b);
  }
}
function _hintArmTileHome_(){
  // If already armed, cancel
  if (state.hintMode?.type === "tileHomeArm"){
    state.hintMode = null;
    showMsg("", { sticky:false });
    return;
  }

  // If a tile is already selected, run immediately
  if (state.selectedId){
    const ok = _doTileHome_(state.selectedId);
    if (ok) _spendHint_?.(1);
    save?.();
    return;
  }

  // Otherwise: arm it, and the NEXT tile click becomes the one to “find a home”
  state.hintMode = { type: "tileHomeArm" };
  showMsg("Pick a tile to find a home for.", { sticky:true });
  save?.();
}



function _doTileHome_(tileId){
  const t = getTileById(tileId);
  if (!t || t.removed) return false;

  if (t.done){
    showMsg("That tile is already grouped.");
    return false; // don't spend a hint
  }

  // Always select the chosen tile (so the next click can be the match)
  state.selectedId = String(t.id);
  renderAll();
  setHUD();
  save?.();

  // find an in-progress pile in same category
  const active = _activeTiles_().filter(x => !x.removed && !x.done && x.cat === t.cat);
  const inProg = _uniqClusters_(active.filter(x => (x.cluster?.length || 1) >= 2 && (x.cluster?.length || 1) < GROUP_SIZE));

  if (!inProg.length){
    showMsg("That category doesn’t have an open pile yet.", { sticky:true });
    // still spotlight the chosen tile so the user sees what we picked
    _setHintFocus_([t.id], { dimOthers:true });
    return true;
  }

  // pick a representative pile tile that isn't the picked tile (if possible)
  let pileRep = inProg[0];
  if (pileRep.id === t.id && inProg.length > 1) pileRep = inProg[1];

  showMsg("It belongs with that pile.", { sticky:true });
  // keep focus up so you can click once on the highlighted tile to merge
  _setHintFocus_([t.id, pileRep.id], { dimOthers:true });
  return true;
}

function _doCategorySpotlight_(cat){
  if (!cat) return false;

  // only tiles that are still in play
  const active = _activeTiles_().filter(t => !t.removed && !t.done && t.cat === cat);
  if (!active.length) return false; // completed category (or none) => do nothing

  // prefer true singles first
  let candidates = active.filter(t => (t.cluster?.length || 1) === 1);

  // fallback: reps of in-progress clusters
  if (!candidates.length){
    candidates = _uniqClusters_(active.filter(t => (t.cluster?.length || 1) > 1));
  }

  if (!candidates.length) return false;

  const pick = candidates[Math.floor(Math.random() * candidates.length)];

  showMsg(`Spotlight: one tile in “${cat}”.`, { sticky:true });
  _setHintFocus_([pick.id], { dimOthers:true });
  return true;
}


// called by onTileClick hook
function _hintHandleTilePick_(tileId){
  if (!state.hintMode) return false;

  // other hint modes should NOT consume tile clicks
  return false;
}


// ----- hint menu (nested steps like your shuffle menu)
function _hintShowMain_(){
  const a = els.hintMenu?.querySelector(".menu-step--hintMain");
  const b = els.hintMenu?.querySelector(".menu-step--hintCat");
  if (a) a.hidden = false;
  if (b) b.hidden = true;
}
function _hintShowCat_(){
  const a = els.hintMenu?.querySelector(".menu-step--hintMain");
  const b = els.hintMenu?.querySelector(".menu-step--hintCat");
  if (a) a.hidden = true;
  if (b) b.hidden = false;
}
function _hideAllHintDetails_(){
  document.querySelectorAll('#hintMenu .menu-detail').forEach(d => {
    d.hidden = true;
  });
}

function _showHintDetailForButton_(btn){
  if (!btn) return;
  _hideAllHintDetails_();

  const d = btn.nextElementSibling;
  if (!d || !d.classList.contains("menu-detail")) return;

  d.hidden = false;

}

els.hintMenu?.addEventListener("mouseover", (e) => {
  const b = e.target.closest('.menu-step--hintMain button[data-action]');
  if (!b) return;

  _showHintDetailForButton_(b);

  if (b.classList.contains("is-disabled")){
    _showDenyTipAtEvent_(e, b.dataset.disabledMsg || "Not available.");
  } else {
    _hideDenyTip_();
  }
});

els.hintMenu?.addEventListener("focusin", (e) => {
  const b = e.target.closest('.menu-step--hintMain button[data-action]');
  if (!b) return;

  if (b.classList.contains("is-disabled")){
    _showDenyTipAtEvent_(e, b.dataset.disabledMsg || "Not available.");
  } else {
    _hideDenyTip_();
  }

  _showHintDetailForButton_(b);
});

els.hintMenu?.addEventListener("mousemove", (e) => {
  const b = e.target.closest('.menu-step--hintMain button[data-action]');
  if (!b || !b.classList.contains("is-disabled")) return;
  _showDenyTipAtEvent_(e, b.dataset.disabledMsg || "Not available.");
});

els.hintMenu?.addEventListener("mouseleave", () => {
  _hideDenyTip_();
  _hideAllHintDetails_();
});

function _openHintMenu_(){
  _hintShowMain_();

  try{
    const btnSmall  = els.hintMenu?.querySelector?.('button[data-action="small"]');
    const btnStrong = els.hintMenu?.querySelector?.('button[data-action="strong"]');
    const btnReveal = els.hintMenu?.querySelector?.('button[data-action="revealNew"]');
    const btnMatch  = els.hintMenu?.querySelector?.('button[data-action="match"]');
    const btnMerge  = els.hintMenu?.querySelector?.('button[data-action="mergeGroups"]');
    const btnHelpCat = els.hintMenu?.querySelector?.('button[data-action="helpCat"]');
    const btnTileHome = els.hintMenu?.querySelector?.('button[data-action="tileHome"]');

    // Check availability for Small and Strong hints
    const canRunSmallStrong = _canRunSmallOrStrongHint_();
console.log("canRunSmallStrong:", canRunSmallStrong);

console.log("Sample tiles:", state.tiles.slice(0, 5));
console.log("All Pizza Toppings tiles:", state.tiles.filter(t => t.cat === "Pizza Toppings")); // ADD THIS

const maxPileByCat = {};
const cats = Object.keys(getCategories());
cats.forEach(c => maxPileByCat[c] = 0);
const pileCatCounts = new Map();
for (const t of state.tiles){
  if (!t || t.removed) continue;
  const cat = t.cat;
  if (!(cat in maxPileByCat)) continue;
  const ids = (Array.isArray(t.cluster) && t.cluster.length) ? t.cluster : [t.id];
  const pileKey = ids.map(String).sort().join(",");
  let m = pileCatCounts.get(pileKey);
  if (!m){ m = new Map(); pileCatCounts.set(pileKey, m); }
  m.set(cat, (m.get(cat) || 0) + 1);
}
for (const m of pileCatCounts.values()){
  for (const [cat, cnt] of m.entries()){
    if (cnt > maxPileByCat[cat]) maxPileByCat[cat] = cnt;
  }
}
console.log("Max pile size per category:", maxPileByCat);
const under8piles = Object.entries(maxPileByCat).filter(([cat, size]) => size < 8);
console.log("Categories with biggest pile <8:", under8piles);
    const lockSmallStrong = !canRunSmallStrong;
    console.log("lockSmallStrong:", lockSmallStrong);      // ADD THIS

    const msgSmallStrong = "No small hints right now — every category has 8 or more tiles in play.";

    // Disable Small and Strong if not available
    for (const b of [btnSmall, btnStrong]){
      if (!b) continue;
      b.classList.toggle("is-disabled", lockSmallStrong);
      b.setAttribute("aria-disabled", lockSmallStrong ? "true" : "false");
      b.removeAttribute("title");
      b.dataset.disabledMsg = lockSmallStrong ? msgSmallStrong : "";
    }

    // Check availability for Reveal New Category
    if (btnReveal){
      const hasNotStarted = !!_pickNotStartedCategory_();
      const lockReveal = !hasNotStarted;
      const msgReveal = "No new categories — you've already started them all.";

      btnReveal.classList.toggle("is-disabled", lockReveal);
      btnReveal.setAttribute("aria-disabled", lockReveal ? "true" : "false");
      btnReveal.removeAttribute("title");
      btnReveal.dataset.disabledMsg = lockReveal ? msgReveal : "";
    }

    // Check availability for Match hint (needs 2+ tiles in same category)
    if (btnMatch){
      const active = _activeTiles_().filter(t => !t.removed && !t.done);
      const byCat = new Map();
      for (const t of active){
        if (!byCat.has(t.cat)) byCat.set(t.cat, []);
        byCat.get(t.cat).push(t);
      }
      const hasMatch = [...byCat.values()].some(arr => arr.length >= 2);
      const lockMatch = !hasMatch;
      const msgMatch = "No clean match to hand you — everything's already in motion.";

      btnMatch.classList.toggle("is-disabled", lockMatch);
      btnMatch.setAttribute("aria-disabled", lockMatch ? "true" : "false");
      btnMatch.removeAttribute("title");
      btnMatch.dataset.disabledMsg = lockMatch ? msgMatch : "";
    }

    // Check availability for Merge Groups (needs overlapping clusters)
    if (btnMerge){
      const byCat = _inProgressClusterSigsByCat_();
      const hasOverlap = [...byCat.entries()].some(([_, sigs]) => sigs.size >= 2);
      const lockMerge = !hasOverlap;
      const msgMerge = "No overlapping groups to merge.";

      btnMerge.classList.toggle("is-disabled", lockMerge);
      btnMerge.setAttribute("aria-disabled", lockMerge ? "true" : "false");
      btnMerge.removeAttribute("title");
      btnMerge.dataset.disabledMsg = lockMerge ? msgMerge : "";
    }

    // HelpCat and TileHome are always available (they just require user to pick a tile)
    // So we don't disable them

    els.hintMenu.hidden = false;
    els.hintBtn.textContent = "Hint ▴";
    _syncElimToggleUI_();
  } catch(_) { }
}

function _closeHintMenu_(){
  els.hintMenu.hidden = true;
  els.hintBtn.textContent = "Hint ▾";
}

els.hintBtn?.addEventListener("click", (e) => {
  e.stopPropagation();
  _closeShuffleMenu_?.();
  _closeNewGameMenu_?.();
  _closePlayModesMenu_?.();

  if (!els.hintMenu.hidden){
    _closeHintMenu_();
    return;
  }
  _openHintMenu_();
});

document.addEventListener("click", () => {
  if (!els.hintMenu.hidden){
    _closeHintMenu_();
    if (state.hintMode) _hintCancel_({ silent:true });
  }
  _clearHintOutline_?.();
});


document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && state.hintMode){
    if (state.hintMode.type === "narrowDown"){
      _narrowDownExit_();
    } else {
      _hintCancel_();
    }
  }
});

// stop propagation + actions inside menu
els.hintMenu?.addEventListener("click", (e) => {

  e.stopPropagation();

  const btn = e.target.closest("button[data-action]");
  if (!btn) return;

  const action = btn.getAttribute("data-action");

  // Check if ANY hint button is disabled - show tooltip and block action
if (btn.classList.contains("is-disabled")){
  _showDenyTipAtEvent_(e, btn.dataset.disabledMsg || "Not available.");
  return; // don't close, don't spend, don't run
  }

  if (action === "cancelHint"){
    _hintCancel_();
    _closeHintMenu_();
    return;
  }

  // Mode toggles (menu stays your source of truth for turning ON)
  

  // instant actions: close menu, run, spend
  _closeHintMenu_();
  
  if (action === "tileHome"){ _hintArmTileHome_(); return; }
  if (action === "narrowDown"){ _narrowDownArm_(); return; }

  if (action === "revealNew"){
  // If no tile selected, arm it and prompt like your other targeted hints
  if (!state.selectedId){
    const worked = _hintRevealNewCategory_();
    if (worked) _spendHint_(1); // ← ADDED: only spend if it worked
    return;
  }

  // If a tile is selected, run immediately (and spend only if it actually did something)
  const did = _hintRevealSelectedCategory_();
  if (did) _spendHint_(1);
  return;
}

  if (action === "small"){ 
  const worked = _hintSmall_(); 
  if (worked) _spendHint_(1); 
  return; 
}
if (action === "strong"){ 
  const worked = _hintStrong_(); 
  if (worked) _spendHint_(1); 
  return; 
}
  if (action === "match"){ 
  const worked = _hintGiveMatch_(); 
  if (worked) _spendHint_(2); 
  return; 
}
if (action === "mergeGroups"){ 
  const worked = _hintMergeGroups_(); 
  if (worked) _spendHint_(1); 
  return; 
}
  if (action === "helpCat"){ _startHelpCat_(); _spendHint_(1); return; }
 
});

  els.hintCatList?.addEventListener("click", (e) => {
  e.stopPropagation();

  const b = e.target.closest("button[data-cat]");
  if (!b) return;

  const cat = b.getAttribute("data-cat");
  if (!cat) return;

  const did = _doCategorySpotlight_(cat); // your "1 = spotlight a tile" behavior
  if (did) _spendHint_(1);

  _hintCancel_({ silent: true });

  _closeHintMenu_();
});

  function _sleep_(ms){ return new Promise(r => setTimeout(r, ms)); }
function _tileElById_(id){
  return document.querySelector(`.tile[data-id="${CSS.escape(String(id))}"]`);
}
async function _scrollPairIntoView_(idA, idB){
  const aEl = _tileElById_(idA);
  const bEl = _tileElById_(idB);
  if (!aEl || !bEl) return false;

  const hudH  = document.querySelector(".hud")?.offsetHeight ?? 56;
  const barH  = document.querySelector("#sortHud")?.offsetHeight ?? 0;

  const TOP_PAD = 14;
  const BOT_PAD = 14;

  const topLimit = hudH + barH + TOP_PAD;
  const botLimit = window.innerHeight - BOT_PAD;

  const a = aEl.getBoundingClientRect();
  const b = bEl.getBoundingClientRect();

  const pairTop = Math.min(a.top, b.top);
  const pairBot = Math.max(a.bottom, b.bottom);

  const pairH = pairBot - pairTop;
  const availH = botLimit - topLimit;

  let delta = 0;

  if (pairH > availH){
    delta = pairTop - topLimit;        // can’t fully fit; align top cleanly
  } else {
    if (pairTop < topLimit) delta = pairTop - topLimit;
    else if (pairBot > botLimit) delta = pairBot - botLimit;
    else return true;                  // already fully visible
  }

  if (Math.abs(delta) < 2) return true;

  window.scrollBy({ top: delta, behavior: "auto" });
  await _sleep_(60);
  return true;
}





function _setFastFocus_(idA, idB, mode){ // mode: "ok" | "wrong" | null
  const aEl = _tileElById_(idA);
  const bEl = _tileElById_(idB);
  if (!aEl || !bEl) return;

  // clear old
  document.querySelectorAll(".tile.fs-focus,.tile.fs-wrong").forEach(el => {
    el.classList.remove("fs-focus","fs-wrong");
  });

  aEl.classList.add("fs-focus");
  bEl.classList.add("fs-focus");

  if (mode === "wrong"){
    aEl.classList.add("fs-wrong");
    bEl.classList.add("fs-wrong");
  }
}

async function _ghostSlideInto_(fromId, toId){
  const fromEl = _tileElById_(fromId);
  const toEl = _tileElById_(toId);
  if (!fromEl || !toEl) return;

  const r1 = fromEl.getBoundingClientRect();
  const r2 = toEl.getBoundingClientRect();

  // clone the FROM tile as a fixed-position ghost
  const ghost = fromEl.cloneNode(true);
  ghost.classList.add("fs-ghost");
  ghost.style.left = `${r1.left}px`;
  ghost.style.top = `${r1.top}px`;
  ghost.style.width = `${r1.width}px`;
  ghost.style.height = `${r1.height}px`;
  ghost.style.transform = "translate(0px,0px)";
  ghost.style.transition = "transform 520ms cubic-bezier(.2,.8,.2,1), opacity 520ms ease";
  document.body.appendChild(ghost);

  // slide to keeper
  const dx = (r2.left - r1.left);
  const dy = (r2.top - r1.top);
  requestAnimationFrame(() => {
    ghost.style.transform = `translate(${dx}px, ${dy}px)`;
    ghost.style.opacity = "0.25";
  });

  await _sleep_(560);
  ghost.remove();
}

async function _fastSortEmojis_(){
  _fastSortAbort_ = false;
    _fastSortStop_  = false;
  _showSortHud_("Sorting…");

  state.fastSorting = true;

  document.body.classList.add("ui-locked");

  let merged = 0;
  let wrong = 0;

  // tune these for drama
  const STEP_PAUSE_MS  = 450;   // pause after focus before action
  const WRONG_PAUSE_MS = 650;   // pause after a wrong shake
  const MERGE_PAUSE_MS = 650;   // pause after merge animation

const abortNow = () => _fastSortStop_ === true;

  
  

  try{
    showMsg("Fast sort…", { sticky:true });

    const buildMap = () => {
      const m = new Map();
      for (const t of _boardTiles_()){
        if (t.removed || t.done) continue;
        const e = _emojiForTile_(t);
        if (!e) continue;
        if (!m.has(e)) m.set(e, []);
        m.get(e).push(t.id);
      }
      return m;
    };

    const tried = new Set();

    for (let pass = 0; pass < 25; pass++){
      if (abortNow()) break;

      const map = buildMap();
      let didAnything = false;

      for (const [emoji, ids0] of map.entries()){
        if (abortNow()) break;

        const ids = ids0.filter(id => {
          const t = getTileById(id);
          return t && !t.removed && !t.done && _emojiForTile_(t) === emoji;
        });
        if (ids.length < 2) continue;

        let progressed = true;
        while (progressed){
          if (abortNow()) break;

          progressed = false;

          const live = ids.filter(id => {
            const t = getTileById(id);
            return t && !t.removed && !t.done && _emojiForTile_(t) === emoji;
          });
          if (live.length < 2) break;

          // Prefer a correct pair first
          let matchPair = null;
          for (let i = 0; i < live.length && !matchPair; i++){
            for (let j = i + 1; j < live.length; j++){
              const a = getTileById(live[i]);
              const b = getTileById(live[j]);
              if (!a || !b) continue;
              if (a.cat === b.cat){
                matchPair = [a.id, b.id]; // absorbed = first, keeper = second
                break;
              }
            }
          }

          // If no guaranteed correct pair, try one untried pair and show wrong visually
          let pair = matchPair;
          let forcedTry = false;

          if (!pair){
            let attempted = false;
            for (let i = 0; i < live.length && !attempted; i++){
              for (let j = i + 1; j < live.length; j++){
                const k = pairKey(live[i], live[j]);
                if (tried.has(k)) continue;
                tried.add(k);
                attempted = true;
                forcedTry = true;
                pair = [live[i], live[j]];
                break;
              }
            }
            if (!pair) break;
          }

          if (abortNow()) break;

          // Focus/scroll — if user hits Skip, we keep sorting but stop trying to guide attention
          if (!_fastSortAbort_){
            const okFrame = await _scrollPairIntoView_(pair[0], pair[1]);
            if (abortNow()) break;
            if (!okFrame) continue;

            const aRect = _tileElById_(pair[0])?.getBoundingClientRect();
            const bRect = _tileElById_(pair[1])?.getBoundingClientRect();
            if (!aRect || !bRect) continue;

            _setFastFocus_(pair[0], pair[1], null);
            await _sleep_(STEP_PAUSE_MS);
            if (abortNow()) break;
          }

          // Try it (visual OFF so we control visuals; save OFF to keep it smooth)
          const ok = await _fastTryPair_(pair[0], pair[1], {
            shakeOnWrong: false,
            visual: false,
            saveNow: false
          });

          if (abortNow()) break;

          if (ok){
            if (!_fastSortAbort_) await _ghostSlideInto_(pair[0], pair[1]);
            if (abortNow()) break;

            merged += 1;
            didAnything = true;
            progressed = true;

            renderAll();
            setHUD();
            _checkEndGame_();

            if (!_fastSortAbort_){
              _setFastFocus_(pair[1], pair[1], "ok");
              await _sleep_(MERGE_PAUSE_MS);
              if (abortNow()) break;
            }

          } else {
            wrong += 1;
            didAnything = true;

            if (!_fastSortAbort_){
              _setFastFocus_(pair[0], pair[1], "wrong");
              _shakeTileNow_(pair[0]);
              _shakeTileNow_(pair[1]);
              await _sleep_(WRONG_PAUSE_MS);
              if (abortNow()) break;
            }

            if (forcedTry){
              progressed = false;
            }
          }

          showMsg(`Fast sort… ${merged} merged, ${wrong} wrong`, { sticky:true });
          await _sleep_(120);
          if (abortNow()) break;
        }
      }

      if (!didAnything) break;
    }

  } finally {
    _hideSortHud_();

    // clear focus highlights
    document.querySelectorAll(".tile.fs-focus,.tile.fs-wrong").forEach(el => {
      el.classList.remove("fs-focus","fs-wrong");
    });

   if (_fastSortStop_){
  showMsg(`Fast sort stopped: ${merged} merged, ${wrong} wrong.`, { sticky:true });
} else if (_fastSortAbort_){
  showMsg(`Fast sort (sped up): ${merged} merged, ${wrong} wrong.`, { sticky:true });
} else {
  showMsg(`Fast sort: ${merged} merged, ${wrong} wrong.`, { sticky:true });
}

    state.fastSorting = false;

    document.body.classList.remove("ui-locked");
    renderAll();
    setHUD();
    save();
  }
}



function _pulseMistakes_(){
  if (!els.mistakes) return;
  els.mistakes.classList.remove("mistake-pulse");
  void els.mistakes.offsetWidth; // retrigger
  els.mistakes.classList.add("mistake-pulse");
  els.mistakes.addEventListener("animationend", () => {
    els.mistakes.classList.remove("mistake-pulse");
  }, { once:true });
}

async function _fastTryPair_(idA, idB, {  shakeOnWrong = false, visual = true, saveNow = true } = {}){

  const a = getTileById(idA);
  const b = getTileById(idB);
  if (!a || !b || a.removed || b.removed || a.done || b.done) return false;

  // record tries like normal
  if (a.cat !== b.cat){
    const gKey = groupKey(a.cluster || [], b.cluster || []);
    state.triedGroups[gKey] = (state.triedGroups[gKey] || 0) + 1;

    const pKey = pairKey(a.id, b.id);
    state.triedPairs = state.triedPairs || {};
    const prevPair = state.triedPairs[pKey] || 0;
    state.triedPairs[pKey] = prevPair + 1;

    if (prevPair >= 1) showMsg(`Already guessed (x${prevPair + 1}).`);

if (state.mode !== "chill"){
  state.mistakes += 1;
  _pulseMistakes_?.();
}

    if (visual && shakeOnWrong){
  _shakeTileNow_(a.id);
  _shakeTileNow_(b.id);
}
return false;

  }

  // MATCH → reuse your merge logic shape (keeper = second)
  const keeper = b;
  const absorbed = a;

  const finalEmoji = _chooseFinalEmojiForMerge_(keeper, absorbed);

  const kCl = Array.isArray(keeper.cluster) && keeper.cluster.length ? keeper.cluster : [keeper.text || keeper.id];
  const aCl = Array.isArray(absorbed.cluster) && absorbed.cluster.length ? absorbed.cluster : [absorbed.text || absorbed.id];
  keeper.cluster = kCl.concat(aCl);

  const keeperTileKey = _emojiTileKey_(keeper.id);
  const keeperPileKey = _emojiPileKey_(keeper.id);
  const absorbedTileKey = _emojiTileKey_(absorbed.id);
  const absorbedPileKey = _emojiPileKey_(absorbed.id);

  _clearEmojiKey_(absorbedTileKey);
  _clearEmojiKey_(absorbedPileKey);

  if (finalEmoji){
    if (!keeper.done && keeper.cluster.length >= 2 && keeper.cluster.length < GROUP_SIZE){
      _setEmojiByKey_(keeperPileKey, finalEmoji);
      _clearEmojiKey_(keeperTileKey);
    }
  }

  state.score += 1;

  if (keeper.cluster.length === GROUP_SIZE){
    keeper.done = true;
    keeper._celebrate = true;

    // If the completed tile is in the holding zone, return it to the board
    if (keeper.held){
      _unholdTileById_(keeper.id, { preferOrigin:true });
    }

    if (finalEmoji){
      _setEmojiByKey_(_emojiDoneKey_(keeper.cat), finalEmoji);
    }
    _clearEmojiKey_(keeperPileKey);
    _clearEmojiKey_(keeperTileKey);
  }

  removeTile(absorbed);
  state.selectedId = null; // keep consistent
  _clearHintedPair_?.();

 if (visual){
  renderAll();
  setHUD();
  _checkEndGame_();
}

if (saveNow) save();
return true;
}

// --- Play modes menu ---
els.playModesBtn  = document.getElementById("playModesBtn");
els.playModesMenu = document.getElementById("playModesMenu");

function _openPlayModesMenu_(){
  if (!els.playModesMenu) return;
  els.playModesMenu.hidden = false;
}

function _closePlayModesMenu_(){
  if (!els.playModesMenu) return;
  els.playModesMenu.hidden = true;
}

els.playModesBtn?.addEventListener("click", (e) => {
  e.stopPropagation();

  _closeHintMenu_?.();
  _closeShuffleMenu_?.();
  _closeNewGameMenu_?.();

  if (els.playModesMenu.hidden) _openPlayModesMenu_();
  else _closePlayModesMenu_();
});

els.playModesMenu?.addEventListener("click", (e) => e.stopPropagation());
document.addEventListener("click", (e) => {
  // If we clicked inside any menu or a menu button, don't treat it as "outside"
  const inMenu = e.target.closest(".menu, #hintBtn, #shuffleBtn, #playModesBtn, #newGameBtn");
  if (inMenu) return;

  if (!els.hintMenu.hidden){
    _closeHintMenu_();
    if (state.hintMode) _hintCancel_({ silent:true });
  }

  if (els.playModesMenu && !els.playModesMenu.hidden){
    _closePlayModesMenu_();
  }

  // Clear persistent outlines only on true "click-away"
  _clearHintOutline_?.();
});

const _denyTipEl_ = (() => {
  let el = document.getElementById("denyTip");
  if (!el){
    el = document.createElement("div");
    el.id = "denyTip";
    el.className = "denyTip";
    el.hidden = true;
    document.body.appendChild(el);
  }
  return el;
})();

function _showDenyTipAtEvent_(e, text){
  const el = _denyTipEl_;
  el.textContent = `🚫 ${text}`;
  el.hidden = false;

  // Position to the LEFT of the cursor instead of right
  const offsetX = -el.offsetWidth - 12; // negative = left side
  const offsetY = 12;
  
  el.style.left = `${Math.max(8, e.clientX + offsetX)}px`;
  el.style.top  = `${Math.min(window.innerHeight - el.offsetHeight - 8, e.clientY + offsetY)}px`;
}

function _hideDenyTip_(){
  _denyTipEl_.hidden = true;
}


  //NEW GAME HELPERS
 function _closeNewGameMenu_(){
  els.newGameMenu.hidden = true;
  els.newGameBtn.textContent = "New Game ▾";
}
function _openNewGameMenu_(){
  els.newGameMenu.hidden = false;
  els.newGameBtn.textContent = "New Game ▴";
}

els.newGameBtn?.addEventListener("click", (e) => {
  e.stopPropagation();

  _closeShuffleMenu_?.();
  _closeHintMenu_?.();
_closePlayModesMenu_?.()

  if (els.newGameMenu.hidden) _openNewGameMenu_();
  else _closeNewGameMenu_();
});

document.addEventListener("click", () => _closeNewGameMenu_());

let pendingNewGameMode = null;

els.newGameMenu?.addEventListener("click", (e) => {
  e.stopPropagation();

  const modeBtn = e.target.closest("button[data-mode]");
  if (modeBtn){
    pendingNewGameMode = modeBtn.getAttribute("data-mode") || "regular";
    els.newGameMenu.querySelector(".menu-step--choose").hidden = true;
    els.newGameMenu.querySelector(".menu-step--confirm").hidden = false;
    return;
  }

  if (e.target.id === "confirmNewGame"){
    const mode = pendingNewGameMode || "regular";
    pendingNewGameMode = null;

    els.newGameMenu.querySelector(".menu-step--confirm").hidden = true;
    els.newGameMenu.querySelector(".menu-step--choose").hidden = false;

    _closeNewGameMenu_();
    localStorage.removeItem(STORAGE_KEY);
    newGame(mode);
  }
});

let _fastSortAbort_ = false;
  let _fastSortStop_  = false;

let _sortHudEl_ = null;

function _ensureSortHud_(){
  if (_sortHudEl_) return _sortHudEl_;

  const el = document.createElement("div");
  el.id = "sortHud";
  el.className = "sortHud sortHud--inHud";
  el.hidden = true;
  el.innerHTML = `
    <div class="sortHud__msg" id="sortHudMsg">Sorting…</div>
    <button class="sortHud__btn" id="sortHudSkip" type="button">Skip</button>
  `;

  // mount INSIDE the HUD (prefer right side, fallback to hud root)
  const host =
    document.querySelector(".hud__right") ||
    document.querySelector(".hud") ||
    document.body;

  host.appendChild(el);

  el.querySelector("#sortHudSkip").addEventListener("click", () => {
    _fastSortAbort_ = true;
   el.hidden = true;
  document.body.classList.remove("ui-locked");

  // clear any focus/wrong styling immediately
  document.querySelectorAll(".tile.fs-focus,.tile.fs-wrong").forEach(t => {
    t.classList.remove("fs-focus","fs-wrong");
  });

  showMsg("Fast sort: speeding up…", { sticky:true });
});

  _sortHudEl_ = el;
  return el;
}


function _showSortHud_(msg = "Sorting…"){
  const el = _ensureSortHud_();
  const m = el.querySelector("#sortHudMsg");
  if (m) m.textContent = msg;
  el.hidden = false;
}

function _hideSortHud_(){
  const el = _ensureSortHud_();
  el.hidden = true;
}

  //SHUFFLE HELPERS
  // =====================
// SHUFFLE MENU (single source of truth)
// =====================

// 1) DOM refs (ONLY ONCE)
const shuffleBtn  = document.getElementById("shuffleBtn");
const shuffleMenu = document.getElementById("shuffleMenu");

// submenu steps (ONLY ONCE, after shuffleMenu exists)
const shuffleStepMain  = shuffleMenu?.querySelector(".menu-step--shuffleMain");
const shuffleStepWidth = shuffleMenu?.querySelector(".menu-step--boardWidth");

// 2) Step toggles
function _shuffleShowMain_(){
  if (shuffleStepMain)  shuffleStepMain.hidden = false;
  if (shuffleStepWidth) shuffleStepWidth.hidden = true;
}
function _shuffleShowWidth_(){
  if (shuffleStepMain)  shuffleStepMain.hidden = true;
  if (shuffleStepWidth) shuffleStepWidth.hidden = false;
}

// 3) Actions
function _doShuffleAll_(){
  const ordered = _sortedBoard_();
  _shuffleInPlace_(ordered);
_repackByUnits_(ordered, _colsNow_());
  renderAll(); setHUD(); save();
}

function _doShuffleUnmatchedOnly_(){
  const ordered = _sortedActive_();
  const slots = new Array(ordered.length).fill(null);

  const isUnmatched = (t) => !t.done && (t.cluster?.length === 1);

  const unmatched = [];
  for (let i = 0; i < ordered.length; i++){
    const t = ordered[i];
    if (isUnmatched(t)) unmatched.push(t);
    else slots[i] = t;
  }

  _shuffleInPlace_(unmatched);

  let u = 0;
  for (let i = 0; i < slots.length; i++){
    if (slots[i] === null) slots[i] = unmatched[u++];
  }

_repackByUnits_(slots, _colsNow_());
  renderAll(); setHUD(); save();
}

function _doGroupCompleted_(){
  const ordered = _sortedActive_();
  const completed = ordered.filter(t => t.done);
  const rest = ordered.filter(t => !t.done);
_repackByUnits_(completed.concat(rest), _colsNow_());
  renderAll(); setHUD(); save();
}

function _doGroupIncompleteSorted_(){
  const ordered = _sortedActive_();

  // lock completed tiles in-place
  const slots = new Array(ordered.length).fill(null);
  const movable = [];

  for (let i = 0; i < ordered.length; i++){
    const t = ordered[i];
    if (t.done) slots[i] = t;
    else movable.push(t);
  }

  const inProgress = movable
    .filter(t => (t.cluster?.length || 1) > 1)
    .sort((a,b) => (b.cluster?.length || 1) - (a.cluster?.length || 1));

  const unmatched = movable.filter(t => (t.cluster?.length || 1) === 1);

  const fill = inProgress.concat(unmatched);

  let k = 0;
  for (let i = 0; i < slots.length; i++){
    if (slots[i] === null) slots[i] = fill[k++];
  }

_repackByUnits_(slots, _colsNow_());
  renderAll(); setHUD(); save();
}

function _doSnapUndimmed_(){
  const ordered = _sortedActive_();

  // lock completed tiles in-place
  const slots = new Array(ordered.length).fill(null);
  const movable = [];

  for (let i = 0; i < ordered.length; i++){
    const t = ordered[i];
    if (t.done) slots[i] = t;
    else movable.push(t);
  }

  const undimmed = movable.filter(t => !t.dim);
  const dimmed   = movable.filter(t => !!t.dim);

  const sortMovable = (arr) => {
    const inProgress = arr
      .filter(t => (t.cluster?.length || 1) > 1)
      .sort((a,b) => (b.cluster?.length || 1) - (a.cluster?.length || 1));

    const unmatched = arr.filter(t => (t.cluster?.length || 1) === 1);
    return inProgress.concat(unmatched);
  };

  const fill = sortMovable(undimmed).concat(sortMovable(dimmed));

  let k = 0;
  for (let i = 0; i < slots.length; i++){
    if (slots[i] === null) slots[i] = fill[k++];
  }

  _repackByUnits_(slots, _colsNow_());
  renderAll(); setHUD(); save();
}

function _tileUnits_(t){
  const n = (t.cluster?.length || 1);
  if (t.done) return 1.5;
  if (n >= 2) return 1.5;
  return 1;
}

function _repackByUnits_(orderedTiles, capUnits){
  capUnits = Math.max(1, Number(capUnits) || 1);

  let row = 0;
  let col = 0;
  let used = 0;

  orderedTiles.forEach((t) => {
    const u = Math.max(0.1, _tileUnits_(t) || 1);

    if (col > 0 && (used + u) > capUnits){
      row += 1;
      col = 0;
      used = 0;
    }

    t.row = row;
    t.col = col;
    col += 1;
    used += u;
  });
}

  
// 4) Open/close
function _closeShuffleMenu_(){
  if (!shuffleMenu || !shuffleBtn) return;
  shuffleMenu.hidden = true;
  shuffleBtn.textContent = "Shuffle ▾";
}

function _openShuffleMenu_(){
  if (!shuffleMenu || !shuffleBtn) return;
  _shuffleShowMain_();

  // Hide Fast sort when emojis are hidden (no point)
  const fastBtn = shuffleMenu.querySelector('button[data-action="fastSort"]');
  if (fastBtn){
    const wrap = fastBtn.closest(".hint-item");
    if (wrap) wrap.style.display = state.hideEmojis ? "none" : "";
  }

  shuffleMenu.hidden = false;
  shuffleBtn.textContent = "Shuffle ▴";
}

// 5) Menu click handler (ONLY ONCE)
shuffleMenu?.addEventListener("click", (e) => {
  e.stopPropagation();

  // board width choice
  const colsBtn = e.target.closest("button[data-cols]");
  if (colsBtn){
    _setBoardCols_(colsBtn.getAttribute("data-cols"));
    _closeShuffleMenu_();
    return;
  }

  const btn = e.target.closest("button[data-action]");
  if (!btn) return;

  const action = btn.getAttribute("data-action");


  // submenu navigation
  if (action === "boardWidth"){ _shuffleShowWidth_(); return; }
  if (action === "boardWidthBack"){ _shuffleShowMain_(); return; }

  // execute action + close
  _closeShuffleMenu_();

  if (action === "shuffleAll") _doShuffleAll_();
  else if (action === "shuffleUnmatched") _doShuffleUnmatchedOnly_();
  else if (action === "groupCompleted") _doGroupCompleted_();
  else if (action === "groupIncomplete") _doGroupIncompleteSorted_();
  else if (action === "snapUndimmed") _doSnapUndimmed_();
  else if (action === "fastSort") _fastSortEmojis_(); 
});

// 6) Button click
shuffleBtn?.addEventListener("click", (e) => {
  e.stopPropagation();

  _closeHintMenu_?.();
  _closeNewGameMenu_?.();
  _closePlayModesMenu_?.(); // ADD

  if (shuffleMenu?.hidden) _openShuffleMenu_();
  else _closeShuffleMenu_();
});


// 7) Click outside closes
document.addEventListener("click", () => _closeShuffleMenu_());



  //SCORE TOOLIP
  
  
// --- Cute Score tooltip ---
const scoreValueEl = document.getElementById("score");
const scoreWrapEl  = scoreValueEl?.parentElement; // this is the <span>Score: <span id="score">0</span></span>
const tipEl = document.getElementById("scoreTip");

function _showScoreTip_(){
  if (!tipEl || !scoreWrapEl) return;
  const { completed, inProgress } = _categoryCounts_();
  tipEl.textContent = `Completed: ${completed} • In Progress: ${inProgress}`;

  const hud = document.querySelector(".hud");
  const hudR = hud?.getBoundingClientRect?.();
  const r = scoreWrapEl.getBoundingClientRect();

  // fixed in viewport, pinned under HUD
  tipEl.style.left = `${Math.round(r.left)}px`;
  tipEl.style.top  = `${Math.round((hudR ? hudR.bottom : r.bottom) + 8)}px`;

  tipEl.hidden = false;
}


function _hideScoreTip_(){
  if (tipEl) tipEl.hidden = true;
}

scoreWrapEl?.addEventListener("mouseenter", _showScoreTip_);
scoreWrapEl?.addEventListener("mouseleave", _hideScoreTip_);
scoreWrapEl?.addEventListener("focus", _showScoreTip_);
scoreWrapEl?.addEventListener("blur", _hideScoreTip_);
  
  
  //FIREWORKS
let _fwRunning = false;
let _fwRafId = 0;
let _fwOnResize = null;

function stopFireworks(){
  if (!_fwRunning) return;
  _fwRunning = false;

  if (_fwRafId) cancelAnimationFrame(_fwRafId);
  _fwRafId = 0;

  if (_fwOnResize){
    window.removeEventListener("resize", _fwOnResize);
    _fwOnResize = null;
  }

  const canvas = document.getElementById("fireworks");
  if (canvas){
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
}

function startFireworks({ grayscale = false, durationMs = 0 } = {}){
    if (_fwRunning){
    if (_fwStopTimer) { clearTimeout(_fwStopTimer); _fwStopTimer = 0; }
    if (durationMs > 0) _fwStopTimer = setTimeout(stopFireworks, durationMs);
    return;
  }

  _fwRunning = true;


    const canvas = document.getElementById("fireworks");
    const ctx = canvas.getContext("2d");
    let w, h;
    let particles = [];
    let fireworks = [];

    function resize(){
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    }
    _fwOnResize = resize;
window.addEventListener("resize", _fwOnResize);
resize();


    class Firework{
      constructor(){
        if (grayscale){
        const l = 55 + Math.random() * 25;
        this.color = `hsl(0, 0%, ${l}%)`;
      } else {
        if (grayscale){
          const l = 55 + Math.random() * 25;
          this.color = `hsl(0, 0%, ${l}%)`;
        } else {
          this.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
        }
      }
        this.x = Math.random() * w;
        this.y = h;
        this.tx = Math.random() * w;
        this.ty = Math.random() * (h / 2);
        this.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
        this.speed = 2 + Math.random() * 2;
        this.angle = Math.atan2(this.ty - this.y, this.tx - this.x);
        this.vx = Math.cos(this.angle) * this.speed;
        this.vy = Math.sin(this.angle) * this.speed;
        this.exploded = false;
      }
      update(){
        this.x += this.vx;
        this.y += this.vy;
        if (this.vy < 0 && this.y < this.ty) this.explode();
      }
      explode(){
        this.exploded = true;
        for (let i = 0; i < 50; i++){
          particles.push(new Particle(this.x, this.y, this.color));
        }
      }
      draw(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    class Particle{
      constructor(x, y, color){
        this.x = x; this.y = y; this.color = color;
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 3;
        this.vx = Math.cos(angle) * speed;
        this.vy = Math.sin(angle) * speed;
        this.alpha = 1;
        this.decay = Math.random() * 0.015 + 0.005;
      }
      update(){
        this.x += this.vx;
        this.y += this.vy;
        this.vy += 0.05;
        this.alpha -= this.decay;
      }
      draw(){
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.beginPath();
        ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.restore();
      }
    }

    function loop(){
        if (!_fwRunning) return;

      ctx.globalCompositeOperation = "destination-out";
      ctx.fillStyle = "rgba(0,0,0,0.12)";
      ctx.fillRect(0, 0, w, h);
      ctx.globalCompositeOperation = "lighter";

      if (Math.random() < 0.1) fireworks.push(new Firework());

      for (let i = fireworks.length - 1; i >= 0; i--){
        fireworks[i].update();
        fireworks[i].draw();
        if (fireworks[i].exploded) fireworks.splice(i, 1);
      }

      for (let i = particles.length - 1; i >= 0; i--){
        particles[i].update();
        particles[i].draw();
        if (particles[i].alpha <= 0) particles.splice(i, 1);
      }


     _fwRafId = requestAnimationFrame(loop);

    }
    loop();
  }



function _syncElimToggleUI_(){
  if (!els.elimToggle) return;
  els.elimToggle.checked = !!state.eliminationMode;
}

els.elimToggle?.addEventListener("change", () => {
  state.eliminationMode = !!els.elimToggle.checked;

  // remove the pill entirely
  msgSticky = false;
  clearTimeout(msgTimer);
  if (els.msg) els.msg.textContent = "";

  setHUD();
  save();
});


  //WIRING AND BOOT



  // Boot
 // Boot
els.deselect?.addEventListener("click", deselect);

// --- Help overlay (welcome + ?) ---
function _helpOverlayHtml_(){
  return `
    <div class="endOverlay__textInner">
      <h2 style="margin:0 0 8px 0;font-size:18px;">How to play</h2>
      <div style="font-size:13px;line-height:2;color:rgba(0,0,0,.75);">
        <div>Make 30 groups of 30 tiles by combining two at a time.</div>
        <div style="margin-top:6px;"><b>How:</b> Click one tile, then click another you think it belongs with. Then keep going 899 more times.<br />You can add emojis as you go to help group like tiles and quickly sort groups together. Use the <b>holding zone</b> to save tiles you want to keep handy.</div>
        <div style="margin-top:6px;"><b>Stuck?</b> Use the <b>Hints</b> menu.</div>
      </div>
    </div>
  `;
}
function showHelpOverlay(){
  const el = document.getElementById("endOverlay");
  const txt = document.getElementById("endOverlayText");
  if (!el || !txt) return;
  txt.innerHTML = _helpOverlayHtml_();
  el.hidden = false;
}
function hideHelpOverlay(){
  const el = document.getElementById("endOverlay");
  if (el) el.hidden = true;
}

// --- Menu detail tooltips (Play modes / New game / Hints) ---
function _wireMenuDetails_(menuEl){
  if (!menuEl) return;
  const hideAll = () => menuEl.querySelectorAll(".menu-detail").forEach(d => d.hidden = true);

 menuEl.addEventListener("pointerover", (e) => {
  const node = e.target.closest?.("button,[id],label");
  if (!node) return;

  let key =
    node.id ||
    node.dataset?.action ||
    node.dataset?.mode;

  if (!key && node.tagName === "LABEL"){
  key = node.getAttribute("for") || node.htmlFor || "";
  if (!key){
    const child = node.querySelector("input[id],select[id]");
    if (child) key = child.id;
  }
}

  if (!key) return;

  const detail = menuEl.querySelector(`.menu-detail[data-for="${CSS.escape(key)}"]`);
  if (!detail) return;

  hideAll();
  detail.hidden = false;
});


  menuEl.addEventListener("pointerleave", () => hideAll());
  hideAll();
}

_wireMenuDetails_(document.getElementById("hintMenu"));
_wireMenuDetails_(document.getElementById("playModesMenu"));
_wireMenuDetails_(document.getElementById("newGameMenu"));

// Help button
els.helpBtn?.addEventListener("click", () => showHelpOverlay());
els.endOverlayClose?.addEventListener("click", () => hideHelpOverlay());
// Close overlay by clicking outside the card
document.getElementById("endOverlay")?.addEventListener("pointerdown", (e) => {
  if (e.target?.id === "endOverlay") hideHelpOverlay();
});

// ═══════════════════════════════════════════════════════════
//  DRAG & DROP MODE — pointer-based tile dragging & reorder
// ═══════════════════════════════════════════════════════════
{
  let _drag = null;
  let _insertLine = null;
  let _ddHandled = false;
  const DRAG_THRESHOLD = 5;

  function _getInsertLine(){
    if (!_insertLine){
      _insertLine = document.createElement("div");
      _insertLine.className = "drag-insert-line";
      document.body.appendChild(_insertLine);
    }
    return _insertLine;
  }

  function _hideInsertLine(){
    if (_insertLine) _insertLine.style.display = "none";
  }

  function _showInsertLine(x, top, height){
    const el = _getInsertLine();
    el.style.display = "";
    el.style.left = (x - 1.5) + "px";
    el.style.top = top + "px";
    el.style.height = height + "px";
  }

  function _tileUnder(cx, cy){
    const clone = _drag?.clone;
    if (clone) clone.style.visibility = "hidden";
    const el = document.elementFromPoint(cx, cy);
    if (clone) clone.style.visibility = "";
    if (!el) return null;
    return el.closest(".tile[data-id]");
  }

  function _insertInfo(cx, cy){
    const rows = els.board?.querySelectorAll("[data-row]");
    if (!rows) return null;
    for (const rowEl of rows){
      const rr = rowEl.getBoundingClientRect();
      if (cy < rr.top - 5 || cy > rr.bottom + 5) continue;
      const tiles = Array.from(rowEl.querySelectorAll(".tile[data-id]"))
        .filter(t => !t.classList.contains("drag-ghost"));
      if (!tiles.length) continue;
      const rowNum = Number(rowEl.dataset.row);
      for (let i = 0; i < tiles.length; i++){
        const tr = tiles[i].getBoundingClientRect();
        if (cx < tr.left + tr.width / 2){
          return { row: rowNum, index: i, x: tr.left - 5, top: rr.top, height: rr.height, beforeId: tiles[i].dataset.id };
        }
      }
      const last = tiles[tiles.length - 1];
      const lr = last.getBoundingClientRect();
      return { row: rowNum, index: tiles.length, x: lr.right + 5, top: rr.top, height: rr.height, beforeId: null };
    }
    return null;
  }

  // Capture-phase click handler: suppress tile clicks already handled
  // via pointerup, but let emoji picker clicks through
  document.addEventListener("click", (e) => {
    if (!_ddHandled) return;
    _ddHandled = false;
    if (e.target.closest(".tile-emoji-btn")) return;
    e.stopImmediatePropagation();
    e.preventDefault();
  }, true);

  // --- pointerdown on board ---
  els.board?.addEventListener("pointerdown", (e) => {
    if (!state.dragDropMode) return;
    const tileEl = e.target.closest(".tile[data-id]");
    if (!tileEl) return;
    if (e.target.closest(".tile-emoji-btn")) return;
    const tileId = tileEl.dataset.id;
    const t = getTileById(tileId);
    if (!t || t.done || t.removed) return;

    _drag = {
      tileId,
      tileEl,
      startX: e.clientX,
      startY: e.clientY,
      clone: null,
      active: false,
      matchTarget: null,
      insertTarget: null,
      offsetX: 0,
      offsetY: 0
    };
  });

  // Prevent native HTML5 drag during pointer drag
  els.board?.addEventListener("dragstart", (e) => {
    if (_drag) e.preventDefault();
  });

  // --- pointermove on document ---
  document.addEventListener("pointermove", (e) => {
    if (!_drag) return;
    const dx = e.clientX - _drag.startX;
    const dy = e.clientY - _drag.startY;

    if (!_drag.active){
      if (Math.abs(dx) < DRAG_THRESHOLD && Math.abs(dy) < DRAG_THRESHOLD) return;
      _drag.active = true;

      const rect = _drag.tileEl.getBoundingClientRect();
      const clone = _drag.tileEl.cloneNode(true);
      clone.className = "tile tile-drag-clone";
      clone.style.width = rect.width + "px";
      clone.style.height = rect.height + "px";
      clone.style.left = rect.left + "px";
      clone.style.top = rect.top + "px";
      document.body.appendChild(clone);
      _drag.clone = clone;
      _drag.offsetX = e.clientX - rect.left;
      _drag.offsetY = e.clientY - rect.top;

      _drag.tileEl.classList.add("drag-ghost");
    }

    e.preventDefault();

    _drag.clone.style.left = (e.clientX - _drag.offsetX) + "px";
    _drag.clone.style.top = (e.clientY - _drag.offsetY) + "px";

    // Clear previous highlights
    if (_drag.matchTarget){
      _drag.matchTarget.classList.remove("drag-match-hover");
      _drag.matchTarget = null;
    }
    _hideInsertLine();
    _drag.insertTarget = null;

    // Detect what's under the cursor
    const under = _tileUnder(e.clientX, e.clientY);
    if (under && under.dataset.id !== _drag.tileId && !under.classList.contains("drag-ghost")){
      const ut = getTileById(under.dataset.id);
      if (ut && !ut.done){
        under.classList.add("drag-match-hover");
        _drag.matchTarget = under;
      }
    } else {
      const ins = _insertInfo(e.clientX, e.clientY);
      if (ins){
        _showInsertLine(ins.x, ins.top, ins.height);
        _drag.insertTarget = ins;
      }
    }
  });

  // --- pointerup on document ---
  document.addEventListener("pointerup", (e) => {
    if (!_drag) return;
    const wasDragging = _drag.active;
    const dragState = _drag;
    _drag = null;

    // Always clean shared indicators
    if (dragState.matchTarget) dragState.matchTarget.classList.remove("drag-match-hover");
    _hideInsertLine();

    // Suppress the subsequent click event so onTileClick isn't called twice
    _ddHandled = true;
    setTimeout(() => { _ddHandled = false; }, 100);

    if (!wasDragging){
      // Short tap — treat as normal click
      if (dragState.tileEl) dragState.tileEl.classList.remove("drag-ghost");
      onTileClick(dragState.tileId);
      return;
    }

    if (dragState.matchTarget){
      // --- Drop on tile: animate merge slide, then attempt match ---
      const clone = dragState.clone;
      const targetEl = dragState.matchTarget;
      const targetId = targetEl.dataset.id;

      // Un-ghost the original tile
      if (dragState.tileEl) dragState.tileEl.classList.remove("drag-ghost");

      if (clone){
        const targetRect = targetEl.getBoundingClientRect();
        clone.classList.add("merge-slide");
        requestAnimationFrame(() => {
          clone.style.left = targetRect.left + "px";
          clone.style.top = targetRect.top + "px";
          clone.style.transform = "scale(0.7) rotate(0deg)";
          clone.style.opacity = "0.3";
        });

        let done = false;
        const finish = () => {
          if (done) return;
          done = true;
          clone.remove();

          state.selectedId = dragState.tileId;
          setHUD();
          document.querySelectorAll("[data-row]").forEach(el => {
            rerenderRow(Number(el.dataset.row));
          });
          onTileClick(String(targetId));

          // Green glow only on successful match
          const draggedTile = getTileById(dragState.tileId);
          if (draggedTile?.removed){
            setTimeout(() => {
              const keeperEl = _tileElById_(targetId);
              if (keeperEl){
                keeperEl.classList.add("merge-glow");
                keeperEl.addEventListener("animationend",
                  () => keeperEl.classList.remove("merge-glow"), { once: true });
              }
            }, 50);
          }
        };

        clone.addEventListener("transitionend", finish, { once: true });
        setTimeout(finish, 280);
      } else {
        state.selectedId = dragState.tileId;
        setHUD();
        document.querySelectorAll("[data-row]").forEach(el => {
          rerenderRow(Number(el.dataset.row));
        });
        onTileClick(String(targetId));
      }

    } else if (dragState.insertTarget){
      // --- Drop between tiles: reorder ---
      if (dragState.clone) dragState.clone.remove();
      if (dragState.tileEl) dragState.tileEl.classList.remove("drag-ghost");

      _ddReorderTile(dragState.tileId, dragState.insertTarget);

      // Splat animation on the placed tile
      setTimeout(() => {
        const el = _tileElById_(dragState.tileId);
        if (el){
          el.classList.add("drop-splat");
          el.addEventListener("animationend",
            () => el.classList.remove("drop-splat"), { once: true });
        }
      }, 20);

    } else {
      // Dropped in empty space — just cancel
      if (dragState.clone) dragState.clone.remove();
      if (dragState.tileEl) dragState.tileEl.classList.remove("drag-ghost");
    }
  });

  function _ddReorderTile(tileId, insertInfo){
    const t = getTileById(tileId);
    if (!t) return;
    const sourceRow = t.row;
    const targetRow = insertInfo.row;

    const targetRowTiles = state.tiles
      .filter(x => x.row === targetRow && !x.removed && !x.held && String(x.id) !== String(tileId))
      .sort((a, b) => (a.col ?? 0) - (b.col ?? 0));

    let insertIdx = insertInfo.index;
    if (insertInfo.beforeId){
      const bi = targetRowTiles.findIndex(x => String(x.id) === String(insertInfo.beforeId));
      if (bi >= 0) insertIdx = bi;
    } else {
      insertIdx = targetRowTiles.length;
    }

    t.row = targetRow;
    targetRowTiles.splice(insertIdx, 0, t);
    targetRowTiles.forEach((tile, i) => { tile.col = i; });

    if (sourceRow !== targetRow){
      const sourceRowTiles = state.tiles
        .filter(x => x.row === sourceRow && !x.removed && !x.held)
        .sort((a, b) => (a.col ?? 0) - (b.col ?? 0));
      sourceRowTiles.forEach((tile, i) => { tile.col = i; });
      rerenderRow(sourceRow);
    }

    rerenderRow(targetRow);
    save();
  }
}

const loaded = load();
if (loaded){
  state = loaded;
  if (typeof state.dimMode !== "boolean") state.dimMode = false;

  // Ensure triedGroups and triedPairs are objects
  if (!state.triedGroups || Array.isArray(state.triedGroups) || typeof state.triedGroups !== "object") {
    state.triedGroups = {};
  }
  if (!state.triedPairs || Array.isArray(state.triedPairs) || typeof state.triedPairs !== "object") {
    state.triedPairs = {};
  }

  // Ensure every tile has a stable groupId
  state.tiles.forEach(t => {
    if (!t.groupId) t.groupId = t.id;
  });

  state.tiles.forEach((t, i) => {
    if (typeof t.row !== "number" || typeof t.col !== "number"){
      t.row = Math.floor(i / BOARD_SIZE);
      t.col = i % BOARD_SIZE;
    }
  });

  renderAll();
  setHUD();

}else{
  newGame();
}

})();
