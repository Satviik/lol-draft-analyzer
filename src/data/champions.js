// Champion names from Figma design; Data Dragon uses internal IDs (e.g. Cho'Gath -> Chogath)
const FIGMA_CHAMPION_NAMES = [
  'Aatrox', 'Ahri', 'Akali', 'Akshan', 'Alistar', 'Ambessa', 'Amumu', 'Anivia', 'Annie', 'Aphelios', 'Ashe','Aurelion Sol',
  'Aurora' , 'Azir', 'Bard', 'Bel\'Veth', 'Blitzcrank', 'Brand', 'Braum', 'Briar', 'Caitlyn', 'Camille',
  'Cassiopeia', 'Cho\'Gath', 'Corki', 'Darius', 'Diana', 'Draven', 'Dr. Mundo', 'Ekko', 'Elise', 'Evelynn',
  'Ezreal', 'Fiddlesticks', 'Fiora', 'Fizz', 'Galio', 'Gangplank', 'Garen', 'Gnar', 'Gragas', 'Graves',
  'Gwen', 'Hecarim', 'Heimerdinger', 'Hwei', 'Illaoi', 'Irelia', 'Ivern', 'Janna', 'Jarvan IV', 'Jax',
  'Jayce', 'Jhin', 'Jinx','K\'Sante', 'Kai\'Sa', 'Kalista', 'Karma', 'Karthus', 'Kassadin', 'Katarina', 'Kayle',
  'Kayn', 'Kennen', 'Kha\'Zix', 'Kindred', 'Kled', 'Kog\'Maw', 'LeBlanc', 'Lee Sin', 'Leona', 'Lillia',
  'Lissandra', 'Lucian', 'Lulu', 'Lux', 'Malphite', 'Malzahar', 'Maokai', 'Master Yi','Mel','Milio', 'Miss Fortune',
  'Mordekaiser', 'Morgana', 'Naafiri', 'Nami', 'Nasus', 'Nautilus', 'Neeko', 'Nidalee', 'Nilah', 'Nocturne',
  'Nunu & Willump', 'Olaf', 'Orianna', 'Ornn', 'Pantheon', 'Poppy', 'Pyke', 'Qiyana', 'Quinn', 'Rakan',
  'Rammus', 'Rek\'Sai', 'Rell', 'Renata Glasc', 'Renekton', 'Rengar', 'Riven', 'Rumble', 'Ryze', 'Samira',
  'Sejuani', 'Senna', 'Seraphine', 'Sett', 'Shaco', 'Shen', 'Shyvana', 'Singed', 'Sion', 'Sivir',
  'Skarner','Smolder', 'Sona', 'Soraka', 'Swain', 'Sylas', 'Syndra', 'Tahm Kench', 'Taliyah', 'Talon', 'Taric',
  'Teemo', 'Thresh', 'Tristana', 'Trundle', 'Tryndamere', 'Twisted Fate', 'Twitch', 'Udyr', 'Urgot', 'Varus',
  'Vayne', 'Veigar', 'Vel\'Koz', 'Vex', 'Vi', 'Viego', 'Viktor', 'Vladimir', 'Volibear', 'Warwick',
  'Wukong', 'Xayah', 'Xerath', 'Xin Zhao', 'Yasuo', 'Yone', 'Yorick','Yunara', 'Yuumi', 'Zaahen', 'Zac', 'Zed',
  'Zeri', 'Ziggs', 'Zilean', 'Zoe', 'Zyra',
];

// Map display names to Data Dragon image IDs (internal names)
const NAME_TO_DD_ID = {
  'Ambessa': 'Ambessa', // Figma name; DD uses Naafiri or similar
  'Aurora': 'Aurora',
  'Aurelion Sol': 'AurelionSol',
  "Bel'Veth": 'Belveth',
  "Cho'Gath": 'Chogath',
  'Dr. Mundo': 'DrMundo',
  'Jarvan IV': 'JarvanIV',
  "K'sante": "Ksante",
  "Kai'Sa": 'Kaisa',
  "Kha'Zix": 'Khazix',
  "Kog'Maw": 'KogMaw',
  'Lee Sin': 'LeeSin',
  'Master Yi': 'MasterYi',
  'Miss Fortune': 'MissFortune',
  'Nunu & Willump': 'Nunu',
  "Rek'Sai": 'RekSai',
  'Renata Glasc': 'Renata',
  "Vel'Koz": 'Velkoz',
  'Xin Zhao': 'XinZhao',
  'Tahm Kench': 'TahmKench',
  'Twisted Fate': 'TwistedFate',
  'Wukong': 'MonkeyKing',
  'LeBlanc': 'Leblanc',
};

