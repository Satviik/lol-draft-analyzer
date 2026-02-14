// Champion names from Figma design; Data Dragon uses internal IDs (e.g. Cho'Gath -> Chogath)
const FIGMA_CHAMPION_NAMES = [
  'Aatrox', 'Ahri', 'Akali', 'Akshan', 'Alistar', 'Ambessa', 'Amumu', 'Anivia', 'Annie', 'Aphelios', 'Ashe',
  'Aurora', 'Aurelion Sol', 'Azir', 'Bard', 'Bel\'Veth', 'Blitzcrank', 'Brand', 'Braum', 'Briar', 'Caitlyn', 'Camille',
  'Cassiopeia', 'Cho\'Gath', 'Corki', 'Darius', 'Diana', 'Draven', 'Dr. Mundo', 'Ekko', 'Elise', 'Evelynn',
  'Ezreal', 'Fiddlesticks', 'Fiora', 'Fizz', 'Galio', 'Gangplank', 'Garen', 'Gnar', 'Gragas', 'Graves',
  'Gwen', 'Hecarim', 'Heimerdinger', 'Hwei', 'Illaoi', 'Irelia', 'Ivern', 'Janna', 'Jarvan IV', 'Jax',
  'Jayce', 'Jhin', 'Jinx', 'Kai\'Sa', 'Kalista', 'Karma', 'Karthus', 'Kassadin', 'Katarina', 'Kayle',
  'Kayn', 'Kennen', 'Kha\'Zix', 'Kindred', 'Kled', 'Kog\'Maw', 'LeBlanc', 'Lee Sin', 'Leona', 'Lillia',
  'Lissandra', 'Lucian', 'Lulu', 'Lux', 'Malphite', 'Malzahar', 'Maokai', 'Master Yi', 'Milio', 'Miss Fortune',
  'Mordekaiser', 'Morgana', 'Naafiri', 'Nami', 'Nasus', 'Nautilus', 'Neeko', 'Nidalee', 'Nilah', 'Nocturne',
  'Nunu & Willump', 'Olaf', 'Orianna', 'Ornn', 'Pantheon', 'Poppy', 'Pyke', 'Qiyana', 'Quinn', 'Rakan',
  'Rammus', 'Rek\'Sai', 'Rell', 'Renata Glasc', 'Renekton', 'Rengar', 'Riven', 'Rumble', 'Ryze', 'Samira',
  'Sejuani', 'Senna', 'Seraphine', 'Sett', 'Shaco', 'Shen', 'Shyvana', 'Singed', 'Sion', 'Sivir',
  'Skarner', 'Sona', 'Soraka', 'Swain', 'Sylas', 'Syndra', 'Tahm Kench', 'Taliyah', 'Talon', 'Taric',
  'Teemo', 'Thresh', 'Tristana', 'Trundle', 'Tryndamere', 'Twisted Fate', 'Twitch', 'Udyr', 'Urgot', 'Varus',
  'Vayne', 'Veigar', 'Vel\'Koz', 'Vex', 'Vi', 'Viego', 'Viktor', 'Vladimir', 'Volibear', 'Warwick',
  'Wukong', 'Xayah', 'Xerath', 'Xin Zhao', 'Yasuo', 'Yone', 'Yorick', 'Yuumi', 'Zac', 'Zed',
  'Zeri', 'Ziggs', 'Zilean', 'Zoe', 'Zyra',
];

// Map display names to Data Dragon image IDs (internal names)
const NAME_TO_DD_ID = {
  'Ambessa': 'Naafiri', // Figma name; DD uses Naafiri or similar
  'Aurora': 'Aurora',
  'Aurelion Sol': 'AurelionSol',
  "Bel'Veth": 'Belveth',
  "Cho'Gath": 'Chogath',
  'Dr. Mundo': 'DrMundo',
  'Jarvan IV': 'JarvanIV',
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
};

export const DD_VERSION = '14.6.1';
export const IMG_BASE = `https://ddragon.leagueoflegends.com/cdn/${DD_VERSION}/img/champion`;

export function getChampionImageUrl(name) {
  const id = NAME_TO_DD_ID[name] || name.replace(/\s/g, '').replace(/'/g, '');
  return `${IMG_BASE}/${id}.png`;
}

export function getChampions() {
  return FIGMA_CHAMPION_NAMES.map((name) => ({
    name,
    image: getChampionImageUrl(name),
  }));
}
