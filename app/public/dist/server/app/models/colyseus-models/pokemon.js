"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Seismitoad = exports.Palpitoad = exports.Tympole = exports.Metagross = exports.Metang = exports.Beldum = exports.Garchomp = exports.Gabite = exports.Gible = exports.Electivire = exports.Electabuzz = exports.Elekid = exports.Medicham = exports.Meditite = exports.MegaCamerupt = exports.Camerupt = exports.Numel = exports.MegaSteelix = exports.Steelix = exports.Onix = exports.MegaLopunny = exports.Lopunny = exports.Buneary = exports.Tsareena = exports.Steenee = exports.Bounsweet = exports.Kleavor = exports.Scizor = exports.Scyther = exports.MegaAltaria = exports.Altaria = exports.Swablu = exports.Thievul = exports.Nickit = exports.Ribombee = exports.Cutiefly = exports.Crabominable = exports.Crabrawler = exports.Lucario = exports.Riolu = exports.MegaBanette = exports.Banette = exports.Shuppet = exports.MegaManectric = exports.Manectric = exports.Electrike = exports.Egg = exports.Substitute = exports.Ditto = exports.Pokemon = void 0;
exports.Poliwag = exports.Hydreigon = exports.Zweilous = exports.Deino = exports.Torterra = exports.Grotle = exports.Turtwig = exports.Leavanny = exports.Swadloon = exports.Sewaddle = exports.PorygonZ = exports.Porygon2 = exports.Porygon = exports.Chandelure = exports.Lampent = exports.Litwick = exports.Alakazam = exports.Kadabra = exports.Abra = exports.Gengar = exports.Haunter = exports.Gastly = exports.KommoO = exports.HakamoO = exports.JangmoO = exports.Tyranitar = exports.Pupitar = exports.Larvitar = exports.Samurott = exports.Dewott = exports.Oshawott = exports.AegislashBlade = exports.Aegislash = exports.Doublade = exports.Honedge = exports.Slaking = exports.Vigoroth = exports.Slakoth = exports.Roserade = exports.Roselia = exports.Budew = exports.Skeledirge = exports.Crocalor = exports.Fuecoco = exports.Gardevoir = exports.Kirlia = exports.Ralts = exports.Salamence = exports.Shelgon = exports.Bagon = void 0;
exports.Froslass = exports.Glalie = exports.Snorunt = exports.MegaAbomasnow = exports.Abomasnow = exports.Snover = exports.Mamoswine = exports.Piloswine = exports.Swinub = exports.Exploud = exports.Loudred = exports.Whismur = exports.Aggron = exports.Lairon = exports.Aron = exports.Rhyperior = exports.Rhydon = exports.Rhyhorn = exports.Togekiss = exports.Togetic = exports.Togepi = exports.Ludicolo = exports.Lombre = exports.Lotad = exports.HisuiGoodra = exports.HisuiSliggoo = exports.Goodra = exports.Sligoo = exports.Goomy = exports.Dragonite = exports.Dragonair = exports.Dratini = exports.Haxorus = exports.Fraxure = exports.Axew = exports.AlolanMarowak = exports.Marowak = exports.Cubone = exports.Luxray = exports.Luxio = exports.Shinx = exports.Reuniclus = exports.Duosion = exports.Solosis = exports.Magmortar = exports.Magmar = exports.Magby = exports.Poliwrath = exports.Politoed = exports.Poliwhirl = void 0;
exports.Chimchar = exports.Empoleon = exports.Prinplup = exports.Piplup = exports.Machamp = exports.Machoke = exports.Machop = exports.Nidoking = exports.Nidorino = exports.NidoranM = exports.Nidoqueen = exports.Nidorina = exports.NidoranF = exports.Walrein = exports.Sealeo = exports.Spheal = exports.Scolipede = exports.Whirlipede = exports.Venipede = exports.Meganium = exports.Bayleef = exports.Chikorita = exports.Florges = exports.Floette = exports.Flabebe = exports.Kingdra = exports.Seadra = exports.Horsea = exports.Magnezone = exports.Magneton = exports.Magnemite = exports.Dusknoir = exports.Dusclops = exports.Duskull = exports.Wigglytuff = exports.Jigglypuff = exports.Igglybuff = exports.Venusaur = exports.Ivysaur = exports.Bulbasaur = exports.AlolanRaichu = exports.Raichu = exports.Pikachu = exports.Pichu = exports.Flygon = exports.Vibrava = exports.Trapinch = exports.Vanilluxe = exports.Vanillish = exports.Vanillite = void 0;
exports.Beedrill = exports.Kakuna = exports.Weedle = exports.Butterfree = exports.Metapod = exports.Caterpie = exports.Clefable = exports.Clefairy = exports.Cleffa = exports.Ampharos = exports.Flaffy = exports.Mareep = exports.Crobat = exports.Golbat = exports.Zubat = exports.Azumarill = exports.Marill = exports.Azurill = exports.Feraligatr = exports.Croconaw = exports.Totodile = exports.Golem = exports.Graveler = exports.Geodude = exports.Victreebel = exports.Weepinbell = exports.Bellsprout = exports.Blastoise = exports.Wartortle = exports.Squirtle = exports.Golduck = exports.Psyduck = exports.Slowking = exports.Slowbro = exports.Slowpoke = exports.HisuianTyphlosion = exports.Typhlosion = exports.Quilava = exports.Cyndaquil = exports.Sceptile = exports.Grovyle = exports.Treecko = exports.Blaziken = exports.Combusken = exports.Torchic = exports.Swampert = exports.Marshtomp = exports.Mudkip = exports.Infernape = exports.Monferno = void 0;
exports.Heracross = exports.Tauros = exports.Regirock = exports.Solrock = exports.Lunatone = exports.Seviper = exports.Regice = exports.Entei = exports.Raikou = exports.Suicune = exports.Melmetal = exports.Palkia = exports.Dialga = exports.GalarianArticuno = exports.Articuno = exports.Pinsir = exports.GalarianMoltres = exports.Moltres = exports.Yveltal = exports.Miltank = exports.Stantler = exports.Zeraora = exports.GalarianZapdos = exports.Zapdos = exports.OriginGiratina = exports.Giratina = exports.ShadowLugia = exports.Lugia = exports.PirouetteMeloetta = exports.Meloetta = exports.Fearow = exports.Spearow = exports.AlolanRaticate = exports.AlolanRattata = exports.Raticate = exports.Rattata = exports.Gyarados = exports.Magikarp = exports.Charizard = exports.Charmeleon = exports.Charmander = exports.Shiftry = exports.Nuzleaf = exports.Seedot = exports.Jumpluff = exports.Skiploom = exports.Hoppip = exports.Pidgeot = exports.Pidgeotto = exports.Pidgey = void 0;
exports.Mew = exports.Azelf = exports.Mesprit = exports.Uxie = exports.Latios = exports.Latias = exports.Lapras = exports.IronBundle = exports.Delibird = exports.Absol = exports.Spiritomb = exports.RotomDrone = exports.Rotom = exports.Manaphy = exports.Phione = exports.Mawile = exports.Cobalion = exports.Virizion = exports.Terrakion = exports.Keldeo = exports.Enamorus = exports.Tornadus = exports.Thundurus = exports.Landorus = exports.CastformHail = exports.CastformRain = exports.CastformSun = exports.Castform = exports.Kecleon = exports.Farfetchd = exports.Chatot = exports.Volcarona = exports.Larvesta = exports.Darkrai = exports.Volcanion = exports.Glaceon = exports.Sylveon = exports.Leafeon = exports.Umbreon = exports.Espeon = exports.Flareon = exports.Jolteon = exports.Vaporeon = exports.Eevee = exports.Rayquaza = exports.Groudon = exports.Kyogre = exports.Regigigas = exports.Registeel = exports.Zangoose = void 0;
exports.Mienshao = exports.Mienfoo = exports.Bastiodon = exports.Shieldon = exports.Gliscor = exports.Gligar = exports.Archeops = exports.Archen = exports.Musharna = exports.Munna = exports.Wobbuffet = exports.Wynaut = exports.Armaldo = exports.Anorith = exports.Annihilape = exports.Primeape = exports.Mankey = exports.Sunflora = exports.Sunkern = exports.Diancie = exports.Carbink = exports.Aurorus = exports.Amaura = exports.Bellossom = exports.Vileplume = exports.Gloom = exports.Oddish = exports.MegaRayquaza = exports.PrimalKyogre = exports.PrimalGroudon = exports.Heatmor = exports.Torkoal = exports.HooH = exports.Heatran = exports.Cresselia = exports.ShayminSky = exports.Shaymin = exports.DeoxysSpeed = exports.DeoxysAttack = exports.DeoxysDefense = exports.Deoxys = exports.Arceus = exports.Jirachi = exports.Victini = exports.Celebi = exports.Zekrom = exports.Reshiram = exports.Kyurem = exports.Marshadow = exports.Mewtwo = void 0;
exports.Noivern = exports.Noibat = exports.Xatu = exports.Natu = exports.Gourgeist = exports.Pumpkaboo = exports.Cacturne = exports.Cacnea = exports.MegaHoundoom = exports.Houndoom = exports.Houndour = exports.Blacephalon = exports.Stakataka = exports.TapuBulu = exports.TapuFini = exports.Xerneas = exports.TapuLele = exports.TapuKoko = exports.Blissey = exports.Chansey = exports.Happiny = exports.Shedinja = exports.Ninjask = exports.Nincada = exports.Eternatus = exports.Guzzlord = exports.Regidrago = exports.Regieleki = exports.Delphox = exports.Braixen = exports.Fennekin = exports.Hatterene = exports.Hattrem = exports.Hatenna = exports.Genesect = exports.Aerodactyl = exports.Tyrantrum = exports.Tyrunt = exports.Relicanth = exports.Huntail = exports.Gorebyss = exports.Clamperl = exports.Omastar = exports.Omanyte = exports.Kabutops = exports.Kabuto = exports.Rampardos = exports.Cranidos = exports.Cradily = exports.Lileep = void 0;
exports.Sneasler = exports.HisuiSneasel = exports.Weavile = exports.Sneasel = exports.Magcargo = exports.Slugma = exports.HisuiElectrode = exports.HisuiVoltorb = exports.Electrode = exports.Voltorb = exports.Venomoth = exports.Venonat = exports.Salazzle = exports.Salandit = exports.MrMime = exports.MimeJr = exports.Jynx = exports.Smoochum = exports.HisuiArcanine = exports.HisuiGrowlithe = exports.Arcanine = exports.Growlithe = exports.Naganadel = exports.Poipole = exports.Snorlax = exports.Munchlax = exports.Noctowl = exports.Hoothoot = exports.AlolanPersian = exports.AlolanMeowth = exports.Persian = exports.Meowth = exports.Crawdaunt = exports.Corphish = exports.Parasect = exports.Paras = exports.Galvantula = exports.Joltik = exports.Furret = exports.Sentret = exports.Hariyama = exports.Makuhita = exports.GalarianRapidash = exports.GalarianPonyta = exports.Rapidash = exports.Ponyta = exports.Floatzel = exports.Buizel = exports.Cloyster = exports.Shellder = void 0;
exports.Primarina = exports.Brionne = exports.Popplio = exports.AlolanGolem = exports.AlolanGraveler = exports.AlolanGeodude = exports.Cinderace = exports.Raboot = exports.Scorbunny = exports.Staraptor = exports.Staravia = exports.Starly = exports.Serperior = exports.Servine = exports.Snivy = exports.Dragapult = exports.Drakloak = exports.Dreepy = exports.Wailord = exports.Wailmer = exports.Frosmoth = exports.Snom = exports.AlolanNinetales = exports.AlolanVulpix = exports.Ninetales = exports.Vulpix = exports.Starmie = exports.Staryu = exports.Appletun = exports.Applin = exports.Silvally = exports.TypeNull = exports.Granbull = exports.Snubull = exports.Tentacruel = exports.Tentacool = exports.Breloom = exports.Shroomish = exports.Drifblim = exports.Drifloon = exports.Bronzong = exports.Bronzor = exports.Mightyena = exports.Poochyena = exports.Lanturn = exports.Chinchou = exports.Toxicroak = exports.Croagunk = exports.Dewgong = exports.Seel = void 0;
exports.HisuiZoroark = exports.HisuiZorua = exports.Zoroark = exports.Zorua = exports.Decidueye = exports.Dartix = exports.Rowlet = exports.AlolanDugtrio = exports.AlolanDiglett = exports.Dugtrio = exports.Diglett = exports.UnownExclamation = exports.UnownQuestion = exports.UnownZ = exports.UnownY = exports.UnownX = exports.UnownW = exports.UnownV = exports.UnownU = exports.UnownT = exports.UnownS = exports.UnownR = exports.UnownQ = exports.UnownP = exports.UnownO = exports.UnownN = exports.UnownM = exports.UnownL = exports.UnownK = exports.UnownJ = exports.UnownI = exports.UnownH = exports.UnownG = exports.UnownF = exports.UnownE = exports.UnownD = exports.UnownC = exports.UnownB = exports.UnownA = exports.Forretress = exports.Pineco = exports.Swoobat = exports.Woobat = exports.Probopass = exports.Nosepass = exports.Sandslash = exports.Sandshrew = exports.Gothitelle = exports.Gothorita = exports.Gothita = void 0;
exports.Yanma = exports.Clawitzer = exports.Clauncher = exports.Weezing = exports.Koffing = exports.MegaSableye = exports.Sableye = exports.Carnivine = exports.Tropius = exports.Dhelmise = exports.Kartana = exports.Spectrier = exports.Minun = exports.Plusle = exports.Maractus = exports.Tinkaton = exports.Tinkatuff = exports.Tinkatink = exports.Dustox = exports.Cascoon = exports.Beautifly = exports.Silcoon = exports.Wurmple = exports.Emboar = exports.Pignite = exports.Tepig = exports.Shuckle = exports.Vespiqueen = exports.Combee = exports.Sudowoodo = exports.Bonsley = exports.MimikyuBusted = exports.Mimikyu = exports.Hitmonchan = exports.Hitmonlee = exports.Hitmontop = exports.Tyrogue = exports.Chimecho = exports.Chingling = exports.Greninja = exports.Frogadier = exports.Froakie = exports.Sharpedo = exports.Carvanha = exports.Arbok = exports.Ekans = exports.AlolanMuk = exports.AlolanGrimer = exports.Muk = exports.Grimer = void 0;
exports.MausholdThree = exports.Tandemaus = exports.Nihilego = exports.Xurkitree = exports.Overqwil = exports.HisuianQwilfish = exports.Trevenant = exports.Phantump = exports.Linoone = exports.Zigzagoon = exports.Honchkrow = exports.Murkrow = exports.Pelipper = exports.Wingull = exports.Hippodown = exports.Hippopotas = exports.Kricketune = exports.Kricketot = exports.Dodrio = exports.Doduo = exports.Mismagius = exports.Misdreavus = exports.CherrimSunlight = exports.Cherrim = exports.Cherrubi = exports.UltraNecrozma = exports.Necrozma = exports.Volbeat = exports.Illumise = exports.Skuntank = exports.Stunky = exports.Lumineon = exports.Finneon = exports.Scrafty = exports.Scraggy = exports.Whiscash = exports.Barboach = exports.Liepard = exports.Purrloin = exports.Claydol = exports.Baltoy = exports.Spinda = exports.Bibarel = exports.Bidoof = exports.AlolanExeggutor = exports.Exeggutor = exports.Exeggcute = exports.Heliolisk = exports.Helioptile = exports.Yanmega = void 0;
exports.Spinarak = exports.Watchog = exports.Patrat = exports.Sawsbuck = exports.Deerling = exports.Ambipom = exports.Aipom = exports.UrsalunaBloodmoon = exports.Ursaluna = exports.Ursaring = exports.Teddiursa = exports.Kangaskhan = exports.Lickilicky = exports.Lickitung = exports.Araquanid = exports.Dewpider = exports.Milotic = exports.Feebas = exports.Kingambit = exports.Bisharp = exports.Pawniard = exports.Cyclizar = exports.Toxtricity = exports.Toxel = exports.Smeargle = exports.Cursola = exports.GalarCorsola = exports.Corsola = exports.Bruxish = exports.Dracovish = exports.Pheromosa = exports.Stoutland = exports.Herdier = exports.Lillipup = exports.Comfey = exports.Inteleon = exports.Drizzile = exports.Sobble = exports.Gholdengo = exports.Gimmighoul = exports.HoopaUnbound = exports.Hoopa = exports.MiniorKernelGreen = exports.MiniorKernelOrange = exports.MiniorKernelRed = exports.MiniorKernelBlue = exports.Minior = exports.MorpekoHangry = exports.Morpeko = exports.MausholdFour = void 0;
exports.Braviary = exports.Rufflet = exports.GastrodonEastSea = exports.ShellosEastSea = exports.GastrodonWestSea = exports.ShellosWestSea = exports.Vikavolt = exports.Charjabug = exports.Grubbin = exports.Garbodor = exports.Trubbish = exports.Golurk = exports.Golett = exports.Ferrothorn = exports.Ferroseed = exports.Polteageist = exports.Sinistea = exports.Grumpig = exports.Spoink = exports.Donphan = exports.Phanpy = exports.Tangrowth = exports.Tangela = exports.Clodsire = exports.PaldeaWooper = exports.Mothim = exports.WormadamTrash = exports.WormadamSandy = exports.WormadamPlant = exports.BurmyTrash = exports.BurmySandy = exports.BurmyPlant = exports.Kilowattrel = exports.Wattrel = exports.Hypno = exports.Drowzee = exports.Grimmsnarl = exports.Morgrem = exports.Impidimp = exports.Magearna = exports.Lunala = exports.Solgaleo = exports.Cosmoem = exports.Cosmog = exports.Druddigon = exports.LycanrocDay = exports.LycanrocNight = exports.LycanrocDusk = exports.Rockruff = exports.Ariados = void 0;
exports.Darumaka = exports.Drapion = exports.Skorupi = exports.Palossand = exports.Sandygast = exports.Turtonator = exports.Corviknight = exports.Corvisquire = exports.Rookidee = exports.IronHands = exports.OgerponCornerstoneMask = exports.OgerponCornerstone = exports.OgerponHearthflameMask = exports.OgerponHearthflame = exports.OgerponWellspringMask = exports.OgerponWellspring = exports.OgerponTealMask = exports.OgerponTeal = exports.Skarmory = exports.Barbaracle = exports.Binacle = exports.Krookodile = exports.Krokorok = exports.Sandile = exports.Baxcalibur = exports.Arctibax = exports.Frigibax = exports.Sigilyph = exports.Octillery = exports.Remoraid = exports.Mantine = exports.Mantyke = exports.Lilligant = exports.Petilil = exports.Audino = exports.Luvdisc = exports.Seaking = exports.Goldeen = exports.Pyukumuku = exports.Pawmot = exports.Pawmo = exports.Pawmi = exports.WishiwashiSchool = exports.Wishiwashi = exports.Durant = exports.Arrokuda = exports.Cramorant = exports.Stonjourner = exports.Hawlucha = exports.Klefki = void 0;
exports.PokemonClasses = exports.PillarConcrete = exports.PillarIron = exports.PillarWood = exports.Conkeldurr = exports.Gurdurr = exports.Timburr = exports.Malamar = exports.Inkay = exports.Mandibuzz = exports.Vullaby = exports.Talonflame = exports.Fletchinder = exports.Fletchling = exports.Glimmora = exports.Glimmet = exports.Bewear = exports.Stufful = exports.Centiskorch = exports.Sizzlipede = exports.Zygarde100 = exports.Zygarde50 = exports.Zygarde10 = exports.Kingler = exports.Krabby = exports.DarmanitanZen = exports.Darmanitan = void 0;
const schema_1 = require("@colyseus/schema");
const nanoid_1 = require("nanoid");
const evolution_rules_1 = require("../../core/evolution-rules");
const items_1 = require("../../core/items");
const simulation_command_1 = require("../../core/simulation-command");
const types_1 = require("../../types");
const Config_1 = require("../../types/Config");
const Ability_1 = require("../../types/enum/Ability");
const Dungeon_1 = require("../../types/enum/Dungeon");
const Effect_1 = require("../../types/enum/Effect");
const Game_1 = require("../../types/enum/Game");
const Item_1 = require("../../types/enum/Item");
const Passive_1 = require("../../types/enum/Passive");
const Pokemon_1 = require("../../types/enum/Pokemon");
const Synergy_1 = require("../../types/enum/Synergy");
const Weather_1 = require("../../types/enum/Weather");
const array_1 = require("../../utils/array");
const board_1 = require("../../utils/board");
const distance_1 = require("../../utils/distance");
const random_1 = require("../../utils/random");
const schemas_1 = require("../../utils/schemas");
const pokemon_factory_1 = __importDefault(require("../pokemon-factory"));
class Pokemon extends schema_1.Schema {
    constructor(shiny = false, emotion = types_1.Emotion.NORMAL) {
        var _a;
        super();
        this.types = new schema_1.SetSchema();
        this.rarity = Game_1.Rarity.SPECIAL;
        this.evolution = Pokemon_1.Pkm.DEFAULT;
        this.positionX = -1;
        this.positionY = -1;
        this.attackSprite = types_1.AttackSprite.NORMAL_MELEE;
        this.atkSpeed = Config_1.DEFAULT_ATK_SPEED;
        this.def = 1;
        this.speDef = 1;
        this.attackType = Game_1.AttackType.PHYSICAL;
        this.atk = 1;
        this.hp = 10;
        this.range = 1;
        this.stars = 1;
        this.maxPP = 100;
        this.ap = 0;
        this.skill = Ability_1.Ability.DEFAULT;
        this.passive = Passive_1.Passive.NONE;
        this.items = new schema_1.SetSchema();
        this.action = Game_1.PokemonActionState.IDLE;
        this.deathCount = 0;
        this.evolutionRule = new evolution_rules_1.CountEvolutionRule(3);
        this.additional = false;
        this.regional = false;
        this.canHoldItems = true;
        this.canBeBenched = true;
        this.canBeSold = true;
        this.tm = null;
        const name = (_a = Object.entries(exports.PokemonClasses).find(([name, pokemonClass]) => pokemonClass === this.constructor)) === null || _a === void 0 ? void 0 : _a[0];
        this.id = (0, nanoid_1.nanoid)();
        this.name = name;
        this.index = Pokemon_1.PkmIndex[name];
        this.shiny = shiny;
        this.emotion = emotion;
    }
    get final() {
        return (this.evolution === Pokemon_1.Pkm.DEFAULT ||
            (this.evolutionRule instanceof evolution_rules_1.CountEvolutionRule === false &&
                this.passive !== Passive_1.Passive.CORSOLA));
    }
    get canBePlaced() {
        return ![Pokemon_1.Pkm.EGG].includes(this.name);
    }
    get canBeCloned() {
        return (this.rarity !== Game_1.Rarity.UNIQUE &&
            this.rarity !== Game_1.Rarity.LEGENDARY &&
            this.rarity !== Game_1.Rarity.HATCH &&
            this.passive !== Passive_1.Passive.INANIMATE &&
            ![Pokemon_1.Pkm.DITTO, Pokemon_1.Pkm.EGG].includes(this.name));
    }
    get doesCountForTeamSize() {
        return this.passive !== Passive_1.Passive.INANIMATE;
    }
    get luck() {
        let luck = 0;
        if (this.items.has(Item_1.Item.LUCKY_EGG))
            luck += 50;
        return luck;
    }
    onChangePosition(x, y, player) {
    }
    onAcquired(player) {
    }
    afterSell(player) {
    }
    afterEvolve(params) {
    }
    beforeSimulationStart(params) {
    }
    afterSimulationStart(params) {
    }
    onSpawn(params) {
    }
    isInRegion(map, state) {
        var _a;
        const regionSynergies = (_a = Dungeon_1.DungeonDetails[map]) === null || _a === void 0 ? void 0 : _a.synergies;
        const basePkm = Pokemon_1.PkmFamily[this.name];
        const variantOf = Object.keys(Pokemon_1.PkmRegionalVariants).find((p) => Pokemon_1.PkmRegionalVariants[p].includes(basePkm));
        const isVariantOfAdditional = variantOf && new exports.PokemonClasses[variantOf]().additional;
        return (regionSynergies.some((s) => this.types.has(s)) &&
            (!isVariantOfAdditional ||
                !state ||
                state.additionalPokemons.includes(variantOf)));
    }
    removeItem(item) {
        this.items.delete(item);
        (0, items_1.onItemRemoved)(item, this);
    }
}
exports.Pokemon = Pokemon;
__decorate([
    (0, schema_1.type)("string")
], Pokemon.prototype, "id", void 0);
__decorate([
    (0, schema_1.type)("string")
], Pokemon.prototype, "name", void 0);
__decorate([
    (0, schema_1.type)({ set: "string" })
], Pokemon.prototype, "types", void 0);
__decorate([
    (0, schema_1.type)("string")
], Pokemon.prototype, "rarity", void 0);
__decorate([
    (0, schema_1.type)("string")
], Pokemon.prototype, "index", void 0);
__decorate([
    (0, schema_1.type)("string")
], Pokemon.prototype, "evolution", void 0);
__decorate([
    (0, schema_1.type)("int8")
], Pokemon.prototype, "positionX", void 0);
__decorate([
    (0, schema_1.type)("int8")
], Pokemon.prototype, "positionY", void 0);
__decorate([
    (0, schema_1.type)("string")
], Pokemon.prototype, "attackSprite", void 0);
__decorate([
    (0, schema_1.type)("float32")
], Pokemon.prototype, "atkSpeed", void 0);
__decorate([
    (0, schema_1.type)("uint8")
], Pokemon.prototype, "def", void 0);
__decorate([
    (0, schema_1.type)("uint8")
], Pokemon.prototype, "speDef", void 0);
__decorate([
    (0, schema_1.type)("uint8")
], Pokemon.prototype, "attackType", void 0);
__decorate([
    (0, schema_1.type)("uint16")
], Pokemon.prototype, "atk", void 0);
__decorate([
    (0, schema_1.type)("uint16")
], Pokemon.prototype, "hp", void 0);
__decorate([
    (0, schema_1.type)("uint8")
], Pokemon.prototype, "range", void 0);
__decorate([
    (0, schema_1.type)("uint8")
], Pokemon.prototype, "stars", void 0);
__decorate([
    (0, schema_1.type)("uint8")
], Pokemon.prototype, "maxPP", void 0);
__decorate([
    (0, schema_1.type)("uint16")
], Pokemon.prototype, "ap", void 0);
__decorate([
    (0, schema_1.type)("string")
], Pokemon.prototype, "skill", void 0);
__decorate([
    (0, schema_1.type)("string")
], Pokemon.prototype, "passive", void 0);
__decorate([
    (0, schema_1.type)({ set: "string" })
], Pokemon.prototype, "items", void 0);
__decorate([
    (0, schema_1.type)("boolean")
], Pokemon.prototype, "shiny", void 0);
__decorate([
    (0, schema_1.type)("string")
], Pokemon.prototype, "emotion", void 0);
__decorate([
    (0, schema_1.type)("string")
], Pokemon.prototype, "action", void 0);
class Ditto extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.AMORPHOUS]);
        this.rarity = Game_1.Rarity.SPECIAL;
        this.stars = 1;
        this.hp = 50;
        this.atk = 5;
        this.def = 1;
        this.speDef = 1;
        this.maxPP = 50;
        this.range = 1;
        this.skill = Ability_1.Ability.TRANSFORM;
        this.passive = Passive_1.Passive.DITTO;
        this.attackSprite = types_1.AttackSprite.NORMAL_MELEE;
    }
}
exports.Ditto = Ditto;
class Substitute extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([]);
        this.rarity = Game_1.Rarity.SPECIAL;
        this.stars = 1;
        this.hp = 80;
        this.atk = 1;
        this.def = 1;
        this.speDef = 1;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.DEFAULT;
        this.attackSprite = types_1.AttackSprite.NORMAL_MELEE;
    }
}
exports.Substitute = Substitute;
class Egg extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([]);
        this.rarity = Game_1.Rarity.SPECIAL;
        this.stars = 1;
        this.hp = 30;
        this.atk = 1;
        this.def = 1;
        this.speDef = 1;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.DEFAULT;
        this.passive = Passive_1.Passive.EGG;
        this.attackSprite = types_1.AttackSprite.NORMAL_MELEE;
        this.evolutionRule = new evolution_rules_1.HatchEvolutionRule(Config_1.EvolutionTime.EGG_HATCH);
        this.canHoldItems = false;
    }
}
exports.Egg = Egg;
class Electrike extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.ELECTRIC, Synergy_1.Synergy.FIELD]);
        this.rarity = Game_1.Rarity.ULTRA;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.MANECTRIC;
        this.hp = 120;
        this.atk = 15;
        this.def = 5;
        this.speDef = 5;
        this.maxPP = 65;
        this.range = 1;
        this.skill = Ability_1.Ability.VOLT_SWITCH;
        this.attackSprite = types_1.AttackSprite.ELECTRIC_MELEE;
    }
}
exports.Electrike = Electrike;
class Manectric extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.ELECTRIC, Synergy_1.Synergy.FIELD]);
        this.rarity = Game_1.Rarity.ULTRA;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.MEGA_MANECTRIC;
        this.hp = 210;
        this.atk = 30;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 65;
        this.range = 1;
        this.skill = Ability_1.Ability.VOLT_SWITCH;
        this.attackSprite = types_1.AttackSprite.ELECTRIC_MELEE;
    }
}
exports.Manectric = Manectric;
class MegaManectric extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.ELECTRIC, Synergy_1.Synergy.FIELD]);
        this.rarity = Game_1.Rarity.ULTRA;
        this.stars = 3;
        this.hp = 300;
        this.atk = 48;
        this.def = 7;
        this.speDef = 7;
        this.maxPP = 65;
        this.range = 1;
        this.skill = Ability_1.Ability.VOLT_SWITCH;
        this.attackSprite = types_1.AttackSprite.ELECTRIC_MELEE;
    }
}
exports.MegaManectric = MegaManectric;
class Shuppet extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GHOST, Synergy_1.Synergy.ARTIFICIAL]);
        this.rarity = Game_1.Rarity.ULTRA;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.BANETTE;
        this.hp = 120;
        this.atk = 10;
        this.def = 3;
        this.speDef = 4;
        this.maxPP = 120;
        this.range = 1;
        this.skill = Ability_1.Ability.SHADOW_CLONE;
        this.attackSprite = types_1.AttackSprite.DRAGON_MELEE;
    }
}
exports.Shuppet = Shuppet;
class Banette extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GHOST, Synergy_1.Synergy.ARTIFICIAL]);
        this.rarity = Game_1.Rarity.ULTRA;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.MEGA_BANETTE;
        this.hp = 200;
        this.atk = 20;
        this.def = 4;
        this.speDef = 5;
        this.maxPP = 120;
        this.range = 1;
        this.skill = Ability_1.Ability.SHADOW_CLONE;
        this.attackSprite = types_1.AttackSprite.DRAGON_MELEE;
    }
}
exports.Banette = Banette;
class MegaBanette extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GHOST, Synergy_1.Synergy.ARTIFICIAL]);
        this.rarity = Game_1.Rarity.ULTRA;
        this.stars = 3;
        this.hp = 300;
        this.atk = 30;
        this.def = 5;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.SHADOW_CLONE;
        this.attackSprite = types_1.AttackSprite.DRAGON_MELEE;
    }
}
exports.MegaBanette = MegaBanette;
class Riolu extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.FIGHTING,
            Synergy_1.Synergy.STEEL,
            Synergy_1.Synergy.BABY
        ]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.LUCARIO;
        this.hp = 65;
        this.atk = 7;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 80;
        this.range = 2;
        this.skill = Ability_1.Ability.AURASPHERE;
        this.attackSprite = types_1.AttackSprite.FIGHTING_RANGE;
        this.additional = true;
    }
}
exports.Riolu = Riolu;
class Lucario extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FIGHTING, Synergy_1.Synergy.STEEL]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.hp = 170;
        this.atk = 20;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 80;
        this.range = 2;
        this.skill = Ability_1.Ability.AURASPHERE;
        this.attackSprite = types_1.AttackSprite.FIGHTING_RANGE;
        this.additional = true;
    }
}
exports.Lucario = Lucario;
class Crabrawler extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.ICE,
            Synergy_1.Synergy.FIGHTING,
            Synergy_1.Synergy.MONSTER
        ]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.CRABOMINABLE;
        this.hp = 90;
        this.atk = 9;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.ICE_HAMMER;
        this.attackSprite = types_1.AttackSprite.FIGHTING_MELEE;
        this.additional = true;
        this.passive = Passive_1.Passive.BERRY_EATER;
    }
}
exports.Crabrawler = Crabrawler;
class Crabominable extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.ICE,
            Synergy_1.Synergy.FIGHTING,
            Synergy_1.Synergy.MONSTER
        ]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.hp = 220;
        this.atk = 22;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.ICE_HAMMER;
        this.attackSprite = types_1.AttackSprite.FIGHTING_MELEE;
        this.additional = true;
        this.passive = Passive_1.Passive.BERRY_EATER;
    }
}
exports.Crabominable = Crabominable;
class Cutiefly extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.BUG, Synergy_1.Synergy.FAIRY, Synergy_1.Synergy.FLORA]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.RIBOMBEE;
        this.hp = 75;
        this.atk = 6;
        this.def = 1;
        this.speDef = 1;
        this.maxPP = 40;
        this.range = 2;
        this.skill = Ability_1.Ability.POLLEN_PUFF;
        this.attackSprite = types_1.AttackSprite.BUG_RANGE;
        this.regional = true;
    }
}
exports.Cutiefly = Cutiefly;
class Ribombee extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.BUG, Synergy_1.Synergy.FAIRY, Synergy_1.Synergy.FLORA]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.hp = 170;
        this.atk = 12;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 40;
        this.range = 2;
        this.skill = Ability_1.Ability.POLLEN_PUFF;
        this.attackSprite = types_1.AttackSprite.BUG_RANGE;
        this.regional = true;
    }
}
exports.Ribombee = Ribombee;
class Nickit extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FIELD, Synergy_1.Synergy.DARK]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.THIEVUL;
        this.hp = 75;
        this.atk = 8;
        this.def = 1;
        this.speDef = 1;
        this.maxPP = 50;
        this.range = 2;
        this.skill = Ability_1.Ability.THIEF;
        this.attackSprite = types_1.AttackSprite.NORMAL_MELEE;
        this.additional = true;
    }
}
exports.Nickit = Nickit;
class Thievul extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FIELD, Synergy_1.Synergy.DARK]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.hp = 170;
        this.atk = 19;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 50;
        this.range = 2;
        this.skill = Ability_1.Ability.THIEF;
        this.attackSprite = types_1.AttackSprite.NORMAL_MELEE;
        this.additional = true;
    }
}
exports.Thievul = Thievul;
class Swablu extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FAIRY, Synergy_1.Synergy.SOUND]);
        this.rarity = Game_1.Rarity.ULTRA;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.ALTARIA;
        this.hp = 120;
        this.atk = 12;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.HYPER_VOICE;
        this.attackSprite = types_1.AttackSprite.DRAGON_RANGE;
    }
}
exports.Swablu = Swablu;
class Altaria extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DRAGON, Synergy_1.Synergy.FAIRY, Synergy_1.Synergy.SOUND]);
        this.rarity = Game_1.Rarity.ULTRA;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.MEGA_ALTARIA;
        this.hp = 190;
        this.atk = 25;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.HYPER_VOICE;
        this.attackSprite = types_1.AttackSprite.DRAGON_RANGE;
    }
}
exports.Altaria = Altaria;
class MegaAltaria extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DRAGON, Synergy_1.Synergy.FAIRY, Synergy_1.Synergy.SOUND]);
        this.rarity = Game_1.Rarity.ULTRA;
        this.stars = 3;
        this.hp = 300;
        this.atk = 42;
        this.def = 5;
        this.speDef = 5;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.HYPER_VOICE;
        this.attackSprite = types_1.AttackSprite.DRAGON_RANGE;
    }
}
exports.MegaAltaria = MegaAltaria;
class Scyther extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.BUG, Synergy_1.Synergy.FLYING]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 170;
        this.atk = 19;
        this.def = 5;
        this.speDef = 5;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.X_SCISSOR;
        this.attackSprite = types_1.AttackSprite.NORMAL_MELEE;
        this.passive = Passive_1.Passive.SCYTHER;
        this.evolutionRule = new evolution_rules_1.ItemEvolutionRule([Item_1.Item.METAL_COAT, Item_1.Item.BLACK_AUGURITE], (pokemon, player, item) => {
            if (item === Item_1.Item.METAL_COAT) {
                return Pokemon_1.Pkm.SCIZOR;
            }
            else {
                return Pokemon_1.Pkm.KLEAVOR;
            }
        });
    }
}
exports.Scyther = Scyther;
class Scizor extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.BUG, Synergy_1.Synergy.FLYING, Synergy_1.Synergy.STEEL]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 4;
        this.hp = 170;
        this.atk = 25;
        this.def = 7;
        this.speDef = 5;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.X_SCISSOR;
        this.attackSprite = types_1.AttackSprite.NORMAL_MELEE;
    }
}
exports.Scizor = Scizor;
class Kleavor extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.BUG, Synergy_1.Synergy.ROCK, Synergy_1.Synergy.DARK]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 4;
        this.hp = 170;
        this.atk = 25;
        this.def = 7;
        this.speDef = 5;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.STONE_AXE;
        this.attackSprite = types_1.AttackSprite.ROCK_MELEE;
    }
}
exports.Kleavor = Kleavor;
class Bounsweet extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GRASS, Synergy_1.Synergy.FIGHTING]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.STEENEE;
        this.hp = 100;
        this.atk = 10;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 120;
        this.range = 1;
        this.skill = Ability_1.Ability.HIGH_JUMP_KICK;
        this.attackSprite = types_1.AttackSprite.FIGHTING_MELEE;
    }
}
exports.Bounsweet = Bounsweet;
class Steenee extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GRASS, Synergy_1.Synergy.FIGHTING]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.TSAREENA;
        this.hp = 180;
        this.atk = 20;
        this.def = 5;
        this.speDef = 5;
        this.maxPP = 120;
        this.range = 1;
        this.skill = Ability_1.Ability.HIGH_JUMP_KICK;
        this.attackSprite = types_1.AttackSprite.FIGHTING_MELEE;
    }
}
exports.Steenee = Steenee;
class Tsareena extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GRASS, Synergy_1.Synergy.FIGHTING]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 3;
        this.hp = 360;
        this.atk = 34;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 120;
        this.range = 1;
        this.skill = Ability_1.Ability.HIGH_JUMP_KICK;
        this.attackSprite = types_1.AttackSprite.FIGHTING_MELEE;
    }
}
exports.Tsareena = Tsareena;
class Buneary extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.NORMAL, Synergy_1.Synergy.FIGHTING]);
        this.rarity = Game_1.Rarity.ULTRA;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.LOPUNNY;
        this.hp = 130;
        this.atk = 15;
        this.def = 5;
        this.speDef = 5;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.HIGH_JUMP_KICK;
        this.attackSprite = types_1.AttackSprite.FIGHTING_MELEE;
    }
}
exports.Buneary = Buneary;
class Lopunny extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.NORMAL, Synergy_1.Synergy.FIGHTING]);
        this.rarity = Game_1.Rarity.ULTRA;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.MEGA_LOPUNNY;
        this.hp = 250;
        this.atk = 28;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.HIGH_JUMP_KICK;
        this.attackSprite = types_1.AttackSprite.FIGHTING_MELEE;
    }
}
exports.Lopunny = Lopunny;
class MegaLopunny extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.NORMAL, Synergy_1.Synergy.FIGHTING]);
        this.rarity = Game_1.Rarity.ULTRA;
        this.stars = 3;
        this.hp = 350;
        this.atk = 50;
        this.def = 8;
        this.speDef = 8;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.HIGH_JUMP_KICK;
        this.attackSprite = types_1.AttackSprite.FIGHTING_MELEE;
    }
}
exports.MegaLopunny = MegaLopunny;
class Onix extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.ROCK, Synergy_1.Synergy.GROUND]);
        this.rarity = Game_1.Rarity.ULTRA;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.STEELIX;
        this.hp = 200;
        this.atk = 9;
        this.def = 10;
        this.speDef = 5;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.SPIKE_ARMOR;
        this.attackSprite = types_1.AttackSprite.ROCK_MELEE;
    }
}
exports.Onix = Onix;
class Steelix extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.ROCK, Synergy_1.Synergy.GROUND, Synergy_1.Synergy.STEEL]);
        this.rarity = Game_1.Rarity.ULTRA;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.MEGA_STEELIX;
        this.hp = 250;
        this.atk = 14;
        this.def = 20;
        this.speDef = 5;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.SPIKE_ARMOR;
        this.attackSprite = types_1.AttackSprite.ROCK_MELEE;
    }
}
exports.Steelix = Steelix;
class MegaSteelix extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.ROCK, Synergy_1.Synergy.GROUND, Synergy_1.Synergy.STEEL]);
        this.rarity = Game_1.Rarity.ULTRA;
        this.stars = 3;
        this.hp = 350;
        this.atk = 20;
        this.def = 30;
        this.speDef = 15;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.SPIKE_ARMOR;
        this.attackSprite = types_1.AttackSprite.ROCK_MELEE;
    }
}
exports.MegaSteelix = MegaSteelix;
class Numel extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FIRE, Synergy_1.Synergy.FIELD, Synergy_1.Synergy.GROUND]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.CAMERUPT;
        this.hp = 120;
        this.atk = 9;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 120;
        this.range = 1;
        this.skill = Ability_1.Ability.ERUPTION;
        this.attackSprite = types_1.AttackSprite.FIRE_MELEE;
        this.regional = true;
    }
}
exports.Numel = Numel;
class Camerupt extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FIRE, Synergy_1.Synergy.FIELD, Synergy_1.Synergy.GROUND]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.MEGA_CAMERUPT;
        this.hp = 210;
        this.atk = 14;
        this.def = 7;
        this.speDef = 7;
        this.maxPP = 120;
        this.range = 1;
        this.skill = Ability_1.Ability.ERUPTION;
        this.attackSprite = types_1.AttackSprite.FIRE_MELEE;
        this.regional = true;
    }
}
exports.Camerupt = Camerupt;
class MegaCamerupt extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FIRE, Synergy_1.Synergy.FIELD, Synergy_1.Synergy.GROUND]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 3;
        this.hp = 330;
        this.atk = 22;
        this.def = 10;
        this.speDef = 10;
        this.maxPP = 120;
        this.range = 1;
        this.skill = Ability_1.Ability.DEFAULT;
        this.attackSprite = types_1.AttackSprite.FIRE_MELEE;
        this.regional = true;
    }
}
exports.MegaCamerupt = MegaCamerupt;
class Meditite extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.PSYCHIC,
            Synergy_1.Synergy.HUMAN,
            Synergy_1.Synergy.FIGHTING
        ]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.MEDICHAM;
        this.hp = 80;
        this.atk = 9;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 60;
        this.range = 2;
        this.skill = Ability_1.Ability.CONFUSION;
        this.attackSprite = types_1.AttackSprite.PSYCHIC_RANGE;
        this.additional = true;
    }
}
exports.Meditite = Meditite;
class Medicham extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.PSYCHIC,
            Synergy_1.Synergy.HUMAN,
            Synergy_1.Synergy.FIGHTING
        ]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.hp = 160;
        this.atk = 17;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 60;
        this.range = 2;
        this.skill = Ability_1.Ability.CONFUSION;
        this.attackSprite = types_1.AttackSprite.PSYCHIC_RANGE;
        this.additional = true;
    }
}
exports.Medicham = Medicham;
class Elekid extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.ELECTRIC,
            Synergy_1.Synergy.ARTIFICIAL,
            Synergy_1.Synergy.BABY
        ]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.ELECTABUZZ;
        this.hp = 110;
        this.atk = 5;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 90;
        this.range = 1;
        this.skill = Ability_1.Ability.DISCHARGE;
        this.attackSprite = types_1.AttackSprite.ELECTRIC_MELEE;
    }
}
exports.Elekid = Elekid;
class Electabuzz extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.ELECTRIC,
            Synergy_1.Synergy.ARTIFICIAL,
            Synergy_1.Synergy.LIGHT
        ]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.ELECTIVIRE;
        this.hp = 180;
        this.atk = 16;
        this.def = 5;
        this.speDef = 5;
        this.maxPP = 90;
        this.range = 1;
        this.skill = Ability_1.Ability.DISCHARGE;
        this.attackSprite = types_1.AttackSprite.ELECTRIC_MELEE;
    }
}
exports.Electabuzz = Electabuzz;
class Electivire extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.ELECTRIC,
            Synergy_1.Synergy.ARTIFICIAL,
            Synergy_1.Synergy.LIGHT
        ]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 3;
        this.hp = 380;
        this.atk = 28;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 90;
        this.range = 1;
        this.skill = Ability_1.Ability.DISCHARGE;
        this.attackSprite = types_1.AttackSprite.ELECTRIC_MELEE;
    }
}
exports.Electivire = Electivire;
class Gible extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.DRAGON,
            Synergy_1.Synergy.GROUND,
            Synergy_1.Synergy.MONSTER
        ]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.GABITE;
        this.hp = 100;
        this.atk = 6;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.DRAGON_BREATH;
        this.attackSprite = types_1.AttackSprite.DRAGON_MELEE;
    }
}
exports.Gible = Gible;
class Gabite extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.DRAGON,
            Synergy_1.Synergy.GROUND,
            Synergy_1.Synergy.MONSTER
        ]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.GARCHOMP;
        this.hp = 160;
        this.atk = 14;
        this.def = 5;
        this.speDef = 5;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.DRAGON_BREATH;
        this.attackSprite = types_1.AttackSprite.DRAGON_MELEE;
    }
}
exports.Gabite = Gabite;
class Garchomp extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.DRAGON,
            Synergy_1.Synergy.GROUND,
            Synergy_1.Synergy.MONSTER
        ]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 3;
        this.hp = 240;
        this.atk = 32;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.DRAGON_BREATH;
        this.attackSprite = types_1.AttackSprite.DRAGON_MELEE;
    }
}
exports.Garchomp = Garchomp;
class Beldum extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.PSYCHIC,
            Synergy_1.Synergy.STEEL,
            Synergy_1.Synergy.ARTIFICIAL
        ]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.METANG;
        this.hp = 110;
        this.atk = 5;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.METEOR_MASH;
        this.attackSprite = types_1.AttackSprite.PSYCHIC_MELEE;
    }
}
exports.Beldum = Beldum;
class Metang extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.PSYCHIC,
            Synergy_1.Synergy.STEEL,
            Synergy_1.Synergy.ARTIFICIAL
        ]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.METAGROSS;
        this.hp = 190;
        this.atk = 9;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.METEOR_MASH;
        this.attackSprite = types_1.AttackSprite.PSYCHIC_MELEE;
    }
}
exports.Metang = Metang;
class Metagross extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.PSYCHIC,
            Synergy_1.Synergy.STEEL,
            Synergy_1.Synergy.ARTIFICIAL
        ]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 3;
        this.hp = 320;
        this.atk = 20;
        this.def = 8;
        this.speDef = 8;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.METEOR_MASH;
        this.attackSprite = types_1.AttackSprite.PSYCHIC_MELEE;
    }
}
exports.Metagross = Metagross;
class Tympole extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.AQUATIC,
            Synergy_1.Synergy.GROUND,
            Synergy_1.Synergy.SOUND
        ]);
        this.rarity = Game_1.Rarity.HATCH;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.PALPITOAD;
        this.evolutionRule = new evolution_rules_1.HatchEvolutionRule(Config_1.EvolutionTime.EVOLVE_HATCH);
        this.hp = 80;
        this.atk = 7;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 70;
        this.range = 1;
        this.skill = Ability_1.Ability.SLUDGE_WAVE;
        this.passive = Passive_1.Passive.HATCH;
        this.attackSprite = types_1.AttackSprite.WATER_MELEE;
    }
}
exports.Tympole = Tympole;
class Palpitoad extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.AQUATIC,
            Synergy_1.Synergy.GROUND,
            Synergy_1.Synergy.SOUND
        ]);
        this.rarity = Game_1.Rarity.HATCH;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.SEISMITOAD;
        this.evolutionRule = new evolution_rules_1.HatchEvolutionRule(Config_1.EvolutionTime.EVOLVE_HATCH);
        this.hp = 130;
        this.atk = 17;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 70;
        this.range = 1;
        this.skill = Ability_1.Ability.SLUDGE_WAVE;
        this.passive = Passive_1.Passive.HATCH;
        this.attackSprite = types_1.AttackSprite.WATER_MELEE;
    }
}
exports.Palpitoad = Palpitoad;
class Seismitoad extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.AQUATIC,
            Synergy_1.Synergy.GROUND,
            Synergy_1.Synergy.SOUND
        ]);
        this.rarity = Game_1.Rarity.HATCH;
        this.stars = 3;
        this.hp = 210;
        this.atk = 22;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 70;
        this.range = 1;
        this.skill = Ability_1.Ability.SLUDGE_WAVE;
        this.attackSprite = types_1.AttackSprite.WATER_MELEE;
    }
}
exports.Seismitoad = Seismitoad;
class Bagon extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DRAGON, Synergy_1.Synergy.MONSTER]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.SHELGON;
        this.hp = 70;
        this.atk = 6;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.HEAD_SMASH;
        this.attackSprite = types_1.AttackSprite.DRAGON_MELEE;
    }
}
exports.Bagon = Bagon;
class Shelgon extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DRAGON, Synergy_1.Synergy.MONSTER]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.SALAMENCE;
        this.hp = 130;
        this.atk = 12;
        this.def = 5;
        this.speDef = 3;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.HEAD_SMASH;
        this.attackSprite = types_1.AttackSprite.DRAGON_MELEE;
    }
}
exports.Shelgon = Shelgon;
class Salamence extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.DRAGON,
            Synergy_1.Synergy.MONSTER,
            Synergy_1.Synergy.FLYING
        ]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 3;
        this.hp = 210;
        this.atk = 22;
        this.def = 5;
        this.speDef = 3;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.DRAGON_DARTS;
        this.attackSprite = types_1.AttackSprite.DRAGON_MELEE;
    }
}
exports.Salamence = Salamence;
class Ralts extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.PSYCHIC,
            Synergy_1.Synergy.FAIRY,
            Synergy_1.Synergy.HUMAN
        ]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.KIRLIA;
        this.hp = 90;
        this.atk = 5;
        this.def = 2;
        this.speDef = 4;
        this.maxPP = 110;
        this.range = 3;
        this.skill = Ability_1.Ability.FUTURE_SIGHT;
        this.attackSprite = types_1.AttackSprite.PSYCHIC_RANGE;
    }
}
exports.Ralts = Ralts;
class Kirlia extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.PSYCHIC,
            Synergy_1.Synergy.FAIRY,
            Synergy_1.Synergy.HUMAN
        ]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.GARDEVOIR;
        this.hp = 130;
        this.atk = 13;
        this.def = 3;
        this.speDef = 5;
        this.maxPP = 110;
        this.range = 3;
        this.skill = Ability_1.Ability.FUTURE_SIGHT;
        this.attackSprite = types_1.AttackSprite.PSYCHIC_RANGE;
    }
}
exports.Kirlia = Kirlia;
class Gardevoir extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.PSYCHIC,
            Synergy_1.Synergy.FAIRY,
            Synergy_1.Synergy.HUMAN
        ]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 3;
        this.hp = 230;
        this.atk = 28;
        this.def = 4;
        this.speDef = 8;
        this.maxPP = 110;
        this.range = 3;
        this.skill = Ability_1.Ability.FUTURE_SIGHT;
        this.attackSprite = types_1.AttackSprite.PSYCHIC_RANGE;
    }
}
exports.Gardevoir = Gardevoir;
class Fuecoco extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FIRE, Synergy_1.Synergy.SOUND, Synergy_1.Synergy.GHOST]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.CROCALOR;
        this.hp = 110;
        this.atk = 5;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.TORCH_SONG;
        this.attackSprite = types_1.AttackSprite.FIRE_RANGE;
    }
}
exports.Fuecoco = Fuecoco;
class Crocalor extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FIRE, Synergy_1.Synergy.SOUND, Synergy_1.Synergy.GHOST]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.SKELEDIRGE;
        this.hp = 170;
        this.atk = 13;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.TORCH_SONG;
        this.attackSprite = types_1.AttackSprite.FIRE_RANGE;
    }
}
exports.Crocalor = Crocalor;
class Skeledirge extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FIRE, Synergy_1.Synergy.SOUND, Synergy_1.Synergy.GHOST]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 3;
        this.hp = 350;
        this.atk = 24;
        this.def = 5;
        this.speDef = 5;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.TORCH_SONG;
        this.attackSprite = types_1.AttackSprite.FIRE_RANGE;
    }
}
exports.Skeledirge = Skeledirge;
class Budew extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GRASS, Synergy_1.Synergy.POISON, Synergy_1.Synergy.BABY]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.ROSELIA;
        this.hp = 90;
        this.atk = 5;
        this.def = 1;
        this.speDef = 1;
        this.maxPP = 100;
        this.range = 3;
        this.skill = Ability_1.Ability.PETAL_DANCE;
        this.attackSprite = types_1.AttackSprite.GRASS_RANGE;
    }
}
exports.Budew = Budew;
class Roselia extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GRASS, Synergy_1.Synergy.POISON, Synergy_1.Synergy.FLORA]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.ROSERADE;
        this.hp = 130;
        this.atk = 16;
        this.def = 1;
        this.speDef = 1;
        this.maxPP = 100;
        this.range = 3;
        this.skill = Ability_1.Ability.PETAL_DANCE;
        this.attackSprite = types_1.AttackSprite.GRASS_RANGE;
    }
}
exports.Roselia = Roselia;
class Roserade extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GRASS, Synergy_1.Synergy.POISON, Synergy_1.Synergy.FLORA]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 3;
        this.hp = 230;
        this.atk = 18;
        this.def = 1;
        this.speDef = 1;
        this.maxPP = 100;
        this.range = 3;
        this.skill = Ability_1.Ability.PETAL_DANCE;
        this.attackSprite = types_1.AttackSprite.GRASS_RANGE;
    }
}
exports.Roserade = Roserade;
class Slakoth extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.NORMAL, Synergy_1.Synergy.FIELD]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.VIGOROTH;
        this.hp = 130;
        this.atk = 6;
        this.def = 5;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.SLACK_OFF;
        this.attackSprite = types_1.AttackSprite.NORMAL_MELEE;
        this.regional = true;
    }
}
exports.Slakoth = Slakoth;
class Vigoroth extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.NORMAL, Synergy_1.Synergy.FIELD]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.SLAKING;
        this.hp = 220;
        this.atk = 18;
        this.def = 5;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.SLACK_OFF;
        this.attackSprite = types_1.AttackSprite.NORMAL_MELEE;
        this.regional = true;
    }
}
exports.Vigoroth = Vigoroth;
class Slaking extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.NORMAL, Synergy_1.Synergy.FIELD]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 3;
        this.hp = 380;
        this.atk = 34;
        this.def = 7;
        this.speDef = 5;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.SLACK_OFF;
        this.attackSprite = types_1.AttackSprite.NORMAL_MELEE;
        this.regional = true;
    }
}
exports.Slaking = Slaking;
class Honedge extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.GHOST,
            Synergy_1.Synergy.STEEL,
            Synergy_1.Synergy.ARTIFICIAL
        ]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.DOUBLADE;
        this.hp = 85;
        this.atk = 6;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.KING_SHIELD;
        this.attackSprite = types_1.AttackSprite.STEEL_MELEE;
    }
}
exports.Honedge = Honedge;
class Doublade extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.GHOST,
            Synergy_1.Synergy.STEEL,
            Synergy_1.Synergy.ARTIFICIAL
        ]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.AEGISLASH;
        this.hp = 130;
        this.atk = 13;
        this.def = 5;
        this.speDef = 5;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.KING_SHIELD;
        this.attackSprite = types_1.AttackSprite.STEEL_MELEE;
    }
}
exports.Doublade = Doublade;
class Aegislash extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.GHOST,
            Synergy_1.Synergy.STEEL,
            Synergy_1.Synergy.ARTIFICIAL
        ]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 3;
        this.hp = 230;
        this.atk = 23;
        this.def = 7;
        this.speDef = 7;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.KING_SHIELD;
        this.passive = Passive_1.Passive.AEGISLASH;
        this.attackSprite = types_1.AttackSprite.STEEL_MELEE;
    }
}
exports.Aegislash = Aegislash;
class AegislashBlade extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.GHOST,
            Synergy_1.Synergy.STEEL,
            Synergy_1.Synergy.ARTIFICIAL
        ]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 3;
        this.hp = 230;
        this.atk = 33;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.KING_SHIELD;
        this.passive = Passive_1.Passive.AEGISLASH;
        this.attackSprite = types_1.AttackSprite.STEEL_MELEE;
    }
}
exports.AegislashBlade = AegislashBlade;
class Oshawott extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.WATER,
            Synergy_1.Synergy.FIELD,
            Synergy_1.Synergy.FIGHTING
        ]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.DEWOTT;
        this.hp = 90;
        this.atk = 8;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 120;
        this.range = 1;
        this.skill = Ability_1.Ability.AQUA_TAIL;
        this.attackSprite = types_1.AttackSprite.WATER_MELEE;
    }
}
exports.Oshawott = Oshawott;
class Dewott extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.WATER,
            Synergy_1.Synergy.FIELD,
            Synergy_1.Synergy.FIGHTING
        ]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.SAMUROTT;
        this.hp = 150;
        this.atk = 15;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 120;
        this.range = 1;
        this.skill = Ability_1.Ability.AQUA_TAIL;
        this.attackSprite = types_1.AttackSprite.WATER_MELEE;
    }
}
exports.Dewott = Dewott;
class Samurott extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.WATER,
            Synergy_1.Synergy.FIELD,
            Synergy_1.Synergy.FIGHTING
        ]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 3;
        this.hp = 260;
        this.atk = 32;
        this.def = 8;
        this.speDef = 8;
        this.maxPP = 120;
        this.range = 1;
        this.skill = Ability_1.Ability.AQUA_TAIL;
        this.attackSprite = types_1.AttackSprite.WATER_MELEE;
    }
}
exports.Samurott = Samurott;
class Larvitar extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DARK, Synergy_1.Synergy.MONSTER, Synergy_1.Synergy.ROCK]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.PUPITAR;
        this.hp = 75;
        this.atk = 7;
        this.def = 4;
        this.speDef = 2;
        this.maxPP = 90;
        this.range = 1;
        this.skill = Ability_1.Ability.BITE;
        this.attackSprite = types_1.AttackSprite.DARK_MELEE;
    }
}
exports.Larvitar = Larvitar;
class Pupitar extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DARK, Synergy_1.Synergy.MONSTER, Synergy_1.Synergy.ROCK]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.TYRANITAR;
        this.hp = 130;
        this.atk = 14;
        this.def = 6;
        this.speDef = 4;
        this.maxPP = 90;
        this.range = 1;
        this.skill = Ability_1.Ability.BITE;
        this.attackSprite = types_1.AttackSprite.DARK_MELEE;
    }
}
exports.Pupitar = Pupitar;
class Tyranitar extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DARK, Synergy_1.Synergy.MONSTER, Synergy_1.Synergy.ROCK]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 3;
        this.hp = 210;
        this.atk = 28;
        this.def = 8;
        this.speDef = 5;
        this.maxPP = 90;
        this.range = 1;
        this.skill = Ability_1.Ability.BITE;
        this.attackSprite = types_1.AttackSprite.DARK_MELEE;
    }
}
exports.Tyranitar = Tyranitar;
class JangmoO extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.DRAGON,
            Synergy_1.Synergy.FIGHTING,
            Synergy_1.Synergy.SOUND
        ]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.HAKAMO_O;
        this.hp = 100;
        this.atk = 6;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 90;
        this.range = 1;
        this.skill = Ability_1.Ability.CLANGOROUS_SOUL;
        this.attackSprite = types_1.AttackSprite.DRAGON_MELEE;
        this.regional = true;
    }
}
exports.JangmoO = JangmoO;
class HakamoO extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.DRAGON,
            Synergy_1.Synergy.FIGHTING,
            Synergy_1.Synergy.SOUND
        ]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.KOMMO_O;
        this.hp = 160;
        this.atk = 13;
        this.def = 5;
        this.speDef = 5;
        this.maxPP = 90;
        this.range = 1;
        this.skill = Ability_1.Ability.CLANGOROUS_SOUL;
        this.attackSprite = types_1.AttackSprite.DRAGON_MELEE;
        this.regional = true;
    }
}
exports.HakamoO = HakamoO;
class KommoO extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.DRAGON,
            Synergy_1.Synergy.FIGHTING,
            Synergy_1.Synergy.SOUND
        ]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 3;
        this.hp = 280;
        this.atk = 25;
        this.def = 8;
        this.speDef = 8;
        this.maxPP = 90;
        this.range = 1;
        this.skill = Ability_1.Ability.CLANGOROUS_SOUL;
        this.attackSprite = types_1.AttackSprite.DRAGON_MELEE;
        this.regional = true;
    }
}
exports.KommoO = KommoO;
class Gastly extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.GHOST,
            Synergy_1.Synergy.POISON,
            Synergy_1.Synergy.AMORPHOUS
        ]);
        this.rarity = Game_1.Rarity.ULTRA;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.HAUNTER;
        this.hp = 90;
        this.atk = 14;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.NIGHTMARE;
        this.attackSprite = types_1.AttackSprite.GHOST_RANGE;
    }
}
exports.Gastly = Gastly;
class Haunter extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.GHOST,
            Synergy_1.Synergy.POISON,
            Synergy_1.Synergy.AMORPHOUS
        ]);
        this.rarity = Game_1.Rarity.ULTRA;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.GENGAR;
        this.hp = 180;
        this.atk = 25;
        this.def = 4;
        this.speDef = 3;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.NIGHTMARE;
        this.attackSprite = types_1.AttackSprite.GHOST_RANGE;
    }
}
exports.Haunter = Haunter;
class Gengar extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.GHOST,
            Synergy_1.Synergy.POISON,
            Synergy_1.Synergy.AMORPHOUS
        ]);
        this.rarity = Game_1.Rarity.ULTRA;
        this.stars = 3;
        this.hp = 350;
        this.atk = 40;
        this.def = 5;
        this.speDef = 3;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.NIGHTMARE;
        this.attackSprite = types_1.AttackSprite.GHOST_RANGE;
    }
}
exports.Gengar = Gengar;
class Abra extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.PSYCHIC, Synergy_1.Synergy.HUMAN]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.KADABRA;
        this.hp = 90;
        this.atk = 5;
        this.def = 2;
        this.speDef = 4;
        this.maxPP = 50;
        this.range = 4;
        this.skill = Ability_1.Ability.TELEPORT;
        this.attackSprite = types_1.AttackSprite.PSYCHIC_RANGE;
    }
}
exports.Abra = Abra;
class Kadabra extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.PSYCHIC, Synergy_1.Synergy.HUMAN]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.ALAKAZAM;
        this.hp = 130;
        this.atk = 10;
        this.def = 3;
        this.speDef = 5;
        this.maxPP = 50;
        this.range = 4;
        this.skill = Ability_1.Ability.TELEPORT;
        this.attackSprite = types_1.AttackSprite.PSYCHIC_RANGE;
    }
}
exports.Kadabra = Kadabra;
class Alakazam extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.PSYCHIC, Synergy_1.Synergy.HUMAN]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 3;
        this.hp = 230;
        this.atk = 22;
        this.def = 4;
        this.speDef = 8;
        this.maxPP = 50;
        this.range = 4;
        this.skill = Ability_1.Ability.TELEPORT;
        this.attackSprite = types_1.AttackSprite.PSYCHIC_RANGE;
    }
}
exports.Alakazam = Alakazam;
class Litwick extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GHOST, Synergy_1.Synergy.FIRE, Synergy_1.Synergy.LIGHT]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.LAMPENT;
        this.hp = 50;
        this.atk = 4;
        this.def = 1;
        this.speDef = 1;
        this.maxPP = 100;
        this.range = 3;
        this.skill = Ability_1.Ability.HEX;
        this.attackSprite = types_1.AttackSprite.GHOST_RANGE;
    }
}
exports.Litwick = Litwick;
class Lampent extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GHOST, Synergy_1.Synergy.FIRE, Synergy_1.Synergy.LIGHT]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.CHANDELURE;
        this.hp = 90;
        this.atk = 9;
        this.def = 1;
        this.speDef = 1;
        this.maxPP = 100;
        this.range = 3;
        this.skill = Ability_1.Ability.HEX;
        this.attackSprite = types_1.AttackSprite.GHOST_RANGE;
    }
}
exports.Lampent = Lampent;
class Chandelure extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GHOST, Synergy_1.Synergy.FIRE, Synergy_1.Synergy.LIGHT]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 3;
        this.hp = 160;
        this.atk = 15;
        this.def = 1;
        this.speDef = 1;
        this.maxPP = 100;
        this.range = 3;
        this.skill = Ability_1.Ability.HEX;
        this.attackSprite = types_1.AttackSprite.GHOST_RANGE;
    }
}
exports.Chandelure = Chandelure;
class Porygon extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.NORMAL,
            Synergy_1.Synergy.PSYCHIC,
            Synergy_1.Synergy.ARTIFICIAL
        ]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.PORYGON_2;
        this.hp = 100;
        this.atk = 7;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 90;
        this.range = 2;
        this.skill = Ability_1.Ability.TRI_ATTACK;
        this.passive = Passive_1.Passive.PORYGON;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.FIGHTING_RANGE;
    }
}
exports.Porygon = Porygon;
class Porygon2 extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.NORMAL,
            Synergy_1.Synergy.PSYCHIC,
            Synergy_1.Synergy.ARTIFICIAL
        ]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.PORYGON_Z;
        this.hp = 185;
        this.atk = 14;
        this.evolutionRule = new evolution_rules_1.ItemEvolutionRule([Item_1.Item.UPGRADE]);
        this.def = 5;
        this.speDef = 5;
        this.maxPP = 90;
        this.range = 2;
        this.skill = Ability_1.Ability.TRI_ATTACK;
        this.passive = Passive_1.Passive.PORYGON;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.FIGHTING_RANGE;
    }
}
exports.Porygon2 = Porygon2;
class PorygonZ extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.NORMAL,
            Synergy_1.Synergy.PSYCHIC,
            Synergy_1.Synergy.ARTIFICIAL
        ]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.hp = 185;
        this.atk = 24;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 90;
        this.range = 2;
        this.skill = Ability_1.Ability.TRI_ATTACK;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.FIGHTING_RANGE;
    }
}
exports.PorygonZ = PorygonZ;
class Sewaddle extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GRASS, Synergy_1.Synergy.BUG]);
        this.rarity = Game_1.Rarity.ULTRA;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.SWADLOON;
        this.hp = 140;
        this.atk = 14;
        this.def = 6;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.MANTIS_BLADES;
        this.attackSprite = types_1.AttackSprite.BUG_MELEE;
    }
}
exports.Sewaddle = Sewaddle;
class Swadloon extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GRASS, Synergy_1.Synergy.BUG]);
        this.rarity = Game_1.Rarity.ULTRA;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.LEAVANNY;
        this.hp = 280;
        this.atk = 24;
        this.def = 10;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.MANTIS_BLADES;
        this.attackSprite = types_1.AttackSprite.BUG_MELEE;
    }
}
exports.Swadloon = Swadloon;
class Leavanny extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GRASS, Synergy_1.Synergy.BUG]);
        this.rarity = Game_1.Rarity.ULTRA;
        this.stars = 3;
        this.hp = 400;
        this.atk = 44;
        this.def = 8;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.MANTIS_BLADES;
        this.attackSprite = types_1.AttackSprite.BUG_MELEE;
    }
}
exports.Leavanny = Leavanny;
class Turtwig extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GRASS, Synergy_1.Synergy.GROUND, Synergy_1.Synergy.FLORA]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.GROTLE;
        this.hp = 80;
        this.atk = 5;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.GROWTH;
        this.attackSprite = types_1.AttackSprite.GRASS_MELEE;
    }
}
exports.Turtwig = Turtwig;
class Grotle extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GRASS, Synergy_1.Synergy.GROUND, Synergy_1.Synergy.FLORA]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.TORTERRA;
        this.hp = 150;
        this.atk = 9;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.GROWTH;
        this.attackSprite = types_1.AttackSprite.GRASS_MELEE;
    }
}
exports.Grotle = Grotle;
class Torterra extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GRASS, Synergy_1.Synergy.GROUND, Synergy_1.Synergy.FLORA]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 3;
        this.hp = 280;
        this.atk = 20;
        this.def = 5;
        this.speDef = 5;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.GROWTH;
        this.attackSprite = types_1.AttackSprite.GRASS_MELEE;
    }
}
exports.Torterra = Torterra;
class Deino extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DRAGON, Synergy_1.Synergy.DARK]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.ZWEILOUS;
        this.hp = 80;
        this.atk = 6;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.DARK_HARVEST;
        this.attackSprite = types_1.AttackSprite.DARK_RANGE;
        this.regional = true;
    }
}
exports.Deino = Deino;
class Zweilous extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DRAGON, Synergy_1.Synergy.DARK]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.HYDREIGON;
        this.hp = 130;
        this.atk = 12;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.DARK_HARVEST;
        this.attackSprite = types_1.AttackSprite.DARK_RANGE;
        this.regional = true;
    }
}
exports.Zweilous = Zweilous;
class Hydreigon extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DRAGON, Synergy_1.Synergy.DARK]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 3;
        this.hp = 230;
        this.atk = 22;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.DARK_HARVEST;
        this.attackSprite = types_1.AttackSprite.DARK_RANGE;
        this.regional = true;
    }
}
exports.Hydreigon = Hydreigon;
class Poliwag extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.WATER,
            Synergy_1.Synergy.AQUATIC,
            Synergy_1.Synergy.FIGHTING
        ]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.POLIWHIRL;
        this.hp = 65;
        this.atk = 5;
        this.def = 1;
        this.speDef = 1;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.SOAK;
        this.attackSprite = types_1.AttackSprite.WATER_RANGE;
    }
}
exports.Poliwag = Poliwag;
class Poliwhirl extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.WATER,
            Synergy_1.Synergy.AQUATIC,
            Synergy_1.Synergy.FIGHTING
        ]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.POLITOED;
        this.hp = 120;
        this.atk = 9;
        this.def = 1;
        this.speDef = 1;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.SOAK;
        this.passive = Passive_1.Passive.TADPOLE;
        this.attackSprite = types_1.AttackSprite.WATER_RANGE;
        this.evolutionRule = new evolution_rules_1.CountEvolutionRule(3, (pokemon, player) => {
            if (Math.max(...(0, schemas_1.values)(player.board)
                .filter((pkm) => pkm.index === this.index)
                .map((v) => v.positionY)) === 3) {
                return Pokemon_1.Pkm.POLIWRATH;
            }
            else {
                return Pokemon_1.Pkm.POLITOED;
            }
        });
    }
}
exports.Poliwhirl = Poliwhirl;
class Politoed extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.WATER,
            Synergy_1.Synergy.AQUATIC,
            Synergy_1.Synergy.SOUND
        ]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 3;
        this.hp = 220;
        this.atk = 18;
        this.def = 1;
        this.speDef = 1;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.SOAK;
        this.attackSprite = types_1.AttackSprite.WATER_RANGE;
    }
}
exports.Politoed = Politoed;
class Poliwrath extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.WATER,
            Synergy_1.Synergy.AQUATIC,
            Synergy_1.Synergy.FIGHTING
        ]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 3;
        this.hp = 220;
        this.atk = 18;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.CRABHAMMER;
        this.attackSprite = types_1.AttackSprite.WATER_MELEE;
    }
}
exports.Poliwrath = Poliwrath;
class Magby extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FIRE, Synergy_1.Synergy.HUMAN, Synergy_1.Synergy.BABY]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.MAGMAR;
        this.hp = 80;
        this.atk = 6;
        this.def = 1;
        this.speDef = 2;
        this.maxPP = 80;
        this.range = 2;
        this.skill = Ability_1.Ability.FLAMETHROWER;
        this.attackSprite = types_1.AttackSprite.FIRE_RANGE;
    }
}
exports.Magby = Magby;
class Magmar extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FIRE, Synergy_1.Synergy.HUMAN]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.MAGMORTAR;
        this.hp = 140;
        this.atk = 16;
        this.def = 2;
        this.speDef = 3;
        this.maxPP = 80;
        this.range = 2;
        this.skill = Ability_1.Ability.FLAMETHROWER;
        this.attackSprite = types_1.AttackSprite.FIRE_RANGE;
    }
}
exports.Magmar = Magmar;
class Magmortar extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FIRE, Synergy_1.Synergy.HUMAN]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 3;
        this.hp = 280;
        this.atk = 30;
        this.def = 3;
        this.speDef = 4;
        this.maxPP = 80;
        this.range = 2;
        this.skill = Ability_1.Ability.FLAMETHROWER;
        this.attackSprite = types_1.AttackSprite.FIRE_RANGE;
    }
}
exports.Magmortar = Magmortar;
class Solosis extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.PSYCHIC, Synergy_1.Synergy.AMORPHOUS]);
        this.rarity = Game_1.Rarity.ULTRA;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.DUOSION;
        this.hp = 100;
        this.atk = 5;
        this.def = 1;
        this.speDef = 1;
        this.maxPP = 90;
        this.range = 2;
        this.skill = Ability_1.Ability.PSYCHIC;
        this.attackSprite = types_1.AttackSprite.PSYCHIC_RANGE;
    }
}
exports.Solosis = Solosis;
class Duosion extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.PSYCHIC, Synergy_1.Synergy.AMORPHOUS]);
        this.rarity = Game_1.Rarity.ULTRA;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.REUNICLUS;
        this.hp = 200;
        this.atk = 9;
        this.def = 1;
        this.speDef = 1;
        this.maxPP = 90;
        this.range = 2;
        this.skill = Ability_1.Ability.PSYCHIC;
        this.attackSprite = types_1.AttackSprite.PSYCHIC_RANGE;
    }
}
exports.Duosion = Duosion;
class Reuniclus extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.PSYCHIC, Synergy_1.Synergy.AMORPHOUS]);
        this.rarity = Game_1.Rarity.ULTRA;
        this.stars = 3;
        this.hp = 300;
        this.atk = 18;
        this.def = 1;
        this.speDef = 1;
        this.maxPP = 90;
        this.range = 2;
        this.skill = Ability_1.Ability.PSYCHIC;
        this.attackSprite = types_1.AttackSprite.PSYCHIC_RANGE;
    }
}
exports.Reuniclus = Reuniclus;
class Shinx extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.ELECTRIC, Synergy_1.Synergy.FIELD]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.LUXIO;
        this.hp = 80;
        this.atk = 6;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.THUNDER_FANG;
        this.attackSprite = types_1.AttackSprite.ELECTRIC_MELEE;
    }
}
exports.Shinx = Shinx;
class Luxio extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.ELECTRIC, Synergy_1.Synergy.FIELD]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.LUXRAY;
        this.hp = 130;
        this.atk = 14;
        this.def = 5;
        this.speDef = 5;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.THUNDER_FANG;
        this.attackSprite = types_1.AttackSprite.ELECTRIC_MELEE;
    }
}
exports.Luxio = Luxio;
class Luxray extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.ELECTRIC, Synergy_1.Synergy.FIELD]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 3;
        this.hp = 220;
        this.atk = 32;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.THUNDER_FANG;
        this.attackSprite = types_1.AttackSprite.ELECTRIC_MELEE;
    }
}
exports.Luxray = Luxray;
class Cubone extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GROUND, Synergy_1.Synergy.GHOST]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.MAROWAK;
        this.evolutionRule = new evolution_rules_1.CountEvolutionRule(3, (pokemon, player) => {
            if (player.regionalPokemons.includes(Pokemon_1.Pkm.ALOLAN_MAROWAK))
                return Pokemon_1.Pkm.ALOLAN_MAROWAK;
            else
                return Pokemon_1.Pkm.MAROWAK;
        });
        this.hp = 110;
        this.atk = 10;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.BONEMERANG;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.ROCK_MELEE;
    }
}
exports.Cubone = Cubone;
class Marowak extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GROUND, Synergy_1.Synergy.GHOST]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.hp = 250;
        this.atk = 20;
        this.def = 6;
        this.speDef = 5;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.BONEMERANG;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.ROCK_MELEE;
    }
}
exports.Marowak = Marowak;
class AlolanMarowak extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GROUND, Synergy_1.Synergy.FIRE, Synergy_1.Synergy.GHOST]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.hp = 250;
        this.atk = 20;
        this.def = 6;
        this.speDef = 5;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.SHADOW_BONE;
        this.regional = true;
        this.attackSprite = types_1.AttackSprite.FIRE_MELEE;
    }
    isInRegion(map, state) {
        var _a;
        const regionSynergies = (_a = Dungeon_1.DungeonDetails[map]) === null || _a === void 0 ? void 0 : _a.synergies;
        return ((!state || state.additionalPokemons.includes(Pokemon_1.Pkm.CUBONE)) &&
            regionSynergies.includes(Synergy_1.Synergy.FIRE));
    }
}
exports.AlolanMarowak = AlolanMarowak;
class Axew extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DRAGON]);
        this.rarity = Game_1.Rarity.HATCH;
        this.evolutionRule = new evolution_rules_1.HatchEvolutionRule(Config_1.EvolutionTime.EVOLVE_HATCH);
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.FRAXURE;
        this.hp = 80;
        this.atk = 10;
        this.def = 1;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.OUTRAGE;
        this.passive = Passive_1.Passive.HATCH;
        this.attackSprite = types_1.AttackSprite.DRAGON_MELEE;
    }
}
exports.Axew = Axew;
class Fraxure extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DRAGON]);
        this.rarity = Game_1.Rarity.HATCH;
        this.evolutionRule = new evolution_rules_1.HatchEvolutionRule(Config_1.EvolutionTime.EVOLVE_HATCH);
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.HAXORUS;
        this.hp = 130;
        this.atk = 20;
        this.def = 2;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.OUTRAGE;
        this.passive = Passive_1.Passive.HATCH;
        this.attackSprite = types_1.AttackSprite.DRAGON_MELEE;
    }
}
exports.Fraxure = Fraxure;
class Haxorus extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DRAGON]);
        this.rarity = Game_1.Rarity.HATCH;
        this.stars = 3;
        this.hp = 200;
        this.atk = 30;
        this.def = 4;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.OUTRAGE;
        this.attackSprite = types_1.AttackSprite.DRAGON_MELEE;
    }
}
exports.Haxorus = Haxorus;
class Dratini extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.DRAGON,
            Synergy_1.Synergy.FLYING,
            Synergy_1.Synergy.AQUATIC
        ]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.DRAGONAIR;
        this.hp = 80;
        this.atk = 5;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 110;
        this.range = 1;
        this.skill = Ability_1.Ability.DRAGON_BREATH;
        this.attackSprite = types_1.AttackSprite.DRAGON_MELEE;
    }
}
exports.Dratini = Dratini;
class Dragonair extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.DRAGON,
            Synergy_1.Synergy.FLYING,
            Synergy_1.Synergy.AQUATIC
        ]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.DRAGONITE;
        this.hp = 120;
        this.atk = 13;
        this.def = 5;
        this.speDef = 5;
        this.maxPP = 110;
        this.range = 1;
        this.skill = Ability_1.Ability.DRAGON_BREATH;
        this.attackSprite = types_1.AttackSprite.DRAGON_MELEE;
    }
}
exports.Dragonair = Dragonair;
class Dragonite extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.DRAGON,
            Synergy_1.Synergy.FLYING,
            Synergy_1.Synergy.AQUATIC
        ]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 3;
        this.hp = 250;
        this.atk = 23;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 110;
        this.range = 1;
        this.skill = Ability_1.Ability.DRAGON_BREATH;
        this.attackSprite = types_1.AttackSprite.DRAGON_MELEE;
    }
}
exports.Dragonite = Dragonite;
class Goomy extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.DRAGON,
            Synergy_1.Synergy.AQUATIC,
            Synergy_1.Synergy.AMORPHOUS
        ]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.SLIGOO;
        this.evolutionRule = new evolution_rules_1.CountEvolutionRule(3, (pokemon, player) => {
            if (player.regionalPokemons.includes(Pokemon_1.Pkm.HISUI_SLIGGOO))
                return Pokemon_1.Pkm.HISUI_SLIGGOO;
            else
                return Pokemon_1.Pkm.SLIGOO;
        });
        this.hp = 90;
        this.atk = 6;
        this.def = 4;
        this.speDef = 6;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.LIQUIDATION;
        this.attackSprite = types_1.AttackSprite.DRAGON_MELEE;
    }
}
exports.Goomy = Goomy;
class Sligoo extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.DRAGON,
            Synergy_1.Synergy.AQUATIC,
            Synergy_1.Synergy.AMORPHOUS
        ]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.GOODRA;
        this.hp = 160;
        this.atk = 12;
        this.def = 5;
        this.speDef = 7;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.LIQUIDATION;
        this.attackSprite = types_1.AttackSprite.DRAGON_MELEE;
    }
}
exports.Sligoo = Sligoo;
class Goodra extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.DRAGON,
            Synergy_1.Synergy.AQUATIC,
            Synergy_1.Synergy.AMORPHOUS
        ]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 3;
        this.hp = 300;
        this.atk = 26;
        this.def = 6;
        this.speDef = 10;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.LIQUIDATION;
        this.attackSprite = types_1.AttackSprite.DRAGON_MELEE;
    }
}
exports.Goodra = Goodra;
class HisuiSliggoo extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.DRAGON,
            Synergy_1.Synergy.STEEL,
            Synergy_1.Synergy.AMORPHOUS
        ]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.HISUI_GOODRA;
        this.hp = 160;
        this.atk = 12;
        this.def = 7;
        this.speDef = 5;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.SHELTER;
        this.attackSprite = types_1.AttackSprite.STEEL_MELEE;
        this.regional = true;
    }
    isInRegion(map, state) {
        var _a;
        const regionSynergies = (_a = Dungeon_1.DungeonDetails[map]) === null || _a === void 0 ? void 0 : _a.synergies;
        return regionSynergies.includes(Synergy_1.Synergy.STEEL);
    }
}
exports.HisuiSliggoo = HisuiSliggoo;
class HisuiGoodra extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.DRAGON,
            Synergy_1.Synergy.STEEL,
            Synergy_1.Synergy.AMORPHOUS
        ]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 3;
        this.hp = 300;
        this.atk = 26;
        this.def = 10;
        this.speDef = 6;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.SHELTER;
        this.attackSprite = types_1.AttackSprite.STEEL_MELEE;
        this.regional = true;
    }
    isInRegion(map, state) {
        var _a;
        const regionSynergies = (_a = Dungeon_1.DungeonDetails[map]) === null || _a === void 0 ? void 0 : _a.synergies;
        return regionSynergies.includes(Synergy_1.Synergy.STEEL);
    }
}
exports.HisuiGoodra = HisuiGoodra;
class Lotad extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.GRASS,
            Synergy_1.Synergy.WATER,
            Synergy_1.Synergy.AQUATIC
        ]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.LOMBRE;
        this.hp = 60;
        this.atk = 6;
        this.def = 1;
        this.speDef = 1;
        this.maxPP = 120;
        this.range = 3;
        this.skill = Ability_1.Ability.TORMENT;
        this.attackSprite = types_1.AttackSprite.GRASS_RANGE;
        this.regional = true;
    }
}
exports.Lotad = Lotad;
class Lombre extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.GRASS,
            Synergy_1.Synergy.WATER,
            Synergy_1.Synergy.AQUATIC
        ]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.LUDICOLO;
        this.hp = 110;
        this.atk = 12;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 120;
        this.range = 3;
        this.skill = Ability_1.Ability.TORMENT;
        this.attackSprite = types_1.AttackSprite.GRASS_RANGE;
        this.regional = true;
    }
}
exports.Lombre = Lombre;
class Ludicolo extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.GRASS,
            Synergy_1.Synergy.WATER,
            Synergy_1.Synergy.AQUATIC
        ]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 3;
        this.hp = 220;
        this.atk = 22;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 120;
        this.range = 3;
        this.skill = Ability_1.Ability.TORMENT;
        this.attackSprite = types_1.AttackSprite.GRASS_RANGE;
        this.regional = true;
    }
}
exports.Ludicolo = Ludicolo;
class Togepi extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FAIRY, Synergy_1.Synergy.NORMAL, Synergy_1.Synergy.BABY]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.TOGETIC;
        this.hp = 80;
        this.atk = 5;
        this.def = 1;
        this.speDef = 1;
        this.maxPP = 70;
        this.range = 2;
        this.skill = Ability_1.Ability.WISH;
        this.attackSprite = types_1.AttackSprite.FLYING_RANGE;
    }
}
exports.Togepi = Togepi;
class Togetic extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.FAIRY,
            Synergy_1.Synergy.NORMAL,
            Synergy_1.Synergy.FLYING
        ]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.TOGEKISS;
        this.hp = 150;
        this.atk = 11;
        this.def = 1;
        this.speDef = 1;
        this.maxPP = 70;
        this.range = 2;
        this.skill = Ability_1.Ability.WISH;
        this.attackSprite = types_1.AttackSprite.FLYING_RANGE;
    }
}
exports.Togetic = Togetic;
class Togekiss extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.FAIRY,
            Synergy_1.Synergy.NORMAL,
            Synergy_1.Synergy.FLYING
        ]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 3;
        this.hp = 260;
        this.atk = 25;
        this.def = 1;
        this.speDef = 1;
        this.maxPP = 70;
        this.range = 2;
        this.skill = Ability_1.Ability.WISH;
        this.attackSprite = types_1.AttackSprite.FLYING_RANGE;
    }
}
exports.Togekiss = Togekiss;
class Rhyhorn extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.GROUND,
            Synergy_1.Synergy.MONSTER,
            Synergy_1.Synergy.ROCK
        ]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.RHYDON;
        this.hp = 80;
        this.atk = 5;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.STOMP;
        this.attackSprite = types_1.AttackSprite.ROCK_MELEE;
    }
}
exports.Rhyhorn = Rhyhorn;
class Rhydon extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.GROUND,
            Synergy_1.Synergy.MONSTER,
            Synergy_1.Synergy.ROCK
        ]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.RHYPERIOR;
        this.hp = 130;
        this.atk = 9;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.STOMP;
        this.attackSprite = types_1.AttackSprite.ROCK_MELEE;
    }
}
exports.Rhydon = Rhydon;
class Rhyperior extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.GROUND,
            Synergy_1.Synergy.MONSTER,
            Synergy_1.Synergy.ROCK
        ]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 3;
        this.hp = 220;
        this.atk = 20;
        this.def = 8;
        this.speDef = 8;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.STOMP;
        this.attackSprite = types_1.AttackSprite.ROCK_MELEE;
    }
}
exports.Rhyperior = Rhyperior;
class Aron extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.STEEL, Synergy_1.Synergy.MONSTER, Synergy_1.Synergy.ROCK]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.LAIRON;
        this.hp = 60;
        this.atk = 4;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.HEAVY_SLAM;
        this.attackSprite = types_1.AttackSprite.ROCK_MELEE;
    }
}
exports.Aron = Aron;
class Lairon extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.STEEL, Synergy_1.Synergy.MONSTER, Synergy_1.Synergy.ROCK]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.AGGRON;
        this.hp = 100;
        this.atk = 9;
        this.def = 4;
        this.speDef = 3;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.HEAVY_SLAM;
        this.attackSprite = types_1.AttackSprite.ROCK_MELEE;
    }
}
exports.Lairon = Lairon;
class Aggron extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.STEEL, Synergy_1.Synergy.MONSTER, Synergy_1.Synergy.ROCK]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 3;
        this.hp = 170;
        this.atk = 19;
        this.def = 6;
        this.speDef = 5;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.HEAVY_SLAM;
        this.attackSprite = types_1.AttackSprite.ROCK_MELEE;
    }
}
exports.Aggron = Aggron;
class Whismur extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.NORMAL, Synergy_1.Synergy.SOUND]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.LOUDRED;
        this.hp = 90;
        this.atk = 6;
        this.def = 1;
        this.speDef = 1;
        this.maxPP = 90;
        this.range = 2;
        this.skill = Ability_1.Ability.ECHO;
        this.attackSprite = types_1.AttackSprite.SOUND_RANGE;
    }
}
exports.Whismur = Whismur;
class Loudred extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.NORMAL, Synergy_1.Synergy.SOUND]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.EXPLOUD;
        this.hp = 150;
        this.atk = 14;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 90;
        this.range = 2;
        this.skill = Ability_1.Ability.ECHO;
        this.attackSprite = types_1.AttackSprite.SOUND_RANGE;
    }
}
exports.Loudred = Loudred;
class Exploud extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.NORMAL, Synergy_1.Synergy.SOUND]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 3;
        this.hp = 300;
        this.atk = 24;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 90;
        this.range = 2;
        this.skill = Ability_1.Ability.ECHO;
        this.attackSprite = types_1.AttackSprite.SOUND_RANGE;
    }
}
exports.Exploud = Exploud;
class Swinub extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GROUND, Synergy_1.Synergy.ICE]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.PILOSWINE;
        this.hp = 65;
        this.atk = 4;
        this.def = 3;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.ICICLE_CRASH;
        this.attackSprite = types_1.AttackSprite.ICE_MELEE;
    }
}
exports.Swinub = Swinub;
class Piloswine extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GROUND, Synergy_1.Synergy.ICE]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.MAMOSWINE;
        this.hp = 120;
        this.atk = 8;
        this.def = 5;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.ICICLE_CRASH;
        this.attackSprite = types_1.AttackSprite.ICE_MELEE;
    }
}
exports.Piloswine = Piloswine;
class Mamoswine extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GROUND, Synergy_1.Synergy.ICE]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 3;
        this.hp = 200;
        this.atk = 14;
        this.def = 8;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.ICICLE_CRASH;
        this.attackSprite = types_1.AttackSprite.ICE_MELEE;
    }
}
exports.Mamoswine = Mamoswine;
class Snover extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GRASS, Synergy_1.Synergy.ICE, Synergy_1.Synergy.MONSTER]);
        this.rarity = Game_1.Rarity.ULTRA;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.ABOMASNOW;
        this.hp = 130;
        this.atk = 12;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 120;
        this.range = 1;
        this.skill = Ability_1.Ability.SHEER_COLD;
        this.attackSprite = types_1.AttackSprite.ICE_MELEE;
    }
}
exports.Snover = Snover;
class Abomasnow extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GRASS, Synergy_1.Synergy.ICE, Synergy_1.Synergy.MONSTER]);
        this.rarity = Game_1.Rarity.ULTRA;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.MEGA_ABOMASNOW;
        this.hp = 260;
        this.atk = 24;
        this.def = 8;
        this.speDef = 8;
        this.maxPP = 120;
        this.range = 1;
        this.skill = Ability_1.Ability.SHEER_COLD;
        this.attackSprite = types_1.AttackSprite.ICE_MELEE;
    }
}
exports.Abomasnow = Abomasnow;
class MegaAbomasnow extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GRASS, Synergy_1.Synergy.ICE, Synergy_1.Synergy.MONSTER]);
        this.rarity = Game_1.Rarity.ULTRA;
        this.stars = 3;
        this.hp = 400;
        this.atk = 35;
        this.def = 10;
        this.speDef = 10;
        this.maxPP = 120;
        this.range = 1;
        this.skill = Ability_1.Ability.SHEER_COLD;
        this.attackSprite = types_1.AttackSprite.ICE_MELEE;
    }
}
exports.MegaAbomasnow = MegaAbomasnow;
class Snorunt extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GHOST, Synergy_1.Synergy.ICE]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.GLALIE;
        this.hp = 90;
        this.atk = 10;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 3;
        this.skill = Ability_1.Ability.ICY_WIND;
        this.attackSprite = types_1.AttackSprite.GHOST_RANGE;
    }
}
exports.Snorunt = Snorunt;
class Glalie extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GHOST, Synergy_1.Synergy.ICE]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.FROSLASS;
        this.hp = 170;
        this.atk = 20;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 90;
        this.range = 3;
        this.skill = Ability_1.Ability.ICY_WIND;
        this.attackSprite = types_1.AttackSprite.GHOST_RANGE;
    }
}
exports.Glalie = Glalie;
class Froslass extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GHOST, Synergy_1.Synergy.ICE]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 3;
        this.hp = 320;
        this.atk = 36;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 80;
        this.range = 3;
        this.skill = Ability_1.Ability.ICY_WIND;
        this.attackSprite = types_1.AttackSprite.GHOST_RANGE;
    }
}
exports.Froslass = Froslass;
class Vanillite extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.FAIRY,
            Synergy_1.Synergy.ICE,
            Synergy_1.Synergy.AMORPHOUS
        ]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.VANILLISH;
        this.hp = 70;
        this.atk = 5;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 3;
        this.skill = Ability_1.Ability.SLEEP;
        this.attackSprite = types_1.AttackSprite.ICE_RANGE;
    }
}
exports.Vanillite = Vanillite;
class Vanillish extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.FAIRY,
            Synergy_1.Synergy.ICE,
            Synergy_1.Synergy.AMORPHOUS
        ]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.VANILLUXE;
        this.hp = 130;
        this.atk = 9;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 3;
        this.skill = Ability_1.Ability.SLEEP;
        this.attackSprite = types_1.AttackSprite.ICE_RANGE;
    }
}
exports.Vanillish = Vanillish;
class Vanilluxe extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.FAIRY,
            Synergy_1.Synergy.ICE,
            Synergy_1.Synergy.AMORPHOUS
        ]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 3;
        this.hp = 230;
        this.atk = 21;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 3;
        this.skill = Ability_1.Ability.SLEEP;
        this.attackSprite = types_1.AttackSprite.ICE_RANGE;
    }
}
exports.Vanilluxe = Vanilluxe;
class Trapinch extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.BUG, Synergy_1.Synergy.GROUND]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.VIBRAVA;
        this.hp = 80;
        this.atk = 8;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.DRAGON_TAIL;
        this.attackSprite = types_1.AttackSprite.DRAGON_MELEE;
    }
}
exports.Trapinch = Trapinch;
class Vibrava extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DRAGON, Synergy_1.Synergy.BUG, Synergy_1.Synergy.GROUND]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.FLYGON;
        this.hp = 120;
        this.atk = 13;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.DRAGON_TAIL;
        this.attackSprite = types_1.AttackSprite.DRAGON_MELEE;
    }
}
exports.Vibrava = Vibrava;
class Flygon extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DRAGON, Synergy_1.Synergy.BUG, Synergy_1.Synergy.GROUND]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 3;
        this.hp = 180;
        this.atk = 26;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.DRAGON_TAIL;
        this.attackSprite = types_1.AttackSprite.DRAGON_MELEE;
    }
}
exports.Flygon = Flygon;
class Pichu extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.ELECTRIC,
            Synergy_1.Synergy.FAIRY,
            Synergy_1.Synergy.BABY
        ]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.PIKACHU;
        this.hp = 60;
        this.atk = 5;
        this.def = 1;
        this.speDef = 1;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.NUZZLE;
        this.attackSprite = types_1.AttackSprite.ELECTRIC_MELEE;
    }
}
exports.Pichu = Pichu;
class Pikachu extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.ELECTRIC, Synergy_1.Synergy.FAIRY]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.RAICHU;
        this.evolutionRule = new evolution_rules_1.CountEvolutionRule(3, (pokemon, player) => {
            if (player.regionalPokemons.includes(Pokemon_1.Pkm.ALOLAN_RAICHU))
                return Pokemon_1.Pkm.ALOLAN_RAICHU;
            else
                return Pokemon_1.Pkm.RAICHU;
        });
        this.hp = 120;
        this.atk = 9;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.NUZZLE;
        this.attackSprite = types_1.AttackSprite.ELECTRIC_MELEE;
    }
}
exports.Pikachu = Pikachu;
class Raichu extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.ELECTRIC, Synergy_1.Synergy.FAIRY]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 3;
        this.hp = 220;
        this.atk = 18;
        this.def = 5;
        this.speDef = 5;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.NUZZLE;
        this.attackSprite = types_1.AttackSprite.ELECTRIC_MELEE;
    }
}
exports.Raichu = Raichu;
class AlolanRaichu extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.ELECTRIC,
            Synergy_1.Synergy.FAIRY,
            Synergy_1.Synergy.PSYCHIC
        ]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 4;
        this.hp = 230;
        this.atk = 20;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.NUZZLE;
        this.passive = Passive_1.Passive.SURGE_SURFER;
        this.attackSprite = types_1.AttackSprite.ELECTRIC_MELEE;
        this.regional = true;
    }
    isInRegion(map, state) {
        var _a;
        const regionSynergies = (_a = Dungeon_1.DungeonDetails[map]) === null || _a === void 0 ? void 0 : _a.synergies;
        return regionSynergies.includes(Synergy_1.Synergy.PSYCHIC);
    }
}
exports.AlolanRaichu = AlolanRaichu;
class Bulbasaur extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GRASS, Synergy_1.Synergy.POISON, Synergy_1.Synergy.FLORA]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.IVYSAUR;
        this.hp = 80;
        this.atk = 5;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 65;
        this.range = 2;
        this.skill = Ability_1.Ability.MAGICAL_LEAF;
        this.attackSprite = types_1.AttackSprite.GRASS_RANGE;
    }
}
exports.Bulbasaur = Bulbasaur;
class Ivysaur extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GRASS, Synergy_1.Synergy.POISON, Synergy_1.Synergy.FLORA]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.VENUSAUR;
        this.hp = 130;
        this.atk = 10;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 65;
        this.range = 2;
        this.skill = Ability_1.Ability.MAGICAL_LEAF;
        this.attackSprite = types_1.AttackSprite.GRASS_RANGE;
    }
}
exports.Ivysaur = Ivysaur;
class Venusaur extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GRASS, Synergy_1.Synergy.POISON, Synergy_1.Synergy.FLORA]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 3;
        this.hp = 240;
        this.atk = 18;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 65;
        this.range = 2;
        this.skill = Ability_1.Ability.MAGICAL_LEAF;
        this.attackSprite = types_1.AttackSprite.GRASS_RANGE;
    }
}
exports.Venusaur = Venusaur;
class Igglybuff extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.BABY, Synergy_1.Synergy.SOUND, Synergy_1.Synergy.NORMAL]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.JIGGLYPUFF;
        this.hp = 65;
        this.atk = 5;
        this.def = 1;
        this.speDef = 1;
        this.maxPP = 90;
        this.range = 2;
        this.skill = Ability_1.Ability.SLEEP;
        this.attackSprite = types_1.AttackSprite.SOUND_RANGE;
    }
}
exports.Igglybuff = Igglybuff;
class Jigglypuff extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FAIRY, Synergy_1.Synergy.SOUND, Synergy_1.Synergy.NORMAL]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.WIGGLYTUFF;
        this.hp = 120;
        this.atk = 9;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 90;
        this.range = 2;
        this.skill = Ability_1.Ability.SLEEP;
        this.attackSprite = types_1.AttackSprite.SOUND_RANGE;
    }
}
exports.Jigglypuff = Jigglypuff;
class Wigglytuff extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FAIRY, Synergy_1.Synergy.SOUND, Synergy_1.Synergy.NORMAL]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 3;
        this.hp = 210;
        this.atk = 18;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 90;
        this.range = 2;
        this.skill = Ability_1.Ability.SLEEP;
        this.attackSprite = types_1.AttackSprite.SOUND_RANGE;
    }
}
exports.Wigglytuff = Wigglytuff;
class Duskull extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DARK, Synergy_1.Synergy.GHOST]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.DUSCLOPS;
        this.hp = 70;
        this.atk = 6;
        this.def = 1;
        this.speDef = 1;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.SHADOW_BALL;
        this.attackSprite = types_1.AttackSprite.GHOST_RANGE;
    }
}
exports.Duskull = Duskull;
class Dusclops extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DARK, Synergy_1.Synergy.GHOST]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.DUSKNOIR;
        this.hp = 150;
        this.atk = 11;
        this.def = 1;
        this.speDef = 1;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.SHADOW_BALL;
        this.attackSprite = types_1.AttackSprite.GHOST_RANGE;
    }
}
exports.Dusclops = Dusclops;
class Dusknoir extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DARK, Synergy_1.Synergy.GHOST]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 3;
        this.hp = 240;
        this.atk = 24;
        this.def = 1;
        this.speDef = 1;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.SHADOW_BALL;
        this.attackSprite = types_1.AttackSprite.GHOST_RANGE;
    }
}
exports.Dusknoir = Dusknoir;
class Magnemite extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.ELECTRIC, Synergy_1.Synergy.STEEL]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.MAGNETON;
        this.hp = 80;
        this.atk = 5;
        this.def = 1;
        this.speDef = 1;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.MAGNET_BOMB;
        this.attackSprite = types_1.AttackSprite.ELECTRIC_RANGE;
    }
}
exports.Magnemite = Magnemite;
class Magneton extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.ELECTRIC, Synergy_1.Synergy.STEEL]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.MAGNEZONE;
        this.hp = 150;
        this.atk = 9;
        this.def = 1;
        this.speDef = 1;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.MAGNET_BOMB;
        this.attackSprite = types_1.AttackSprite.ELECTRIC_RANGE;
    }
}
exports.Magneton = Magneton;
class Magnezone extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.ELECTRIC, Synergy_1.Synergy.STEEL]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 3;
        this.hp = 250;
        this.atk = 20;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.MAGNET_BOMB;
        this.attackSprite = types_1.AttackSprite.ELECTRIC_RANGE;
    }
}
exports.Magnezone = Magnezone;
class Horsea extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DRAGON, Synergy_1.Synergy.WATER]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.SEADRA;
        this.hp = 70;
        this.atk = 6;
        this.def = 1;
        this.speDef = 1;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.WHIRLPOOL;
        this.attackSprite = types_1.AttackSprite.WATER_RANGE;
    }
}
exports.Horsea = Horsea;
class Seadra extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DRAGON, Synergy_1.Synergy.WATER]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.KINGDRA;
        this.hp = 140;
        this.atk = 12;
        this.def = 1;
        this.speDef = 1;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.WHIRLPOOL;
        this.attackSprite = types_1.AttackSprite.WATER_RANGE;
    }
}
exports.Seadra = Seadra;
class Kingdra extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DRAGON, Synergy_1.Synergy.WATER]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 3;
        this.hp = 250;
        this.atk = 22;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.WHIRLPOOL;
        this.attackSprite = types_1.AttackSprite.WATER_RANGE;
    }
}
exports.Kingdra = Kingdra;
class Flabebe extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.SOUND, Synergy_1.Synergy.FAIRY, Synergy_1.Synergy.FLORA]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.FLOETTE;
        this.hp = 60;
        this.atk = 5;
        this.def = 1;
        this.speDef = 1;
        this.maxPP = 90;
        this.range = 3;
        this.skill = Ability_1.Ability.FAIRY_WIND;
        this.attackSprite = types_1.AttackSprite.FAIRY_RANGE;
    }
}
exports.Flabebe = Flabebe;
class Floette extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.SOUND, Synergy_1.Synergy.FAIRY, Synergy_1.Synergy.FLORA]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.FLORGES;
        this.hp = 120;
        this.atk = 9;
        this.def = 1;
        this.speDef = 1;
        this.maxPP = 90;
        this.range = 3;
        this.skill = Ability_1.Ability.FAIRY_WIND;
        this.attackSprite = types_1.AttackSprite.FAIRY_RANGE;
    }
}
exports.Floette = Floette;
class Florges extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.SOUND, Synergy_1.Synergy.FAIRY, Synergy_1.Synergy.FLORA]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 3;
        this.hp = 210;
        this.atk = 20;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 90;
        this.range = 3;
        this.skill = Ability_1.Ability.FAIRY_WIND;
        this.attackSprite = types_1.AttackSprite.FAIRY_RANGE;
    }
}
exports.Florges = Florges;
class Chikorita extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GRASS, Synergy_1.Synergy.FLORA]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.BAYLEEF;
        this.hp = 70;
        this.atk = 6;
        this.def = 1;
        this.speDef = 1;
        this.maxPP = 90;
        this.range = 2;
        this.skill = Ability_1.Ability.STUN_SPORE;
        this.attackSprite = types_1.AttackSprite.GRASS_RANGE;
    }
}
exports.Chikorita = Chikorita;
class Bayleef extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GRASS, Synergy_1.Synergy.FLORA]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.MEGANIUM;
        this.hp = 140;
        this.atk = 12;
        this.def = 1;
        this.speDef = 1;
        this.maxPP = 90;
        this.range = 2;
        this.skill = Ability_1.Ability.STUN_SPORE;
        this.attackSprite = types_1.AttackSprite.GRASS_RANGE;
    }
}
exports.Bayleef = Bayleef;
class Meganium extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GRASS, Synergy_1.Synergy.FLORA]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 3;
        this.hp = 250;
        this.atk = 27;
        this.def = 1;
        this.speDef = 1;
        this.maxPP = 90;
        this.range = 2;
        this.skill = Ability_1.Ability.STUN_SPORE;
        this.attackSprite = types_1.AttackSprite.GRASS_RANGE;
    }
}
exports.Meganium = Meganium;
class Venipede extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.BUG, Synergy_1.Synergy.POISON]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.WHIRLIPEDE;
        this.hp = 70;
        this.atk = 5;
        this.def = 3;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.DEFAULT;
        this.attackSprite = types_1.AttackSprite.GRASS_MELEE;
    }
}
exports.Venipede = Venipede;
class Whirlipede extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.BUG, Synergy_1.Synergy.POISON]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.SCOLIPEDE;
        this.hp = 120;
        this.atk = 9;
        this.def = 3;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.DEFAULT;
        this.attackSprite = types_1.AttackSprite.GRASS_MELEE;
    }
}
exports.Whirlipede = Whirlipede;
class Scolipede extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.BUG, Synergy_1.Synergy.POISON]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 3;
        this.hp = 210;
        this.atk = 20;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.DEFAULT;
        this.attackSprite = types_1.AttackSprite.GRASS_MELEE;
    }
}
exports.Scolipede = Scolipede;
class Spheal extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.AQUATIC, Synergy_1.Synergy.ICE]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.SEALEO;
        this.hp = 80;
        this.atk = 6;
        this.def = 3;
        this.speDef = 2;
        this.maxPP = 90;
        this.range = 1;
        this.skill = Ability_1.Ability.ICE_BALL;
        this.attackSprite = types_1.AttackSprite.ICE_MELEE;
    }
}
exports.Spheal = Spheal;
class Sealeo extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.AQUATIC, Synergy_1.Synergy.ICE]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.WALREIN;
        this.hp = 150;
        this.atk = 12;
        this.def = 3;
        this.speDef = 2;
        this.maxPP = 90;
        this.range = 1;
        this.skill = Ability_1.Ability.ICE_BALL;
        this.attackSprite = types_1.AttackSprite.ICE_MELEE;
    }
}
exports.Sealeo = Sealeo;
class Walrein extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.AQUATIC, Synergy_1.Synergy.ICE]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 3;
        this.hp = 300;
        this.atk = 24;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 90;
        this.range = 1;
        this.skill = Ability_1.Ability.ICE_BALL;
        this.attackSprite = types_1.AttackSprite.ICE_MELEE;
    }
}
exports.Walrein = Walrein;
class NidoranF extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.POISON,
            Synergy_1.Synergy.FIELD,
            Synergy_1.Synergy.GROUND
        ]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.NIDORINA;
        this.hp = 70;
        this.atk = 5;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 90;
        this.range = 1;
        this.skill = Ability_1.Ability.VENOSHOCK;
        this.attackSprite = types_1.AttackSprite.POISON_MELEE;
    }
}
exports.NidoranF = NidoranF;
class Nidorina extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.POISON,
            Synergy_1.Synergy.FIELD,
            Synergy_1.Synergy.GROUND
        ]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.NIDOQUEEN;
        this.hp = 130;
        this.atk = 10;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 90;
        this.range = 1;
        this.skill = Ability_1.Ability.VENOSHOCK;
        this.attackSprite = types_1.AttackSprite.POISON_MELEE;
    }
}
exports.Nidorina = Nidorina;
class Nidoqueen extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.POISON,
            Synergy_1.Synergy.FIELD,
            Synergy_1.Synergy.GROUND
        ]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 3;
        this.hp = 230;
        this.atk = 21;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 90;
        this.range = 1;
        this.skill = Ability_1.Ability.VENOSHOCK;
        this.attackSprite = types_1.AttackSprite.POISON_MELEE;
    }
}
exports.Nidoqueen = Nidoqueen;
class NidoranM extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.POISON,
            Synergy_1.Synergy.FIELD,
            Synergy_1.Synergy.GROUND
        ]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.NIDORINO;
        this.hp = 70;
        this.atk = 5;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 90;
        this.range = 1;
        this.skill = Ability_1.Ability.POISON;
        this.attackSprite = types_1.AttackSprite.POISON_MELEE;
        this.regional = true;
    }
}
exports.NidoranM = NidoranM;
class Nidorino extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.POISON,
            Synergy_1.Synergy.FIELD,
            Synergy_1.Synergy.GROUND
        ]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.NIDOKING;
        this.hp = 140;
        this.atk = 10;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 90;
        this.range = 1;
        this.skill = Ability_1.Ability.POISON;
        this.attackSprite = types_1.AttackSprite.POISON_MELEE;
        this.regional = true;
    }
}
exports.Nidorino = Nidorino;
class Nidoking extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.POISON,
            Synergy_1.Synergy.FIELD,
            Synergy_1.Synergy.GROUND
        ]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 3;
        this.hp = 250;
        this.atk = 21;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 90;
        this.range = 1;
        this.skill = Ability_1.Ability.POISON;
        this.attackSprite = types_1.AttackSprite.POISON_MELEE;
        this.regional = true;
    }
}
exports.Nidoking = Nidoking;
class Machop extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FIGHTING, Synergy_1.Synergy.HUMAN]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.MACHOKE;
        this.hp = 70;
        this.atk = 6;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.GUILLOTINE;
        this.attackSprite = types_1.AttackSprite.FIGHTING_MELEE;
    }
}
exports.Machop = Machop;
class Machoke extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FIGHTING, Synergy_1.Synergy.HUMAN]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.MACHAMP;
        this.hp = 130;
        this.atk = 12;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.GUILLOTINE;
        this.attackSprite = types_1.AttackSprite.FIGHTING_MELEE;
    }
}
exports.Machoke = Machoke;
class Machamp extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FIGHTING, Synergy_1.Synergy.HUMAN]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 3;
        this.hp = 220;
        this.atk = 22;
        this.def = 5;
        this.speDef = 5;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.GUILLOTINE;
        this.attackSprite = types_1.AttackSprite.FIGHTING_MELEE;
    }
}
exports.Machamp = Machamp;
class Piplup extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WATER, Synergy_1.Synergy.ICE, Synergy_1.Synergy.STEEL]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.PRINPLUP;
        this.hp = 60;
        this.atk = 5;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.METAL_CLAW;
        this.attackSprite = types_1.AttackSprite.WATER_MELEE;
    }
}
exports.Piplup = Piplup;
class Prinplup extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WATER, Synergy_1.Synergy.ICE, Synergy_1.Synergy.STEEL]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.EMPOLEON;
        this.hp = 130;
        this.atk = 9;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.METAL_CLAW;
        this.attackSprite = types_1.AttackSprite.WATER_MELEE;
    }
}
exports.Prinplup = Prinplup;
class Empoleon extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WATER, Synergy_1.Synergy.ICE, Synergy_1.Synergy.STEEL]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 3;
        this.hp = 240;
        this.atk = 20;
        this.def = 5;
        this.speDef = 5;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.METAL_CLAW;
        this.attackSprite = types_1.AttackSprite.WATER_MELEE;
    }
}
exports.Empoleon = Empoleon;
class Chimchar extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.FIRE,
            Synergy_1.Synergy.FIGHTING,
            Synergy_1.Synergy.HUMAN
        ]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.MONFERNO;
        this.hp = 60;
        this.atk = 5;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.TORMENT;
        this.attackSprite = types_1.AttackSprite.FIRE_MELEE;
        this.regional = true;
    }
    isInRegion(map, state) {
        var _a;
        const regionSynergies = (_a = Dungeon_1.DungeonDetails[map]) === null || _a === void 0 ? void 0 : _a.synergies;
        return regionSynergies.includes(Synergy_1.Synergy.HUMAN);
    }
}
exports.Chimchar = Chimchar;
class Monferno extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.FIRE,
            Synergy_1.Synergy.FIGHTING,
            Synergy_1.Synergy.HUMAN
        ]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.INFERNAPE;
        this.hp = 100;
        this.atk = 11;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.TORMENT;
        this.attackSprite = types_1.AttackSprite.FIRE_MELEE;
        this.regional = true;
    }
    isInRegion(map, state) {
        var _a;
        const regionSynergies = (_a = Dungeon_1.DungeonDetails[map]) === null || _a === void 0 ? void 0 : _a.synergies;
        return regionSynergies.includes(Synergy_1.Synergy.HUMAN);
    }
}
exports.Monferno = Monferno;
class Infernape extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.FIRE,
            Synergy_1.Synergy.FIGHTING,
            Synergy_1.Synergy.HUMAN
        ]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 3;
        this.hp = 180;
        this.atk = 22;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.TORMENT;
        this.attackSprite = types_1.AttackSprite.FIRE_MELEE;
        this.regional = true;
    }
    isInRegion(map, state) {
        var _a;
        const regionSynergies = (_a = Dungeon_1.DungeonDetails[map]) === null || _a === void 0 ? void 0 : _a.synergies;
        return regionSynergies.includes(Synergy_1.Synergy.HUMAN);
    }
}
exports.Infernape = Infernape;
class Mudkip extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WATER, Synergy_1.Synergy.GROUND]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.MARSHTOMP;
        this.hp = 65;
        this.atk = 5;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 60;
        this.range = 1;
        this.skill = Ability_1.Ability.MUD_BUBBLE;
        this.passive = Passive_1.Passive.WATER_SPRING;
        this.attackSprite = types_1.AttackSprite.WATER_MELEE;
    }
}
exports.Mudkip = Mudkip;
class Marshtomp extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WATER, Synergy_1.Synergy.GROUND]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.SWAMPERT;
        this.hp = 130;
        this.atk = 9;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 60;
        this.range = 1;
        this.skill = Ability_1.Ability.MUD_BUBBLE;
        this.passive = Passive_1.Passive.WATER_SPRING;
        this.attackSprite = types_1.AttackSprite.WATER_MELEE;
    }
}
exports.Marshtomp = Marshtomp;
class Swampert extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WATER, Synergy_1.Synergy.GROUND]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 3;
        this.hp = 200;
        this.atk = 20;
        this.def = 5;
        this.speDef = 5;
        this.maxPP = 60;
        this.range = 1;
        this.skill = Ability_1.Ability.MUD_BUBBLE;
        this.passive = Passive_1.Passive.WATER_SPRING;
        this.attackSprite = types_1.AttackSprite.WATER_MELEE;
    }
}
exports.Swampert = Swampert;
class Torchic extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.FIRE,
            Synergy_1.Synergy.FIGHTING,
            Synergy_1.Synergy.FLYING
        ]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.COMBUSKEN;
        this.hp = 80;
        this.atk = 6;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.BLAZE_KICK;
        this.attackSprite = types_1.AttackSprite.FLYING_MELEE;
    }
}
exports.Torchic = Torchic;
class Combusken extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.FIRE,
            Synergy_1.Synergy.FIGHTING,
            Synergy_1.Synergy.FLYING
        ]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.BLAZIKEN;
        this.hp = 150;
        this.atk = 12;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.BLAZE_KICK;
        this.attackSprite = types_1.AttackSprite.FLYING_MELEE;
    }
}
exports.Combusken = Combusken;
class Blaziken extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.FIRE,
            Synergy_1.Synergy.FIGHTING,
            Synergy_1.Synergy.FLYING
        ]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 3;
        this.hp = 240;
        this.atk = 24;
        this.def = 5;
        this.speDef = 5;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.BLAZE_KICK;
        this.attackSprite = types_1.AttackSprite.FLYING_MELEE;
    }
}
exports.Blaziken = Blaziken;
class Treecko extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GRASS, Synergy_1.Synergy.MONSTER]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.GROVYLE;
        this.hp = 70;
        this.atk = 5;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.LEAF_BLADE;
        this.attackSprite = types_1.AttackSprite.GRASS_MELEE;
    }
}
exports.Treecko = Treecko;
class Grovyle extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GRASS, Synergy_1.Synergy.MONSTER]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.SCEPTILE;
        this.hp = 120;
        this.atk = 14;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.LEAF_BLADE;
        this.attackSprite = types_1.AttackSprite.GRASS_MELEE;
    }
}
exports.Grovyle = Grovyle;
class Sceptile extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GRASS, Synergy_1.Synergy.MONSTER]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 3;
        this.hp = 210;
        this.atk = 27;
        this.def = 5;
        this.speDef = 5;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.LEAF_BLADE;
        this.attackSprite = types_1.AttackSprite.GRASS_MELEE;
    }
}
exports.Sceptile = Sceptile;
class Cyndaquil extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FIRE, Synergy_1.Synergy.FIELD]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.QUILAVA;
        this.hp = 70;
        this.atk = 7;
        this.def = 1;
        this.speDef = 1;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.WHEEL_OF_FIRE;
        this.attackSprite = types_1.AttackSprite.FIRE_RANGE;
    }
}
exports.Cyndaquil = Cyndaquil;
class Quilava extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FIRE, Synergy_1.Synergy.FIELD]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.TYPHLOSION;
        this.evolutionRule = new evolution_rules_1.CountEvolutionRule(3, (pokemon, player) => {
            if (player.regionalPokemons.includes(Pokemon_1.Pkm.HISUIAN_TYPHLOSION))
                return Pokemon_1.Pkm.HISUIAN_TYPHLOSION;
            else
                return Pokemon_1.Pkm.TYPHLOSION;
        });
        this.hp = 120;
        this.atk = 13;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.WHEEL_OF_FIRE;
        this.attackSprite = types_1.AttackSprite.FIRE_RANGE;
    }
}
exports.Quilava = Quilava;
class Typhlosion extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FIRE, Synergy_1.Synergy.FIELD]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 3;
        this.hp = 230;
        this.atk = 25;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.WHEEL_OF_FIRE;
        this.attackSprite = types_1.AttackSprite.FIRE_RANGE;
    }
}
exports.Typhlosion = Typhlosion;
class HisuianTyphlosion extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FIRE, Synergy_1.Synergy.FIELD, Synergy_1.Synergy.GHOST]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 3;
        this.hp = 230;
        this.atk = 25;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.INFERNAL_PARADE;
        this.attackSprite = types_1.AttackSprite.FIRE_RANGE;
        this.passive = Passive_1.Passive.HISUIAN_TYPHLOSION;
        this.regional = true;
    }
    isInRegion(map, state) {
        var _a;
        const regionSynergies = (_a = Dungeon_1.DungeonDetails[map]) === null || _a === void 0 ? void 0 : _a.synergies;
        return regionSynergies.includes(Synergy_1.Synergy.GHOST);
    }
}
exports.HisuianTyphlosion = HisuianTyphlosion;
class Slowpoke extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.PSYCHIC, Synergy_1.Synergy.AQUATIC]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.SLOWBRO;
        this.hp = 80;
        this.atk = 6;
        this.def = 3;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.YAWN;
        this.attackSprite = types_1.AttackSprite.WATER_MELEE;
        this.regional = true;
    }
}
exports.Slowpoke = Slowpoke;
class Slowbro extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.PSYCHIC, Synergy_1.Synergy.AQUATIC]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.SLOWKING;
        this.hp = 160;
        this.atk = 11;
        this.def = 5;
        this.speDef = 3;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.YAWN;
        this.attackSprite = types_1.AttackSprite.WATER_MELEE;
        this.regional = true;
    }
}
exports.Slowbro = Slowbro;
class Slowking extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.PSYCHIC, Synergy_1.Synergy.AQUATIC]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 3;
        this.hp = 260;
        this.atk = 24;
        this.def = 6;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.YAWN;
        this.attackSprite = types_1.AttackSprite.WATER_MELEE;
        this.regional = true;
    }
}
exports.Slowking = Slowking;
class Psyduck extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WATER, Synergy_1.Synergy.PSYCHIC]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.GOLDUCK;
        this.hp = 75;
        this.atk = 7;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.PSYSHOCK;
        this.passive = Passive_1.Passive.PSYDUCK;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.NORMAL_MELEE;
    }
}
exports.Psyduck = Psyduck;
class Golduck extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WATER, Synergy_1.Synergy.PSYCHIC]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.hp = 170;
        this.atk = 15;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.PSYSHOCK;
        this.passive = Passive_1.Passive.PSYDUCK;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.NORMAL_MELEE;
    }
}
exports.Golduck = Golduck;
class Squirtle extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WATER, Synergy_1.Synergy.FIELD]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.WARTORTLE;
        this.hp = 60;
        this.atk = 5;
        this.def = 1;
        this.speDef = 1;
        this.maxPP = 100;
        this.range = 3;
        this.skill = Ability_1.Ability.HYDRO_PUMP;
        this.attackSprite = types_1.AttackSprite.WATER_RANGE;
    }
}
exports.Squirtle = Squirtle;
class Wartortle extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WATER, Synergy_1.Synergy.FIELD]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.BLASTOISE;
        this.hp = 120;
        this.atk = 9;
        this.def = 1;
        this.speDef = 1;
        this.maxPP = 100;
        this.range = 3;
        this.skill = Ability_1.Ability.HYDRO_PUMP;
        this.attackSprite = types_1.AttackSprite.WATER_RANGE;
    }
}
exports.Wartortle = Wartortle;
class Blastoise extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WATER, Synergy_1.Synergy.FIELD]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 3;
        this.hp = 210;
        this.atk = 20;
        this.def = 1;
        this.speDef = 1;
        this.maxPP = 100;
        this.range = 3;
        this.skill = Ability_1.Ability.HYDRO_PUMP;
        this.attackSprite = types_1.AttackSprite.WATER_RANGE;
    }
}
exports.Blastoise = Blastoise;
class Bellsprout extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GRASS, Synergy_1.Synergy.POISON, Synergy_1.Synergy.FLORA]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.WEEPINBELL;
        this.hp = 70;
        this.atk = 5;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.ROOT;
        this.attackSprite = types_1.AttackSprite.GRASS_MELEE;
        this.regional = true;
    }
    isInRegion(map, state) {
        var _a;
        const regionSynergies = (_a = Dungeon_1.DungeonDetails[map]) === null || _a === void 0 ? void 0 : _a.synergies;
        return (regionSynergies.includes(Synergy_1.Synergy.GRASS) ||
            regionSynergies.includes(Synergy_1.Synergy.FLORA));
    }
}
exports.Bellsprout = Bellsprout;
class Weepinbell extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GRASS, Synergy_1.Synergy.POISON, Synergy_1.Synergy.FLORA]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.VICTREEBEL;
        this.hp = 160;
        this.atk = 12;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.ROOT;
        this.attackSprite = types_1.AttackSprite.GRASS_MELEE;
        this.regional = true;
    }
    isInRegion(map, state) {
        var _a;
        const regionSynergies = (_a = Dungeon_1.DungeonDetails[map]) === null || _a === void 0 ? void 0 : _a.synergies;
        return (regionSynergies.includes(Synergy_1.Synergy.GRASS) ||
            regionSynergies.includes(Synergy_1.Synergy.FLORA));
    }
}
exports.Weepinbell = Weepinbell;
class Victreebel extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GRASS, Synergy_1.Synergy.POISON, Synergy_1.Synergy.FLORA]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 3;
        this.hp = 240;
        this.atk = 20;
        this.def = 4;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.ROOT;
        this.attackSprite = types_1.AttackSprite.GRASS_MELEE;
        this.regional = true;
    }
    isInRegion(map, state) {
        var _a;
        const regionSynergies = (_a = Dungeon_1.DungeonDetails[map]) === null || _a === void 0 ? void 0 : _a.synergies;
        return (regionSynergies.includes(Synergy_1.Synergy.GRASS) ||
            regionSynergies.includes(Synergy_1.Synergy.FLORA));
    }
}
exports.Victreebel = Victreebel;
class Geodude extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GROUND, Synergy_1.Synergy.ROCK]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.GRAVELER;
        this.hp = 70;
        this.atk = 4;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.ROCK_SLIDE;
        this.attackSprite = types_1.AttackSprite.ROCK_MELEE;
    }
}
exports.Geodude = Geodude;
class Graveler extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GROUND, Synergy_1.Synergy.ROCK]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.GOLEM;
        this.hp = 120;
        this.atk = 9;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.ROCK_SLIDE;
        this.attackSprite = types_1.AttackSprite.ROCK_MELEE;
    }
}
exports.Graveler = Graveler;
class Golem extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GROUND, Synergy_1.Synergy.ROCK]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 3;
        this.hp = 200;
        this.atk = 16;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.ROCK_SLIDE;
        this.attackSprite = types_1.AttackSprite.ROCK_MELEE;
    }
}
exports.Golem = Golem;
class Totodile extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.WATER,
            Synergy_1.Synergy.MONSTER,
            Synergy_1.Synergy.AQUATIC
        ]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.CROCONAW;
        this.hp = 75;
        this.atk = 7;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 120;
        this.range = 1;
        this.skill = Ability_1.Ability.CRUNCH;
        this.attackSprite = types_1.AttackSprite.WATER_MELEE;
    }
}
exports.Totodile = Totodile;
class Croconaw extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.WATER,
            Synergy_1.Synergy.MONSTER,
            Synergy_1.Synergy.AQUATIC
        ]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.FERALIGATR;
        this.hp = 130;
        this.atk = 15;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 120;
        this.range = 1;
        this.skill = Ability_1.Ability.CRUNCH;
        this.attackSprite = types_1.AttackSprite.WATER_MELEE;
    }
}
exports.Croconaw = Croconaw;
class Feraligatr extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.WATER,
            Synergy_1.Synergy.MONSTER,
            Synergy_1.Synergy.AQUATIC
        ]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 3;
        this.hp = 240;
        this.atk = 28;
        this.def = 5;
        this.speDef = 5;
        this.maxPP = 120;
        this.range = 1;
        this.skill = Ability_1.Ability.CRUNCH;
        this.attackSprite = types_1.AttackSprite.WATER_MELEE;
    }
}
exports.Feraligatr = Feraligatr;
class Azurill extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WATER, Synergy_1.Synergy.FAIRY, Synergy_1.Synergy.BABY]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.MARILL;
        this.hp = 50;
        this.atk = 5;
        this.def = 1;
        this.speDef = 1;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.PLAY_ROUGH;
        this.attackSprite = types_1.AttackSprite.WATER_RANGE;
    }
}
exports.Azurill = Azurill;
class Marill extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WATER, Synergy_1.Synergy.FAIRY]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.AZUMARILL;
        this.hp = 110;
        this.atk = 9;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.PLAY_ROUGH;
        this.attackSprite = types_1.AttackSprite.WATER_RANGE;
    }
}
exports.Marill = Marill;
class Azumarill extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WATER, Synergy_1.Synergy.FAIRY]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 3;
        this.hp = 200;
        this.atk = 20;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.PLAY_ROUGH;
        this.attackSprite = types_1.AttackSprite.WATER_RANGE;
    }
}
exports.Azumarill = Azumarill;
class Zubat extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.POISON,
            Synergy_1.Synergy.FLYING,
            Synergy_1.Synergy.SOUND
        ]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.GOLBAT;
        this.hp = 50;
        this.atk = 5;
        this.def = 1;
        this.speDef = 1;
        this.maxPP = 90;
        this.range = 2;
        this.skill = Ability_1.Ability.LEECH_LIFE;
        this.attackSprite = types_1.AttackSprite.PSYCHIC_RANGE;
    }
}
exports.Zubat = Zubat;
class Golbat extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.POISON,
            Synergy_1.Synergy.FLYING,
            Synergy_1.Synergy.SOUND
        ]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.CROBAT;
        this.hp = 100;
        this.atk = 9;
        this.def = 1;
        this.speDef = 1;
        this.maxPP = 90;
        this.range = 2;
        this.skill = Ability_1.Ability.LEECH_LIFE;
        this.attackSprite = types_1.AttackSprite.PSYCHIC_RANGE;
    }
}
exports.Golbat = Golbat;
class Crobat extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.POISON,
            Synergy_1.Synergy.FLYING,
            Synergy_1.Synergy.SOUND
        ]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 3;
        this.hp = 200;
        this.atk = 18;
        this.def = 1;
        this.speDef = 1;
        this.maxPP = 90;
        this.range = 2;
        this.skill = Ability_1.Ability.LEECH_LIFE;
        this.attackSprite = types_1.AttackSprite.PSYCHIC_RANGE;
    }
}
exports.Crobat = Crobat;
class Mareep extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.ELECTRIC,
            Synergy_1.Synergy.FIELD,
            Synergy_1.Synergy.LIGHT
        ]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.FLAFFY;
        this.hp = 60;
        this.atk = 5;
        this.def = 1;
        this.speDef = 1;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.THUNDER;
        this.attackSprite = types_1.AttackSprite.ELECTRIC_RANGE;
    }
}
exports.Mareep = Mareep;
class Flaffy extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.ELECTRIC,
            Synergy_1.Synergy.FIELD,
            Synergy_1.Synergy.LIGHT
        ]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.AMPHAROS;
        this.hp = 110;
        this.atk = 9;
        this.def = 1;
        this.speDef = 1;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.THUNDER;
        this.attackSprite = types_1.AttackSprite.ELECTRIC_RANGE;
    }
}
exports.Flaffy = Flaffy;
class Ampharos extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.ELECTRIC,
            Synergy_1.Synergy.FIELD,
            Synergy_1.Synergy.LIGHT
        ]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 3;
        this.hp = 220;
        this.atk = 18;
        this.def = 1;
        this.speDef = 1;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.THUNDER;
        this.attackSprite = types_1.AttackSprite.ELECTRIC_RANGE;
    }
}
exports.Ampharos = Ampharos;
class Cleffa extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FAIRY, Synergy_1.Synergy.NORMAL, Synergy_1.Synergy.BABY]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.CLEFAIRY;
        this.hp = 70;
        this.atk = 5;
        this.def = 1;
        this.speDef = 1;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.METRONOME;
        this.attackSprite = types_1.AttackSprite.FAIRY_MELEE;
        this.regional = true;
    }
    isInRegion(map, state) {
        var _a;
        const regionSynergies = (_a = Dungeon_1.DungeonDetails[map]) === null || _a === void 0 ? void 0 : _a.synergies;
        return (regionSynergies.includes(Synergy_1.Synergy.NORMAL) ||
            regionSynergies.includes(Synergy_1.Synergy.BABY) ||
            regionSynergies.includes(Synergy_1.Synergy.LIGHT));
    }
}
exports.Cleffa = Cleffa;
class Clefairy extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FAIRY, Synergy_1.Synergy.NORMAL, Synergy_1.Synergy.LIGHT]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.CLEFABLE;
        this.hp = 150;
        this.atk = 11;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.METRONOME;
        this.attackSprite = types_1.AttackSprite.FAIRY_MELEE;
        this.regional = true;
    }
    isInRegion(map, state) {
        var _a;
        const regionSynergies = (_a = Dungeon_1.DungeonDetails[map]) === null || _a === void 0 ? void 0 : _a.synergies;
        return (regionSynergies.includes(Synergy_1.Synergy.NORMAL) ||
            regionSynergies.includes(Synergy_1.Synergy.BABY) ||
            regionSynergies.includes(Synergy_1.Synergy.LIGHT));
    }
}
exports.Clefairy = Clefairy;
class Clefable extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FAIRY, Synergy_1.Synergy.NORMAL, Synergy_1.Synergy.LIGHT]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 3;
        this.hp = 220;
        this.atk = 18;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.METRONOME;
        this.attackSprite = types_1.AttackSprite.FAIRY_MELEE;
        this.regional = true;
    }
    isInRegion(map, state) {
        var _a;
        const regionSynergies = (_a = Dungeon_1.DungeonDetails[map]) === null || _a === void 0 ? void 0 : _a.synergies;
        return (regionSynergies.includes(Synergy_1.Synergy.NORMAL) ||
            regionSynergies.includes(Synergy_1.Synergy.BABY) ||
            regionSynergies.includes(Synergy_1.Synergy.LIGHT));
    }
}
exports.Clefable = Clefable;
class Caterpie extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GRASS, Synergy_1.Synergy.BUG]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.METAPOD;
        this.hp = 60;
        this.atk = 5;
        this.def = 1;
        this.speDef = 1;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.STRING_SHOT;
        this.attackSprite = types_1.AttackSprite.BUG_RANGE;
    }
}
exports.Caterpie = Caterpie;
class Metapod extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GRASS, Synergy_1.Synergy.BUG]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.BUTTERFREE;
        this.hp = 110;
        this.atk = 9;
        this.def = 3;
        this.speDef = 1;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.STRING_SHOT;
        this.attackSprite = types_1.AttackSprite.BUG_RANGE;
    }
}
exports.Metapod = Metapod;
class Butterfree extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GRASS, Synergy_1.Synergy.BUG, Synergy_1.Synergy.FLYING]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 3;
        this.hp = 180;
        this.atk = 16;
        this.def = 2;
        this.speDef = 3;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.STRING_SHOT;
        this.attackSprite = types_1.AttackSprite.BUG_RANGE;
    }
}
exports.Butterfree = Butterfree;
class Weedle extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.POISON, Synergy_1.Synergy.BUG]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.KAKUNA;
        this.hp = 60;
        this.atk = 5;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.BUG_BUZZ;
        this.attackSprite = types_1.AttackSprite.BUG_MELEE;
    }
}
exports.Weedle = Weedle;
class Kakuna extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.POISON, Synergy_1.Synergy.BUG]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.BEEDRILL;
        this.hp = 110;
        this.atk = 10;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.BUG_BUZZ;
        this.attackSprite = types_1.AttackSprite.BUG_MELEE;
    }
}
exports.Kakuna = Kakuna;
class Beedrill extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.POISON, Synergy_1.Synergy.BUG, Synergy_1.Synergy.FLYING]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 3;
        this.hp = 180;
        this.atk = 18;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.BUG_BUZZ;
        this.attackSprite = types_1.AttackSprite.BUG_MELEE;
    }
}
exports.Beedrill = Beedrill;
class Pidgey extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.NORMAL, Synergy_1.Synergy.FLYING]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.PIDGEOTTO;
        this.hp = 60;
        this.atk = 5;
        this.def = 1;
        this.speDef = 1;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.HURRICANE;
        this.attackSprite = types_1.AttackSprite.FLYING_RANGE;
    }
}
exports.Pidgey = Pidgey;
class Pidgeotto extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.NORMAL, Synergy_1.Synergy.FLYING]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.PIDGEOT;
        this.hp = 110;
        this.atk = 9;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.HURRICANE;
        this.attackSprite = types_1.AttackSprite.FLYING_RANGE;
    }
}
exports.Pidgeotto = Pidgeotto;
class Pidgeot extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.NORMAL, Synergy_1.Synergy.FLYING]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 3;
        this.hp = 200;
        this.atk = 18;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.HURRICANE;
        this.attackSprite = types_1.AttackSprite.FLYING_RANGE;
    }
}
exports.Pidgeot = Pidgeot;
class Hoppip extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FLYING, Synergy_1.Synergy.FLORA, Synergy_1.Synergy.GRASS]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.SKIPLOOM;
        this.hp = 50;
        this.atk = 5;
        this.def = 1;
        this.speDef = 1;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.ACROBATICS;
        this.attackSprite = types_1.AttackSprite.FLYING_RANGE;
    }
}
exports.Hoppip = Hoppip;
class Skiploom extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FLYING, Synergy_1.Synergy.FLORA, Synergy_1.Synergy.GRASS]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.JUMPLUFF;
        this.hp = 110;
        this.atk = 9;
        this.def = 1;
        this.speDef = 1;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.ACROBATICS;
        this.attackSprite = types_1.AttackSprite.FLYING_RANGE;
    }
}
exports.Skiploom = Skiploom;
class Jumpluff extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FLYING, Synergy_1.Synergy.FLORA, Synergy_1.Synergy.GRASS]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 3;
        this.hp = 220;
        this.atk = 18;
        this.def = 1;
        this.speDef = 1;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.ACROBATICS;
        this.attackSprite = types_1.AttackSprite.FLYING_RANGE;
    }
}
exports.Jumpluff = Jumpluff;
class Seedot extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GRASS, Synergy_1.Synergy.DARK]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.NUZLEAF;
        this.hp = 60;
        this.atk = 6;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.PAYBACK;
        this.attackSprite = types_1.AttackSprite.GRASS_MELEE;
    }
}
exports.Seedot = Seedot;
class Nuzleaf extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GRASS, Synergy_1.Synergy.DARK]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.SHIFTRY;
        this.hp = 120;
        this.atk = 10;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.PAYBACK;
        this.attackSprite = types_1.AttackSprite.GRASS_MELEE;
    }
}
exports.Nuzleaf = Nuzleaf;
class Shiftry extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GRASS, Synergy_1.Synergy.DARK]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 3;
        this.hp = 200;
        this.atk = 22;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.PAYBACK;
        this.attackSprite = types_1.AttackSprite.GRASS_MELEE;
    }
}
exports.Shiftry = Shiftry;
class Charmander extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DRAGON, Synergy_1.Synergy.FIRE]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.CHARMELEON;
        this.hp = 60;
        this.atk = 5;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.BLAST_BURN;
        this.attackSprite = types_1.AttackSprite.FIRE_MELEE;
    }
}
exports.Charmander = Charmander;
class Charmeleon extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DRAGON, Synergy_1.Synergy.FIRE]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.CHARIZARD;
        this.hp = 120;
        this.atk = 9;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.BLAST_BURN;
        this.attackSprite = types_1.AttackSprite.FIRE_MELEE;
    }
}
exports.Charmeleon = Charmeleon;
class Charizard extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DRAGON, Synergy_1.Synergy.FIRE, Synergy_1.Synergy.FLYING]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 3;
        this.hp = 220;
        this.atk = 20;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.BLAST_BURN;
        this.attackSprite = types_1.AttackSprite.FIRE_MELEE;
    }
}
exports.Charizard = Charizard;
class Magikarp extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WATER]);
        this.rarity = Game_1.Rarity.SPECIAL;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.GYARADOS;
        this.hp = 30;
        this.atk = 1;
        this.def = 1;
        this.speDef = 1;
        this.maxPP = 50;
        this.range = 1;
        this.skill = Ability_1.Ability.SPLASH;
        this.passive = Passive_1.Passive.MAGIKARP;
        this.attackSprite = types_1.AttackSprite.WATER_MELEE;
        this.evolutionRule = new evolution_rules_1.CountEvolutionRule(8);
    }
}
exports.Magikarp = Magikarp;
class Gyarados extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.DRAGON,
            Synergy_1.Synergy.WATER,
            Synergy_1.Synergy.FLYING
        ]);
        this.rarity = Game_1.Rarity.SPECIAL;
        this.stars = 3;
        this.hp = 300;
        this.atk = 30;
        this.def = 5;
        this.speDef = 1;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.HYDRO_PUMP;
        this.attackSprite = types_1.AttackSprite.WATER_MELEE;
    }
    onAcquired(player) {
        player.titles.add(types_1.Title.FISHERMAN);
    }
}
exports.Gyarados = Gyarados;
class Rattata extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WILD, Synergy_1.Synergy.NORMAL]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.RATICATE;
        this.hp = 50;
        this.atk = 4;
        this.def = 1;
        this.speDef = 1;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.AGILITY;
        this.attackSprite = types_1.AttackSprite.NORMAL_MELEE;
    }
}
exports.Rattata = Rattata;
class Raticate extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WILD, Synergy_1.Synergy.NORMAL]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 2;
        this.hp = 110;
        this.atk = 10;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.AGILITY;
        this.attackSprite = types_1.AttackSprite.NORMAL_MELEE;
    }
}
exports.Raticate = Raticate;
class AlolanRattata extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WILD, Synergy_1.Synergy.DARK]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.ALOLAN_RATICATE;
        this.hp = 60;
        this.atk = 6;
        this.def = 1;
        this.speDef = 1;
        this.maxPP = 90;
        this.range = 1;
        this.skill = Ability_1.Ability.TAIL_WHIP;
        this.attackSprite = types_1.AttackSprite.DARK_MELEE;
        this.regional = true;
    }
    isInRegion(map, state) {
        var _a;
        const regionSynergies = (_a = Dungeon_1.DungeonDetails[map]) === null || _a === void 0 ? void 0 : _a.synergies;
        return regionSynergies.includes(Synergy_1.Synergy.DARK);
    }
}
exports.AlolanRattata = AlolanRattata;
class AlolanRaticate extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WILD, Synergy_1.Synergy.DARK]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 2;
        this.hp = 130;
        this.atk = 15;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 90;
        this.range = 1;
        this.skill = Ability_1.Ability.TAIL_WHIP;
        this.attackSprite = types_1.AttackSprite.DARK_MELEE;
        this.regional = true;
    }
    isInRegion(map, state) {
        var _a;
        const regionSynergies = (_a = Dungeon_1.DungeonDetails[map]) === null || _a === void 0 ? void 0 : _a.synergies;
        return regionSynergies.includes(Synergy_1.Synergy.DARK);
    }
}
exports.AlolanRaticate = AlolanRaticate;
class Spearow extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WILD, Synergy_1.Synergy.FLYING]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.FEAROW;
        this.hp = 50;
        this.atk = 4;
        this.def = 1;
        this.speDef = 1;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.PECK;
        this.attackSprite = types_1.AttackSprite.NORMAL_MELEE;
    }
}
exports.Spearow = Spearow;
class Fearow extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WILD, Synergy_1.Synergy.FLYING]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 2;
        this.hp = 120;
        this.atk = 9;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.PECK;
        this.attackSprite = types_1.AttackSprite.NORMAL_MELEE;
    }
}
exports.Fearow = Fearow;
class Meloetta extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.NORMAL, Synergy_1.Synergy.SOUND]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 250;
        this.atk = 25;
        this.def = 5;
        this.speDef = 5;
        this.maxPP = 60;
        this.range = 4;
        this.skill = Ability_1.Ability.RELIC_SONG;
        this.attackSprite = types_1.AttackSprite.SOUND_RANGE;
        this.passive = Passive_1.Passive.MELOETTA;
    }
    onChangePosition(x, y, player) {
        if (y === 3) {
            player.transformPokemon(this, Pokemon_1.Pkm.PIROUETTE_MELOETTA);
        }
    }
}
exports.Meloetta = Meloetta;
class PirouetteMeloetta extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.NORMAL,
            Synergy_1.Synergy.SOUND,
            Synergy_1.Synergy.FIGHTING
        ]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 250;
        this.atk = 25;
        this.def = 5;
        this.speDef = 5;
        this.maxPP = 90;
        this.range = 1;
        this.skill = Ability_1.Ability.U_TURN;
        this.attackSprite = types_1.AttackSprite.FIGHTING_MELEE;
        this.passive = Passive_1.Passive.MELOETTA;
    }
    onChangePosition(x, y, player) {
        if (y !== 3) {
            player.transformPokemon(this, Pokemon_1.Pkm.MELOETTA);
        }
    }
}
exports.PirouetteMeloetta = PirouetteMeloetta;
class Lugia extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.AQUATIC,
            Synergy_1.Synergy.FLYING,
            Synergy_1.Synergy.PSYCHIC
        ]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.evolution = Pokemon_1.Pkm.SHADOW_LUGIA;
        this.evolutionRule = new evolution_rules_1.ItemEvolutionRule([Item_1.Item.DUSK_STONE]);
        this.stars = 3;
        this.hp = 300;
        this.atk = 30;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.SKY_ATTACK;
        this.passive = Passive_1.Passive.LUGIA;
        this.attackSprite = types_1.AttackSprite.FLYING_MELEE;
    }
}
exports.Lugia = Lugia;
class ShadowLugia extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.AQUATIC,
            Synergy_1.Synergy.FLYING,
            Synergy_1.Synergy.PSYCHIC,
            Synergy_1.Synergy.DARK
        ]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 4;
        this.hp = 300;
        this.atk = 30;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.SKY_ATTACK_SHADOW;
        this.passive = Passive_1.Passive.NIGHT;
        this.attackSprite = types_1.AttackSprite.FLYING_MELEE;
    }
}
exports.ShadowLugia = ShadowLugia;
class Giratina extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DRAGON, Synergy_1.Synergy.GHOST]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 250;
        this.atk = 35;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 40;
        this.range = 1;
        this.skill = Ability_1.Ability.SHADOW_SNEAK;
        this.passive = Passive_1.Passive.GIRATINA;
        this.attackSprite = types_1.AttackSprite.DRAGON_MELEE;
    }
    onChangePosition(x, y, player) {
        if (y !== 3) {
            player.transformPokemon(this, Pokemon_1.Pkm.ORIGIN_GIRATINA);
        }
    }
}
exports.Giratina = Giratina;
class OriginGiratina extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.DRAGON,
            Synergy_1.Synergy.GHOST,
            Synergy_1.Synergy.FLYING
        ]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 200;
        this.atk = 35;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 40;
        this.range = 2;
        this.skill = Ability_1.Ability.SHADOW_SNEAK;
        this.passive = Passive_1.Passive.GIRATINA;
        this.attackSprite = types_1.AttackSprite.GHOST_RANGE;
    }
    onChangePosition(x, y, player) {
        if (y === 3) {
            player.transformPokemon(this, Pokemon_1.Pkm.GIRATINA);
        }
    }
}
exports.OriginGiratina = OriginGiratina;
class Zapdos extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.ELECTRIC, Synergy_1.Synergy.FLYING]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 300;
        this.atk = 30;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 80;
        this.range = 2;
        this.skill = Ability_1.Ability.CHARGE;
        this.passive = Passive_1.Passive.STORM;
        this.attackSprite = types_1.AttackSprite.ELECTRIC_RANGE;
    }
}
exports.Zapdos = Zapdos;
class GalarianZapdos extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FIGHTING, Synergy_1.Synergy.FLYING]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 300;
        this.atk = 30;
        this.def = 5;
        this.speDef = 5;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.THUNDEROUS_KICK;
        this.attackSprite = types_1.AttackSprite.FLYING_MELEE;
    }
}
exports.GalarianZapdos = GalarianZapdos;
class Zeraora extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WILD, Synergy_1.Synergy.ELECTRIC]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 200;
        this.atk = 20;
        this.def = 5;
        this.speDef = 5;
        this.maxPP = 90;
        this.range = 1;
        this.skill = Ability_1.Ability.PLASMA_FIST;
        this.attackSprite = types_1.AttackSprite.ELECTRIC_MELEE;
    }
}
exports.Zeraora = Zeraora;
class Stantler extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WILD, Synergy_1.Synergy.PSYCHIC, Synergy_1.Synergy.FIELD]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 200;
        this.atk = 20;
        this.def = 5;
        this.speDef = 5;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.PSYSHIELD_BASH;
        this.attackSprite = types_1.AttackSprite.NORMAL_MELEE;
    }
}
exports.Stantler = Stantler;
class Miltank extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.NORMAL, Synergy_1.Synergy.FIELD]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 250;
        this.atk = 15;
        this.def = 5;
        this.speDef = 5;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.ROLLOUT;
        this.attackSprite = types_1.AttackSprite.NORMAL_MELEE;
    }
}
exports.Miltank = Miltank;
class Yveltal extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DARK, Synergy_1.Synergy.FLYING]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 300;
        this.atk = 25;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.DEATH_WING;
        this.attackSprite = types_1.AttackSprite.DARK_MELEE;
    }
}
exports.Yveltal = Yveltal;
class Moltres extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FIRE, Synergy_1.Synergy.FLYING]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 300;
        this.atk = 30;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.OVERHEAT;
        this.attackSprite = types_1.AttackSprite.FIRE_RANGE;
    }
}
exports.Moltres = Moltres;
class GalarianMoltres extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DARK, Synergy_1.Synergy.FLYING]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 300;
        this.atk = 30;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 100;
        this.range = 3;
        this.skill = Ability_1.Ability.FIERY_WRATH;
        this.attackSprite = types_1.AttackSprite.FIRE_RANGE;
    }
}
exports.GalarianMoltres = GalarianMoltres;
class Pinsir extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WILD, Synergy_1.Synergy.BUG]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 190;
        this.atk = 21;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.GUILLOTINE;
        this.attackSprite = types_1.AttackSprite.NORMAL_MELEE;
    }
}
exports.Pinsir = Pinsir;
class Articuno extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.ICE, Synergy_1.Synergy.FLYING]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 300;
        this.atk = 30;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 120;
        this.range = 2;
        this.skill = Ability_1.Ability.BLIZZARD;
        this.passive = Passive_1.Passive.SNOW;
        this.attackSprite = types_1.AttackSprite.FLYING_RANGE;
    }
}
exports.Articuno = Articuno;
class GalarianArticuno extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.PSYCHIC, Synergy_1.Synergy.FLYING]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 300;
        this.atk = 30;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 80;
        this.range = 2;
        this.skill = Ability_1.Ability.FREEZING_GLARE;
        this.attackSprite = types_1.AttackSprite.FLYING_RANGE;
    }
}
exports.GalarianArticuno = GalarianArticuno;
class Dialga extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DRAGON, Synergy_1.Synergy.STEEL]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 300;
        this.atk = 25;
        this.def = 5;
        this.speDef = 5;
        this.maxPP = 120;
        this.range = 1;
        this.skill = Ability_1.Ability.ROAR_OF_TIME;
        this.attackSprite = types_1.AttackSprite.FIRE_RANGE;
    }
}
exports.Dialga = Dialga;
class Palkia extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DRAGON, Synergy_1.Synergy.WATER]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 300;
        this.atk = 25;
        this.def = 5;
        this.speDef = 5;
        this.maxPP = 120;
        this.range = 1;
        this.skill = Ability_1.Ability.SPACIAL_REND;
        this.attackSprite = types_1.AttackSprite.DRAGON_MELEE;
    }
}
exports.Palkia = Palkia;
class Melmetal extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.STEEL, Synergy_1.Synergy.AMORPHOUS]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 320;
        this.atk = 32;
        this.def = 7;
        this.speDef = 3;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.DOUBLE_IRON_BASH;
        this.attackSprite = types_1.AttackSprite.DRAGON_MELEE;
        this.passive = Passive_1.Passive.MELMETAL;
    }
}
exports.Melmetal = Melmetal;
class Suicune extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WILD, Synergy_1.Synergy.WATER, Synergy_1.Synergy.FIELD]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 300;
        this.atk = 30;
        this.def = 5;
        this.speDef = 5;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.AQUA_JET;
        this.attackSprite = types_1.AttackSprite.WATER_MELEE;
    }
}
exports.Suicune = Suicune;
class Raikou extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.WILD,
            Synergy_1.Synergy.ELECTRIC,
            Synergy_1.Synergy.FIELD
        ]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 300;
        this.atk = 30;
        this.def = 5;
        this.speDef = 5;
        this.maxPP = 130;
        this.range = 1;
        this.skill = Ability_1.Ability.VOLT_SWITCH;
        this.attackSprite = types_1.AttackSprite.ELECTRIC_MELEE;
    }
}
exports.Raikou = Raikou;
class Entei extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WILD, Synergy_1.Synergy.FIRE, Synergy_1.Synergy.FIELD]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 300;
        this.atk = 30;
        this.def = 5;
        this.speDef = 5;
        this.maxPP = 130;
        this.range = 1;
        this.skill = Ability_1.Ability.FLAME_CHARGE;
        this.attackSprite = types_1.AttackSprite.FIRE_MELEE;
    }
}
exports.Entei = Entei;
class Regice extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.ICE, Synergy_1.Synergy.HUMAN]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 200;
        this.atk = 20;
        this.def = 6;
        this.speDef = 10;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.ICICLE_CRASH;
        this.attackSprite = types_1.AttackSprite.ICE_MELEE;
    }
}
exports.Regice = Regice;
class Seviper extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.POISON, Synergy_1.Synergy.MONSTER]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 180;
        this.atk = 22;
        this.def = 4;
        this.speDef = 2;
        this.maxPP = 75;
        this.range = 1;
        this.skill = Ability_1.Ability.VENOSHOCK;
        this.attackSprite = types_1.AttackSprite.POISON_MELEE;
    }
}
exports.Seviper = Seviper;
class Lunatone extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.ROCK, Synergy_1.Synergy.PSYCHIC, Synergy_1.Synergy.DARK]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 200;
        this.atk = 20;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 90;
        this.range = 2;
        this.skill = Ability_1.Ability.COSMIC_POWER_MOON;
        this.passive = Passive_1.Passive.NIGHT;
        this.attackSprite = types_1.AttackSprite.DARK_RANGE;
    }
}
exports.Lunatone = Lunatone;
class Solrock extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.ROCK, Synergy_1.Synergy.FIRE, Synergy_1.Synergy.LIGHT]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 200;
        this.atk = 20;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 90;
        this.range = 2;
        this.skill = Ability_1.Ability.COSMIC_POWER_SUN;
        this.passive = Passive_1.Passive.SUN;
        this.attackSprite = types_1.AttackSprite.PSYCHIC_RANGE;
    }
}
exports.Solrock = Solrock;
class Regirock extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.ROCK, Synergy_1.Synergy.HUMAN]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 200;
        this.atk = 20;
        this.def = 10;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.STEALTH_ROCKS;
        this.attackSprite = types_1.AttackSprite.ROCK_MELEE;
    }
}
exports.Regirock = Regirock;
class Tauros extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.NORMAL, Synergy_1.Synergy.FIELD]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 200;
        this.atk = 20;
        this.def = 7;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.HEAD_SMASH;
        this.attackSprite = types_1.AttackSprite.NORMAL_MELEE;
    }
}
exports.Tauros = Tauros;
class Heracross extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.BUG, Synergy_1.Synergy.FIGHTING]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 190;
        this.atk = 22;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.CLOSE_COMBAT;
        this.passive = Passive_1.Passive.GUTS;
        this.attackSprite = types_1.AttackSprite.NORMAL_MELEE;
    }
}
exports.Heracross = Heracross;
class Zangoose extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WILD, Synergy_1.Synergy.NORMAL]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 250;
        this.atk = 20;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.FACADE;
        this.passive = Passive_1.Passive.TOXIC_BOOST;
        this.attackSprite = types_1.AttackSprite.NORMAL_MELEE;
    }
}
exports.Zangoose = Zangoose;
class Registeel extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.STEEL, Synergy_1.Synergy.HUMAN]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 200;
        this.atk = 25;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.DEFENSE_CURL;
        this.attackSprite = types_1.AttackSprite.DRAGON_MELEE;
    }
}
exports.Registeel = Registeel;
class Regigigas extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.NORMAL,
            Synergy_1.Synergy.MONSTER,
            Synergy_1.Synergy.HUMAN
        ]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 350;
        this.atk = 30;
        this.def = 5;
        this.speDef = 5;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.CRUSH_GRIP;
        this.passive = Passive_1.Passive.SLOW_START;
        this.attackSprite = types_1.AttackSprite.DRAGON_MELEE;
    }
    onSpawn({ entity }) {
        entity.addAttackSpeed(-25, entity, 0, false);
    }
}
exports.Regigigas = Regigigas;
class Kyogre extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WATER, Synergy_1.Synergy.MONSTER]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.evolution = Pokemon_1.Pkm.PRIMAL_KYOGRE;
        this.evolutionRule = new evolution_rules_1.ItemEvolutionRule([Item_1.Item.BLUE_ORB]);
        this.hp = 300;
        this.atk = 20;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 100;
        this.range = 3;
        this.skill = Ability_1.Ability.ORIGIN_PULSE;
        this.passive = Passive_1.Passive.PRIMAL;
        this.attackSprite = types_1.AttackSprite.WATER_RANGE;
    }
}
exports.Kyogre = Kyogre;
class Groudon extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GROUND, Synergy_1.Synergy.MONSTER]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.evolution = Pokemon_1.Pkm.PRIMAL_GROUDON;
        this.evolutionRule = new evolution_rules_1.ItemEvolutionRule([Item_1.Item.RED_ORB]);
        this.hp = 300;
        this.atk = 20;
        this.def = 5;
        this.speDef = 3;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.EARTHQUAKE;
        this.passive = Passive_1.Passive.PRIMAL;
        this.attackSprite = types_1.AttackSprite.FIRE_MELEE;
    }
}
exports.Groudon = Groudon;
class Rayquaza extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DRAGON, Synergy_1.Synergy.FLYING]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.evolution = Pokemon_1.Pkm.MEGA_RAYQUAZA;
        this.evolutionRule = new evolution_rules_1.ItemEvolutionRule([Item_1.Item.GREEN_ORB]);
        this.hp = 300;
        this.atk = 30;
        this.def = 5;
        this.speDef = 5;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.DRACO_METEOR;
        this.passive = Passive_1.Passive.PRIMAL;
        this.attackSprite = types_1.AttackSprite.DRAGON_MELEE;
    }
}
exports.Rayquaza = Rayquaza;
class Eevee extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.NORMAL, Synergy_1.Synergy.FIELD]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.hp = 90;
        this.atk = 5;
        this.def = 3;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.HAPPY_HOUR;
        this.passive = Passive_1.Passive.EEVEE;
        this.attackSprite = types_1.AttackSprite.NORMAL_MELEE;
        this.evolution = Pokemon_1.Pkm.VAPOREON;
        this.evolutionRule = new evolution_rules_1.ItemEvolutionRule([
            Item_1.Item.WATER_STONE,
            Item_1.Item.FIRE_STONE,
            Item_1.Item.THUNDER_STONE,
            Item_1.Item.DUSK_STONE,
            Item_1.Item.MOON_STONE,
            Item_1.Item.LEAF_STONE,
            Item_1.Item.DAWN_STONE,
            Item_1.Item.ICE_STONE
        ], (pokemon, player, item) => {
            switch (item) {
                case Item_1.Item.WATER_STONE:
                    return Pokemon_1.Pkm.VAPOREON;
                case Item_1.Item.FIRE_STONE:
                    return Pokemon_1.Pkm.FLAREON;
                case Item_1.Item.THUNDER_STONE:
                    return Pokemon_1.Pkm.JOLTEON;
                case Item_1.Item.DUSK_STONE:
                    return Pokemon_1.Pkm.UMBREON;
                case Item_1.Item.MOON_STONE:
                    return Pokemon_1.Pkm.SYLVEON;
                case Item_1.Item.LEAF_STONE:
                    return Pokemon_1.Pkm.LEAFEON;
                case Item_1.Item.DAWN_STONE:
                    return Pokemon_1.Pkm.ESPEON;
                case Item_1.Item.ICE_STONE:
                default:
                    return Pokemon_1.Pkm.GLACEON;
            }
        });
    }
}
exports.Eevee = Eevee;
class Vaporeon extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.WATER,
            Synergy_1.Synergy.AMORPHOUS,
            Synergy_1.Synergy.FIELD
        ]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.hp = 180;
        this.atk = 12;
        this.def = 3;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.HAPPY_HOUR;
        this.attackSprite = types_1.AttackSprite.WATER_MELEE;
    }
}
exports.Vaporeon = Vaporeon;
class Jolteon extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.ELECTRIC, Synergy_1.Synergy.FIELD]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.hp = 180;
        this.atk = 12;
        this.def = 3;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.HAPPY_HOUR;
        this.attackSprite = types_1.AttackSprite.ELECTRIC_MELEE;
    }
}
exports.Jolteon = Jolteon;
class Flareon extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FIRE, Synergy_1.Synergy.FIELD, Synergy_1.Synergy.LIGHT]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.hp = 180;
        this.atk = 12;
        this.def = 3;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.HAPPY_HOUR;
        this.attackSprite = types_1.AttackSprite.FIRE_MELEE;
    }
}
exports.Flareon = Flareon;
class Espeon extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.PSYCHIC, Synergy_1.Synergy.FIELD]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.hp = 180;
        this.atk = 12;
        this.def = 3;
        this.speDef = 2;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.HAPPY_HOUR;
        this.attackSprite = types_1.AttackSprite.PSYCHIC_MELEE;
    }
}
exports.Espeon = Espeon;
class Umbreon extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DARK, Synergy_1.Synergy.FIELD]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.hp = 180;
        this.atk = 12;
        this.def = 3;
        this.speDef = 2;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.HAPPY_HOUR;
        this.attackSprite = types_1.AttackSprite.DARK_MELEE;
    }
}
exports.Umbreon = Umbreon;
class Leafeon extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GRASS, Synergy_1.Synergy.FLORA, Synergy_1.Synergy.FIELD]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.hp = 180;
        this.atk = 12;
        this.def = 3;
        this.speDef = 2;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.HAPPY_HOUR;
        this.attackSprite = types_1.AttackSprite.GRASS_MELEE;
    }
}
exports.Leafeon = Leafeon;
class Sylveon extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FAIRY, Synergy_1.Synergy.FIELD, Synergy_1.Synergy.SOUND]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.hp = 180;
        this.atk = 12;
        this.def = 3;
        this.speDef = 2;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.HAPPY_HOUR;
        this.attackSprite = types_1.AttackSprite.FAIRY_MELEE;
    }
}
exports.Sylveon = Sylveon;
class Glaceon extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.ICE, Synergy_1.Synergy.FIELD]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.hp = 180;
        this.atk = 12;
        this.def = 3;
        this.speDef = 2;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.HAPPY_HOUR;
        this.attackSprite = types_1.AttackSprite.ICE_MELEE;
    }
}
exports.Glaceon = Glaceon;
class Volcanion extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FIRE, Synergy_1.Synergy.WATER, Synergy_1.Synergy.AQUATIC]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 300;
        this.atk = 20;
        this.def = 4;
        this.speDef = 3;
        this.maxPP = 90;
        this.range = 2;
        this.skill = Ability_1.Ability.STEAM_ERUPTION;
        this.attackSprite = types_1.AttackSprite.FIRE_RANGE;
    }
}
exports.Volcanion = Volcanion;
class Darkrai extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.DARK,
            Synergy_1.Synergy.GHOST,
            Synergy_1.Synergy.AMORPHOUS
        ]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 250;
        this.atk = 27;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 120;
        this.range = 2;
        this.skill = Ability_1.Ability.DARK_VOID;
        this.attackSprite = types_1.AttackSprite.DARK_RANGE;
    }
}
exports.Darkrai = Darkrai;
class Larvesta extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FIRE, Synergy_1.Synergy.BUG]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.VOLCARONA;
        this.hp = 100;
        this.atk = 12;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 3;
        this.skill = Ability_1.Ability.FIERY_DANCE;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.FIRE_RANGE;
    }
}
exports.Larvesta = Larvesta;
class Volcarona extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FIRE, Synergy_1.Synergy.BUG]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.hp = 200;
        this.atk = 24;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 3;
        this.skill = Ability_1.Ability.FIERY_DANCE;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.FIRE_RANGE;
    }
}
exports.Volcarona = Volcarona;
class Chatot extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FLYING, Synergy_1.Synergy.SOUND]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 200;
        this.atk = 20;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 80;
        this.range = 3;
        this.skill = Ability_1.Ability.CHATTER;
        this.attackSprite = types_1.AttackSprite.PSYCHIC_RANGE;
    }
}
exports.Chatot = Chatot;
class Farfetchd extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FLYING, Synergy_1.Synergy.NORMAL]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 200;
        this.atk = 20;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 60;
        this.range = 1;
        this.skill = Ability_1.Ability.RAZOR_WIND;
        this.attackSprite = types_1.AttackSprite.NORMAL_MELEE;
    }
}
exports.Farfetchd = Farfetchd;
class Kecleon extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 200;
        this.atk = 20;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.ILLUSION;
        this.passive = Passive_1.Passive.PROTEAN2;
        this.attackSprite = types_1.AttackSprite.NORMAL_MELEE;
    }
}
exports.Kecleon = Kecleon;
function updateCastform(pokemon, weather, player) {
    let weatherForm = Pokemon_1.Pkm.CASTFORM;
    if (weather === Weather_1.Weather.SNOW) {
        weatherForm = Pokemon_1.Pkm.CASTFORM_HAIL;
    }
    else if (weather === Weather_1.Weather.RAIN) {
        weatherForm = Pokemon_1.Pkm.CASTFORM_RAIN;
    }
    else if (weather === Weather_1.Weather.SUN) {
        weatherForm = Pokemon_1.Pkm.CASTFORM_SUN;
    }
    if (pokemon.name === weatherForm)
        return;
    if (!player)
        return;
    const newPokemon = pokemon_factory_1.default.createPokemonFromName(weatherForm, player);
    pokemon.items.forEach((item) => {
        newPokemon.items.add(item);
    });
    newPokemon.positionX = pokemon.positionX;
    newPokemon.positionY = pokemon.positionY;
    player.board.delete(pokemon.id);
    player.board.set(newPokemon.id, newPokemon);
    player.updateSynergies();
}
class Castform extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.ARTIFICIAL, Synergy_1.Synergy.AMORPHOUS]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 180;
        this.atk = 18;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 80;
        this.range = 2;
        this.skill = Ability_1.Ability.FORECAST;
        this.passive = Passive_1.Passive.CASTFORM;
        this.attackSprite = types_1.AttackSprite.PSYCHIC_RANGE;
    }
    beforeSimulationStart({ weather, player }) {
        updateCastform(this, weather, player);
    }
}
exports.Castform = Castform;
class CastformSun extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.ARTIFICIAL,
            Synergy_1.Synergy.FIRE,
            Synergy_1.Synergy.AMORPHOUS
        ]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 180;
        this.atk = 18;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 80;
        this.range = 2;
        this.skill = Ability_1.Ability.FORECAST;
        this.passive = Passive_1.Passive.CASTFORM;
        this.attackSprite = types_1.AttackSprite.DRAGON_RANGE;
    }
    beforeSimulationStart({ weather, player }) {
        updateCastform(this, weather, player);
    }
}
exports.CastformSun = CastformSun;
class CastformRain extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.ARTIFICIAL,
            Synergy_1.Synergy.WATER,
            Synergy_1.Synergy.AMORPHOUS
        ]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 180;
        this.atk = 18;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 80;
        this.range = 2;
        this.skill = Ability_1.Ability.FORECAST;
        this.passive = Passive_1.Passive.CASTFORM;
        this.attackSprite = types_1.AttackSprite.WATER_RANGE;
    }
    beforeSimulationStart({ weather, player }) {
        updateCastform(this, weather, player);
    }
}
exports.CastformRain = CastformRain;
class CastformHail extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.ARTIFICIAL,
            Synergy_1.Synergy.ICE,
            Synergy_1.Synergy.AMORPHOUS
        ]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 180;
        this.atk = 18;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 80;
        this.range = 2;
        this.skill = Ability_1.Ability.FORECAST;
        this.passive = Passive_1.Passive.CASTFORM;
        this.attackSprite = types_1.AttackSprite.ICE_RANGE;
    }
    beforeSimulationStart({ weather, player }) {
        updateCastform(this, weather, player);
    }
}
exports.CastformHail = CastformHail;
class Landorus extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FLYING, Synergy_1.Synergy.GROUND]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 250;
        this.atk = 30;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 80;
        this.range = 3;
        this.skill = Ability_1.Ability.SANDSEAR_STORM;
        this.passive = Passive_1.Passive.LANDORUS;
        this.attackSprite = types_1.AttackSprite.FLYING_RANGE;
    }
}
exports.Landorus = Landorus;
class Thundurus extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FLYING, Synergy_1.Synergy.ELECTRIC]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 250;
        this.atk = 30;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 80;
        this.range = 3;
        this.skill = Ability_1.Ability.WILDBOLT_STORM;
        this.passive = Passive_1.Passive.THUNDURUS;
        this.attackSprite = types_1.AttackSprite.FLYING_RANGE;
    }
}
exports.Thundurus = Thundurus;
class Tornadus extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FLYING, Synergy_1.Synergy.ICE]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 250;
        this.atk = 30;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 80;
        this.range = 3;
        this.skill = Ability_1.Ability.BLEAKWIND_STORM;
        this.passive = Passive_1.Passive.TORNADUS;
        this.attackSprite = types_1.AttackSprite.FLYING_RANGE;
    }
}
exports.Tornadus = Tornadus;
class Enamorus extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FLYING, Synergy_1.Synergy.FAIRY]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 250;
        this.atk = 30;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 80;
        this.range = 3;
        this.skill = Ability_1.Ability.SPRINGTIDE_STORM;
        this.passive = Passive_1.Passive.ENAMORUS;
        this.attackSprite = types_1.AttackSprite.FLYING_RANGE;
    }
}
exports.Enamorus = Enamorus;
class Keldeo extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WATER, Synergy_1.Synergy.FIGHTING]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 300;
        this.atk = 30;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.SECRET_SWORD;
        this.attackSprite = types_1.AttackSprite.WATER_RANGE;
    }
}
exports.Keldeo = Keldeo;
class Terrakion extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.ROCK, Synergy_1.Synergy.FIGHTING]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 300;
        this.atk = 34;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 120;
        this.range = 1;
        this.skill = Ability_1.Ability.SACRED_SWORD_CAVERN;
        this.attackSprite = types_1.AttackSprite.ROCK_MELEE;
    }
}
exports.Terrakion = Terrakion;
class Virizion extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GRASS, Synergy_1.Synergy.FIGHTING]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 300;
        this.atk = 30;
        this.def = 4;
        this.speDef = 8;
        this.maxPP = 120;
        this.range = 1;
        this.skill = Ability_1.Ability.SACRED_SWORD_GRASS;
        this.attackSprite = types_1.AttackSprite.GRASS_MELEE;
    }
}
exports.Virizion = Virizion;
class Cobalion extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.STEEL, Synergy_1.Synergy.FIGHTING]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 300;
        this.atk = 30;
        this.def = 8;
        this.speDef = 4;
        this.maxPP = 120;
        this.range = 1;
        this.skill = Ability_1.Ability.SACRED_SWORD_IRON;
        this.attackSprite = types_1.AttackSprite.FIGHTING_MELEE;
    }
}
exports.Cobalion = Cobalion;
class Mawile extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.STEEL,
            Synergy_1.Synergy.FAIRY,
            Synergy_1.Synergy.MONSTER
        ]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 180;
        this.atk = 15;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.PLAY_ROUGH;
        this.attackSprite = types_1.AttackSprite.FIGHTING_MELEE;
    }
}
exports.Mawile = Mawile;
class Phione extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.WATER,
            Synergy_1.Synergy.AQUATIC,
            Synergy_1.Synergy.AMORPHOUS
        ]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.evolution = Pokemon_1.Pkm.MANAPHY;
        this.evolutionRule = new evolution_rules_1.ItemEvolutionRule([Item_1.Item.AQUA_EGG]);
        this.hp = 190;
        this.atk = 15;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 80;
        this.range = 3;
        this.skill = Ability_1.Ability.TAKE_HEART;
        this.passive = Passive_1.Passive.PHIONE;
        this.attackSprite = types_1.AttackSprite.PSYCHIC_RANGE;
    }
}
exports.Phione = Phione;
class Manaphy extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.WATER,
            Synergy_1.Synergy.AQUATIC,
            Synergy_1.Synergy.AMORPHOUS
        ]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 4;
        this.hp = 240;
        this.atk = 17;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 80;
        this.range = 3;
        this.skill = Ability_1.Ability.TAKE_HEART;
        this.attackSprite = types_1.AttackSprite.PSYCHIC_RANGE;
    }
}
exports.Manaphy = Manaphy;
class Rotom extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.ELECTRIC,
            Synergy_1.Synergy.GHOST,
            Synergy_1.Synergy.LIGHT
        ]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 200;
        this.atk = 12;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 100;
        this.range = 3;
        this.skill = Ability_1.Ability.CALM_MIND;
        this.attackSprite = types_1.AttackSprite.ELECTRIC_RANGE;
    }
}
exports.Rotom = Rotom;
class RotomDrone extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GHOST, Synergy_1.Synergy.ARTIFICIAL]);
        this.rarity = Game_1.Rarity.SPECIAL;
        this.stars = 1;
        this.hp = 80;
        this.atk = 6;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 50;
        this.range = 3;
        this.skill = Ability_1.Ability.FLASH;
        this.attackSprite = types_1.AttackSprite.GHOST_RANGE;
    }
}
exports.RotomDrone = RotomDrone;
class Spiritomb extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.DARK,
            Synergy_1.Synergy.GHOST,
            Synergy_1.Synergy.AMORPHOUS
        ]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 150;
        this.atk = 20;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 80;
        this.range = 2;
        this.skill = Ability_1.Ability.SHADOW_BALL;
        this.attackSprite = types_1.AttackSprite.DARK_RANGE;
    }
}
exports.Spiritomb = Spiritomb;
class Absol extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WILD, Synergy_1.Synergy.DARK]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 200;
        this.atk = 20;
        this.def = 5;
        this.speDef = 5;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.NIGHT_SLASH;
        this.attackSprite = types_1.AttackSprite.DARK_MELEE;
    }
}
exports.Absol = Absol;
class Delibird extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.ICE, Synergy_1.Synergy.FLYING, Synergy_1.Synergy.FIELD]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 200;
        this.atk = 20;
        this.def = 5;
        this.speDef = 5;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.PRESENT;
        this.attackSprite = types_1.AttackSprite.ICE_MELEE;
    }
}
exports.Delibird = Delibird;
class IronBundle extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.ICE,
            Synergy_1.Synergy.WATER,
            Synergy_1.Synergy.ARTIFICIAL
        ]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 200;
        this.atk = 16;
        this.def = 5;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.AURORA_BEAM;
        this.attackSprite = types_1.AttackSprite.ICE_MELEE;
    }
}
exports.IronBundle = IronBundle;
class Lapras extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WATER, Synergy_1.Synergy.ICE]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 250;
        this.atk = 12;
        this.def = 5;
        this.speDef = 6;
        this.maxPP = 120;
        this.range = 1;
        this.skill = Ability_1.Ability.DIVE;
        this.attackSprite = types_1.AttackSprite.WATER_MELEE;
    }
}
exports.Lapras = Lapras;
class Latias extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DRAGON, Synergy_1.Synergy.PSYCHIC]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 120;
        this.atk = 10;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 90;
        this.range = 3;
        this.skill = Ability_1.Ability.MIST_BALL;
        this.passive = Passive_1.Passive.SHARED_VISION;
        this.attackSprite = types_1.AttackSprite.FIRE_RANGE;
    }
}
exports.Latias = Latias;
class Latios extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DRAGON, Synergy_1.Synergy.PSYCHIC]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 120;
        this.atk = 10;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 90;
        this.range = 3;
        this.skill = Ability_1.Ability.LUSTER_PURGE;
        this.passive = Passive_1.Passive.SHARED_VISION;
        this.attackSprite = types_1.AttackSprite.FIRE_RANGE;
    }
}
exports.Latios = Latios;
class Uxie extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.PSYCHIC, Synergy_1.Synergy.FAIRY]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 200;
        this.atk = 15;
        this.def = 5;
        this.speDef = 5;
        this.maxPP = 90;
        this.range = 3;
        this.skill = Ability_1.Ability.KNOWLEDGE_THIEF;
        this.attackSprite = types_1.AttackSprite.PSYCHIC_RANGE;
    }
}
exports.Uxie = Uxie;
class Mesprit extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.PSYCHIC, Synergy_1.Synergy.FAIRY]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 200;
        this.atk = 16;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 90;
        this.range = 3;
        this.skill = Ability_1.Ability.SONG_OF_DESIRE;
        this.attackSprite = types_1.AttackSprite.PSYCHIC_RANGE;
    }
}
exports.Mesprit = Mesprit;
class Azelf extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.PSYCHIC, Synergy_1.Synergy.FAIRY]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 200;
        this.atk = 18;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 90;
        this.range = 3;
        this.skill = Ability_1.Ability.NASTY_PLOT;
        this.attackSprite = types_1.AttackSprite.PSYCHIC_RANGE;
    }
}
exports.Azelf = Azelf;
class Mew extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.PSYCHIC, Synergy_1.Synergy.AMORPHOUS]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 200;
        this.atk = 30;
        this.def = 5;
        this.speDef = 5;
        this.maxPP = 50;
        this.range = 4;
        this.skill = Ability_1.Ability.TELEPORT;
        this.passive = Passive_1.Passive.SYNCHRO;
        this.attackSprite = types_1.AttackSprite.PSYCHIC_RANGE;
    }
}
exports.Mew = Mew;
class Mewtwo extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.PSYCHIC,
            Synergy_1.Synergy.MONSTER,
            Synergy_1.Synergy.ARTIFICIAL
        ]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 200;
        this.atk = 30;
        this.def = 5;
        this.speDef = 5;
        this.maxPP = 110;
        this.range = 3;
        this.skill = Ability_1.Ability.PSYSTRIKE;
        this.attackSprite = types_1.AttackSprite.PSYCHIC_RANGE;
    }
}
exports.Mewtwo = Mewtwo;
class Marshadow extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GHOST, Synergy_1.Synergy.FIGHTING]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 220;
        this.atk = 28;
        this.def = 5;
        this.speDef = 5;
        this.maxPP = 120;
        this.range = 1;
        this.skill = Ability_1.Ability.SPECTRAL_THIEF;
        this.attackSprite = types_1.AttackSprite.FIGHTING_MELEE;
    }
}
exports.Marshadow = Marshadow;
class Kyurem extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DRAGON, Synergy_1.Synergy.ICE]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 200;
        this.atk = 30;
        this.def = 3;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 3;
        this.skill = Ability_1.Ability.GLACIATE;
        this.attackSprite = types_1.AttackSprite.ICE_RANGE;
    }
}
exports.Kyurem = Kyurem;
class Reshiram extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DRAGON, Synergy_1.Synergy.FIRE]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 200;
        this.atk = 30;
        this.def = 3;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 3;
        this.skill = Ability_1.Ability.BLUE_FLARE;
        this.attackSprite = types_1.AttackSprite.FIRE_RANGE;
    }
}
exports.Reshiram = Reshiram;
class Zekrom extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DRAGON, Synergy_1.Synergy.ELECTRIC]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 200;
        this.atk = 30;
        this.def = 3;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 3;
        this.skill = Ability_1.Ability.FUSION_BOLT;
        this.attackSprite = types_1.AttackSprite.ELECTRIC_RANGE;
    }
}
exports.Zekrom = Zekrom;
class Celebi extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.GRASS,
            Synergy_1.Synergy.PSYCHIC,
            Synergy_1.Synergy.FLORA
        ]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 300;
        this.atk = 30;
        this.def = 5;
        this.speDef = 5;
        this.maxPP = 100;
        this.range = 3;
        this.skill = Ability_1.Ability.TIME_TRAVEL;
        this.passive = Passive_1.Passive.CELEBI;
        this.attackSprite = types_1.AttackSprite.GRASS_RANGE;
    }
}
exports.Celebi = Celebi;
class Victini extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FIRE, Synergy_1.Synergy.PSYCHIC]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 300;
        this.atk = 30;
        this.def = 5;
        this.speDef = 5;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.SEARING_SHOT;
        this.passive = Passive_1.Passive.VICTINI;
        this.attackSprite = types_1.AttackSprite.FIRE_MELEE;
    }
    beforeSimulationStart({ opponentEffects }) {
        opponentEffects.add(Effect_1.Effect.VICTINI_PASSIVE);
    }
}
exports.Victini = Victini;
class Jirachi extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.STEEL, Synergy_1.Synergy.PSYCHIC]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 220;
        this.atk = 30;
        this.def = 5;
        this.speDef = 5;
        this.maxPP = 100;
        this.range = 3;
        this.skill = Ability_1.Ability.DOOM_DESIRE;
        this.passive = Passive_1.Passive.GOOD_LUCK;
        this.attackSprite = types_1.AttackSprite.PSYCHIC_RANGE;
    }
    beforeSimulationStart({ teamEffects }) {
        teamEffects.add(Effect_1.Effect.GOOD_LUCK);
    }
}
exports.Jirachi = Jirachi;
class Arceus extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 300;
        this.atk = 25;
        this.def = 5;
        this.speDef = 5;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.JUDGEMENT;
        this.passive = Passive_1.Passive.PROTEAN3;
        this.attackSprite = types_1.AttackSprite.DRAGON_MELEE;
    }
}
exports.Arceus = Arceus;
class Deoxys extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.PSYCHIC,
            Synergy_1.Synergy.AMORPHOUS,
            Synergy_1.Synergy.HUMAN
        ]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 220;
        this.atk = 30;
        this.def = 5;
        this.speDef = 5;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.PSYCHO_BOOST;
        this.attackSprite = types_1.AttackSprite.PSYCHIC_MELEE;
        this.passive = Passive_1.Passive.ALIEN_DNA;
    }
    onAcquired(player) {
        if (player.items.includes(Item_1.Item.METEORITE) === false) {
            player.items.push(Item_1.Item.METEORITE);
        }
    }
}
exports.Deoxys = Deoxys;
class DeoxysDefense extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.PSYCHIC,
            Synergy_1.Synergy.AMORPHOUS,
            Synergy_1.Synergy.HUMAN
        ]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 220;
        this.atk = 20;
        this.def = 8;
        this.speDef = 8;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.PROTECT;
        this.attackSprite = types_1.AttackSprite.PSYCHIC_MELEE;
        this.passive = Passive_1.Passive.ALIEN_DNA;
    }
    onAcquired(player) {
        if (player.items.includes(Item_1.Item.METEORITE) === false) {
            player.items.push(Item_1.Item.METEORITE);
        }
    }
}
exports.DeoxysDefense = DeoxysDefense;
class DeoxysAttack extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.PSYCHIC,
            Synergy_1.Synergy.AMORPHOUS,
            Synergy_1.Synergy.HUMAN
        ]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 220;
        this.atk = 30;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 90;
        this.range = 3;
        this.skill = Ability_1.Ability.ZAP_CANNON;
        this.attackSprite = types_1.AttackSprite.PSYCHIC_RANGE;
        this.passive = Passive_1.Passive.ALIEN_DNA;
    }
    onAcquired(player) {
        if (player.items.includes(Item_1.Item.METEORITE) === false) {
            player.items.push(Item_1.Item.METEORITE);
        }
    }
}
exports.DeoxysAttack = DeoxysAttack;
class DeoxysSpeed extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.PSYCHIC,
            Synergy_1.Synergy.AMORPHOUS,
            Synergy_1.Synergy.HUMAN
        ]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 220;
        this.atk = 25;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 50;
        this.range = 2;
        this.skill = Ability_1.Ability.EXTREME_SPEED;
        this.attackSprite = types_1.AttackSprite.PSYCHIC_RANGE;
        this.passive = Passive_1.Passive.ALIEN_DNA;
    }
    onAcquired(player) {
        if (player.items.includes(Item_1.Item.METEORITE) === false) {
            player.items.push(Item_1.Item.METEORITE);
        }
    }
}
exports.DeoxysSpeed = DeoxysSpeed;
class Shaymin extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GRASS, Synergy_1.Synergy.FLORA]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.evolution = Pokemon_1.Pkm.SHAYMIN_SKY;
        this.evolutionRule = new evolution_rules_1.ItemEvolutionRule([Item_1.Item.GRACIDEA_FLOWER]);
        this.hp = 200;
        this.atk = 30;
        this.def = 5;
        this.speDef = 5;
        this.maxPP = 100;
        this.range = 3;
        this.skill = Ability_1.Ability.SEED_FLARE;
        this.passive = Passive_1.Passive.SHAYMIN;
        this.attackSprite = types_1.AttackSprite.GRASS_RANGE;
    }
}
exports.Shaymin = Shaymin;
class ShayminSky extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GRASS, Synergy_1.Synergy.FLORA, Synergy_1.Synergy.FLYING]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 4;
        this.hp = 300;
        this.atk = 30;
        this.def = 5;
        this.speDef = 5;
        this.maxPP = 100;
        this.range = 3;
        this.skill = Ability_1.Ability.SEED_FLARE;
        this.attackSprite = types_1.AttackSprite.GRASS_RANGE;
    }
}
exports.ShayminSky = ShayminSky;
class Cresselia extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.PSYCHIC,
            Synergy_1.Synergy.FAIRY,
            Synergy_1.Synergy.LIGHT
        ]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 300;
        this.atk = 15;
        this.def = 5;
        this.speDef = 5;
        this.maxPP = 100;
        this.range = 3;
        this.skill = Ability_1.Ability.LUNAR_BLESSING;
        this.attackSprite = types_1.AttackSprite.PSYCHIC_RANGE;
    }
}
exports.Cresselia = Cresselia;
class Heatran extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FIRE, Synergy_1.Synergy.STEEL]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 280;
        this.atk = 20;
        this.def = 5;
        this.speDef = 5;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.MAGMA_STORM;
        this.attackSprite = types_1.AttackSprite.FIRE_RANGE;
    }
}
exports.Heatran = Heatran;
class HooH extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FIRE, Synergy_1.Synergy.FLYING, Synergy_1.Synergy.LIGHT]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 300;
        this.atk = 30;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.FIRE_BLAST;
        this.passive = Passive_1.Passive.SUN;
        this.attackSprite = types_1.AttackSprite.FIRE_RANGE;
    }
}
exports.HooH = HooH;
class Torkoal extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FIRE, Synergy_1.Synergy.GROUND]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 220;
        this.atk = 10;
        this.def = 8;
        this.speDef = 2;
        this.maxPP = 110;
        this.range = 1;
        this.skill = Ability_1.Ability.SMOKE_SCREEN;
        this.attackSprite = types_1.AttackSprite.FIRE_MELEE;
    }
}
exports.Torkoal = Torkoal;
class Heatmor extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FIRE, Synergy_1.Synergy.FIELD]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 200;
        this.atk = 20;
        this.def = 5;
        this.speDef = 5;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.FIRE_LASH;
        this.attackSprite = types_1.AttackSprite.FIRE_MELEE;
    }
}
exports.Heatmor = Heatmor;
class PrimalGroudon extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.GROUND,
            Synergy_1.Synergy.MONSTER,
            Synergy_1.Synergy.FIRE
        ]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 4;
        this.hp = 400;
        this.atk = 20;
        this.def = 6;
        this.speDef = 3;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.EARTHQUAKE;
        this.passive = Passive_1.Passive.SANDSTORM;
        this.attackSprite = types_1.AttackSprite.FIRE_MELEE;
    }
    onAcquired(player) {
        player.titles.add(types_1.Title.PRIMAL);
    }
}
exports.PrimalGroudon = PrimalGroudon;
class PrimalKyogre extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.WATER,
            Synergy_1.Synergy.ELECTRIC,
            Synergy_1.Synergy.MONSTER
        ]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 4;
        this.hp = 400;
        this.atk = 20;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 90;
        this.range = 3;
        this.skill = Ability_1.Ability.ORIGIN_PULSE;
        this.passive = Passive_1.Passive.RAIN;
        this.attackSprite = types_1.AttackSprite.WATER_RANGE;
    }
    onAcquired(player) {
        player.titles.add(types_1.Title.PRIMAL);
    }
}
exports.PrimalKyogre = PrimalKyogre;
class MegaRayquaza extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DRAGON, Synergy_1.Synergy.FLYING]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 4;
        this.hp = 400;
        this.atk = 30;
        this.def = 5;
        this.speDef = 5;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.DRACO_METEOR;
        this.passive = Passive_1.Passive.AIRLOCK;
        this.attackSprite = types_1.AttackSprite.FIRE_RANGE;
    }
    onAcquired(player) {
        player.titles.add(types_1.Title.PRIMAL);
    }
}
exports.MegaRayquaza = MegaRayquaza;
class Oddish extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FLORA, Synergy_1.Synergy.POISON, Synergy_1.Synergy.GRASS]);
        this.rarity = Game_1.Rarity.SPECIAL;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.GLOOM;
        this.hp = 90;
        this.atk = 9;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.STUN_SPORE;
        this.attackSprite = types_1.AttackSprite.GRASS_MELEE;
    }
}
exports.Oddish = Oddish;
class Gloom extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FLORA, Synergy_1.Synergy.POISON, Synergy_1.Synergy.GRASS]);
        this.rarity = Game_1.Rarity.SPECIAL;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.VILEPLUME;
        this.hp = 160;
        this.atk = 18;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.STUN_SPORE;
        this.attackSprite = types_1.AttackSprite.GRASS_MELEE;
    }
}
exports.Gloom = Gloom;
class Vileplume extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FLORA, Synergy_1.Synergy.POISON, Synergy_1.Synergy.GRASS]);
        this.rarity = Game_1.Rarity.SPECIAL;
        this.stars = 3;
        this.evolution = Pokemon_1.Pkm.BELLOSSOM;
        this.hp = 260;
        this.atk = 24;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.STUN_SPORE;
        this.attackSprite = types_1.AttackSprite.GRASS_MELEE;
    }
}
exports.Vileplume = Vileplume;
class Bellossom extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FLORA, Synergy_1.Synergy.POISON, Synergy_1.Synergy.GRASS]);
        this.rarity = Game_1.Rarity.SPECIAL;
        this.stars = 4;
        this.hp = 300;
        this.atk = 30;
        this.def = 5;
        this.speDef = 5;
        this.maxPP = 10;
        this.range = 1;
        this.skill = Ability_1.Ability.PETAL_BLIZZARD;
        this.attackSprite = types_1.AttackSprite.GRASS_MELEE;
    }
}
exports.Bellossom = Bellossom;
class Amaura extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FOSSIL, Synergy_1.Synergy.ICE]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.AURORUS;
        this.hp = 130;
        this.atk = 7;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.HAIL;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.ROCK_MELEE;
    }
}
exports.Amaura = Amaura;
class Aurorus extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FOSSIL, Synergy_1.Synergy.ICE]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.hp = 280;
        this.atk = 18;
        this.def = 5;
        this.speDef = 5;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.HAIL;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.ROCK_MELEE;
    }
}
exports.Aurorus = Aurorus;
class Carbink extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FOSSIL, Synergy_1.Synergy.ROCK, Synergy_1.Synergy.FAIRY]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.DIANCIE;
        this.hp = 125;
        this.atk = 7;
        this.def = 4;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.DIAMOND_STORM;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.FAIRY_MELEE;
    }
}
exports.Carbink = Carbink;
class Diancie extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FOSSIL, Synergy_1.Synergy.ROCK, Synergy_1.Synergy.FAIRY]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.hp = 300;
        this.atk = 10;
        this.def = 8;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.DIAMOND_STORM;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.FAIRY_MELEE;
    }
}
exports.Diancie = Diancie;
class Sunkern extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GRASS, Synergy_1.Synergy.FIRE, Synergy_1.Synergy.FLORA]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.SUNFLORA;
        this.hp = 80;
        this.atk = 8;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.SOLAR_BEAM;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.FIRE_RANGE;
    }
}
exports.Sunkern = Sunkern;
class Sunflora extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GRASS, Synergy_1.Synergy.FIRE, Synergy_1.Synergy.FLORA]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.hp = 160;
        this.atk = 18;
        this.def = 5;
        this.speDef = 5;
        this.maxPP = 80;
        this.range = 2;
        this.skill = Ability_1.Ability.SOLAR_BEAM;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.FIRE_RANGE;
    }
}
exports.Sunflora = Sunflora;
class Mankey extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WILD, Synergy_1.Synergy.FIGHTING]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.PRIMEAPE;
        this.hp = 120;
        this.atk = 8;
        this.def = 3;
        this.speDef = 2;
        this.maxPP = 90;
        this.range = 1;
        this.skill = Ability_1.Ability.THRASH;
        this.attackSprite = types_1.AttackSprite.FIGHTING_MELEE;
    }
}
exports.Mankey = Mankey;
class Primeape extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WILD, Synergy_1.Synergy.FIGHTING]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.ANNIHILAPE;
        this.evolutionRule = new evolution_rules_1.ConditionBasedEvolutionRule((pokemon) => pokemon.atk > 30);
        this.hp = 240;
        this.atk = 21;
        this.def = 6;
        this.speDef = 2;
        this.maxPP = 90;
        this.range = 1;
        this.skill = Ability_1.Ability.THRASH;
        this.passive = Passive_1.Passive.PRIMEAPE;
        this.attackSprite = types_1.AttackSprite.FIGHTING_MELEE;
    }
}
exports.Primeape = Primeape;
class Annihilape extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.WILD,
            Synergy_1.Synergy.FIGHTING,
            Synergy_1.Synergy.GHOST
        ]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 3;
        this.hp = 320;
        this.atk = 30;
        this.def = 6;
        this.speDef = 7;
        this.maxPP = 90;
        this.range = 1;
        this.skill = Ability_1.Ability.THRASH;
        this.attackSprite = types_1.AttackSprite.FIGHTING_MELEE;
    }
}
exports.Annihilape = Annihilape;
class Anorith extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FOSSIL, Synergy_1.Synergy.BUG, Synergy_1.Synergy.AQUATIC]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.ARMALDO;
        this.hp = 60;
        this.atk = 6;
        this.def = 2;
        this.speDef = 1;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.HARDEN;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.ROCK_MELEE;
    }
}
exports.Anorith = Anorith;
class Armaldo extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FOSSIL, Synergy_1.Synergy.BUG, Synergy_1.Synergy.AQUATIC]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.hp = 130;
        this.atk = 15;
        this.def = 3;
        this.speDef = 2;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.HARDEN;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.ROCK_MELEE;
    }
}
exports.Armaldo = Armaldo;
class Wynaut extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.PSYCHIC,
            Synergy_1.Synergy.BABY,
            Synergy_1.Synergy.AMORPHOUS
        ]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.WOBBUFFET;
        this.hp = 110;
        this.atk = 7;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.COUNTER;
        this.passive = Passive_1.Passive.WOBBUFFET;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.FIGHTING_MELEE;
    }
    onSpawn({ entity }) {
        entity.status.tree = true;
        entity.toIdleState();
    }
}
exports.Wynaut = Wynaut;
class Wobbuffet extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.PSYCHIC, Synergy_1.Synergy.AMORPHOUS]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.hp = 280;
        this.atk = 18;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.COUNTER;
        this.passive = Passive_1.Passive.WOBBUFFET;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.ROCK_MELEE;
    }
    onSpawn({ entity }) {
        entity.status.tree = true;
        entity.toIdleState();
    }
}
exports.Wobbuffet = Wobbuffet;
class Munna extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.PSYCHIC,
            Synergy_1.Synergy.FIELD,
            Synergy_1.Synergy.AMORPHOUS
        ]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.MUSHARNA;
        this.hp = 80;
        this.atk = 8;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 80;
        this.range = 2;
        this.skill = Ability_1.Ability.MOON_DREAM;
        this.passive = Passive_1.Passive.DREAM_CATCHER;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.PSYCHIC_RANGE;
    }
}
exports.Munna = Munna;
class Musharna extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.PSYCHIC,
            Synergy_1.Synergy.FIELD,
            Synergy_1.Synergy.AMORPHOUS
        ]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.hp = 240;
        this.atk = 16;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 80;
        this.range = 2;
        this.skill = Ability_1.Ability.MOON_DREAM;
        this.passive = Passive_1.Passive.DREAM_CATCHER;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.PSYCHIC_RANGE;
    }
}
exports.Musharna = Musharna;
class Archen extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.ROCK, Synergy_1.Synergy.FLYING, Synergy_1.Synergy.FOSSIL]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.ARCHEOPS;
        this.hp = 70;
        this.atk = 5;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 90;
        this.range = 1;
        this.skill = Ability_1.Ability.ROCK_SMASH;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.ROCK_MELEE;
    }
}
exports.Archen = Archen;
class Archeops extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.ROCK, Synergy_1.Synergy.FLYING, Synergy_1.Synergy.FOSSIL]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.hp = 130;
        this.atk = 11;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 90;
        this.range = 2;
        this.skill = Ability_1.Ability.ROCK_SMASH;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.ROCK_MELEE;
    }
}
exports.Archeops = Archeops;
class Gligar extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.GROUND,
            Synergy_1.Synergy.POISON,
            Synergy_1.Synergy.FLYING
        ]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.GLISCOR;
        this.evolutionRule = new evolution_rules_1.ItemEvolutionRule([Item_1.Item.RAZOR_FANG]);
        this.hp = 150;
        this.atk = 16;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.POISON_JAB;
        this.passive = Passive_1.Passive.GLIGAR;
        this.attackSprite = types_1.AttackSprite.ROCK_MELEE;
    }
}
exports.Gligar = Gligar;
class Gliscor extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.GROUND,
            Synergy_1.Synergy.POISON,
            Synergy_1.Synergy.FLYING
        ]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 170;
        this.atk = 18;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.POISON_JAB;
        this.passive = Passive_1.Passive.POISON_HEAL;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.ROCK_MELEE;
    }
}
exports.Gliscor = Gliscor;
class Shieldon extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FOSSIL, Synergy_1.Synergy.STEEL]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.BASTIODON;
        this.hp = 90;
        this.atk = 6;
        this.def = 5;
        this.speDef = 3;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.IRON_DEFENSE;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.ROCK_MELEE;
    }
}
exports.Shieldon = Shieldon;
class Bastiodon extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FOSSIL, Synergy_1.Synergy.STEEL]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.hp = 250;
        this.atk = 10;
        this.def = 8;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.IRON_DEFENSE;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.ROCK_MELEE;
    }
}
exports.Bastiodon = Bastiodon;
class Mienfoo extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FIGHTING, Synergy_1.Synergy.FIELD]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.MIENSHAO;
        this.hp = 80;
        this.atk = 10;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 60;
        this.range = 1;
        this.skill = Ability_1.Ability.DRAIN_PUNCH;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.FIGHTING_MELEE;
    }
}
exports.Mienfoo = Mienfoo;
class Mienshao extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FIGHTING, Synergy_1.Synergy.FIELD]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.hp = 175;
        this.atk = 20;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 60;
        this.range = 1;
        this.skill = Ability_1.Ability.DRAIN_PUNCH;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.FIGHTING_MELEE;
    }
}
exports.Mienshao = Mienshao;
class Lileep extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FOSSIL, Synergy_1.Synergy.GRASS, Synergy_1.Synergy.FLORA]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.CRADILY;
        this.hp = 70;
        this.atk = 7;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.LEECH_SEED;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.ROCK_MELEE;
    }
}
exports.Lileep = Lileep;
class Cradily extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FOSSIL, Synergy_1.Synergy.GRASS, Synergy_1.Synergy.FLORA]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.hp = 150;
        this.atk = 21;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.LEECH_SEED;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.ROCK_MELEE;
    }
}
exports.Cradily = Cradily;
class Cranidos extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FOSSIL, Synergy_1.Synergy.MONSTER]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.RAMPARDOS;
        this.hp = 60;
        this.atk = 7;
        this.def = 2;
        this.speDef = 1;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.HEAD_SMASH;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.ROCK_MELEE;
    }
}
exports.Cranidos = Cranidos;
class Rampardos extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FOSSIL, Synergy_1.Synergy.MONSTER]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.hp = 160;
        this.atk = 15;
        this.def = 3;
        this.speDef = 1;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.HEAD_SMASH;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.ROCK_MELEE;
    }
}
exports.Rampardos = Rampardos;
class Kabuto extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FOSSIL, Synergy_1.Synergy.WATER]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.KABUTOPS;
        this.hp = 80;
        this.atk = 8;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.PROTECT;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.ROCK_MELEE;
    }
}
exports.Kabuto = Kabuto;
class Kabutops extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FOSSIL, Synergy_1.Synergy.WATER]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.hp = 190;
        this.atk = 22;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.SLASHING_CLAW;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.ROCK_MELEE;
    }
}
exports.Kabutops = Kabutops;
class Omanyte extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.FOSSIL,
            Synergy_1.Synergy.WATER,
            Synergy_1.Synergy.AMORPHOUS
        ]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.OMASTAR;
        this.hp = 70;
        this.atk = 6;
        this.def = 2;
        this.speDef = 3;
        this.maxPP = 90;
        this.range = 2;
        this.skill = Ability_1.Ability.ROCK_TOMB;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.ROCK_MELEE;
    }
}
exports.Omanyte = Omanyte;
class Omastar extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.FOSSIL,
            Synergy_1.Synergy.WATER,
            Synergy_1.Synergy.AMORPHOUS
        ]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.hp = 150;
        this.atk = 14;
        this.def = 3;
        this.speDef = 4;
        this.maxPP = 90;
        this.range = 2;
        this.skill = Ability_1.Ability.ROCK_TOMB;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.ROCK_MELEE;
    }
}
exports.Omastar = Omastar;
class Clamperl extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.FOSSIL,
            Synergy_1.Synergy.WATER,
            Synergy_1.Synergy.AQUATIC
        ]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.HUNTAIL;
        this.hp = 100;
        this.atk = 7;
        this.def = 4;
        this.speDef = 2;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.ROCK_TOMB;
        this.passive = Passive_1.Passive.BIVALVE;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.WATER_MELEE;
        this.evolutionRule = new evolution_rules_1.CountEvolutionRule(3, (pokemon, player) => {
            if (Math.max(...(0, schemas_1.values)(player.board)
                .filter((pkm) => pkm.index === this.index)
                .map((v) => v.positionY)) === 3) {
                return Pokemon_1.Pkm.HUNTAIL;
            }
            else {
                return Pokemon_1.Pkm.GOREBYSS;
            }
        });
    }
}
exports.Clamperl = Clamperl;
class Gorebyss extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.FOSSIL,
            Synergy_1.Synergy.WATER,
            Synergy_1.Synergy.PSYCHIC
        ]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.hp = 200;
        this.atk = 16;
        this.def = 5;
        this.speDef = 3;
        this.maxPP = 80;
        this.range = 2;
        this.skill = Ability_1.Ability.HYDRO_PUMP;
        this.passive = Passive_1.Passive.BIVALVE;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.WATER_RANGE;
    }
}
exports.Gorebyss = Gorebyss;
class Huntail extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.FOSSIL,
            Synergy_1.Synergy.WATER,
            Synergy_1.Synergy.AQUATIC
        ]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.hp = 140;
        this.atk = 27;
        this.def = 5;
        this.speDef = 3;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.ROCK_TOMB;
        this.passive = Passive_1.Passive.BIVALVE;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.WATER_MELEE;
    }
}
exports.Huntail = Huntail;
class Relicanth extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.ROCK, Synergy_1.Synergy.WATER, Synergy_1.Synergy.FOSSIL]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 220;
        this.atk = 13;
        this.def = 7;
        this.speDef = 3;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.ROCK_TOMB;
        this.attackSprite = types_1.AttackSprite.WATER_MELEE;
    }
}
exports.Relicanth = Relicanth;
class Tyrunt extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DRAGON, Synergy_1.Synergy.ROCK, Synergy_1.Synergy.FOSSIL]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.TYRANTRUM;
        this.hp = 70;
        this.atk = 8;
        this.def = 4;
        this.speDef = 1;
        this.maxPP = 70;
        this.range = 1;
        this.skill = Ability_1.Ability.ROCK_HEAD;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.ROCK_MELEE;
    }
}
exports.Tyrunt = Tyrunt;
class Tyrantrum extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DRAGON, Synergy_1.Synergy.ROCK, Synergy_1.Synergy.FOSSIL]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.hp = 170;
        this.atk = 18;
        this.def = 6;
        this.speDef = 2;
        this.maxPP = 70;
        this.range = 1;
        this.skill = Ability_1.Ability.ROCK_HEAD;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.ROCK_MELEE;
    }
}
exports.Tyrantrum = Tyrantrum;
class Aerodactyl extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.ROCK, Synergy_1.Synergy.FLYING, Synergy_1.Synergy.FOSSIL]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 200;
        this.atk = 17;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.ROCK_SLIDE;
        this.attackSprite = types_1.AttackSprite.ROCK_MELEE;
    }
}
exports.Aerodactyl = Aerodactyl;
class Genesect extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.BUG,
            Synergy_1.Synergy.STEEL,
            Synergy_1.Synergy.ARTIFICIAL
        ]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 200;
        this.atk = 22;
        this.def = 6;
        this.speDef = 3;
        this.maxPP = 80;
        this.range = 4;
        this.skill = Ability_1.Ability.LOCK_ON;
        this.attackSprite = types_1.AttackSprite.FIRE_RANGE;
    }
}
exports.Genesect = Genesect;
class Hatenna extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FAIRY, Synergy_1.Synergy.PSYCHIC]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.HATTREM;
        this.hp = 75;
        this.atk = 6;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.MAGIC_POWDER;
        this.attackSprite = types_1.AttackSprite.PSYCHIC_MELEE;
    }
}
exports.Hatenna = Hatenna;
class Hattrem extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FAIRY, Synergy_1.Synergy.PSYCHIC]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.HATTERENE;
        this.hp = 130;
        this.atk = 11;
        this.def = 4;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.MAGIC_POWDER;
        this.attackSprite = types_1.AttackSprite.PSYCHIC_MELEE;
    }
}
exports.Hattrem = Hattrem;
class Hatterene extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FAIRY, Synergy_1.Synergy.PSYCHIC]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 3;
        this.hp = 240;
        this.atk = 22;
        this.def = 5;
        this.speDef = 8;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.MAGIC_POWDER;
        this.attackSprite = types_1.AttackSprite.PSYCHIC_MELEE;
    }
}
exports.Hatterene = Hatterene;
class Fennekin extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FIRE, Synergy_1.Synergy.PSYCHIC, Synergy_1.Synergy.HUMAN]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.BRAIXEN;
        this.hp = 50;
        this.atk = 5;
        this.def = 1;
        this.speDef = 1;
        this.maxPP = 90;
        this.range = 2;
        this.skill = Ability_1.Ability.MYSTICAL_FIRE;
        this.attackSprite = types_1.AttackSprite.FIRE_RANGE;
    }
}
exports.Fennekin = Fennekin;
class Braixen extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FIRE, Synergy_1.Synergy.PSYCHIC, Synergy_1.Synergy.HUMAN]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.DELPHOX;
        this.hp = 100;
        this.atk = 9;
        this.def = 1;
        this.speDef = 1;
        this.maxPP = 90;
        this.range = 2;
        this.skill = Ability_1.Ability.MYSTICAL_FIRE;
        this.attackSprite = types_1.AttackSprite.FIRE_RANGE;
    }
}
exports.Braixen = Braixen;
class Delphox extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FIRE, Synergy_1.Synergy.PSYCHIC, Synergy_1.Synergy.HUMAN]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 3;
        this.hp = 200;
        this.atk = 18;
        this.def = 1;
        this.speDef = 1;
        this.maxPP = 90;
        this.range = 2;
        this.skill = Ability_1.Ability.MYSTICAL_FIRE;
        this.attackSprite = types_1.AttackSprite.FIRE_RANGE;
    }
}
exports.Delphox = Delphox;
class Regieleki extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.ELECTRIC, Synergy_1.Synergy.HUMAN]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 200;
        this.atk = 20;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.THUNDER_CAGE;
        this.attackSprite = types_1.AttackSprite.ELECTRIC_RANGE;
    }
}
exports.Regieleki = Regieleki;
class Regidrago extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DRAGON, Synergy_1.Synergy.HUMAN]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 200;
        this.atk = 20;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.DRACO_ENERGY;
        this.attackSprite = types_1.AttackSprite.FIRE_RANGE;
    }
}
exports.Regidrago = Regidrago;
class Guzzlord extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.DRAGON,
            Synergy_1.Synergy.DARK,
            Synergy_1.Synergy.MONSTER
        ]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 300;
        this.atk = 22;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.CRUNCH;
        this.passive = Passive_1.Passive.GUZZLORD;
        this.attackSprite = types_1.AttackSprite.DARK_MELEE;
    }
}
exports.Guzzlord = Guzzlord;
class Eternatus extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.DRAGON,
            Synergy_1.Synergy.POISON,
            Synergy_1.Synergy.FOSSIL
        ]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 300;
        this.atk = 22;
        this.def = 8;
        this.speDef = 8;
        this.maxPP = 120;
        this.range = 1;
        this.skill = Ability_1.Ability.DYNAMAX_CANNON;
        this.attackSprite = types_1.AttackSprite.POISON_MELEE;
    }
}
exports.Eternatus = Eternatus;
class Nincada extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.BUG]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.NINJASK;
        this.hp = 130;
        this.atk = 13;
        this.def = 5;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.WONDER_GUARD;
        this.passive = Passive_1.Passive.NINCADA;
        this.attackSprite = types_1.AttackSprite.BUG_MELEE;
        this.additional = true;
    }
}
exports.Nincada = Nincada;
class Ninjask extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.BUG, Synergy_1.Synergy.FLYING]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.hp = 160;
        this.atk = 18;
        this.def = 5;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.AERIAL_ACE;
        this.attackSprite = types_1.AttackSprite.BUG_MELEE;
        this.additional = true;
    }
    onAcquired(player) {
        const x = (0, board_1.getFirstAvailablePositionInBench)(player.board);
        if (x !== undefined) {
            const pokemon = pokemon_factory_1.default.createPokemonFromName(Pokemon_1.Pkm.SHEDINJA, player);
            pokemon.positionX = x;
            pokemon.positionY = 0;
            player.board.set(pokemon.id, pokemon);
        }
    }
}
exports.Ninjask = Ninjask;
class Shedinja extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.BUG, Synergy_1.Synergy.GHOST]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.hp = 100;
        this.atk = 18;
        this.def = 0;
        this.speDef = 0;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.WONDER_GUARD;
        this.passive = Passive_1.Passive.WONDER_GUARD;
        this.attackSprite = types_1.AttackSprite.BUG_MELEE;
        this.additional = true;
    }
}
exports.Shedinja = Shedinja;
class Happiny extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.NORMAL, Synergy_1.Synergy.HUMAN, Synergy_1.Synergy.BABY]);
        this.rarity = Game_1.Rarity.ULTRA;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.CHANSEY;
        this.hp = 150;
        this.atk = 8;
        this.def = 5;
        this.speDef = 5;
        this.maxPP = 120;
        this.range = 1;
        this.skill = Ability_1.Ability.SOFT_BOILED;
        this.attackSprite = types_1.AttackSprite.FAIRY_MELEE;
    }
}
exports.Happiny = Happiny;
class Chansey extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.NORMAL, Synergy_1.Synergy.HUMAN]);
        this.rarity = Game_1.Rarity.ULTRA;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.BLISSEY;
        this.hp = 300;
        this.atk = 20;
        this.def = 6;
        this.speDef = 10;
        this.maxPP = 120;
        this.range = 1;
        this.skill = Ability_1.Ability.SOFT_BOILED;
        this.attackSprite = types_1.AttackSprite.FAIRY_MELEE;
    }
}
exports.Chansey = Chansey;
class Blissey extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.NORMAL, Synergy_1.Synergy.HUMAN]);
        this.rarity = Game_1.Rarity.ULTRA;
        this.stars = 3;
        this.hp = 480;
        this.atk = 25;
        this.def = 10;
        this.speDef = 15;
        this.maxPP = 120;
        this.range = 1;
        this.skill = Ability_1.Ability.SOFT_BOILED;
        this.attackSprite = types_1.AttackSprite.FAIRY_MELEE;
    }
}
exports.Blissey = Blissey;
class TapuKoko extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.ELECTRIC, Synergy_1.Synergy.FAIRY]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 200;
        this.atk = 17;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 100;
        this.range = 3;
        this.skill = Ability_1.Ability.ELECTRIC_SURGE;
        this.passive = Passive_1.Passive.ELECTRIC_TERRAIN;
        this.attackSprite = types_1.AttackSprite.ELECTRIC_RANGE;
    }
}
exports.TapuKoko = TapuKoko;
class TapuLele extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.PSYCHIC, Synergy_1.Synergy.FAIRY]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 200;
        this.atk = 17;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 100;
        this.range = 3;
        this.skill = Ability_1.Ability.PSYCHIC_SURGE;
        this.passive = Passive_1.Passive.PSYCHIC_TERRAIN;
        this.attackSprite = types_1.AttackSprite.PSYCHIC_RANGE;
    }
}
exports.TapuLele = TapuLele;
class Xerneas extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FAIRY, Synergy_1.Synergy.LIGHT, Synergy_1.Synergy.FLORA]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 300;
        this.atk = 25;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 100;
        this.range = 3;
        this.skill = Ability_1.Ability.GEOMANCY;
        this.passive = Passive_1.Passive.MISTY;
        this.attackSprite = types_1.AttackSprite.PSYCHIC_RANGE;
    }
}
exports.Xerneas = Xerneas;
class TapuFini extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WATER, Synergy_1.Synergy.FAIRY]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 200;
        this.atk = 17;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 100;
        this.range = 3;
        this.skill = Ability_1.Ability.MISTY_SURGE;
        this.passive = Passive_1.Passive.MISTY_TERRAIN;
        this.attackSprite = types_1.AttackSprite.WATER_RANGE;
    }
}
exports.TapuFini = TapuFini;
class TapuBulu extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GRASS, Synergy_1.Synergy.FAIRY]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 200;
        this.atk = 17;
        this.def = 5;
        this.speDef = 5;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.GRASSY_SURGE;
        this.passive = Passive_1.Passive.GRASSY_TERRAIN;
        this.attackSprite = types_1.AttackSprite.GRASS_MELEE;
    }
}
exports.TapuBulu = TapuBulu;
class Stakataka extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.ROCK, Synergy_1.Synergy.STEEL]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 300;
        this.atk = 5;
        this.def = 15;
        this.speDef = 15;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.IRON_DEFENSE;
        this.attackSprite = types_1.AttackSprite.ROCK_MELEE;
    }
}
exports.Stakataka = Stakataka;
class Blacephalon extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FIRE, Synergy_1.Synergy.GHOST]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 200;
        this.atk = 15;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 80;
        this.range = 3;
        this.skill = Ability_1.Ability.MIND_BLOWN;
        this.attackSprite = types_1.AttackSprite.GHOST_RANGE;
    }
}
exports.Blacephalon = Blacephalon;
class Houndour extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FIRE, Synergy_1.Synergy.DARK]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.HOUNDOOM;
        this.hp = 90;
        this.atk = 8;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 125;
        this.range = 1;
        this.skill = Ability_1.Ability.BEAT_UP;
        this.attackSprite = types_1.AttackSprite.FIRE_MELEE;
        this.additional = true;
    }
}
exports.Houndour = Houndour;
class Houndoom extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FIRE, Synergy_1.Synergy.DARK]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.MEGA_HOUNDOOM;
        this.hp = 160;
        this.atk = 20;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 125;
        this.range = 1;
        this.skill = Ability_1.Ability.BEAT_UP;
        this.attackSprite = types_1.AttackSprite.FIRE_MELEE;
        this.additional = true;
    }
}
exports.Houndoom = Houndoom;
class MegaHoundoom extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FIRE, Synergy_1.Synergy.DARK]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 3;
        this.hp = 280;
        this.atk = 38;
        this.def = 8;
        this.speDef = 8;
        this.maxPP = 125;
        this.range = 1;
        this.skill = Ability_1.Ability.DEFAULT;
        this.attackSprite = types_1.AttackSprite.FIRE_MELEE;
        this.additional = true;
    }
}
exports.MegaHoundoom = MegaHoundoom;
class Cacnea extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GRASS, Synergy_1.Synergy.DARK, Synergy_1.Synergy.HUMAN]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.CACTURNE;
        this.hp = 85;
        this.atk = 7;
        this.def = 3;
        this.speDef = 1;
        this.maxPP = 70;
        this.range = 1;
        this.skill = Ability_1.Ability.HEAL_BLOCK;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.GRASS_MELEE;
    }
}
exports.Cacnea = Cacnea;
class Cacturne extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GRASS, Synergy_1.Synergy.DARK, Synergy_1.Synergy.HUMAN]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.hp = 180;
        this.atk = 20;
        this.def = 6;
        this.speDef = 2;
        this.maxPP = 70;
        this.range = 1;
        this.skill = Ability_1.Ability.HEAL_BLOCK;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.GRASS_MELEE;
    }
}
exports.Cacturne = Cacturne;
class Pumpkaboo extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GHOST, Synergy_1.Synergy.GRASS]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.GOURGEIST;
        this.hp = 90;
        this.atk = 14;
        this.def = 6;
        this.speDef = 3;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.TRICK_OR_TREAT;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.GRASS_MELEE;
    }
}
exports.Pumpkaboo = Pumpkaboo;
class Gourgeist extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GHOST, Synergy_1.Synergy.GRASS]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.hp = 190;
        this.atk = 28;
        this.def = 10;
        this.speDef = 5;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.TRICK_OR_TREAT;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.GRASS_MELEE;
    }
}
exports.Gourgeist = Gourgeist;
class Natu extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.PSYCHIC, Synergy_1.Synergy.FLYING]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.XATU;
        this.hp = 90;
        this.atk = 5;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 70;
        this.range = 2;
        this.skill = Ability_1.Ability.MAGIC_BOUNCE;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.PSYCHIC_RANGE;
    }
}
exports.Natu = Natu;
class Xatu extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.PSYCHIC, Synergy_1.Synergy.FLYING]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.hp = 180;
        this.atk = 12;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 70;
        this.range = 2;
        this.skill = Ability_1.Ability.MAGIC_BOUNCE;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.PSYCHIC_RANGE;
    }
}
exports.Xatu = Xatu;
class Noibat extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.DRAGON,
            Synergy_1.Synergy.SOUND,
            Synergy_1.Synergy.FLYING
        ]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.NOIVERN;
        this.hp = 65;
        this.atk = 7;
        this.def = 1;
        this.speDef = 1;
        this.maxPP = 90;
        this.range = 2;
        this.skill = Ability_1.Ability.RAZOR_WIND;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.FLYING_RANGE;
    }
}
exports.Noibat = Noibat;
class Noivern extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.DRAGON,
            Synergy_1.Synergy.SOUND,
            Synergy_1.Synergy.FLYING
        ]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.hp = 150;
        this.atk = 17;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 90;
        this.range = 2;
        this.skill = Ability_1.Ability.RAZOR_WIND;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.FLYING_RANGE;
    }
}
exports.Noivern = Noivern;
class Shellder extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WATER, Synergy_1.Synergy.ICE, Synergy_1.Synergy.ROCK]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.CLOYSTER;
        this.hp = 70;
        this.atk = 5;
        this.def = 5;
        this.speDef = 2;
        this.maxPP = 110;
        this.range = 1;
        this.skill = Ability_1.Ability.SHELL_SMASH;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.WATER_MELEE;
    }
}
exports.Shellder = Shellder;
class Cloyster extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WATER, Synergy_1.Synergy.ICE, Synergy_1.Synergy.ROCK]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.hp = 150;
        this.atk = 11;
        this.def = 8;
        this.speDef = 2;
        this.maxPP = 110;
        this.range = 1;
        this.skill = Ability_1.Ability.SHELL_SMASH;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.WATER_MELEE;
    }
}
exports.Cloyster = Cloyster;
class Buizel extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.WATER,
            Synergy_1.Synergy.AQUATIC,
            Synergy_1.Synergy.FIELD
        ]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.FLOATZEL;
        this.hp = 90;
        this.atk = 9;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 65;
        this.range = 1;
        this.skill = Ability_1.Ability.AQUA_JET;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.WATER_MELEE;
    }
}
exports.Buizel = Buizel;
class Floatzel extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.WATER,
            Synergy_1.Synergy.AQUATIC,
            Synergy_1.Synergy.FIELD
        ]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.hp = 180;
        this.atk = 24;
        this.def = 5;
        this.speDef = 5;
        this.maxPP = 65;
        this.range = 1;
        this.skill = Ability_1.Ability.AQUA_JET;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.WATER_MELEE;
    }
}
exports.Floatzel = Floatzel;
class Ponyta extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FIRE, Synergy_1.Synergy.FIELD]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.RAPIDASH;
        this.hp = 90;
        this.atk = 12;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 60;
        this.range = 1;
        this.skill = Ability_1.Ability.FLAME_CHARGE;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.FIRE_MELEE;
    }
}
exports.Ponyta = Ponyta;
class Rapidash extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FIRE, Synergy_1.Synergy.FIELD]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.hp = 220;
        this.atk = 24;
        this.def = 5;
        this.speDef = 5;
        this.maxPP = 60;
        this.range = 1;
        this.skill = Ability_1.Ability.FLAME_CHARGE;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.FIRE_MELEE;
    }
}
exports.Rapidash = Rapidash;
class GalarianPonyta extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.FAIRY,
            Synergy_1.Synergy.PSYCHIC,
            Synergy_1.Synergy.LIGHT
        ]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.GALARIAN_RAPIDASH;
        this.hp = 90;
        this.atk = 9;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.PASTEL_VEIL;
        this.regional = true;
        this.attackSprite = types_1.AttackSprite.FAIRY_MELEE;
    }
}
exports.GalarianPonyta = GalarianPonyta;
class GalarianRapidash extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.FAIRY,
            Synergy_1.Synergy.PSYCHIC,
            Synergy_1.Synergy.LIGHT
        ]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.hp = 220;
        this.atk = 20;
        this.def = 5;
        this.speDef = 5;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.PASTEL_VEIL;
        this.regional = true;
        this.attackSprite = types_1.AttackSprite.FAIRY_MELEE;
    }
}
exports.GalarianRapidash = GalarianRapidash;
class Makuhita extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FIGHTING, Synergy_1.Synergy.MONSTER]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.HARIYAMA;
        this.hp = 80;
        this.atk = 8;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.DYNAMIC_PUNCH;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.FIGHTING_MELEE;
    }
}
exports.Makuhita = Makuhita;
class Hariyama extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FIGHTING, Synergy_1.Synergy.MONSTER]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.hp = 200;
        this.atk = 22;
        this.def = 5;
        this.speDef = 5;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.DYNAMIC_PUNCH;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.FIGHTING_MELEE;
    }
}
exports.Hariyama = Hariyama;
class Sentret extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.GROUND,
            Synergy_1.Synergy.NORMAL,
            Synergy_1.Synergy.FIELD
        ]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.FURRET;
        this.hp = 80;
        this.atk = 7;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.HELPING_HAND;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.NORMAL_MELEE;
    }
}
exports.Sentret = Sentret;
class Furret extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.GROUND,
            Synergy_1.Synergy.NORMAL,
            Synergy_1.Synergy.FIELD
        ]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.hp = 200;
        this.atk = 16;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.HELPING_HAND;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.NORMAL_MELEE;
    }
}
exports.Furret = Furret;
class Joltik extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.BUG, Synergy_1.Synergy.ELECTRIC]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.GALVANTULA;
        this.hp = 80;
        this.atk = 8;
        this.def = 3;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.ELECTRO_WEB;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.ELECTRIC_MELEE;
    }
}
exports.Joltik = Joltik;
class Galvantula extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.BUG, Synergy_1.Synergy.ELECTRIC]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.hp = 180;
        this.atk = 20;
        this.def = 5;
        this.speDef = 3;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.ELECTRO_WEB;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.ELECTRIC_MELEE;
    }
}
exports.Galvantula = Galvantula;
class Paras extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.BUG, Synergy_1.Synergy.POISON, Synergy_1.Synergy.GRASS]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.PARASECT;
        this.hp = 90;
        this.atk = 6;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 110;
        this.range = 1;
        this.skill = Ability_1.Ability.ABSORB;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.BUG_MELEE;
    }
}
exports.Paras = Paras;
class Parasect extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.BUG, Synergy_1.Synergy.POISON, Synergy_1.Synergy.GRASS]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.hp = 180;
        this.atk = 16;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 110;
        this.range = 1;
        this.skill = Ability_1.Ability.ABSORB;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.BUG_MELEE;
    }
}
exports.Parasect = Parasect;
class Corphish extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.AQUATIC, Synergy_1.Synergy.DARK]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.CRAWDAUNT;
        this.hp = 85;
        this.atk = 6;
        this.def = 3;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.CRABHAMMER;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.WATER_MELEE;
    }
}
exports.Corphish = Corphish;
class Crawdaunt extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.AQUATIC, Synergy_1.Synergy.DARK]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.hp = 160;
        this.atk = 16;
        this.def = 5;
        this.speDef = 3;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.CRABHAMMER;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.WATER_MELEE;
    }
}
exports.Crawdaunt = Crawdaunt;
class Meowth extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.NORMAL, Synergy_1.Synergy.FIELD]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.PERSIAN;
        this.hp = 80;
        this.atk = 8;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 90;
        this.range = 1;
        this.skill = Ability_1.Ability.PAYDAY;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.NORMAL_MELEE;
    }
}
exports.Meowth = Meowth;
class Persian extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.NORMAL, Synergy_1.Synergy.FIELD]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.hp = 200;
        this.atk = 20;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 90;
        this.range = 1;
        this.skill = Ability_1.Ability.PAYDAY;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.NORMAL_MELEE;
    }
}
exports.Persian = Persian;
class AlolanMeowth extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.NORMAL, Synergy_1.Synergy.DARK]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.ALOLAN_PERSIAN;
        this.hp = 80;
        this.atk = 8;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 90;
        this.range = 1;
        this.skill = Ability_1.Ability.PICKUP;
        this.regional = true;
        this.attackSprite = types_1.AttackSprite.NORMAL_MELEE;
    }
}
exports.AlolanMeowth = AlolanMeowth;
class AlolanPersian extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.NORMAL, Synergy_1.Synergy.DARK]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.hp = 200;
        this.atk = 20;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 90;
        this.range = 1;
        this.skill = Ability_1.Ability.PICKUP;
        this.regional = true;
        this.attackSprite = types_1.AttackSprite.NORMAL_MELEE;
    }
}
exports.AlolanPersian = AlolanPersian;
class Hoothoot extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.NORMAL,
            Synergy_1.Synergy.FLYING,
            Synergy_1.Synergy.PSYCHIC
        ]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.NOCTOWL;
        this.hp = 75;
        this.atk = 5;
        this.def = 2;
        this.speDef = 3;
        this.maxPP = 90;
        this.range = 1;
        this.skill = Ability_1.Ability.HYPNOSIS;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.FLYING_MELEE;
    }
}
exports.Hoothoot = Hoothoot;
class Noctowl extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.NORMAL,
            Synergy_1.Synergy.FLYING,
            Synergy_1.Synergy.PSYCHIC
        ]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.hp = 170;
        this.atk = 10;
        this.def = 3;
        this.speDef = 5;
        this.maxPP = 90;
        this.range = 1;
        this.skill = Ability_1.Ability.HYPNOSIS;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.FLYING_MELEE;
    }
}
exports.Noctowl = Noctowl;
class Munchlax extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.NORMAL, Synergy_1.Synergy.HUMAN, Synergy_1.Synergy.BABY]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.SNORLAX;
        this.hp = 120;
        this.atk = 8;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 120;
        this.range = 1;
        this.skill = Ability_1.Ability.BODY_SLAM;
        this.passive = Passive_1.Passive.GLUTTON;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.NORMAL_MELEE;
    }
}
exports.Munchlax = Munchlax;
class Snorlax extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.NORMAL,
            Synergy_1.Synergy.HUMAN,
            Synergy_1.Synergy.MONSTER
        ]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.hp = 260;
        this.atk = 19;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 120;
        this.range = 1;
        this.skill = Ability_1.Ability.BODY_SLAM;
        this.passive = Passive_1.Passive.GLUTTON;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.NORMAL_MELEE;
    }
}
exports.Snorlax = Snorlax;
class Poipole extends Pokemon {
    constructor() {
        super(...arguments);
        this.baseHp = 120;
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.POISON, Synergy_1.Synergy.BUG]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.NAGANADEL;
        this.hp = this.baseHp;
        this.atk = 12;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 75;
        this.range = 1;
        this.skill = Ability_1.Ability.FELL_STINGER;
        this.passive = Passive_1.Passive.POISON_PIN;
        this.attackSprite = types_1.AttackSprite.DRAGON_MELEE;
        this.evolutionRule = new evolution_rules_1.ConditionBasedEvolutionRule((pokemon) => pokemon.hp >= 200);
    }
    afterEvolve({ pokemonEvolved: naganadel, pokemonsBeforeEvolution: poipoles }) {
        const apStacked = (0, array_1.sum)(poipoles.map((m) => m.ap));
        naganadel.ap += apStacked;
    }
}
exports.Poipole = Poipole;
class Naganadel extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DRAGON, Synergy_1.Synergy.POISON, Synergy_1.Synergy.BUG]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 200;
        this.atk = 20;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 75;
        this.range = 1;
        this.skill = Ability_1.Ability.FELL_STINGER;
        this.attackSprite = types_1.AttackSprite.DRAGON_MELEE;
    }
}
exports.Naganadel = Naganadel;
class Growlithe extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FIRE, Synergy_1.Synergy.FIELD]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.ARCANINE;
        this.hp = 75;
        this.atk = 6;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.FIRE_FANG;
        this.attackSprite = types_1.AttackSprite.FIRE_MELEE;
        this.additional = true;
    }
}
exports.Growlithe = Growlithe;
class Arcanine extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FIRE, Synergy_1.Synergy.FIELD]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.hp = 140;
        this.atk = 14;
        this.def = 5;
        this.speDef = 5;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.FIRE_FANG;
        this.attackSprite = types_1.AttackSprite.FIRE_MELEE;
        this.additional = true;
    }
}
exports.Arcanine = Arcanine;
class HisuiGrowlithe extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FIRE, Synergy_1.Synergy.ROCK, Synergy_1.Synergy.FIELD]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.HISUI_ARCANINE;
        this.hp = 75;
        this.atk = 5;
        this.def = 3;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.DOUBLE_EDGE;
        this.attackSprite = types_1.AttackSprite.FIRE_MELEE;
        this.regional = true;
    }
    isInRegion(map, state) {
        var _a;
        const regionSynergies = (_a = Dungeon_1.DungeonDetails[map]) === null || _a === void 0 ? void 0 : _a.synergies;
        return ((!state || state.additionalPokemons.includes(Pokemon_1.Pkm.GROWLITHE)) &&
            regionSynergies.includes(Synergy_1.Synergy.ROCK));
    }
}
exports.HisuiGrowlithe = HisuiGrowlithe;
class HisuiArcanine extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FIRE, Synergy_1.Synergy.ROCK, Synergy_1.Synergy.FIELD]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.hp = 140;
        this.atk = 12;
        this.def = 6;
        this.speDef = 5;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.DOUBLE_EDGE;
        this.attackSprite = types_1.AttackSprite.FIRE_MELEE;
        this.regional = true;
    }
    isInRegion(map, state) {
        var _a;
        const regionSynergies = (_a = Dungeon_1.DungeonDetails[map]) === null || _a === void 0 ? void 0 : _a.synergies;
        return ((!state || state.additionalPokemons.includes(Pokemon_1.Pkm.GROWLITHE)) &&
            regionSynergies.includes(Synergy_1.Synergy.ROCK));
    }
}
exports.HisuiArcanine = HisuiArcanine;
class Smoochum extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.ICE, Synergy_1.Synergy.PSYCHIC, Synergy_1.Synergy.BABY]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.JYNX;
        this.hp = 60;
        this.atk = 6;
        this.def = 1;
        this.speDef = 1;
        this.maxPP = 80;
        this.range = 2;
        this.skill = Ability_1.Ability.LOVELY_KISS;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.PSYCHIC_RANGE;
    }
}
exports.Smoochum = Smoochum;
class Jynx extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.ICE, Synergy_1.Synergy.PSYCHIC, Synergy_1.Synergy.HUMAN]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.hp = 130;
        this.atk = 12;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 80;
        this.range = 2;
        this.skill = Ability_1.Ability.LOVELY_KISS;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.PSYCHIC_RANGE;
    }
}
exports.Jynx = Jynx;
class MimeJr extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FAIRY, Synergy_1.Synergy.PSYCHIC, Synergy_1.Synergy.BABY]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.MR_MIME;
        this.hp = 70;
        this.atk = 6;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 80;
        this.range = 2;
        this.skill = Ability_1.Ability.MIMIC;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.FAIRY_RANGE;
    }
}
exports.MimeJr = MimeJr;
class MrMime extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.FAIRY,
            Synergy_1.Synergy.PSYCHIC,
            Synergy_1.Synergy.HUMAN
        ]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.hp = 200;
        this.atk = 15;
        this.def = 2;
        this.speDef = 4;
        this.maxPP = 80;
        this.range = 2;
        this.skill = Ability_1.Ability.MIMIC;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.FAIRY_RANGE;
    }
}
exports.MrMime = MrMime;
class Salandit extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FIRE, Synergy_1.Synergy.POISON]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.SALAZZLE;
        this.hp = 70;
        this.atk = 7;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 60;
        this.range = 2;
        this.skill = Ability_1.Ability.POISON;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.FIRE_RANGE;
    }
}
exports.Salandit = Salandit;
class Salazzle extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FIRE, Synergy_1.Synergy.POISON]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.hp = 170;
        this.atk = 17;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 60;
        this.range = 2;
        this.skill = Ability_1.Ability.POISON;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.FIRE_RANGE;
    }
}
exports.Salazzle = Salazzle;
class Venonat extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.BUG, Synergy_1.Synergy.FLYING, Synergy_1.Synergy.POISON]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.VENOMOTH;
        this.hp = 50;
        this.atk = 6;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.BUG_BUZZ;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.BUG_MELEE;
    }
}
exports.Venonat = Venonat;
class Venomoth extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.BUG, Synergy_1.Synergy.FLYING, Synergy_1.Synergy.POISON]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.hp = 130;
        this.atk = 11;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 80;
        this.range = 2;
        this.skill = Ability_1.Ability.BUG_BUZZ;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.PSYCHIC_RANGE;
    }
}
exports.Venomoth = Venomoth;
class Voltorb extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.ELECTRIC, Synergy_1.Synergy.ARTIFICIAL]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.ELECTRODE;
        this.hp = 60;
        this.atk = 9;
        this.def = 1;
        this.speDef = 1;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.EXPLOSION;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.ELECTRIC_MELEE;
    }
}
exports.Voltorb = Voltorb;
class Electrode extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.ELECTRIC, Synergy_1.Synergy.ARTIFICIAL]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.hp = 150;
        this.atk = 18;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.EXPLOSION;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.ELECTRIC_MELEE;
    }
}
exports.Electrode = Electrode;
class HisuiVoltorb extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.ELECTRIC,
            Synergy_1.Synergy.GRASS,
            Synergy_1.Synergy.FOSSIL
        ]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.ELECTRODE;
        this.hp = 60;
        this.atk = 9;
        this.def = 1;
        this.speDef = 1;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.CHLOROBLAST;
        this.regional = true;
        this.attackSprite = types_1.AttackSprite.ELECTRIC_MELEE;
    }
}
exports.HisuiVoltorb = HisuiVoltorb;
class HisuiElectrode extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.ELECTRIC,
            Synergy_1.Synergy.GRASS,
            Synergy_1.Synergy.FOSSIL
        ]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.hp = 150;
        this.atk = 18;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.CHLOROBLAST;
        this.regional = true;
        this.attackSprite = types_1.AttackSprite.ELECTRIC_MELEE;
    }
}
exports.HisuiElectrode = HisuiElectrode;
class Slugma extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.FIRE,
            Synergy_1.Synergy.ROCK,
            Synergy_1.Synergy.AMORPHOUS
        ]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.MAGCARGO;
        this.hp = 70;
        this.atk = 6;
        this.def = 4;
        this.speDef = 3;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.LAVA_PLUME;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.FIRE_MELEE;
    }
}
exports.Slugma = Slugma;
class Magcargo extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.FIRE,
            Synergy_1.Synergy.ROCK,
            Synergy_1.Synergy.AMORPHOUS
        ]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.hp = 180;
        this.atk = 14;
        this.def = 8;
        this.speDef = 5;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.LAVA_PLUME;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.FIRE_MELEE;
    }
}
exports.Magcargo = Magcargo;
class Sneasel extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.ICE, Synergy_1.Synergy.DARK, Synergy_1.Synergy.MONSTER]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.WEAVILE;
        this.hp = 85;
        this.atk = 9;
        this.def = 1;
        this.speDef = 3;
        this.maxPP = 40;
        this.range = 1;
        this.skill = Ability_1.Ability.SLASHING_CLAW;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.ICE_MELEE;
    }
}
exports.Sneasel = Sneasel;
class Weavile extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.ICE, Synergy_1.Synergy.DARK, Synergy_1.Synergy.MONSTER]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.hp = 200;
        this.atk = 22;
        this.def = 2;
        this.speDef = 3;
        this.maxPP = 40;
        this.range = 1;
        this.skill = Ability_1.Ability.SLASHING_CLAW;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.ICE_MELEE;
    }
}
exports.Weavile = Weavile;
class HisuiSneasel extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.POISON,
            Synergy_1.Synergy.FIGHTING,
            Synergy_1.Synergy.MONSTER
        ]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.SNEASLER;
        this.hp = 85;
        this.atk = 9;
        this.def = 1;
        this.speDef = 3;
        this.maxPP = 50;
        this.range = 1;
        this.skill = Ability_1.Ability.DIRE_CLAW;
        this.regional = true;
        this.attackSprite = types_1.AttackSprite.POISON_MELEE;
    }
    isInRegion(map, state) {
        var _a;
        const regionSynergies = (_a = Dungeon_1.DungeonDetails[map]) === null || _a === void 0 ? void 0 : _a.synergies;
        return ((!state || state.additionalPokemons.includes(Pokemon_1.Pkm.SNEASEL)) &&
            (regionSynergies.includes(Synergy_1.Synergy.FIGHTING) ||
                regionSynergies.includes(Synergy_1.Synergy.POISON)));
    }
}
exports.HisuiSneasel = HisuiSneasel;
class Sneasler extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.POISON,
            Synergy_1.Synergy.FIGHTING,
            Synergy_1.Synergy.MONSTER
        ]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.hp = 200;
        this.atk = 22;
        this.def = 2;
        this.speDef = 3;
        this.maxPP = 50;
        this.range = 1;
        this.skill = Ability_1.Ability.DIRE_CLAW;
        this.regional = true;
        this.attackSprite = types_1.AttackSprite.POISON_MELEE;
    }
    isInRegion(map, state) {
        var _a;
        const regionSynergies = (_a = Dungeon_1.DungeonDetails[map]) === null || _a === void 0 ? void 0 : _a.synergies;
        return ((!state || state.additionalPokemons.includes(Pokemon_1.Pkm.SNEASEL)) &&
            (regionSynergies.includes(Synergy_1.Synergy.FIGHTING) ||
                regionSynergies.includes(Synergy_1.Synergy.POISON)));
    }
}
exports.Sneasler = Sneasler;
class Seel extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.ICE, Synergy_1.Synergy.AQUATIC]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.DEWGONG;
        this.hp = 80;
        this.atk = 7;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 90;
        this.range = 1;
        this.skill = Ability_1.Ability.AURORA_BEAM;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.ICE_MELEE;
    }
}
exports.Seel = Seel;
class Dewgong extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.ICE, Synergy_1.Synergy.AQUATIC]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.hp = 170;
        this.atk = 16;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 90;
        this.range = 1;
        this.skill = Ability_1.Ability.AURORA_BEAM;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.ICE_MELEE;
    }
}
exports.Dewgong = Dewgong;
class Croagunk extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.POISON,
            Synergy_1.Synergy.FIGHTING,
            Synergy_1.Synergy.AQUATIC
        ]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.TOXICROAK;
        this.hp = 75;
        this.atk = 6;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 85;
        this.range = 1;
        this.skill = Ability_1.Ability.CROSS_POISON;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.POISON_MELEE;
    }
}
exports.Croagunk = Croagunk;
class Toxicroak extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.POISON,
            Synergy_1.Synergy.FIGHTING,
            Synergy_1.Synergy.AQUATIC
        ]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.hp = 190;
        this.atk = 14;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 85;
        this.range = 1;
        this.skill = Ability_1.Ability.CROSS_POISON;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.POISON_MELEE;
    }
}
exports.Toxicroak = Toxicroak;
class Chinchou extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.WATER,
            Synergy_1.Synergy.ELECTRIC,
            Synergy_1.Synergy.LIGHT
        ]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.LANTURN;
        this.hp = 60;
        this.atk = 7;
        this.def = 2;
        this.speDef = 3;
        this.maxPP = 90;
        this.range = 2;
        this.skill = Ability_1.Ability.THUNDER;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.ELECTRIC_RANGE;
    }
}
exports.Chinchou = Chinchou;
class Lanturn extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.WATER,
            Synergy_1.Synergy.ELECTRIC,
            Synergy_1.Synergy.LIGHT
        ]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.hp = 130;
        this.atk = 16;
        this.def = 3;
        this.speDef = 5;
        this.maxPP = 90;
        this.range = 2;
        this.skill = Ability_1.Ability.THUNDER;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.ELECTRIC_RANGE;
    }
}
exports.Lanturn = Lanturn;
class Poochyena extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WILD, Synergy_1.Synergy.DARK]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.MIGHTYENA;
        this.hp = 80;
        this.atk = 9;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 75;
        this.range = 1;
        this.skill = Ability_1.Ability.GROWL;
        this.attackSprite = types_1.AttackSprite.NORMAL_MELEE;
    }
}
exports.Poochyena = Poochyena;
class Mightyena extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WILD, Synergy_1.Synergy.DARK]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.hp = 190;
        this.atk = 19;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 75;
        this.range = 1;
        this.skill = Ability_1.Ability.GROWL;
        this.attackSprite = types_1.AttackSprite.NORMAL_MELEE;
    }
}
exports.Mightyena = Mightyena;
class Bronzor extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.STEEL, Synergy_1.Synergy.PSYCHIC]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.BRONZONG;
        this.hp = 100;
        this.atk = 5;
        this.def = 6;
        this.speDef = 3;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.DEFENSE_CURL;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.DRAGON_MELEE;
    }
}
exports.Bronzor = Bronzor;
class Bronzong extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.STEEL,
            Synergy_1.Synergy.PSYCHIC,
            Synergy_1.Synergy.SOUND
        ]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.hp = 200;
        this.atk = 11;
        this.def = 9;
        this.speDef = 7;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.DEFENSE_CURL;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.DRAGON_MELEE;
    }
}
exports.Bronzong = Bronzong;
class Drifloon extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.GHOST,
            Synergy_1.Synergy.FLYING,
            Synergy_1.Synergy.AMORPHOUS
        ]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.DRIFBLIM;
        this.hp = 100;
        this.atk = 5;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 85;
        this.range = 2;
        this.skill = Ability_1.Ability.CALM_MIND;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.GHOST_RANGE;
    }
}
exports.Drifloon = Drifloon;
class Drifblim extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.GHOST,
            Synergy_1.Synergy.FLYING,
            Synergy_1.Synergy.AMORPHOUS
        ]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.hp = 250;
        this.atk = 10;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 85;
        this.range = 2;
        this.skill = Ability_1.Ability.CALM_MIND;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.GHOST_RANGE;
    }
}
exports.Drifblim = Drifblim;
class Shroomish extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GRASS, Synergy_1.Synergy.FIGHTING]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.BRELOOM;
        this.hp = 70;
        this.atk = 7;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 85;
        this.range = 1;
        this.skill = Ability_1.Ability.LEECH_SEED;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.FIGHTING_MELEE;
    }
}
exports.Shroomish = Shroomish;
class Breloom extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GRASS, Synergy_1.Synergy.FIGHTING]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.hp = 170;
        this.atk = 18;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 85;
        this.range = 1;
        this.skill = Ability_1.Ability.LEECH_SEED;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.FIGHTING_MELEE;
    }
}
exports.Breloom = Breloom;
class Tentacool extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.WATER,
            Synergy_1.Synergy.AQUATIC,
            Synergy_1.Synergy.POISON
        ]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.TENTACRUEL;
        this.hp = 65;
        this.atk = 5;
        this.def = 2;
        this.speDef = 4;
        this.maxPP = 85;
        this.range = 1;
        this.skill = Ability_1.Ability.POISON;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.WATER_MELEE;
    }
}
exports.Tentacool = Tentacool;
class Tentacruel extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.WATER,
            Synergy_1.Synergy.AQUATIC,
            Synergy_1.Synergy.POISON
        ]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.hp = 150;
        this.atk = 10;
        this.def = 3;
        this.speDef = 7;
        this.maxPP = 85;
        this.range = 1;
        this.skill = Ability_1.Ability.POISON;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.WATER_MELEE;
    }
}
exports.Tentacruel = Tentacruel;
class Snubull extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FAIRY, Synergy_1.Synergy.FIELD]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.GRANBULL;
        this.hp = 115;
        this.atk = 12;
        this.def = 4;
        this.speDef = 2;
        this.maxPP = 70;
        this.range = 1;
        this.skill = Ability_1.Ability.ROAR;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.FAIRY_MELEE;
    }
}
exports.Snubull = Snubull;
class Granbull extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FAIRY, Synergy_1.Synergy.FIELD]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.hp = 265;
        this.atk = 28;
        this.def = 6;
        this.speDef = 3;
        this.maxPP = 70;
        this.range = 1;
        this.skill = Ability_1.Ability.ROAR;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.FAIRY_MELEE;
    }
}
exports.Granbull = Granbull;
const rksSystemOnChangePosition = function (x, y, player) {
    if (y === 0) {
        Item_1.SynergyItems.forEach((synergyItem) => {
            if (this.items.has(synergyItem)) {
                this.items.delete(synergyItem);
                player.items.push(synergyItem);
            }
        });
        player.transformPokemon(this, Pokemon_1.Pkm.TYPE_NULL);
    }
};
const evolveMothim = function (params) {
    const preEvolve = params.pokemonsBeforeEvolution.at(-1);
    if (preEvolve instanceof WormadamTrash) {
        params.pokemonEvolved.types.add(Synergy_1.Synergy.ARTIFICIAL);
    }
    else if (preEvolve instanceof WormadamSandy) {
        params.pokemonEvolved.types.add(Synergy_1.Synergy.GROUND);
    }
    else if (preEvolve instanceof WormadamPlant) {
        params.pokemonEvolved.types.add(Synergy_1.Synergy.GRASS);
    }
};
class TypeNull extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.ARTIFICIAL]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.SILVALLY;
        this.evolutionRule = new evolution_rules_1.ItemEvolutionRule([...Item_1.SynergyItems]);
        this.hp = 200;
        this.atk = 14;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.HEAD_SMASH;
        this.passive = Passive_1.Passive.TYPE_NULL;
        this.attackSprite = types_1.AttackSprite.NORMAL_MELEE;
    }
}
exports.TypeNull = TypeNull;
class Silvally extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.ARTIFICIAL]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 260;
        this.atk = 18;
        this.def = 5;
        this.speDef = 5;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.MULTI_ATTACK;
        this.passive = Passive_1.Passive.RKS_SYSTEM;
        this.attackSprite = types_1.AttackSprite.NORMAL_MELEE;
        this.onChangePosition = rksSystemOnChangePosition;
    }
}
exports.Silvally = Silvally;
class Applin extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DRAGON, Synergy_1.Synergy.GRASS]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.APPLETUN;
        this.hp = 130;
        this.atk = 8;
        this.def = 5;
        this.speDef = 2;
        this.maxPP = 85;
        this.range = 1;
        this.skill = Ability_1.Ability.APPLE_ACID;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.GRASS_MELEE;
    }
}
exports.Applin = Applin;
class Appletun extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DRAGON, Synergy_1.Synergy.GRASS]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.hp = 250;
        this.atk = 22;
        this.def = 8;
        this.speDef = 6;
        this.maxPP = 85;
        this.range = 1;
        this.skill = Ability_1.Ability.APPLE_ACID;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.GRASS_MELEE;
    }
}
exports.Appletun = Appletun;
class Staryu extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WATER, Synergy_1.Synergy.PSYCHIC]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.STARMIE;
        this.hp = 80;
        this.atk = 7;
        this.def = 2;
        this.speDef = 3;
        this.maxPP = 90;
        this.range = 2;
        this.skill = Ability_1.Ability.PSYBEAM;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.PSYCHIC_RANGE;
    }
}
exports.Staryu = Staryu;
class Starmie extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WATER, Synergy_1.Synergy.PSYCHIC]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.hp = 180;
        this.atk = 20;
        this.def = 4;
        this.speDef = 6;
        this.maxPP = 90;
        this.range = 2;
        this.skill = Ability_1.Ability.PSYBEAM;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.PSYCHIC_RANGE;
    }
}
exports.Starmie = Starmie;
class Vulpix extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FIRE, Synergy_1.Synergy.PSYCHIC]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.NINETALES;
        this.hp = 75;
        this.atk = 7;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 85;
        this.range = 2;
        this.skill = Ability_1.Ability.FIRE_SPIN;
        this.attackSprite = types_1.AttackSprite.FIRE_RANGE;
        this.additional = true;
    }
}
exports.Vulpix = Vulpix;
class Ninetales extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FIRE, Synergy_1.Synergy.PSYCHIC]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.hp = 170;
        this.atk = 20;
        this.def = 3;
        this.speDef = 5;
        this.maxPP = 85;
        this.range = 2;
        this.skill = Ability_1.Ability.FIRE_SPIN;
        this.attackSprite = types_1.AttackSprite.FIRE_RANGE;
        this.additional = true;
    }
}
exports.Ninetales = Ninetales;
class AlolanVulpix extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.ICE, Synergy_1.Synergy.FAIRY]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.ALOLAN_NINETALES;
        this.hp = 75;
        this.atk = 7;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 85;
        this.range = 2;
        this.skill = Ability_1.Ability.AURORA_VEIL;
        this.regional = true;
        this.attackSprite = types_1.AttackSprite.ICE_RANGE;
    }
    isInRegion(map, state) {
        var _a;
        const regionSynergies = (_a = Dungeon_1.DungeonDetails[map]) === null || _a === void 0 ? void 0 : _a.synergies;
        return ((!state || state.additionalPokemons.includes(Pokemon_1.Pkm.VULPIX)) &&
            (regionSynergies.includes(Synergy_1.Synergy.ICE) ||
                regionSynergies.includes(Synergy_1.Synergy.FAIRY)));
    }
}
exports.AlolanVulpix = AlolanVulpix;
class AlolanNinetales extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.ICE, Synergy_1.Synergy.FAIRY]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.hp = 170;
        this.atk = 20;
        this.def = 5;
        this.speDef = 5;
        this.maxPP = 85;
        this.range = 2;
        this.skill = Ability_1.Ability.AURORA_VEIL;
        this.regional = true;
        this.attackSprite = types_1.AttackSprite.ICE_RANGE;
    }
    isInRegion(map, state) {
        var _a;
        const regionSynergies = (_a = Dungeon_1.DungeonDetails[map]) === null || _a === void 0 ? void 0 : _a.synergies;
        return ((!state || state.additionalPokemons.includes(Pokemon_1.Pkm.VULPIX)) &&
            (regionSynergies.includes(Synergy_1.Synergy.ICE) ||
                regionSynergies.includes(Synergy_1.Synergy.FAIRY)));
    }
}
exports.AlolanNinetales = AlolanNinetales;
class Snom extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.BUG, Synergy_1.Synergy.ICE]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.FROSMOTH;
        this.hp = 70;
        this.atk = 8;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 80;
        this.range = 2;
        this.skill = Ability_1.Ability.BUG_BUZZ;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.ICE_RANGE;
    }
}
exports.Snom = Snom;
class Frosmoth extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.BUG, Synergy_1.Synergy.ICE]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.hp = 180;
        this.atk = 20;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 80;
        this.range = 2;
        this.skill = Ability_1.Ability.BUG_BUZZ;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.ICE_RANGE;
    }
}
exports.Frosmoth = Frosmoth;
class Wailmer extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WATER, Synergy_1.Synergy.SOUND]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.WAILORD;
        this.hp = 180;
        this.atk = 6;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.DIVE;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.WATER_MELEE;
    }
}
exports.Wailmer = Wailmer;
class Wailord extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WATER, Synergy_1.Synergy.SOUND]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.hp = 400;
        this.atk = 11;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.DIVE;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.WATER_MELEE;
    }
}
exports.Wailord = Wailord;
class Dreepy extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DRAGON, Synergy_1.Synergy.GHOST]);
        this.rarity = Game_1.Rarity.HATCH;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.DRAKLOAK;
        this.evolutionRule = new evolution_rules_1.HatchEvolutionRule(Config_1.EvolutionTime.EVOLVE_HATCH);
        this.hp = 90;
        this.atk = 6;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.DRAGON_DARTS;
        this.passive = Passive_1.Passive.HATCH;
        this.attackSprite = types_1.AttackSprite.FIRE_RANGE;
    }
}
exports.Dreepy = Dreepy;
class Drakloak extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DRAGON, Synergy_1.Synergy.GHOST]);
        this.rarity = Game_1.Rarity.HATCH;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.DRAGAPULT;
        this.evolutionRule = new evolution_rules_1.HatchEvolutionRule(Config_1.EvolutionTime.EVOLVE_HATCH);
        this.hp = 140;
        this.atk = 15;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.DRAGON_DARTS;
        this.passive = Passive_1.Passive.HATCH;
        this.attackSprite = types_1.AttackSprite.FIRE_RANGE;
    }
}
exports.Drakloak = Drakloak;
class Dragapult extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DRAGON, Synergy_1.Synergy.GHOST]);
        this.rarity = Game_1.Rarity.HATCH;
        this.stars = 3;
        this.hp = 190;
        this.atk = 26;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.DRAGON_DARTS;
        this.attackSprite = types_1.AttackSprite.FIRE_RANGE;
    }
}
exports.Dragapult = Dragapult;
class Snivy extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GRASS, Synergy_1.Synergy.FIELD]);
        this.rarity = Game_1.Rarity.HATCH;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.SERVINE;
        this.evolutionRule = new evolution_rules_1.HatchEvolutionRule(Config_1.EvolutionTime.EVOLVE_HATCH);
        this.hp = 90;
        this.atk = 5;
        this.def = 1;
        this.speDef = 1;
        this.maxPP = 70;
        this.range = 3;
        this.skill = Ability_1.Ability.MAGICAL_LEAF;
        this.passive = Passive_1.Passive.HATCH;
        this.attackSprite = types_1.AttackSprite.GRASS_RANGE;
    }
}
exports.Snivy = Snivy;
class Servine extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GRASS, Synergy_1.Synergy.FIELD]);
        this.rarity = Game_1.Rarity.HATCH;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.SERPERIOR;
        this.evolutionRule = new evolution_rules_1.HatchEvolutionRule(Config_1.EvolutionTime.EVOLVE_HATCH);
        this.hp = 160;
        this.atk = 13;
        this.def = 1;
        this.speDef = 1;
        this.maxPP = 70;
        this.range = 3;
        this.skill = Ability_1.Ability.MAGICAL_LEAF;
        this.passive = Passive_1.Passive.HATCH;
        this.attackSprite = types_1.AttackSprite.GRASS_RANGE;
    }
}
exports.Servine = Servine;
class Serperior extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GRASS, Synergy_1.Synergy.FIELD]);
        this.rarity = Game_1.Rarity.HATCH;
        this.stars = 3;
        this.hp = 240;
        this.atk = 24;
        this.def = 1;
        this.speDef = 1;
        this.maxPP = 70;
        this.range = 3;
        this.skill = Ability_1.Ability.MAGICAL_LEAF;
        this.attackSprite = types_1.AttackSprite.GRASS_RANGE;
    }
}
exports.Serperior = Serperior;
class Starly extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.NORMAL, Synergy_1.Synergy.FLYING]);
        this.rarity = Game_1.Rarity.HATCH;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.STARAVIA;
        this.evolutionRule = new evolution_rules_1.HatchEvolutionRule(Config_1.EvolutionTime.EVOLVE_HATCH);
        this.hp = 75;
        this.atk = 9;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.BRAVE_BIRD;
        this.passive = Passive_1.Passive.HATCH;
        this.attackSprite = types_1.AttackSprite.FLYING_MELEE;
    }
}
exports.Starly = Starly;
class Staravia extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.NORMAL, Synergy_1.Synergy.FLYING]);
        this.rarity = Game_1.Rarity.HATCH;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.STARAPTOR;
        this.evolutionRule = new evolution_rules_1.HatchEvolutionRule(Config_1.EvolutionTime.EVOLVE_HATCH);
        this.hp = 130;
        this.atk = 18;
        this.def = 5;
        this.speDef = 5;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.BRAVE_BIRD;
        this.passive = Passive_1.Passive.HATCH;
        this.attackSprite = types_1.AttackSprite.FLYING_MELEE;
    }
}
exports.Staravia = Staravia;
class Staraptor extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.NORMAL, Synergy_1.Synergy.FLYING]);
        this.rarity = Game_1.Rarity.HATCH;
        this.stars = 3;
        this.hp = 200;
        this.atk = 28;
        this.def = 7;
        this.speDef = 7;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.BRAVE_BIRD;
        this.attackSprite = types_1.AttackSprite.FLYING_MELEE;
    }
}
exports.Staraptor = Staraptor;
class Scorbunny extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FIRE, Synergy_1.Synergy.FIELD, Synergy_1.Synergy.HUMAN]);
        this.rarity = Game_1.Rarity.HATCH;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.RABOOT;
        this.evolutionRule = new evolution_rules_1.HatchEvolutionRule(Config_1.EvolutionTime.EVOLVE_HATCH);
        this.hp = 75;
        this.atk = 6;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 50;
        this.range = 1;
        this.skill = Ability_1.Ability.PYRO_BALL;
        this.passive = Passive_1.Passive.HATCH;
        this.attackSprite = types_1.AttackSprite.FIRE_MELEE;
    }
}
exports.Scorbunny = Scorbunny;
class Raboot extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FIRE, Synergy_1.Synergy.FIELD, Synergy_1.Synergy.HUMAN]);
        this.rarity = Game_1.Rarity.HATCH;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.CINDERACE;
        this.evolutionRule = new evolution_rules_1.HatchEvolutionRule(Config_1.EvolutionTime.EVOLVE_HATCH);
        this.hp = 130;
        this.atk = 12;
        this.def = 5;
        this.speDef = 5;
        this.maxPP = 50;
        this.range = 1;
        this.skill = Ability_1.Ability.PYRO_BALL;
        this.passive = Passive_1.Passive.HATCH;
        this.attackSprite = types_1.AttackSprite.FIRE_MELEE;
    }
}
exports.Raboot = Raboot;
class Cinderace extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FIRE, Synergy_1.Synergy.FIELD, Synergy_1.Synergy.HUMAN]);
        this.rarity = Game_1.Rarity.HATCH;
        this.stars = 3;
        this.hp = 180;
        this.atk = 20;
        this.def = 7;
        this.speDef = 7;
        this.maxPP = 50;
        this.range = 1;
        this.skill = Ability_1.Ability.PYRO_BALL;
        this.attackSprite = types_1.AttackSprite.FIRE_MELEE;
    }
}
exports.Cinderace = Cinderace;
class AlolanGeodude extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.ELECTRIC, Synergy_1.Synergy.ROCK]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.ALOLAN_GRAVELER;
        this.hp = 70;
        this.atk = 4;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.DISCHARGE;
        this.attackSprite = types_1.AttackSprite.ROCK_MELEE;
        this.regional = true;
    }
    isInRegion(map, state) {
        var _a;
        const regionSynergies = (_a = Dungeon_1.DungeonDetails[map]) === null || _a === void 0 ? void 0 : _a.synergies;
        return regionSynergies.includes(Synergy_1.Synergy.ELECTRIC);
    }
}
exports.AlolanGeodude = AlolanGeodude;
class AlolanGraveler extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.ELECTRIC, Synergy_1.Synergy.ROCK]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.ALOLAN_GOLEM;
        this.hp = 120;
        this.atk = 9;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.DISCHARGE;
        this.attackSprite = types_1.AttackSprite.ROCK_MELEE;
        this.regional = true;
    }
    isInRegion(map, state) {
        var _a;
        const regionSynergies = (_a = Dungeon_1.DungeonDetails[map]) === null || _a === void 0 ? void 0 : _a.synergies;
        return regionSynergies.includes(Synergy_1.Synergy.ELECTRIC);
    }
}
exports.AlolanGraveler = AlolanGraveler;
class AlolanGolem extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.ELECTRIC, Synergy_1.Synergy.ROCK]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 3;
        this.hp = 200;
        this.atk = 16;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.DISCHARGE;
        this.attackSprite = types_1.AttackSprite.ROCK_MELEE;
        this.regional = true;
    }
    isInRegion(map, state) {
        var _a;
        const regionSynergies = (_a = Dungeon_1.DungeonDetails[map]) === null || _a === void 0 ? void 0 : _a.synergies;
        return regionSynergies.includes(Synergy_1.Synergy.ELECTRIC);
    }
}
exports.AlolanGolem = AlolanGolem;
class Popplio extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WATER, Synergy_1.Synergy.FAIRY, Synergy_1.Synergy.SOUND]);
        this.rarity = Game_1.Rarity.HATCH;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.BRIONNE;
        this.evolutionRule = new evolution_rules_1.HatchEvolutionRule(Config_1.EvolutionTime.EVOLVE_HATCH);
        this.hp = 65;
        this.atk = 5;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 70;
        this.range = 3;
        this.skill = Ability_1.Ability.SPARKLING_ARIA;
        this.passive = Passive_1.Passive.HATCH;
        this.attackSprite = types_1.AttackSprite.PSYCHIC_RANGE;
    }
}
exports.Popplio = Popplio;
class Brionne extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WATER, Synergy_1.Synergy.FAIRY, Synergy_1.Synergy.SOUND]);
        this.rarity = Game_1.Rarity.HATCH;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.PRIMARINA;
        this.evolutionRule = new evolution_rules_1.HatchEvolutionRule(Config_1.EvolutionTime.EVOLVE_HATCH);
        this.hp = 130;
        this.atk = 10;
        this.def = 2;
        this.speDef = 3;
        this.maxPP = 70;
        this.range = 3;
        this.skill = Ability_1.Ability.SPARKLING_ARIA;
        this.passive = Passive_1.Passive.HATCH;
        this.attackSprite = types_1.AttackSprite.PSYCHIC_RANGE;
    }
}
exports.Brionne = Brionne;
class Primarina extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WATER, Synergy_1.Synergy.FAIRY, Synergy_1.Synergy.SOUND]);
        this.rarity = Game_1.Rarity.HATCH;
        this.stars = 3;
        this.hp = 190;
        this.atk = 20;
        this.def = 2;
        this.speDef = 4;
        this.maxPP = 70;
        this.range = 3;
        this.skill = Ability_1.Ability.SPARKLING_ARIA;
        this.attackSprite = types_1.AttackSprite.PSYCHIC_RANGE;
    }
}
exports.Primarina = Primarina;
class Gothita extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.PSYCHIC, Synergy_1.Synergy.HUMAN]);
        this.rarity = Game_1.Rarity.HATCH;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.GOTHORITA;
        this.evolutionRule = new evolution_rules_1.HatchEvolutionRule(Config_1.EvolutionTime.EVOLVE_HATCH);
        this.hp = 70;
        this.atk = 5;
        this.def = 1;
        this.speDef = 2;
        this.maxPP = 80;
        this.range = 3;
        this.skill = Ability_1.Ability.FAKE_TEARS;
        this.passive = Passive_1.Passive.HATCH;
        this.attackSprite = types_1.AttackSprite.PSYCHIC_RANGE;
    }
}
exports.Gothita = Gothita;
class Gothorita extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.PSYCHIC, Synergy_1.Synergy.HUMAN]);
        this.rarity = Game_1.Rarity.HATCH;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.GOTHITELLE;
        this.evolutionRule = new evolution_rules_1.HatchEvolutionRule(Config_1.EvolutionTime.EVOLVE_HATCH);
        this.hp = 120;
        this.atk = 12;
        this.def = 1;
        this.speDef = 3;
        this.maxPP = 80;
        this.range = 3;
        this.skill = Ability_1.Ability.FAKE_TEARS;
        this.passive = Passive_1.Passive.HATCH;
        this.attackSprite = types_1.AttackSprite.PSYCHIC_RANGE;
    }
}
exports.Gothorita = Gothorita;
class Gothitelle extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.PSYCHIC, Synergy_1.Synergy.HUMAN]);
        this.rarity = Game_1.Rarity.HATCH;
        this.stars = 3;
        this.hp = 190;
        this.atk = 20;
        this.def = 1;
        this.speDef = 4;
        this.maxPP = 80;
        this.range = 3;
        this.skill = Ability_1.Ability.FAKE_TEARS;
        this.attackSprite = types_1.AttackSprite.PSYCHIC_RANGE;
    }
}
exports.Gothitelle = Gothitelle;
class Sandshrew extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GROUND, Synergy_1.Synergy.NORMAL]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.SANDSLASH;
        this.hp = 90;
        this.atk = 5;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.ROLLOUT;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.NORMAL_MELEE;
    }
}
exports.Sandshrew = Sandshrew;
class Sandslash extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GROUND, Synergy_1.Synergy.NORMAL]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.hp = 180;
        this.atk = 13;
        this.def = 5;
        this.speDef = 5;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.ROLLOUT;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.NORMAL_MELEE;
    }
}
exports.Sandslash = Sandslash;
class Nosepass extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.ROCK, Synergy_1.Synergy.ARTIFICIAL]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.PROBOPASS;
        this.hp = 70;
        this.atk = 5;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.MAGNET_RISE;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.ROCK_RANGE;
    }
}
exports.Nosepass = Nosepass;
class Probopass extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.ROCK, Synergy_1.Synergy.ARTIFICIAL]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.hp = 140;
        this.atk = 10;
        this.def = 8;
        this.speDef = 8;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.MAGNET_RISE;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.ROCK_RANGE;
    }
}
exports.Probopass = Probopass;
class Woobat extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.FLYING,
            Synergy_1.Synergy.SOUND,
            Synergy_1.Synergy.PSYCHIC
        ]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.SWOOBAT;
        this.hp = 60;
        this.atk = 5;
        this.def = 1;
        this.speDef = 1;
        this.maxPP = 80;
        this.range = 3;
        this.skill = Ability_1.Ability.ATTRACT;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.SOUND_RANGE;
    }
}
exports.Woobat = Woobat;
class Swoobat extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.FLYING,
            Synergy_1.Synergy.SOUND,
            Synergy_1.Synergy.PSYCHIC
        ]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.hp = 130;
        this.atk = 12;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 80;
        this.range = 3;
        this.skill = Ability_1.Ability.ATTRACT;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.SOUND_RANGE;
    }
}
exports.Swoobat = Swoobat;
class Pineco extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.BUG, Synergy_1.Synergy.STEEL]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.FORRETRESS;
        this.hp = 75;
        this.atk = 5;
        this.def = 5;
        this.speDef = 3;
        this.maxPP = 120;
        this.range = 1;
        this.skill = Ability_1.Ability.EXPLOSION;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.BUG_MELEE;
    }
}
exports.Pineco = Pineco;
class Forretress extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.BUG, Synergy_1.Synergy.STEEL]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.hp = 200;
        this.atk = 8;
        this.def = 7;
        this.speDef = 3;
        this.maxPP = 120;
        this.range = 1;
        this.skill = Ability_1.Ability.EXPLOSION;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.BUG_MELEE;
    }
}
exports.Forretress = Forretress;
class UnownA extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.PSYCHIC]);
        this.rarity = Game_1.Rarity.SPECIAL;
        this.stars = 1;
        this.hp = 100;
        this.atk = 1;
        this.def = 1;
        this.speDef = 1;
        this.maxPP = 90;
        this.range = 9;
        this.skill = Ability_1.Ability.HIDDEN_POWER_A;
        this.passive = Passive_1.Passive.UNOWN;
        this.attackSprite = types_1.AttackSprite.PSYCHIC_RANGE;
        this.canHoldItems = false;
    }
}
exports.UnownA = UnownA;
class UnownB extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.PSYCHIC]);
        this.rarity = Game_1.Rarity.SPECIAL;
        this.stars = 1;
        this.hp = 100;
        this.atk = 1;
        this.def = 1;
        this.speDef = 1;
        this.maxPP = 60;
        this.range = 9;
        this.skill = Ability_1.Ability.HIDDEN_POWER_B;
        this.passive = Passive_1.Passive.UNOWN;
        this.attackSprite = types_1.AttackSprite.PSYCHIC_RANGE;
        this.canHoldItems = false;
    }
}
exports.UnownB = UnownB;
class UnownC extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.PSYCHIC]);
        this.rarity = Game_1.Rarity.SPECIAL;
        this.stars = 1;
        this.hp = 100;
        this.atk = 1;
        this.def = 1;
        this.speDef = 1;
        this.maxPP = 60;
        this.range = 9;
        this.skill = Ability_1.Ability.HIDDEN_POWER_C;
        this.passive = Passive_1.Passive.UNOWN;
        this.attackSprite = types_1.AttackSprite.PSYCHIC_RANGE;
        this.canHoldItems = false;
    }
}
exports.UnownC = UnownC;
class UnownD extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.PSYCHIC]);
        this.rarity = Game_1.Rarity.SPECIAL;
        this.stars = 1;
        this.hp = 100;
        this.atk = 1;
        this.def = 1;
        this.speDef = 1;
        this.maxPP = 100;
        this.range = 9;
        this.skill = Ability_1.Ability.HIDDEN_POWER_D;
        this.passive = Passive_1.Passive.UNOWN;
        this.attackSprite = types_1.AttackSprite.PSYCHIC_RANGE;
        this.canHoldItems = false;
    }
}
exports.UnownD = UnownD;
class UnownE extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.PSYCHIC]);
        this.rarity = Game_1.Rarity.SPECIAL;
        this.stars = 1;
        this.hp = 100;
        this.atk = 1;
        this.def = 1;
        this.speDef = 1;
        this.maxPP = 100;
        this.range = 9;
        this.skill = Ability_1.Ability.HIDDEN_POWER_E;
        this.passive = Passive_1.Passive.UNOWN;
        this.attackSprite = types_1.AttackSprite.PSYCHIC_RANGE;
        this.canHoldItems = false;
    }
}
exports.UnownE = UnownE;
class UnownF extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.PSYCHIC]);
        this.rarity = Game_1.Rarity.SPECIAL;
        this.stars = 1;
        this.hp = 100;
        this.atk = 1;
        this.def = 1;
        this.speDef = 1;
        this.maxPP = 100;
        this.range = 9;
        this.skill = Ability_1.Ability.HIDDEN_POWER_F;
        this.passive = Passive_1.Passive.UNOWN;
        this.attackSprite = types_1.AttackSprite.PSYCHIC_RANGE;
        this.canHoldItems = false;
    }
}
exports.UnownF = UnownF;
class UnownG extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.PSYCHIC]);
        this.rarity = Game_1.Rarity.SPECIAL;
        this.stars = 1;
        this.hp = 100;
        this.atk = 1;
        this.def = 1;
        this.speDef = 1;
        this.maxPP = 100;
        this.range = 9;
        this.skill = Ability_1.Ability.HIDDEN_POWER_G;
        this.passive = Passive_1.Passive.UNOWN;
        this.attackSprite = types_1.AttackSprite.PSYCHIC_RANGE;
        this.canHoldItems = false;
    }
}
exports.UnownG = UnownG;
class UnownH extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.PSYCHIC]);
        this.rarity = Game_1.Rarity.SPECIAL;
        this.stars = 1;
        this.hp = 100;
        this.atk = 1;
        this.def = 1;
        this.speDef = 1;
        this.maxPP = 80;
        this.range = 9;
        this.skill = Ability_1.Ability.HIDDEN_POWER_H;
        this.passive = Passive_1.Passive.UNOWN;
        this.attackSprite = types_1.AttackSprite.PSYCHIC_RANGE;
        this.canHoldItems = false;
    }
}
exports.UnownH = UnownH;
class UnownI extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.PSYCHIC]);
        this.rarity = Game_1.Rarity.SPECIAL;
        this.stars = 1;
        this.hp = 100;
        this.atk = 1;
        this.def = 1;
        this.speDef = 1;
        this.maxPP = 100;
        this.range = 9;
        this.skill = Ability_1.Ability.HIDDEN_POWER_I;
        this.passive = Passive_1.Passive.UNOWN;
        this.attackSprite = types_1.AttackSprite.PSYCHIC_RANGE;
        this.canHoldItems = false;
    }
}
exports.UnownI = UnownI;
class UnownJ extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.PSYCHIC]);
        this.rarity = Game_1.Rarity.SPECIAL;
        this.stars = 1;
        this.hp = 100;
        this.atk = 1;
        this.def = 1;
        this.speDef = 1;
        this.maxPP = 90;
        this.range = 9;
        this.skill = Ability_1.Ability.HIDDEN_POWER_J;
        this.passive = Passive_1.Passive.UNOWN;
        this.attackSprite = types_1.AttackSprite.PSYCHIC_RANGE;
        this.canHoldItems = false;
    }
}
exports.UnownJ = UnownJ;
class UnownK extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.PSYCHIC]);
        this.rarity = Game_1.Rarity.SPECIAL;
        this.stars = 1;
        this.hp = 100;
        this.atk = 1;
        this.def = 1;
        this.speDef = 1;
        this.maxPP = 90;
        this.range = 9;
        this.skill = Ability_1.Ability.HIDDEN_POWER_K;
        this.passive = Passive_1.Passive.UNOWN;
        this.attackSprite = types_1.AttackSprite.PSYCHIC_RANGE;
        this.canHoldItems = false;
    }
}
exports.UnownK = UnownK;
class UnownL extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.PSYCHIC]);
        this.rarity = Game_1.Rarity.SPECIAL;
        this.stars = 1;
        this.hp = 100;
        this.atk = 1;
        this.def = 1;
        this.speDef = 1;
        this.maxPP = 60;
        this.range = 9;
        this.skill = Ability_1.Ability.HIDDEN_POWER_L;
        this.passive = Passive_1.Passive.UNOWN;
        this.attackSprite = types_1.AttackSprite.PSYCHIC_RANGE;
        this.canHoldItems = false;
    }
}
exports.UnownL = UnownL;
class UnownM extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.PSYCHIC]);
        this.rarity = Game_1.Rarity.SPECIAL;
        this.stars = 1;
        this.hp = 100;
        this.atk = 1;
        this.def = 1;
        this.speDef = 1;
        this.maxPP = 50;
        this.range = 9;
        this.skill = Ability_1.Ability.HIDDEN_POWER_M;
        this.passive = Passive_1.Passive.UNOWN;
        this.attackSprite = types_1.AttackSprite.PSYCHIC_RANGE;
        this.canHoldItems = false;
    }
}
exports.UnownM = UnownM;
class UnownN extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.PSYCHIC]);
        this.rarity = Game_1.Rarity.SPECIAL;
        this.stars = 1;
        this.hp = 100;
        this.atk = 1;
        this.def = 1;
        this.speDef = 1;
        this.maxPP = 100;
        this.range = 9;
        this.skill = Ability_1.Ability.HIDDEN_POWER_N;
        this.passive = Passive_1.Passive.UNOWN;
        this.attackSprite = types_1.AttackSprite.PSYCHIC_RANGE;
        this.canHoldItems = false;
    }
}
exports.UnownN = UnownN;
class UnownO extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.PSYCHIC]);
        this.rarity = Game_1.Rarity.SPECIAL;
        this.stars = 1;
        this.hp = 100;
        this.atk = 1;
        this.def = 1;
        this.speDef = 1;
        this.maxPP = 50;
        this.range = 9;
        this.skill = Ability_1.Ability.HIDDEN_POWER_O;
        this.passive = Passive_1.Passive.UNOWN;
        this.attackSprite = types_1.AttackSprite.PSYCHIC_RANGE;
        this.canHoldItems = false;
    }
}
exports.UnownO = UnownO;
class UnownP extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.PSYCHIC]);
        this.rarity = Game_1.Rarity.SPECIAL;
        this.stars = 1;
        this.hp = 100;
        this.atk = 1;
        this.def = 1;
        this.speDef = 1;
        this.maxPP = 100;
        this.range = 9;
        this.skill = Ability_1.Ability.HIDDEN_POWER_P;
        this.passive = Passive_1.Passive.UNOWN;
        this.attackSprite = types_1.AttackSprite.PSYCHIC_RANGE;
        this.canHoldItems = false;
    }
}
exports.UnownP = UnownP;
class UnownQ extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.PSYCHIC]);
        this.rarity = Game_1.Rarity.SPECIAL;
        this.stars = 1;
        this.hp = 100;
        this.atk = 1;
        this.def = 1;
        this.speDef = 1;
        this.maxPP = 200;
        this.range = 9;
        this.skill = Ability_1.Ability.HIDDEN_POWER_Q;
        this.passive = Passive_1.Passive.UNOWN;
        this.attackSprite = types_1.AttackSprite.PSYCHIC_RANGE;
        this.canHoldItems = false;
    }
}
exports.UnownQ = UnownQ;
class UnownR extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.PSYCHIC]);
        this.rarity = Game_1.Rarity.SPECIAL;
        this.stars = 1;
        this.hp = 100;
        this.atk = 1;
        this.def = 1;
        this.speDef = 1;
        this.maxPP = 90;
        this.range = 9;
        this.skill = Ability_1.Ability.HIDDEN_POWER_R;
        this.passive = Passive_1.Passive.UNOWN;
        this.attackSprite = types_1.AttackSprite.PSYCHIC_RANGE;
        this.canHoldItems = false;
    }
}
exports.UnownR = UnownR;
class UnownS extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.PSYCHIC]);
        this.rarity = Game_1.Rarity.SPECIAL;
        this.stars = 1;
        this.hp = 100;
        this.atk = 1;
        this.def = 1;
        this.speDef = 1;
        this.maxPP = 100;
        this.range = 9;
        this.skill = Ability_1.Ability.HIDDEN_POWER_S;
        this.passive = Passive_1.Passive.UNOWN;
        this.attackSprite = types_1.AttackSprite.PSYCHIC_RANGE;
        this.canHoldItems = false;
    }
}
exports.UnownS = UnownS;
class UnownT extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.PSYCHIC]);
        this.rarity = Game_1.Rarity.SPECIAL;
        this.stars = 1;
        this.hp = 100;
        this.atk = 1;
        this.def = 1;
        this.speDef = 1;
        this.maxPP = 80;
        this.range = 9;
        this.skill = Ability_1.Ability.HIDDEN_POWER_T;
        this.passive = Passive_1.Passive.UNOWN;
        this.attackSprite = types_1.AttackSprite.PSYCHIC_RANGE;
        this.canHoldItems = false;
    }
}
exports.UnownT = UnownT;
class UnownU extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.PSYCHIC]);
        this.rarity = Game_1.Rarity.SPECIAL;
        this.stars = 1;
        this.hp = 100;
        this.atk = 1;
        this.def = 1;
        this.speDef = 1;
        this.maxPP = 80;
        this.range = 9;
        this.skill = Ability_1.Ability.HIDDEN_POWER_U;
        this.passive = Passive_1.Passive.UNOWN;
        this.attackSprite = types_1.AttackSprite.PSYCHIC_RANGE;
        this.canHoldItems = false;
    }
}
exports.UnownU = UnownU;
class UnownV extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.PSYCHIC]);
        this.rarity = Game_1.Rarity.SPECIAL;
        this.stars = 1;
        this.hp = 100;
        this.atk = 1;
        this.def = 1;
        this.speDef = 1;
        this.maxPP = 90;
        this.range = 9;
        this.skill = Ability_1.Ability.HIDDEN_POWER_V;
        this.passive = Passive_1.Passive.UNOWN;
        this.attackSprite = types_1.AttackSprite.PSYCHIC_RANGE;
        this.canHoldItems = false;
    }
}
exports.UnownV = UnownV;
class UnownW extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.PSYCHIC]);
        this.rarity = Game_1.Rarity.SPECIAL;
        this.stars = 1;
        this.hp = 100;
        this.atk = 1;
        this.def = 1;
        this.speDef = 1;
        this.maxPP = 100;
        this.range = 9;
        this.skill = Ability_1.Ability.HIDDEN_POWER_W;
        this.passive = Passive_1.Passive.UNOWN;
        this.attackSprite = types_1.AttackSprite.PSYCHIC_RANGE;
        this.canHoldItems = false;
    }
}
exports.UnownW = UnownW;
class UnownX extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.PSYCHIC]);
        this.rarity = Game_1.Rarity.SPECIAL;
        this.stars = 1;
        this.hp = 100;
        this.atk = 1;
        this.def = 1;
        this.speDef = 1;
        this.maxPP = 60;
        this.range = 9;
        this.skill = Ability_1.Ability.HIDDEN_POWER_X;
        this.passive = Passive_1.Passive.UNOWN;
        this.attackSprite = types_1.AttackSprite.PSYCHIC_RANGE;
        this.canHoldItems = false;
    }
}
exports.UnownX = UnownX;
class UnownY extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.PSYCHIC]);
        this.rarity = Game_1.Rarity.SPECIAL;
        this.stars = 1;
        this.hp = 100;
        this.atk = 1;
        this.def = 1;
        this.speDef = 1;
        this.maxPP = 50;
        this.range = 9;
        this.skill = Ability_1.Ability.HIDDEN_POWER_Y;
        this.passive = Passive_1.Passive.UNOWN;
        this.attackSprite = types_1.AttackSprite.PSYCHIC_RANGE;
        this.canHoldItems = false;
    }
}
exports.UnownY = UnownY;
class UnownZ extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.PSYCHIC]);
        this.rarity = Game_1.Rarity.SPECIAL;
        this.stars = 1;
        this.hp = 100;
        this.atk = 1;
        this.def = 1;
        this.speDef = 1;
        this.maxPP = 90;
        this.range = 9;
        this.skill = Ability_1.Ability.HIDDEN_POWER_Z;
        this.passive = Passive_1.Passive.UNOWN;
        this.attackSprite = types_1.AttackSprite.PSYCHIC_RANGE;
        this.canHoldItems = false;
    }
}
exports.UnownZ = UnownZ;
class UnownQuestion extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.PSYCHIC]);
        this.rarity = Game_1.Rarity.SPECIAL;
        this.stars = 1;
        this.hp = 100;
        this.atk = 1;
        this.def = 1;
        this.speDef = 1;
        this.maxPP = 100;
        this.range = 9;
        this.skill = Ability_1.Ability.HIDDEN_POWER_QM;
        this.passive = Passive_1.Passive.UNOWN;
        this.attackSprite = types_1.AttackSprite.PSYCHIC_RANGE;
        this.canHoldItems = false;
    }
}
exports.UnownQuestion = UnownQuestion;
class UnownExclamation extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.PSYCHIC]);
        this.rarity = Game_1.Rarity.SPECIAL;
        this.stars = 1;
        this.hp = 100;
        this.atk = 1;
        this.def = 1;
        this.speDef = 1;
        this.maxPP = 60;
        this.range = 9;
        this.skill = Ability_1.Ability.HIDDEN_POWER_EM;
        this.passive = Passive_1.Passive.UNOWN;
        this.attackSprite = types_1.AttackSprite.PSYCHIC_RANGE;
        this.canHoldItems = false;
    }
}
exports.UnownExclamation = UnownExclamation;
class Diglett extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GROUND, Synergy_1.Synergy.NORMAL]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.DUGTRIO;
        this.hp = 75;
        this.atk = 6;
        this.def = 3;
        this.speDef = 2;
        this.maxPP = 50;
        this.range = 1;
        this.skill = Ability_1.Ability.DIG;
        this.attackSprite = types_1.AttackSprite.ROCK_MELEE;
        this.additional = true;
    }
}
exports.Diglett = Diglett;
class Dugtrio extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GROUND, Synergy_1.Synergy.NORMAL]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.hp = 160;
        this.atk = 14;
        this.def = 5;
        this.speDef = 4;
        this.maxPP = 50;
        this.range = 1;
        this.skill = Ability_1.Ability.DIG;
        this.attackSprite = types_1.AttackSprite.ROCK_MELEE;
        this.additional = true;
    }
}
exports.Dugtrio = Dugtrio;
class AlolanDiglett extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GROUND, Synergy_1.Synergy.STEEL]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.ALOLAN_DUGTRIO;
        this.hp = 70;
        this.atk = 8;
        this.def = 2;
        this.speDef = 1;
        this.maxPP = 50;
        this.range = 1;
        this.skill = Ability_1.Ability.DIG;
        this.attackSprite = types_1.AttackSprite.ROCK_MELEE;
        this.regional = true;
    }
    isInRegion(map, state) {
        var _a;
        const regionSynergies = (_a = Dungeon_1.DungeonDetails[map]) === null || _a === void 0 ? void 0 : _a.synergies;
        return ((!state || state.additionalPokemons.includes(Pokemon_1.Pkm.DIGLETT)) &&
            regionSynergies.includes(Synergy_1.Synergy.STEEL));
    }
}
exports.AlolanDiglett = AlolanDiglett;
class AlolanDugtrio extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GROUND, Synergy_1.Synergy.STEEL]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.hp = 150;
        this.atk = 18;
        this.def = 3;
        this.speDef = 2;
        this.maxPP = 50;
        this.range = 1;
        this.skill = Ability_1.Ability.DIG;
        this.attackSprite = types_1.AttackSprite.ROCK_MELEE;
        this.regional = true;
    }
    isInRegion(map, state) {
        var _a;
        const regionSynergies = (_a = Dungeon_1.DungeonDetails[map]) === null || _a === void 0 ? void 0 : _a.synergies;
        return ((!state || state.additionalPokemons.includes(Pokemon_1.Pkm.DIGLETT)) &&
            regionSynergies.includes(Synergy_1.Synergy.STEEL));
    }
}
exports.AlolanDugtrio = AlolanDugtrio;
class Rowlet extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GRASS, Synergy_1.Synergy.FLYING, Synergy_1.Synergy.GHOST]);
        this.rarity = Game_1.Rarity.HATCH;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.DARTIX;
        this.evolutionRule = new evolution_rules_1.HatchEvolutionRule(Config_1.EvolutionTime.EVOLVE_HATCH);
        this.hp = 70;
        this.atk = 5;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 3;
        this.skill = Ability_1.Ability.SPIRIT_SHACKLE;
        this.passive = Passive_1.Passive.HATCH;
        this.attackSprite = types_1.AttackSprite.GRASS_MELEE;
    }
}
exports.Rowlet = Rowlet;
class Dartix extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GRASS, Synergy_1.Synergy.FLYING, Synergy_1.Synergy.GHOST]);
        this.rarity = Game_1.Rarity.HATCH;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.DECIDUEYE;
        this.evolutionRule = new evolution_rules_1.HatchEvolutionRule(Config_1.EvolutionTime.EVOLVE_HATCH);
        this.hp = 130;
        this.atk = 9;
        this.def = 2;
        this.speDef = 3;
        this.maxPP = 100;
        this.range = 3;
        this.skill = Ability_1.Ability.SPIRIT_SHACKLE;
        this.passive = Passive_1.Passive.HATCH;
        this.attackSprite = types_1.AttackSprite.GRASS_MELEE;
    }
}
exports.Dartix = Dartix;
class Decidueye extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GRASS, Synergy_1.Synergy.FLYING, Synergy_1.Synergy.GHOST]);
        this.rarity = Game_1.Rarity.HATCH;
        this.stars = 3;
        this.hp = 190;
        this.atk = 18;
        this.def = 2;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 3;
        this.skill = Ability_1.Ability.SPIRIT_SHACKLE;
        this.attackSprite = types_1.AttackSprite.GRASS_MELEE;
    }
}
exports.Decidueye = Decidueye;
class Zorua extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DARK, Synergy_1.Synergy.FIELD]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.ZOROARK;
        this.hp = 70;
        this.atk = 8;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 85;
        this.range = 1;
        this.skill = Ability_1.Ability.ILLUSION;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.DARK_MELEE;
    }
}
exports.Zorua = Zorua;
class Zoroark extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DARK, Synergy_1.Synergy.FIELD]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.hp = 140;
        this.atk = 18;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 85;
        this.range = 1;
        this.skill = Ability_1.Ability.ILLUSION;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.NORMAL_MELEE;
    }
}
exports.Zoroark = Zoroark;
class HisuiZorua extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.NORMAL, Synergy_1.Synergy.GHOST]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.HISUI_ZOROARK;
        this.hp = 70;
        this.atk = 8;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 85;
        this.range = 1;
        this.skill = Ability_1.Ability.ILLUSION;
        this.attackSprite = types_1.AttackSprite.NORMAL_MELEE;
        this.regional = true;
    }
    isInRegion(map, state) {
        var _a;
        const regionSynergies = (_a = Dungeon_1.DungeonDetails[map]) === null || _a === void 0 ? void 0 : _a.synergies;
        return ((!state || state.additionalPokemons.includes(Pokemon_1.Pkm.ZORUA)) &&
            (regionSynergies.includes(Synergy_1.Synergy.NORMAL) ||
                regionSynergies.includes(Synergy_1.Synergy.GHOST)));
    }
}
exports.HisuiZorua = HisuiZorua;
class HisuiZoroark extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.NORMAL, Synergy_1.Synergy.GHOST]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.hp = 140;
        this.atk = 18;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 85;
        this.range = 1;
        this.skill = Ability_1.Ability.ILLUSION;
        this.attackSprite = types_1.AttackSprite.NORMAL_MELEE;
        this.regional = true;
    }
    isInRegion(map, state) {
        var _a;
        const regionSynergies = (_a = Dungeon_1.DungeonDetails[map]) === null || _a === void 0 ? void 0 : _a.synergies;
        return ((!state || state.additionalPokemons.includes(Pokemon_1.Pkm.ZORUA)) &&
            (regionSynergies.includes(Synergy_1.Synergy.NORMAL) ||
                regionSynergies.includes(Synergy_1.Synergy.GHOST)));
    }
}
exports.HisuiZoroark = HisuiZoroark;
class Grimer extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.POISON,
            Synergy_1.Synergy.MONSTER,
            Synergy_1.Synergy.AMORPHOUS
        ]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.MUK;
        this.hp = 80;
        this.atk = 4;
        this.def = 3;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.SLUDGE;
        this.attackSprite = types_1.AttackSprite.POISON_MELEE;
        this.additional = true;
    }
}
exports.Grimer = Grimer;
class Muk extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.POISON,
            Synergy_1.Synergy.MONSTER,
            Synergy_1.Synergy.AMORPHOUS
        ]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.hp = 170;
        this.atk = 9;
        this.def = 6;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.SLUDGE;
        this.attackSprite = types_1.AttackSprite.POISON_MELEE;
        this.additional = true;
    }
}
exports.Muk = Muk;
class AlolanGrimer extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.POISON,
            Synergy_1.Synergy.DARK,
            Synergy_1.Synergy.AMORPHOUS
        ]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.ALOLAN_MUK;
        this.hp = 70;
        this.atk = 6;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.SLUDGE;
        this.attackSprite = types_1.AttackSprite.POISON_MELEE;
        this.regional = true;
    }
    isInRegion(map, state) {
        var _a;
        const regionSynergies = (_a = Dungeon_1.DungeonDetails[map]) === null || _a === void 0 ? void 0 : _a.synergies;
        return ((!state || state.additionalPokemons.includes(Pokemon_1.Pkm.GRIMER)) &&
            regionSynergies.includes(Synergy_1.Synergy.DARK));
    }
}
exports.AlolanGrimer = AlolanGrimer;
class AlolanMuk extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.POISON,
            Synergy_1.Synergy.DARK,
            Synergy_1.Synergy.AMORPHOUS
        ]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.hp = 150;
        this.atk = 13;
        this.def = 6;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.SLUDGE;
        this.attackSprite = types_1.AttackSprite.POISON_MELEE;
        this.regional = true;
    }
    isInRegion(map, state) {
        var _a;
        const regionSynergies = (_a = Dungeon_1.DungeonDetails[map]) === null || _a === void 0 ? void 0 : _a.synergies;
        return ((!state || state.additionalPokemons.includes(Pokemon_1.Pkm.GRIMER)) &&
            regionSynergies.includes(Synergy_1.Synergy.DARK));
    }
}
exports.AlolanMuk = AlolanMuk;
class Ekans extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.POISON, Synergy_1.Synergy.DARK]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.ARBOK;
        this.hp = 60;
        this.atk = 8;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 90;
        this.range = 1;
        this.skill = Ability_1.Ability.VENOSHOCK;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.POISON_MELEE;
    }
}
exports.Ekans = Ekans;
class Arbok extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.POISON, Synergy_1.Synergy.DARK]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.hp = 130;
        this.atk = 18;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 90;
        this.range = 1;
        this.skill = Ability_1.Ability.VENOSHOCK;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.POISON_MELEE;
    }
}
exports.Arbok = Arbok;
class Carvanha extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WATER, Synergy_1.Synergy.DARK]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.SHARPEDO;
        this.hp = 85;
        this.atk = 12;
        this.def = 1;
        this.speDef = 2;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.BITE;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.NORMAL_MELEE;
    }
}
exports.Carvanha = Carvanha;
class Sharpedo extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WATER, Synergy_1.Synergy.DARK]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.hp = 170;
        this.atk = 28;
        this.def = 2;
        this.speDef = 3;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.BITE;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.NORMAL_MELEE;
    }
}
exports.Sharpedo = Sharpedo;
class Froakie extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WATER, Synergy_1.Synergy.AQUATIC, Synergy_1.Synergy.DARK]);
        this.rarity = Game_1.Rarity.HATCH;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.FROGADIER;
        this.evolutionRule = new evolution_rules_1.HatchEvolutionRule(Config_1.EvolutionTime.EVOLVE_HATCH);
        this.hp = 80;
        this.atk = 7;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.WATER_SHURIKEN;
        this.passive = Passive_1.Passive.HATCH;
        this.attackSprite = types_1.AttackSprite.WATER_MELEE;
    }
}
exports.Froakie = Froakie;
class Frogadier extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WATER, Synergy_1.Synergy.AQUATIC, Synergy_1.Synergy.DARK]);
        this.rarity = Game_1.Rarity.HATCH;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.GRENINJA;
        this.evolutionRule = new evolution_rules_1.HatchEvolutionRule(Config_1.EvolutionTime.EVOLVE_HATCH);
        this.hp = 140;
        this.atk = 14;
        this.def = 3;
        this.speDef = 4;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.WATER_SHURIKEN;
        this.passive = Passive_1.Passive.HATCH;
        this.attackSprite = types_1.AttackSprite.WATER_RANGE;
    }
}
exports.Frogadier = Frogadier;
class Greninja extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WATER, Synergy_1.Synergy.AQUATIC, Synergy_1.Synergy.DARK]);
        this.rarity = Game_1.Rarity.HATCH;
        this.stars = 3;
        this.hp = 200;
        this.atk = 23;
        this.def = 4;
        this.speDef = 6;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.WATER_SHURIKEN;
        this.attackSprite = types_1.AttackSprite.WATER_RANGE;
    }
}
exports.Greninja = Greninja;
class Chingling extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.SOUND, Synergy_1.Synergy.PSYCHIC, Synergy_1.Synergy.BABY]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.CHIMECHO;
        this.evolutionRule = new evolution_rules_1.ItemEvolutionRule([Item_1.Item.STAR_DUST]);
        this.hp = 150;
        this.atk = 10;
        this.def = 2;
        this.speDef = 4;
        this.maxPP = 80;
        this.range = 3;
        this.skill = Ability_1.Ability.ECHO;
        this.passive = Passive_1.Passive.CHINGLING;
        this.attackSprite = types_1.AttackSprite.PSYCHIC_RANGE;
    }
}
exports.Chingling = Chingling;
class Chimecho extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.SOUND, Synergy_1.Synergy.PSYCHIC]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 200;
        this.atk = 15;
        this.def = 3;
        this.speDef = 6;
        this.maxPP = 80;
        this.range = 3;
        this.skill = Ability_1.Ability.ECHO;
        this.passive = Passive_1.Passive.CHIMECHO;
        this.attackSprite = types_1.AttackSprite.PSYCHIC_RANGE;
    }
}
exports.Chimecho = Chimecho;
class Tyrogue extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FIGHTING, Synergy_1.Synergy.BABY]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.HITMONTOP;
        this.hp = 150;
        this.atk = 10;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.MACH_PUNCH;
        this.passive = Passive_1.Passive.TYROGUE;
        this.attackSprite = types_1.AttackSprite.FIGHTING_MELEE;
        this.evolutionRule = new evolution_rules_1.ItemEvolutionRule(Item_1.AllItems, (pokemon, player, item_) => {
            const item = item_;
            if (item === Item_1.Item.CHARCOAL ||
                item === Item_1.Item.MAGNET ||
                (item in Item_1.ItemRecipe && Item_1.ItemRecipe[item].includes(Item_1.Item.CHARCOAL)) ||
                (item in Item_1.ItemRecipe && Item_1.ItemRecipe[item].includes(Item_1.Item.MAGNET))) {
                return Pokemon_1.Pkm.HITMONLEE;
            }
            if (item === Item_1.Item.HEART_SCALE ||
                item === Item_1.Item.NEVER_MELT_ICE ||
                (item in Item_1.ItemRecipe && Item_1.ItemRecipe[item].includes(Item_1.Item.HEART_SCALE)) ||
                (item in Item_1.ItemRecipe && Item_1.ItemRecipe[item].includes(Item_1.Item.NEVER_MELT_ICE))) {
                return Pokemon_1.Pkm.HITMONCHAN;
            }
            return Pokemon_1.Pkm.HITMONTOP;
        });
    }
}
exports.Tyrogue = Tyrogue;
class Hitmontop extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FIGHTING, Synergy_1.Synergy.HUMAN]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 200;
        this.atk = 20;
        this.def = 5;
        this.speDef = 5;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.TRIPLE_KICK;
        this.attackSprite = types_1.AttackSprite.FIGHTING_MELEE;
    }
}
exports.Hitmontop = Hitmontop;
class Hitmonlee extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FIGHTING, Synergy_1.Synergy.HUMAN]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 200;
        this.atk = 30;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.MAWASHI_GERI;
        this.attackSprite = types_1.AttackSprite.FIGHTING_MELEE;
    }
}
exports.Hitmonlee = Hitmonlee;
class Hitmonchan extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FIGHTING, Synergy_1.Synergy.HUMAN]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 200;
        this.atk = 20;
        this.def = 7;
        this.speDef = 7;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.UPPERCUT;
        this.attackSprite = types_1.AttackSprite.FIGHTING_MELEE;
    }
}
exports.Hitmonchan = Hitmonchan;
class Mimikyu extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.GHOST,
            Synergy_1.Synergy.FAIRY,
            Synergy_1.Synergy.AMORPHOUS
        ]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 180;
        this.atk = 15;
        this.def = 5;
        this.speDef = 6;
        this.maxPP = 40;
        this.range = 1;
        this.skill = Ability_1.Ability.SHADOW_SNEAK;
        this.passive = Passive_1.Passive.MIMIKYU;
        this.attackSprite = types_1.AttackSprite.FAIRY_MELEE;
    }
}
exports.Mimikyu = Mimikyu;
class MimikyuBusted extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.GHOST,
            Synergy_1.Synergy.FAIRY,
            Synergy_1.Synergy.AMORPHOUS
        ]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 180;
        this.atk = 25;
        this.def = 5;
        this.speDef = 6;
        this.maxPP = 40;
        this.range = 1;
        this.skill = Ability_1.Ability.SHADOW_SNEAK;
        this.passive = Passive_1.Passive.MIMIKYU_BUSTED;
        this.attackSprite = types_1.AttackSprite.NORMAL_MELEE;
    }
}
exports.MimikyuBusted = MimikyuBusted;
class Bonsley extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.ROCK, Synergy_1.Synergy.FLORA, Synergy_1.Synergy.BABY]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.SUDOWOODO;
        this.hp = 125;
        this.atk = 8;
        this.def = 5;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.WOOD_HAMMER;
        this.passive = Passive_1.Passive.SUDOWOODO;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.ROCK_MELEE;
    }
    onSpawn({ entity }) {
        entity.status.tree = true;
        entity.toIdleState();
    }
}
exports.Bonsley = Bonsley;
class Sudowoodo extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.ROCK, Synergy_1.Synergy.FLORA, Synergy_1.Synergy.MONSTER]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.hp = 250;
        this.atk = 20;
        this.def = 6;
        this.speDef = 3;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.WOOD_HAMMER;
        this.passive = Passive_1.Passive.SUDOWOODO;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.ROCK_MELEE;
    }
    onSpawn({ entity }) {
        entity.status.tree = true;
        entity.toIdleState();
    }
}
exports.Sudowoodo = Sudowoodo;
class Combee extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.BUG, Synergy_1.Synergy.FLORA]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.VESPIQUEEN;
        this.hp = 120;
        this.atk = 9;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 90;
        this.range = 1;
        this.skill = Ability_1.Ability.HEAL_ORDER;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.BUG_MELEE;
    }
}
exports.Combee = Combee;
class Vespiqueen extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.BUG, Synergy_1.Synergy.FLORA]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.hp = 280;
        this.atk = 20;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 90;
        this.range = 1;
        this.skill = Ability_1.Ability.HEAL_ORDER;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.BUG_MELEE;
    }
}
exports.Vespiqueen = Vespiqueen;
class Shuckle extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.BUG, Synergy_1.Synergy.ROCK]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 150;
        this.atk = 4;
        this.def = 20;
        this.speDef = 20;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.BIDE;
        this.passive = Passive_1.Passive.SHUCKLE;
        this.attackSprite = types_1.AttackSprite.ROCK_MELEE;
    }
}
exports.Shuckle = Shuckle;
class Tepig extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WILD, Synergy_1.Synergy.FIRE, Synergy_1.Synergy.FIGHTING]);
        this.rarity = Game_1.Rarity.HATCH;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.PIGNITE;
        this.evolutionRule = new evolution_rules_1.HatchEvolutionRule(Config_1.EvolutionTime.EVOLVE_HATCH);
        this.hp = 70;
        this.atk = 7;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.IRON_TAIL;
        this.passive = Passive_1.Passive.HATCH;
        this.attackSprite = types_1.AttackSprite.NORMAL_MELEE;
    }
}
exports.Tepig = Tepig;
class Pignite extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WILD, Synergy_1.Synergy.FIRE, Synergy_1.Synergy.FIGHTING]);
        this.rarity = Game_1.Rarity.HATCH;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.EMBOAR;
        this.evolutionRule = new evolution_rules_1.HatchEvolutionRule(Config_1.EvolutionTime.EVOLVE_HATCH);
        this.hp = 140;
        this.atk = 12;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.IRON_TAIL;
        this.passive = Passive_1.Passive.HATCH;
        this.attackSprite = types_1.AttackSprite.NORMAL_MELEE;
    }
}
exports.Pignite = Pignite;
class Emboar extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WILD, Synergy_1.Synergy.FIRE, Synergy_1.Synergy.FIGHTING]);
        this.rarity = Game_1.Rarity.HATCH;
        this.stars = 3;
        this.hp = 210;
        this.atk = 20;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.IRON_TAIL;
        this.attackSprite = types_1.AttackSprite.NORMAL_MELEE;
    }
}
exports.Emboar = Emboar;
class Wurmple extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.BUG]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.SILCOON;
        this.hp = 110;
        this.atk = 10;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.ENTANGLING_THREAD;
        this.attackSprite = types_1.AttackSprite.BUG_MELEE;
        this.evolutionRule = new evolution_rules_1.CountEvolutionRule(3, (pokemon, player) => {
            if (player.regionalPokemons.includes(Pokemon_1.Pkm.CASCOON))
                return Pokemon_1.Pkm.CASCOON;
            else
                return Pokemon_1.Pkm.SILCOON;
        });
    }
}
exports.Wurmple = Wurmple;
class Silcoon extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.BUG, Synergy_1.Synergy.NORMAL]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.BEAUTIFLY;
        this.hp = 180;
        this.atk = 20;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.SPIKE_ARMOR;
        this.attackSprite = types_1.AttackSprite.BUG_MELEE;
    }
}
exports.Silcoon = Silcoon;
class Beautifly extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.BUG, Synergy_1.Synergy.NORMAL, Synergy_1.Synergy.FLYING]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 3;
        this.hp = 250;
        this.atk = 30;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 60;
        this.range = 1;
        this.skill = Ability_1.Ability.SILVER_WIND;
        this.attackSprite = types_1.AttackSprite.BUG_MELEE;
    }
}
exports.Beautifly = Beautifly;
class Cascoon extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.BUG, Synergy_1.Synergy.POISON]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.DUSTOX;
        this.hp = 180;
        this.atk = 20;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.SPIKE_ARMOR;
        this.attackSprite = types_1.AttackSprite.BUG_MELEE;
        this.regional = true;
    }
    isInRegion(map, state) {
        var _a;
        const regionSynergies = (_a = Dungeon_1.DungeonDetails[map]) === null || _a === void 0 ? void 0 : _a.synergies;
        return regionSynergies.includes(Synergy_1.Synergy.POISON);
    }
}
exports.Cascoon = Cascoon;
class Dustox extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.BUG, Synergy_1.Synergy.POISON, Synergy_1.Synergy.FLYING]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 3;
        this.hp = 250;
        this.atk = 30;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 60;
        this.range = 1;
        this.skill = Ability_1.Ability.POISON_POWDER;
        this.attackSprite = types_1.AttackSprite.BUG_MELEE;
        this.regional = true;
    }
    isInRegion(map, state) {
        var _a;
        const regionSynergies = (_a = Dungeon_1.DungeonDetails[map]) === null || _a === void 0 ? void 0 : _a.synergies;
        return regionSynergies.includes(Synergy_1.Synergy.POISON);
    }
}
exports.Dustox = Dustox;
class Tinkatink extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.STEEL, Synergy_1.Synergy.FAIRY]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.TINKATUFF;
        this.hp = 100;
        this.atk = 11;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 120;
        this.range = 1;
        this.skill = Ability_1.Ability.GIGATON_HAMMER;
        this.attackSprite = types_1.AttackSprite.FAIRY_MELEE;
    }
}
exports.Tinkatink = Tinkatink;
class Tinkatuff extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.STEEL, Synergy_1.Synergy.FAIRY]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.TINKATON;
        this.hp = 200;
        this.atk = 22;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 120;
        this.range = 1;
        this.skill = Ability_1.Ability.GIGATON_HAMMER;
        this.attackSprite = types_1.AttackSprite.FAIRY_MELEE;
    }
}
exports.Tinkatuff = Tinkatuff;
class Tinkaton extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.STEEL, Synergy_1.Synergy.FAIRY]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 3;
        this.hp = 300;
        this.atk = 44;
        this.def = 8;
        this.speDef = 8;
        this.maxPP = 120;
        this.range = 1;
        this.skill = Ability_1.Ability.GIGATON_HAMMER;
        this.attackSprite = types_1.AttackSprite.FAIRY_MELEE;
    }
}
exports.Tinkaton = Tinkaton;
class Maractus extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GRASS, Synergy_1.Synergy.SOUND, Synergy_1.Synergy.FLORA]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 200;
        this.atk = 16;
        this.def = 6;
        this.speDef = 4;
        this.maxPP = 90;
        this.range = 1;
        this.skill = Ability_1.Ability.SPIKE_ARMOR;
        this.attackSprite = types_1.AttackSprite.GRASS_MELEE;
    }
}
exports.Maractus = Maractus;
class Plusle extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.ELECTRIC, Synergy_1.Synergy.FAIRY]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 140;
        this.atk = 13;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 60;
        this.range = 1;
        this.skill = Ability_1.Ability.LINK_CABLE;
        this.attackSprite = types_1.AttackSprite.ELECTRIC_MELEE;
    }
}
exports.Plusle = Plusle;
class Minun extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.ELECTRIC, Synergy_1.Synergy.FAIRY]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 140;
        this.atk = 13;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 60;
        this.range = 1;
        this.skill = Ability_1.Ability.LINK_CABLE;
        this.attackSprite = types_1.AttackSprite.ELECTRIC_MELEE;
    }
}
exports.Minun = Minun;
class Spectrier extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GHOST, Synergy_1.Synergy.FIELD]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 280;
        this.atk = 30;
        this.def = 5;
        this.speDef = 10;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.ASTRAL_BARRAGE;
        this.passive = Passive_1.Passive.GRIM_NEIGH;
        this.attackSprite = types_1.AttackSprite.NORMAL_MELEE;
    }
}
exports.Spectrier = Spectrier;
class Kartana extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.STEEL, Synergy_1.Synergy.GRASS]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 230;
        this.atk = 40;
        this.def = 10;
        this.speDef = 2;
        this.maxPP = 65;
        this.range = 1;
        this.skill = Ability_1.Ability.LEAF_BLADE;
        this.passive = Passive_1.Passive.BEAST_BOOST_ATK;
        this.attackSprite = types_1.AttackSprite.GRASS_MELEE;
    }
}
exports.Kartana = Kartana;
class Dhelmise extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GRASS, Synergy_1.Synergy.GHOST, Synergy_1.Synergy.STEEL]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 200;
        this.atk = 18;
        this.def = 5;
        this.speDef = 5;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.ANCHOR_SHOT;
        this.attackSprite = types_1.AttackSprite.GRASS_MELEE;
    }
}
exports.Dhelmise = Dhelmise;
class Tropius extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GRASS, Synergy_1.Synergy.FLORA, Synergy_1.Synergy.FLYING]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 200;
        this.atk = 16;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.AIR_SLASH;
        this.attackSprite = types_1.AttackSprite.GRASS_MELEE;
        this.passive = Passive_1.Passive.HARVEST;
    }
    afterSimulationStart({ player, entity }) {
        const berry = (0, random_1.pickRandomIn)(Item_1.Berries);
        if (entity.items.size < 3) {
            entity.addItem(berry, true);
        }
        else {
            player.items.push(berry);
        }
    }
}
exports.Tropius = Tropius;
class Carnivine extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.MONSTER,
            Synergy_1.Synergy.GRASS,
            Synergy_1.Synergy.FLORA
        ]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 180;
        this.atk = 20;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.VINE_WHIP;
        this.attackSprite = types_1.AttackSprite.GRASS_RANGE;
    }
}
exports.Carnivine = Carnivine;
class Sableye extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DARK, Synergy_1.Synergy.GHOST]);
        this.evolutionRule = new evolution_rules_1.ItemEvolutionRule([Item_1.Item.RED_ORB]);
        this.evolution = Pokemon_1.Pkm.MEGA_SABLEYE;
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 200;
        this.atk = 12;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.KNOCK_OFF;
        this.attackSprite = types_1.AttackSprite.DARK_MELEE;
        this.passive = Passive_1.Passive.SABLEYE;
    }
}
exports.Sableye = Sableye;
class MegaSableye extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DARK, Synergy_1.Synergy.GHOST]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 4;
        this.hp = 200;
        this.atk = 12;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.KNOCK_OFF;
        this.attackSprite = types_1.AttackSprite.DARK_MELEE;
        this.passive = Passive_1.Passive.MEGA_SABLEYE;
    }
    onSpawn({ entity }) {
        entity.status.triggerRuneProtect(60000);
    }
}
exports.MegaSableye = MegaSableye;
class Koffing extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.POISON,
            Synergy_1.Synergy.ARTIFICIAL,
            Synergy_1.Synergy.AMORPHOUS
        ]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.WEEZING;
        this.hp = 70;
        this.atk = 5;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 60;
        this.range = 1;
        this.skill = Ability_1.Ability.SMOG;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.POISON_MELEE;
    }
}
exports.Koffing = Koffing;
class Weezing extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.POISON,
            Synergy_1.Synergy.ARTIFICIAL,
            Synergy_1.Synergy.AMORPHOUS
        ]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.hp = 170;
        this.atk = 10;
        this.def = 5;
        this.speDef = 5;
        this.maxPP = 60;
        this.range = 1;
        this.skill = Ability_1.Ability.SMOG;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.POISON_MELEE;
    }
}
exports.Weezing = Weezing;
class Clauncher extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WATER, Synergy_1.Synergy.SOUND]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.CLAWITZER;
        this.hp = 80;
        this.atk = 7;
        this.def = 1;
        this.speDef = 1;
        this.maxPP = 200;
        this.range = 4;
        this.skill = Ability_1.Ability.WATER_PULSE;
        this.passive = Passive_1.Passive.MEGA_LAUNCHER;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.PSYCHIC_RANGE;
    }
}
exports.Clauncher = Clauncher;
class Clawitzer extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WATER, Synergy_1.Synergy.SOUND]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.hp = 150;
        this.atk = 19;
        this.def = 3;
        this.speDef = 2;
        this.maxPP = 200;
        this.range = 4;
        this.skill = Ability_1.Ability.WATER_PULSE;
        this.passive = Passive_1.Passive.MEGA_LAUNCHER;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.PSYCHIC_RANGE;
    }
}
exports.Clawitzer = Clawitzer;
class Yanma extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.BUG, Synergy_1.Synergy.FOSSIL, Synergy_1.Synergy.FLYING]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.YANMEGA;
        this.hp = 70;
        this.atk = 9;
        this.def = 1;
        this.speDef = 1;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.AERIAL_ACE;
        this.passive = Passive_1.Passive.CLEAR_WING;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.PSYCHIC_RANGE;
    }
    onSpawn({ entity }) {
        entity.status.triggerClearWing(1000);
    }
}
exports.Yanma = Yanma;
class Yanmega extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.BUG, Synergy_1.Synergy.FOSSIL, Synergy_1.Synergy.FLYING]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.hp = 160;
        this.atk = 16;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.AERIAL_ACE;
        this.passive = Passive_1.Passive.CLEAR_WING;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.PSYCHIC_RANGE;
    }
    onSpawn({ entity }) {
        entity.status.triggerClearWing(1000);
    }
}
exports.Yanmega = Yanmega;
class Helioptile extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.NORMAL,
            Synergy_1.Synergy.ELECTRIC,
            Synergy_1.Synergy.LIGHT
        ]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.HELIOLISK;
        this.hp = 75;
        this.atk = 9;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 80;
        this.range = 3;
        this.skill = Ability_1.Ability.PARABOLIC_CHARGE;
        this.passive = Passive_1.Passive.DRY_SKIN;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.ELECTRIC_RANGE;
    }
    onSpawn({ entity, simulation }) {
        if (simulation.weather === Weather_1.Weather.RAIN) {
            entity.status.triggerDrySkin(1000);
        }
        else if (simulation.weather === Weather_1.Weather.SANDSTORM) {
            entity.addDodgeChance(0.25, entity, 0, false);
        }
        else if (simulation.weather === Weather_1.Weather.SUN) {
            entity.addAbilityPower(50, entity, 0, false);
        }
    }
}
exports.Helioptile = Helioptile;
class Heliolisk extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.NORMAL,
            Synergy_1.Synergy.ELECTRIC,
            Synergy_1.Synergy.LIGHT
        ]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.hp = 170;
        this.atk = 22;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 80;
        this.range = 3;
        this.skill = Ability_1.Ability.PARABOLIC_CHARGE;
        this.passive = Passive_1.Passive.DRY_SKIN;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.ELECTRIC_RANGE;
    }
    onSpawn({ entity, simulation }) {
        if (simulation.weather === Weather_1.Weather.RAIN) {
            entity.status.triggerDrySkin(1000);
        }
        else if (simulation.weather === Weather_1.Weather.SANDSTORM) {
            entity.addDodgeChance(0.25, entity, 0, false);
        }
        else if (simulation.weather === Weather_1.Weather.SUN) {
            entity.addAbilityPower(50, entity, 0, false);
        }
    }
}
exports.Heliolisk = Heliolisk;
class Exeggcute extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FLORA, Synergy_1.Synergy.PSYCHIC]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.EXEGGUTOR;
        this.evolutionRule = new evolution_rules_1.CountEvolutionRule(3, (pokemon, player) => {
            if (player.regionalPokemons.includes(Pokemon_1.Pkm.ALOLAN_EXEGGUTOR))
                return Pokemon_1.Pkm.ALOLAN_EXEGGUTOR;
            else
                return Pokemon_1.Pkm.EXEGGUTOR;
        });
        this.hp = 110;
        this.atk = 8;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 100;
        this.range = 3;
        this.skill = Ability_1.Ability.EGGSPLOSION;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.GRASS_MELEE;
    }
}
exports.Exeggcute = Exeggcute;
class Exeggutor extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FLORA, Synergy_1.Synergy.PSYCHIC]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.hp = 300;
        this.atk = 20;
        this.def = 5;
        this.speDef = 5;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.EGGSPLOSION;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.GRASS_MELEE;
    }
}
exports.Exeggutor = Exeggutor;
class AlolanExeggutor extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.DRAGON,
            Synergy_1.Synergy.FLORA,
            Synergy_1.Synergy.PSYCHIC
        ]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.hp = 350;
        this.atk = 24;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.EGGSPLOSION;
        this.regional = true;
        this.attackSprite = types_1.AttackSprite.GRASS_MELEE;
    }
    isInRegion(map, state) {
        var _a;
        const regionSynergies = (_a = Dungeon_1.DungeonDetails[map]) === null || _a === void 0 ? void 0 : _a.synergies;
        return ((!state || state.additionalPokemons.includes(Pokemon_1.Pkm.EXEGGCUTE)) &&
            regionSynergies.includes(Synergy_1.Synergy.DRAGON));
    }
}
exports.AlolanExeggutor = AlolanExeggutor;
class Bidoof extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.WILD,
            Synergy_1.Synergy.NORMAL,
            Synergy_1.Synergy.AQUATIC
        ]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.BIBAREL;
        this.hp = 60;
        this.atk = 6;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 90;
        this.range = 1;
        this.skill = Ability_1.Ability.SUPER_FANG;
        this.attackSprite = types_1.AttackSprite.NORMAL_MELEE;
    }
}
exports.Bidoof = Bidoof;
class Bibarel extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.WILD,
            Synergy_1.Synergy.NORMAL,
            Synergy_1.Synergy.AQUATIC
        ]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.hp = 135;
        this.atk = 15;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.SUPER_FANG;
        this.attackSprite = types_1.AttackSprite.NORMAL_MELEE;
    }
}
exports.Bibarel = Bibarel;
class Spinda extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.NORMAL]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 250;
        this.atk = 20;
        this.def = 5;
        this.speDef = 5;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.TEETER_DANCE;
        this.passive = Passive_1.Passive.SPOT_PANDA;
        this.attackSprite = types_1.AttackSprite.NORMAL_MELEE;
    }
    onSpawn({ entity }) {
        entity.effects.add(Effect_1.Effect.IMMUNITY_CONFUSION);
    }
}
exports.Spinda = Spinda;
class Baltoy extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.GROUND,
            Synergy_1.Synergy.PSYCHIC,
            Synergy_1.Synergy.ARTIFICIAL
        ]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.CLAYDOL;
        this.hp = 80;
        this.atk = 8;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 70;
        this.range = 2;
        this.skill = Ability_1.Ability.CONFUSION;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.PSYCHIC_RANGE;
    }
}
exports.Baltoy = Baltoy;
class Claydol extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.GROUND,
            Synergy_1.Synergy.PSYCHIC,
            Synergy_1.Synergy.ARTIFICIAL
        ]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.hp = 180;
        this.atk = 16;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 70;
        this.range = 2;
        this.skill = Ability_1.Ability.CONFUSION;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.PSYCHIC_RANGE;
    }
}
exports.Claydol = Claydol;
class Purrloin extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DARK, Synergy_1.Synergy.FIELD]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.LIEPARD;
        this.hp = 80;
        this.atk = 9;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 90;
        this.range = 1;
        this.skill = Ability_1.Ability.FAKE_OUT;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.DARK_MELEE;
    }
}
exports.Purrloin = Purrloin;
class Liepard extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DARK, Synergy_1.Synergy.FIELD]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.hp = 175;
        this.atk = 25;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 90;
        this.range = 1;
        this.skill = Ability_1.Ability.FAKE_OUT;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.DARK_MELEE;
    }
}
exports.Liepard = Liepard;
class Barboach extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WATER, Synergy_1.Synergy.GROUND]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.WHISCASH;
        this.hp = 120;
        this.atk = 9;
        this.def = 3;
        this.speDef = 4;
        this.maxPP = 90;
        this.range = 1;
        this.skill = Ability_1.Ability.FISSURE;
        this.passive = Passive_1.Passive.AQUA_VEIL;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.WATER_MELEE;
    }
    onSpawn({ entity, simulation }) {
        if (simulation.weather === Weather_1.Weather.RAIN) {
            entity.status.triggerRuneProtect(60000);
        }
    }
}
exports.Barboach = Barboach;
class Whiscash extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WATER, Synergy_1.Synergy.GROUND]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.hp = 250;
        this.atk = 22;
        this.def = 4;
        this.speDef = 5;
        this.maxPP = 90;
        this.range = 1;
        this.skill = Ability_1.Ability.FISSURE;
        this.passive = Passive_1.Passive.AQUA_VEIL;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.WATER_MELEE;
    }
    onSpawn({ entity, simulation }) {
        if (simulation.weather === Weather_1.Weather.RAIN) {
            entity.status.triggerRuneProtect(60000);
        }
    }
}
exports.Whiscash = Whiscash;
class Scraggy extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DARK, Synergy_1.Synergy.FIGHTING]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.SCRAFTY;
        this.hp = 70;
        this.atk = 8;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 85;
        this.range = 1;
        this.skill = Ability_1.Ability.ASSURANCE;
        this.passive = Passive_1.Passive.MOXIE;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.FIGHTING_MELEE;
    }
}
exports.Scraggy = Scraggy;
class Scrafty extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DARK, Synergy_1.Synergy.FIGHTING]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.hp = 140;
        this.atk = 18;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 85;
        this.range = 1;
        this.skill = Ability_1.Ability.ASSURANCE;
        this.passive = Passive_1.Passive.MOXIE;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.FIGHTING_MELEE;
    }
}
exports.Scrafty = Scrafty;
class Finneon extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WATER, Synergy_1.Synergy.LIGHT]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.LUMINEON;
        this.hp = 80;
        this.atk = 7;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 90;
        this.range = 2;
        this.skill = Ability_1.Ability.AQUA_RING;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.WATER_RANGE;
    }
}
exports.Finneon = Finneon;
class Lumineon extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WATER, Synergy_1.Synergy.LIGHT]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.hp = 180;
        this.atk = 19;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 85;
        this.range = 2;
        this.skill = Ability_1.Ability.AQUA_RING;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.WATER_RANGE;
    }
}
exports.Lumineon = Lumineon;
class Stunky extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DARK, Synergy_1.Synergy.POISON]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.SKUNTANK;
        this.hp = 125;
        this.atk = 10;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.POISON_GAS;
        this.passive = Passive_1.Passive.STENCH;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.POISON_MELEE;
    }
}
exports.Stunky = Stunky;
class Skuntank extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DARK, Synergy_1.Synergy.POISON]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.hp = 280;
        this.atk = 22;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.POISON_GAS;
        this.passive = Passive_1.Passive.STENCH;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.POISON_MELEE;
    }
}
exports.Skuntank = Skuntank;
class Illumise extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FLYING, Synergy_1.Synergy.BUG, Synergy_1.Synergy.LIGHT]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 130;
        this.atk = 13;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 90;
        this.range = 1;
        this.skill = Ability_1.Ability.STRUGGLE_BUG;
        this.passive = Passive_1.Passive.ILLUMISE_VOLBEAT;
        this.attackSprite = types_1.AttackSprite.BUG_MELEE;
    }
}
exports.Illumise = Illumise;
class Volbeat extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FLYING, Synergy_1.Synergy.BUG, Synergy_1.Synergy.LIGHT]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 130;
        this.atk = 13;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 90;
        this.range = 1;
        this.skill = Ability_1.Ability.TAIL_GLOW;
        this.passive = Passive_1.Passive.ILLUMISE_VOLBEAT;
        this.attackSprite = types_1.AttackSprite.BUG_MELEE;
    }
}
exports.Volbeat = Volbeat;
class Necrozma extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.LIGHT, Synergy_1.Synergy.PSYCHIC]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 300;
        this.atk = 30;
        this.def = 5;
        this.speDef = 5;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.PRISMATIC_LASER;
        this.passive = Passive_1.Passive.PRISM;
        this.attackSprite = types_1.AttackSprite.DRAGON_MELEE;
    }
    onChangePosition(x, y, player) {
        var _a;
        const hasLight = ((_a = player.synergies.get(Synergy_1.Synergy.LIGHT)) !== null && _a !== void 0 ? _a : 0) >=
            Config_1.SynergyTriggers[Synergy_1.Synergy.LIGHT][0];
        if (x === player.lightX && y === player.lightY && hasLight) {
            player.transformPokemon(this, Pokemon_1.Pkm.ULTRA_NECROZMA);
        }
    }
}
exports.Necrozma = Necrozma;
class UltraNecrozma extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.DRAGON,
            Synergy_1.Synergy.LIGHT,
            Synergy_1.Synergy.PSYCHIC
        ]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 4;
        this.hp = 300;
        this.atk = 30;
        this.def = 5;
        this.speDef = 5;
        this.maxPP = 100;
        this.range = 3;
        this.skill = Ability_1.Ability.PRISMATIC_LASER;
        this.passive = Passive_1.Passive.PRISM;
        this.attackSprite = types_1.AttackSprite.GHOST_RANGE;
    }
    onChangePosition(x, y, player) {
        var _a;
        const hasLight = ((_a = player.synergies.get(Synergy_1.Synergy.LIGHT)) !== null && _a !== void 0 ? _a : 0) >=
            Config_1.SynergyTriggers[Synergy_1.Synergy.LIGHT][0];
        if (x !== player.lightX || y !== player.lightY || !hasLight) {
            player.transformPokemon(this, Pokemon_1.Pkm.NECROZMA);
        }
    }
}
exports.UltraNecrozma = UltraNecrozma;
class Cherrubi extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FLORA, Synergy_1.Synergy.LIGHT, Synergy_1.Synergy.GRASS]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.CHERRIM;
        this.hp = 90;
        this.atk = 6;
        this.def = 1;
        this.speDef = 1;
        this.maxPP = 65;
        this.range = 3;
        this.skill = Ability_1.Ability.NATURAL_GIFT;
        this.regional = true;
        this.attackSprite = types_1.AttackSprite.GRASS_RANGE;
    }
}
exports.Cherrubi = Cherrubi;
class Cherrim extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FLORA, Synergy_1.Synergy.LIGHT, Synergy_1.Synergy.GRASS]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.hp = 180;
        this.atk = 16;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 65;
        this.range = 3;
        this.skill = Ability_1.Ability.NATURAL_GIFT;
        this.passive = Passive_1.Passive.BLOSSOM;
        this.regional = true;
        this.attackSprite = types_1.AttackSprite.GRASS_RANGE;
    }
    onChangePosition(x, y, player) {
        var _a;
        const hasLight = ((_a = player.synergies.get(Synergy_1.Synergy.LIGHT)) !== null && _a !== void 0 ? _a : 0) >=
            Config_1.SynergyTriggers[Synergy_1.Synergy.LIGHT][0];
        if (x === player.lightX && y === player.lightY && hasLight) {
            player.transformPokemon(this, Pokemon_1.Pkm.CHERRIM_SUNLIGHT);
        }
    }
}
exports.Cherrim = Cherrim;
class CherrimSunlight extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FLORA, Synergy_1.Synergy.LIGHT, Synergy_1.Synergy.GRASS]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.hp = 210;
        this.atk = 18;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 60;
        this.range = 3;
        this.skill = Ability_1.Ability.NATURAL_GIFT;
        this.passive = Passive_1.Passive.BLOSSOM;
        this.regional = true;
        this.attackSprite = types_1.AttackSprite.GRASS_RANGE;
    }
    onChangePosition(x, y, player) {
        var _a;
        const hasLight = ((_a = player.synergies.get(Synergy_1.Synergy.LIGHT)) !== null && _a !== void 0 ? _a : 0) >=
            Config_1.SynergyTriggers[Synergy_1.Synergy.LIGHT][0];
        if (x !== player.lightX || y !== player.lightY || !hasLight) {
            player.transformPokemon(this, Pokemon_1.Pkm.CHERRIM);
        }
    }
}
exports.CherrimSunlight = CherrimSunlight;
class Misdreavus extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.GHOST,
            Synergy_1.Synergy.FAIRY,
            Synergy_1.Synergy.AMORPHOUS
        ]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.MISMAGIUS;
        this.hp = 80;
        this.atk = 8;
        this.def = 2;
        this.speDef = 3;
        this.maxPP = 100;
        this.range = 3;
        this.skill = Ability_1.Ability.NIGHT_SHADE;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.GHOST_RANGE;
    }
}
exports.Misdreavus = Misdreavus;
class Mismagius extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.GHOST,
            Synergy_1.Synergy.FAIRY,
            Synergy_1.Synergy.AMORPHOUS
        ]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.hp = 160;
        this.atk = 23;
        this.def = 2;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 3;
        this.skill = Ability_1.Ability.NIGHT_SHADE;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.GHOST_RANGE;
    }
}
exports.Mismagius = Mismagius;
class Doduo extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WILD, Synergy_1.Synergy.FLYING, Synergy_1.Synergy.NORMAL]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.DODRIO;
        this.hp = 90;
        this.atk = 12;
        this.def = 3;
        this.speDef = 2;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.AGILITY;
        this.attackSprite = types_1.AttackSprite.FLYING_MELEE;
        this.regional = true;
    }
}
exports.Doduo = Doduo;
class Dodrio extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WILD, Synergy_1.Synergy.FLYING, Synergy_1.Synergy.NORMAL]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.hp = 185;
        this.atk = 28;
        this.def = 5;
        this.speDef = 3;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.AGILITY;
        this.attackSprite = types_1.AttackSprite.FLYING_MELEE;
        this.regional = true;
    }
}
exports.Dodrio = Dodrio;
class Kricketot extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.BUG, Synergy_1.Synergy.SOUND]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.KRICKETUNE;
        this.hp = 80;
        this.atk = 7;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 60;
        this.range = 1;
        this.skill = Ability_1.Ability.SCREECH;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.BUG_MELEE;
    }
}
exports.Kricketot = Kricketot;
class Kricketune extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.BUG, Synergy_1.Synergy.SOUND]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.hp = 190;
        this.atk = 18;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 60;
        this.range = 1;
        this.skill = Ability_1.Ability.SCREECH;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.BUG_MELEE;
    }
}
exports.Kricketune = Kricketune;
class Hippopotas extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GROUND, Synergy_1.Synergy.NORMAL]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.HIPPODOWN;
        this.hp = 120;
        this.atk = 10;
        this.def = 4;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.SAND_TOMB;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.ROCK_MELEE;
        this.passive = Passive_1.Passive.SAND_STREAM;
    }
}
exports.Hippopotas = Hippopotas;
class Hippodown extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GROUND, Synergy_1.Synergy.NORMAL]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.hp = 270;
        this.atk = 22;
        this.def = 7;
        this.speDef = 3;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.SAND_TOMB;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.ROCK_MELEE;
        this.passive = Passive_1.Passive.SAND_STREAM;
    }
}
exports.Hippodown = Hippodown;
class Wingull extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WATER, Synergy_1.Synergy.FLYING]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.PELIPPER;
        this.hp = 90;
        this.atk = 10;
        this.def = 5;
        this.speDef = 3;
        this.maxPP = 70;
        this.range = 2;
        this.skill = Ability_1.Ability.WHIRLWIND;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.FLYING_RANGE;
        this.passive = Passive_1.Passive.DRIZZLE;
    }
}
exports.Wingull = Wingull;
class Pelipper extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WATER, Synergy_1.Synergy.FLYING]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.hp = 200;
        this.atk = 24;
        this.def = 7;
        this.speDef = 4;
        this.maxPP = 70;
        this.range = 2;
        this.skill = Ability_1.Ability.WHIRLWIND;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.FLYING_RANGE;
        this.passive = Passive_1.Passive.DRIZZLE;
    }
}
exports.Pelipper = Pelipper;
class Murkrow extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DARK, Synergy_1.Synergy.FLYING]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.HONCHKROW;
        this.hp = 110;
        this.atk = 9;
        this.def = 6;
        this.speDef = 3;
        this.maxPP = 70;
        this.range = 1;
        this.skill = Ability_1.Ability.FOUL_PLAY;
        this.passive = Passive_1.Passive.BAD_LUCK;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.DARK_MELEE;
    }
    beforeSimulationStart({ opponentEffects }) {
        opponentEffects.add(Effect_1.Effect.BAD_LUCK);
    }
}
exports.Murkrow = Murkrow;
class Honchkrow extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DARK, Synergy_1.Synergy.FLYING]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.hp = 220;
        this.atk = 24;
        this.def = 8;
        this.speDef = 5;
        this.maxPP = 70;
        this.range = 1;
        this.skill = Ability_1.Ability.FOUL_PLAY;
        this.passive = Passive_1.Passive.BAD_LUCK;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.DARK_MELEE;
    }
    beforeSimulationStart({ opponentEffects }) {
        opponentEffects.add(Effect_1.Effect.BAD_LUCK);
    }
}
exports.Honchkrow = Honchkrow;
class Zigzagoon extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WILD, Synergy_1.Synergy.FIELD]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.LINOONE;
        this.hp = 80;
        this.atk = 8;
        this.def = 4;
        this.speDef = 2;
        this.maxPP = 50;
        this.range = 1;
        this.skill = Ability_1.Ability.SLASH;
        this.attackSprite = types_1.AttackSprite.NORMAL_MELEE;
        this.passive = Passive_1.Passive.PICKUP;
    }
}
exports.Zigzagoon = Zigzagoon;
class Linoone extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WILD, Synergy_1.Synergy.FIELD]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.hp = 180;
        this.atk = 21;
        this.def = 6;
        this.speDef = 4;
        this.maxPP = 50;
        this.range = 1;
        this.skill = Ability_1.Ability.SLASH;
        this.attackSprite = types_1.AttackSprite.NORMAL_MELEE;
        this.passive = Passive_1.Passive.PICKUP;
    }
}
exports.Linoone = Linoone;
class Phantump extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.GHOST,
            Synergy_1.Synergy.GRASS,
            Synergy_1.Synergy.MONSTER
        ]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.TREVENANT;
        this.hp = 90;
        this.atk = 8;
        this.def = 3;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.POLTERGEIST;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.GRASS_MELEE;
    }
}
exports.Phantump = Phantump;
class Trevenant extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.GHOST,
            Synergy_1.Synergy.GRASS,
            Synergy_1.Synergy.MONSTER
        ]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.hp = 200;
        this.atk = 18;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.POLTERGEIST;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.GRASS_MELEE;
    }
}
exports.Trevenant = Trevenant;
class HisuianQwilfish extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.DARK,
            Synergy_1.Synergy.POISON,
            Synergy_1.Synergy.AQUATIC
        ]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.OVERQWIL;
        this.hp = 95;
        this.atk = 8;
        this.def = 4;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.BARB_BARRAGE;
        this.regional = true;
        this.attackSprite = types_1.AttackSprite.POISON_MELEE;
    }
}
exports.HisuianQwilfish = HisuianQwilfish;
class Overqwil extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.DARK,
            Synergy_1.Synergy.POISON,
            Synergy_1.Synergy.AQUATIC
        ]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.hp = 230;
        this.atk = 19;
        this.def = 6;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.BARB_BARRAGE;
        this.regional = true;
        this.attackSprite = types_1.AttackSprite.POISON_MELEE;
    }
}
exports.Overqwil = Overqwil;
class Xurkitree extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.ELECTRIC,
            Synergy_1.Synergy.ARTIFICIAL,
            Synergy_1.Synergy.HUMAN
        ]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 200;
        this.atk = 16;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.CHARGE_BEAM;
        this.passive = Passive_1.Passive.SPECIAL_ATTACK;
        this.attackSprite = types_1.AttackSprite.ELECTRIC_RANGE;
        this.attackType = Game_1.AttackType.SPECIAL;
    }
}
exports.Xurkitree = Xurkitree;
class Nihilego extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.POISON,
            Synergy_1.Synergy.ROCK,
            Synergy_1.Synergy.AMORPHOUS
        ]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 200;
        this.atk = 25;
        this.def = 1;
        this.speDef = 5;
        this.maxPP = 80;
        this.range = 3;
        this.skill = Ability_1.Ability.EMPTY_LIGHT;
        this.passive = Passive_1.Passive.BEAST_BOOST_AP;
        this.attackSprite = types_1.AttackSprite.POISON_RANGE;
    }
}
exports.Nihilego = Nihilego;
class Tandemaus extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.NORMAL, Synergy_1.Synergy.FAIRY]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 2;
        this.hp = 160;
        this.atk = 16;
        this.def = 5;
        this.speDef = 5;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.POPULATION_BOMB;
        this.attackSprite = types_1.AttackSprite.NORMAL_MELEE;
        this.evolution = Pokemon_1.Pkm.MAUSHOLD_THREE;
        this.evolutionRule = new evolution_rules_1.ConditionBasedEvolutionRule((pokemon, player, stageLevel) => stageLevel >= 14);
        this.passive = Passive_1.Passive.FAMILY;
    }
}
exports.Tandemaus = Tandemaus;
class MausholdThree extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.NORMAL, Synergy_1.Synergy.FAIRY]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 200;
        this.atk = 20;
        this.def = 5;
        this.speDef = 5;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.POPULATION_BOMB;
        this.attackSprite = types_1.AttackSprite.NORMAL_MELEE;
        this.evolution = Pokemon_1.Pkm.MAUSHOLD_FOUR;
        this.evolutionRule = new evolution_rules_1.ConditionBasedEvolutionRule((pokemon, player, stageLevel) => stageLevel >= 20);
        this.passive = Passive_1.Passive.FAMILY;
    }
}
exports.MausholdThree = MausholdThree;
class MausholdFour extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.NORMAL, Synergy_1.Synergy.FAIRY]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 4;
        this.hp = 240;
        this.atk = 24;
        this.def = 5;
        this.speDef = 5;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.POPULATION_BOMB;
        this.attackSprite = types_1.AttackSprite.NORMAL_MELEE;
    }
}
exports.MausholdFour = MausholdFour;
class Morpeko extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DARK, Synergy_1.Synergy.ELECTRIC]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 200;
        this.atk = 20;
        this.def = 5;
        this.speDef = 5;
        this.maxPP = 50;
        this.range = 1;
        this.skill = Ability_1.Ability.AURA_WHEEL;
        this.attackSprite = types_1.AttackSprite.ELECTRIC_MELEE;
        this.passive = Passive_1.Passive.HUNGER_SWITCH;
    }
}
exports.Morpeko = Morpeko;
class MorpekoHangry extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DARK, Synergy_1.Synergy.ELECTRIC]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 200;
        this.atk = 20;
        this.def = 5;
        this.speDef = 5;
        this.maxPP = 50;
        this.range = 1;
        this.skill = Ability_1.Ability.AURA_WHEEL;
        this.attackSprite = types_1.AttackSprite.ELECTRIC_MELEE;
        this.passive = Passive_1.Passive.HUNGER_SWITCH;
    }
}
exports.MorpekoHangry = MorpekoHangry;
class Minior extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FLYING, Synergy_1.Synergy.ROCK]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 200;
        this.atk = 12;
        this.def = 5;
        this.speDef = 5;
        this.maxPP = 50;
        this.range = 3;
        this.skill = Ability_1.Ability.SHIELDS_DOWN;
        this.attackSprite = types_1.AttackSprite.ROCK_RANGE;
        this.passive = Passive_1.Passive.METEOR;
    }
}
exports.Minior = Minior;
class MiniorKernelBlue extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FLYING, Synergy_1.Synergy.ROCK]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 200;
        this.atk = 12;
        this.def = 5;
        this.speDef = 5;
        this.maxPP = 50;
        this.range = 3;
        this.skill = Ability_1.Ability.SHIELDS_UP;
        this.attackSprite = types_1.AttackSprite.ROCK_RANGE;
        this.passive = Passive_1.Passive.METEOR;
    }
}
exports.MiniorKernelBlue = MiniorKernelBlue;
class MiniorKernelRed extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FLYING, Synergy_1.Synergy.ROCK]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 200;
        this.atk = 12;
        this.def = 5;
        this.speDef = 5;
        this.maxPP = 50;
        this.range = 3;
        this.skill = Ability_1.Ability.SHIELDS_UP;
        this.attackSprite = types_1.AttackSprite.ROCK_RANGE;
        this.passive = Passive_1.Passive.METEOR;
    }
}
exports.MiniorKernelRed = MiniorKernelRed;
class MiniorKernelOrange extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FLYING, Synergy_1.Synergy.ROCK]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 200;
        this.atk = 12;
        this.def = 5;
        this.speDef = 5;
        this.maxPP = 50;
        this.range = 3;
        this.skill = Ability_1.Ability.SHIELDS_UP;
        this.attackSprite = types_1.AttackSprite.ROCK_RANGE;
        this.passive = Passive_1.Passive.METEOR;
    }
}
exports.MiniorKernelOrange = MiniorKernelOrange;
class MiniorKernelGreen extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FLYING, Synergy_1.Synergy.ROCK]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 200;
        this.atk = 12;
        this.def = 5;
        this.speDef = 5;
        this.maxPP = 50;
        this.range = 3;
        this.skill = Ability_1.Ability.SHIELDS_UP;
        this.attackSprite = types_1.AttackSprite.ROCK_RANGE;
        this.passive = Passive_1.Passive.METEOR;
    }
}
exports.MiniorKernelGreen = MiniorKernelGreen;
class Hoopa extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.PSYCHIC, Synergy_1.Synergy.DARK, Synergy_1.Synergy.GHOST]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 180;
        this.atk = 15;
        this.def = 3;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.UNBOUND;
        this.attackSprite = types_1.AttackSprite.PSYCHIC_RANGE;
    }
}
exports.Hoopa = Hoopa;
class HoopaUnbound extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.PSYCHIC, Synergy_1.Synergy.DARK, Synergy_1.Synergy.GHOST]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 4;
        this.hp = 250;
        this.atk = 25;
        this.def = 3;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.HYPERSPACE_FURY;
        this.attackSprite = types_1.AttackSprite.DARK_MELEE;
    }
}
exports.HoopaUnbound = HoopaUnbound;
class Gimmighoul extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GHOST, Synergy_1.Synergy.STEEL]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 2;
        this.hp = 200;
        this.atk = 10;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 90;
        this.range = 1;
        this.skill = Ability_1.Ability.GOLD_RUSH;
        this.attackSprite = types_1.AttackSprite.DRAGON_MELEE;
        this.evolution = Pokemon_1.Pkm.GHOLDENGO;
        this.evolutionRule = new evolution_rules_1.ConditionBasedEvolutionRule((pokemon, player) => player.money >= 99);
        this.passive = Passive_1.Passive.GIMMIGHOUL;
    }
}
exports.Gimmighoul = Gimmighoul;
class Gholdengo extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GHOST, Synergy_1.Synergy.STEEL]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 230;
        this.atk = 21;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 90;
        this.range = 1;
        this.skill = Ability_1.Ability.MAKE_IT_RAIN;
        this.attackSprite = types_1.AttackSprite.DRAGON_MELEE;
        this.passive = Passive_1.Passive.GHOLDENGO;
    }
    onSpawn({ entity }) {
        if (entity.player && entity.player.money >= 50) {
            entity.status.triggerRuneProtect(60000);
        }
    }
    onAcquired(player) {
        player.titles.add(types_1.Title.GOLDEN);
    }
}
exports.Gholdengo = Gholdengo;
class Sobble extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WATER, Synergy_1.Synergy.AQUATIC]);
        this.rarity = Game_1.Rarity.ULTRA;
        this.evolution = Pokemon_1.Pkm.DRIZZILE;
        this.stars = 1;
        this.hp = 120;
        this.atk = 14;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 80;
        this.range = 3;
        this.skill = Ability_1.Ability.SNIPE_SHOT;
        this.attackSprite = types_1.AttackSprite.WATER_RANGE;
    }
}
exports.Sobble = Sobble;
class Drizzile extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WATER, Synergy_1.Synergy.AQUATIC]);
        this.rarity = Game_1.Rarity.ULTRA;
        this.evolution = Pokemon_1.Pkm.INTELEON;
        this.stars = 2;
        this.hp = 200;
        this.atk = 26;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 80;
        this.range = 3;
        this.skill = Ability_1.Ability.SNIPE_SHOT;
        this.attackSprite = types_1.AttackSprite.WATER_RANGE;
    }
}
exports.Drizzile = Drizzile;
class Inteleon extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WATER, Synergy_1.Synergy.AQUATIC]);
        this.rarity = Game_1.Rarity.ULTRA;
        this.stars = 3;
        this.hp = 360;
        this.atk = 40;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 80;
        this.range = 3;
        this.skill = Ability_1.Ability.SNIPE_SHOT;
        this.attackSprite = types_1.AttackSprite.WATER_RANGE;
    }
}
exports.Inteleon = Inteleon;
class Comfey extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FLORA, Synergy_1.Synergy.FAIRY]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 150;
        this.atk = 15;
        this.def = 4;
        this.speDef = 6;
        this.maxPP = 80;
        this.range = 3;
        this.skill = Ability_1.Ability.FLORAL_HEALING;
        this.passive = Passive_1.Passive.COMFEY;
        this.attackSprite = types_1.AttackSprite.FAIRY_RANGE;
        this.canHoldItems = false;
    }
    afterSimulationStart({ simulation, team, entity }) {
        const alliesWithFreeSlots = (0, schemas_1.values)(team).filter((p) => p.name !== Pokemon_1.Pkm.COMFEY &&
            p.items.size < 3 &&
            p.refToBoardPokemon.canHoldItems);
        if (alliesWithFreeSlots.length > 0) {
            alliesWithFreeSlots.sort((a, b) => (0, distance_1.distanceE)(a.positionX, a.positionY, entity.positionX, entity.positionY) -
                (0, distance_1.distanceE)(b.positionX, b.positionY, entity.positionX, entity.positionY));
            const nearestAllyWithFreeItemSlot = alliesWithFreeSlots[0];
            team.delete(entity.id);
            simulation.board.setValue(entity.positionX, entity.positionY, undefined);
            if (simulation.blueDpsMeter.has(entity.id)) {
                simulation.blueDpsMeter.delete(entity.id);
            }
            if (simulation.redDpsMeter.has(entity.id)) {
                simulation.redDpsMeter.delete(entity.id);
            }
            nearestAllyWithFreeItemSlot.items.add(Item_1.Item.COMFEY);
            nearestAllyWithFreeItemSlot.addAbilityPower(entity.ap, entity, 0, false);
            nearestAllyWithFreeItemSlot.addAttack(entity.atk, entity, 0, false);
            nearestAllyWithFreeItemSlot.addAttackSpeed(entity.atkSpeed - Config_1.DEFAULT_ATK_SPEED, entity, 0, false);
            nearestAllyWithFreeItemSlot.addShield(entity.shield, entity, 0, false);
            nearestAllyWithFreeItemSlot.addMaxHP(entity.hp, entity, 0, false);
            nearestAllyWithFreeItemSlot.addDefense(entity.def, entity, 0, false);
            nearestAllyWithFreeItemSlot.addSpecialDefense(entity.speDef, entity, 0, false);
            nearestAllyWithFreeItemSlot.addCritChance(entity.critChance - Config_1.DEFAULT_CRIT_CHANCE, entity, 0, false);
            nearestAllyWithFreeItemSlot.addCritPower((entity.critPower - Config_1.DEFAULT_CRIT_POWER) * 100, entity, 0, false);
        }
    }
}
exports.Comfey = Comfey;
class Lillipup extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.NORMAL, Synergy_1.Synergy.FIELD]);
        this.rarity = Game_1.Rarity.COMMON;
        this.evolution = Pokemon_1.Pkm.HERDIER;
        this.stars = 1;
        this.hp = 60;
        this.atk = 6;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.RETALIATE;
        this.attackSprite = types_1.AttackSprite.NORMAL_MELEE;
    }
}
exports.Lillipup = Lillipup;
class Herdier extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.NORMAL, Synergy_1.Synergy.FIELD]);
        this.rarity = Game_1.Rarity.COMMON;
        this.evolution = Pokemon_1.Pkm.STOUTLAND;
        this.stars = 2;
        this.hp = 120;
        this.atk = 12;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.RETALIATE;
        this.attackSprite = types_1.AttackSprite.NORMAL_MELEE;
    }
}
exports.Herdier = Herdier;
class Stoutland extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.NORMAL, Synergy_1.Synergy.FIELD]);
        this.rarity = Game_1.Rarity.COMMON;
        this.stars = 3;
        this.hp = 220;
        this.atk = 22;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.RETALIATE;
        this.attackSprite = types_1.AttackSprite.NORMAL_MELEE;
    }
}
exports.Stoutland = Stoutland;
class Pheromosa extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.BUG, Synergy_1.Synergy.FIGHTING]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 200;
        this.atk = 35;
        this.def = 5;
        this.speDef = 5;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.LUNGE;
        this.attackSprite = types_1.AttackSprite.BUG_MELEE;
    }
}
exports.Pheromosa = Pheromosa;
class Dracovish extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.DRAGON,
            Synergy_1.Synergy.FOSSIL,
            Synergy_1.Synergy.AQUATIC
        ]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 180;
        this.atk = 21;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 110;
        this.range = 1;
        this.skill = Ability_1.Ability.FISHIOUS_REND;
        this.attackSprite = types_1.AttackSprite.DRAGON_MELEE;
    }
}
exports.Dracovish = Dracovish;
class Bruxish extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WATER, Synergy_1.Synergy.PSYCHIC]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 200;
        this.atk = 20;
        this.def = 5;
        this.speDef = 5;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.PSYCHIC_FANGS;
        this.attackSprite = types_1.AttackSprite.WATER_MELEE;
    }
}
exports.Bruxish = Bruxish;
class Corsola extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.ROCK, Synergy_1.Synergy.AQUATIC]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 1;
        this.hp = 125;
        this.atk = 8;
        this.def = 1;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.RECOVER;
        this.attackSprite = types_1.AttackSprite.WATER_MELEE;
        this.passive = Passive_1.Passive.CORSOLA;
        this.evolution = Pokemon_1.Pkm.GALAR_CORSOLA;
        this.evolutionRule = new evolution_rules_1.ConditionBasedEvolutionRule((pokemon) => pokemon.deathCount > 0);
        this.regional = true;
    }
}
exports.Corsola = Corsola;
class GalarCorsola extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.ROCK, Synergy_1.Synergy.AQUATIC, Synergy_1.Synergy.GHOST]);
        this.evolution = Pokemon_1.Pkm.CURSOLA;
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 1;
        this.hp = 125;
        this.atk = 8;
        this.def = 1;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.CURSE;
        this.attackSprite = types_1.AttackSprite.WATER_MELEE;
        this.regional = true;
    }
    isInRegion(map, state) {
        return false;
    }
}
exports.GalarCorsola = GalarCorsola;
class Cursola extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.ROCK, Synergy_1.Synergy.AQUATIC, Synergy_1.Synergy.GHOST]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.hp = 200;
        this.atk = 25;
        this.def = 3;
        this.speDef = 8;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.CURSE;
        this.attackSprite = types_1.AttackSprite.WATER_MELEE;
        this.regional = true;
    }
    isInRegion(map, state) {
        return false;
    }
}
exports.Cursola = Cursola;
class Smeargle extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.NORMAL, Synergy_1.Synergy.HUMAN]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 250;
        this.atk = 20;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.SKETCH;
        this.attackSprite = types_1.AttackSprite.NORMAL_MELEE;
    }
    afterSimulationStart({ entity }) {
        if (entity.player) {
            const allyOnTheLeft = entity.player.getPokemonAt(this.positionX - 1, this.positionY);
            if (allyOnTheLeft) {
                entity.maxPP = allyOnTheLeft.maxPP;
                entity.skill = allyOnTheLeft.skill;
                entity.stars = allyOnTheLeft.stars;
            }
        }
    }
}
exports.Smeargle = Smeargle;
class Toxel extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.ELECTRIC,
            Synergy_1.Synergy.POISON,
            Synergy_1.Synergy.BABY
        ]);
        this.rarity = Game_1.Rarity.RARE;
        this.evolution = Pokemon_1.Pkm.TOXTRICITY;
        this.stars = 1;
        this.hp = 80;
        this.atk = 8;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 90;
        this.range = 1;
        this.skill = Ability_1.Ability.OVERDRIVE;
        this.attackSprite = types_1.AttackSprite.ELECTRIC_MELEE;
        this.additional = true;
    }
}
exports.Toxel = Toxel;
class Toxtricity extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.ELECTRIC,
            Synergy_1.Synergy.POISON,
            Synergy_1.Synergy.SOUND
        ]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.hp = 160;
        this.atk = 21;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 90;
        this.range = 1;
        this.skill = Ability_1.Ability.OVERDRIVE;
        this.attackSprite = types_1.AttackSprite.ELECTRIC_MELEE;
        this.additional = true;
    }
}
exports.Toxtricity = Toxtricity;
class Cyclizar extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DRAGON, Synergy_1.Synergy.NORMAL]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 220;
        this.atk = 20;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.SHED_TAIL;
        this.attackSprite = types_1.AttackSprite.DRAGON_MELEE;
    }
}
exports.Cyclizar = Cyclizar;
class Pawniard extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DARK, Synergy_1.Synergy.STEEL]);
        this.rarity = Game_1.Rarity.ULTRA;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.BISHARP;
        this.hp = 130;
        this.atk = 14;
        this.def = 5;
        this.speDef = 3;
        this.maxPP = 60;
        this.range = 1;
        this.skill = Ability_1.Ability.KOWTOW_CLEAVE;
        this.attackSprite = types_1.AttackSprite.STEEL_MELEE;
    }
}
exports.Pawniard = Pawniard;
class Bisharp extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DARK, Synergy_1.Synergy.STEEL]);
        this.rarity = Game_1.Rarity.ULTRA;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.KINGAMBIT;
        this.hp = 250;
        this.atk = 26;
        this.def = 8;
        this.speDef = 4;
        this.maxPP = 60;
        this.range = 1;
        this.skill = Ability_1.Ability.KOWTOW_CLEAVE;
        this.attackSprite = types_1.AttackSprite.STEEL_MELEE;
    }
}
exports.Bisharp = Bisharp;
class Kingambit extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DARK, Synergy_1.Synergy.STEEL]);
        this.rarity = Game_1.Rarity.ULTRA;
        this.stars = 3;
        this.hp = 400;
        this.atk = 42;
        this.def = 12;
        this.speDef = 6;
        this.maxPP = 60;
        this.range = 1;
        this.skill = Ability_1.Ability.KOWTOW_CLEAVE;
        this.attackSprite = types_1.AttackSprite.STEEL_MELEE;
    }
}
exports.Kingambit = Kingambit;
class Feebas extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WATER]);
        this.rarity = Game_1.Rarity.SPECIAL;
        this.evolution = Pokemon_1.Pkm.MILOTIC;
        this.stars = 1;
        this.hp = 60;
        this.atk = 5;
        this.def = 2;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.SPLASH;
        this.passive = Passive_1.Passive.FEEBAS;
        this.attackSprite = types_1.AttackSprite.WATER_MELEE;
        this.evolutionRule = new evolution_rules_1.CountEvolutionRule(6);
    }
}
exports.Feebas = Feebas;
class Milotic extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DRAGON, Synergy_1.Synergy.FAIRY, Synergy_1.Synergy.WATER]);
        this.rarity = Game_1.Rarity.SPECIAL;
        this.stars = 3;
        this.hp = 300;
        this.atk = 16;
        this.def = 4;
        this.speDef = 7;
        this.maxPP = 80;
        this.range = 2;
        this.skill = Ability_1.Ability.ATTRACT;
        this.attackSprite = types_1.AttackSprite.FAIRY_RANGE;
    }
    onAcquired(player) {
        player.titles.add(types_1.Title.SIREN);
    }
}
exports.Milotic = Milotic;
class Dewpider extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.WATER,
            Synergy_1.Synergy.BUG,
            Synergy_1.Synergy.AMORPHOUS
        ]);
        this.additional = true;
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.ARAQUANID;
        this.hp = 60;
        this.atk = 7;
        this.def = 2;
        this.speDef = 1;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.STICKY_WEB;
        this.attackSprite = types_1.AttackSprite.BUG_MELEE;
        this.passive = Passive_1.Passive.WATER_BUBBLE;
    }
}
exports.Dewpider = Dewpider;
class Araquanid extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.WATER,
            Synergy_1.Synergy.BUG,
            Synergy_1.Synergy.AMORPHOUS
        ]);
        this.additional = true;
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.hp = 150;
        this.atk = 16;
        this.def = 4;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.STICKY_WEB;
        this.attackSprite = types_1.AttackSprite.BUG_MELEE;
        this.passive = Passive_1.Passive.WATER_BUBBLE;
    }
}
exports.Araquanid = Araquanid;
class Lickitung extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WILD, Synergy_1.Synergy.NORMAL]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.LICKILICKY;
        this.hp = 70;
        this.atk = 6;
        this.def = 2;
        this.speDef = 3;
        this.maxPP = 90;
        this.range = 1;
        this.skill = Ability_1.Ability.LICK;
        this.attackSprite = types_1.AttackSprite.NORMAL_MELEE;
    }
}
exports.Lickitung = Lickitung;
class Lickilicky extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WILD, Synergy_1.Synergy.NORMAL]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.hp = 150;
        this.atk = 11;
        this.def = 4;
        this.speDef = 5;
        this.maxPP = 90;
        this.range = 1;
        this.skill = Ability_1.Ability.LICK;
        this.attackSprite = types_1.AttackSprite.NORMAL_MELEE;
    }
}
exports.Lickilicky = Lickilicky;
class Kangaskhan extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.WILD,
            Synergy_1.Synergy.FIGHTING,
            Synergy_1.Synergy.NORMAL
        ]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 200;
        this.atk = 16;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.HEADBUTT;
        this.attackSprite = types_1.AttackSprite.NORMAL_MELEE;
    }
}
exports.Kangaskhan = Kangaskhan;
class Teddiursa extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WILD, Synergy_1.Synergy.GROUND]);
        this.rarity = Game_1.Rarity.ULTRA;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.URSARING;
        this.hp = 150;
        this.atk = 12;
        this.def = 4;
        this.speDef = 3;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.FURY_SWIPES;
        this.attackSprite = types_1.AttackSprite.NORMAL_MELEE;
    }
}
exports.Teddiursa = Teddiursa;
class Ursaring extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WILD, Synergy_1.Synergy.GROUND]);
        this.rarity = Game_1.Rarity.ULTRA;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.URSALUNA;
        this.hp = 280;
        this.atk = 23;
        this.def = 6;
        this.speDef = 5;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.FURY_SWIPES;
        this.attackSprite = types_1.AttackSprite.NORMAL_MELEE;
    }
}
exports.Ursaring = Ursaring;
class Ursaluna extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WILD, Synergy_1.Synergy.GROUND]);
        this.rarity = Game_1.Rarity.ULTRA;
        this.stars = 3;
        this.hp = 450;
        this.atk = 28;
        this.def = 12;
        this.speDef = 10;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.FURY_SWIPES;
        this.passive = Passive_1.Passive.BLOODMOON;
        this.attackSprite = types_1.AttackSprite.NORMAL_MELEE;
    }
    beforeSimulationStart({ weather, player }) {
        if (weather === Weather_1.Weather.BLOODMOON) {
            player.transformPokemon(this, Pokemon_1.Pkm.URSALUNA_BLOODMOON);
        }
    }
}
exports.Ursaluna = Ursaluna;
class UrsalunaBloodmoon extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WILD, Synergy_1.Synergy.GROUND]);
        this.rarity = Game_1.Rarity.ULTRA;
        this.stars = 3;
        this.hp = 380;
        this.atk = 36;
        this.def = 14;
        this.speDef = 7;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.BLOOD_MOON;
        this.attackSprite = types_1.AttackSprite.NORMAL_MELEE;
    }
    beforeSimulationStart({ weather, player }) {
        if (weather !== Weather_1.Weather.BLOODMOON) {
            player.transformPokemon(this, Pokemon_1.Pkm.URSALUNA);
        }
    }
    onAcquired(player) {
        player.titles.add(types_1.Title.BLOODY);
    }
}
exports.UrsalunaBloodmoon = UrsalunaBloodmoon;
class Aipom extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WILD, Synergy_1.Synergy.NORMAL]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.AMBIPOM;
        this.hp = 70;
        this.atk = 7;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.TICKLE;
        this.attackSprite = types_1.AttackSprite.NORMAL_MELEE;
    }
}
exports.Aipom = Aipom;
class Ambipom extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WILD, Synergy_1.Synergy.NORMAL]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.hp = 130;
        this.atk = 14;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.TICKLE;
        this.attackSprite = types_1.AttackSprite.NORMAL_MELEE;
    }
}
exports.Ambipom = Ambipom;
class Deerling extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.NORMAL, Synergy_1.Synergy.GRASS]);
        this.rarity = Game_1.Rarity.RARE;
        this.additional = true;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.SAWSBUCK;
        this.hp = 80;
        this.atk = 8;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.AROMATHERAPY;
        this.attackSprite = types_1.AttackSprite.NORMAL_MELEE;
    }
}
exports.Deerling = Deerling;
class Sawsbuck extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.NORMAL, Synergy_1.Synergy.GRASS]);
        this.rarity = Game_1.Rarity.RARE;
        this.additional = true;
        this.stars = 2;
        this.hp = 180;
        this.atk = 14;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.AROMATHERAPY;
        this.attackSprite = types_1.AttackSprite.NORMAL_MELEE;
    }
}
exports.Sawsbuck = Sawsbuck;
class Patrat extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WILD, Synergy_1.Synergy.LIGHT]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.WATCHOG;
        this.hp = 80;
        this.atk = 8;
        this.def = 1;
        this.speDef = 1;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.DETECT;
        this.attackSprite = types_1.AttackSprite.ROCK_RANGE;
    }
}
exports.Patrat = Patrat;
class Watchog extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WILD, Synergy_1.Synergy.LIGHT]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.hp = 170;
        this.atk = 18;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.DETECT;
        this.attackSprite = types_1.AttackSprite.ROCK_RANGE;
    }
}
exports.Watchog = Watchog;
class Spinarak extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WILD, Synergy_1.Synergy.BUG, Synergy_1.Synergy.POISON]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.ARIADOS;
        this.hp = 60;
        this.atk = 6;
        this.def = 1;
        this.speDef = 1;
        this.maxPP = 70;
        this.range = 2;
        this.skill = Ability_1.Ability.STRING_SHOT;
        this.attackSprite = types_1.AttackSprite.POISON_RANGE;
    }
}
exports.Spinarak = Spinarak;
class Ariados extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WILD, Synergy_1.Synergy.BUG, Synergy_1.Synergy.POISON]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.hp = 150;
        this.atk = 14;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 70;
        this.range = 2;
        this.skill = Ability_1.Ability.STRING_SHOT;
        this.attackSprite = types_1.AttackSprite.POISON_RANGE;
    }
}
exports.Ariados = Ariados;
class Rockruff extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WILD, Synergy_1.Synergy.ROCK]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.LYCANROC_DUSK;
        this.hp = 90;
        this.atk = 14;
        this.def = 1;
        this.speDef = 1;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.ACCELEROCK;
        this.attackSprite = types_1.AttackSprite.NORMAL_MELEE;
    }
}
exports.Rockruff = Rockruff;
function updateLycanroc(pokemon, weather, player) {
    let weatherForm;
    if (weather === Weather_1.Weather.NIGHT) {
        weatherForm = Pokemon_1.Pkm.LYCANROC_NIGHT;
    }
    else if (weather === Weather_1.Weather.SUN) {
        weatherForm = Pokemon_1.Pkm.LYCANROC_DAY;
    }
    if (!weatherForm || pokemon.name === weatherForm)
        return;
    const newPokemon = pokemon_factory_1.default.createPokemonFromName(weatherForm, player);
    pokemon.items.forEach((item) => {
        newPokemon.items.add(item);
    });
    newPokemon.positionX = pokemon.positionX;
    newPokemon.positionY = pokemon.positionY;
    player.board.delete(pokemon.id);
    player.board.set(newPokemon.id, newPokemon);
    player.updateSynergies();
}
class LycanrocDusk extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WILD, Synergy_1.Synergy.ROCK]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.hp = 190;
        this.atk = 26;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.ACCELEROCK;
        this.passive = Passive_1.Passive.LYCANROC;
        this.attackSprite = types_1.AttackSprite.NORMAL_MELEE;
    }
    beforeSimulationStart({ weather, player }) {
        updateLycanroc(this, weather, player);
    }
}
exports.LycanrocDusk = LycanrocDusk;
class LycanrocNight extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WILD, Synergy_1.Synergy.ROCK, Synergy_1.Synergy.DARK]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.hp = 190;
        this.atk = 26;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.ACCELEROCK;
        this.passive = Passive_1.Passive.LYCANROC;
        this.attackSprite = types_1.AttackSprite.NORMAL_MELEE;
    }
    beforeSimulationStart({ weather, player }) {
        updateLycanroc(this, weather, player);
    }
}
exports.LycanrocNight = LycanrocNight;
class LycanrocDay extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WILD, Synergy_1.Synergy.ROCK, Synergy_1.Synergy.LIGHT]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.hp = 190;
        this.atk = 26;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.ACCELEROCK;
        this.passive = Passive_1.Passive.LYCANROC;
        this.attackSprite = types_1.AttackSprite.NORMAL_MELEE;
    }
    beforeSimulationStart({ weather, player }) {
        updateLycanroc(this, weather, player);
    }
}
exports.LycanrocDay = LycanrocDay;
class Druddigon extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.DRAGON,
            Synergy_1.Synergy.WILD,
            Synergy_1.Synergy.MONSTER
        ]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 170;
        this.atk = 18;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.OUTRAGE;
        this.attackSprite = types_1.AttackSprite.DRAGON_MELEE;
    }
}
exports.Druddigon = Druddigon;
class Cosmog extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.PSYCHIC, Synergy_1.Synergy.LIGHT]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.evolution = Pokemon_1.Pkm.COSMOEM;
        this.evolutionRule = new evolution_rules_1.ConditionBasedEvolutionRule((pokemon) => pokemon.hp >= 200);
        this.stars = 1;
        this.hp = 100;
        this.atk = 5;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 4;
        this.skill = Ability_1.Ability.TELEPORT;
        this.passive = Passive_1.Passive.COSMOG;
        this.attackSprite = types_1.AttackSprite.PSYCHIC_RANGE;
    }
}
exports.Cosmog = Cosmog;
class Cosmoem extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.PSYCHIC, Synergy_1.Synergy.LIGHT]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.evolution = Pokemon_1.Pkm.LUNALA;
        this.stars = 2;
        this.evolutionRule = new evolution_rules_1.ConditionBasedEvolutionRule((pokemon) => pokemon.hp >= 300, (pokemon, player) => {
            if (pokemon.positionX === player.lightX &&
                pokemon.positionY === player.lightY &&
                Synergy_1.SynergyEffects[Synergy_1.Synergy.LIGHT].some((e) => player.effects.has(e)))
                return Pokemon_1.Pkm.SOLGALEO;
            else
                return Pokemon_1.Pkm.LUNALA;
        });
        this.hp = 200;
        this.atk = 5;
        this.def = 8;
        this.speDef = 8;
        this.maxPP = 100;
        this.range = 4;
        this.skill = Ability_1.Ability.TELEPORT;
        this.passive = Passive_1.Passive.COSMOEM;
        this.attackSprite = types_1.AttackSprite.PSYCHIC_RANGE;
    }
    onAcquired(player) {
        this.hp = 200;
    }
}
exports.Cosmoem = Cosmoem;
class Solgaleo extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.PSYCHIC,
            Synergy_1.Synergy.LIGHT,
            Synergy_1.Synergy.STEEL
        ]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 300;
        this.atk = 25;
        this.def = 6;
        this.speDef = 4;
        this.maxPP = 120;
        this.range = 1;
        this.skill = Ability_1.Ability.SUNSTEEL_STRIKE;
        this.attackSprite = types_1.AttackSprite.STEEL_MELEE;
    }
    onAcquired(player) {
        this.hp = 300;
        player.titles.add(types_1.Title.STARGAZER);
    }
}
exports.Solgaleo = Solgaleo;
class Lunala extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.PSYCHIC,
            Synergy_1.Synergy.LIGHT,
            Synergy_1.Synergy.GHOST
        ]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 300;
        this.atk = 25;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 100;
        this.range = 4;
        this.skill = Ability_1.Ability.MOONGEIST_BEAM;
        this.attackSprite = types_1.AttackSprite.STEEL_MELEE;
    }
    onAcquired(player) {
        this.hp = 300;
        player.titles.add(types_1.Title.STARGAZER);
    }
}
exports.Lunala = Lunala;
class Magearna extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.STEEL,
            Synergy_1.Synergy.FAIRY,
            Synergy_1.Synergy.ARTIFICIAL
        ]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 300;
        this.atk = 25;
        this.def = 4;
        this.speDef = 8;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.FLEUR_CANNON;
        this.attackSprite = types_1.AttackSprite.FAIRY_MELEE;
        this.passive = Passive_1.Passive.SOUL_HEART;
    }
}
exports.Magearna = Magearna;
class Impidimp extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DARK, Synergy_1.Synergy.FAIRY, Synergy_1.Synergy.HUMAN]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.MORGREM;
        this.hp = 60;
        this.atk = 6;
        this.def = 1;
        this.speDef = 2;
        this.maxPP = 70;
        this.range = 1;
        this.skill = Ability_1.Ability.SPIRIT_BREAK;
        this.attackSprite = types_1.AttackSprite.DARK_MELEE;
        this.regional = true;
    }
}
exports.Impidimp = Impidimp;
class Morgrem extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DARK, Synergy_1.Synergy.FAIRY, Synergy_1.Synergy.HUMAN]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.GRIMMSNARL;
        this.hp = 110;
        this.atk = 12;
        this.def = 2;
        this.speDef = 3;
        this.maxPP = 70;
        this.range = 1;
        this.skill = Ability_1.Ability.SPIRIT_BREAK;
        this.attackSprite = types_1.AttackSprite.DARK_MELEE;
        this.regional = true;
    }
}
exports.Morgrem = Morgrem;
class Grimmsnarl extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DARK, Synergy_1.Synergy.FAIRY, Synergy_1.Synergy.HUMAN]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 3;
        this.hp = 200;
        this.atk = 24;
        this.def = 3;
        this.speDef = 4;
        this.maxPP = 70;
        this.range = 1;
        this.skill = Ability_1.Ability.SPIRIT_BREAK;
        this.attackSprite = types_1.AttackSprite.DARK_MELEE;
        this.regional = true;
    }
}
exports.Grimmsnarl = Grimmsnarl;
class Drowzee extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.HUMAN,
            Synergy_1.Synergy.PSYCHIC,
            Synergy_1.Synergy.MONSTER
        ]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.HYPNO;
        this.hp = 100;
        this.atk = 7;
        this.def = 2;
        this.speDef = 3;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.DREAM_EATER;
        this.attackSprite = types_1.AttackSprite.PSYCHIC_RANGE;
        this.regional = true;
    }
}
exports.Drowzee = Drowzee;
class Hypno extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.HUMAN,
            Synergy_1.Synergy.PSYCHIC,
            Synergy_1.Synergy.MONSTER
        ]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.hp = 250;
        this.atk = 14;
        this.def = 4;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.DREAM_EATER;
        this.attackSprite = types_1.AttackSprite.PSYCHIC_RANGE;
        this.regional = true;
    }
}
exports.Hypno = Hypno;
class Wattrel extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FLYING, Synergy_1.Synergy.ELECTRIC]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.KILOWATTREL;
        this.hp = 90;
        this.atk = 9;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.SPARK;
        this.attackSprite = types_1.AttackSprite.ELECTRIC_RANGE;
        this.additional = true;
        this.passive = Passive_1.Passive.WIND_POWER;
    }
}
exports.Wattrel = Wattrel;
class Kilowattrel extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FLYING, Synergy_1.Synergy.ELECTRIC]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.hp = 190;
        this.atk = 19;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.SPARK;
        this.attackSprite = types_1.AttackSprite.ELECTRIC_RANGE;
        this.additional = true;
        this.passive = Passive_1.Passive.WIND_POWER;
    }
}
exports.Kilowattrel = Kilowattrel;
class BurmyPlant extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.BUG, Synergy_1.Synergy.GRASS]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.WORMADAM_PLANT;
        this.hp = 70;
        this.atk = 7;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.QUIVER_DANCE;
        this.attackSprite = types_1.AttackSprite.GRASS_RANGE;
        this.passive = Passive_1.Passive.ENVIRONMENTAL_ADAPTATION;
        this.stages = 3;
        this.regional = true;
    }
    isInRegion(map, state) {
        var _a;
        const regionSynergies = (_a = Dungeon_1.DungeonDetails[map]) === null || _a === void 0 ? void 0 : _a.synergies;
        return regionSynergies.includes(Synergy_1.Synergy.GRASS);
    }
}
exports.BurmyPlant = BurmyPlant;
class BurmySandy extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.BUG, Synergy_1.Synergy.GROUND]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.WORMADAM_SANDY;
        this.hp = 70;
        this.atk = 7;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.QUIVER_DANCE;
        this.attackSprite = types_1.AttackSprite.ROCK_RANGE;
        this.passive = Passive_1.Passive.ENVIRONMENTAL_ADAPTATION;
        this.stages = 3;
        this.regional = true;
    }
    isInRegion(map, state) {
        var _a;
        const regionSynergies = (_a = Dungeon_1.DungeonDetails[map]) === null || _a === void 0 ? void 0 : _a.synergies;
        return (regionSynergies.includes(Synergy_1.Synergy.GROUND) &&
            !regionSynergies.includes(Synergy_1.Synergy.GRASS));
    }
}
exports.BurmySandy = BurmySandy;
class BurmyTrash extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.BUG, Synergy_1.Synergy.ARTIFICIAL]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.WORMADAM_TRASH;
        this.hp = 70;
        this.atk = 7;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.QUIVER_DANCE;
        this.attackSprite = types_1.AttackSprite.POISON_RANGE;
        this.passive = Passive_1.Passive.ENVIRONMENTAL_ADAPTATION;
        this.stages = 3;
        this.regional = true;
    }
    isInRegion(map, state) {
        var _a;
        const regionSynergies = (_a = Dungeon_1.DungeonDetails[map]) === null || _a === void 0 ? void 0 : _a.synergies;
        return (regionSynergies.includes(Synergy_1.Synergy.ARTIFICIAL) &&
            !regionSynergies.includes(Synergy_1.Synergy.GROUND) &&
            !regionSynergies.includes(Synergy_1.Synergy.GRASS));
    }
}
exports.BurmyTrash = BurmyTrash;
class WormadamPlant extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.BUG, Synergy_1.Synergy.GRASS]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.MOTHIM;
        this.hp = 150;
        this.atk = 13;
        this.def = 3;
        this.speDef = 5;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.QUIVER_DANCE;
        this.attackSprite = types_1.AttackSprite.GRASS_RANGE;
        this.passive = Passive_1.Passive.ENVIRONMENTAL_ADAPTATION;
        this.stages = 3;
        this.regional = true;
        this.afterEvolve = evolveMothim;
    }
    isInRegion(map, state) {
        var _a;
        const regionSynergies = (_a = Dungeon_1.DungeonDetails[map]) === null || _a === void 0 ? void 0 : _a.synergies;
        return regionSynergies.includes(Synergy_1.Synergy.GRASS);
    }
}
exports.WormadamPlant = WormadamPlant;
class WormadamSandy extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.BUG, Synergy_1.Synergy.GROUND]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.MOTHIM;
        this.hp = 150;
        this.atk = 13;
        this.def = 3;
        this.speDef = 5;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.QUIVER_DANCE;
        this.attackSprite = types_1.AttackSprite.ROCK_RANGE;
        this.passive = Passive_1.Passive.ENVIRONMENTAL_ADAPTATION;
        this.stages = 3;
        this.regional = true;
        this.afterEvolve = evolveMothim;
    }
    isInRegion(map, state) {
        var _a;
        const regionSynergies = (_a = Dungeon_1.DungeonDetails[map]) === null || _a === void 0 ? void 0 : _a.synergies;
        return (regionSynergies.includes(Synergy_1.Synergy.GROUND) &&
            !regionSynergies.includes(Synergy_1.Synergy.GRASS));
    }
}
exports.WormadamSandy = WormadamSandy;
class WormadamTrash extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.BUG, Synergy_1.Synergy.ARTIFICIAL]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.MOTHIM;
        this.hp = 150;
        this.atk = 13;
        this.def = 3;
        this.speDef = 5;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.QUIVER_DANCE;
        this.attackSprite = types_1.AttackSprite.POISON_RANGE;
        this.passive = Passive_1.Passive.ENVIRONMENTAL_ADAPTATION;
        this.stages = 3;
        this.regional = true;
        this.afterEvolve = evolveMothim;
    }
    isInRegion(map, state) {
        var _a;
        const regionSynergies = (_a = Dungeon_1.DungeonDetails[map]) === null || _a === void 0 ? void 0 : _a.synergies;
        return (regionSynergies.includes(Synergy_1.Synergy.ARTIFICIAL) &&
            !regionSynergies.includes(Synergy_1.Synergy.GROUND) &&
            !regionSynergies.includes(Synergy_1.Synergy.GRASS));
    }
}
exports.WormadamTrash = WormadamTrash;
class Mothim extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.BUG, Synergy_1.Synergy.FLYING]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 3;
        this.hp = 200;
        this.atk = 20;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 80;
        this.range = 2;
        this.skill = Ability_1.Ability.QUIVER_DANCE;
        this.attackSprite = types_1.AttackSprite.POISON_RANGE;
        this.passive = Passive_1.Passive.MOTHIM;
        this.stages = 3;
        this.regional = true;
    }
    isInRegion(map, state) {
        return false;
    }
}
exports.Mothim = Mothim;
class PaldeaWooper extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.POISON,
            Synergy_1.Synergy.GROUND,
            Synergy_1.Synergy.AQUATIC
        ]);
        this.rarity = Game_1.Rarity.RARE;
        this.evolution = Pokemon_1.Pkm.CLODSIRE;
        this.stars = 1;
        this.hp = 80;
        this.atk = 5;
        this.def = 3;
        this.speDef = 5;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.RECOVER;
        this.attackSprite = types_1.AttackSprite.POISON_MELEE;
        this.regional = true;
    }
}
exports.PaldeaWooper = PaldeaWooper;
class Clodsire extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.POISON,
            Synergy_1.Synergy.GROUND,
            Synergy_1.Synergy.AQUATIC
        ]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.hp = 190;
        this.atk = 10;
        this.def = 5;
        this.speDef = 8;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.RECOVER;
        this.attackSprite = types_1.AttackSprite.POISON_MELEE;
        this.regional = true;
    }
}
exports.Clodsire = Clodsire;
class Tangela extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.GRASS,
            Synergy_1.Synergy.MONSTER,
            Synergy_1.Synergy.FOSSIL
        ]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.evolution = Pokemon_1.Pkm.TANGROWTH;
        this.stars = 1;
        this.hp = 100;
        this.atk = 3;
        this.def = 4;
        this.speDef = 2;
        this.maxPP = 120;
        this.range = 1;
        this.skill = Ability_1.Ability.POWER_WHIP;
        this.attackSprite = types_1.AttackSprite.GRASS_MELEE;
        this.additional = true;
    }
}
exports.Tangela = Tangela;
class Tangrowth extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.GRASS,
            Synergy_1.Synergy.MONSTER,
            Synergy_1.Synergy.FOSSIL
        ]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.hp = 190;
        this.atk = 13;
        this.def = 6;
        this.speDef = 2;
        this.maxPP = 120;
        this.range = 1;
        this.skill = Ability_1.Ability.POWER_WHIP;
        this.attackSprite = types_1.AttackSprite.GRASS_MELEE;
        this.additional = true;
    }
}
exports.Tangrowth = Tangrowth;
class Phanpy extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WILD, Synergy_1.Synergy.GROUND, Synergy_1.Synergy.BABY]);
        this.rarity = Game_1.Rarity.RARE;
        this.evolution = Pokemon_1.Pkm.DONPHAN;
        this.stars = 1;
        this.hp = 80;
        this.atk = 5;
        this.def = 4;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.RAPID_SPIN;
        this.attackSprite = types_1.AttackSprite.ROCK_MELEE;
    }
}
exports.Phanpy = Phanpy;
class Donphan extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WILD, Synergy_1.Synergy.GROUND]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.hp = 180;
        this.atk = 10;
        this.def = 6;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.RAPID_SPIN;
        this.attackSprite = types_1.AttackSprite.ROCK_MELEE;
    }
}
exports.Donphan = Donphan;
class Spoink extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.PSYCHIC, Synergy_1.Synergy.FIELD]);
        this.rarity = Game_1.Rarity.RARE;
        this.evolution = Pokemon_1.Pkm.GRUMPIG;
        this.stars = 1;
        this.hp = 100;
        this.atk = 5;
        this.def = 4;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.BOUNCE;
        this.attackSprite = types_1.AttackSprite.PSYCHIC_MELEE;
        this.regional = true;
    }
}
exports.Spoink = Spoink;
class Grumpig extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.PSYCHIC, Synergy_1.Synergy.FIELD]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.hp = 240;
        this.atk = 10;
        this.def = 6;
        this.speDef = 10;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.BOUNCE;
        this.attackSprite = types_1.AttackSprite.PSYCHIC_MELEE;
        this.regional = true;
    }
}
exports.Grumpig = Grumpig;
class Sinistea extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GHOST, Synergy_1.Synergy.ARTIFICIAL]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.POLTEAGEIST;
        this.hp = 80;
        this.atk = 4;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.TEA_TIME;
        this.attackSprite = types_1.AttackSprite.GHOST_RANGE;
        this.additional = true;
    }
}
exports.Sinistea = Sinistea;
class Polteageist extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GHOST, Synergy_1.Synergy.ARTIFICIAL]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.hp = 180;
        this.atk = 9;
        this.def = 5;
        this.speDef = 5;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.TEA_TIME;
        this.attackSprite = types_1.AttackSprite.GHOST_RANGE;
        this.additional = true;
    }
}
exports.Polteageist = Polteageist;
class Ferroseed extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GRASS, Synergy_1.Synergy.STEEL]);
        this.rarity = Game_1.Rarity.EPIC;
        this.evolution = Pokemon_1.Pkm.FERROTHORN;
        this.stars = 1;
        this.hp = 100;
        this.atk = 7;
        this.def = 7;
        this.speDef = 7;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.SPIKES;
        this.attackSprite = types_1.AttackSprite.GRASS_MELEE;
        this.additional = true;
    }
}
exports.Ferroseed = Ferroseed;
class Ferrothorn extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GRASS, Synergy_1.Synergy.STEEL]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.hp = 220;
        this.atk = 14;
        this.def = 14;
        this.speDef = 14;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.SPIKES;
        this.attackSprite = types_1.AttackSprite.GRASS_MELEE;
        this.additional = true;
    }
}
exports.Ferrothorn = Ferrothorn;
class Golett extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.GROUND,
            Synergy_1.Synergy.ARTIFICIAL,
            Synergy_1.Synergy.GHOST
        ]);
        this.rarity = Game_1.Rarity.RARE;
        this.evolution = Pokemon_1.Pkm.GOLURK;
        this.stars = 1;
        this.hp = 80;
        this.atk = 7;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.SHADOW_PUNCH;
        this.attackSprite = types_1.AttackSprite.NORMAL_MELEE;
        this.additional = true;
    }
}
exports.Golett = Golett;
class Golurk extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.GROUND,
            Synergy_1.Synergy.ARTIFICIAL,
            Synergy_1.Synergy.GHOST
        ]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.hp = 180;
        this.atk = 20;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.SHADOW_PUNCH;
        this.attackSprite = types_1.AttackSprite.NORMAL_MELEE;
        this.additional = true;
    }
}
exports.Golurk = Golurk;
class Trubbish extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.POISON, Synergy_1.Synergy.ARTIFICIAL]);
        this.rarity = Game_1.Rarity.EPIC;
        this.evolution = Pokemon_1.Pkm.GARBODOR;
        this.stars = 1;
        this.hp = 110;
        this.atk = 8;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.GUNK_SHOT;
        this.passive = Passive_1.Passive.RECYCLE;
        this.attackSprite = types_1.AttackSprite.POISON_MELEE;
        this.additional = true;
        this.statIncreases = {
            [Game_1.Stat.ATK_SPEED]: 0,
            [Game_1.Stat.AP]: 0,
            [Game_1.Stat.CRIT_CHANCE]: 0,
            [Game_1.Stat.PP]: 0,
            [Game_1.Stat.SHIELD]: 0,
            [Game_1.Stat.ATK]: 0,
            [Game_1.Stat.SPE_DEF]: 0,
            [Game_1.Stat.DEF]: 0
        };
    }
    beforeSimulationStart({ player }) {
        (0, schemas_1.values)(this.items).forEach((item) => {
            if (Item_1.Berries.includes(item)) {
                this.hp += 10;
                this.items.delete(item);
            }
            if (Item_1.ItemComponents.includes(item)) {
                this.hp += 25;
                if (Config_1.ItemStats[item]) {
                    Object.entries(Config_1.ItemStats[item]).forEach(([stat, value]) => {
                        if (stat in this.statIncreases) {
                            this.statIncreases[stat] += value;
                        }
                    });
                }
                this.items.delete(item);
            }
            if (Item_1.ArtificialItems.includes(item)) {
                this.hp += 50;
                if (Config_1.ItemStats[item]) {
                    Object.entries(Config_1.ItemStats[item]).forEach(([stat, value]) => {
                        if (stat in this.statIncreases) {
                            this.statIncreases[stat] += value;
                        }
                    });
                }
                this.items.delete(item);
                const itemIndex = player.artificialItems.indexOf(item);
                player.artificialItems[itemIndex] = Item_1.Item.TRASH;
                player.items.push(player.artificialItems[itemIndex]);
            }
        });
    }
    onSpawn({ entity }) {
        entity.addAbilityPower(this.statIncreases[Game_1.Stat.AP], entity, 0, false);
        entity.addShield(this.statIncreases[Game_1.Stat.SHIELD], entity, 0, false);
        entity.addCritChance(this.statIncreases[Game_1.Stat.CRIT_CHANCE], entity, 0, false);
        entity.addPP(this.statIncreases[Game_1.Stat.PP], entity, 0, false);
        entity.addAttackSpeed(this.statIncreases[Game_1.Stat.ATK_SPEED], entity, 0, false);
        entity.addAttack(this.statIncreases[Game_1.Stat.ATK], entity, 0, false);
        entity.addSpecialDefense(this.statIncreases[Game_1.Stat.SPE_DEF], entity, 0, false);
        entity.addDefense(this.statIncreases[Game_1.Stat.DEF], entity, 0, false);
    }
    afterEvolve({ pokemonEvolved: garbodorObj, pokemonsBeforeEvolution: trubbishes }) {
        const garbodor = garbodorObj;
        garbodor.statIncreases = {
            [Game_1.Stat.ATK_SPEED]: 0,
            [Game_1.Stat.AP]: 0,
            [Game_1.Stat.CRIT_CHANCE]: 0,
            [Game_1.Stat.PP]: 0,
            [Game_1.Stat.SHIELD]: 0,
            [Game_1.Stat.ATK]: 0,
            [Game_1.Stat.SPE_DEF]: 0,
            [Game_1.Stat.DEF]: 0
        };
        trubbishes.forEach((trubbishObj) => {
            const trubbish = trubbishObj;
            for (const key in garbodor.statIncreases) {
                garbodor.statIncreases[key] += trubbish.statIncreases[key];
            }
        });
    }
}
exports.Trubbish = Trubbish;
class Garbodor extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.POISON, Synergy_1.Synergy.ARTIFICIAL]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.hp = 230;
        this.atk = 15;
        this.def = 5;
        this.speDef = 5;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.GUNK_SHOT;
        this.passive = Passive_1.Passive.RECYCLE;
        this.attackSprite = types_1.AttackSprite.POISON_MELEE;
        this.additional = true;
        this.statIncreases = {
            [Game_1.Stat.ATK_SPEED]: 0,
            [Game_1.Stat.AP]: 0,
            [Game_1.Stat.CRIT_CHANCE]: 0,
            [Game_1.Stat.PP]: 0,
            [Game_1.Stat.SHIELD]: 0,
            [Game_1.Stat.ATK]: 0,
            [Game_1.Stat.SPE_DEF]: 0,
            [Game_1.Stat.DEF]: 0
        };
        this.defaultValues = {
            [Game_1.Stat.HP]: this.hp,
            [Game_1.Stat.ATK]: this.atk,
            [Game_1.Stat.DEF]: this.def,
            [Game_1.Stat.SPE_DEF]: this.speDef
        };
        this.beforeSimulationStart = Trubbish.prototype.beforeSimulationStart;
        this.onSpawn = Trubbish.prototype.onSpawn;
    }
}
exports.Garbodor = Garbodor;
class Grubbin extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.BUG, Synergy_1.Synergy.ELECTRIC]);
        this.rarity = Game_1.Rarity.HATCH;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.CHARJABUG;
        this.evolutionRule = new evolution_rules_1.HatchEvolutionRule(Config_1.EvolutionTime.EVOLVE_HATCH);
        this.hp = 80;
        this.atk = 6;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 80;
        this.range = 3;
        this.skill = Ability_1.Ability.ZAP_CANNON;
        this.passive = Passive_1.Passive.HATCH;
        this.attackSprite = types_1.AttackSprite.ELECTRIC_RANGE;
    }
}
exports.Grubbin = Grubbin;
class Charjabug extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.BUG, Synergy_1.Synergy.ELECTRIC]);
        this.rarity = Game_1.Rarity.HATCH;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.VIKAVOLT;
        this.evolutionRule = new evolution_rules_1.HatchEvolutionRule(Config_1.EvolutionTime.EVOLVE_HATCH);
        this.hp = 140;
        this.atk = 13;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 80;
        this.range = 3;
        this.skill = Ability_1.Ability.ZAP_CANNON;
        this.passive = Passive_1.Passive.HATCH;
        this.attackSprite = types_1.AttackSprite.ELECTRIC_RANGE;
    }
}
exports.Charjabug = Charjabug;
class Vikavolt extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.BUG, Synergy_1.Synergy.ELECTRIC]);
        this.rarity = Game_1.Rarity.HATCH;
        this.stars = 3;
        this.hp = 190;
        this.atk = 25;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 80;
        this.range = 3;
        this.skill = Ability_1.Ability.ZAP_CANNON;
        this.attackSprite = types_1.AttackSprite.ELECTRIC_RANGE;
    }
}
exports.Vikavolt = Vikavolt;
class ShellosWestSea extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.WATER,
            Synergy_1.Synergy.GROUND,
            Synergy_1.Synergy.AMORPHOUS
        ]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.GASTRODON_WEST_SEA;
        this.hp = 120;
        this.atk = 8;
        this.def = 3;
        this.speDef = 5;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.MUDDY_WATER;
        this.attackSprite = types_1.AttackSprite.WATER_MELEE;
        this.regional = true;
    }
    isInRegion(map, state) {
        var _a;
        const regionSynergies = (_a = Dungeon_1.DungeonDetails[map]) === null || _a === void 0 ? void 0 : _a.synergies;
        return (regionSynergies.includes(Synergy_1.Synergy.WATER) ||
            regionSynergies.includes(Synergy_1.Synergy.GROUND));
    }
}
exports.ShellosWestSea = ShellosWestSea;
class GastrodonWestSea extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.WATER,
            Synergy_1.Synergy.GROUND,
            Synergy_1.Synergy.AMORPHOUS
        ]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.hp = 270;
        this.atk = 18;
        this.def = 5;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.MUDDY_WATER;
        this.attackSprite = types_1.AttackSprite.WATER_MELEE;
        this.regional = true;
    }
    isInRegion(map, state) {
        var _a;
        const regionSynergies = (_a = Dungeon_1.DungeonDetails[map]) === null || _a === void 0 ? void 0 : _a.synergies;
        return (regionSynergies.includes(Synergy_1.Synergy.WATER) ||
            regionSynergies.includes(Synergy_1.Synergy.GROUND));
    }
}
exports.GastrodonWestSea = GastrodonWestSea;
class ShellosEastSea extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.AQUATIC,
            Synergy_1.Synergy.ROCK,
            Synergy_1.Synergy.AMORPHOUS
        ]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.GASTRODON_EAST_SEA;
        this.hp = 120;
        this.atk = 8;
        this.def = 3;
        this.speDef = 5;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.ANCIENT_POWER;
        this.attackSprite = types_1.AttackSprite.WATER_MELEE;
        this.regional = true;
    }
    isInRegion(map, state) {
        var _a;
        const regionSynergies = (_a = Dungeon_1.DungeonDetails[map]) === null || _a === void 0 ? void 0 : _a.synergies;
        return ((regionSynergies.includes(Synergy_1.Synergy.AQUATIC) ||
            regionSynergies.includes(Synergy_1.Synergy.ROCK)) &&
            !(regionSynergies.includes(Synergy_1.Synergy.GROUND) ||
                regionSynergies.includes(Synergy_1.Synergy.WATER)));
    }
}
exports.ShellosEastSea = ShellosEastSea;
class GastrodonEastSea extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.AQUATIC,
            Synergy_1.Synergy.ROCK,
            Synergy_1.Synergy.AMORPHOUS
        ]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.hp = 270;
        this.atk = 18;
        this.def = 5;
        this.speDef = 6;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.ANCIENT_POWER;
        this.attackSprite = types_1.AttackSprite.WATER_MELEE;
        this.regional = true;
    }
    isInRegion(map, state) {
        var _a;
        const regionSynergies = (_a = Dungeon_1.DungeonDetails[map]) === null || _a === void 0 ? void 0 : _a.synergies;
        return ((regionSynergies.includes(Synergy_1.Synergy.AQUATIC) ||
            regionSynergies.includes(Synergy_1.Synergy.ROCK)) &&
            !(regionSynergies.includes(Synergy_1.Synergy.GROUND) ||
                regionSynergies.includes(Synergy_1.Synergy.WATER)));
    }
}
exports.GastrodonEastSea = GastrodonEastSea;
class Rufflet extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WILD, Synergy_1.Synergy.FLYING]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.BRAVIARY;
        this.hp = 70;
        this.atk = 7;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.CRUSH_CLAW;
        this.regional = true;
        this.attackSprite = types_1.AttackSprite.FLYING_MELEE;
    }
}
exports.Rufflet = Rufflet;
class Braviary extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WILD, Synergy_1.Synergy.FLYING]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.hp = 160;
        this.atk = 16;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.CRUSH_CLAW;
        this.regional = true;
        this.attackSprite = types_1.AttackSprite.FLYING_MELEE;
    }
}
exports.Braviary = Braviary;
class Klefki extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.STEEL,
            Synergy_1.Synergy.FAIRY,
            Synergy_1.Synergy.ARTIFICIAL
        ]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 150;
        this.atk = 16;
        this.def = 4;
        this.speDef = 3;
        this.maxPP = 90;
        this.range = 3;
        this.skill = Ability_1.Ability.FAIRY_LOCK;
        this.attackSprite = types_1.AttackSprite.FAIRY_RANGE;
    }
}
exports.Klefki = Klefki;
class Hawlucha extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.FIGHTING,
            Synergy_1.Synergy.FLYING,
            Synergy_1.Synergy.HUMAN
        ]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 180;
        this.atk = 20;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.FLYING_PRESS;
        this.attackSprite = types_1.AttackSprite.FIGHTING_MELEE;
    }
}
exports.Hawlucha = Hawlucha;
class Stonjourner extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.ROCK, Synergy_1.Synergy.GROUND, Synergy_1.Synergy.LIGHT]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 200;
        this.atk = 20;
        this.def = 10;
        this.speDef = 1;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.GRAVITY;
        this.passive = Passive_1.Passive.STONJOURNER;
        this.attackSprite = types_1.AttackSprite.ROCK_MELEE;
    }
    onSpawn({ entity }) {
        entity.status.tree = true;
        entity.toIdleState();
    }
    afterSimulationStart({ entity, simulation }) {
        simulation.board
            .getAdjacentCells(entity.positionX, entity.positionY)
            .forEach((cell) => {
            if (cell.value && cell.value.team === entity.team) {
                cell.value.addAbilityPower(50, cell.value, 0, false);
            }
        });
    }
}
exports.Stonjourner = Stonjourner;
class Cramorant extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FLYING, Synergy_1.Synergy.AQUATIC]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 200;
        this.atk = 20;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.GULP_MISSILE;
        this.attackSprite = types_1.AttackSprite.FLYING_RANGE;
    }
}
exports.Cramorant = Cramorant;
class Arrokuda extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WATER]);
        this.rarity = Game_1.Rarity.SPECIAL;
        this.stars = 1;
        this.hp = 80;
        this.atk = 10;
        this.def = 1;
        this.speDef = 1;
        this.maxPP = 140;
        this.range = 1;
        this.skill = Ability_1.Ability.AQUA_JET;
        this.attackSprite = types_1.AttackSprite.WATER_MELEE;
    }
}
exports.Arrokuda = Arrokuda;
class Durant extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.STEEL, Synergy_1.Synergy.BUG]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 190;
        this.atk = 22;
        this.def = 6;
        this.speDef = 2;
        this.maxPP = 90;
        this.range = 1;
        this.skill = Ability_1.Ability.INFESTATION;
        this.attackSprite = types_1.AttackSprite.BUG_MELEE;
        this.passive = Passive_1.Passive.DURANT;
    }
}
exports.Durant = Durant;
class Wishiwashi extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WATER]);
        this.rarity = Game_1.Rarity.SPECIAL;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.WISHIWASHI_SCHOOL;
        this.hp = 100;
        this.atk = 10;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.AQUA_JET;
        this.attackSprite = types_1.AttackSprite.WATER_MELEE;
        this.passive = Passive_1.Passive.WISHIWASHI;
        this.evolutionRule = new evolution_rules_1.CountEvolutionRule(3);
    }
}
exports.Wishiwashi = Wishiwashi;
class WishiwashiSchool extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.WATER,
            Synergy_1.Synergy.MONSTER,
            Synergy_1.Synergy.AMORPHOUS
        ]);
        this.rarity = Game_1.Rarity.SPECIAL;
        this.stars = 3;
        this.evolution = Pokemon_1.Pkm.WISHIWASHI_SCHOOL;
        this.hp = 300;
        this.atk = 20;
        this.def = 5;
        this.speDef = 5;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.SCHOOLING;
        this.attackSprite = types_1.AttackSprite.WATER_MELEE;
    }
    onAcquired(player) {
        player.titles.add(types_1.Title.FEARSOME);
    }
}
exports.WishiwashiSchool = WishiwashiSchool;
class Pawmi extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.ELECTRIC, Synergy_1.Synergy.FIGHTING]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.PAWMO;
        this.hp = 80;
        this.atk = 7;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.DOUBLE_SHOCK;
        this.attackSprite = types_1.AttackSprite.ELECTRIC_MELEE;
        this.regional = true;
    }
}
exports.Pawmi = Pawmi;
class Pawmo extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.ELECTRIC, Synergy_1.Synergy.FIGHTING]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.PAWMOT;
        this.hp = 150;
        this.atk = 15;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.DOUBLE_SHOCK;
        this.attackSprite = types_1.AttackSprite.ELECTRIC_MELEE;
        this.regional = true;
    }
}
exports.Pawmo = Pawmo;
class Pawmot extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.ELECTRIC, Synergy_1.Synergy.FIGHTING]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 3;
        this.hp = 240;
        this.atk = 35;
        this.def = 5;
        this.speDef = 5;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.DOUBLE_SHOCK;
        this.attackSprite = types_1.AttackSprite.ELECTRIC_MELEE;
        this.regional = true;
    }
}
exports.Pawmot = Pawmot;
class Pyukumuku extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.WATER,
            Synergy_1.Synergy.POISON,
            Synergy_1.Synergy.AMORPHOUS
        ]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 150;
        this.atk = 8;
        this.def = 7;
        this.speDef = 7;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.PURIFY;
        this.passive = Passive_1.Passive.PYUKUMUKU;
        this.attackSprite = types_1.AttackSprite.WATER_MELEE;
    }
}
exports.Pyukumuku = Pyukumuku;
class Goldeen extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WATER, Synergy_1.Synergy.NORMAL]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.SEAKING;
        this.hp = 90;
        this.atk = 8;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.WATERFALL;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.WATER_MELEE;
    }
}
exports.Goldeen = Goldeen;
class Seaking extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WATER, Synergy_1.Synergy.NORMAL]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.hp = 250;
        this.atk = 16;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.WATERFALL;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.WATER_MELEE;
    }
}
exports.Seaking = Seaking;
class Luvdisc extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WATER, Synergy_1.Synergy.AQUATIC]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 150;
        this.atk = 15;
        this.def = 3;
        this.speDef = 5;
        this.maxPP = 60;
        this.range = 3;
        this.skill = Ability_1.Ability.CHARM;
        this.attackSprite = types_1.AttackSprite.WATER_RANGE;
        this.passive = Passive_1.Passive.LUVDISC;
    }
}
exports.Luvdisc = Luvdisc;
class Audino extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.NORMAL, Synergy_1.Synergy.SOUND]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 200;
        this.atk = 16;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 80;
        this.range = 2;
        this.skill = Ability_1.Ability.ENTRAINMENT;
        this.attackSprite = types_1.AttackSprite.SOUND_RANGE;
    }
}
exports.Audino = Audino;
class Petilil extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GRASS, Synergy_1.Synergy.FLORA, Synergy_1.Synergy.HUMAN]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.evolution = Pokemon_1.Pkm.LILIGANT;
        this.stars = 1;
        this.hp = 85;
        this.atk = 5;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.AROMATHERAPY;
        this.attackSprite = types_1.AttackSprite.GRASS_MELEE;
        this.additional = true;
    }
}
exports.Petilil = Petilil;
class Lilligant extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GRASS, Synergy_1.Synergy.FLORA, Synergy_1.Synergy.HUMAN]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.hp = 180;
        this.atk = 10;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.AROMATHERAPY;
        this.attackSprite = types_1.AttackSprite.GRASS_MELEE;
        this.additional = true;
    }
}
exports.Lilligant = Lilligant;
class Mantyke extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.BABY, Synergy_1.Synergy.WATER, Synergy_1.Synergy.FLYING]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.evolution = Pokemon_1.Pkm.MANTINE;
        this.evolutionRule = new evolution_rules_1.ConditionBasedEvolutionRule((pokemon, player) => {
            for (const p of player.board.values()) {
                if (p.name === Pokemon_1.Pkm.REMORAID &&
                    !(0, board_1.isOnBench)(p) &&
                    !(0, board_1.isOnBench)(this) &&
                    (0, distance_1.distanceC)(this.positionX, this.positionY, p.positionX, p.positionY) === 1) {
                    return true;
                }
            }
            return false;
        });
        this.stars = 2;
        this.hp = 160;
        this.atk = 6;
        this.def = 3;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.BOUNCE;
        this.attackSprite = types_1.AttackSprite.WATER_RANGE;
        this.passive = Passive_1.Passive.MANTYKE;
    }
    onChangePosition(x, y, player) {
        this.evolutionRule.tryEvolve(this, player, 0);
    }
}
exports.Mantyke = Mantyke;
class Mantine extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WATER, Synergy_1.Synergy.FLYING]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 230;
        this.atk = 12;
        this.def = 4;
        this.speDef = 8;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.BOUNCE;
        this.attackSprite = types_1.AttackSprite.WATER_RANGE;
        this.passive = Passive_1.Passive.MANTINE;
    }
}
exports.Mantine = Mantine;
class Remoraid extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WILD, Synergy_1.Synergy.WATER]);
        this.rarity = Game_1.Rarity.SPECIAL;
        this.evolution = Pokemon_1.Pkm.OCTILLERY;
        this.stars = 1;
        this.hp = 60;
        this.atk = 12;
        this.def = 2;
        this.speDef = 1;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.AQUA_JET;
        this.attackSprite = types_1.AttackSprite.WATER_MELEE;
    }
    onChangePosition(x, y, player) {
        for (const pokemon of player.board.values()) {
            if (pokemon.name === Pokemon_1.Pkm.MANTYKE) {
                pokemon.evolutionRule.tryEvolve(pokemon, player, 0);
            }
        }
    }
}
exports.Remoraid = Remoraid;
class Octillery extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WILD, Synergy_1.Synergy.WATER]);
        this.rarity = Game_1.Rarity.SPECIAL;
        this.stars = 2;
        this.hp = 150;
        this.atk = 24;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 100;
        this.range = 3;
        this.skill = Ability_1.Ability.OKTZOOKA;
        this.attackSprite = types_1.AttackSprite.WATER_RANGE;
    }
}
exports.Octillery = Octillery;
class Sigilyph extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.PSYCHIC,
            Synergy_1.Synergy.FLYING,
            Synergy_1.Synergy.FOSSIL
        ]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 200;
        this.atk = 16;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 100;
        this.range = 3;
        this.skill = Ability_1.Ability.PSYCHO_SHIFT;
        this.attackSprite = types_1.AttackSprite.PSYCHIC_RANGE;
    }
}
exports.Sigilyph = Sigilyph;
class Frigibax extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DRAGON, Synergy_1.Synergy.ICE]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.ARCTIBAX;
        this.hp = 70;
        this.atk = 6;
        this.def = 2;
        this.speDef = 1;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.GLAIVE_RUSH;
        this.attackSprite = types_1.AttackSprite.DRAGON_MELEE;
        this.regional = true;
    }
}
exports.Frigibax = Frigibax;
class Arctibax extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DRAGON, Synergy_1.Synergy.ICE]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.BAXCALIBUR;
        this.hp = 140;
        this.atk = 12;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.GLAIVE_RUSH;
        this.attackSprite = types_1.AttackSprite.DRAGON_MELEE;
        this.regional = true;
    }
}
exports.Arctibax = Arctibax;
class Baxcalibur extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DRAGON, Synergy_1.Synergy.ICE]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 3;
        this.hp = 230;
        this.atk = 24;
        this.def = 3;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.GLAIVE_RUSH;
        this.attackSprite = types_1.AttackSprite.DRAGON_MELEE;
        this.regional = true;
    }
}
exports.Baxcalibur = Baxcalibur;
class Sandile extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.DARK,
            Synergy_1.Synergy.GROUND,
            Synergy_1.Synergy.MONSTER
        ]);
        this.rarity = Game_1.Rarity.HATCH;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.KROKOROK;
        this.evolutionRule = new evolution_rules_1.HatchEvolutionRule(Config_1.EvolutionTime.EVOLVE_HATCH);
        this.hp = 80;
        this.atk = 6;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.FOUL_PLAY;
        this.passive = Passive_1.Passive.HATCH;
        this.attackSprite = types_1.AttackSprite.ROCK_MELEE;
    }
}
exports.Sandile = Sandile;
class Krokorok extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.DARK,
            Synergy_1.Synergy.GROUND,
            Synergy_1.Synergy.MONSTER
        ]);
        this.rarity = Game_1.Rarity.HATCH;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.KROOKODILE;
        this.evolutionRule = new evolution_rules_1.HatchEvolutionRule(Config_1.EvolutionTime.EVOLVE_HATCH);
        this.hp = 150;
        this.atk = 13;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.FOUL_PLAY;
        this.passive = Passive_1.Passive.HATCH;
        this.attackSprite = types_1.AttackSprite.ROCK_MELEE;
    }
}
exports.Krokorok = Krokorok;
class Krookodile extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.DARK,
            Synergy_1.Synergy.GROUND,
            Synergy_1.Synergy.MONSTER
        ]);
        this.rarity = Game_1.Rarity.HATCH;
        this.stars = 3;
        this.hp = 220;
        this.atk = 22;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.FOUL_PLAY;
        this.attackSprite = types_1.AttackSprite.ROCK_MELEE;
    }
}
exports.Krookodile = Krookodile;
class Binacle extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.ROCK, Synergy_1.Synergy.WATER]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.BARBARACLE;
        this.hp = 80;
        this.atk = 9;
        this.def = 4;
        this.speDef = 2;
        this.maxPP = 65;
        this.range = 1;
        this.skill = Ability_1.Ability.STONE_EDGE;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.ROCK_RANGE;
    }
}
exports.Binacle = Binacle;
class Barbaracle extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.ROCK, Synergy_1.Synergy.WATER]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.hp = 200;
        this.atk = 21;
        this.def = 8;
        this.speDef = 4;
        this.maxPP = 65;
        this.range = 1;
        this.skill = Ability_1.Ability.STONE_EDGE;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.ROCK_RANGE;
    }
}
exports.Barbaracle = Barbaracle;
class Skarmory extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.STEEL, Synergy_1.Synergy.FLYING]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 190;
        this.atk = 18;
        this.def = 8;
        this.speDef = 4;
        this.maxPP = 80;
        this.range = 1;
        this.skill = Ability_1.Ability.ROAR;
        this.attackSprite = types_1.AttackSprite.STEEL_MELEE;
        this.passive = Passive_1.Passive.SKARMORY;
    }
    afterSimulationStart(params) {
        params.entity.commands.push(new simulation_command_1.DelayedCommand(() => {
            const board = params.simulation.board;
            const simulation = params.simulation;
            const entity = params.entity;
            const nbSpikes = 12;
            const positions = new Set();
            for (let i = 0; i < nbSpikes; i++) {
                let x, y;
                do {
                    x = Math.floor(Math.random() * board.columns);
                    y =
                        Math.floor((Math.random() * board.rows) / 2) +
                            (entity.positionY < 3 ? 3 : 0);
                } while (positions.has(`${x},${y}`));
                positions.add(`${x},${y}`);
                board.addBoardEffect(x, y, Effect_1.Effect.SPIKES, simulation);
                simulation.room.broadcast(types_1.Transfer.ABILITY, {
                    id: simulation.id,
                    skill: Ability_1.Ability.SPIKES,
                    positionX: entity.positionX,
                    positionY: entity.positionY,
                    targetX: x,
                    targetY: y
                });
            }
        }, 300));
    }
}
exports.Skarmory = Skarmory;
function ogerponOnAcquired(player, currentMask) {
    Item_1.OgerponMasks.forEach((mask) => {
        if (!player.items.includes(mask) && mask !== currentMask) {
            player.items.push(mask);
        }
    });
    if (currentMask && player.items.includes(currentMask)) {
        (0, array_1.removeInArray)(player.items, currentMask);
    }
}
class OgerponTeal extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GRASS, Synergy_1.Synergy.FLORA]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 200;
        this.atk = 20;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.IVY_CUDGEL;
        this.attackSprite = types_1.AttackSprite.GRASS_MELEE;
        this.onAcquired = (player) => ogerponOnAcquired(player, null);
        this.passive = Passive_1.Passive.OGERPON_TEAL;
    }
}
exports.OgerponTeal = OgerponTeal;
class OgerponTealMask extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GRASS, Synergy_1.Synergy.FLORA]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 200;
        this.atk = 20;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.IVY_CUDGEL;
        this.attackSprite = types_1.AttackSprite.GRASS_MELEE;
        this.shiny = false;
        this.onAcquired = (player) => ogerponOnAcquired(player, Item_1.Item.TEAL_MASK);
        this.passive = Passive_1.Passive.OGERPON_TEAL;
    }
}
exports.OgerponTealMask = OgerponTealMask;
class OgerponWellspring extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GRASS, Synergy_1.Synergy.AQUATIC]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 200;
        this.atk = 20;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.IVY_CUDGEL;
        this.attackSprite = types_1.AttackSprite.GRASS_MELEE;
        this.onAcquired = (player) => ogerponOnAcquired(player, null);
        this.passive = Passive_1.Passive.OGERPON_WELLSPRING;
    }
}
exports.OgerponWellspring = OgerponWellspring;
class OgerponWellspringMask extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GRASS, Synergy_1.Synergy.AQUATIC]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 200;
        this.atk = 20;
        this.def = 4;
        this.speDef = 8;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.IVY_CUDGEL;
        this.attackSprite = types_1.AttackSprite.GRASS_MELEE;
        this.shiny = false;
        this.onAcquired = (player) => ogerponOnAcquired(player, Item_1.Item.WELLSPRING_MASK);
        this.passive = Passive_1.Passive.OGERPON_WELLSPRING;
    }
}
exports.OgerponWellspringMask = OgerponWellspringMask;
class OgerponHearthflame extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GRASS, Synergy_1.Synergy.FIRE]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 200;
        this.atk = 24;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.IVY_CUDGEL;
        this.attackSprite = types_1.AttackSprite.GRASS_MELEE;
        this.onAcquired = (player) => ogerponOnAcquired(player, null);
        this.passive = Passive_1.Passive.OGERPON_HEARTHFLAME;
    }
}
exports.OgerponHearthflame = OgerponHearthflame;
class OgerponHearthflameMask extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GRASS, Synergy_1.Synergy.FIRE]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 200;
        this.atk = 24;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.IVY_CUDGEL;
        this.attackSprite = types_1.AttackSprite.GRASS_MELEE;
        this.shiny = false;
        this.onAcquired = (player) => ogerponOnAcquired(player, Item_1.Item.HEARTHFLAME_MASK);
        this.passive = Passive_1.Passive.OGERPON_HEARTHFLAME;
    }
}
exports.OgerponHearthflameMask = OgerponHearthflameMask;
class OgerponCornerstone extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GRASS, Synergy_1.Synergy.ROCK]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 200;
        this.atk = 20;
        this.def = 2;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.IVY_CUDGEL;
        this.attackSprite = types_1.AttackSprite.GRASS_MELEE;
        this.onAcquired = (player) => ogerponOnAcquired(player, null);
        this.passive = Passive_1.Passive.OGERPON_CORNERSTONE;
    }
}
exports.OgerponCornerstone = OgerponCornerstone;
class OgerponCornerstoneMask extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.GRASS, Synergy_1.Synergy.ROCK]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 200;
        this.atk = 20;
        this.def = 8;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.IVY_CUDGEL;
        this.attackSprite = types_1.AttackSprite.GRASS_MELEE;
        this.shiny = false;
        this.onAcquired = (player) => ogerponOnAcquired(player, Item_1.Item.CORNERSTONE_MASK);
        this.passive = Passive_1.Passive.OGERPON_CORNERSTONE;
    }
}
exports.OgerponCornerstoneMask = OgerponCornerstoneMask;
class IronHands extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.FIGHTING,
            Synergy_1.Synergy.ARTIFICIAL,
            Synergy_1.Synergy.ELECTRIC
        ]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 230;
        this.atk = 19;
        this.def = 4;
        this.speDef = 3;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.FORCE_PALM;
        this.attackSprite = types_1.AttackSprite.FIGHTING_MELEE;
    }
}
exports.IronHands = IronHands;
class Rookidee extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.STEEL, Synergy_1.Synergy.FLYING]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.CORVISQUIRE;
        this.hp = 80;
        this.atk = 6;
        this.def = 4;
        this.speDef = 2;
        this.maxPP = 90;
        this.range = 1;
        this.skill = Ability_1.Ability.STEEL_WING;
        this.attackSprite = types_1.AttackSprite.FLYING_MELEE;
        this.regional = true;
    }
}
exports.Rookidee = Rookidee;
class Corvisquire extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.STEEL, Synergy_1.Synergy.FLYING]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.CORVIKNIGHT;
        this.hp = 130;
        this.atk = 10;
        this.def = 6;
        this.speDef = 3;
        this.maxPP = 90;
        this.range = 1;
        this.skill = Ability_1.Ability.STEEL_WING;
        this.attackSprite = types_1.AttackSprite.FLYING_MELEE;
        this.regional = true;
    }
}
exports.Corvisquire = Corvisquire;
class Corviknight extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.STEEL, Synergy_1.Synergy.FLYING]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 3;
        this.hp = 220;
        this.atk = 20;
        this.def = 8;
        this.speDef = 4;
        this.maxPP = 90;
        this.range = 1;
        this.skill = Ability_1.Ability.STEEL_WING;
        this.attackSprite = types_1.AttackSprite.FLYING_MELEE;
        this.regional = true;
    }
}
exports.Corviknight = Corviknight;
class Turtonator extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DRAGON, Synergy_1.Synergy.FIRE]);
        this.rarity = Game_1.Rarity.UNIQUE;
        this.stars = 3;
        this.hp = 200;
        this.atk = 13;
        this.def = 7;
        this.speDef = 5;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.SHELL_TRAP;
        this.attackSprite = types_1.AttackSprite.DRAGON_MELEE;
    }
}
exports.Turtonator = Turtonator;
class Sandygast extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.GHOST,
            Synergy_1.Synergy.GROUND,
            Synergy_1.Synergy.AMORPHOUS
        ]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.PALOSSAND;
        this.hp = 60;
        this.atk = 5;
        this.def = 3;
        this.speDef = 1;
        this.maxPP = 90;
        this.range = 1;
        this.skill = Ability_1.Ability.SHORE_UP;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.WATER_MELEE;
    }
}
exports.Sandygast = Sandygast;
class Palossand extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.GHOST,
            Synergy_1.Synergy.GROUND,
            Synergy_1.Synergy.AMORPHOUS
        ]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.hp = 150;
        this.atk = 10;
        this.def = 4;
        this.speDef = 2;
        this.maxPP = 90;
        this.range = 1;
        this.skill = Ability_1.Ability.SHORE_UP;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.WATER_MELEE;
    }
}
exports.Palossand = Palossand;
class Skorupi extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.BUG, Synergy_1.Synergy.POISON]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.DRAPION;
        this.hp = 90;
        this.atk = 10;
        this.def = 5;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.POISON_STING;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.BUG_MELEE;
    }
}
exports.Skorupi = Skorupi;
class Drapion extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.BUG, Synergy_1.Synergy.POISON, Synergy_1.Synergy.DARK]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.hp = 180;
        this.atk = 18;
        this.def = 8;
        this.speDef = 3;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.POISON_STING;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.BUG_MELEE;
    }
}
exports.Drapion = Drapion;
class Darumaka extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WILD, Synergy_1.Synergy.FIRE, Synergy_1.Synergy.PSYCHIC]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.DARMANITAN;
        this.hp = 80;
        this.atk = 12;
        this.def = 1;
        this.speDef = 1;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.HEADBUTT;
        this.attackSprite = types_1.AttackSprite.FIRE_MELEE;
    }
}
exports.Darumaka = Darumaka;
class Darmanitan extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WILD, Synergy_1.Synergy.FIRE, Synergy_1.Synergy.PSYCHIC]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.hp = 220;
        this.atk = 26;
        this.def = 1;
        this.speDef = 1;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.HEADBUTT;
        this.passive = Passive_1.Passive.DARMANITAN;
        this.attackSprite = types_1.AttackSprite.FIRE_MELEE;
    }
}
exports.Darmanitan = Darmanitan;
class DarmanitanZen extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WILD, Synergy_1.Synergy.FIRE, Synergy_1.Synergy.PSYCHIC]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.hp = 220;
        this.atk = 16;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.TRANSE;
        this.passive = Passive_1.Passive.DARMANITAN_ZEN;
        this.attackSprite = types_1.AttackSprite.FIRE_MELEE;
    }
}
exports.DarmanitanZen = DarmanitanZen;
class Krabby extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WATER, Synergy_1.Synergy.NORMAL]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.KINGLER;
        this.hp = 80;
        this.atk = 6;
        this.def = 4;
        this.speDef = 1;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.VISE_GRIP;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.NORMAL_MELEE;
    }
}
exports.Krabby = Krabby;
class Kingler extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.WATER, Synergy_1.Synergy.NORMAL]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.hp = 150;
        this.atk = 15;
        this.def = 6;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.VISE_GRIP;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.NORMAL_MELEE;
    }
}
exports.Kingler = Kingler;
class Zygarde10 extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DRAGON, Synergy_1.Synergy.GROUND]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 250;
        this.atk = 30;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.LANDS_WRATH;
        this.attackSprite = types_1.AttackSprite.DRAGON_MELEE;
        this.passive = Passive_1.Passive.ZYGARDE10;
    }
    onAcquired(player) {
        if (player.items.includes(Item_1.Item.ZYGARDE_CUBE) === false) {
            player.items.push(Item_1.Item.ZYGARDE_CUBE);
        }
    }
}
exports.Zygarde10 = Zygarde10;
class Zygarde50 extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DRAGON, Synergy_1.Synergy.GROUND]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 3;
        this.hp = 220;
        this.atk = 25;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.THOUSAND_ARROWS;
        this.attackSprite = types_1.AttackSprite.DRAGON_GREEN_RANGE;
        this.passive = Passive_1.Passive.ZYGARDE50;
    }
    onAcquired(player) {
        if (player.items.includes(Item_1.Item.ZYGARDE_CUBE) === false) {
            player.items.push(Item_1.Item.ZYGARDE_CUBE);
        }
    }
}
exports.Zygarde50 = Zygarde50;
class Zygarde100 extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DRAGON, Synergy_1.Synergy.GROUND]);
        this.rarity = Game_1.Rarity.LEGENDARY;
        this.stars = 4;
        this.hp = 300;
        this.atk = 30;
        this.def = 5;
        this.speDef = 5;
        this.maxPP = 120;
        this.range = 1;
        this.skill = Ability_1.Ability.CORE_ENFORCER;
        this.attackSprite = types_1.AttackSprite.DRAGON_MELEE;
    }
}
exports.Zygarde100 = Zygarde100;
class Sizzlipede extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FIRE, Synergy_1.Synergy.BUG]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.CENTISKORCH;
        this.hp = 75;
        this.atk = 9;
        this.def = 1;
        this.speDef = 3;
        this.maxPP = 90;
        this.range = 1;
        this.skill = Ability_1.Ability.BURN_UP;
        this.regional = true;
        this.attackSprite = types_1.AttackSprite.FIRE_MELEE;
    }
}
exports.Sizzlipede = Sizzlipede;
class Centiskorch extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FIRE, Synergy_1.Synergy.BUG]);
        this.rarity = Game_1.Rarity.UNCOMMON;
        this.stars = 2;
        this.hp = 140;
        this.atk = 18;
        this.def = 1;
        this.speDef = 4;
        this.maxPP = 90;
        this.range = 1;
        this.skill = Ability_1.Ability.BURN_UP;
        this.regional = true;
        this.attackSprite = types_1.AttackSprite.FIRE_MELEE;
    }
}
exports.Centiskorch = Centiskorch;
class Stufful extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.NORMAL, Synergy_1.Synergy.FIGHTING]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.BEWEAR;
        this.hp = 100;
        this.atk = 8;
        this.def = 3;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.POWER_HUG;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.NORMAL_MELEE;
    }
}
exports.Stufful = Stufful;
class Bewear extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.NORMAL, Synergy_1.Synergy.FIGHTING]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.hp = 260;
        this.atk = 25;
        this.def = 6;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.POWER_HUG;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.NORMAL_MELEE;
    }
}
exports.Bewear = Bewear;
class Glimmet extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.POISON, Synergy_1.Synergy.ROCK, Synergy_1.Synergy.FLORA]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.GLIMMORA;
        this.hp = 80;
        this.atk = 6;
        this.def = 4;
        this.speDef = 4;
        this.maxPP = 70;
        this.range = 1;
        this.skill = Ability_1.Ability.MORTAL_SPIN;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.POISON_MELEE;
        this.passive = Passive_1.Passive.GLIMMORA;
    }
}
exports.Glimmet = Glimmet;
class Glimmora extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.POISON, Synergy_1.Synergy.ROCK, Synergy_1.Synergy.FLORA]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.hp = 180;
        this.atk = 12;
        this.def = 6;
        this.speDef = 6;
        this.maxPP = 70;
        this.range = 1;
        this.skill = Ability_1.Ability.MORTAL_SPIN;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.POISON_MELEE;
        this.passive = Passive_1.Passive.GLIMMORA;
    }
}
exports.Glimmora = Glimmora;
class Fletchling extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FLYING, Synergy_1.Synergy.FIRE]);
        this.rarity = Game_1.Rarity.ULTRA;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.FLETCHINDER;
        this.hp = 120;
        this.atk = 15;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.FIRESTARTER;
        this.attackSprite = types_1.AttackSprite.FIRE_RANGE;
    }
}
exports.Fletchling = Fletchling;
class Fletchinder extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FLYING, Synergy_1.Synergy.FIRE]);
        this.rarity = Game_1.Rarity.ULTRA;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.TALONFLAME;
        this.hp = 230;
        this.atk = 30;
        this.def = 5;
        this.speDef = 5;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.FIRESTARTER;
        this.attackSprite = types_1.AttackSprite.FIRE_RANGE;
    }
}
exports.Fletchinder = Fletchinder;
class Talonflame extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FLYING, Synergy_1.Synergy.FIRE]);
        this.rarity = Game_1.Rarity.ULTRA;
        this.stars = 3;
        this.hp = 340;
        this.atk = 45;
        this.def = 7;
        this.speDef = 7;
        this.maxPP = 100;
        this.range = 2;
        this.skill = Ability_1.Ability.FIRESTARTER;
        this.attackSprite = types_1.AttackSprite.FIRE_RANGE;
    }
}
exports.Talonflame = Talonflame;
class Vullaby extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DARK, Synergy_1.Synergy.FLYING]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.MANDIBUZZ;
        this.hp = 90;
        this.atk = 11;
        this.def = 4;
        this.speDef = 2;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.BONE_ARMOR;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.DARK_MELEE;
    }
}
exports.Vullaby = Vullaby;
class Mandibuzz extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.DARK, Synergy_1.Synergy.FLYING]);
        this.rarity = Game_1.Rarity.RARE;
        this.stars = 2;
        this.hp = 210;
        this.atk = 20;
        this.def = 6;
        this.speDef = 4;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.BONE_ARMOR;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.DARK_MELEE;
    }
}
exports.Mandibuzz = Mandibuzz;
class Inkay extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.DARK,
            Synergy_1.Synergy.PSYCHIC,
            Synergy_1.Synergy.AQUATIC
        ]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.MALAMAR;
        this.hp = 90;
        this.atk = 9;
        this.def = 3;
        this.speDef = 6;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.TOPSY_TURVY;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.DARK_MELEE;
    }
}
exports.Inkay = Inkay;
class Malamar extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([
            Synergy_1.Synergy.DARK,
            Synergy_1.Synergy.PSYCHIC,
            Synergy_1.Synergy.AQUATIC
        ]);
        this.rarity = Game_1.Rarity.EPIC;
        this.stars = 2;
        this.hp = 230;
        this.atk = 20;
        this.def = 5;
        this.speDef = 12;
        this.maxPP = 100;
        this.range = 1;
        this.skill = Ability_1.Ability.TOPSY_TURVY;
        this.additional = true;
        this.attackSprite = types_1.AttackSprite.DARK_MELEE;
    }
}
exports.Malamar = Malamar;
const updatePillars = (player, pkm, pillarPkm) => {
    const pkmOnBoard = (0, schemas_1.values)(player.board).filter((p) => p.name === pkm && p.positionY > 0);
    const pillars = (0, schemas_1.values)(player.board).filter((p) => p.name === pillarPkm);
    if (pillars.length < pkmOnBoard.length) {
        for (let i = 0; i < pkmOnBoard.length - pillars.length; i++) {
            const freeSpace = (0, board_1.getFirstAvailablePositionOnBoard)(player.board);
            if (freeSpace) {
                const pillar = pokemon_factory_1.default.createPokemonFromName(pillarPkm, player);
                pillar.positionX = freeSpace[0];
                pillar.positionY = freeSpace[1];
                player.board.set(pillar.id, pillar);
            }
        }
    }
    else if (pkmOnBoard.length < pillars.length) {
        for (let i = 0; i < pillars.length - pkmOnBoard.length; i++) {
            player.board.delete(pillars[i].id);
        }
    }
};
const pillarEvolve = (pillarToRemove, pillarEvolution) => (params) => {
    const pkmOnBoard = (0, schemas_1.values)(params.player.board).filter((p) => p.name === params.pokemonsBeforeEvolution[0].name && p.positionY > 0);
    const pillars = (0, schemas_1.values)(params.player.board).filter((p) => p.name === pillarToRemove);
    for (let i = 0; i < pillars.length - pkmOnBoard.length; i++) {
        params.player.board.delete(pillars[i].id);
    }
    const coords = pillars.length > 0
        ? [pillars[0].positionX, pillars[0].positionY]
        : (0, board_1.getFirstAvailablePositionOnBoard)(params.player.board);
    if (coords && params.pokemonEvolved.positionY > 0) {
        const pillar = pokemon_factory_1.default.createPokemonFromName(pillarEvolution, params.player);
        pillar.positionX = coords[0];
        pillar.positionY = coords[1];
        params.player.board.set(pillar.id, pillar);
    }
};
class Timburr extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FIGHTING, Synergy_1.Synergy.HUMAN]);
        this.rarity = Game_1.Rarity.ULTRA;
        this.stars = 1;
        this.evolution = Pokemon_1.Pkm.GURDURR;
        this.hp = 140;
        this.atk = 14;
        this.def = 4;
        this.speDef = 2;
        this.maxPP = 120;
        this.range = 1;
        this.skill = Ability_1.Ability.COLUMN_CRUSH;
        this.passive = Passive_1.Passive.PILLAR;
        this.attackSprite = types_1.AttackSprite.FIGHTING_MELEE;
        this.afterEvolve = pillarEvolve(Pokemon_1.Pkm.PILLAR_WOOD, Pokemon_1.Pkm.PILLAR_IRON);
    }
    onChangePosition(x, y, player) {
        updatePillars(player, Pokemon_1.Pkm.TIMBURR, Pokemon_1.Pkm.PILLAR_WOOD);
    }
    afterSell(player) {
        updatePillars(player, Pokemon_1.Pkm.TIMBURR, Pokemon_1.Pkm.PILLAR_WOOD);
    }
}
exports.Timburr = Timburr;
class Gurdurr extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FIGHTING, Synergy_1.Synergy.HUMAN]);
        this.rarity = Game_1.Rarity.ULTRA;
        this.stars = 2;
        this.evolution = Pokemon_1.Pkm.CONKELDURR;
        this.hp = 280;
        this.atk = 24;
        this.def = 6;
        this.speDef = 3;
        this.maxPP = 120;
        this.range = 1;
        this.skill = Ability_1.Ability.COLUMN_CRUSH;
        this.passive = Passive_1.Passive.PILLAR;
        this.attackSprite = types_1.AttackSprite.FIGHTING_MELEE;
        this.afterEvolve = pillarEvolve(Pokemon_1.Pkm.PILLAR_IRON, Pokemon_1.Pkm.PILLAR_CONCRETE);
    }
    onChangePosition(x, y, player) {
        updatePillars(player, Pokemon_1.Pkm.GURDURR, Pokemon_1.Pkm.PILLAR_IRON);
    }
    afterSell(player) {
        updatePillars(player, Pokemon_1.Pkm.GURDURR, Pokemon_1.Pkm.PILLAR_IRON);
    }
}
exports.Gurdurr = Gurdurr;
class Conkeldurr extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([Synergy_1.Synergy.FIGHTING, Synergy_1.Synergy.HUMAN]);
        this.rarity = Game_1.Rarity.ULTRA;
        this.stars = 3;
        this.hp = 400;
        this.atk = 34;
        this.def = 8;
        this.speDef = 4;
        this.maxPP = 120;
        this.range = 1;
        this.skill = Ability_1.Ability.COLUMN_CRUSH;
        this.passive = Passive_1.Passive.PILLAR;
        this.attackSprite = types_1.AttackSprite.FIGHTING_MELEE;
    }
    onChangePosition(x, y, player) {
        updatePillars(player, Pokemon_1.Pkm.CONKELDURR, Pokemon_1.Pkm.PILLAR_CONCRETE);
    }
    afterSell(player) {
        updatePillars(player, Pokemon_1.Pkm.CONKELDURR, Pokemon_1.Pkm.PILLAR_CONCRETE);
    }
}
exports.Conkeldurr = Conkeldurr;
class PillarWood extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([]);
        this.rarity = Game_1.Rarity.SPECIAL;
        this.stars = 1;
        this.hp = 100;
        this.atk = 0;
        this.def = 1;
        this.speDef = 1;
        this.maxPP = 0;
        this.range = 1;
        this.skill = Ability_1.Ability.DEFAULT;
        this.passive = Passive_1.Passive.INANIMATE;
        this.canHoldItems = false;
        this.canBeBenched = false;
        this.canBeSold = false;
    }
    onSpawn({ entity }) {
        entity.status.tree = true;
        entity.status.triggerRuneProtect(30000);
        entity.toIdleState();
    }
}
exports.PillarWood = PillarWood;
class PillarIron extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([]);
        this.rarity = Game_1.Rarity.SPECIAL;
        this.stars = 2;
        this.hp = 200;
        this.atk = 0;
        this.def = 3;
        this.speDef = 3;
        this.maxPP = 0;
        this.range = 1;
        this.skill = Ability_1.Ability.DEFAULT;
        this.passive = Passive_1.Passive.INANIMATE;
        this.canHoldItems = false;
        this.canBeBenched = false;
        this.canBeSold = false;
    }
    onSpawn({ entity }) {
        entity.status.tree = true;
        entity.status.triggerRuneProtect(30000);
        entity.toIdleState();
    }
}
exports.PillarIron = PillarIron;
class PillarConcrete extends Pokemon {
    constructor() {
        super(...arguments);
        this.types = new schema_1.SetSchema([]);
        this.rarity = Game_1.Rarity.SPECIAL;
        this.stars = 3;
        this.hp = 300;
        this.atk = 0;
        this.def = 5;
        this.speDef = 5;
        this.maxPP = 0;
        this.range = 1;
        this.skill = Ability_1.Ability.DEFAULT;
        this.passive = Passive_1.Passive.INANIMATE;
        this.canHoldItems = false;
        this.canBeBenched = false;
        this.canBeSold = false;
    }
    onSpawn({ entity }) {
        entity.status.tree = true;
        entity.status.triggerRuneProtect(30000);
        entity.toIdleState();
    }
}
exports.PillarConcrete = PillarConcrete;
exports.PokemonClasses = {
    [Pokemon_1.Pkm.DEFAULT]: Pokemon,
    [Pokemon_1.Pkm.DITTO]: Ditto,
    [Pokemon_1.Pkm.BULBASAUR]: Bulbasaur,
    [Pokemon_1.Pkm.IVYSAUR]: Ivysaur,
    [Pokemon_1.Pkm.VENUSAUR]: Venusaur,
    [Pokemon_1.Pkm.CHARMANDER]: Charmander,
    [Pokemon_1.Pkm.CHARMELEON]: Charmeleon,
    [Pokemon_1.Pkm.CHARIZARD]: Charizard,
    [Pokemon_1.Pkm.SQUIRTLE]: Squirtle,
    [Pokemon_1.Pkm.WARTORTLE]: Wartortle,
    [Pokemon_1.Pkm.BLASTOISE]: Blastoise,
    [Pokemon_1.Pkm.SLOWPOKE]: Slowpoke,
    [Pokemon_1.Pkm.SLOWBRO]: Slowbro,
    [Pokemon_1.Pkm.SLOWKING]: Slowking,
    [Pokemon_1.Pkm.GEODUDE]: Geodude,
    [Pokemon_1.Pkm.GRAVELER]: Graveler,
    [Pokemon_1.Pkm.GOLEM]: Golem,
    [Pokemon_1.Pkm.AZURILL]: Azurill,
    [Pokemon_1.Pkm.MARILL]: Marill,
    [Pokemon_1.Pkm.AZUMARILL]: Azumarill,
    [Pokemon_1.Pkm.ZUBAT]: Zubat,
    [Pokemon_1.Pkm.GOLBAT]: Golbat,
    [Pokemon_1.Pkm.CROBAT]: Crobat,
    [Pokemon_1.Pkm.AMPHAROS]: Ampharos,
    [Pokemon_1.Pkm.MAREEP]: Mareep,
    [Pokemon_1.Pkm.FLAFFY]: Flaffy,
    [Pokemon_1.Pkm.CLEFFA]: Cleffa,
    [Pokemon_1.Pkm.CLEFAIRY]: Clefairy,
    [Pokemon_1.Pkm.CLEFABLE]: Clefable,
    [Pokemon_1.Pkm.IGGLYBUFF]: Igglybuff,
    [Pokemon_1.Pkm.JIGGLYPUFF]: Jigglypuff,
    [Pokemon_1.Pkm.WIGGLYTUFF]: Wigglytuff,
    [Pokemon_1.Pkm.CATERPIE]: Caterpie,
    [Pokemon_1.Pkm.METAPOD]: Metapod,
    [Pokemon_1.Pkm.BUTTERFREE]: Butterfree,
    [Pokemon_1.Pkm.WEEDLE]: Weedle,
    [Pokemon_1.Pkm.KAKUNA]: Kakuna,
    [Pokemon_1.Pkm.BEEDRILL]: Beedrill,
    [Pokemon_1.Pkm.PIDGEY]: Pidgey,
    [Pokemon_1.Pkm.PIDGEOTTO]: Pidgeotto,
    [Pokemon_1.Pkm.PIDGEOT]: Pidgeot,
    [Pokemon_1.Pkm.HOPPIP]: Hoppip,
    [Pokemon_1.Pkm.SKIPLOOM]: Skiploom,
    [Pokemon_1.Pkm.JUMPLUFF]: Jumpluff,
    [Pokemon_1.Pkm.SEEDOT]: Seedot,
    [Pokemon_1.Pkm.NUZLEAF]: Nuzleaf,
    [Pokemon_1.Pkm.SHIFTRY]: Shiftry,
    [Pokemon_1.Pkm.STARLY]: Starly,
    [Pokemon_1.Pkm.STARAVIA]: Staravia,
    [Pokemon_1.Pkm.STARAPTOR]: Staraptor,
    [Pokemon_1.Pkm.CHIKORITA]: Chikorita,
    [Pokemon_1.Pkm.BAYLEEF]: Bayleef,
    [Pokemon_1.Pkm.MEGANIUM]: Meganium,
    [Pokemon_1.Pkm.CYNDAQUIL]: Cyndaquil,
    [Pokemon_1.Pkm.QUILAVA]: Quilava,
    [Pokemon_1.Pkm.TYPHLOSION]: Typhlosion,
    [Pokemon_1.Pkm.TOTODILE]: Totodile,
    [Pokemon_1.Pkm.CROCONAW]: Croconaw,
    [Pokemon_1.Pkm.FERALIGATR]: Feraligatr,
    [Pokemon_1.Pkm.TREECKO]: Treecko,
    [Pokemon_1.Pkm.GROVYLE]: Grovyle,
    [Pokemon_1.Pkm.SCEPTILE]: Sceptile,
    [Pokemon_1.Pkm.TORCHIC]: Torchic,
    [Pokemon_1.Pkm.COMBUSKEN]: Combusken,
    [Pokemon_1.Pkm.BLAZIKEN]: Blaziken,
    [Pokemon_1.Pkm.MUDKIP]: Mudkip,
    [Pokemon_1.Pkm.MARSHTOMP]: Marshtomp,
    [Pokemon_1.Pkm.SWAMPERT]: Swampert,
    [Pokemon_1.Pkm.TURTWIG]: Turtwig,
    [Pokemon_1.Pkm.GROTLE]: Grotle,
    [Pokemon_1.Pkm.TORTERRA]: Torterra,
    [Pokemon_1.Pkm.CHIMCHAR]: Chimchar,
    [Pokemon_1.Pkm.MONFERNO]: Monferno,
    [Pokemon_1.Pkm.INFERNAPE]: Infernape,
    [Pokemon_1.Pkm.PIPLUP]: Piplup,
    [Pokemon_1.Pkm.PRINPLUP]: Prinplup,
    [Pokemon_1.Pkm.EMPOLEON]: Empoleon,
    [Pokemon_1.Pkm.NIDORANF]: NidoranF,
    [Pokemon_1.Pkm.NIDORINA]: Nidorina,
    [Pokemon_1.Pkm.NIDOQUEEN]: Nidoqueen,
    [Pokemon_1.Pkm.NIDORANM]: NidoranM,
    [Pokemon_1.Pkm.NIDORINO]: Nidorino,
    [Pokemon_1.Pkm.NIDOKING]: Nidoking,
    [Pokemon_1.Pkm.PICHU]: Pichu,
    [Pokemon_1.Pkm.PIKACHU]: Pikachu,
    [Pokemon_1.Pkm.RAICHU]: Raichu,
    [Pokemon_1.Pkm.MACHOP]: Machop,
    [Pokemon_1.Pkm.MACHOKE]: Machoke,
    [Pokemon_1.Pkm.MACHAMP]: Machamp,
    [Pokemon_1.Pkm.HORSEA]: Horsea,
    [Pokemon_1.Pkm.SEADRA]: Seadra,
    [Pokemon_1.Pkm.KINGDRA]: Kingdra,
    [Pokemon_1.Pkm.TRAPINCH]: Trapinch,
    [Pokemon_1.Pkm.VIBRAVA]: Vibrava,
    [Pokemon_1.Pkm.FLYGON]: Flygon,
    [Pokemon_1.Pkm.SPHEAL]: Spheal,
    [Pokemon_1.Pkm.SEALEO]: Sealeo,
    [Pokemon_1.Pkm.WALREIN]: Walrein,
    [Pokemon_1.Pkm.ARON]: Aron,
    [Pokemon_1.Pkm.LAIRON]: Lairon,
    [Pokemon_1.Pkm.AGGRON]: Aggron,
    [Pokemon_1.Pkm.MAGNEMITE]: Magnemite,
    [Pokemon_1.Pkm.MAGNETON]: Magneton,
    [Pokemon_1.Pkm.MAGNEZONE]: Magnezone,
    [Pokemon_1.Pkm.RHYHORN]: Rhyhorn,
    [Pokemon_1.Pkm.RHYDON]: Rhydon,
    [Pokemon_1.Pkm.RHYPERIOR]: Rhyperior,
    [Pokemon_1.Pkm.TOGEPI]: Togepi,
    [Pokemon_1.Pkm.TOGETIC]: Togetic,
    [Pokemon_1.Pkm.TOGEKISS]: Togekiss,
    [Pokemon_1.Pkm.DUSKULL]: Duskull,
    [Pokemon_1.Pkm.DUSCLOPS]: Dusclops,
    [Pokemon_1.Pkm.DUSKNOIR]: Dusknoir,
    [Pokemon_1.Pkm.LOTAD]: Lotad,
    [Pokemon_1.Pkm.LOMBRE]: Lombre,
    [Pokemon_1.Pkm.LUDICOLO]: Ludicolo,
    [Pokemon_1.Pkm.SHINX]: Shinx,
    [Pokemon_1.Pkm.LUXIO]: Luxio,
    [Pokemon_1.Pkm.LUXRAY]: Luxray,
    [Pokemon_1.Pkm.POLIWAG]: Poliwag,
    [Pokemon_1.Pkm.POLIWHIRL]: Poliwhirl,
    [Pokemon_1.Pkm.POLITOED]: Politoed,
    [Pokemon_1.Pkm.ABRA]: Abra,
    [Pokemon_1.Pkm.KADABRA]: Kadabra,
    [Pokemon_1.Pkm.ALAKAZAM]: Alakazam,
    [Pokemon_1.Pkm.GASTLY]: Gastly,
    [Pokemon_1.Pkm.HAUNTER]: Haunter,
    [Pokemon_1.Pkm.GENGAR]: Gengar,
    [Pokemon_1.Pkm.DRATINI]: Dratini,
    [Pokemon_1.Pkm.DRAGONAIR]: Dragonair,
    [Pokemon_1.Pkm.DRAGONITE]: Dragonite,
    [Pokemon_1.Pkm.LARVITAR]: Larvitar,
    [Pokemon_1.Pkm.PUPITAR]: Pupitar,
    [Pokemon_1.Pkm.TYRANITAR]: Tyranitar,
    [Pokemon_1.Pkm.SLAKOTH]: Slakoth,
    [Pokemon_1.Pkm.VIGOROTH]: Vigoroth,
    [Pokemon_1.Pkm.SLAKING]: Slaking,
    [Pokemon_1.Pkm.RALTS]: Ralts,
    [Pokemon_1.Pkm.KIRLIA]: Kirlia,
    [Pokemon_1.Pkm.GARDEVOIR]: Gardevoir,
    [Pokemon_1.Pkm.BAGON]: Bagon,
    [Pokemon_1.Pkm.SHELGON]: Shelgon,
    [Pokemon_1.Pkm.SALAMENCE]: Salamence,
    [Pokemon_1.Pkm.BELDUM]: Beldum,
    [Pokemon_1.Pkm.METANG]: Metang,
    [Pokemon_1.Pkm.METAGROSS]: Metagross,
    [Pokemon_1.Pkm.GIBLE]: Gible,
    [Pokemon_1.Pkm.GABITE]: Gabite,
    [Pokemon_1.Pkm.GARCHOMP]: Garchomp,
    [Pokemon_1.Pkm.ELEKID]: Elekid,
    [Pokemon_1.Pkm.ELECTABUZZ]: Electabuzz,
    [Pokemon_1.Pkm.ELECTIVIRE]: Electivire,
    [Pokemon_1.Pkm.MAGBY]: Magby,
    [Pokemon_1.Pkm.MAGMAR]: Magmar,
    [Pokemon_1.Pkm.MAGMORTAR]: Magmortar,
    [Pokemon_1.Pkm.MUNCHLAX]: Munchlax,
    [Pokemon_1.Pkm.SNORLAX]: Snorlax,
    [Pokemon_1.Pkm.GROWLITHE]: Growlithe,
    [Pokemon_1.Pkm.ARCANINE]: Arcanine,
    [Pokemon_1.Pkm.HISUI_GROWLITHE]: HisuiGrowlithe,
    [Pokemon_1.Pkm.HISUI_ARCANINE]: HisuiArcanine,
    [Pokemon_1.Pkm.ONIX]: Onix,
    [Pokemon_1.Pkm.STEELIX]: Steelix,
    [Pokemon_1.Pkm.MEGA_STEELIX]: MegaSteelix,
    [Pokemon_1.Pkm.SCYTHER]: Scyther,
    [Pokemon_1.Pkm.SCIZOR]: Scizor,
    [Pokemon_1.Pkm.KLEAVOR]: Kleavor,
    [Pokemon_1.Pkm.RIOLU]: Riolu,
    [Pokemon_1.Pkm.LUCARIO]: Lucario,
    [Pokemon_1.Pkm.MAGIKARP]: Magikarp,
    [Pokemon_1.Pkm.RATTATA]: Rattata,
    [Pokemon_1.Pkm.ALOLAN_RATTATA]: AlolanRattata,
    [Pokemon_1.Pkm.RATICATE]: Raticate,
    [Pokemon_1.Pkm.ALOLAN_RATICATE]: AlolanRaticate,
    [Pokemon_1.Pkm.SPEAROW]: Spearow,
    [Pokemon_1.Pkm.FEAROW]: Fearow,
    [Pokemon_1.Pkm.GYARADOS]: Gyarados,
    [Pokemon_1.Pkm.LUGIA]: Lugia,
    [Pokemon_1.Pkm.SHADOW_LUGIA]: ShadowLugia,
    [Pokemon_1.Pkm.ZAPDOS]: Zapdos,
    [Pokemon_1.Pkm.MOLTRES]: Moltres,
    [Pokemon_1.Pkm.ARTICUNO]: Articuno,
    [Pokemon_1.Pkm.GALARIAN_ARTICUNO]: GalarianArticuno,
    [Pokemon_1.Pkm.GALARIAN_ZAPDOS]: GalarianZapdos,
    [Pokemon_1.Pkm.GALARIAN_MOLTRES]: GalarianMoltres,
    [Pokemon_1.Pkm.DIALGA]: Dialga,
    [Pokemon_1.Pkm.PALKIA]: Palkia,
    [Pokemon_1.Pkm.SUICUNE]: Suicune,
    [Pokemon_1.Pkm.RAIKOU]: Raikou,
    [Pokemon_1.Pkm.ENTEI]: Entei,
    [Pokemon_1.Pkm.KYOGRE]: Kyogre,
    [Pokemon_1.Pkm.GROUDON]: Groudon,
    [Pokemon_1.Pkm.RAYQUAZA]: Rayquaza,
    [Pokemon_1.Pkm.MEGA_RAYQUAZA]: MegaRayquaza,
    [Pokemon_1.Pkm.REGICE]: Regice,
    [Pokemon_1.Pkm.REGIROCK]: Regirock,
    [Pokemon_1.Pkm.REGISTEEL]: Registeel,
    [Pokemon_1.Pkm.REGIGIGAS]: Regigigas,
    [Pokemon_1.Pkm.GIRATINA]: Giratina,
    [Pokemon_1.Pkm.EEVEE]: Eevee,
    [Pokemon_1.Pkm.VAPOREON]: Vaporeon,
    [Pokemon_1.Pkm.JOLTEON]: Jolteon,
    [Pokemon_1.Pkm.FLAREON]: Flareon,
    [Pokemon_1.Pkm.ESPEON]: Espeon,
    [Pokemon_1.Pkm.UMBREON]: Umbreon,
    [Pokemon_1.Pkm.LEAFEON]: Leafeon,
    [Pokemon_1.Pkm.SYLVEON]: Sylveon,
    [Pokemon_1.Pkm.GLACEON]: Glaceon,
    [Pokemon_1.Pkm.MEDITITE]: Meditite,
    [Pokemon_1.Pkm.MEDICHAM]: Medicham,
    [Pokemon_1.Pkm.NUMEL]: Numel,
    [Pokemon_1.Pkm.CAMERUPT]: Camerupt,
    [Pokemon_1.Pkm.MEGA_CAMERUPT]: MegaCamerupt,
    [Pokemon_1.Pkm.DARKRAI]: Darkrai,
    [Pokemon_1.Pkm.LITWICK]: Litwick,
    [Pokemon_1.Pkm.LAMPENT]: Lampent,
    [Pokemon_1.Pkm.CHANDELURE]: Chandelure,
    [Pokemon_1.Pkm.BELLSPROUT]: Bellsprout,
    [Pokemon_1.Pkm.WEEPINBELL]: Weepinbell,
    [Pokemon_1.Pkm.VICTREEBEL]: Victreebel,
    [Pokemon_1.Pkm.SWINUB]: Swinub,
    [Pokemon_1.Pkm.PILOSWINE]: Piloswine,
    [Pokemon_1.Pkm.MAMOSWINE]: Mamoswine,
    [Pokemon_1.Pkm.SNORUNT]: Snorunt,
    [Pokemon_1.Pkm.GLALIE]: Glalie,
    [Pokemon_1.Pkm.FROSLASS]: Froslass,
    [Pokemon_1.Pkm.SNOVER]: Snover,
    [Pokemon_1.Pkm.ABOMASNOW]: Abomasnow,
    [Pokemon_1.Pkm.MEGA_ABOMASNOW]: MegaAbomasnow,
    [Pokemon_1.Pkm.VANILLITE]: Vanillite,
    [Pokemon_1.Pkm.VANILLISH]: Vanillish,
    [Pokemon_1.Pkm.VANILLUXE]: Vanilluxe,
    [Pokemon_1.Pkm.LARVESTA]: Larvesta,
    [Pokemon_1.Pkm.VOLCARONA]: Volcarona,
    [Pokemon_1.Pkm.LANDORUS]: Landorus,
    [Pokemon_1.Pkm.THUNDURUS]: Thundurus,
    [Pokemon_1.Pkm.TORNADUS]: Tornadus,
    [Pokemon_1.Pkm.ENAMORUS]: Enamorus,
    [Pokemon_1.Pkm.KELDEO]: Keldeo,
    [Pokemon_1.Pkm.TERRAKION]: Terrakion,
    [Pokemon_1.Pkm.VIRIZION]: Virizion,
    [Pokemon_1.Pkm.COBALION]: Cobalion,
    [Pokemon_1.Pkm.MANAPHY]: Manaphy,
    [Pokemon_1.Pkm.PHIONE]: Phione,
    [Pokemon_1.Pkm.SPIRITOMB]: Spiritomb,
    [Pokemon_1.Pkm.ABSOL]: Absol,
    [Pokemon_1.Pkm.LAPRAS]: Lapras,
    [Pokemon_1.Pkm.LATIAS]: Latias,
    [Pokemon_1.Pkm.LATIOS]: Latios,
    [Pokemon_1.Pkm.MESPRIT]: Mesprit,
    [Pokemon_1.Pkm.AZELF]: Azelf,
    [Pokemon_1.Pkm.UXIE]: Uxie,
    [Pokemon_1.Pkm.MEWTWO]: Mewtwo,
    [Pokemon_1.Pkm.KYUREM]: Kyurem,
    [Pokemon_1.Pkm.RESHIRAM]: Reshiram,
    [Pokemon_1.Pkm.ZEKROM]: Zekrom,
    [Pokemon_1.Pkm.CELEBI]: Celebi,
    [Pokemon_1.Pkm.VICTINI]: Victini,
    [Pokemon_1.Pkm.JIRACHI]: Jirachi,
    [Pokemon_1.Pkm.ARCEUS]: Arceus,
    [Pokemon_1.Pkm.SHAYMIN]: Shaymin,
    [Pokemon_1.Pkm.SHAYMIN_SKY]: ShayminSky,
    [Pokemon_1.Pkm.CRESSELIA]: Cresselia,
    [Pokemon_1.Pkm.HEATRAN]: Heatran,
    [Pokemon_1.Pkm.HO_OH]: HooH,
    [Pokemon_1.Pkm.ROTOM]: Rotom,
    [Pokemon_1.Pkm.ROTOM_DRONE]: RotomDrone,
    [Pokemon_1.Pkm.AERODACTYL]: Aerodactyl,
    [Pokemon_1.Pkm.SWABLU]: Swablu,
    [Pokemon_1.Pkm.CARVANHA]: Carvanha,
    [Pokemon_1.Pkm.PRIMAL_KYOGRE]: PrimalKyogre,
    [Pokemon_1.Pkm.PRIMAL_GROUDON]: PrimalGroudon,
    [Pokemon_1.Pkm.MEOWTH]: Meowth,
    [Pokemon_1.Pkm.PERSIAN]: Persian,
    [Pokemon_1.Pkm.ALOLAN_MEOWTH]: AlolanMeowth,
    [Pokemon_1.Pkm.ALOLAN_PERSIAN]: AlolanPersian,
    [Pokemon_1.Pkm.DEINO]: Deino,
    [Pokemon_1.Pkm.ZWEILOUS]: Zweilous,
    [Pokemon_1.Pkm.HYDREIGON]: Hydreigon,
    [Pokemon_1.Pkm.SANDILE]: Sandile,
    [Pokemon_1.Pkm.KROKOROK]: Krokorok,
    [Pokemon_1.Pkm.KROOKODILE]: Krookodile,
    [Pokemon_1.Pkm.SOLOSIS]: Solosis,
    [Pokemon_1.Pkm.DUOSION]: Duosion,
    [Pokemon_1.Pkm.REUNICLUS]: Reuniclus,
    [Pokemon_1.Pkm.ODDISH]: Oddish,
    [Pokemon_1.Pkm.GLOOM]: Gloom,
    [Pokemon_1.Pkm.VILEPLUME]: Vileplume,
    [Pokemon_1.Pkm.BELLOSSOM]: Bellossom,
    [Pokemon_1.Pkm.AMAURA]: Amaura,
    [Pokemon_1.Pkm.AURORUS]: Aurorus,
    [Pokemon_1.Pkm.ANORITH]: Anorith,
    [Pokemon_1.Pkm.ARMALDO]: Armaldo,
    [Pokemon_1.Pkm.ARCHEN]: Archen,
    [Pokemon_1.Pkm.ARCHEOPS]: Archeops,
    [Pokemon_1.Pkm.SHIELDON]: Shieldon,
    [Pokemon_1.Pkm.BASTIODON]: Bastiodon,
    [Pokemon_1.Pkm.LILEEP]: Lileep,
    [Pokemon_1.Pkm.CRADILY]: Cradily,
    [Pokemon_1.Pkm.OMANYTE]: Omanyte,
    [Pokemon_1.Pkm.OMASTAR]: Omastar,
    [Pokemon_1.Pkm.CRANIDOS]: Cranidos,
    [Pokemon_1.Pkm.RAMPARDOS]: Rampardos,
    [Pokemon_1.Pkm.TYRUNT]: Tyrunt,
    [Pokemon_1.Pkm.TYRANTRUM]: Tyrantrum,
    [Pokemon_1.Pkm.KABUTO]: Kabuto,
    [Pokemon_1.Pkm.KABUTOPS]: Kabutops,
    [Pokemon_1.Pkm.BUDEW]: Budew,
    [Pokemon_1.Pkm.ROSELIA]: Roselia,
    [Pokemon_1.Pkm.ROSERADE]: Roserade,
    [Pokemon_1.Pkm.BUNEARY]: Buneary,
    [Pokemon_1.Pkm.LOPUNNY]: Lopunny,
    [Pokemon_1.Pkm.MEGA_LOPUNNY]: MegaLopunny,
    [Pokemon_1.Pkm.AXEW]: Axew,
    [Pokemon_1.Pkm.FRAXURE]: Fraxure,
    [Pokemon_1.Pkm.HAXORUS]: Haxorus,
    [Pokemon_1.Pkm.VENIPEDE]: Venipede,
    [Pokemon_1.Pkm.WHIRLIPEDE]: Whirlipede,
    [Pokemon_1.Pkm.SCOLIPEDE]: Scolipede,
    [Pokemon_1.Pkm.PORYGON]: Porygon,
    [Pokemon_1.Pkm.PORYGON_2]: Porygon2,
    [Pokemon_1.Pkm.PORYGON_Z]: PorygonZ,
    [Pokemon_1.Pkm.ELECTRIKE]: Electrike,
    [Pokemon_1.Pkm.MANECTRIC]: Manectric,
    [Pokemon_1.Pkm.MEGA_MANECTRIC]: MegaManectric,
    [Pokemon_1.Pkm.SHUPPET]: Shuppet,
    [Pokemon_1.Pkm.BANETTE]: Banette,
    [Pokemon_1.Pkm.MEGA_BANETTE]: MegaBanette,
    [Pokemon_1.Pkm.HONEDGE]: Honedge,
    [Pokemon_1.Pkm.DOUBLADE]: Doublade,
    [Pokemon_1.Pkm.AEGISLASH]: Aegislash,
    [Pokemon_1.Pkm.AEGISLASH_BLADE]: AegislashBlade,
    [Pokemon_1.Pkm.CUBONE]: Cubone,
    [Pokemon_1.Pkm.MAROWAK]: Marowak,
    [Pokemon_1.Pkm.ALOLAN_MAROWAK]: AlolanMarowak,
    [Pokemon_1.Pkm.WHISMUR]: Whismur,
    [Pokemon_1.Pkm.LOUDRED]: Loudred,
    [Pokemon_1.Pkm.EXPLOUD]: Exploud,
    [Pokemon_1.Pkm.TYMPOLE]: Tympole,
    [Pokemon_1.Pkm.PALPITOAD]: Palpitoad,
    [Pokemon_1.Pkm.SEISMITOAD]: Seismitoad,
    [Pokemon_1.Pkm.SEWADDLE]: Sewaddle,
    [Pokemon_1.Pkm.SWADLOON]: Swadloon,
    [Pokemon_1.Pkm.LEAVANNY]: Leavanny,
    [Pokemon_1.Pkm.FLABEBE]: Flabebe,
    [Pokemon_1.Pkm.FLOETTE]: Floette,
    [Pokemon_1.Pkm.FLORGES]: Florges,
    [Pokemon_1.Pkm.JANGMO_O]: JangmoO,
    [Pokemon_1.Pkm.HAKAMO_O]: HakamoO,
    [Pokemon_1.Pkm.KOMMO_O]: KommoO,
    [Pokemon_1.Pkm.MELOETTA]: Meloetta,
    [Pokemon_1.Pkm.PIROUETTE_MELOETTA]: PirouetteMeloetta,
    [Pokemon_1.Pkm.ALTARIA]: Altaria,
    [Pokemon_1.Pkm.MEGA_ALTARIA]: MegaAltaria,
    [Pokemon_1.Pkm.CASTFORM]: Castform,
    [Pokemon_1.Pkm.CASTFORM_SUN]: CastformSun,
    [Pokemon_1.Pkm.CASTFORM_RAIN]: CastformRain,
    [Pokemon_1.Pkm.CASTFORM_HAIL]: CastformHail,
    [Pokemon_1.Pkm.CORPHISH]: Corphish,
    [Pokemon_1.Pkm.CRAWDAUNT]: Crawdaunt,
    [Pokemon_1.Pkm.JOLTIK]: Joltik,
    [Pokemon_1.Pkm.GALVANTULA]: Galvantula,
    [Pokemon_1.Pkm.GENESECT]: Genesect,
    [Pokemon_1.Pkm.DIANCIE]: Diancie,
    [Pokemon_1.Pkm.HATENNA]: Hatenna,
    [Pokemon_1.Pkm.HATTREM]: Hattrem,
    [Pokemon_1.Pkm.HATTERENE]: Hatterene,
    [Pokemon_1.Pkm.FENNEKIN]: Fennekin,
    [Pokemon_1.Pkm.BRAIXEN]: Braixen,
    [Pokemon_1.Pkm.DELPHOX]: Delphox,
    [Pokemon_1.Pkm.MAKUHITA]: Makuhita,
    [Pokemon_1.Pkm.HARIYAMA]: Hariyama,
    [Pokemon_1.Pkm.REGIELEKI]: Regieleki,
    [Pokemon_1.Pkm.REGIDRAGO]: Regidrago,
    [Pokemon_1.Pkm.GUZZLORD]: Guzzlord,
    [Pokemon_1.Pkm.ETERNATUS]: Eternatus,
    [Pokemon_1.Pkm.PONYTA]: Ponyta,
    [Pokemon_1.Pkm.RAPIDASH]: Rapidash,
    [Pokemon_1.Pkm.GALARIAN_PONYTA]: GalarianPonyta,
    [Pokemon_1.Pkm.GALARIAN_RAPIDASH]: GalarianRapidash,
    [Pokemon_1.Pkm.NINCADA]: Nincada,
    [Pokemon_1.Pkm.NINJASK]: Ninjask,
    [Pokemon_1.Pkm.SHEDINJA]: Shedinja,
    [Pokemon_1.Pkm.NOIBAT]: Noibat,
    [Pokemon_1.Pkm.NOIVERN]: Noivern,
    [Pokemon_1.Pkm.PUMPKABOO]: Pumpkaboo,
    [Pokemon_1.Pkm.GOURGEIST]: Gourgeist,
    [Pokemon_1.Pkm.CACNEA]: Cacnea,
    [Pokemon_1.Pkm.CACTURNE]: Cacturne,
    [Pokemon_1.Pkm.RELICANTH]: Relicanth,
    [Pokemon_1.Pkm.TAUROS]: Tauros,
    [Pokemon_1.Pkm.HAPPINY]: Happiny,
    [Pokemon_1.Pkm.CHANSEY]: Chansey,
    [Pokemon_1.Pkm.BLISSEY]: Blissey,
    [Pokemon_1.Pkm.TAPU_KOKO]: TapuKoko,
    [Pokemon_1.Pkm.TAPU_LELE]: TapuLele,
    [Pokemon_1.Pkm.STAKATAKA]: Stakataka,
    [Pokemon_1.Pkm.BLACEPHALON]: Blacephalon,
    [Pokemon_1.Pkm.HOUNDOUR]: Houndour,
    [Pokemon_1.Pkm.HOUNDOOM]: Houndoom,
    [Pokemon_1.Pkm.MEGA_HOUNDOOM]: MegaHoundoom,
    [Pokemon_1.Pkm.CLAMPERL]: Clamperl,
    [Pokemon_1.Pkm.HUNTAIL]: Huntail,
    [Pokemon_1.Pkm.GOREBYSS]: Gorebyss,
    [Pokemon_1.Pkm.SMOOCHUM]: Smoochum,
    [Pokemon_1.Pkm.JYNX]: Jynx,
    [Pokemon_1.Pkm.SALANDIT]: Salandit,
    [Pokemon_1.Pkm.SALAZZLE]: Salazzle,
    [Pokemon_1.Pkm.VENONAT]: Venonat,
    [Pokemon_1.Pkm.VENOMOTH]: Venomoth,
    [Pokemon_1.Pkm.VOLTORB]: Voltorb,
    [Pokemon_1.Pkm.ELECTRODE]: Electrode,
    [Pokemon_1.Pkm.SLUGMA]: Slugma,
    [Pokemon_1.Pkm.MAGCARGO]: Magcargo,
    [Pokemon_1.Pkm.SNEASEL]: Sneasel,
    [Pokemon_1.Pkm.WEAVILE]: Weavile,
    [Pokemon_1.Pkm.CROAGUNK]: Croagunk,
    [Pokemon_1.Pkm.TOXICROAK]: Toxicroak,
    [Pokemon_1.Pkm.CHINCHOU]: Chinchou,
    [Pokemon_1.Pkm.LANTURN]: Lanturn,
    [Pokemon_1.Pkm.POOCHYENA]: Poochyena,
    [Pokemon_1.Pkm.MIGHTYENA]: Mightyena,
    [Pokemon_1.Pkm.BRONZOR]: Bronzor,
    [Pokemon_1.Pkm.BRONZONG]: Bronzong,
    [Pokemon_1.Pkm.DRIFLOON]: Drifloon,
    [Pokemon_1.Pkm.DRIFBLIM]: Drifblim,
    [Pokemon_1.Pkm.SHROOMISH]: Shroomish,
    [Pokemon_1.Pkm.BRELOOM]: Breloom,
    [Pokemon_1.Pkm.TENTACOOL]: Tentacool,
    [Pokemon_1.Pkm.TENTACRUEL]: Tentacruel,
    [Pokemon_1.Pkm.SNUBULL]: Snubull,
    [Pokemon_1.Pkm.GRANBULL]: Granbull,
    [Pokemon_1.Pkm.SEVIPER]: Seviper,
    [Pokemon_1.Pkm.VULPIX]: Vulpix,
    [Pokemon_1.Pkm.NINETALES]: Ninetales,
    [Pokemon_1.Pkm.ALOLAN_VULPIX]: AlolanVulpix,
    [Pokemon_1.Pkm.ALOLAN_NINETALES]: AlolanNinetales,
    [Pokemon_1.Pkm.MAWILE]: Mawile,
    [Pokemon_1.Pkm.BUIZEL]: Buizel,
    [Pokemon_1.Pkm.FLOATZEL]: Floatzel,
    [Pokemon_1.Pkm.KECLEON]: Kecleon,
    [Pokemon_1.Pkm.CARBINK]: Carbink,
    [Pokemon_1.Pkm.CHATOT]: Chatot,
    [Pokemon_1.Pkm.GOOMY]: Goomy,
    [Pokemon_1.Pkm.SLIGOO]: Sligoo,
    [Pokemon_1.Pkm.GOODRA]: Goodra,
    [Pokemon_1.Pkm.HISUI_SLIGGOO]: HisuiSliggoo,
    [Pokemon_1.Pkm.HISUI_GOODRA]: HisuiGoodra,
    [Pokemon_1.Pkm.MEW]: Mew,
    [Pokemon_1.Pkm.BOUNSWEET]: Bounsweet,
    [Pokemon_1.Pkm.STEENEE]: Steenee,
    [Pokemon_1.Pkm.TSAREENA]: Tsareena,
    [Pokemon_1.Pkm.VOLCANION]: Volcanion,
    [Pokemon_1.Pkm.APPLIN]: Applin,
    [Pokemon_1.Pkm.APPLETUN]: Appletun,
    [Pokemon_1.Pkm.OSHAWOTT]: Oshawott,
    [Pokemon_1.Pkm.DEWOTT]: Dewott,
    [Pokemon_1.Pkm.SAMUROTT]: Samurott,
    [Pokemon_1.Pkm.SNOM]: Snom,
    [Pokemon_1.Pkm.FROSMOTH]: Frosmoth,
    [Pokemon_1.Pkm.WAILMER]: Wailmer,
    [Pokemon_1.Pkm.WAILORD]: Wailord,
    [Pokemon_1.Pkm.DREEPY]: Dreepy,
    [Pokemon_1.Pkm.DRAKLOAK]: Drakloak,
    [Pokemon_1.Pkm.DRAGAPULT]: Dragapult,
    [Pokemon_1.Pkm.SNIVY]: Snivy,
    [Pokemon_1.Pkm.SERVINE]: Servine,
    [Pokemon_1.Pkm.SERPERIOR]: Serperior,
    [Pokemon_1.Pkm.POPPLIO]: Popplio,
    [Pokemon_1.Pkm.BRIONNE]: Brionne,
    [Pokemon_1.Pkm.PRIMARINA]: Primarina,
    [Pokemon_1.Pkm.GOTHITA]: Gothita,
    [Pokemon_1.Pkm.GOTHORITA]: Gothorita,
    [Pokemon_1.Pkm.GOTHITELLE]: Gothitelle,
    [Pokemon_1.Pkm.SCORBUNNY]: Scorbunny,
    [Pokemon_1.Pkm.RABOOT]: Raboot,
    [Pokemon_1.Pkm.CINDERACE]: Cinderace,
    [Pokemon_1.Pkm.SANDSHREW]: Sandshrew,
    [Pokemon_1.Pkm.SANDSLASH]: Sandslash,
    [Pokemon_1.Pkm.FARFETCH_D]: Farfetchd,
    [Pokemon_1.Pkm.UNOWN_A]: UnownA,
    [Pokemon_1.Pkm.UNOWN_B]: UnownB,
    [Pokemon_1.Pkm.UNOWN_C]: UnownC,
    [Pokemon_1.Pkm.UNOWN_D]: UnownD,
    [Pokemon_1.Pkm.UNOWN_E]: UnownE,
    [Pokemon_1.Pkm.UNOWN_F]: UnownF,
    [Pokemon_1.Pkm.UNOWN_G]: UnownG,
    [Pokemon_1.Pkm.UNOWN_H]: UnownH,
    [Pokemon_1.Pkm.UNOWN_I]: UnownI,
    [Pokemon_1.Pkm.UNOWN_J]: UnownJ,
    [Pokemon_1.Pkm.UNOWN_K]: UnownK,
    [Pokemon_1.Pkm.UNOWN_L]: UnownL,
    [Pokemon_1.Pkm.UNOWN_M]: UnownM,
    [Pokemon_1.Pkm.UNOWN_N]: UnownN,
    [Pokemon_1.Pkm.UNOWN_O]: UnownO,
    [Pokemon_1.Pkm.UNOWN_P]: UnownP,
    [Pokemon_1.Pkm.UNOWN_Q]: UnownQ,
    [Pokemon_1.Pkm.UNOWN_R]: UnownR,
    [Pokemon_1.Pkm.UNOWN_S]: UnownS,
    [Pokemon_1.Pkm.UNOWN_T]: UnownT,
    [Pokemon_1.Pkm.UNOWN_U]: UnownU,
    [Pokemon_1.Pkm.UNOWN_V]: UnownV,
    [Pokemon_1.Pkm.UNOWN_W]: UnownW,
    [Pokemon_1.Pkm.UNOWN_X]: UnownX,
    [Pokemon_1.Pkm.UNOWN_Y]: UnownY,
    [Pokemon_1.Pkm.UNOWN_Z]: UnownZ,
    [Pokemon_1.Pkm.UNOWN_QUESTION]: UnownQuestion,
    [Pokemon_1.Pkm.UNOWN_EXCLAMATION]: UnownExclamation,
    [Pokemon_1.Pkm.EGG]: Egg,
    [Pokemon_1.Pkm.TAPU_FINI]: TapuFini,
    [Pokemon_1.Pkm.TAPU_BULU]: TapuBulu,
    [Pokemon_1.Pkm.DIGLETT]: Diglett,
    [Pokemon_1.Pkm.ALOLAN_DIGLETT]: AlolanDiglett,
    [Pokemon_1.Pkm.DUGTRIO]: Dugtrio,
    [Pokemon_1.Pkm.ALOLAN_DUGTRIO]: AlolanDugtrio,
    [Pokemon_1.Pkm.ROWLET]: Rowlet,
    [Pokemon_1.Pkm.DARTIX]: Dartix,
    [Pokemon_1.Pkm.DECIDUEYE]: Decidueye,
    [Pokemon_1.Pkm.ZORUA]: Zorua,
    [Pokemon_1.Pkm.ZOROARK]: Zoroark,
    [Pokemon_1.Pkm.HISUI_ZORUA]: HisuiZorua,
    [Pokemon_1.Pkm.HISUI_ZOROARK]: HisuiZoroark,
    [Pokemon_1.Pkm.FROAKIE]: Froakie,
    [Pokemon_1.Pkm.FROGADIER]: Frogadier,
    [Pokemon_1.Pkm.GRENINJA]: Greninja,
    [Pokemon_1.Pkm.TYROGUE]: Tyrogue,
    [Pokemon_1.Pkm.HITMONLEE]: Hitmonlee,
    [Pokemon_1.Pkm.HITMONCHAN]: Hitmonchan,
    [Pokemon_1.Pkm.HITMONTOP]: Hitmontop,
    [Pokemon_1.Pkm.MIMIKYU]: Mimikyu,
    [Pokemon_1.Pkm.MIMIKYU_BUSTED]: MimikyuBusted,
    [Pokemon_1.Pkm.GRIMER]: Grimer,
    [Pokemon_1.Pkm.MUK]: Muk,
    [Pokemon_1.Pkm.ALOLAN_GRIMER]: AlolanGrimer,
    [Pokemon_1.Pkm.ALOLAN_MUK]: AlolanMuk,
    [Pokemon_1.Pkm.SHARPEDO]: Sharpedo,
    [Pokemon_1.Pkm.PINECO]: Pineco,
    [Pokemon_1.Pkm.FORRETRESS]: Forretress,
    [Pokemon_1.Pkm.SEEL]: Seel,
    [Pokemon_1.Pkm.DEWGONG]: Dewgong,
    [Pokemon_1.Pkm.ALOLAN_GEODUDE]: AlolanGeodude,
    [Pokemon_1.Pkm.ALOLAN_GRAVELER]: AlolanGraveler,
    [Pokemon_1.Pkm.ALOLAN_GOLEM]: AlolanGolem,
    [Pokemon_1.Pkm.EKANS]: Ekans,
    [Pokemon_1.Pkm.ARBOK]: Arbok,
    [Pokemon_1.Pkm.MIME_JR]: MimeJr,
    [Pokemon_1.Pkm.MR_MIME]: MrMime,
    [Pokemon_1.Pkm.ORIGIN_GIRATINA]: OriginGiratina,
    [Pokemon_1.Pkm.MELMETAL]: Melmetal,
    [Pokemon_1.Pkm.HOOPA]: Hoopa,
    [Pokemon_1.Pkm.HOOPA_UNBOUND]: HoopaUnbound,
    [Pokemon_1.Pkm.ZERAORA]: Zeraora,
    [Pokemon_1.Pkm.XERNEAS]: Xerneas,
    [Pokemon_1.Pkm.YVELTAL]: Yveltal,
    [Pokemon_1.Pkm.MARSHADOW]: Marshadow,
    [Pokemon_1.Pkm.HOOTHOOT]: Hoothoot,
    [Pokemon_1.Pkm.NOCTOWL]: Noctowl,
    [Pokemon_1.Pkm.BONSLEY]: Bonsley,
    [Pokemon_1.Pkm.SUDOWOODO]: Sudowoodo,
    [Pokemon_1.Pkm.COMBEE]: Combee,
    [Pokemon_1.Pkm.VESPIQUEEN]: Vespiqueen,
    [Pokemon_1.Pkm.SHUCKLE]: Shuckle,
    [Pokemon_1.Pkm.TEPIG]: Tepig,
    [Pokemon_1.Pkm.PIGNITE]: Pignite,
    [Pokemon_1.Pkm.EMBOAR]: Emboar,
    [Pokemon_1.Pkm.WYNAUT]: Wynaut,
    [Pokemon_1.Pkm.WOBBUFFET]: Wobbuffet,
    [Pokemon_1.Pkm.LUNATONE]: Lunatone,
    [Pokemon_1.Pkm.SOLROCK]: Solrock,
    [Pokemon_1.Pkm.POLIWRATH]: Poliwrath,
    [Pokemon_1.Pkm.WURMPLE]: Wurmple,
    [Pokemon_1.Pkm.SILCOON]: Silcoon,
    [Pokemon_1.Pkm.BEAUTIFLY]: Beautifly,
    [Pokemon_1.Pkm.CASCOON]: Cascoon,
    [Pokemon_1.Pkm.DUSTOX]: Dustox,
    [Pokemon_1.Pkm.TINKATINK]: Tinkatink,
    [Pokemon_1.Pkm.TINKATUFF]: Tinkatuff,
    [Pokemon_1.Pkm.TINKATON]: Tinkaton,
    [Pokemon_1.Pkm.PARAS]: Paras,
    [Pokemon_1.Pkm.PARASECT]: Parasect,
    [Pokemon_1.Pkm.MILTANK]: Miltank,
    [Pokemon_1.Pkm.MANKEY]: Mankey,
    [Pokemon_1.Pkm.PRIMEAPE]: Primeape,
    [Pokemon_1.Pkm.ANNIHILAPE]: Annihilape,
    [Pokemon_1.Pkm.SUNKERN]: Sunkern,
    [Pokemon_1.Pkm.SUNFLORA]: Sunflora,
    [Pokemon_1.Pkm.MARACTUS]: Maractus,
    [Pokemon_1.Pkm.PLUSLE]: Plusle,
    [Pokemon_1.Pkm.MINUN]: Minun,
    [Pokemon_1.Pkm.PINSIR]: Pinsir,
    [Pokemon_1.Pkm.NATU]: Natu,
    [Pokemon_1.Pkm.XATU]: Xatu,
    [Pokemon_1.Pkm.GLIGAR]: Gligar,
    [Pokemon_1.Pkm.GLISCOR]: Gliscor,
    [Pokemon_1.Pkm.SHELLDER]: Shellder,
    [Pokemon_1.Pkm.CLOYSTER]: Cloyster,
    [Pokemon_1.Pkm.SENTRET]: Sentret,
    [Pokemon_1.Pkm.FURRET]: Furret,
    [Pokemon_1.Pkm.SPECTRIER]: Spectrier,
    [Pokemon_1.Pkm.TORKOAL]: Torkoal,
    [Pokemon_1.Pkm.DELIBIRD]: Delibird,
    [Pokemon_1.Pkm.IRON_BUNDLE]: IronBundle,
    [Pokemon_1.Pkm.KARTANA]: Kartana,
    [Pokemon_1.Pkm.CHINGLING]: Chingling,
    [Pokemon_1.Pkm.CHIMECHO]: Chimecho,
    [Pokemon_1.Pkm.ALOLAN_RAICHU]: AlolanRaichu,
    [Pokemon_1.Pkm.DHELMISE]: Dhelmise,
    [Pokemon_1.Pkm.KOFFING]: Koffing,
    [Pokemon_1.Pkm.WEEZING]: Weezing,
    [Pokemon_1.Pkm.STARYU]: Staryu,
    [Pokemon_1.Pkm.STARMIE]: Starmie,
    [Pokemon_1.Pkm.NOSEPASS]: Nosepass,
    [Pokemon_1.Pkm.PROBOPASS]: Probopass,
    [Pokemon_1.Pkm.WOOBAT]: Woobat,
    [Pokemon_1.Pkm.SWOOBAT]: Swoobat,
    [Pokemon_1.Pkm.CLAUNCHER]: Clauncher,
    [Pokemon_1.Pkm.CLAWITZER]: Clawitzer,
    [Pokemon_1.Pkm.YANMA]: Yanma,
    [Pokemon_1.Pkm.YANMEGA]: Yanmega,
    [Pokemon_1.Pkm.HELIOPTILE]: Helioptile,
    [Pokemon_1.Pkm.HELIOLISK]: Heliolisk,
    [Pokemon_1.Pkm.BIDOOF]: Bidoof,
    [Pokemon_1.Pkm.BIBAREL]: Bibarel,
    [Pokemon_1.Pkm.SPINDA]: Spinda,
    [Pokemon_1.Pkm.BALTOY]: Baltoy,
    [Pokemon_1.Pkm.CLAYDOL]: Claydol,
    [Pokemon_1.Pkm.HERACROSS]: Heracross,
    [Pokemon_1.Pkm.PURRLOIN]: Purrloin,
    [Pokemon_1.Pkm.LIEPARD]: Liepard,
    [Pokemon_1.Pkm.BARBOACH]: Barboach,
    [Pokemon_1.Pkm.WHISCASH]: Whiscash,
    [Pokemon_1.Pkm.SCRAGGY]: Scraggy,
    [Pokemon_1.Pkm.SCRAFTY]: Scrafty,
    [Pokemon_1.Pkm.FINNEON]: Finneon,
    [Pokemon_1.Pkm.LUMINEON]: Lumineon,
    [Pokemon_1.Pkm.STUNKY]: Stunky,
    [Pokemon_1.Pkm.SKUNTANK]: Skuntank,
    [Pokemon_1.Pkm.ILLUMISE]: Illumise,
    [Pokemon_1.Pkm.VOLBEAT]: Volbeat,
    [Pokemon_1.Pkm.NECROZMA]: Necrozma,
    [Pokemon_1.Pkm.ULTRA_NECROZMA]: UltraNecrozma,
    [Pokemon_1.Pkm.CHERRUBI]: Cherrubi,
    [Pokemon_1.Pkm.CHERRIM]: Cherrim,
    [Pokemon_1.Pkm.CHERRIM_SUNLIGHT]: CherrimSunlight,
    [Pokemon_1.Pkm.MISDREAVUS]: Misdreavus,
    [Pokemon_1.Pkm.MISMAGIUS]: Mismagius,
    [Pokemon_1.Pkm.DODUO]: Doduo,
    [Pokemon_1.Pkm.DODRIO]: Dodrio,
    [Pokemon_1.Pkm.XURKITREE]: Xurkitree,
    [Pokemon_1.Pkm.TANDEMAUS]: Tandemaus,
    [Pokemon_1.Pkm.MAUSHOLD_THREE]: MausholdThree,
    [Pokemon_1.Pkm.MAUSHOLD_FOUR]: MausholdFour,
    [Pokemon_1.Pkm.KRICKETOT]: Kricketot,
    [Pokemon_1.Pkm.KRICKETUNE]: Kricketune,
    [Pokemon_1.Pkm.HIPPOPOTAS]: Hippopotas,
    [Pokemon_1.Pkm.HIPPODOWN]: Hippodown,
    [Pokemon_1.Pkm.WINGULL]: Wingull,
    [Pokemon_1.Pkm.PELIPPER]: Pelipper,
    [Pokemon_1.Pkm.NIHILEGO]: Nihilego,
    [Pokemon_1.Pkm.SOBBLE]: Sobble,
    [Pokemon_1.Pkm.DRIZZILE]: Drizzile,
    [Pokemon_1.Pkm.INTELEON]: Inteleon,
    [Pokemon_1.Pkm.TROPIUS]: Tropius,
    [Pokemon_1.Pkm.EXEGGCUTE]: Exeggcute,
    [Pokemon_1.Pkm.EXEGGUTOR]: Exeggutor,
    [Pokemon_1.Pkm.ALOLAN_EXEGGUTOR]: AlolanExeggutor,
    [Pokemon_1.Pkm.COMFEY]: Comfey,
    [Pokemon_1.Pkm.CARNIVINE]: Carnivine,
    [Pokemon_1.Pkm.HISUIAN_QWILFISH]: HisuianQwilfish,
    [Pokemon_1.Pkm.OVERQWIL]: Overqwil,
    [Pokemon_1.Pkm.HISUIAN_TYPHLOSION]: HisuianTyphlosion,
    [Pokemon_1.Pkm.LILLIPUP]: Lillipup,
    [Pokemon_1.Pkm.HERDIER]: Herdier,
    [Pokemon_1.Pkm.STOUTLAND]: Stoutland,
    [Pokemon_1.Pkm.ZIGZAGOON]: Zigzagoon,
    [Pokemon_1.Pkm.LINOONE]: Linoone,
    [Pokemon_1.Pkm.PHEROMOSA]: Pheromosa,
    [Pokemon_1.Pkm.SABLEYE]: Sableye,
    [Pokemon_1.Pkm.MEGA_SABLEYE]: MegaSableye,
    [Pokemon_1.Pkm.DRACOVISH]: Dracovish,
    [Pokemon_1.Pkm.CORSOLA]: Corsola,
    [Pokemon_1.Pkm.GALAR_CORSOLA]: GalarCorsola,
    [Pokemon_1.Pkm.CURSOLA]: Cursola,
    [Pokemon_1.Pkm.GIMMIGHOUL]: Gimmighoul,
    [Pokemon_1.Pkm.GHOLDENGO]: Gholdengo,
    [Pokemon_1.Pkm.PHANTUMP]: Phantump,
    [Pokemon_1.Pkm.TREVENANT]: Trevenant,
    [Pokemon_1.Pkm.SMEARGLE]: Smeargle,
    [Pokemon_1.Pkm.TOXEL]: Toxel,
    [Pokemon_1.Pkm.TOXTRICITY]: Toxtricity,
    [Pokemon_1.Pkm.BRUXISH]: Bruxish,
    [Pokemon_1.Pkm.SUBSTITUTE]: Substitute,
    [Pokemon_1.Pkm.CYCLIZAR]: Cyclizar,
    [Pokemon_1.Pkm.PAWNIARD]: Pawniard,
    [Pokemon_1.Pkm.BISHARP]: Bisharp,
    [Pokemon_1.Pkm.KINGAMBIT]: Kingambit,
    [Pokemon_1.Pkm.MINIOR]: Minior,
    [Pokemon_1.Pkm.MINIOR_KERNEL_RED]: MiniorKernelRed,
    [Pokemon_1.Pkm.MINIOR_KERNEL_BLUE]: MiniorKernelBlue,
    [Pokemon_1.Pkm.MINIOR_KERNEL_ORANGE]: MiniorKernelOrange,
    [Pokemon_1.Pkm.MINIOR_KERNEL_GREEN]: MiniorKernelGreen,
    [Pokemon_1.Pkm.FEEBAS]: Feebas,
    [Pokemon_1.Pkm.MILOTIC]: Milotic,
    [Pokemon_1.Pkm.MORPEKO]: Morpeko,
    [Pokemon_1.Pkm.MORPEKO_HANGRY]: MorpekoHangry,
    [Pokemon_1.Pkm.KANGASKHAN]: Kangaskhan,
    [Pokemon_1.Pkm.TEDDIURSA]: Teddiursa,
    [Pokemon_1.Pkm.URSARING]: Ursaring,
    [Pokemon_1.Pkm.URSALUNA]: Ursaluna,
    [Pokemon_1.Pkm.URSALUNA_BLOODMOON]: UrsalunaBloodmoon,
    [Pokemon_1.Pkm.AIPOM]: Aipom,
    [Pokemon_1.Pkm.AMBIPOM]: Ambipom,
    [Pokemon_1.Pkm.DEERLING]: Deerling,
    [Pokemon_1.Pkm.SAWSBUCK]: Sawsbuck,
    [Pokemon_1.Pkm.LICKITUNG]: Lickitung,
    [Pokemon_1.Pkm.LICKILICKY]: Lickilicky,
    [Pokemon_1.Pkm.PATRAT]: Patrat,
    [Pokemon_1.Pkm.WATCHOG]: Watchog,
    [Pokemon_1.Pkm.SPINARAK]: Spinarak,
    [Pokemon_1.Pkm.ARIADOS]: Ariados,
    [Pokemon_1.Pkm.TYPE_NULL]: TypeNull,
    [Pokemon_1.Pkm.SILVALLY]: Silvally,
    [Pokemon_1.Pkm.DEWPIDER]: Dewpider,
    [Pokemon_1.Pkm.ARAQUANID]: Araquanid,
    [Pokemon_1.Pkm.ROCKRUFF]: Rockruff,
    [Pokemon_1.Pkm.LYCANROC_DAY]: LycanrocDay,
    [Pokemon_1.Pkm.LYCANROC_DUSK]: LycanrocDusk,
    [Pokemon_1.Pkm.LYCANROC_NIGHT]: LycanrocNight,
    [Pokemon_1.Pkm.DRUDDIGON]: Druddigon,
    [Pokemon_1.Pkm.COSMOG]: Cosmog,
    [Pokemon_1.Pkm.COSMOEM]: Cosmoem,
    [Pokemon_1.Pkm.SOLGALEO]: Solgaleo,
    [Pokemon_1.Pkm.LUNALA]: Lunala,
    [Pokemon_1.Pkm.MAGEARNA]: Magearna,
    [Pokemon_1.Pkm.IMPIDIMP]: Impidimp,
    [Pokemon_1.Pkm.MORGREM]: Morgrem,
    [Pokemon_1.Pkm.GRIMMSNARL]: Grimmsnarl,
    [Pokemon_1.Pkm.DEOXYS]: Deoxys,
    [Pokemon_1.Pkm.DEOXYS_DEFENSE]: DeoxysDefense,
    [Pokemon_1.Pkm.DEOXYS_ATTACK]: DeoxysAttack,
    [Pokemon_1.Pkm.DEOXYS_SPEED]: DeoxysSpeed,
    [Pokemon_1.Pkm.CRABRAWLER]: Crabrawler,
    [Pokemon_1.Pkm.CRABOMINABLE]: Crabominable,
    [Pokemon_1.Pkm.CUTIEFLY]: Cutiefly,
    [Pokemon_1.Pkm.RIBOMBEE]: Ribombee,
    [Pokemon_1.Pkm.ZANGOOSE]: Zangoose,
    [Pokemon_1.Pkm.NICKIT]: Nickit,
    [Pokemon_1.Pkm.THIEVUL]: Thievul,
    [Pokemon_1.Pkm.DROWZEE]: Drowzee,
    [Pokemon_1.Pkm.HYPNO]: Hypno,
    [Pokemon_1.Pkm.WATTREL]: Wattrel,
    [Pokemon_1.Pkm.KILOWATTREL]: Kilowattrel,
    [Pokemon_1.Pkm.STANTLER]: Stantler,
    [Pokemon_1.Pkm.BURMY_PLANT]: BurmyPlant,
    [Pokemon_1.Pkm.BURMY_SANDY]: BurmySandy,
    [Pokemon_1.Pkm.BURMY_TRASH]: BurmyTrash,
    [Pokemon_1.Pkm.WORMADAM_PLANT]: WormadamPlant,
    [Pokemon_1.Pkm.WORMADAM_SANDY]: WormadamSandy,
    [Pokemon_1.Pkm.WORMADAM_TRASH]: WormadamTrash,
    [Pokemon_1.Pkm.MOTHIM]: Mothim,
    [Pokemon_1.Pkm.PALDEA_WOOPER]: PaldeaWooper,
    [Pokemon_1.Pkm.CLODSIRE]: Clodsire,
    [Pokemon_1.Pkm.FUECOCO]: Fuecoco,
    [Pokemon_1.Pkm.CROCALOR]: Crocalor,
    [Pokemon_1.Pkm.SKELEDIRGE]: Skeledirge,
    [Pokemon_1.Pkm.TANGELA]: Tangela,
    [Pokemon_1.Pkm.TANGROWTH]: Tangrowth,
    [Pokemon_1.Pkm.PSYDUCK]: Psyduck,
    [Pokemon_1.Pkm.GOLDUCK]: Golduck,
    [Pokemon_1.Pkm.PHANPY]: Phanpy,
    [Pokemon_1.Pkm.DONPHAN]: Donphan,
    [Pokemon_1.Pkm.SPOINK]: Spoink,
    [Pokemon_1.Pkm.GRUMPIG]: Grumpig,
    [Pokemon_1.Pkm.SINISTEA]: Sinistea,
    [Pokemon_1.Pkm.POLTEAGEIST]: Polteageist,
    [Pokemon_1.Pkm.FERROSEED]: Ferroseed,
    [Pokemon_1.Pkm.FERROTHORN]: Ferrothorn,
    [Pokemon_1.Pkm.GOLETT]: Golett,
    [Pokemon_1.Pkm.GOLURK]: Golurk,
    [Pokemon_1.Pkm.TRUBBISH]: Trubbish,
    [Pokemon_1.Pkm.GARBODOR]: Garbodor,
    [Pokemon_1.Pkm.GRUBBIN]: Grubbin,
    [Pokemon_1.Pkm.CHARJABUG]: Charjabug,
    [Pokemon_1.Pkm.VIKAVOLT]: Vikavolt,
    [Pokemon_1.Pkm.SHELLOS_WEST_SEA]: ShellosWestSea,
    [Pokemon_1.Pkm.GASTRODON_WEST_SEA]: GastrodonWestSea,
    [Pokemon_1.Pkm.SHELLOS_EAST_SEA]: ShellosEastSea,
    [Pokemon_1.Pkm.GASTRODON_EAST_SEA]: GastrodonEastSea,
    [Pokemon_1.Pkm.MUNNA]: Munna,
    [Pokemon_1.Pkm.MUSHARNA]: Musharna,
    [Pokemon_1.Pkm.RUFFLET]: Rufflet,
    [Pokemon_1.Pkm.BRAVIARY]: Braviary,
    [Pokemon_1.Pkm.HEATMOR]: Heatmor,
    [Pokemon_1.Pkm.KLEFKI]: Klefki,
    [Pokemon_1.Pkm.HAWLUCHA]: Hawlucha,
    [Pokemon_1.Pkm.MIENFOO]: Mienfoo,
    [Pokemon_1.Pkm.MIENSHAO]: Mienshao,
    [Pokemon_1.Pkm.STONJOURNER]: Stonjourner,
    [Pokemon_1.Pkm.HISUI_SNEASEL]: HisuiSneasel,
    [Pokemon_1.Pkm.SNEASLER]: Sneasler,
    [Pokemon_1.Pkm.PYUKUMUKU]: Pyukumuku,
    [Pokemon_1.Pkm.POIPOLE]: Poipole,
    [Pokemon_1.Pkm.NAGANADEL]: Naganadel,
    [Pokemon_1.Pkm.CRAMORANT]: Cramorant,
    [Pokemon_1.Pkm.ARROKUDA]: Arrokuda,
    [Pokemon_1.Pkm.WISHIWASHI]: Wishiwashi,
    [Pokemon_1.Pkm.WISHIWASHI_SCHOOL]: WishiwashiSchool,
    [Pokemon_1.Pkm.PAWMI]: Pawmi,
    [Pokemon_1.Pkm.PAWMO]: Pawmo,
    [Pokemon_1.Pkm.PAWMOT]: Pawmot,
    [Pokemon_1.Pkm.GOLDEEN]: Goldeen,
    [Pokemon_1.Pkm.SEAKING]: Seaking,
    [Pokemon_1.Pkm.LUVDISC]: Luvdisc,
    [Pokemon_1.Pkm.AUDINO]: Audino,
    [Pokemon_1.Pkm.PETILIL]: Petilil,
    [Pokemon_1.Pkm.LILIGANT]: Lilligant,
    [Pokemon_1.Pkm.MANTYKE]: Mantyke,
    [Pokemon_1.Pkm.MANTINE]: Mantine,
    [Pokemon_1.Pkm.REMORAID]: Remoraid,
    [Pokemon_1.Pkm.OCTILLERY]: Octillery,
    [Pokemon_1.Pkm.SIGILYPH]: Sigilyph,
    [Pokemon_1.Pkm.FRIGIBAX]: Frigibax,
    [Pokemon_1.Pkm.ARCTIBAX]: Arctibax,
    [Pokemon_1.Pkm.BAXCALIBUR]: Baxcalibur,
    [Pokemon_1.Pkm.BINACLE]: Binacle,
    [Pokemon_1.Pkm.BARBARACLE]: Barbaracle,
    [Pokemon_1.Pkm.SKARMORY]: Skarmory,
    [Pokemon_1.Pkm.DURANT]: Durant,
    [Pokemon_1.Pkm.OGERPON_TEAL]: OgerponTeal,
    [Pokemon_1.Pkm.OGERPON_TEAL_MASK]: OgerponTealMask,
    [Pokemon_1.Pkm.OGERPON_WELLSPRING]: OgerponWellspring,
    [Pokemon_1.Pkm.OGERPON_WELLSPRING_MASK]: OgerponWellspringMask,
    [Pokemon_1.Pkm.OGERPON_HEARTHFLAME]: OgerponHearthflame,
    [Pokemon_1.Pkm.OGERPON_HEARTHFLAME_MASK]: OgerponHearthflameMask,
    [Pokemon_1.Pkm.OGERPON_CORNERSTONE]: OgerponCornerstone,
    [Pokemon_1.Pkm.OGERPON_CORNERSTONE_MASK]: OgerponCornerstoneMask,
    [Pokemon_1.Pkm.IRON_HANDS]: IronHands,
    [Pokemon_1.Pkm.ROOKIDEE]: Rookidee,
    [Pokemon_1.Pkm.CORVISQUIRE]: Corvisquire,
    [Pokemon_1.Pkm.CORVIKNIGHT]: Corviknight,
    [Pokemon_1.Pkm.MURKROW]: Murkrow,
    [Pokemon_1.Pkm.HONCHKROW]: Honchkrow,
    [Pokemon_1.Pkm.TURTONATOR]: Turtonator,
    [Pokemon_1.Pkm.SANDYGAST]: Sandygast,
    [Pokemon_1.Pkm.PALOSSAND]: Palossand,
    [Pokemon_1.Pkm.SKORUPI]: Skorupi,
    [Pokemon_1.Pkm.DRAPION]: Drapion,
    [Pokemon_1.Pkm.DARUMAKA]: Darumaka,
    [Pokemon_1.Pkm.DARMANITAN]: Darmanitan,
    [Pokemon_1.Pkm.DARMANITAN_ZEN]: DarmanitanZen,
    [Pokemon_1.Pkm.KRABBY]: Krabby,
    [Pokemon_1.Pkm.KINGLER]: Kingler,
    [Pokemon_1.Pkm.ZYGARDE_10]: Zygarde10,
    [Pokemon_1.Pkm.ZYGARDE_50]: Zygarde50,
    [Pokemon_1.Pkm.ZYGARDE_100]: Zygarde100,
    [Pokemon_1.Pkm.SIZZLIPEDE]: Sizzlipede,
    [Pokemon_1.Pkm.CENTISKORCH]: Centiskorch,
    [Pokemon_1.Pkm.STUFFUL]: Stufful,
    [Pokemon_1.Pkm.BEWEAR]: Bewear,
    [Pokemon_1.Pkm.GLIMMET]: Glimmet,
    [Pokemon_1.Pkm.GLIMMORA]: Glimmora,
    [Pokemon_1.Pkm.FLETCHLING]: Fletchling,
    [Pokemon_1.Pkm.FLETCHINDER]: Fletchinder,
    [Pokemon_1.Pkm.TALONFLAME]: Talonflame,
    [Pokemon_1.Pkm.VULLABY]: Vullaby,
    [Pokemon_1.Pkm.MANDIBUZZ]: Mandibuzz,
    [Pokemon_1.Pkm.INKAY]: Inkay,
    [Pokemon_1.Pkm.MALAMAR]: Malamar,
    [Pokemon_1.Pkm.HISUI_VOLTORB]: HisuiVoltorb,
    [Pokemon_1.Pkm.HISUI_ELECTRODE]: HisuiElectrode,
    [Pokemon_1.Pkm.TIMBURR]: Timburr,
    [Pokemon_1.Pkm.GURDURR]: Gurdurr,
    [Pokemon_1.Pkm.CONKELDURR]: Conkeldurr,
    [Pokemon_1.Pkm.PILLAR_WOOD]: PillarWood,
    [Pokemon_1.Pkm.PILLAR_IRON]: PillarIron,
    [Pokemon_1.Pkm.PILLAR_CONCRETE]: PillarConcrete
};
//# sourceMappingURL=pokemon.js.map