// Champion tags/classes based on Riot classifications
const CHAMPION_TAGS = {
  'Aatrox': ['Fighter', 'Tank'],
  'Ahri': ['Mage', 'Assassin'],
  'Akali': ['Assassin', 'Fighter'],
  'Akshan': ['Marksman', 'Assassin'],
  'Alistar': ['Tank', 'Enchanter'],
  'Ambessa': ['Fighter', 'Tank'],
  'Amumu': ['Tank', 'Mage'],
  'Anivia': ['Mage', 'Support'],
  'Annie': ['Mage', 'Support'],
  'Aphelios': ['Marksman'],
  'Ashe': ['Marksman', 'Support'],
  'Aurelion Sol': ['Mage', 'Support'],
  'Aurora': ['Mage', 'Support'],
  'Azir': ['Mage', 'Marksman'],
  'Bard': ['Support', 'Mage'],
  'Bel\'Veth': ['Fighter', 'Tank'],
  'Blitzcrank': ['Tank', 'Support'],
  'Brand': ['Mage', 'Support'],
  'Braum': ['Tank', 'Support'],
  'Briar': ['Fighter', 'Tank'],
  'Caitlyn': ['Marksman'],
  'Camille': ['Fighter', 'Tank'],
  'Cassiopeia': ['Mage', 'Marksman'],
  'Cho\'Gath': ['Tank', 'Mage'],
  'Corki': ['Marksman', 'Mage'],
  'Darius': ['Fighter', 'Tank'],
  'Diana': ['Assassin', 'Fighter'],
  'Draven': ['Marksman', 'Fighter'],
  'Dr. Mundo': ['Tank', 'Fighter'],
  'Ekko': ['Assassin', 'Fighter'],
  'Elise': ['Mage', 'Assassin'],
  'Evelynn': ['Assassin', 'Mage'],
  'Ezreal': ['Marksman', 'Mage'],
  'Fiddlesticks': ['Mage', 'Support'],
  'Fiora': ['Fighter', 'Assassin'],
  'Fizz': ['Assassin', 'Mage'],
  'Galio': ['Tank', 'Mage'],
  'Gangplank': ['Fighter', 'Marksman'],
  'Garen': ['Fighter', 'Tank'],
  'Gnar': ['Fighter', 'Tank'],
  'Gragas': ['Fighter', 'Mage'],
  'Graves': ['Marksman', 'Fighter'],
  'Gwen': ['Fighter', 'Tank'],
  'Hecarim': ['Fighter', 'Tank'],
  'Heimerdinger': ['Mage', 'Support'],
  'Hwei': ['Mage', 'Support'],
  'Illaoi': ['Fighter', 'Tank'],
  'Irelia': ['Fighter', 'Assassin'],
  'Ivern': ['Support', 'Mage'],
  'Janna': ['Support', 'Enchanter'],
  'Jarvan IV': ['Fighter', 'Tank'],
  'Jax': ['Fighter', 'Assassin'],
  'Jayce': ['Fighter', 'Marksman'],
  'Jhin': ['Marksman', 'Assassin'],
  'Jinx': ['Marksman', 'Mage'],
  'K\'Sante': ['Tank', 'Fighter'],
  'Kai\'Sa': ['Marksman', 'Assassin'],
  'Kalista': ['Marksman', 'Fighter'],
  'Karma': ['Support', 'Mage'],
  'Karthus': ['Mage', 'Support'],
  'Kassadin': ['Assassin', 'Mage'],
  'Katarina': ['Assassin', 'Mage'],
  'Kayle': ['Fighter', 'Mage'],
  'Kayn': ['Assassin', 'Fighter'],
  'Kennen': ['Mage', 'Marksman'],
  'Kha\'Zix': ['Assassin', 'Fighter'],
  'Kindred': ['Marksman', 'Assassin'],
  'Kled': ['Fighter', 'Tank'],
  'Kog\'Maw': ['Marksman', 'Mage'],
  'LeBlanc': ['Assassin', 'Mage'],
  'Lee Sin': ['Fighter', 'Assassin'],
  'Leona': ['Tank', 'Support'],
  'Lillia': ['Fighter', 'Mage'],
  'Lissandra': ['Mage', 'Support'],
  'Lucian': ['Marksman', 'Fighter'],
  'Lulu': ['Support', 'Enchanter'],
  'Lux': ['Mage', 'Support'],
  'Malphite': ['Tank', 'Mage'],
  'Malzahar': ['Mage', 'Support'],
  'Maokai': ['Tank', 'Support'],
  'Master Yi': ['Assassin', 'Fighter'],
  'Mel': ['Marksman', 'Support'],
  'Milio': ['Support', 'Enchanter'],
  'Miss Fortune': ['Marksman', 'Support'],
  'Mordekaiser': ['Fighter', 'Tank'],
  'Morgana': ['Support', 'Mage'],
  'Naafiri': ['Assassin', 'Fighter'],
  'Nami': ['Support', 'Enchanter'],
  'Nasus': ['Fighter', 'Tank'],
  'Nautilus': ['Tank', 'Support'],
  'Neeko': ['Mage', 'Support'],
  'Nidalee': ['Assassin', 'Mage'],
  'Nilah': ['Fighter', 'Marksman'],
  'Nocturne': ['Assassin', 'Fighter'],
  'Nunu & Willump': ['Tank', 'Support'],
  'Olaf': ['Fighter', 'Tank'],
  'Orianna': ['Mage', 'Support'],
  'Ornn': ['Tank', 'Support'],
  'Pantheon': ['Assassin', 'Fighter'],
  'Poppy': ['Tank', 'Fighter'],
  'Pyke': ['Assassin', 'Support'],
  'Qiyana': ['Assassin', 'Mage'],
  'Quinn': ['Marksman', 'Assassin'],
  'Rakan': ['Support', 'Enchanter'],
  'Rammus': ['Tank'],
  'Rek\'Sai': ['Fighter', 'Tank'],
  'Rell': ['Tank', 'Support'],
  'Renata Glasc': ['Support', 'Enchanter'],
  'Renekton': ['Fighter', 'Tank'],
  'Rengar': ['Assassin', 'Fighter'],
  'Riven': ['Fighter', 'Assassin'],
  'Rumble': ['Fighter', 'Mage'],
  'Ryze': ['Mage', 'Marksman'],
  'Samira': ['Marksman', 'Fighter'],
  'Sejuani': ['Tank', 'Mage'],
  'Senna': ['Marksman', 'Support'],
  'Seraphine': ['Mage', 'Support'],
  'Sett': ['Fighter', 'Tank'],
  'Shaco': ['Assassin', 'Support'],
  'Shen': ['Tank', 'Support'],
  'Shyvana': ['Fighter', 'Tank'],
  'Singed': ['Tank', 'Mage'],
  'Sion': ['Tank', 'Fighter'],
  'Sivir': ['Marksman', 'Support'],
  'Skarner': ['Tank', 'Fighter'],
  'Sona': ['Support', 'Enchanter'],
  'Soraka': ['Support', 'Enchanter'],
  'Swain': ['Mage', 'Support'],
  'Sylas': ['Mage', 'Fighter'],
  'Syndra': ['Mage', 'Support'],
  'Tahm Kench': ['Tank', 'Support'],
  'Taliyah': ['Mage', 'Support'],
  'Talon': ['Assassin', 'Fighter'],
  'Taric': ['Tank', 'Support'],
  'Teemo': ['Marksman', 'Mage'],
  'Thresh': ['Support', 'Tank'],
  'Tristana': ['Marksman', 'Fighter'],
  'Trundle': ['Tank', 'Fighter'],
  'Tryndamere': ['Fighter', 'Assassin'],
  'Twisted Fate': ['Mage', 'Marksman'],
  'Twitch': ['Marksman', 'Assassin'],
  'Udyr': ['Fighter', 'Tank'],
  'Urgot': ['Fighter', 'Marksman'],
  'Varus': ['Marksman', 'Mage'],
  'Vayne': ['Marksman', 'Assassin'],
  'Veigar': ['Mage', 'Support'],
  'Vel\'Koz': ['Mage', 'Support'],
  'Vex': ['Mage', 'Assassin'],
  'Vi': ['Fighter', 'Tank'],
  'Viego': ['Assassin', 'Fighter'],
  'Viktor': ['Mage', 'Fighter'],
  'Vladimir': ['Mage', 'Fighter'],
  'Volibear': ['Fighter', 'Tank'],
  'Warwick': ['Fighter', 'Tank'],
  'Wukong': ['Fighter', 'Assassin'],
  'Xayah': ['Marksman', 'Fighter'],
  'Xerath': ['Mage', 'Support'],
  'Xin Zhao': ['Fighter', 'Assassin'],
  'Yasuo': ['Assassin', 'Fighter'],
  'Yone': ['Assassin', 'Fighter'],
  'Yorick': ['Fighter', 'Tank'],
  'Yunara': ['Fighter', 'Mage'],
  'Yuumi': ['Support', 'Enchanter'],
  'Zaahen': ['Fighter', 'Tank'],
  'Zac': ['Tank', 'Fighter'],
  'Zed': ['Assassin', 'Fighter'],
  'Zeri': ['Marksman', 'Fighter'],
  'Ziggs': ['Mage', 'Support'],
  'Zilean': ['Support', 'Mage'],
  'Zoe': ['Mage', 'Assassin'],
  'Zyra': ['Mage', 'Support'],
};

export const DD_VERSION = '16.2.1';
export const IMG_BASE = `https://ddragon.leagueoflegends.com/cdn/${DD_VERSION}/img/champion`;

/**
 * Convert UI display name to backend DataDragon ID
 * Uses NAME_TO_DD_ID mapping for champions with special characters
 * Falls back to removing spaces/apostrophes for champions not in map
 * 
 * Examples:
 *   "Cho'Gath" -> "Chogath"
 *   "Dr. Mundo" -> "DrMundo"
 *   "Kai'Sa" -> "Kaisa"
 *   "Wukong" -> "MonkeyKing"
 *   "Tahm Kench" -> "TahmKench"
 *   "Vel'Koz" -> "Velkoz"
 */
export function normalizeChampionName(name) {
  if (!name) return name;
  
  // First check if we have an exact mapping in NAME_TO_DD_ID
  if (NAME_TO_DD_ID[name]) {
    return NAME_TO_DD_ID[name];
  }
  
  // Fallback: remove spaces and apostrophes, keep original casing
  return name.replace(/\s/g, '').replace(/'/g, '');
}

/**
 * Create reverse mapping from DataDragon ID back to UI display name
 * Used to map backend responses back to display names
 * Examples:
 *   "Chogath" -> "Cho'Gath"
 *   "DrMundo" -> "Dr. Mundo"
 *   "MonkeyKing" -> "Wukong"
 */
const DD_ID_TO_DISPLAY_NAME = Object.entries(NAME_TO_DD_ID).reduce((acc, [displayName, ddId]) => {
  acc[ddId] = displayName;
  return acc;
}, {});

/**
 * Convert backend DataDragon ID back to UI display name
 */
export function getDisplayNameFromDataDragonId(datadragonId) {
  if (!datadragonId) return datadragonId;
  
  // Check reverse mapping
  if (DD_ID_TO_DISPLAY_NAME[datadragonId]) {
    return DD_ID_TO_DISPLAY_NAME[datadragonId];
  }
  
  // For names without mapping, they should match as-is
  return datadragonId;
}

export function getChampionImageUrl(name) {
  const id = NAME_TO_DD_ID[name] || name.replace(/\s/g, '').replace(/'/g, '');
  return `${IMG_BASE}/${id}.png`;
}

export function getChampions() {
  return FIGMA_CHAMPION_NAMES.map((name) => ({
    name,
    image: getChampionImageUrl(name),
    tags: CHAMPION_TAGS[name] || [],
  }));
}
