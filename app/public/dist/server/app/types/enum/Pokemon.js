"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimationConfig = exports.UnownsStage3 = exports.UnownsStage2 = exports.UnownsStage1 = exports.Unowns = exports.PkmDuos = exports.PkmDuo = exports.PkmRegionalVariants = exports.PkmFamily = exports.PkmByIndex = exports.PkmIndex = exports.Pkm = void 0;
exports.getUnownsPoolPerStage = getUnownsPoolPerStage;
const Animation_1 = require("../Animation");
var Pkm;
(function (Pkm) {
    Pkm["ABOMASNOW"] = "ABOMASNOW";
    Pkm["ABRA"] = "ABRA";
    Pkm["ABSOL"] = "ABSOL";
    Pkm["AEGISLASH"] = "AEGISLASH";
    Pkm["AEGISLASH_BLADE"] = "AEGISLASH_BLADE";
    Pkm["AERODACTYL"] = "AERODACTYL";
    Pkm["AGGRON"] = "AGGRON";
    Pkm["AIPOM"] = "AIPOM";
    Pkm["ALAKAZAM"] = "ALAKAZAM";
    Pkm["ALOLAN_DIGLETT"] = "ALOLAN_DIGLETT";
    Pkm["ALOLAN_DUGTRIO"] = "ALOLAN_DUGTRIO";
    Pkm["ALOLAN_EXEGGUTOR"] = "ALOLAN_EXEGGUTOR";
    Pkm["ALOLAN_GEODUDE"] = "ALOLAN_GEODUDE";
    Pkm["ALOLAN_GOLEM"] = "ALOLAN_GOLEM";
    Pkm["ALOLAN_GRAVELER"] = "ALOLAN_GRAVELER";
    Pkm["ALOLAN_GRIMER"] = "ALOLAN_GRIMER";
    Pkm["ALOLAN_MAROWAK"] = "ALOLAN_MAROWAK";
    Pkm["ALOLAN_MEOWTH"] = "ALOLAN_MEOWTH";
    Pkm["ALOLAN_MUK"] = "ALOLAN_MUK";
    Pkm["ALOLAN_NINETALES"] = "ALOLAN_NINETALES";
    Pkm["ALOLAN_PERSIAN"] = "ALOLAN_PERSIAN";
    Pkm["ALOLAN_RAICHU"] = "ALOLAN_RAICHU";
    Pkm["ALOLAN_RATICATE"] = "ALOLAN_RATICATE";
    Pkm["ALOLAN_RATTATA"] = "ALOLAN_RATTATA";
    Pkm["ALOLAN_VULPIX"] = "ALOLAN_VULPIX";
    Pkm["ALTARIA"] = "ALTARIA";
    Pkm["AMAURA"] = "AMAURA";
    Pkm["AMBIPOM"] = "AMBIPOM";
    Pkm["AMPHAROS"] = "AMPHAROS";
    Pkm["ANNIHILAPE"] = "ANNIHILAPE";
    Pkm["ANORITH"] = "ANORITH";
    Pkm["APPLETUN"] = "APPLETUN";
    Pkm["APPLIN"] = "APPLIN";
    Pkm["ARAQUANID"] = "ARAQUANID";
    Pkm["ARBOK"] = "ARBOK";
    Pkm["ARCANINE"] = "ARCANINE";
    Pkm["ARCEUS"] = "ARCEUS";
    Pkm["ARCHEN"] = "ARCHEN";
    Pkm["ARCHEOPS"] = "ARCHEOPS";
    Pkm["ARCTIBAX"] = "ARCTIBAX";
    Pkm["ARIADOS"] = "ARIADOS";
    Pkm["ARMALDO"] = "ARMALDO";
    Pkm["ARON"] = "ARON";
    Pkm["ARROKUDA"] = "ARROKUDA";
    Pkm["ARTICUNO"] = "ARTICUNO";
    Pkm["AUDINO"] = "AUDINO";
    Pkm["AURORUS"] = "AURORUS";
    Pkm["AXEW"] = "AXEW";
    Pkm["AZELF"] = "AZELF";
    Pkm["AZUMARILL"] = "AZUMARILL";
    Pkm["AZURILL"] = "AZURILL";
    Pkm["BAGON"] = "BAGON";
    Pkm["BALTOY"] = "BALTOY";
    Pkm["BANETTE"] = "BANETTE";
    Pkm["BARBARACLE"] = "BARBARACLE";
    Pkm["BARBOACH"] = "BARBOACH";
    Pkm["BASTIODON"] = "BASTIODON";
    Pkm["BAXCALIBUR"] = "BAXCALIBUR";
    Pkm["BAYLEEF"] = "BAYLEEF";
    Pkm["BEAUTIFLY"] = "BEAUTIFLY";
    Pkm["BEEDRILL"] = "BEEDRILL";
    Pkm["BELDUM"] = "BELDUM";
    Pkm["BELLOSSOM"] = "BELLOSSOM";
    Pkm["BELLSPROUT"] = "BELLSPROUT";
    Pkm["BIBAREL"] = "BIBAREL";
    Pkm["BIDOOF"] = "BIDOOF";
    Pkm["BINACLE"] = "BINACLE";
    Pkm["BISHARP"] = "BISHARP";
    Pkm["BLACEPHALON"] = "BLACEPHALON";
    Pkm["BLASTOISE"] = "BLASTOISE";
    Pkm["BLAZIKEN"] = "BLAZIKEN";
    Pkm["BLISSEY"] = "BLISSEY";
    Pkm["BONSLEY"] = "BONSLEY";
    Pkm["BOUNSWEET"] = "BOUNSWEET";
    Pkm["BRAIXEN"] = "BRAIXEN";
    Pkm["BRAVIARY"] = "BRAVIARY";
    Pkm["BRELOOM"] = "BRELOOM";
    Pkm["BRIONNE"] = "BRIONNE";
    Pkm["BRONZONG"] = "BRONZONG";
    Pkm["BRONZOR"] = "BRONZOR";
    Pkm["BRUXISH"] = "BRUXISH";
    Pkm["BUDEW"] = "BUDEW";
    Pkm["BUIZEL"] = "BUIZEL";
    Pkm["BULBASAUR"] = "BULBASAUR";
    Pkm["BUNEARY"] = "BUNEARY";
    Pkm["BURMY_PLANT"] = "BURMY_PLANT";
    Pkm["BURMY_SANDY"] = "BURMY_SANDY";
    Pkm["BURMY_TRASH"] = "BURMY_TRASH";
    Pkm["BUTTERFREE"] = "BUTTERFREE";
    Pkm["CACNEA"] = "CACNEA";
    Pkm["CACTURNE"] = "CACTURNE";
    Pkm["CAMERUPT"] = "CAMERUPT";
    Pkm["CARBINK"] = "CARBINK";
    Pkm["CARNIVINE"] = "CARNIVINE";
    Pkm["CARVANHA"] = "CARVANHA";
    Pkm["CASCOON"] = "CASCOON";
    Pkm["CASTFORM"] = "CASTFORM";
    Pkm["CASTFORM_HAIL"] = "CASTFORM_HAIL";
    Pkm["CASTFORM_RAIN"] = "CASTFORM_RAIN";
    Pkm["CASTFORM_SUN"] = "CASTFORM_SUN";
    Pkm["CATERPIE"] = "CATERPIE";
    Pkm["CELEBI"] = "CELEBI";
    Pkm["CENTISKORCH"] = "CENTISKORCH";
    Pkm["CHANDELURE"] = "CHANDELURE";
    Pkm["CHANSEY"] = "CHANSEY";
    Pkm["CHARIZARD"] = "CHARIZARD";
    Pkm["CHARJABUG"] = "CHARJABUG";
    Pkm["CHARMANDER"] = "CHARMANDER";
    Pkm["CHARMELEON"] = "CHARMELEON";
    Pkm["CHATOT"] = "CHATOT";
    Pkm["CHERRIM"] = "CHERRIM";
    Pkm["CHERRIM_SUNLIGHT"] = "CHERRIM_SUNLIGHT";
    Pkm["CHERRUBI"] = "CHERRUBI";
    Pkm["CHIKORITA"] = "CHIKORITA";
    Pkm["CHIMCHAR"] = "CHIMCHAR";
    Pkm["CHIMECHO"] = "CHIMECHO";
    Pkm["CHINCHOU"] = "CHINCHOU";
    Pkm["CHINGLING"] = "CHINGLING";
    Pkm["CINDERACE"] = "CINDERACE";
    Pkm["CLAMPERL"] = "CLAMPERL";
    Pkm["CLAUNCHER"] = "CLAUNCHER";
    Pkm["CLAWITZER"] = "CLAWITZER";
    Pkm["CLAYDOL"] = "CLAYDOL";
    Pkm["CLEFABLE"] = "CLEFABLE";
    Pkm["CLEFAIRY"] = "CLEFAIRY";
    Pkm["CLEFFA"] = "CLEFFA";
    Pkm["CLODSIRE"] = "CLODSIRE";
    Pkm["CLOYSTER"] = "CLOYSTER";
    Pkm["COBALION"] = "COBALION";
    Pkm["COMBEE"] = "COMBEE";
    Pkm["COMBUSKEN"] = "COMBUSKEN";
    Pkm["COMFEY"] = "COMFEY";
    Pkm["CONKELDURR"] = "CONKELDURR";
    Pkm["CORPHISH"] = "CORPHISH";
    Pkm["CORSOLA"] = "CORSOLA";
    Pkm["CORVIKNIGHT"] = "CORVIKNIGHT";
    Pkm["CORVISQUIRE"] = "CORVISQUIRE";
    Pkm["COSMOEM"] = "COSMOEM";
    Pkm["COSMOG"] = "COSMOG";
    Pkm["CRABOMINABLE"] = "CRABOMINABLE";
    Pkm["CRABRAWLER"] = "CRABRAWLER";
    Pkm["CRADILY"] = "CRADILY";
    Pkm["CRAMORANT"] = "CRAMORANT";
    Pkm["CRANIDOS"] = "CRANIDOS";
    Pkm["CRAWDAUNT"] = "CRAWDAUNT";
    Pkm["CRESSELIA"] = "CRESSELIA";
    Pkm["CROAGUNK"] = "CROAGUNK";
    Pkm["CROBAT"] = "CROBAT";
    Pkm["CROCALOR"] = "CROCALOR";
    Pkm["CROCONAW"] = "CROCONAW";
    Pkm["CUBONE"] = "CUBONE";
    Pkm["CURSOLA"] = "CURSOLA";
    Pkm["CUTIEFLY"] = "CUTIEFLY";
    Pkm["CYCLIZAR"] = "CYCLIZAR";
    Pkm["CYNDAQUIL"] = "CYNDAQUIL";
    Pkm["DARKRAI"] = "DARKRAI";
    Pkm["DARMANITAN"] = "DARMANITAN";
    Pkm["DARMANITAN_ZEN"] = "DARMANITAN_ZEN";
    Pkm["DARTIX"] = "DARTIX";
    Pkm["DARUMAKA"] = "DARUMAKA";
    Pkm["DECIDUEYE"] = "DECIDUEYE";
    Pkm["DEERLING"] = "DEERLING";
    Pkm["DEFAULT"] = "DEFAULT";
    Pkm["DEINO"] = "DEINO";
    Pkm["DELIBIRD"] = "DELIBIRD";
    Pkm["DELPHOX"] = "DELPHOX";
    Pkm["DEOXYS"] = "DEOXYS";
    Pkm["DEOXYS_ATTACK"] = "DEOXYS_ATTACK";
    Pkm["DEOXYS_DEFENSE"] = "DEOXYS_DEFENSE";
    Pkm["DEOXYS_SPEED"] = "DEOXYS_SPEED";
    Pkm["DEWGONG"] = "DEWGONG";
    Pkm["DEWOTT"] = "DEWOTT";
    Pkm["DEWPIDER"] = "DEWPIDER";
    Pkm["DHELMISE"] = "DHELMISE";
    Pkm["DIALGA"] = "DIALGA";
    Pkm["DIANCIE"] = "DIANCIE";
    Pkm["DIGLETT"] = "DIGLETT";
    Pkm["DITTO"] = "DITTO";
    Pkm["DODRIO"] = "DODRIO";
    Pkm["DODUO"] = "DODUO";
    Pkm["DONPHAN"] = "DONPHAN";
    Pkm["DOUBLADE"] = "DOUBLADE";
    Pkm["DRACOVISH"] = "DRACOVISH";
    Pkm["DRAGAPULT"] = "DRAGAPULT";
    Pkm["DRAGONAIR"] = "DRAGONAIR";
    Pkm["DRAGONITE"] = "DRAGONITE";
    Pkm["DRAKLOAK"] = "DRAKLOAK";
    Pkm["DRAPION"] = "DRAPION";
    Pkm["DRATINI"] = "DRATINI";
    Pkm["DREEPY"] = "DREEPY";
    Pkm["DRIFBLIM"] = "DRIFBLIM";
    Pkm["DRIFLOON"] = "DRIFLOON";
    Pkm["DRIZZILE"] = "DRIZZILE";
    Pkm["DROWZEE"] = "DROWZEE";
    Pkm["DRUDDIGON"] = "DRUDDIGON";
    Pkm["DUGTRIO"] = "DUGTRIO";
    Pkm["DUOSION"] = "DUOSION";
    Pkm["DURANT"] = "DURANT";
    Pkm["DUSCLOPS"] = "DUSCLOPS";
    Pkm["DUSKNOIR"] = "DUSKNOIR";
    Pkm["DUSKULL"] = "DUSKULL";
    Pkm["DUSTOX"] = "DUSTOX";
    Pkm["EEVEE"] = "EEVEE";
    Pkm["EGG"] = "EGG";
    Pkm["EKANS"] = "EKANS";
    Pkm["ELECTABUZZ"] = "ELECTABUZZ";
    Pkm["ELECTIVIRE"] = "ELECTIVIRE";
    Pkm["ELECTRIKE"] = "ELECTRIKE";
    Pkm["ELECTRODE"] = "ELECTRODE";
    Pkm["ELEKID"] = "ELEKID";
    Pkm["EMBOAR"] = "EMBOAR";
    Pkm["EMPOLEON"] = "EMPOLEON";
    Pkm["ENAMORUS"] = "ENAMORUS";
    Pkm["ENTEI"] = "ENTEI";
    Pkm["ESPEON"] = "ESPEON";
    Pkm["ETERNATUS"] = "ETERNATUS";
    Pkm["EXEGGCUTE"] = "EXEGGCUTE";
    Pkm["EXEGGUTOR"] = "EXEGGUTOR";
    Pkm["EXPLOUD"] = "EXPLOUD";
    Pkm["FARFETCH_D"] = "FARFETCH_D";
    Pkm["FEAROW"] = "FEAROW";
    Pkm["FEEBAS"] = "FEEBAS";
    Pkm["FENNEKIN"] = "FENNEKIN";
    Pkm["FERALIGATR"] = "FERALIGATR";
    Pkm["FERROSEED"] = "FERROSEED";
    Pkm["FERROTHORN"] = "FERROTHORN";
    Pkm["FINNEON"] = "FINNEON";
    Pkm["FLABEBE"] = "FLABEBE";
    Pkm["FLAFFY"] = "FLAFFY";
    Pkm["FLAREON"] = "FLAREON";
    Pkm["FLETCHINDER"] = "FLETCHINDER";
    Pkm["FLETCHLING"] = "FLETCHLING";
    Pkm["FLOATZEL"] = "FLOATZEL";
    Pkm["FLOETTE"] = "FLOETTE";
    Pkm["FLORGES"] = "FLORGES";
    Pkm["FLYGON"] = "FLYGON";
    Pkm["FORRETRESS"] = "FORRETRESS";
    Pkm["FRAXURE"] = "FRAXURE";
    Pkm["FRIGIBAX"] = "FRIGIBAX";
    Pkm["FROAKIE"] = "FROAKIE";
    Pkm["FROGADIER"] = "FROGADIER";
    Pkm["FROSLASS"] = "FROSLASS";
    Pkm["FROSMOTH"] = "FROSMOTH";
    Pkm["FUECOCO"] = "FUECOCO";
    Pkm["FURRET"] = "FURRET";
    Pkm["GABITE"] = "GABITE";
    Pkm["GALAR_CORSOLA"] = "GALAR_CORSOLA";
    Pkm["GALARIAN_ARTICUNO"] = "GALARIAN_ARTICUNO";
    Pkm["GALARIAN_ZAPDOS"] = "GALARIAN_ZAPDOS";
    Pkm["GALARIAN_MOLTRES"] = "GALARIAN_MOLTRES";
    Pkm["GALARIAN_PONYTA"] = "GALARIAN_PONYTA";
    Pkm["GALARIAN_RAPIDASH"] = "GALARIAN_RAPIDASH";
    Pkm["GALVANTULA"] = "GALVANTULA";
    Pkm["GARBODOR"] = "GARBODOR";
    Pkm["GARCHOMP"] = "GARCHOMP";
    Pkm["GARDEVOIR"] = "GARDEVOIR";
    Pkm["GASTLY"] = "GASTLY";
    Pkm["GASTRODON_EAST_SEA"] = "GASTRODON_EAST_SEA";
    Pkm["GASTRODON_WEST_SEA"] = "GASTRODON_WEST_SEA";
    Pkm["GENESECT"] = "GENESECT";
    Pkm["GENGAR"] = "GENGAR";
    Pkm["GEODUDE"] = "GEODUDE";
    Pkm["GHOLDENGO"] = "GHOLDENGO";
    Pkm["GIBLE"] = "GIBLE";
    Pkm["GIMMIGHOUL"] = "GIMMIGHOUL";
    Pkm["GIRATINA"] = "GIRATINA";
    Pkm["GLACEON"] = "GLACEON";
    Pkm["GLALIE"] = "GLALIE";
    Pkm["GLIGAR"] = "GLIGAR";
    Pkm["GLISCOR"] = "GLISCOR";
    Pkm["GLIMMET"] = "GLIMMET";
    Pkm["GLIMMORA"] = "GLIMMORA";
    Pkm["GLOOM"] = "GLOOM";
    Pkm["GOLBAT"] = "GOLBAT";
    Pkm["GOLDEEN"] = "GOLDEEN";
    Pkm["GOLDUCK"] = "GOLDUCK";
    Pkm["GOLEM"] = "GOLEM";
    Pkm["GOLETT"] = "GOLETT";
    Pkm["GOLURK"] = "GOLURK";
    Pkm["GOODRA"] = "GOODRA";
    Pkm["GOOMY"] = "GOOMY";
    Pkm["GOREBYSS"] = "GOREBYSS";
    Pkm["GOTHITA"] = "GOTHITA";
    Pkm["GOTHITELLE"] = "GOTHITELLE";
    Pkm["GOTHORITA"] = "GOTHORITA";
    Pkm["GOURGEIST"] = "GOURGEIST";
    Pkm["GRANBULL"] = "GRANBULL";
    Pkm["GRAVELER"] = "GRAVELER";
    Pkm["GRENINJA"] = "GRENINJA";
    Pkm["GRIMER"] = "GRIMER";
    Pkm["GRIMMSNARL"] = "GRIMMSNARL";
    Pkm["GROTLE"] = "GROTLE";
    Pkm["GROUDON"] = "GROUDON";
    Pkm["GROVYLE"] = "GROVYLE";
    Pkm["GROWLITHE"] = "GROWLITHE";
    Pkm["GRUBBIN"] = "GRUBBIN";
    Pkm["GRUMPIG"] = "GRUMPIG";
    Pkm["GURDURR"] = "GURDURR";
    Pkm["GUZZLORD"] = "GUZZLORD";
    Pkm["GYARADOS"] = "GYARADOS";
    Pkm["HAKAMO_O"] = "HAKAMO_O";
    Pkm["HAPPINY"] = "HAPPINY";
    Pkm["HARIYAMA"] = "HARIYAMA";
    Pkm["HATENNA"] = "HATENNA";
    Pkm["HATTERENE"] = "HATTERENE";
    Pkm["HATTREM"] = "HATTREM";
    Pkm["HAUNTER"] = "HAUNTER";
    Pkm["HAWLUCHA"] = "HAWLUCHA";
    Pkm["HAXORUS"] = "HAXORUS";
    Pkm["HEATMOR"] = "HEATMOR";
    Pkm["HEATRAN"] = "HEATRAN";
    Pkm["HELIOLISK"] = "HELIOLISK";
    Pkm["HELIOPTILE"] = "HELIOPTILE";
    Pkm["HERACROSS"] = "HERACROSS";
    Pkm["HERDIER"] = "HERDIER";
    Pkm["HIPPODOWN"] = "HIPPODOWN";
    Pkm["HIPPOPOTAS"] = "HIPPOPOTAS";
    Pkm["HISUI_ARCANINE"] = "HISUI_ARCANINE";
    Pkm["HISUI_ELECTRODE"] = "HISUI_ELECTRODE";
    Pkm["HISUI_GOODRA"] = "HISUI_GOODRA";
    Pkm["HISUI_GROWLITHE"] = "HISUI_GROWLITHE";
    Pkm["HISUI_SLIGGOO"] = "HISUI_SLIGGOO";
    Pkm["HISUI_SNEASEL"] = "HISUI_SNEASEL";
    Pkm["HISUI_VOLTORB"] = "HISUI_VOLTORB";
    Pkm["HISUI_ZOROARK"] = "HISUI_ZOROARK";
    Pkm["HISUI_ZORUA"] = "HISUI_ZORUA";
    Pkm["HISUIAN_QWILFISH"] = "HISUIAN_QWILFISH";
    Pkm["HISUIAN_TYPHLOSION"] = "HISUIAN_TYPHLOSION";
    Pkm["HITMONCHAN"] = "HITMONCHAN";
    Pkm["HITMONLEE"] = "HITMONLEE";
    Pkm["HITMONTOP"] = "HITMONTOP";
    Pkm["HO_OH"] = "HO_OH";
    Pkm["HONCHKROW"] = "HONCHKROW";
    Pkm["HONEDGE"] = "HONEDGE";
    Pkm["HOOPA"] = "HOOPA";
    Pkm["HOOPA_UNBOUND"] = "HOOPA_UNBOUND";
    Pkm["HOOTHOOT"] = "HOOTHOOT";
    Pkm["HOPPIP"] = "HOPPIP";
    Pkm["HORSEA"] = "HORSEA";
    Pkm["HOUNDOOM"] = "HOUNDOOM";
    Pkm["HOUNDOUR"] = "HOUNDOUR";
    Pkm["HUNTAIL"] = "HUNTAIL";
    Pkm["HYDREIGON"] = "HYDREIGON";
    Pkm["HYPNO"] = "HYPNO";
    Pkm["IGGLYBUFF"] = "IGGLYBUFF";
    Pkm["ILLUMISE"] = "ILLUMISE";
    Pkm["IMPIDIMP"] = "IMPIDIMP";
    Pkm["INFERNAPE"] = "INFERNAPE";
    Pkm["INTELEON"] = "INTELEON";
    Pkm["IRON_BUNDLE"] = "IRON_BUNDLE";
    Pkm["IRON_HANDS"] = "IRON_HANDS";
    Pkm["IVYSAUR"] = "IVYSAUR";
    Pkm["JANGMO_O"] = "JANGMO_O";
    Pkm["JIGGLYPUFF"] = "JIGGLYPUFF";
    Pkm["JIRACHI"] = "JIRACHI";
    Pkm["JOLTEON"] = "JOLTEON";
    Pkm["JOLTIK"] = "JOLTIK";
    Pkm["JUMPLUFF"] = "JUMPLUFF";
    Pkm["JYNX"] = "JYNX";
    Pkm["KABUTO"] = "KABUTO";
    Pkm["KABUTOPS"] = "KABUTOPS";
    Pkm["KADABRA"] = "KADABRA";
    Pkm["KAKUNA"] = "KAKUNA";
    Pkm["KANGASKHAN"] = "KANGASKHAN";
    Pkm["KARTANA"] = "KARTANA";
    Pkm["KECLEON"] = "KECLEON";
    Pkm["KELDEO"] = "KELDEO";
    Pkm["KILOWATTREL"] = "KILOWATTREL";
    Pkm["KINGAMBIT"] = "KINGAMBIT";
    Pkm["KINGDRA"] = "KINGDRA";
    Pkm["KINGLER"] = "KINGLER";
    Pkm["KIRLIA"] = "KIRLIA";
    Pkm["KLEAVOR"] = "KLEAVOR";
    Pkm["KLEFKI"] = "KLEFKI";
    Pkm["KOFFING"] = "KOFFING";
    Pkm["KOMMO_O"] = "KOMMO_O";
    Pkm["KRABBY"] = "KRABBY";
    Pkm["KRICKETOT"] = "KRICKETOT";
    Pkm["KRICKETUNE"] = "KRICKETUNE";
    Pkm["KROKOROK"] = "KROKOROK";
    Pkm["KROOKODILE"] = "KROOKODILE";
    Pkm["KYOGRE"] = "KYOGRE";
    Pkm["KYUREM"] = "KYUREM";
    Pkm["LAIRON"] = "LAIRON";
    Pkm["LAMPENT"] = "LAMPENT";
    Pkm["LANDORUS"] = "LANDORUS";
    Pkm["LANTURN"] = "LANTURN";
    Pkm["LAPRAS"] = "LAPRAS";
    Pkm["LARVESTA"] = "LARVESTA";
    Pkm["LARVITAR"] = "LARVITAR";
    Pkm["LATIAS"] = "LATIAS";
    Pkm["LATIOS"] = "LATIOS";
    Pkm["LEAFEON"] = "LEAFEON";
    Pkm["LEAVANNY"] = "LEAVANNY";
    Pkm["LICKILICKY"] = "LICKILICKY";
    Pkm["LICKITUNG"] = "LICKITUNG";
    Pkm["LIEPARD"] = "LIEPARD";
    Pkm["LILEEP"] = "LILEEP";
    Pkm["LILIGANT"] = "LILIGANT";
    Pkm["LILLIPUP"] = "LILLIPUP";
    Pkm["LINOONE"] = "LINOONE";
    Pkm["LITWICK"] = "LITWICK";
    Pkm["LOMBRE"] = "LOMBRE";
    Pkm["LOPUNNY"] = "LOPUNNY";
    Pkm["LOTAD"] = "LOTAD";
    Pkm["LOUDRED"] = "LOUDRED";
    Pkm["LUCARIO"] = "LUCARIO";
    Pkm["LUDICOLO"] = "LUDICOLO";
    Pkm["LUGIA"] = "LUGIA";
    Pkm["LUMINEON"] = "LUMINEON";
    Pkm["LUNALA"] = "LUNALA";
    Pkm["LUNATONE"] = "LUNATONE";
    Pkm["LUVDISC"] = "LUVDISC";
    Pkm["LUXIO"] = "LUXIO";
    Pkm["LUXRAY"] = "LUXRAY";
    Pkm["LYCANROC_DAY"] = "LYCANROC_DAY";
    Pkm["LYCANROC_DUSK"] = "LYCANROC_DUSK";
    Pkm["LYCANROC_NIGHT"] = "LYCANROC_NIGHT";
    Pkm["MACHAMP"] = "MACHAMP";
    Pkm["MACHOKE"] = "MACHOKE";
    Pkm["MACHOP"] = "MACHOP";
    Pkm["MAGBY"] = "MAGBY";
    Pkm["MAGCARGO"] = "MAGCARGO";
    Pkm["MAGEARNA"] = "MAGEARNA";
    Pkm["MAGIKARP"] = "MAGIKARP";
    Pkm["MAGMAR"] = "MAGMAR";
    Pkm["MAGMORTAR"] = "MAGMORTAR";
    Pkm["MAGNEMITE"] = "MAGNEMITE";
    Pkm["MAGNETON"] = "MAGNETON";
    Pkm["MAGNEZONE"] = "MAGNEZONE";
    Pkm["MAKUHITA"] = "MAKUHITA";
    Pkm["MAMOSWINE"] = "MAMOSWINE";
    Pkm["MANAPHY"] = "MANAPHY";
    Pkm["MANECTRIC"] = "MANECTRIC";
    Pkm["MANKEY"] = "MANKEY";
    Pkm["MANTINE"] = "MANTINE";
    Pkm["MANTYKE"] = "MANTYKE";
    Pkm["MARACTUS"] = "MARACTUS";
    Pkm["MAREEP"] = "MAREEP";
    Pkm["MARILL"] = "MARILL";
    Pkm["MAROWAK"] = "MAROWAK";
    Pkm["MARSHADOW"] = "MARSHADOW";
    Pkm["MARSHTOMP"] = "MARSHTOMP";
    Pkm["MAUSHOLD_FOUR"] = "MAUSHOLD_FOUR";
    Pkm["MAUSHOLD_THREE"] = "MAUSHOLD_THREE";
    Pkm["MAWILE"] = "MAWILE";
    Pkm["MEDICHAM"] = "MEDICHAM";
    Pkm["MEDITITE"] = "MEDITITE";
    Pkm["MEGA_ABOMASNOW"] = "MEGA_ABOMASNOW";
    Pkm["MEGA_ALTARIA"] = "MEGA_ALTARIA";
    Pkm["MEGA_BANETTE"] = "MEGA_BANETTE";
    Pkm["MEGA_CAMERUPT"] = "MEGA_CAMERUPT";
    Pkm["MEGA_HOUNDOOM"] = "MEGA_HOUNDOOM";
    Pkm["MEGA_LOPUNNY"] = "MEGA_LOPUNNY";
    Pkm["MEGA_MANECTRIC"] = "MEGA_MANECTRIC";
    Pkm["MEGA_RAYQUAZA"] = "MEGA_RAYQUAZA";
    Pkm["MEGA_SABLEYE"] = "MEGA_SABLEYE";
    Pkm["MEGA_STEELIX"] = "MEGA_STEELIX";
    Pkm["MEGANIUM"] = "MEGANIUM";
    Pkm["MELMETAL"] = "MELMETAL";
    Pkm["MELOETTA"] = "MELOETTA";
    Pkm["MEOWTH"] = "MEOWTH";
    Pkm["MESPRIT"] = "MESPRIT";
    Pkm["METAGROSS"] = "METAGROSS";
    Pkm["METANG"] = "METANG";
    Pkm["METAPOD"] = "METAPOD";
    Pkm["MEW"] = "MEW";
    Pkm["MEWTWO"] = "MEWTWO";
    Pkm["MIENFOO"] = "MIENFOO";
    Pkm["MIENSHAO"] = "MIENSHAO";
    Pkm["MIGHTYENA"] = "MIGHTYENA";
    Pkm["MILOTIC"] = "MILOTIC";
    Pkm["MILTANK"] = "MILTANK";
    Pkm["MIME_JR"] = "MIME_JR";
    Pkm["MIMIKYU"] = "MIMIKYU";
    Pkm["MIMIKYU_BUSTED"] = "MIMIKYU_BUSTED";
    Pkm["MINIOR"] = "MINIOR";
    Pkm["MINIOR_KERNEL_BLUE"] = "MINIOR_KERNEL_BLUE";
    Pkm["MINIOR_KERNEL_GREEN"] = "MINIOR_KERNEL_GREEN";
    Pkm["MINIOR_KERNEL_ORANGE"] = "MINIOR_KERNEL_ORANGE";
    Pkm["MINIOR_KERNEL_RED"] = "MINIOR_KERNEL_RED";
    Pkm["MINUN"] = "MINUN";
    Pkm["MISDREAVUS"] = "MISDREAVUS";
    Pkm["MISMAGIUS"] = "MISMAGIUS";
    Pkm["MOLTRES"] = "MOLTRES";
    Pkm["MONFERNO"] = "MONFERNO";
    Pkm["MORGREM"] = "MORGREM";
    Pkm["MORPEKO"] = "MORPEKO";
    Pkm["MORPEKO_HANGRY"] = "MORPEKO_HANGRY";
    Pkm["MOTHIM"] = "MOTHIM";
    Pkm["MR_MIME"] = "MR_MIME";
    Pkm["MUDKIP"] = "MUDKIP";
    Pkm["MUK"] = "MUK";
    Pkm["MUNCHLAX"] = "MUNCHLAX";
    Pkm["MUNNA"] = "MUNNA";
    Pkm["MURKROW"] = "MURKROW";
    Pkm["MUSHARNA"] = "MUSHARNA";
    Pkm["NAGANADEL"] = "NAGANADEL";
    Pkm["NATU"] = "NATU";
    Pkm["NECROZMA"] = "NECROZMA";
    Pkm["NICKIT"] = "NICKIT";
    Pkm["NIDOKING"] = "NIDOKING";
    Pkm["NIDOQUEEN"] = "NIDOQUEEN";
    Pkm["NIDORANF"] = "NIDORANF";
    Pkm["NIDORANM"] = "NIDORANM";
    Pkm["NIDORINA"] = "NIDORINA";
    Pkm["NIDORINO"] = "NIDORINO";
    Pkm["NIHILEGO"] = "NIHILEGO";
    Pkm["NINCADA"] = "NINCADA";
    Pkm["NINETALES"] = "NINETALES";
    Pkm["NINJASK"] = "NINJASK";
    Pkm["NOCTOWL"] = "NOCTOWL";
    Pkm["NOIBAT"] = "NOIBAT";
    Pkm["NOIVERN"] = "NOIVERN";
    Pkm["NOSEPASS"] = "NOSEPASS";
    Pkm["NUMEL"] = "NUMEL";
    Pkm["NUZLEAF"] = "NUZLEAF";
    Pkm["OCTILLERY"] = "OCTILLERY";
    Pkm["ODDISH"] = "ODDISH";
    Pkm["OGERPON_CORNERSTONE"] = "OGERPON_CORNERSTONE";
    Pkm["OGERPON_CORNERSTONE_MASK"] = "OGERPON_CORNERSTONE_MASK";
    Pkm["OGERPON_HEARTHFLAME"] = "OGERPON_HEARTHFLAME";
    Pkm["OGERPON_HEARTHFLAME_MASK"] = "OGERPON_HEARTHFLAME_MASK";
    Pkm["OGERPON_TEAL"] = "OGERPON_TEAL";
    Pkm["OGERPON_TEAL_MASK"] = "OGERPON_TEAL_MASK";
    Pkm["OGERPON_WELLSPRING"] = "OGERPON_WELLSPRING";
    Pkm["OGERPON_WELLSPRING_MASK"] = "OGERPON_WELLSPRING_MASK";
    Pkm["OMANYTE"] = "OMANYTE";
    Pkm["OMASTAR"] = "OMASTAR";
    Pkm["ONIX"] = "ONIX";
    Pkm["ORIGIN_GIRATINA"] = "ORIGIN_GIRATINA";
    Pkm["OSHAWOTT"] = "OSHAWOTT";
    Pkm["OVERQWIL"] = "OVERQWIL";
    Pkm["PALDEA_WOOPER"] = "PALDEA_WOOPER";
    Pkm["PALKIA"] = "PALKIA";
    Pkm["PALOSSAND"] = "PALOSSAND";
    Pkm["PALPITOAD"] = "PALPITOAD";
    Pkm["PARAS"] = "PARAS";
    Pkm["PARASECT"] = "PARASECT";
    Pkm["PATRAT"] = "PATRAT";
    Pkm["PAWMI"] = "PAWMI";
    Pkm["PAWMO"] = "PAWMO";
    Pkm["PAWMOT"] = "PAWMOT";
    Pkm["PAWNIARD"] = "PAWNIARD";
    Pkm["PELIPPER"] = "PELIPPER";
    Pkm["PERSIAN"] = "PERSIAN";
    Pkm["PETILIL"] = "PETILIL";
    Pkm["PHANPY"] = "PHANPY";
    Pkm["PHANTUMP"] = "PHANTUMP";
    Pkm["PHEROMOSA"] = "PHEROMOSA";
    Pkm["PHIONE"] = "PHIONE";
    Pkm["PICHU"] = "PICHU";
    Pkm["PIDGEOT"] = "PIDGEOT";
    Pkm["PIDGEOTTO"] = "PIDGEOTTO";
    Pkm["PIDGEY"] = "PIDGEY";
    Pkm["PIGNITE"] = "PIGNITE";
    Pkm["PIKACHU"] = "PIKACHU";
    Pkm["PILLAR_WOOD"] = "PILLAR_WOOD";
    Pkm["PILLAR_IRON"] = "PILLAR_IRON";
    Pkm["PILLAR_CONCRETE"] = "PILLAR_CONCRETE";
    Pkm["PILOSWINE"] = "PILOSWINE";
    Pkm["PINECO"] = "PINECO";
    Pkm["PINSIR"] = "PINSIR";
    Pkm["PIPLUP"] = "PIPLUP";
    Pkm["PIROUETTE_MELOETTA"] = "PIROUETTE_MELOETTA";
    Pkm["PLUSLE"] = "PLUSLE";
    Pkm["POIPOLE"] = "POIPOLE";
    Pkm["POLITOED"] = "POLITOED";
    Pkm["POLIWAG"] = "POLIWAG";
    Pkm["POLIWHIRL"] = "POLIWHIRL";
    Pkm["POLIWRATH"] = "POLIWRATH";
    Pkm["POLTEAGEIST"] = "POLTEAGEIST";
    Pkm["PONYTA"] = "PONYTA";
    Pkm["POOCHYENA"] = "POOCHYENA";
    Pkm["POPPLIO"] = "POPPLIO";
    Pkm["PORYGON"] = "PORYGON";
    Pkm["PORYGON_2"] = "PORYGON_2";
    Pkm["PORYGON_Z"] = "PORYGON_Z";
    Pkm["PRIMAL_GROUDON"] = "PRIMAL_GROUDON";
    Pkm["PRIMAL_KYOGRE"] = "PRIMAL_KYOGRE";
    Pkm["PRIMARINA"] = "PRIMARINA";
    Pkm["PRIMEAPE"] = "PRIMEAPE";
    Pkm["PRINPLUP"] = "PRINPLUP";
    Pkm["PROBOPASS"] = "PROBOPASS";
    Pkm["PSYDUCK"] = "PSYDUCK";
    Pkm["PUMPKABOO"] = "PUMPKABOO";
    Pkm["PUPITAR"] = "PUPITAR";
    Pkm["PURRLOIN"] = "PURRLOIN";
    Pkm["PYUKUMUKU"] = "PYUKUMUKU";
    Pkm["QUILAVA"] = "QUILAVA";
    Pkm["RABOOT"] = "RABOOT";
    Pkm["RAICHU"] = "RAICHU";
    Pkm["RAIKOU"] = "RAIKOU";
    Pkm["RALTS"] = "RALTS";
    Pkm["RAMPARDOS"] = "RAMPARDOS";
    Pkm["RAPIDASH"] = "RAPIDASH";
    Pkm["RATICATE"] = "RATICATE";
    Pkm["RATTATA"] = "RATTATA";
    Pkm["RAYQUAZA"] = "RAYQUAZA";
    Pkm["REGICE"] = "REGICE";
    Pkm["REGIDRAGO"] = "REGIDRAGO";
    Pkm["REGIELEKI"] = "REGIELEKI";
    Pkm["REGIGIGAS"] = "REGIGIGAS";
    Pkm["REGIROCK"] = "REGIROCK";
    Pkm["REGISTEEL"] = "REGISTEEL";
    Pkm["RELICANTH"] = "RELICANTH";
    Pkm["REMORAID"] = "REMORAID";
    Pkm["RESHIRAM"] = "RESHIRAM";
    Pkm["REUNICLUS"] = "REUNICLUS";
    Pkm["RHYDON"] = "RHYDON";
    Pkm["RHYHORN"] = "RHYHORN";
    Pkm["RHYPERIOR"] = "RHYPERIOR";
    Pkm["RIBOMBEE"] = "RIBOMBEE";
    Pkm["RIOLU"] = "RIOLU";
    Pkm["ROCKRUFF"] = "ROCKRUFF";
    Pkm["ROOKIDEE"] = "ROOKIDEE";
    Pkm["ROSELIA"] = "ROSELIA";
    Pkm["ROSERADE"] = "ROSERADE";
    Pkm["ROTOM"] = "ROTOM";
    Pkm["ROTOM_DRONE"] = "ROTOM_DRONE";
    Pkm["ROWLET"] = "ROWLET";
    Pkm["RUFFLET"] = "RUFFLET";
    Pkm["SABLEYE"] = "SABLEYE";
    Pkm["SALAMENCE"] = "SALAMENCE";
    Pkm["SALANDIT"] = "SALANDIT";
    Pkm["SALAZZLE"] = "SALAZZLE";
    Pkm["STUFFUL"] = "STUFFUL";
    Pkm["BEWEAR"] = "BEWEAR";
    Pkm["SAMUROTT"] = "SAMUROTT";
    Pkm["SANDILE"] = "SANDILE";
    Pkm["SANDSHREW"] = "SANDSHREW";
    Pkm["SANDSLASH"] = "SANDSLASH";
    Pkm["SANDYGAST"] = "SANDYGAST";
    Pkm["SAWSBUCK"] = "SAWSBUCK";
    Pkm["SCEPTILE"] = "SCEPTILE";
    Pkm["SCIZOR"] = "SCIZOR";
    Pkm["SCOLIPEDE"] = "SCOLIPEDE";
    Pkm["SCORBUNNY"] = "SCORBUNNY";
    Pkm["SCRAFTY"] = "SCRAFTY";
    Pkm["SCRAGGY"] = "SCRAGGY";
    Pkm["SCYTHER"] = "SCYTHER";
    Pkm["SEADRA"] = "SEADRA";
    Pkm["SEAKING"] = "SEAKING";
    Pkm["SEALEO"] = "SEALEO";
    Pkm["SEEDOT"] = "SEEDOT";
    Pkm["SEEL"] = "SEEL";
    Pkm["SEISMITOAD"] = "SEISMITOAD";
    Pkm["SENTRET"] = "SENTRET";
    Pkm["SERPERIOR"] = "SERPERIOR";
    Pkm["SERVINE"] = "SERVINE";
    Pkm["SEVIPER"] = "SEVIPER";
    Pkm["SEWADDLE"] = "SEWADDLE";
    Pkm["SHADOW_LUGIA"] = "SHADOW_LUGIA";
    Pkm["SHARPEDO"] = "SHARPEDO";
    Pkm["SHAYMIN"] = "SHAYMIN";
    Pkm["SHAYMIN_SKY"] = "SHAYMIN_SKY";
    Pkm["SHEDINJA"] = "SHEDINJA";
    Pkm["SHELGON"] = "SHELGON";
    Pkm["SHELLDER"] = "SHELLDER";
    Pkm["SHELLOS_EAST_SEA"] = "SHELLOS_EAST_SEA";
    Pkm["SHELLOS_WEST_SEA"] = "SHELLOS_WEST_SEA";
    Pkm["SHIELDON"] = "SHIELDON";
    Pkm["SHIFTRY"] = "SHIFTRY";
    Pkm["SHINX"] = "SHINX";
    Pkm["SHROOMISH"] = "SHROOMISH";
    Pkm["SHUCKLE"] = "SHUCKLE";
    Pkm["SHUPPET"] = "SHUPPET";
    Pkm["SIGILYPH"] = "SIGILYPH";
    Pkm["SILCOON"] = "SILCOON";
    Pkm["SILVALLY"] = "SILVALLY";
    Pkm["SINISTEA"] = "SINISTEA";
    Pkm["SIZZLIPEDE"] = "SIZZLIPEDE";
    Pkm["SKARMORY"] = "SKARMORY";
    Pkm["SKELEDIRGE"] = "SKELEDIRGE";
    Pkm["SKIPLOOM"] = "SKIPLOOM";
    Pkm["SKORUPI"] = "SKORUPI";
    Pkm["SKUNTANK"] = "SKUNTANK";
    Pkm["SLAKING"] = "SLAKING";
    Pkm["SLAKOTH"] = "SLAKOTH";
    Pkm["SLIGOO"] = "SLIGOO";
    Pkm["SLOWBRO"] = "SLOWBRO";
    Pkm["SLOWKING"] = "SLOWKING";
    Pkm["SLOWPOKE"] = "SLOWPOKE";
    Pkm["SLUGMA"] = "SLUGMA";
    Pkm["SMEARGLE"] = "SMEARGLE";
    Pkm["SMOOCHUM"] = "SMOOCHUM";
    Pkm["SNEASEL"] = "SNEASEL";
    Pkm["SNEASLER"] = "SNEASLER";
    Pkm["SNIVY"] = "SNIVY";
    Pkm["SNOM"] = "SNOM";
    Pkm["SNORLAX"] = "SNORLAX";
    Pkm["SNORUNT"] = "SNORUNT";
    Pkm["SNOVER"] = "SNOVER";
    Pkm["SNUBULL"] = "SNUBULL";
    Pkm["SOBBLE"] = "SOBBLE";
    Pkm["SOLGALEO"] = "SOLGALEO";
    Pkm["SOLOSIS"] = "SOLOSIS";
    Pkm["SOLROCK"] = "SOLROCK";
    Pkm["SPEAROW"] = "SPEAROW";
    Pkm["SPECTRIER"] = "SPECTRIER";
    Pkm["SPHEAL"] = "SPHEAL";
    Pkm["SPINARAK"] = "SPINARAK";
    Pkm["SPINDA"] = "SPINDA";
    Pkm["SPIRITOMB"] = "SPIRITOMB";
    Pkm["SPOINK"] = "SPOINK";
    Pkm["SQUIRTLE"] = "SQUIRTLE";
    Pkm["STAKATAKA"] = "STAKATAKA";
    Pkm["STANTLER"] = "STANTLER";
    Pkm["STARAPTOR"] = "STARAPTOR";
    Pkm["STARAVIA"] = "STARAVIA";
    Pkm["STARLY"] = "STARLY";
    Pkm["STARMIE"] = "STARMIE";
    Pkm["STARYU"] = "STARYU";
    Pkm["STEELIX"] = "STEELIX";
    Pkm["STEENEE"] = "STEENEE";
    Pkm["STONJOURNER"] = "STONJOURNER";
    Pkm["STOUTLAND"] = "STOUTLAND";
    Pkm["STUNKY"] = "STUNKY";
    Pkm["SUBSTITUTE"] = "SUBSTITUTE";
    Pkm["SUDOWOODO"] = "SUDOWOODO";
    Pkm["SUICUNE"] = "SUICUNE";
    Pkm["SUNFLORA"] = "SUNFLORA";
    Pkm["SUNKERN"] = "SUNKERN";
    Pkm["SWABLU"] = "SWABLU";
    Pkm["SWADLOON"] = "SWADLOON";
    Pkm["SWAMPERT"] = "SWAMPERT";
    Pkm["SWINUB"] = "SWINUB";
    Pkm["SWOOBAT"] = "SWOOBAT";
    Pkm["SYLVEON"] = "SYLVEON";
    Pkm["TALONFLAME"] = "TALONFLAME";
    Pkm["TANDEMAUS"] = "TANDEMAUS";
    Pkm["TANGELA"] = "TANGELA";
    Pkm["TANGROWTH"] = "TANGROWTH";
    Pkm["TAPU_BULU"] = "TAPU_BULU";
    Pkm["TAPU_FINI"] = "TAPU_FINI";
    Pkm["TAPU_KOKO"] = "TAPU_KOKO";
    Pkm["TAPU_LELE"] = "TAPU_LELE";
    Pkm["TAUROS"] = "TAUROS";
    Pkm["TEDDIURSA"] = "TEDDIURSA";
    Pkm["TENTACOOL"] = "TENTACOOL";
    Pkm["TENTACRUEL"] = "TENTACRUEL";
    Pkm["TEPIG"] = "TEPIG";
    Pkm["TERRAKION"] = "TERRAKION";
    Pkm["THIEVUL"] = "THIEVUL";
    Pkm["THUNDURUS"] = "THUNDURUS";
    Pkm["TIMBURR"] = "TIMBURR";
    Pkm["TINKATINK"] = "TINKATINK";
    Pkm["TINKATON"] = "TINKATON";
    Pkm["TINKATUFF"] = "TINKATUFF";
    Pkm["TOGEKISS"] = "TOGEKISS";
    Pkm["TOGEPI"] = "TOGEPI";
    Pkm["TOGETIC"] = "TOGETIC";
    Pkm["TORCHIC"] = "TORCHIC";
    Pkm["TORKOAL"] = "TORKOAL";
    Pkm["TORNADUS"] = "TORNADUS";
    Pkm["TORTERRA"] = "TORTERRA";
    Pkm["TOTODILE"] = "TOTODILE";
    Pkm["TOXEL"] = "TOXEL";
    Pkm["TOXICROAK"] = "TOXICROAK";
    Pkm["TOXTRICITY"] = "TOXTRICITY";
    Pkm["TRAPINCH"] = "TRAPINCH";
    Pkm["TREECKO"] = "TREECKO";
    Pkm["TREVENANT"] = "TREVENANT";
    Pkm["TROPIUS"] = "TROPIUS";
    Pkm["TRUBBISH"] = "TRUBBISH";
    Pkm["TSAREENA"] = "TSAREENA";
    Pkm["TURTONATOR"] = "TURTONATOR";
    Pkm["TURTWIG"] = "TURTWIG";
    Pkm["TYMPOLE"] = "TYMPOLE";
    Pkm["TYPE_NULL"] = "TYPE_NULL";
    Pkm["TYPHLOSION"] = "TYPHLOSION";
    Pkm["TYRANITAR"] = "TYRANITAR";
    Pkm["TYRANTRUM"] = "TYRANTRUM";
    Pkm["TYROGUE"] = "TYROGUE";
    Pkm["TYRUNT"] = "TYRUNT";
    Pkm["ULTRA_NECROZMA"] = "ULTRA_NECROZMA";
    Pkm["UMBREON"] = "UMBREON";
    Pkm["UNOWN_A"] = "UNOWN_A";
    Pkm["UNOWN_B"] = "UNOWN_B";
    Pkm["UNOWN_C"] = "UNOWN_C";
    Pkm["UNOWN_D"] = "UNOWN_D";
    Pkm["UNOWN_E"] = "UNOWN_E";
    Pkm["UNOWN_EXCLAMATION"] = "UNOWN_EXCLAMATION";
    Pkm["UNOWN_F"] = "UNOWN_F";
    Pkm["UNOWN_G"] = "UNOWN_G";
    Pkm["UNOWN_H"] = "UNOWN_H";
    Pkm["UNOWN_I"] = "UNOWN_I";
    Pkm["UNOWN_J"] = "UNOWN_J";
    Pkm["UNOWN_K"] = "UNOWN_K";
    Pkm["UNOWN_L"] = "UNOWN_L";
    Pkm["UNOWN_M"] = "UNOWN_M";
    Pkm["UNOWN_N"] = "UNOWN_N";
    Pkm["UNOWN_O"] = "UNOWN_O";
    Pkm["UNOWN_P"] = "UNOWN_P";
    Pkm["UNOWN_Q"] = "UNOWN_Q";
    Pkm["UNOWN_QUESTION"] = "UNOWN_QUESTION";
    Pkm["UNOWN_R"] = "UNOWN_R";
    Pkm["UNOWN_S"] = "UNOWN_S";
    Pkm["UNOWN_T"] = "UNOWN_T";
    Pkm["UNOWN_U"] = "UNOWN_U";
    Pkm["UNOWN_V"] = "UNOWN_V";
    Pkm["UNOWN_W"] = "UNOWN_W";
    Pkm["UNOWN_X"] = "UNOWN_X";
    Pkm["UNOWN_Y"] = "UNOWN_Y";
    Pkm["UNOWN_Z"] = "UNOWN_Z";
    Pkm["URSALUNA"] = "URSALUNA";
    Pkm["URSALUNA_BLOODMOON"] = "URSALUNA_BLOODMOON";
    Pkm["URSARING"] = "URSARING";
    Pkm["UXIE"] = "UXIE";
    Pkm["VANILLISH"] = "VANILLISH";
    Pkm["VANILLITE"] = "VANILLITE";
    Pkm["VANILLUXE"] = "VANILLUXE";
    Pkm["VAPOREON"] = "VAPOREON";
    Pkm["VENIPEDE"] = "VENIPEDE";
    Pkm["VENOMOTH"] = "VENOMOTH";
    Pkm["VENONAT"] = "VENONAT";
    Pkm["VENUSAUR"] = "VENUSAUR";
    Pkm["VESPIQUEEN"] = "VESPIQUEEN";
    Pkm["VIBRAVA"] = "VIBRAVA";
    Pkm["VICTINI"] = "VICTINI";
    Pkm["VICTREEBEL"] = "VICTREEBEL";
    Pkm["VIGOROTH"] = "VIGOROTH";
    Pkm["VIKAVOLT"] = "VIKAVOLT";
    Pkm["VILEPLUME"] = "VILEPLUME";
    Pkm["VIRIZION"] = "VIRIZION";
    Pkm["VOLBEAT"] = "VOLBEAT";
    Pkm["VOLCANION"] = "VOLCANION";
    Pkm["VOLCARONA"] = "VOLCARONA";
    Pkm["VOLTORB"] = "VOLTORB";
    Pkm["VULPIX"] = "VULPIX";
    Pkm["WAILMER"] = "WAILMER";
    Pkm["WAILORD"] = "WAILORD";
    Pkm["WALREIN"] = "WALREIN";
    Pkm["WARTORTLE"] = "WARTORTLE";
    Pkm["WATCHOG"] = "WATCHOG";
    Pkm["WATTREL"] = "WATTREL";
    Pkm["WEAVILE"] = "WEAVILE";
    Pkm["WEEDLE"] = "WEEDLE";
    Pkm["WEEPINBELL"] = "WEEPINBELL";
    Pkm["WEEZING"] = "WEEZING";
    Pkm["WHIRLIPEDE"] = "WHIRLIPEDE";
    Pkm["WHISCASH"] = "WHISCASH";
    Pkm["WHISMUR"] = "WHISMUR";
    Pkm["WIGGLYTUFF"] = "WIGGLYTUFF";
    Pkm["WINGULL"] = "WINGULL";
    Pkm["WISHIWASHI"] = "WISHIWASHI";
    Pkm["WISHIWASHI_SCHOOL"] = "WISHIWASHI_SCHOOL";
    Pkm["WOBBUFFET"] = "WOBBUFFET";
    Pkm["WOOBAT"] = "WOOBAT";
    Pkm["WORMADAM_PLANT"] = "WORMADAM_PLANT";
    Pkm["WORMADAM_SANDY"] = "WORMADAM_SANDY";
    Pkm["WORMADAM_TRASH"] = "WORMADAM_TRASH";
    Pkm["WURMPLE"] = "WURMPLE";
    Pkm["WYNAUT"] = "WYNAUT";
    Pkm["XATU"] = "XATU";
    Pkm["XERNEAS"] = "XERNEAS";
    Pkm["XURKITREE"] = "XURKITREE";
    Pkm["YANMA"] = "YANMA";
    Pkm["YANMEGA"] = "YANMEGA";
    Pkm["YVELTAL"] = "YVELTAL";
    Pkm["ZANGOOSE"] = "ZANGOOSE";
    Pkm["ZAPDOS"] = "ZAPDOS";
    Pkm["ZEKROM"] = "ZEKROM";
    Pkm["ZERAORA"] = "ZERAORA";
    Pkm["ZIGZAGOON"] = "ZIGZAGOON";
    Pkm["ZOROARK"] = "ZOROARK";
    Pkm["ZORUA"] = "ZORUA";
    Pkm["ZUBAT"] = "ZUBAT";
    Pkm["ZWEILOUS"] = "ZWEILOUS";
    Pkm["ZYGARDE_10"] = "ZYGARDE_10";
    Pkm["ZYGARDE_50"] = "ZYGARDE_50";
    Pkm["ZYGARDE_100"] = "ZYGARDE_100";
    Pkm["VULLABY"] = "VULLABY";
    Pkm["MANDIBUZZ"] = "MANDIBUZZ";
    Pkm["INKAY"] = "INKAY";
    Pkm["MALAMAR"] = "MALAMAR";
})(Pkm || (exports.Pkm = Pkm = {}));
exports.PkmIndex = {
    [Pkm.DEFAULT]: "0000",
    [Pkm.EGG]: "0000-0004",
    [Pkm.SUBSTITUTE]: "0000-0001",
    [Pkm.BULBASAUR]: "0001",
    [Pkm.IVYSAUR]: "0002",
    [Pkm.VENUSAUR]: "0003",
    [Pkm.CHARMANDER]: "0004",
    [Pkm.CHARMELEON]: "0005",
    [Pkm.CHARIZARD]: "0006",
    [Pkm.SQUIRTLE]: "0007",
    [Pkm.WARTORTLE]: "0008",
    [Pkm.BLASTOISE]: "0009",
    [Pkm.CATERPIE]: "0010",
    [Pkm.METAPOD]: "0011",
    [Pkm.BUTTERFREE]: "0012",
    [Pkm.WEEDLE]: "0013",
    [Pkm.KAKUNA]: "0014",
    [Pkm.BEEDRILL]: "0015",
    [Pkm.PIDGEY]: "0016",
    [Pkm.PIDGEOTTO]: "0017",
    [Pkm.PIDGEOT]: "0018",
    [Pkm.RATTATA]: "0019",
    [Pkm.ALOLAN_RATTATA]: "0019-0001",
    [Pkm.RATICATE]: "0020",
    [Pkm.ALOLAN_RATICATE]: "0020-0001",
    [Pkm.SPEAROW]: "0021",
    [Pkm.FEAROW]: "0022",
    [Pkm.EKANS]: "0023",
    [Pkm.ARBOK]: "0024",
    [Pkm.PIKACHU]: "0025",
    [Pkm.RAICHU]: "0026",
    [Pkm.ALOLAN_RAICHU]: "0026-0001",
    [Pkm.SANDSHREW]: "0027",
    [Pkm.SANDSLASH]: "0028",
    [Pkm.NIDORANF]: "0029",
    [Pkm.NIDORINA]: "0030",
    [Pkm.NIDOQUEEN]: "0031",
    [Pkm.NIDORANM]: "0032",
    [Pkm.NIDORINO]: "0033",
    [Pkm.NIDOKING]: "0034",
    [Pkm.CLEFAIRY]: "0035",
    [Pkm.CLEFABLE]: "0036",
    [Pkm.VULPIX]: "0037",
    [Pkm.NINETALES]: "0038",
    [Pkm.ALOLAN_VULPIX]: "0037-0001",
    [Pkm.ALOLAN_NINETALES]: "0038-0001",
    [Pkm.JIGGLYPUFF]: "0039",
    [Pkm.WIGGLYTUFF]: "0040",
    [Pkm.ZUBAT]: "0041",
    [Pkm.GOLBAT]: "0042",
    [Pkm.ODDISH]: "0043",
    [Pkm.GLOOM]: "0044",
    [Pkm.VILEPLUME]: "0045",
    [Pkm.PARAS]: "0046",
    [Pkm.PARASECT]: "0047",
    [Pkm.VENONAT]: "0048",
    [Pkm.VENOMOTH]: "0049",
    [Pkm.DIGLETT]: "0050",
    [Pkm.ALOLAN_DIGLETT]: "0050-0001",
    [Pkm.DUGTRIO]: "0051",
    [Pkm.ALOLAN_DUGTRIO]: "0051-0001",
    [Pkm.MEOWTH]: "0052",
    [Pkm.PERSIAN]: "0053",
    [Pkm.ALOLAN_MEOWTH]: "0052-0001",
    [Pkm.ALOLAN_PERSIAN]: "0053-0001",
    [Pkm.PSYDUCK]: "0054",
    [Pkm.GOLDUCK]: "0055",
    [Pkm.MANKEY]: "0056",
    [Pkm.PRIMEAPE]: "0057",
    [Pkm.GROWLITHE]: "0058",
    [Pkm.ARCANINE]: "0059",
    [Pkm.HISUI_GROWLITHE]: "0058-0001",
    [Pkm.HISUI_ARCANINE]: "0059-0001",
    [Pkm.POLIWAG]: "0060",
    [Pkm.POLIWHIRL]: "0061",
    [Pkm.POLIWRATH]: "0062",
    [Pkm.ABRA]: "0063",
    [Pkm.KADABRA]: "0064",
    [Pkm.ALAKAZAM]: "0065",
    [Pkm.MACHOP]: "0066",
    [Pkm.MACHOKE]: "0067",
    [Pkm.MACHAMP]: "0068",
    [Pkm.BELLSPROUT]: "0069",
    [Pkm.WEEPINBELL]: "0070",
    [Pkm.VICTREEBEL]: "0071",
    [Pkm.TENTACOOL]: "0072",
    [Pkm.TENTACRUEL]: "0073",
    [Pkm.GEODUDE]: "0074",
    [Pkm.GRAVELER]: "0075",
    [Pkm.GOLEM]: "0076",
    [Pkm.ALOLAN_GEODUDE]: "0074-0001",
    [Pkm.ALOLAN_GRAVELER]: "0075-0001",
    [Pkm.ALOLAN_GOLEM]: "0076-0001",
    [Pkm.PONYTA]: "0077",
    [Pkm.RAPIDASH]: "0078",
    [Pkm.GALARIAN_PONYTA]: "0077-0001",
    [Pkm.GALARIAN_RAPIDASH]: "0078-0001",
    [Pkm.SLOWPOKE]: "0079",
    [Pkm.SLOWBRO]: "0080",
    [Pkm.MAGNEMITE]: "0081",
    [Pkm.MAGNETON]: "0082",
    [Pkm.FARFETCH_D]: "0083",
    [Pkm.DODUO]: "0084",
    [Pkm.DODRIO]: "0085",
    [Pkm.SEEL]: "0086",
    [Pkm.DEWGONG]: "0087",
    [Pkm.GRIMER]: "0088",
    [Pkm.MUK]: "0089",
    [Pkm.ALOLAN_GRIMER]: "0088-0001",
    [Pkm.ALOLAN_MUK]: "0089-0001",
    [Pkm.SHELLDER]: "0090",
    [Pkm.CLOYSTER]: "0091",
    [Pkm.GASTLY]: "0092",
    [Pkm.HAUNTER]: "0093",
    [Pkm.GENGAR]: "0094",
    [Pkm.ONIX]: "0095",
    [Pkm.DROWZEE]: "0096",
    [Pkm.HYPNO]: "0097",
    [Pkm.KRABBY]: "0098",
    [Pkm.KINGLER]: "0099",
    [Pkm.VOLTORB]: "0100",
    [Pkm.HISUI_VOLTORB]: "0100-0001",
    [Pkm.ELECTRODE]: "0101",
    [Pkm.HISUI_ELECTRODE]: "0101-0001",
    [Pkm.EXEGGCUTE]: "0102",
    [Pkm.EXEGGUTOR]: "0103",
    [Pkm.ALOLAN_EXEGGUTOR]: "0103-0001",
    [Pkm.CUBONE]: "0104",
    [Pkm.MAROWAK]: "0105",
    [Pkm.ALOLAN_MAROWAK]: "0105-0001",
    [Pkm.HITMONLEE]: "0106",
    [Pkm.HITMONCHAN]: "0107",
    [Pkm.LICKITUNG]: "0108",
    [Pkm.KOFFING]: "0109",
    [Pkm.WEEZING]: "0110",
    [Pkm.RHYHORN]: "0111",
    [Pkm.RHYDON]: "0112",
    [Pkm.CHANSEY]: "0113",
    [Pkm.TANGELA]: "0114",
    [Pkm.KANGASKHAN]: "0115",
    [Pkm.HORSEA]: "0116",
    [Pkm.SEADRA]: "0117",
    [Pkm.GOLDEEN]: "0118",
    [Pkm.SEAKING]: "0119",
    [Pkm.STARYU]: "0120",
    [Pkm.STARMIE]: "0121",
    [Pkm.MR_MIME]: "0122",
    [Pkm.SCYTHER]: "0123",
    [Pkm.JYNX]: "0124",
    [Pkm.ELECTABUZZ]: "0125",
    [Pkm.MAGMAR]: "0126",
    [Pkm.PINSIR]: "0127",
    [Pkm.TAUROS]: "0128",
    [Pkm.MAGIKARP]: "0129",
    [Pkm.GYARADOS]: "0130",
    [Pkm.LAPRAS]: "0131",
    [Pkm.DITTO]: "0132",
    [Pkm.EEVEE]: "0133",
    [Pkm.VAPOREON]: "0134",
    [Pkm.JOLTEON]: "0135",
    [Pkm.FLAREON]: "0136",
    [Pkm.PORYGON]: "0137",
    [Pkm.OMANYTE]: "0138",
    [Pkm.OMASTAR]: "0139",
    [Pkm.KABUTO]: "0140",
    [Pkm.KABUTOPS]: "0141",
    [Pkm.AERODACTYL]: "0142",
    [Pkm.SNORLAX]: "0143",
    [Pkm.ARTICUNO]: "0144",
    [Pkm.GALARIAN_ARTICUNO]: "0144-0001",
    [Pkm.ZAPDOS]: "0145",
    [Pkm.GALARIAN_ZAPDOS]: "0145-0001",
    [Pkm.MOLTRES]: "0146",
    [Pkm.GALARIAN_MOLTRES]: "0146-0001",
    [Pkm.DRATINI]: "0147",
    [Pkm.DRAGONAIR]: "0148",
    [Pkm.DRAGONITE]: "0149",
    [Pkm.MEWTWO]: "0150",
    [Pkm.MEW]: "0151",
    [Pkm.CHIKORITA]: "0152",
    [Pkm.BAYLEEF]: "0153",
    [Pkm.MEGANIUM]: "0154",
    [Pkm.CYNDAQUIL]: "0155",
    [Pkm.QUILAVA]: "0156",
    [Pkm.TYPHLOSION]: "0157",
    [Pkm.HISUIAN_TYPHLOSION]: "0157-0001",
    [Pkm.TOTODILE]: "0158",
    [Pkm.CROCONAW]: "0159",
    [Pkm.FERALIGATR]: "0160",
    [Pkm.SENTRET]: "0161",
    [Pkm.FURRET]: "0162",
    [Pkm.HOOTHOOT]: "0163",
    [Pkm.NOCTOWL]: "0164",
    [Pkm.SPINARAK]: "0167",
    [Pkm.ARIADOS]: "0168",
    [Pkm.CROBAT]: "0169",
    [Pkm.CHINCHOU]: "0170",
    [Pkm.LANTURN]: "0171",
    [Pkm.PICHU]: "0172",
    [Pkm.CLEFFA]: "0173",
    [Pkm.IGGLYBUFF]: "0174",
    [Pkm.TOGEPI]: "0175",
    [Pkm.TOGETIC]: "0176",
    [Pkm.NATU]: "0177",
    [Pkm.XATU]: "0178",
    [Pkm.MAREEP]: "0179",
    [Pkm.FLAFFY]: "0180",
    [Pkm.AMPHAROS]: "0181",
    [Pkm.BELLOSSOM]: "0182",
    [Pkm.MARILL]: "0183",
    [Pkm.AZUMARILL]: "0184",
    [Pkm.SUDOWOODO]: "0185",
    [Pkm.POLITOED]: "0186",
    [Pkm.HOPPIP]: "0187",
    [Pkm.SKIPLOOM]: "0188",
    [Pkm.JUMPLUFF]: "0189",
    [Pkm.AIPOM]: "0190",
    [Pkm.SUNKERN]: "0191",
    [Pkm.SUNFLORA]: "0192",
    [Pkm.YANMA]: "0193",
    [Pkm.PALDEA_WOOPER]: "0194-0002",
    [Pkm.ESPEON]: "0196",
    [Pkm.UMBREON]: "0197",
    [Pkm.MURKROW]: "0198",
    [Pkm.SLOWKING]: "0199",
    [Pkm.MISDREAVUS]: "0200",
    [Pkm.UNOWN_A]: "0201",
    [Pkm.UNOWN_B]: "0201-0001",
    [Pkm.UNOWN_C]: "0201-0002",
    [Pkm.UNOWN_D]: "0201-0003",
    [Pkm.UNOWN_E]: "0201-0004",
    [Pkm.UNOWN_F]: "0201-0005",
    [Pkm.UNOWN_G]: "0201-0006",
    [Pkm.UNOWN_H]: "0201-0007",
    [Pkm.UNOWN_I]: "0201-0008",
    [Pkm.UNOWN_J]: "0201-0009",
    [Pkm.UNOWN_K]: "0201-0010",
    [Pkm.UNOWN_L]: "0201-0011",
    [Pkm.UNOWN_M]: "0201-0012",
    [Pkm.UNOWN_N]: "0201-0013",
    [Pkm.UNOWN_O]: "0201-0014",
    [Pkm.UNOWN_P]: "0201-0015",
    [Pkm.UNOWN_Q]: "0201-0016",
    [Pkm.UNOWN_R]: "0201-0017",
    [Pkm.UNOWN_S]: "0201-0018",
    [Pkm.UNOWN_T]: "0201-0019",
    [Pkm.UNOWN_U]: "0201-0020",
    [Pkm.UNOWN_V]: "0201-0021",
    [Pkm.UNOWN_W]: "0201-0022",
    [Pkm.UNOWN_X]: "0201-0023",
    [Pkm.UNOWN_Y]: "0201-0024",
    [Pkm.UNOWN_Z]: "0201-0025",
    [Pkm.UNOWN_QUESTION]: "0201-0027",
    [Pkm.UNOWN_EXCLAMATION]: "0201-0026",
    [Pkm.WOBBUFFET]: "0202",
    [Pkm.PINECO]: "0204",
    [Pkm.FORRETRESS]: "0205",
    [Pkm.GLIGAR]: "0207",
    [Pkm.STEELIX]: "0208",
    [Pkm.MEGA_STEELIX]: "0208-0001",
    [Pkm.SNUBULL]: "0209",
    [Pkm.GRANBULL]: "0210",
    [Pkm.HISUIAN_QWILFISH]: "0211-0001",
    [Pkm.SCIZOR]: "0212",
    [Pkm.SHUCKLE]: "0213",
    [Pkm.HERACROSS]: "0214",
    [Pkm.SNEASEL]: "0215",
    [Pkm.HISUI_SNEASEL]: "0215-0001",
    [Pkm.TEDDIURSA]: "0216",
    [Pkm.URSARING]: "0217",
    [Pkm.SLUGMA]: "0218",
    [Pkm.MAGCARGO]: "0219",
    [Pkm.SWINUB]: "0220",
    [Pkm.PILOSWINE]: "0221",
    [Pkm.CORSOLA]: "0222",
    [Pkm.GALAR_CORSOLA]: "0222-0001",
    [Pkm.REMORAID]: "0223",
    [Pkm.OCTILLERY]: "0224",
    [Pkm.DELIBIRD]: "0225",
    [Pkm.MANTINE]: "0226",
    [Pkm.SKARMORY]: "0227",
    [Pkm.HOUNDOUR]: "0228",
    [Pkm.HOUNDOOM]: "0229",
    [Pkm.MEGA_HOUNDOOM]: "0229-0001",
    [Pkm.KINGDRA]: "0230",
    [Pkm.PHANPY]: "0231",
    [Pkm.DONPHAN]: "0232",
    [Pkm.PORYGON_2]: "0233",
    [Pkm.STANTLER]: "0234",
    [Pkm.SMEARGLE]: "0235",
    [Pkm.TYROGUE]: "0236",
    [Pkm.HITMONTOP]: "0237",
    [Pkm.SMOOCHUM]: "0238",
    [Pkm.ELEKID]: "0239",
    [Pkm.MAGBY]: "0240",
    [Pkm.MILTANK]: "0241",
    [Pkm.BLISSEY]: "0242",
    [Pkm.RAIKOU]: "0243",
    [Pkm.ENTEI]: "0244",
    [Pkm.SUICUNE]: "0245",
    [Pkm.LARVITAR]: "0246",
    [Pkm.PUPITAR]: "0247",
    [Pkm.TYRANITAR]: "0248",
    [Pkm.LUGIA]: "0249",
    [Pkm.SHADOW_LUGIA]: "0249-0001",
    [Pkm.HO_OH]: "0250",
    [Pkm.CELEBI]: "0251",
    [Pkm.TREECKO]: "0252",
    [Pkm.GROVYLE]: "0253",
    [Pkm.SCEPTILE]: "0254",
    [Pkm.TORCHIC]: "0255",
    [Pkm.COMBUSKEN]: "0256",
    [Pkm.BLAZIKEN]: "0257",
    [Pkm.MUDKIP]: "0258",
    [Pkm.MARSHTOMP]: "0259",
    [Pkm.SWAMPERT]: "0260",
    [Pkm.POOCHYENA]: "0261",
    [Pkm.MIGHTYENA]: "0262",
    [Pkm.ZIGZAGOON]: "0263",
    [Pkm.LINOONE]: "0264",
    [Pkm.WURMPLE]: "0265",
    [Pkm.SILCOON]: "0266",
    [Pkm.BEAUTIFLY]: "0267",
    [Pkm.CASCOON]: "0268",
    [Pkm.DUSTOX]: "0269",
    [Pkm.LOTAD]: "0270",
    [Pkm.LOMBRE]: "0271",
    [Pkm.LUDICOLO]: "0272",
    [Pkm.SEEDOT]: "0273",
    [Pkm.NUZLEAF]: "0274",
    [Pkm.SHIFTRY]: "0275",
    [Pkm.WINGULL]: "0278",
    [Pkm.PELIPPER]: "0279",
    [Pkm.RALTS]: "0280",
    [Pkm.KIRLIA]: "0281",
    [Pkm.GARDEVOIR]: "0282",
    [Pkm.SHROOMISH]: "0285",
    [Pkm.BRELOOM]: "0286",
    [Pkm.SLAKOTH]: "0287",
    [Pkm.VIGOROTH]: "0288",
    [Pkm.SLAKING]: "0289",
    [Pkm.NINCADA]: "0290",
    [Pkm.NINJASK]: "0291",
    [Pkm.SHEDINJA]: "0292",
    [Pkm.WHISMUR]: "0293",
    [Pkm.LOUDRED]: "0294",
    [Pkm.EXPLOUD]: "0295",
    [Pkm.MAKUHITA]: "0296",
    [Pkm.HARIYAMA]: "0297",
    [Pkm.AZURILL]: "0298",
    [Pkm.NOSEPASS]: "0299",
    [Pkm.SABLEYE]: "0302",
    [Pkm.MEGA_SABLEYE]: "0302-0001",
    [Pkm.MAWILE]: "0303",
    [Pkm.ARON]: "0304",
    [Pkm.LAIRON]: "0305",
    [Pkm.AGGRON]: "0306",
    [Pkm.MEDITITE]: "0307",
    [Pkm.MEDICHAM]: "0308",
    [Pkm.ELECTRIKE]: "0309",
    [Pkm.MANECTRIC]: "0310",
    [Pkm.MEGA_MANECTRIC]: "0310-0001",
    [Pkm.PLUSLE]: "0311",
    [Pkm.MINUN]: "0312",
    [Pkm.VOLBEAT]: "0313",
    [Pkm.ILLUMISE]: "0314",
    [Pkm.ROSELIA]: "0315",
    [Pkm.CARVANHA]: "0318",
    [Pkm.SHARPEDO]: "0319",
    [Pkm.WAILMER]: "0320",
    [Pkm.WAILORD]: "0321",
    [Pkm.NUMEL]: "0322",
    [Pkm.CAMERUPT]: "0323",
    [Pkm.MEGA_CAMERUPT]: "0323-0001",
    [Pkm.TORKOAL]: "0324",
    [Pkm.SPOINK]: "0325",
    [Pkm.GRUMPIG]: "0326",
    [Pkm.SPINDA]: "0327",
    [Pkm.TRAPINCH]: "0328",
    [Pkm.VIBRAVA]: "0329",
    [Pkm.FLYGON]: "0330",
    [Pkm.CACNEA]: "0331",
    [Pkm.CACTURNE]: "0332",
    [Pkm.SWABLU]: "0333",
    [Pkm.ALTARIA]: "0334",
    [Pkm.MEGA_ALTARIA]: "0334-0001",
    [Pkm.ZANGOOSE]: "0335",
    [Pkm.SEVIPER]: "0336",
    [Pkm.LUNATONE]: "0337",
    [Pkm.SOLROCK]: "0338",
    [Pkm.BARBOACH]: "0339",
    [Pkm.WHISCASH]: "0340",
    [Pkm.CORPHISH]: "0341",
    [Pkm.CRAWDAUNT]: "0342",
    [Pkm.BALTOY]: "0343",
    [Pkm.CLAYDOL]: "0344",
    [Pkm.LILEEP]: "0345",
    [Pkm.CRADILY]: "0346",
    [Pkm.ANORITH]: "0347",
    [Pkm.ARMALDO]: "0348",
    [Pkm.FEEBAS]: "0349",
    [Pkm.MILOTIC]: "0350",
    [Pkm.CASTFORM]: "0351",
    [Pkm.CASTFORM_SUN]: "0351-0001",
    [Pkm.CASTFORM_RAIN]: "0351-0002",
    [Pkm.CASTFORM_HAIL]: "0351-0003",
    [Pkm.KECLEON]: "0352",
    [Pkm.SHUPPET]: "0353",
    [Pkm.BANETTE]: "0354",
    [Pkm.MEGA_BANETTE]: "0354-0001",
    [Pkm.DUSKULL]: "0355",
    [Pkm.DUSCLOPS]: "0356",
    [Pkm.TROPIUS]: "0357",
    [Pkm.CHIMECHO]: "0358",
    [Pkm.ABSOL]: "0359",
    [Pkm.WYNAUT]: "0360",
    [Pkm.SNORUNT]: "0361",
    [Pkm.GLALIE]: "0362",
    [Pkm.SPHEAL]: "0363",
    [Pkm.SEALEO]: "0364",
    [Pkm.WALREIN]: "0365",
    [Pkm.CLAMPERL]: "0366",
    [Pkm.HUNTAIL]: "0367",
    [Pkm.GOREBYSS]: "0368",
    [Pkm.RELICANTH]: "0369",
    [Pkm.LUVDISC]: "0370",
    [Pkm.BAGON]: "0371",
    [Pkm.SHELGON]: "0372",
    [Pkm.SALAMENCE]: "0373",
    [Pkm.BELDUM]: "0374",
    [Pkm.METANG]: "0375",
    [Pkm.METAGROSS]: "0376",
    [Pkm.REGICE]: "0378",
    [Pkm.REGIROCK]: "0377",
    [Pkm.REGISTEEL]: "0379",
    [Pkm.LATIAS]: "0380",
    [Pkm.LATIOS]: "0381",
    [Pkm.KYOGRE]: "0382",
    [Pkm.GROUDON]: "0383",
    [Pkm.RAYQUAZA]: "0384",
    [Pkm.PRIMAL_KYOGRE]: "0382-0001",
    [Pkm.PRIMAL_GROUDON]: "0383-0001",
    [Pkm.MEGA_RAYQUAZA]: "0384-0001",
    [Pkm.JIRACHI]: "0385",
    [Pkm.DEOXYS]: "0386",
    [Pkm.DEOXYS_DEFENSE]: "0386-0002",
    [Pkm.DEOXYS_ATTACK]: "0386-0001",
    [Pkm.DEOXYS_SPEED]: "0386-0003",
    [Pkm.TURTWIG]: "0387",
    [Pkm.GROTLE]: "0388",
    [Pkm.TORTERRA]: "0389",
    [Pkm.CHIMCHAR]: "0390",
    [Pkm.MONFERNO]: "0391",
    [Pkm.INFERNAPE]: "0392",
    [Pkm.PIPLUP]: "0393",
    [Pkm.PRINPLUP]: "0394",
    [Pkm.EMPOLEON]: "0395",
    [Pkm.STARLY]: "0396",
    [Pkm.STARAVIA]: "0397",
    [Pkm.STARAPTOR]: "0398",
    [Pkm.BIDOOF]: "0399",
    [Pkm.BIBAREL]: "0400",
    [Pkm.KRICKETOT]: "0401",
    [Pkm.KRICKETUNE]: "0402",
    [Pkm.SHINX]: "0403",
    [Pkm.LUXIO]: "0404",
    [Pkm.LUXRAY]: "0405",
    [Pkm.BUDEW]: "0406",
    [Pkm.ROSERADE]: "0407",
    [Pkm.CRANIDOS]: "0408",
    [Pkm.RAMPARDOS]: "0409",
    [Pkm.SHIELDON]: "0410",
    [Pkm.BASTIODON]: "0411",
    [Pkm.BURMY_PLANT]: "0412",
    [Pkm.BURMY_SANDY]: "0412-0001",
    [Pkm.BURMY_TRASH]: "0412-0002",
    [Pkm.WORMADAM_PLANT]: "0413",
    [Pkm.WORMADAM_SANDY]: "0413-0001",
    [Pkm.WORMADAM_TRASH]: "0413-0002",
    [Pkm.MOTHIM]: "0414",
    [Pkm.COMBEE]: "0415",
    [Pkm.VESPIQUEEN]: "0416",
    [Pkm.BUIZEL]: "0418",
    [Pkm.FLOATZEL]: "0419",
    [Pkm.CHERRUBI]: "0420",
    [Pkm.CHERRIM]: "0421",
    [Pkm.CHERRIM_SUNLIGHT]: "0421-0001",
    [Pkm.SHELLOS_WEST_SEA]: "0422",
    [Pkm.GASTRODON_WEST_SEA]: "0423",
    [Pkm.SHELLOS_EAST_SEA]: "0422-0001",
    [Pkm.GASTRODON_EAST_SEA]: "0423-0001",
    [Pkm.AMBIPOM]: "0424",
    [Pkm.DRIFLOON]: "0425",
    [Pkm.DRIFBLIM]: "0426",
    [Pkm.BUNEARY]: "0427",
    [Pkm.LOPUNNY]: "0428",
    [Pkm.MEGA_LOPUNNY]: "0428-0001",
    [Pkm.MISMAGIUS]: "0429",
    [Pkm.HONCHKROW]: "0430",
    [Pkm.CHINGLING]: "0433",
    [Pkm.STUNKY]: "0434",
    [Pkm.SKUNTANK]: "0435",
    [Pkm.BRONZOR]: "0436",
    [Pkm.BRONZONG]: "0437",
    [Pkm.BONSLEY]: "0438",
    [Pkm.MIME_JR]: "0439",
    [Pkm.HAPPINY]: "0440",
    [Pkm.CHATOT]: "0441",
    [Pkm.SPIRITOMB]: "0442",
    [Pkm.GIBLE]: "0443",
    [Pkm.GABITE]: "0444",
    [Pkm.GARCHOMP]: "0445",
    [Pkm.MUNCHLAX]: "0446",
    [Pkm.RIOLU]: "0447",
    [Pkm.LUCARIO]: "0448",
    [Pkm.HIPPOPOTAS]: "0449",
    [Pkm.HIPPODOWN]: "0450",
    [Pkm.SKORUPI]: "0451",
    [Pkm.DRAPION]: "0452",
    [Pkm.CROAGUNK]: "0453",
    [Pkm.TOXICROAK]: "0454",
    [Pkm.CARNIVINE]: "0455",
    [Pkm.FINNEON]: "0456",
    [Pkm.LUMINEON]: "0457",
    [Pkm.MANTYKE]: "0458",
    [Pkm.SNOVER]: "0459",
    [Pkm.ABOMASNOW]: "0460",
    [Pkm.MEGA_ABOMASNOW]: "0460-0001",
    [Pkm.WEAVILE]: "0461",
    [Pkm.MAGNEZONE]: "0462",
    [Pkm.LICKILICKY]: "0463",
    [Pkm.RHYPERIOR]: "0464",
    [Pkm.TANGROWTH]: "0465",
    [Pkm.ELECTIVIRE]: "0466",
    [Pkm.MAGMORTAR]: "0467",
    [Pkm.TOGEKISS]: "0468",
    [Pkm.YANMEGA]: "0469",
    [Pkm.LEAFEON]: "0470",
    [Pkm.GLACEON]: "0471",
    [Pkm.GLISCOR]: "0472",
    [Pkm.MAMOSWINE]: "0473",
    [Pkm.PORYGON_Z]: "0474",
    [Pkm.PROBOPASS]: "0476",
    [Pkm.DUSKNOIR]: "0477",
    [Pkm.FROSLASS]: "0478",
    [Pkm.ROTOM]: "0479",
    [Pkm.ROTOM_DRONE]: "0479-0008",
    [Pkm.UXIE]: "0480",
    [Pkm.MESPRIT]: "0481",
    [Pkm.AZELF]: "0482",
    [Pkm.DIALGA]: "0483",
    [Pkm.PALKIA]: "0484",
    [Pkm.HEATRAN]: "0485",
    [Pkm.REGIGIGAS]: "0486",
    [Pkm.GIRATINA]: "0487",
    [Pkm.ORIGIN_GIRATINA]: "0487-0001",
    [Pkm.CRESSELIA]: "0488",
    [Pkm.PHIONE]: "0489",
    [Pkm.MANAPHY]: "0490",
    [Pkm.DARKRAI]: "0491",
    [Pkm.SHAYMIN]: "0492",
    [Pkm.SHAYMIN_SKY]: "0492-0001",
    [Pkm.ARCEUS]: "0493",
    [Pkm.VICTINI]: "0494",
    [Pkm.SNIVY]: "0495",
    [Pkm.SERVINE]: "0496",
    [Pkm.SERPERIOR]: "0497",
    [Pkm.TEPIG]: "0498",
    [Pkm.PIGNITE]: "0499",
    [Pkm.EMBOAR]: "0500",
    [Pkm.OSHAWOTT]: "0501",
    [Pkm.DEWOTT]: "0502",
    [Pkm.SAMUROTT]: "0503",
    [Pkm.PATRAT]: "0504",
    [Pkm.WATCHOG]: "0505",
    [Pkm.LILLIPUP]: "0506",
    [Pkm.HERDIER]: "0507",
    [Pkm.STOUTLAND]: "0508",
    [Pkm.PURRLOIN]: "0509",
    [Pkm.LIEPARD]: "0510",
    [Pkm.MUNNA]: "0517",
    [Pkm.MUSHARNA]: "0518",
    [Pkm.WOOBAT]: "0527",
    [Pkm.SWOOBAT]: "0528",
    [Pkm.AUDINO]: "0531",
    [Pkm.TIMBURR]: "0532",
    [Pkm.PILLAR_WOOD]: "0532-0002",
    [Pkm.GURDURR]: "0533",
    [Pkm.PILLAR_IRON]: "0533-0002",
    [Pkm.CONKELDURR]: "0534",
    [Pkm.PILLAR_CONCRETE]: "0534-0002",
    [Pkm.TYMPOLE]: "0535",
    [Pkm.PALPITOAD]: "0536",
    [Pkm.SEISMITOAD]: "0537",
    [Pkm.SEWADDLE]: "0540",
    [Pkm.SWADLOON]: "0541",
    [Pkm.LEAVANNY]: "0542",
    [Pkm.VENIPEDE]: "0543",
    [Pkm.WHIRLIPEDE]: "0544",
    [Pkm.SCOLIPEDE]: "0545",
    [Pkm.PETILIL]: "0548",
    [Pkm.LILIGANT]: "0549",
    [Pkm.SANDILE]: "0551",
    [Pkm.KROKOROK]: "0552",
    [Pkm.KROOKODILE]: "0553",
    [Pkm.DARUMAKA]: "0554",
    [Pkm.DARMANITAN]: "0555",
    [Pkm.DARMANITAN_ZEN]: "0555-0001",
    [Pkm.MARACTUS]: "0556",
    [Pkm.SCRAGGY]: "0559",
    [Pkm.SCRAFTY]: "0560",
    [Pkm.SIGILYPH]: "0561",
    [Pkm.ARCHEN]: "0566",
    [Pkm.ARCHEOPS]: "0567",
    [Pkm.TRUBBISH]: "0568",
    [Pkm.GARBODOR]: "0569",
    [Pkm.ZORUA]: "0570",
    [Pkm.ZOROARK]: "0571",
    [Pkm.HISUI_ZORUA]: "0570-0001",
    [Pkm.HISUI_ZOROARK]: "0571-0001",
    [Pkm.GOTHITA]: "0574",
    [Pkm.GOTHORITA]: "0575",
    [Pkm.GOTHITELLE]: "0576",
    [Pkm.SOLOSIS]: "0577",
    [Pkm.DUOSION]: "0578",
    [Pkm.REUNICLUS]: "0579",
    [Pkm.VANILLITE]: "0582",
    [Pkm.VANILLISH]: "0583",
    [Pkm.VANILLUXE]: "0584",
    [Pkm.DEERLING]: "0585",
    [Pkm.SAWSBUCK]: "0586",
    [Pkm.JOLTIK]: "0595",
    [Pkm.GALVANTULA]: "0596",
    [Pkm.FERROSEED]: "0597",
    [Pkm.FERROTHORN]: "0598",
    [Pkm.LITWICK]: "0607",
    [Pkm.LAMPENT]: "0608",
    [Pkm.CHANDELURE]: "0609",
    [Pkm.AXEW]: "0610",
    [Pkm.FRAXURE]: "0611",
    [Pkm.HAXORUS]: "0612",
    [Pkm.MIENFOO]: "0619",
    [Pkm.MIENSHAO]: "0620",
    [Pkm.DRUDDIGON]: "0621",
    [Pkm.GOLETT]: "0622",
    [Pkm.GOLURK]: "0623",
    [Pkm.PAWNIARD]: "0624",
    [Pkm.BISHARP]: "0625",
    [Pkm.RUFFLET]: "0627",
    [Pkm.BRAVIARY]: "0628",
    [Pkm.VULLABY]: "0629",
    [Pkm.MANDIBUZZ]: "0630",
    [Pkm.HEATMOR]: "0631",
    [Pkm.DURANT]: "0632",
    [Pkm.DEINO]: "0633",
    [Pkm.ZWEILOUS]: "0634",
    [Pkm.HYDREIGON]: "0635",
    [Pkm.LARVESTA]: "0636",
    [Pkm.VOLCARONA]: "0637",
    [Pkm.COBALION]: "0638",
    [Pkm.TERRAKION]: "0639",
    [Pkm.VIRIZION]: "0640",
    [Pkm.TORNADUS]: "0641",
    [Pkm.THUNDURUS]: "0642",
    [Pkm.RESHIRAM]: "0643",
    [Pkm.ZEKROM]: "0644",
    [Pkm.LANDORUS]: "0645",
    [Pkm.KYUREM]: "0646",
    [Pkm.KELDEO]: "0647",
    [Pkm.MELOETTA]: "0648",
    [Pkm.PIROUETTE_MELOETTA]: "0648-0001",
    [Pkm.GENESECT]: "0649",
    [Pkm.FENNEKIN]: "0653",
    [Pkm.BRAIXEN]: "0654",
    [Pkm.DELPHOX]: "0655",
    [Pkm.FROAKIE]: "0656",
    [Pkm.FROGADIER]: "0657",
    [Pkm.GRENINJA]: "0658",
    [Pkm.FLETCHLING]: "0661",
    [Pkm.FLETCHINDER]: "0662",
    [Pkm.TALONFLAME]: "0663",
    [Pkm.FLABEBE]: "0669",
    [Pkm.FLOETTE]: "0670",
    [Pkm.FLORGES]: "0671",
    [Pkm.HONEDGE]: "0679",
    [Pkm.DOUBLADE]: "0680",
    [Pkm.AEGISLASH]: "0681",
    [Pkm.AEGISLASH_BLADE]: "0681-0001",
    [Pkm.INKAY]: "0686",
    [Pkm.MALAMAR]: "0687",
    [Pkm.BINACLE]: "0688",
    [Pkm.BARBARACLE]: "0689",
    [Pkm.CLAUNCHER]: "0692",
    [Pkm.CLAWITZER]: "0693",
    [Pkm.HELIOPTILE]: "0694",
    [Pkm.HELIOLISK]: "0695",
    [Pkm.TYRUNT]: "0696",
    [Pkm.TYRANTRUM]: "0697",
    [Pkm.AMAURA]: "0698",
    [Pkm.AURORUS]: "0699",
    [Pkm.SYLVEON]: "0700",
    [Pkm.HAWLUCHA]: "0701",
    [Pkm.CARBINK]: "0703",
    [Pkm.GOOMY]: "0704",
    [Pkm.SLIGOO]: "0705",
    [Pkm.GOODRA]: "0706",
    [Pkm.HISUI_SLIGGOO]: "0705-0001",
    [Pkm.HISUI_GOODRA]: "0706-0001",
    [Pkm.KLEFKI]: "0707",
    [Pkm.PHANTUMP]: "0708",
    [Pkm.TREVENANT]: "0709",
    [Pkm.PUMPKABOO]: "0710",
    [Pkm.GOURGEIST]: "0711",
    [Pkm.NOIBAT]: "0714",
    [Pkm.NOIVERN]: "0715",
    [Pkm.XERNEAS]: "0716",
    [Pkm.YVELTAL]: "0717",
    [Pkm.ZYGARDE_10]: "0718-0002",
    [Pkm.ZYGARDE_50]: "0718",
    [Pkm.ZYGARDE_100]: "0718-0001",
    [Pkm.DIANCIE]: "0719",
    [Pkm.HOOPA]: "0720",
    [Pkm.HOOPA_UNBOUND]: "0720-0001",
    [Pkm.VOLCANION]: "0721",
    [Pkm.ROWLET]: "0722",
    [Pkm.DARTIX]: "0723",
    [Pkm.DECIDUEYE]: "0724",
    [Pkm.POPPLIO]: "0728",
    [Pkm.BRIONNE]: "0729",
    [Pkm.PRIMARINA]: "0730",
    [Pkm.GRUBBIN]: "0736",
    [Pkm.CHARJABUG]: "0737",
    [Pkm.VIKAVOLT]: "0738",
    [Pkm.CRABRAWLER]: "0739",
    [Pkm.CRABOMINABLE]: "0740",
    [Pkm.CUTIEFLY]: "0742",
    [Pkm.RIBOMBEE]: "0743",
    [Pkm.ROCKRUFF]: "0744",
    [Pkm.LYCANROC_DAY]: "0745",
    [Pkm.LYCANROC_DUSK]: "0745-0002",
    [Pkm.LYCANROC_NIGHT]: "0745-0001",
    [Pkm.WISHIWASHI]: "0746",
    [Pkm.WISHIWASHI_SCHOOL]: "0746-0001",
    [Pkm.DEWPIDER]: "0751",
    [Pkm.ARAQUANID]: "0752",
    [Pkm.SALANDIT]: "0757",
    [Pkm.SALAZZLE]: "0758",
    [Pkm.STUFFUL]: "0759",
    [Pkm.BEWEAR]: "0760",
    [Pkm.BOUNSWEET]: "0761",
    [Pkm.STEENEE]: "0762",
    [Pkm.TSAREENA]: "0763",
    [Pkm.COMFEY]: "0764",
    [Pkm.SANDYGAST]: "0769",
    [Pkm.PALOSSAND]: "0770",
    [Pkm.PYUKUMUKU]: "0771",
    [Pkm.TYPE_NULL]: "0772",
    [Pkm.SILVALLY]: "0773",
    [Pkm.MINIOR]: "0774",
    [Pkm.MINIOR_KERNEL_RED]: "0774-0001",
    [Pkm.MINIOR_KERNEL_BLUE]: "0774-0005",
    [Pkm.MINIOR_KERNEL_ORANGE]: "0774-0002",
    [Pkm.MINIOR_KERNEL_GREEN]: "0774-0004",
    [Pkm.TURTONATOR]: "0776",
    [Pkm.MIMIKYU]: "0778",
    [Pkm.MIMIKYU_BUSTED]: "0778-0001",
    [Pkm.BRUXISH]: "0779",
    [Pkm.DHELMISE]: "0781",
    [Pkm.JANGMO_O]: "0782",
    [Pkm.HAKAMO_O]: "0783",
    [Pkm.KOMMO_O]: "0784",
    [Pkm.TAPU_KOKO]: "0785",
    [Pkm.TAPU_LELE]: "0786",
    [Pkm.TAPU_BULU]: "0787",
    [Pkm.TAPU_FINI]: "0788",
    [Pkm.COSMOG]: "0789",
    [Pkm.COSMOEM]: "0790",
    [Pkm.SOLGALEO]: "0791",
    [Pkm.LUNALA]: "0792",
    [Pkm.NIHILEGO]: "0793",
    [Pkm.PHEROMOSA]: "0795",
    [Pkm.XURKITREE]: "0796",
    [Pkm.KARTANA]: "0798",
    [Pkm.GUZZLORD]: "0799",
    [Pkm.NECROZMA]: "0800",
    [Pkm.ULTRA_NECROZMA]: "0800-0003",
    [Pkm.MAGEARNA]: "0801",
    [Pkm.MARSHADOW]: "0802",
    [Pkm.POIPOLE]: "0803",
    [Pkm.NAGANADEL]: "0804",
    [Pkm.STAKATAKA]: "0805",
    [Pkm.BLACEPHALON]: "0806",
    [Pkm.ZERAORA]: "0807",
    [Pkm.MELMETAL]: "0809",
    [Pkm.SCORBUNNY]: "0813",
    [Pkm.RABOOT]: "0814",
    [Pkm.CINDERACE]: "0815",
    [Pkm.SOBBLE]: "0816",
    [Pkm.DRIZZILE]: "0817",
    [Pkm.INTELEON]: "0818",
    [Pkm.ROOKIDEE]: "0821",
    [Pkm.CORVISQUIRE]: "0822",
    [Pkm.CORVIKNIGHT]: "0823",
    [Pkm.NICKIT]: "0827",
    [Pkm.THIEVUL]: "0828",
    [Pkm.APPLIN]: "0840",
    [Pkm.APPLETUN]: "0842",
    [Pkm.CRAMORANT]: "0845",
    [Pkm.ARROKUDA]: "0846",
    [Pkm.TOXEL]: "0848",
    [Pkm.TOXTRICITY]: "0849",
    [Pkm.SIZZLIPEDE]: "0850",
    [Pkm.CENTISKORCH]: "0851",
    [Pkm.SINISTEA]: "0854",
    [Pkm.POLTEAGEIST]: "0855",
    [Pkm.HATENNA]: "0856",
    [Pkm.HATTREM]: "0857",
    [Pkm.HATTERENE]: "0858",
    [Pkm.IMPIDIMP]: "0859",
    [Pkm.MORGREM]: "0860",
    [Pkm.GRIMMSNARL]: "0861",
    [Pkm.CURSOLA]: "0864",
    [Pkm.SNOM]: "0872",
    [Pkm.FROSMOTH]: "0873",
    [Pkm.STONJOURNER]: "0874",
    [Pkm.MORPEKO]: "0877",
    [Pkm.MORPEKO_HANGRY]: "0877-0001",
    [Pkm.DRACOVISH]: "0882",
    [Pkm.DREEPY]: "0885",
    [Pkm.DRAKLOAK]: "0886",
    [Pkm.DRAGAPULT]: "0887",
    [Pkm.ETERNATUS]: "0890",
    [Pkm.REGIELEKI]: "0894",
    [Pkm.REGIDRAGO]: "0895",
    [Pkm.SPECTRIER]: "0897",
    [Pkm.KLEAVOR]: "0900",
    [Pkm.URSALUNA]: "0901",
    [Pkm.URSALUNA_BLOODMOON]: "0901-0001",
    [Pkm.SNEASLER]: "0903",
    [Pkm.OVERQWIL]: "0904",
    [Pkm.ENAMORUS]: "0905",
    [Pkm.FUECOCO]: "0909",
    [Pkm.CROCALOR]: "0910",
    [Pkm.SKELEDIRGE]: "0911",
    [Pkm.PAWMI]: "0921",
    [Pkm.PAWMO]: "0922",
    [Pkm.PAWMOT]: "0923",
    [Pkm.TANDEMAUS]: "0924",
    [Pkm.MAUSHOLD_THREE]: "0925-0001",
    [Pkm.MAUSHOLD_FOUR]: "0925",
    [Pkm.WATTREL]: "0940",
    [Pkm.KILOWATTREL]: "0941",
    [Pkm.TINKATINK]: "0957",
    [Pkm.TINKATUFF]: "0958",
    [Pkm.TINKATON]: "0959",
    [Pkm.CYCLIZAR]: "0967",
    [Pkm.GLIMMET]: "0969",
    [Pkm.GLIMMORA]: "0970",
    [Pkm.ANNIHILAPE]: "0979",
    [Pkm.CLODSIRE]: "0980",
    [Pkm.KINGAMBIT]: "0983",
    [Pkm.IRON_BUNDLE]: "0991",
    [Pkm.IRON_HANDS]: "0992",
    [Pkm.FRIGIBAX]: "0996",
    [Pkm.ARCTIBAX]: "0997",
    [Pkm.BAXCALIBUR]: "0998",
    [Pkm.GIMMIGHOUL]: "0999-0001",
    [Pkm.GHOLDENGO]: "1000",
    [Pkm.OGERPON_TEAL]: "1017",
    [Pkm.OGERPON_TEAL_MASK]: "1017-0001",
    [Pkm.OGERPON_WELLSPRING]: "1017-0002",
    [Pkm.OGERPON_WELLSPRING_MASK]: "1017-0003",
    [Pkm.OGERPON_HEARTHFLAME]: "1017-0004",
    [Pkm.OGERPON_HEARTHFLAME_MASK]: "1017-0005",
    [Pkm.OGERPON_CORNERSTONE]: "1017-0006",
    [Pkm.OGERPON_CORNERSTONE_MASK]: "1017-0007"
};
exports.PkmByIndex = Object.fromEntries(Object.entries(exports.PkmIndex).map(([pkm, index]) => [index, pkm]));
exports.PkmFamily = {
    [Pkm.EGG]: Pkm.EGG,
    [Pkm.BULBASAUR]: Pkm.BULBASAUR,
    [Pkm.IVYSAUR]: Pkm.BULBASAUR,
    [Pkm.VENUSAUR]: Pkm.BULBASAUR,
    [Pkm.CHARMANDER]: Pkm.CHARMANDER,
    [Pkm.CHARMELEON]: Pkm.CHARMANDER,
    [Pkm.CHARIZARD]: Pkm.CHARMANDER,
    [Pkm.SQUIRTLE]: Pkm.SQUIRTLE,
    [Pkm.WARTORTLE]: Pkm.SQUIRTLE,
    [Pkm.BLASTOISE]: Pkm.SQUIRTLE,
    [Pkm.SLOWPOKE]: Pkm.SLOWPOKE,
    [Pkm.SLOWBRO]: Pkm.SLOWPOKE,
    [Pkm.SLOWKING]: Pkm.SLOWPOKE,
    [Pkm.GEODUDE]: Pkm.GEODUDE,
    [Pkm.GRAVELER]: Pkm.GEODUDE,
    [Pkm.GOLEM]: Pkm.GEODUDE,
    [Pkm.AZURILL]: Pkm.AZURILL,
    [Pkm.MARILL]: Pkm.AZURILL,
    [Pkm.AZUMARILL]: Pkm.AZURILL,
    [Pkm.ZUBAT]: Pkm.ZUBAT,
    [Pkm.GOLBAT]: Pkm.ZUBAT,
    [Pkm.CROBAT]: Pkm.ZUBAT,
    [Pkm.AMPHAROS]: Pkm.MAREEP,
    [Pkm.MAREEP]: Pkm.MAREEP,
    [Pkm.FLAFFY]: Pkm.MAREEP,
    [Pkm.CLEFFA]: Pkm.CLEFFA,
    [Pkm.CLEFAIRY]: Pkm.CLEFFA,
    [Pkm.CLEFABLE]: Pkm.CLEFFA,
    [Pkm.IGGLYBUFF]: Pkm.IGGLYBUFF,
    [Pkm.JIGGLYPUFF]: Pkm.IGGLYBUFF,
    [Pkm.WIGGLYTUFF]: Pkm.IGGLYBUFF,
    [Pkm.CATERPIE]: Pkm.CATERPIE,
    [Pkm.METAPOD]: Pkm.CATERPIE,
    [Pkm.BUTTERFREE]: Pkm.CATERPIE,
    [Pkm.WEEDLE]: Pkm.WEEDLE,
    [Pkm.KAKUNA]: Pkm.WEEDLE,
    [Pkm.BEEDRILL]: Pkm.WEEDLE,
    [Pkm.PIDGEY]: Pkm.PIDGEY,
    [Pkm.PIDGEOTTO]: Pkm.PIDGEY,
    [Pkm.PIDGEOT]: Pkm.PIDGEY,
    [Pkm.HOPPIP]: Pkm.HOPPIP,
    [Pkm.SKIPLOOM]: Pkm.HOPPIP,
    [Pkm.JUMPLUFF]: Pkm.HOPPIP,
    [Pkm.SEEDOT]: Pkm.SEEDOT,
    [Pkm.NUZLEAF]: Pkm.SEEDOT,
    [Pkm.SHIFTRY]: Pkm.SEEDOT,
    [Pkm.STARLY]: Pkm.STARLY,
    [Pkm.STARAVIA]: Pkm.STARLY,
    [Pkm.STARAPTOR]: Pkm.STARLY,
    [Pkm.CHIKORITA]: Pkm.CHIKORITA,
    [Pkm.BAYLEEF]: Pkm.CHIKORITA,
    [Pkm.MEGANIUM]: Pkm.CHIKORITA,
    [Pkm.CYNDAQUIL]: Pkm.CYNDAQUIL,
    [Pkm.QUILAVA]: Pkm.CYNDAQUIL,
    [Pkm.TYPHLOSION]: Pkm.CYNDAQUIL,
    [Pkm.TOTODILE]: Pkm.TOTODILE,
    [Pkm.CROCONAW]: Pkm.TOTODILE,
    [Pkm.FERALIGATR]: Pkm.TOTODILE,
    [Pkm.TREECKO]: Pkm.TREECKO,
    [Pkm.GROVYLE]: Pkm.TREECKO,
    [Pkm.SCEPTILE]: Pkm.TREECKO,
    [Pkm.TORCHIC]: Pkm.TORCHIC,
    [Pkm.COMBUSKEN]: Pkm.TORCHIC,
    [Pkm.BLAZIKEN]: Pkm.TORCHIC,
    [Pkm.MUDKIP]: Pkm.MUDKIP,
    [Pkm.MARSHTOMP]: Pkm.MUDKIP,
    [Pkm.SWAMPERT]: Pkm.MUDKIP,
    [Pkm.TURTWIG]: Pkm.TURTWIG,
    [Pkm.GROTLE]: Pkm.TURTWIG,
    [Pkm.TORTERRA]: Pkm.TURTWIG,
    [Pkm.CHIMCHAR]: Pkm.CHIMCHAR,
    [Pkm.MONFERNO]: Pkm.CHIMCHAR,
    [Pkm.INFERNAPE]: Pkm.CHIMCHAR,
    [Pkm.PIPLUP]: Pkm.PIPLUP,
    [Pkm.PRINPLUP]: Pkm.PIPLUP,
    [Pkm.EMPOLEON]: Pkm.PIPLUP,
    [Pkm.NIDORANF]: Pkm.NIDORANF,
    [Pkm.NIDORINA]: Pkm.NIDORANF,
    [Pkm.NIDOQUEEN]: Pkm.NIDORANF,
    [Pkm.NIDORANM]: Pkm.NIDORANM,
    [Pkm.NIDORINO]: Pkm.NIDORANM,
    [Pkm.NIDOKING]: Pkm.NIDORANM,
    [Pkm.PICHU]: Pkm.PICHU,
    [Pkm.PIKACHU]: Pkm.PICHU,
    [Pkm.RAICHU]: Pkm.PICHU,
    [Pkm.MACHOP]: Pkm.MACHOP,
    [Pkm.MACHOKE]: Pkm.MACHOP,
    [Pkm.MACHAMP]: Pkm.MACHOP,
    [Pkm.HORSEA]: Pkm.HORSEA,
    [Pkm.SEADRA]: Pkm.HORSEA,
    [Pkm.KINGDRA]: Pkm.HORSEA,
    [Pkm.TRAPINCH]: Pkm.TRAPINCH,
    [Pkm.VIBRAVA]: Pkm.TRAPINCH,
    [Pkm.FLYGON]: Pkm.TRAPINCH,
    [Pkm.SPHEAL]: Pkm.SPHEAL,
    [Pkm.SEALEO]: Pkm.SPHEAL,
    [Pkm.WALREIN]: Pkm.SPHEAL,
    [Pkm.ARON]: Pkm.ARON,
    [Pkm.LAIRON]: Pkm.ARON,
    [Pkm.AGGRON]: Pkm.ARON,
    [Pkm.MAGNEMITE]: Pkm.MAGNEMITE,
    [Pkm.MAGNETON]: Pkm.MAGNEMITE,
    [Pkm.MAGNEZONE]: Pkm.MAGNEMITE,
    [Pkm.RHYHORN]: Pkm.RHYHORN,
    [Pkm.RHYDON]: Pkm.RHYHORN,
    [Pkm.RHYPERIOR]: Pkm.RHYHORN,
    [Pkm.TOGEPI]: Pkm.TOGEPI,
    [Pkm.TOGETIC]: Pkm.TOGEPI,
    [Pkm.TOGEKISS]: Pkm.TOGEPI,
    [Pkm.DUSKULL]: Pkm.DUSKULL,
    [Pkm.DUSCLOPS]: Pkm.DUSKULL,
    [Pkm.DUSKNOIR]: Pkm.DUSKULL,
    [Pkm.LOTAD]: Pkm.LOTAD,
    [Pkm.LOMBRE]: Pkm.LOTAD,
    [Pkm.LUDICOLO]: Pkm.LOTAD,
    [Pkm.SHINX]: Pkm.SHINX,
    [Pkm.LUXIO]: Pkm.SHINX,
    [Pkm.LUXRAY]: Pkm.SHINX,
    [Pkm.POLIWAG]: Pkm.POLIWAG,
    [Pkm.POLIWHIRL]: Pkm.POLIWAG,
    [Pkm.POLITOED]: Pkm.POLIWAG,
    [Pkm.ABRA]: Pkm.ABRA,
    [Pkm.KADABRA]: Pkm.ABRA,
    [Pkm.ALAKAZAM]: Pkm.ABRA,
    [Pkm.GASTLY]: Pkm.GASTLY,
    [Pkm.HAUNTER]: Pkm.GASTLY,
    [Pkm.GENGAR]: Pkm.GASTLY,
    [Pkm.DRATINI]: Pkm.DRATINI,
    [Pkm.DRAGONAIR]: Pkm.DRATINI,
    [Pkm.DRAGONITE]: Pkm.DRATINI,
    [Pkm.LARVITAR]: Pkm.LARVITAR,
    [Pkm.PUPITAR]: Pkm.LARVITAR,
    [Pkm.TYRANITAR]: Pkm.LARVITAR,
    [Pkm.SLAKOTH]: Pkm.SLAKOTH,
    [Pkm.VIGOROTH]: Pkm.SLAKOTH,
    [Pkm.SLAKING]: Pkm.SLAKOTH,
    [Pkm.RALTS]: Pkm.RALTS,
    [Pkm.KIRLIA]: Pkm.RALTS,
    [Pkm.GARDEVOIR]: Pkm.RALTS,
    [Pkm.BAGON]: Pkm.BAGON,
    [Pkm.SHELGON]: Pkm.BAGON,
    [Pkm.SALAMENCE]: Pkm.BAGON,
    [Pkm.BELDUM]: Pkm.BELDUM,
    [Pkm.METANG]: Pkm.BELDUM,
    [Pkm.METAGROSS]: Pkm.BELDUM,
    [Pkm.GIBLE]: Pkm.GIBLE,
    [Pkm.GABITE]: Pkm.GIBLE,
    [Pkm.GARCHOMP]: Pkm.GIBLE,
    [Pkm.ELEKID]: Pkm.ELEKID,
    [Pkm.ELECTABUZZ]: Pkm.ELEKID,
    [Pkm.ELECTIVIRE]: Pkm.ELEKID,
    [Pkm.MAGBY]: Pkm.MAGBY,
    [Pkm.MAGMAR]: Pkm.MAGBY,
    [Pkm.MAGMORTAR]: Pkm.MAGBY,
    [Pkm.MUNCHLAX]: Pkm.MUNCHLAX,
    [Pkm.SNORLAX]: Pkm.MUNCHLAX,
    [Pkm.GROWLITHE]: Pkm.GROWLITHE,
    [Pkm.ARCANINE]: Pkm.GROWLITHE,
    [Pkm.HISUI_GROWLITHE]: Pkm.HISUI_GROWLITHE,
    [Pkm.HISUI_ARCANINE]: Pkm.HISUI_GROWLITHE,
    [Pkm.ONIX]: Pkm.ONIX,
    [Pkm.STEELIX]: Pkm.ONIX,
    [Pkm.MEGA_STEELIX]: Pkm.ONIX,
    [Pkm.SCYTHER]: Pkm.SCYTHER,
    [Pkm.SCIZOR]: Pkm.SCYTHER,
    [Pkm.KLEAVOR]: Pkm.SCYTHER,
    [Pkm.RIOLU]: Pkm.RIOLU,
    [Pkm.LUCARIO]: Pkm.RIOLU,
    [Pkm.EEVEE]: Pkm.EEVEE,
    [Pkm.VAPOREON]: Pkm.VAPOREON,
    [Pkm.JOLTEON]: Pkm.JOLTEON,
    [Pkm.FLAREON]: Pkm.FLAREON,
    [Pkm.ESPEON]: Pkm.ESPEON,
    [Pkm.UMBREON]: Pkm.UMBREON,
    [Pkm.LEAFEON]: Pkm.LEAFEON,
    [Pkm.SYLVEON]: Pkm.SYLVEON,
    [Pkm.GLACEON]: Pkm.GLACEON,
    [Pkm.MEDITITE]: Pkm.MEDITITE,
    [Pkm.MEDICHAM]: Pkm.MEDITITE,
    [Pkm.NUMEL]: Pkm.NUMEL,
    [Pkm.CAMERUPT]: Pkm.NUMEL,
    [Pkm.MEGA_CAMERUPT]: Pkm.NUMEL,
    [Pkm.DITTO]: Pkm.DITTO,
    [Pkm.DARKRAI]: Pkm.DARKRAI,
    [Pkm.LITWICK]: Pkm.LITWICK,
    [Pkm.LAMPENT]: Pkm.LITWICK,
    [Pkm.CHANDELURE]: Pkm.LITWICK,
    [Pkm.BELLSPROUT]: Pkm.BELLSPROUT,
    [Pkm.WEEPINBELL]: Pkm.BELLSPROUT,
    [Pkm.VICTREEBEL]: Pkm.BELLSPROUT,
    [Pkm.SWINUB]: Pkm.SWINUB,
    [Pkm.PILOSWINE]: Pkm.SWINUB,
    [Pkm.MAMOSWINE]: Pkm.SWINUB,
    [Pkm.SNORUNT]: Pkm.SNORUNT,
    [Pkm.GLALIE]: Pkm.SNORUNT,
    [Pkm.FROSLASS]: Pkm.SNORUNT,
    [Pkm.SNOVER]: Pkm.SNOVER,
    [Pkm.ABOMASNOW]: Pkm.SNOVER,
    [Pkm.MEGA_ABOMASNOW]: Pkm.SNOVER,
    [Pkm.VANILLITE]: Pkm.VANILLITE,
    [Pkm.VANILLISH]: Pkm.VANILLITE,
    [Pkm.VANILLUXE]: Pkm.VANILLITE,
    [Pkm.LARVESTA]: Pkm.LARVESTA,
    [Pkm.VOLCARONA]: Pkm.LARVESTA,
    [Pkm.LANDORUS]: Pkm.LANDORUS,
    [Pkm.TORNADUS]: Pkm.TORNADUS,
    [Pkm.THUNDURUS]: Pkm.THUNDURUS,
    [Pkm.ENAMORUS]: Pkm.ENAMORUS,
    [Pkm.KELDEO]: Pkm.KELDEO,
    [Pkm.TERRAKION]: Pkm.TERRAKION,
    [Pkm.VIRIZION]: Pkm.VIRIZION,
    [Pkm.COBALION]: Pkm.COBALION,
    [Pkm.MANAPHY]: Pkm.PHIONE,
    [Pkm.ROTOM]: Pkm.ROTOM,
    [Pkm.ROTOM_DRONE]: Pkm.ROTOM_DRONE,
    [Pkm.SPIRITOMB]: Pkm.SPIRITOMB,
    [Pkm.ABSOL]: Pkm.ABSOL,
    [Pkm.LAPRAS]: Pkm.LAPRAS,
    [Pkm.LATIAS]: Pkm.LATIAS,
    [Pkm.LATIOS]: Pkm.LATIOS,
    [Pkm.MESPRIT]: Pkm.MESPRIT,
    [Pkm.AZELF]: Pkm.AZELF,
    [Pkm.UXIE]: Pkm.UXIE,
    [Pkm.MEWTWO]: Pkm.MEWTWO,
    [Pkm.KYUREM]: Pkm.KYUREM,
    [Pkm.RESHIRAM]: Pkm.RESHIRAM,
    [Pkm.ZEKROM]: Pkm.ZEKROM,
    [Pkm.CELEBI]: Pkm.CELEBI,
    [Pkm.VICTINI]: Pkm.VICTINI,
    [Pkm.JIRACHI]: Pkm.JIRACHI,
    [Pkm.ARCEUS]: Pkm.ARCEUS,
    [Pkm.SHAYMIN]: Pkm.SHAYMIN,
    [Pkm.CRESSELIA]: Pkm.CRESSELIA,
    [Pkm.HEATRAN]: Pkm.HEATRAN,
    [Pkm.HO_OH]: Pkm.HO_OH,
    [Pkm.REGICE]: Pkm.REGICE,
    [Pkm.REGISTEEL]: Pkm.REGISTEEL,
    [Pkm.REGIROCK]: Pkm.REGIROCK,
    [Pkm.ARTICUNO]: Pkm.ARTICUNO,
    [Pkm.GALARIAN_ARTICUNO]: Pkm.GALARIAN_ARTICUNO,
    [Pkm.ZAPDOS]: Pkm.ZAPDOS,
    [Pkm.GALARIAN_ZAPDOS]: Pkm.GALARIAN_ZAPDOS,
    [Pkm.MOLTRES]: Pkm.MOLTRES,
    [Pkm.GALARIAN_MOLTRES]: Pkm.GALARIAN_MOLTRES,
    [Pkm.AERODACTYL]: Pkm.AERODACTYL,
    [Pkm.GROUDON]: Pkm.GROUDON,
    [Pkm.KYOGRE]: Pkm.KYOGRE,
    [Pkm.RAYQUAZA]: Pkm.RAYQUAZA,
    [Pkm.MEGA_RAYQUAZA]: Pkm.RAYQUAZA,
    [Pkm.PALKIA]: Pkm.PALKIA,
    [Pkm.DIALGA]: Pkm.DIALGA,
    [Pkm.GIRATINA]: Pkm.GIRATINA,
    [Pkm.SUICUNE]: Pkm.SUICUNE,
    [Pkm.ENTEI]: Pkm.ENTEI,
    [Pkm.RAIKOU]: Pkm.RAIKOU,
    [Pkm.REGIGIGAS]: Pkm.REGIGIGAS,
    [Pkm.MAGIKARP]: Pkm.MAGIKARP,
    [Pkm.GYARADOS]: Pkm.MAGIKARP,
    [Pkm.RATTATA]: Pkm.RATTATA,
    [Pkm.ALOLAN_RATTATA]: Pkm.ALOLAN_RATTATA,
    [Pkm.RATICATE]: Pkm.RATTATA,
    [Pkm.ALOLAN_RATICATE]: Pkm.ALOLAN_RATTATA,
    [Pkm.LUGIA]: Pkm.LUGIA,
    [Pkm.SHADOW_LUGIA]: Pkm.LUGIA,
    [Pkm.CARVANHA]: Pkm.CARVANHA,
    [Pkm.SWABLU]: Pkm.SWABLU,
    [Pkm.PRIMAL_GROUDON]: Pkm.GROUDON,
    [Pkm.PRIMAL_KYOGRE]: Pkm.KYOGRE,
    [Pkm.FEAROW]: Pkm.SPEAROW,
    [Pkm.SPEAROW]: Pkm.SPEAROW,
    [Pkm.MEOWTH]: Pkm.MEOWTH,
    [Pkm.PERSIAN]: Pkm.MEOWTH,
    [Pkm.ALOLAN_MEOWTH]: Pkm.ALOLAN_MEOWTH,
    [Pkm.ALOLAN_PERSIAN]: Pkm.ALOLAN_MEOWTH,
    [Pkm.DEINO]: Pkm.DEINO,
    [Pkm.ZWEILOUS]: Pkm.DEINO,
    [Pkm.HYDREIGON]: Pkm.DEINO,
    [Pkm.SANDILE]: Pkm.SANDILE,
    [Pkm.KROKOROK]: Pkm.SANDILE,
    [Pkm.KROOKODILE]: Pkm.SANDILE,
    [Pkm.SOLOSIS]: Pkm.SOLOSIS,
    [Pkm.DUOSION]: Pkm.SOLOSIS,
    [Pkm.REUNICLUS]: Pkm.SOLOSIS,
    [Pkm.ODDISH]: Pkm.ODDISH,
    [Pkm.GLOOM]: Pkm.ODDISH,
    [Pkm.VILEPLUME]: Pkm.ODDISH,
    [Pkm.BELLOSSOM]: Pkm.ODDISH,
    [Pkm.AMAURA]: Pkm.AMAURA,
    [Pkm.AURORUS]: Pkm.AMAURA,
    [Pkm.ANORITH]: Pkm.ANORITH,
    [Pkm.ARMALDO]: Pkm.ANORITH,
    [Pkm.ARCHEN]: Pkm.ARCHEN,
    [Pkm.ARCHEOPS]: Pkm.ARCHEN,
    [Pkm.SHIELDON]: Pkm.SHIELDON,
    [Pkm.BASTIODON]: Pkm.SHIELDON,
    [Pkm.LILEEP]: Pkm.LILEEP,
    [Pkm.CRADILY]: Pkm.LILEEP,
    [Pkm.KABUTO]: Pkm.KABUTO,
    [Pkm.KABUTOPS]: Pkm.KABUTO,
    [Pkm.OMANYTE]: Pkm.OMANYTE,
    [Pkm.OMASTAR]: Pkm.OMANYTE,
    [Pkm.CRANIDOS]: Pkm.CRANIDOS,
    [Pkm.RAMPARDOS]: Pkm.CRANIDOS,
    [Pkm.TYRUNT]: Pkm.TYRUNT,
    [Pkm.TYRANTRUM]: Pkm.TYRUNT,
    [Pkm.BUDEW]: Pkm.BUDEW,
    [Pkm.ROSELIA]: Pkm.BUDEW,
    [Pkm.ROSERADE]: Pkm.BUDEW,
    [Pkm.BUNEARY]: Pkm.BUNEARY,
    [Pkm.LOPUNNY]: Pkm.BUNEARY,
    [Pkm.MEGA_LOPUNNY]: Pkm.BUNEARY,
    [Pkm.AXEW]: Pkm.AXEW,
    [Pkm.FRAXURE]: Pkm.AXEW,
    [Pkm.HAXORUS]: Pkm.AXEW,
    [Pkm.VENIPEDE]: Pkm.VENIPEDE,
    [Pkm.WHIRLIPEDE]: Pkm.VENIPEDE,
    [Pkm.SCOLIPEDE]: Pkm.VENIPEDE,
    [Pkm.PORYGON]: Pkm.PORYGON,
    [Pkm.PORYGON_2]: Pkm.PORYGON,
    [Pkm.PORYGON_Z]: Pkm.PORYGON,
    [Pkm.ELECTRIKE]: Pkm.ELECTRIKE,
    [Pkm.MANECTRIC]: Pkm.ELECTRIKE,
    [Pkm.MEGA_MANECTRIC]: Pkm.ELECTRIKE,
    [Pkm.SHUPPET]: Pkm.SHUPPET,
    [Pkm.BANETTE]: Pkm.SHUPPET,
    [Pkm.MEGA_BANETTE]: Pkm.SHUPPET,
    [Pkm.HONEDGE]: Pkm.HONEDGE,
    [Pkm.DOUBLADE]: Pkm.HONEDGE,
    [Pkm.AEGISLASH]: Pkm.HONEDGE,
    [Pkm.AEGISLASH_BLADE]: Pkm.HONEDGE,
    [Pkm.CUBONE]: Pkm.CUBONE,
    [Pkm.MAROWAK]: Pkm.CUBONE,
    [Pkm.ALOLAN_MAROWAK]: Pkm.CUBONE,
    [Pkm.WHISMUR]: Pkm.WHISMUR,
    [Pkm.LOUDRED]: Pkm.WHISMUR,
    [Pkm.EXPLOUD]: Pkm.WHISMUR,
    [Pkm.TYMPOLE]: Pkm.TYMPOLE,
    [Pkm.PALPITOAD]: Pkm.TYMPOLE,
    [Pkm.SEISMITOAD]: Pkm.TYMPOLE,
    [Pkm.SEWADDLE]: Pkm.SEWADDLE,
    [Pkm.SWADLOON]: Pkm.SEWADDLE,
    [Pkm.LEAVANNY]: Pkm.SEWADDLE,
    [Pkm.FLABEBE]: Pkm.FLABEBE,
    [Pkm.FLOETTE]: Pkm.FLABEBE,
    [Pkm.FLORGES]: Pkm.FLABEBE,
    [Pkm.JANGMO_O]: Pkm.JANGMO_O,
    [Pkm.HAKAMO_O]: Pkm.JANGMO_O,
    [Pkm.KOMMO_O]: Pkm.JANGMO_O,
    [Pkm.MELOETTA]: Pkm.MELOETTA,
    [Pkm.ALTARIA]: Pkm.SWABLU,
    [Pkm.MEGA_ALTARIA]: Pkm.SWABLU,
    [Pkm.CASTFORM]: Pkm.CASTFORM,
    [Pkm.CASTFORM_SUN]: Pkm.CASTFORM,
    [Pkm.CASTFORM_RAIN]: Pkm.CASTFORM,
    [Pkm.CASTFORM_HAIL]: Pkm.CASTFORM,
    [Pkm.CORPHISH]: Pkm.CORPHISH,
    [Pkm.CRAWDAUNT]: Pkm.CORPHISH,
    [Pkm.JOLTIK]: Pkm.JOLTIK,
    [Pkm.GALVANTULA]: Pkm.JOLTIK,
    [Pkm.DEFAULT]: Pkm.DEFAULT,
    [Pkm.NINCADA]: Pkm.NINCADA,
    [Pkm.NINJASK]: Pkm.NINCADA,
    [Pkm.SHEDINJA]: Pkm.SHEDINJA,
    [Pkm.PONYTA]: Pkm.PONYTA,
    [Pkm.RAPIDASH]: Pkm.PONYTA,
    [Pkm.GALARIAN_PONYTA]: Pkm.GALARIAN_PONYTA,
    [Pkm.GALARIAN_RAPIDASH]: Pkm.GALARIAN_PONYTA,
    [Pkm.GENESECT]: Pkm.GENESECT,
    [Pkm.RELICANTH]: Pkm.RELICANTH,
    [Pkm.HATENNA]: Pkm.HATENNA,
    [Pkm.HATTREM]: Pkm.HATENNA,
    [Pkm.HATTERENE]: Pkm.HATENNA,
    [Pkm.FENNEKIN]: Pkm.FENNEKIN,
    [Pkm.BRAIXEN]: Pkm.FENNEKIN,
    [Pkm.DELPHOX]: Pkm.FENNEKIN,
    [Pkm.MAKUHITA]: Pkm.MAKUHITA,
    [Pkm.HARIYAMA]: Pkm.MAKUHITA,
    [Pkm.REGIELEKI]: Pkm.REGIELEKI,
    [Pkm.REGIDRAGO]: Pkm.REGIDRAGO,
    [Pkm.GUZZLORD]: Pkm.GUZZLORD,
    [Pkm.ETERNATUS]: Pkm.ETERNATUS,
    [Pkm.NOIBAT]: Pkm.NOIBAT,
    [Pkm.NOIVERN]: Pkm.NOIBAT,
    [Pkm.PUMPKABOO]: Pkm.PUMPKABOO,
    [Pkm.GOURGEIST]: Pkm.PUMPKABOO,
    [Pkm.CACNEA]: Pkm.CACNEA,
    [Pkm.CACTURNE]: Pkm.CACNEA,
    [Pkm.TAUROS]: Pkm.TAUROS,
    [Pkm.HAPPINY]: Pkm.HAPPINY,
    [Pkm.CHANSEY]: Pkm.HAPPINY,
    [Pkm.BLISSEY]: Pkm.HAPPINY,
    [Pkm.TAPU_KOKO]: Pkm.TAPU_KOKO,
    [Pkm.TAPU_LELE]: Pkm.TAPU_LELE,
    [Pkm.STAKATAKA]: Pkm.STAKATAKA,
    [Pkm.BLACEPHALON]: Pkm.BLACEPHALON,
    [Pkm.HOUNDOUR]: Pkm.HOUNDOUR,
    [Pkm.HOUNDOOM]: Pkm.HOUNDOUR,
    [Pkm.MEGA_HOUNDOOM]: Pkm.HOUNDOUR,
    [Pkm.CLAMPERL]: Pkm.CLAMPERL,
    [Pkm.HUNTAIL]: Pkm.CLAMPERL,
    [Pkm.GOREBYSS]: Pkm.CLAMPERL,
    [Pkm.SMOOCHUM]: Pkm.SMOOCHUM,
    [Pkm.JYNX]: Pkm.SMOOCHUM,
    [Pkm.SALANDIT]: Pkm.SALANDIT,
    [Pkm.SALAZZLE]: Pkm.SALANDIT,
    [Pkm.VENONAT]: Pkm.VENONAT,
    [Pkm.VENOMOTH]: Pkm.VENONAT,
    [Pkm.VOLTORB]: Pkm.VOLTORB,
    [Pkm.HISUI_VOLTORB]: Pkm.HISUI_VOLTORB,
    [Pkm.ELECTRODE]: Pkm.VOLTORB,
    [Pkm.HISUI_ELECTRODE]: Pkm.HISUI_VOLTORB,
    [Pkm.SLUGMA]: Pkm.SLUGMA,
    [Pkm.MAGCARGO]: Pkm.SLUGMA,
    [Pkm.SNEASEL]: Pkm.SNEASEL,
    [Pkm.WEAVILE]: Pkm.SNEASEL,
    [Pkm.CROAGUNK]: Pkm.CROAGUNK,
    [Pkm.TOXICROAK]: Pkm.CROAGUNK,
    [Pkm.CHINCHOU]: Pkm.CHINCHOU,
    [Pkm.LANTURN]: Pkm.CHINCHOU,
    [Pkm.POOCHYENA]: Pkm.POOCHYENA,
    [Pkm.MIGHTYENA]: Pkm.POOCHYENA,
    [Pkm.BRONZOR]: Pkm.BRONZOR,
    [Pkm.BRONZONG]: Pkm.BRONZOR,
    [Pkm.DRIFLOON]: Pkm.DRIFLOON,
    [Pkm.DRIFBLIM]: Pkm.DRIFLOON,
    [Pkm.SHROOMISH]: Pkm.SHROOMISH,
    [Pkm.BRELOOM]: Pkm.SHROOMISH,
    [Pkm.TENTACOOL]: Pkm.TENTACOOL,
    [Pkm.TENTACRUEL]: Pkm.TENTACOOL,
    [Pkm.SNUBULL]: Pkm.SNUBULL,
    [Pkm.GRANBULL]: Pkm.SNUBULL,
    [Pkm.SEVIPER]: Pkm.SEVIPER,
    [Pkm.VULPIX]: Pkm.VULPIX,
    [Pkm.NINETALES]: Pkm.VULPIX,
    [Pkm.ALOLAN_VULPIX]: Pkm.ALOLAN_VULPIX,
    [Pkm.ALOLAN_NINETALES]: Pkm.ALOLAN_VULPIX,
    [Pkm.BUIZEL]: Pkm.BUIZEL,
    [Pkm.FLOATZEL]: Pkm.BUIZEL,
    [Pkm.KECLEON]: Pkm.KECLEON,
    [Pkm.MAWILE]: Pkm.MAWILE,
    [Pkm.CARBINK]: Pkm.CARBINK,
    [Pkm.DIANCIE]: Pkm.CARBINK,
    [Pkm.CHATOT]: Pkm.CHATOT,
    [Pkm.GOOMY]: Pkm.GOOMY,
    [Pkm.SLIGOO]: Pkm.GOOMY,
    [Pkm.GOODRA]: Pkm.GOOMY,
    [Pkm.HISUI_SLIGGOO]: Pkm.GOOMY,
    [Pkm.HISUI_GOODRA]: Pkm.GOOMY,
    [Pkm.MEW]: Pkm.MEW,
    [Pkm.BOUNSWEET]: Pkm.BOUNSWEET,
    [Pkm.STEENEE]: Pkm.BOUNSWEET,
    [Pkm.TSAREENA]: Pkm.BOUNSWEET,
    [Pkm.VOLCANION]: Pkm.VOLCANION,
    [Pkm.APPLIN]: Pkm.APPLIN,
    [Pkm.APPLETUN]: Pkm.APPLIN,
    [Pkm.OSHAWOTT]: Pkm.OSHAWOTT,
    [Pkm.DEWOTT]: Pkm.OSHAWOTT,
    [Pkm.SAMUROTT]: Pkm.OSHAWOTT,
    [Pkm.SNOM]: Pkm.SNOM,
    [Pkm.FROSMOTH]: Pkm.SNOM,
    [Pkm.WAILMER]: Pkm.WAILMER,
    [Pkm.WAILORD]: Pkm.WAILMER,
    [Pkm.DREEPY]: Pkm.DREEPY,
    [Pkm.DRAKLOAK]: Pkm.DREEPY,
    [Pkm.DRAGAPULT]: Pkm.DREEPY,
    [Pkm.SNIVY]: Pkm.SNIVY,
    [Pkm.SERVINE]: Pkm.SNIVY,
    [Pkm.SERPERIOR]: Pkm.SNIVY,
    [Pkm.SCORBUNNY]: Pkm.SCORBUNNY,
    [Pkm.RABOOT]: Pkm.SCORBUNNY,
    [Pkm.CINDERACE]: Pkm.SCORBUNNY,
    [Pkm.POPPLIO]: Pkm.POPPLIO,
    [Pkm.BRIONNE]: Pkm.POPPLIO,
    [Pkm.PRIMARINA]: Pkm.POPPLIO,
    [Pkm.GOTHITA]: Pkm.GOTHITA,
    [Pkm.GOTHORITA]: Pkm.GOTHITA,
    [Pkm.GOTHITELLE]: Pkm.GOTHITA,
    [Pkm.SANDSHREW]: Pkm.SANDSHREW,
    [Pkm.SANDSLASH]: Pkm.SANDSHREW,
    [Pkm.FARFETCH_D]: Pkm.FARFETCH_D,
    [Pkm.UNOWN_A]: Pkm.UNOWN_A,
    [Pkm.UNOWN_B]: Pkm.UNOWN_A,
    [Pkm.UNOWN_C]: Pkm.UNOWN_A,
    [Pkm.UNOWN_D]: Pkm.UNOWN_A,
    [Pkm.UNOWN_E]: Pkm.UNOWN_A,
    [Pkm.UNOWN_F]: Pkm.UNOWN_A,
    [Pkm.UNOWN_G]: Pkm.UNOWN_A,
    [Pkm.UNOWN_H]: Pkm.UNOWN_A,
    [Pkm.UNOWN_I]: Pkm.UNOWN_A,
    [Pkm.UNOWN_J]: Pkm.UNOWN_A,
    [Pkm.UNOWN_K]: Pkm.UNOWN_A,
    [Pkm.UNOWN_L]: Pkm.UNOWN_A,
    [Pkm.UNOWN_M]: Pkm.UNOWN_A,
    [Pkm.UNOWN_N]: Pkm.UNOWN_A,
    [Pkm.UNOWN_O]: Pkm.UNOWN_A,
    [Pkm.UNOWN_P]: Pkm.UNOWN_A,
    [Pkm.UNOWN_Q]: Pkm.UNOWN_A,
    [Pkm.UNOWN_R]: Pkm.UNOWN_A,
    [Pkm.UNOWN_S]: Pkm.UNOWN_A,
    [Pkm.UNOWN_T]: Pkm.UNOWN_A,
    [Pkm.UNOWN_U]: Pkm.UNOWN_A,
    [Pkm.UNOWN_V]: Pkm.UNOWN_A,
    [Pkm.UNOWN_W]: Pkm.UNOWN_A,
    [Pkm.UNOWN_X]: Pkm.UNOWN_A,
    [Pkm.UNOWN_Y]: Pkm.UNOWN_A,
    [Pkm.UNOWN_Z]: Pkm.UNOWN_A,
    [Pkm.UNOWN_QUESTION]: Pkm.UNOWN_A,
    [Pkm.UNOWN_EXCLAMATION]: Pkm.UNOWN_A,
    [Pkm.TAPU_FINI]: Pkm.TAPU_FINI,
    [Pkm.TAPU_BULU]: Pkm.TAPU_BULU,
    [Pkm.DIGLETT]: Pkm.DIGLETT,
    [Pkm.ALOLAN_DIGLETT]: Pkm.ALOLAN_DIGLETT,
    [Pkm.DUGTRIO]: Pkm.DIGLETT,
    [Pkm.ALOLAN_DUGTRIO]: Pkm.ALOLAN_DIGLETT,
    [Pkm.ROWLET]: Pkm.ROWLET,
    [Pkm.DARTIX]: Pkm.ROWLET,
    [Pkm.DECIDUEYE]: Pkm.ROWLET,
    [Pkm.ZORUA]: Pkm.ZORUA,
    [Pkm.ZOROARK]: Pkm.ZORUA,
    [Pkm.FROAKIE]: Pkm.FROAKIE,
    [Pkm.FROGADIER]: Pkm.FROAKIE,
    [Pkm.GRENINJA]: Pkm.FROAKIE,
    [Pkm.TYROGUE]: Pkm.TYROGUE,
    [Pkm.HITMONLEE]: Pkm.TYROGUE,
    [Pkm.HITMONCHAN]: Pkm.TYROGUE,
    [Pkm.HITMONTOP]: Pkm.TYROGUE,
    [Pkm.MIMIKYU]: Pkm.MIMIKYU,
    [Pkm.MIMIKYU_BUSTED]: Pkm.MIMIKYU,
    [Pkm.GRIMER]: Pkm.GRIMER,
    [Pkm.MUK]: Pkm.GRIMER,
    [Pkm.SHARPEDO]: Pkm.CARVANHA,
    [Pkm.HISUI_ZORUA]: Pkm.HISUI_ZORUA,
    [Pkm.HISUI_ZOROARK]: Pkm.HISUI_ZORUA,
    [Pkm.ALOLAN_GRIMER]: Pkm.ALOLAN_GRIMER,
    [Pkm.ALOLAN_MUK]: Pkm.ALOLAN_GRIMER,
    [Pkm.PINECO]: Pkm.PINECO,
    [Pkm.FORRETRESS]: Pkm.PINECO,
    [Pkm.SEEL]: Pkm.SEEL,
    [Pkm.DEWGONG]: Pkm.SEEL,
    [Pkm.ALOLAN_GEODUDE]: Pkm.ALOLAN_GEODUDE,
    [Pkm.ALOLAN_GRAVELER]: Pkm.ALOLAN_GEODUDE,
    [Pkm.ALOLAN_GOLEM]: Pkm.ALOLAN_GEODUDE,
    [Pkm.EKANS]: Pkm.EKANS,
    [Pkm.ARBOK]: Pkm.EKANS,
    [Pkm.MIME_JR]: Pkm.MIME_JR,
    [Pkm.MR_MIME]: Pkm.MIME_JR,
    [Pkm.ORIGIN_GIRATINA]: Pkm.ORIGIN_GIRATINA,
    [Pkm.PIROUETTE_MELOETTA]: Pkm.MELOETTA,
    [Pkm.MELMETAL]: Pkm.MELMETAL,
    [Pkm.HOOPA]: Pkm.HOOPA,
    [Pkm.HOOPA_UNBOUND]: Pkm.HOOPA,
    [Pkm.SILVALLY]: Pkm.TYPE_NULL,
    [Pkm.ZERAORA]: Pkm.ZERAORA,
    [Pkm.XERNEAS]: Pkm.XERNEAS,
    [Pkm.YVELTAL]: Pkm.YVELTAL,
    [Pkm.TYPE_NULL]: Pkm.TYPE_NULL,
    [Pkm.MARSHADOW]: Pkm.MARSHADOW,
    [Pkm.HOOTHOOT]: Pkm.HOOTHOOT,
    [Pkm.NOCTOWL]: Pkm.HOOTHOOT,
    [Pkm.BONSLEY]: Pkm.BONSLEY,
    [Pkm.SUDOWOODO]: Pkm.BONSLEY,
    [Pkm.PHIONE]: Pkm.PHIONE,
    [Pkm.COMBEE]: Pkm.COMBEE,
    [Pkm.VESPIQUEEN]: Pkm.COMBEE,
    [Pkm.SHUCKLE]: Pkm.SHUCKLE,
    [Pkm.TEPIG]: Pkm.TEPIG,
    [Pkm.PIGNITE]: Pkm.TEPIG,
    [Pkm.EMBOAR]: Pkm.TEPIG,
    [Pkm.WYNAUT]: Pkm.WYNAUT,
    [Pkm.WOBBUFFET]: Pkm.WYNAUT,
    [Pkm.LUNATONE]: Pkm.LUNATONE,
    [Pkm.SOLROCK]: Pkm.SOLROCK,
    [Pkm.POLIWRATH]: Pkm.POLIWAG,
    [Pkm.SHAYMIN_SKY]: Pkm.SHAYMIN,
    [Pkm.WURMPLE]: Pkm.WURMPLE,
    [Pkm.SILCOON]: Pkm.WURMPLE,
    [Pkm.BEAUTIFLY]: Pkm.WURMPLE,
    [Pkm.CASCOON]: Pkm.WURMPLE,
    [Pkm.DUSTOX]: Pkm.WURMPLE,
    [Pkm.TINKATINK]: Pkm.TINKATINK,
    [Pkm.TINKATUFF]: Pkm.TINKATINK,
    [Pkm.TINKATON]: Pkm.TINKATINK,
    [Pkm.PARAS]: Pkm.PARAS,
    [Pkm.PARASECT]: Pkm.PARAS,
    [Pkm.MILTANK]: Pkm.MILTANK,
    [Pkm.MANKEY]: Pkm.MANKEY,
    [Pkm.PRIMEAPE]: Pkm.MANKEY,
    [Pkm.ANNIHILAPE]: Pkm.MANKEY,
    [Pkm.SUNKERN]: Pkm.SUNKERN,
    [Pkm.SUNFLORA]: Pkm.SUNKERN,
    [Pkm.MARACTUS]: Pkm.MARACTUS,
    [Pkm.PLUSLE]: Pkm.PLUSLE,
    [Pkm.MINUN]: Pkm.MINUN,
    [Pkm.PINSIR]: Pkm.PINSIR,
    [Pkm.NATU]: Pkm.NATU,
    [Pkm.XATU]: Pkm.NATU,
    [Pkm.GLIGAR]: Pkm.GLIGAR,
    [Pkm.GLISCOR]: Pkm.GLIGAR,
    [Pkm.SHELLDER]: Pkm.SHELLDER,
    [Pkm.CLOYSTER]: Pkm.SHELLDER,
    [Pkm.SENTRET]: Pkm.SENTRET,
    [Pkm.FURRET]: Pkm.SENTRET,
    [Pkm.SPECTRIER]: Pkm.SPECTRIER,
    [Pkm.TORKOAL]: Pkm.TORKOAL,
    [Pkm.DELIBIRD]: Pkm.DELIBIRD,
    [Pkm.IRON_BUNDLE]: Pkm.IRON_BUNDLE,
    [Pkm.KARTANA]: Pkm.KARTANA,
    [Pkm.CHINGLING]: Pkm.CHINGLING,
    [Pkm.CHIMECHO]: Pkm.CHINGLING,
    [Pkm.ALOLAN_RAICHU]: Pkm.PICHU,
    [Pkm.DHELMISE]: Pkm.DHELMISE,
    [Pkm.KOFFING]: Pkm.KOFFING,
    [Pkm.WEEZING]: Pkm.KOFFING,
    [Pkm.STARYU]: Pkm.STARYU,
    [Pkm.STARMIE]: Pkm.STARYU,
    [Pkm.NOSEPASS]: Pkm.NOSEPASS,
    [Pkm.PROBOPASS]: Pkm.NOSEPASS,
    [Pkm.WOOBAT]: Pkm.WOOBAT,
    [Pkm.SWOOBAT]: Pkm.WOOBAT,
    [Pkm.CLAUNCHER]: Pkm.CLAUNCHER,
    [Pkm.CLAWITZER]: Pkm.CLAUNCHER,
    [Pkm.YANMA]: Pkm.YANMA,
    [Pkm.YANMEGA]: Pkm.YANMA,
    [Pkm.HELIOPTILE]: Pkm.HELIOPTILE,
    [Pkm.HELIOLISK]: Pkm.HELIOPTILE,
    [Pkm.BIDOOF]: Pkm.BIDOOF,
    [Pkm.BIBAREL]: Pkm.BIDOOF,
    [Pkm.SPINDA]: Pkm.SPINDA,
    [Pkm.BALTOY]: Pkm.BALTOY,
    [Pkm.CLAYDOL]: Pkm.BALTOY,
    [Pkm.HERACROSS]: Pkm.HERACROSS,
    [Pkm.PURRLOIN]: Pkm.PURRLOIN,
    [Pkm.LIEPARD]: Pkm.PURRLOIN,
    [Pkm.BARBOACH]: Pkm.BARBOACH,
    [Pkm.WHISCASH]: Pkm.BARBOACH,
    [Pkm.SCRAGGY]: Pkm.SCRAGGY,
    [Pkm.SCRAFTY]: Pkm.SCRAGGY,
    [Pkm.FINNEON]: Pkm.FINNEON,
    [Pkm.LUMINEON]: Pkm.FINNEON,
    [Pkm.STUNKY]: Pkm.STUNKY,
    [Pkm.SKUNTANK]: Pkm.STUNKY,
    [Pkm.ILLUMISE]: Pkm.ILLUMISE,
    [Pkm.VOLBEAT]: Pkm.VOLBEAT,
    [Pkm.NECROZMA]: Pkm.NECROZMA,
    [Pkm.ULTRA_NECROZMA]: Pkm.NECROZMA,
    [Pkm.CHERRUBI]: Pkm.CHERRUBI,
    [Pkm.CHERRIM]: Pkm.CHERRUBI,
    [Pkm.CHERRIM_SUNLIGHT]: Pkm.CHERRUBI,
    [Pkm.MISDREAVUS]: Pkm.MISDREAVUS,
    [Pkm.MISMAGIUS]: Pkm.MISDREAVUS,
    [Pkm.DODUO]: Pkm.DODUO,
    [Pkm.DODRIO]: Pkm.DODUO,
    [Pkm.XURKITREE]: Pkm.XURKITREE,
    [Pkm.TANDEMAUS]: Pkm.TANDEMAUS,
    [Pkm.MAUSHOLD_THREE]: Pkm.TANDEMAUS,
    [Pkm.MAUSHOLD_FOUR]: Pkm.TANDEMAUS,
    [Pkm.KRICKETOT]: Pkm.KRICKETOT,
    [Pkm.KRICKETUNE]: Pkm.KRICKETOT,
    [Pkm.HIPPOPOTAS]: Pkm.HIPPOPOTAS,
    [Pkm.HIPPODOWN]: Pkm.HIPPOPOTAS,
    [Pkm.WINGULL]: Pkm.WINGULL,
    [Pkm.PELIPPER]: Pkm.WINGULL,
    [Pkm.NIHILEGO]: Pkm.NIHILEGO,
    [Pkm.SOBBLE]: Pkm.SOBBLE,
    [Pkm.DRIZZILE]: Pkm.SOBBLE,
    [Pkm.INTELEON]: Pkm.SOBBLE,
    [Pkm.TROPIUS]: Pkm.TROPIUS,
    [Pkm.EXEGGCUTE]: Pkm.EXEGGCUTE,
    [Pkm.EXEGGUTOR]: Pkm.EXEGGCUTE,
    [Pkm.ALOLAN_EXEGGUTOR]: Pkm.EXEGGCUTE,
    [Pkm.COMFEY]: Pkm.COMFEY,
    [Pkm.CARNIVINE]: Pkm.CARNIVINE,
    [Pkm.HISUIAN_QWILFISH]: Pkm.HISUIAN_QWILFISH,
    [Pkm.OVERQWIL]: Pkm.HISUIAN_QWILFISH,
    [Pkm.HISUIAN_TYPHLOSION]: Pkm.CYNDAQUIL,
    [Pkm.LILLIPUP]: Pkm.LILLIPUP,
    [Pkm.HERDIER]: Pkm.LILLIPUP,
    [Pkm.STOUTLAND]: Pkm.LILLIPUP,
    [Pkm.ZIGZAGOON]: Pkm.ZIGZAGOON,
    [Pkm.LINOONE]: Pkm.ZIGZAGOON,
    [Pkm.PHEROMOSA]: Pkm.PHEROMOSA,
    [Pkm.SABLEYE]: Pkm.SABLEYE,
    [Pkm.MEGA_SABLEYE]: Pkm.SABLEYE,
    [Pkm.DRACOVISH]: Pkm.DRACOVISH,
    [Pkm.CORSOLA]: Pkm.CORSOLA,
    [Pkm.GALAR_CORSOLA]: Pkm.CORSOLA,
    [Pkm.CURSOLA]: Pkm.CORSOLA,
    [Pkm.GIMMIGHOUL]: Pkm.GIMMIGHOUL,
    [Pkm.GHOLDENGO]: Pkm.GIMMIGHOUL,
    [Pkm.PHANTUMP]: Pkm.PHANTUMP,
    [Pkm.TREVENANT]: Pkm.PHANTUMP,
    [Pkm.SMEARGLE]: Pkm.SMEARGLE,
    [Pkm.TOXEL]: Pkm.TOXEL,
    [Pkm.TOXTRICITY]: Pkm.TOXEL,
    [Pkm.BRUXISH]: Pkm.BRUXISH,
    [Pkm.SUBSTITUTE]: Pkm.SUBSTITUTE,
    [Pkm.CYCLIZAR]: Pkm.CYCLIZAR,
    [Pkm.PAWNIARD]: Pkm.PAWNIARD,
    [Pkm.BISHARP]: Pkm.PAWNIARD,
    [Pkm.KINGAMBIT]: Pkm.PAWNIARD,
    [Pkm.MINIOR]: Pkm.MINIOR,
    [Pkm.MINIOR_KERNEL_RED]: Pkm.MINIOR,
    [Pkm.MINIOR_KERNEL_BLUE]: Pkm.MINIOR,
    [Pkm.MINIOR_KERNEL_ORANGE]: Pkm.MINIOR,
    [Pkm.MINIOR_KERNEL_GREEN]: Pkm.MINIOR,
    [Pkm.FEEBAS]: Pkm.FEEBAS,
    [Pkm.MILOTIC]: Pkm.FEEBAS,
    [Pkm.MORPEKO]: Pkm.MORPEKO,
    [Pkm.MORPEKO_HANGRY]: Pkm.MORPEKO,
    [Pkm.KANGASKHAN]: Pkm.KANGASKHAN,
    [Pkm.TEDDIURSA]: Pkm.TEDDIURSA,
    [Pkm.URSARING]: Pkm.TEDDIURSA,
    [Pkm.URSALUNA]: Pkm.TEDDIURSA,
    [Pkm.URSALUNA_BLOODMOON]: Pkm.TEDDIURSA,
    [Pkm.AIPOM]: Pkm.AIPOM,
    [Pkm.AMBIPOM]: Pkm.AIPOM,
    [Pkm.DEERLING]: Pkm.DEERLING,
    [Pkm.SAWSBUCK]: Pkm.DEERLING,
    [Pkm.LICKITUNG]: Pkm.LICKITUNG,
    [Pkm.LICKILICKY]: Pkm.LICKITUNG,
    [Pkm.PATRAT]: Pkm.PATRAT,
    [Pkm.WATCHOG]: Pkm.PATRAT,
    [Pkm.SPINARAK]: Pkm.SPINARAK,
    [Pkm.ARIADOS]: Pkm.SPINARAK,
    [Pkm.DEWPIDER]: Pkm.DEWPIDER,
    [Pkm.ARAQUANID]: Pkm.DEWPIDER,
    [Pkm.ROCKRUFF]: Pkm.ROCKRUFF,
    [Pkm.LYCANROC_DAY]: Pkm.ROCKRUFF,
    [Pkm.LYCANROC_DUSK]: Pkm.ROCKRUFF,
    [Pkm.LYCANROC_NIGHT]: Pkm.ROCKRUFF,
    [Pkm.DRUDDIGON]: Pkm.DRUDDIGON,
    [Pkm.COSMOG]: Pkm.COSMOG,
    [Pkm.COSMOEM]: Pkm.COSMOG,
    [Pkm.SOLGALEO]: Pkm.COSMOG,
    [Pkm.LUNALA]: Pkm.COSMOG,
    [Pkm.MAGEARNA]: Pkm.MAGEARNA,
    [Pkm.IMPIDIMP]: Pkm.IMPIDIMP,
    [Pkm.MORGREM]: Pkm.IMPIDIMP,
    [Pkm.GRIMMSNARL]: Pkm.IMPIDIMP,
    [Pkm.DEOXYS]: Pkm.DEOXYS,
    [Pkm.DEOXYS_DEFENSE]: Pkm.DEOXYS,
    [Pkm.DEOXYS_ATTACK]: Pkm.DEOXYS,
    [Pkm.DEOXYS_SPEED]: Pkm.DEOXYS,
    [Pkm.CRABRAWLER]: Pkm.CRABRAWLER,
    [Pkm.CRABOMINABLE]: Pkm.CRABRAWLER,
    [Pkm.CUTIEFLY]: Pkm.CUTIEFLY,
    [Pkm.RIBOMBEE]: Pkm.CUTIEFLY,
    [Pkm.ZANGOOSE]: Pkm.ZANGOOSE,
    [Pkm.NICKIT]: Pkm.NICKIT,
    [Pkm.THIEVUL]: Pkm.NICKIT,
    [Pkm.DROWZEE]: Pkm.DROWZEE,
    [Pkm.HYPNO]: Pkm.DROWZEE,
    [Pkm.WATTREL]: Pkm.WATTREL,
    [Pkm.KILOWATTREL]: Pkm.WATTREL,
    [Pkm.STANTLER]: Pkm.STANTLER,
    [Pkm.BURMY_PLANT]: Pkm.BURMY_PLANT,
    [Pkm.BURMY_SANDY]: Pkm.BURMY_SANDY,
    [Pkm.BURMY_TRASH]: Pkm.BURMY_TRASH,
    [Pkm.WORMADAM_PLANT]: Pkm.BURMY_PLANT,
    [Pkm.WORMADAM_SANDY]: Pkm.BURMY_SANDY,
    [Pkm.WORMADAM_TRASH]: Pkm.BURMY_TRASH,
    [Pkm.MOTHIM]: Pkm.BURMY_PLANT,
    [Pkm.PALDEA_WOOPER]: Pkm.PALDEA_WOOPER,
    [Pkm.CLODSIRE]: Pkm.PALDEA_WOOPER,
    [Pkm.FUECOCO]: Pkm.FUECOCO,
    [Pkm.CROCALOR]: Pkm.FUECOCO,
    [Pkm.SKELEDIRGE]: Pkm.FUECOCO,
    [Pkm.TANGELA]: Pkm.TANGELA,
    [Pkm.TANGROWTH]: Pkm.TANGELA,
    [Pkm.PSYDUCK]: Pkm.PSYDUCK,
    [Pkm.GOLDUCK]: Pkm.PSYDUCK,
    [Pkm.PHANPY]: Pkm.PHANPY,
    [Pkm.DONPHAN]: Pkm.PHANPY,
    [Pkm.SPOINK]: Pkm.SPOINK,
    [Pkm.GRUMPIG]: Pkm.SPOINK,
    [Pkm.SINISTEA]: Pkm.SINISTEA,
    [Pkm.POLTEAGEIST]: Pkm.SINISTEA,
    [Pkm.FERROSEED]: Pkm.FERROSEED,
    [Pkm.FERROTHORN]: Pkm.FERROSEED,
    [Pkm.GOLETT]: Pkm.GOLETT,
    [Pkm.GOLURK]: Pkm.GOLETT,
    [Pkm.TRUBBISH]: Pkm.TRUBBISH,
    [Pkm.GARBODOR]: Pkm.TRUBBISH,
    [Pkm.GRUBBIN]: Pkm.GRUBBIN,
    [Pkm.CHARJABUG]: Pkm.GRUBBIN,
    [Pkm.VIKAVOLT]: Pkm.GRUBBIN,
    [Pkm.SHELLOS_WEST_SEA]: Pkm.SHELLOS_WEST_SEA,
    [Pkm.GASTRODON_WEST_SEA]: Pkm.SHELLOS_WEST_SEA,
    [Pkm.SHELLOS_EAST_SEA]: Pkm.SHELLOS_EAST_SEA,
    [Pkm.GASTRODON_EAST_SEA]: Pkm.SHELLOS_EAST_SEA,
    [Pkm.MUNNA]: Pkm.MUNNA,
    [Pkm.MUSHARNA]: Pkm.MUNNA,
    [Pkm.RUFFLET]: Pkm.RUFFLET,
    [Pkm.BRAVIARY]: Pkm.RUFFLET,
    [Pkm.HEATMOR]: Pkm.HEATMOR,
    [Pkm.KLEFKI]: Pkm.KLEFKI,
    [Pkm.HAWLUCHA]: Pkm.HAWLUCHA,
    [Pkm.MIENFOO]: Pkm.MIENFOO,
    [Pkm.MIENSHAO]: Pkm.MIENFOO,
    [Pkm.STONJOURNER]: Pkm.STONJOURNER,
    [Pkm.HISUI_SNEASEL]: Pkm.HISUI_SNEASEL,
    [Pkm.SNEASLER]: Pkm.HISUI_SNEASEL,
    [Pkm.PYUKUMUKU]: Pkm.PYUKUMUKU,
    [Pkm.POIPOLE]: Pkm.POIPOLE,
    [Pkm.NAGANADEL]: Pkm.POIPOLE,
    [Pkm.CRAMORANT]: Pkm.CRAMORANT,
    [Pkm.ARROKUDA]: Pkm.ARROKUDA,
    [Pkm.WISHIWASHI]: Pkm.WISHIWASHI,
    [Pkm.WISHIWASHI_SCHOOL]: Pkm.WISHIWASHI,
    [Pkm.PAWMI]: Pkm.PAWMI,
    [Pkm.PAWMO]: Pkm.PAWMI,
    [Pkm.PAWMOT]: Pkm.PAWMI,
    [Pkm.GOLDEEN]: Pkm.GOLDEEN,
    [Pkm.SEAKING]: Pkm.GOLDEEN,
    [Pkm.LUVDISC]: Pkm.LUVDISC,
    [Pkm.AUDINO]: Pkm.AUDINO,
    [Pkm.PETILIL]: Pkm.PETILIL,
    [Pkm.LILIGANT]: Pkm.PETILIL,
    [Pkm.MANTYKE]: Pkm.MANTYKE,
    [Pkm.MANTINE]: Pkm.MANTYKE,
    [Pkm.REMORAID]: Pkm.REMORAID,
    [Pkm.OCTILLERY]: Pkm.REMORAID,
    [Pkm.SIGILYPH]: Pkm.SIGILYPH,
    [Pkm.FRIGIBAX]: Pkm.FRIGIBAX,
    [Pkm.ARCTIBAX]: Pkm.FRIGIBAX,
    [Pkm.BAXCALIBUR]: Pkm.FRIGIBAX,
    [Pkm.BINACLE]: Pkm.BINACLE,
    [Pkm.BARBARACLE]: Pkm.BINACLE,
    [Pkm.SKARMORY]: Pkm.SKARMORY,
    [Pkm.DURANT]: Pkm.DURANT,
    [Pkm.OGERPON_TEAL]: Pkm.OGERPON_TEAL,
    [Pkm.OGERPON_TEAL_MASK]: Pkm.OGERPON_TEAL,
    [Pkm.OGERPON_WELLSPRING]: Pkm.OGERPON_TEAL,
    [Pkm.OGERPON_WELLSPRING_MASK]: Pkm.OGERPON_TEAL,
    [Pkm.OGERPON_HEARTHFLAME]: Pkm.OGERPON_TEAL,
    [Pkm.OGERPON_HEARTHFLAME_MASK]: Pkm.OGERPON_TEAL,
    [Pkm.OGERPON_CORNERSTONE]: Pkm.OGERPON_TEAL,
    [Pkm.OGERPON_CORNERSTONE_MASK]: Pkm.OGERPON_TEAL,
    [Pkm.IRON_HANDS]: Pkm.IRON_HANDS,
    [Pkm.ROOKIDEE]: Pkm.ROOKIDEE,
    [Pkm.CORVISQUIRE]: Pkm.ROOKIDEE,
    [Pkm.CORVIKNIGHT]: Pkm.ROOKIDEE,
    [Pkm.MURKROW]: Pkm.MURKROW,
    [Pkm.HONCHKROW]: Pkm.MURKROW,
    [Pkm.SANDYGAST]: Pkm.SANDYGAST,
    [Pkm.PALOSSAND]: Pkm.SANDYGAST,
    [Pkm.TURTONATOR]: Pkm.TURTONATOR,
    [Pkm.SKORUPI]: Pkm.SKORUPI,
    [Pkm.DRAPION]: Pkm.SKORUPI,
    [Pkm.DARUMAKA]: Pkm.DARUMAKA,
    [Pkm.DARMANITAN]: Pkm.DARUMAKA,
    [Pkm.DARMANITAN_ZEN]: Pkm.DARUMAKA,
    [Pkm.KRABBY]: Pkm.KRABBY,
    [Pkm.KINGLER]: Pkm.KRABBY,
    [Pkm.SIZZLIPEDE]: Pkm.SIZZLIPEDE,
    [Pkm.CENTISKORCH]: Pkm.SIZZLIPEDE,
    [Pkm.ZYGARDE_10]: Pkm.ZYGARDE_10,
    [Pkm.ZYGARDE_50]: Pkm.ZYGARDE_50,
    [Pkm.ZYGARDE_100]: Pkm.ZYGARDE_100,
    [Pkm.STUFFUL]: Pkm.STUFFUL,
    [Pkm.BEWEAR]: Pkm.STUFFUL,
    [Pkm.GLIMMET]: Pkm.GLIMMET,
    [Pkm.GLIMMORA]: Pkm.GLIMMET,
    [Pkm.FLETCHLING]: Pkm.FLETCHLING,
    [Pkm.FLETCHINDER]: Pkm.FLETCHLING,
    [Pkm.TALONFLAME]: Pkm.FLETCHLING,
    [Pkm.VULLABY]: Pkm.VULLABY,
    [Pkm.MANDIBUZZ]: Pkm.VULLABY,
    [Pkm.INKAY]: Pkm.INKAY,
    [Pkm.MALAMAR]: Pkm.INKAY,
    [Pkm.TIMBURR]: Pkm.TIMBURR,
    [Pkm.GURDURR]: Pkm.TIMBURR,
    [Pkm.CONKELDURR]: Pkm.TIMBURR,
    [Pkm.PILLAR_WOOD]: Pkm.PILLAR_WOOD,
    [Pkm.PILLAR_IRON]: Pkm.PILLAR_IRON,
    [Pkm.PILLAR_CONCRETE]: Pkm.PILLAR_CONCRETE
};
exports.PkmRegionalVariants = {
    [Pkm.RATTATA]: [Pkm.ALOLAN_RATTATA],
    [Pkm.GROWLITHE]: [Pkm.HISUI_GROWLITHE],
    [Pkm.VULPIX]: [Pkm.ALOLAN_VULPIX],
    [Pkm.GEODUDE]: [Pkm.ALOLAN_GEODUDE],
    [Pkm.DIGLETT]: [Pkm.ALOLAN_DIGLETT],
    [Pkm.ZORUA]: [Pkm.HISUI_ZORUA],
    [Pkm.GRIMER]: [Pkm.ALOLAN_GRIMER],
    [Pkm.NIDORANF]: [Pkm.NIDORANM],
    [Pkm.SNEASEL]: [Pkm.HISUI_SNEASEL],
    [Pkm.MEOWTH]: [Pkm.ALOLAN_MEOWTH],
    [Pkm.PONYTA]: [Pkm.GALARIAN_PONYTA],
    [Pkm.VOLTORB]: [Pkm.HISUI_VOLTORB]
};
var PkmDuo;
(function (PkmDuo) {
    PkmDuo["LATIOS_LATIAS"] = "LATIOS_LATIAS";
    PkmDuo["PLUSLE_MINUN"] = "PLUSLE_MINUN";
    PkmDuo["ILLUMISE_VOLBEAT"] = "ILLUMISE_VOLBEAT";
    PkmDuo["NINJASK_SHEDINJA"] = "NINJASK_SHEDINJA";
})(PkmDuo || (exports.PkmDuo = PkmDuo = {}));
exports.PkmDuos = {
    [PkmDuo.LATIOS_LATIAS]: [Pkm.LATIOS, Pkm.LATIAS],
    [PkmDuo.PLUSLE_MINUN]: [Pkm.PLUSLE, Pkm.MINUN],
    [PkmDuo.ILLUMISE_VOLBEAT]: [Pkm.ILLUMISE, Pkm.VOLBEAT],
    [PkmDuo.NINJASK_SHEDINJA]: [Pkm.NINJASK, Pkm.SHEDINJA]
};
exports.Unowns = [
    Pkm.UNOWN_A,
    Pkm.UNOWN_B,
    Pkm.UNOWN_C,
    Pkm.UNOWN_D,
    Pkm.UNOWN_E,
    Pkm.UNOWN_F,
    Pkm.UNOWN_G,
    Pkm.UNOWN_H,
    Pkm.UNOWN_I,
    Pkm.UNOWN_J,
    Pkm.UNOWN_K,
    Pkm.UNOWN_L,
    Pkm.UNOWN_M,
    Pkm.UNOWN_N,
    Pkm.UNOWN_O,
    Pkm.UNOWN_P,
    Pkm.UNOWN_Q,
    Pkm.UNOWN_R,
    Pkm.UNOWN_S,
    Pkm.UNOWN_T,
    Pkm.UNOWN_U,
    Pkm.UNOWN_V,
    Pkm.UNOWN_W,
    Pkm.UNOWN_X,
    Pkm.UNOWN_Y,
    Pkm.UNOWN_Z,
    Pkm.UNOWN_QUESTION,
    Pkm.UNOWN_EXCLAMATION
];
exports.UnownsStage1 = [
    Pkm.UNOWN_A,
    Pkm.UNOWN_C,
    Pkm.UNOWN_D,
    Pkm.UNOWN_E,
    Pkm.UNOWN_F,
    Pkm.UNOWN_G,
    Pkm.UNOWN_I,
    Pkm.UNOWN_O,
    Pkm.UNOWN_V,
    Pkm.UNOWN_W
];
exports.UnownsStage2 = [
    Pkm.UNOWN_A,
    Pkm.UNOWN_B,
    Pkm.UNOWN_C,
    Pkm.UNOWN_D,
    Pkm.UNOWN_G,
    Pkm.UNOWN_H,
    Pkm.UNOWN_I,
    Pkm.UNOWN_J,
    Pkm.UNOWN_K,
    Pkm.UNOWN_L,
    Pkm.UNOWN_M,
    Pkm.UNOWN_N,
    Pkm.UNOWN_O,
    Pkm.UNOWN_P,
    Pkm.UNOWN_Q,
    Pkm.UNOWN_R,
    Pkm.UNOWN_S,
    Pkm.UNOWN_T,
    Pkm.UNOWN_U,
    Pkm.UNOWN_V,
    Pkm.UNOWN_W,
    Pkm.UNOWN_X,
    Pkm.UNOWN_Y,
    Pkm.UNOWN_Z,
    Pkm.UNOWN_QUESTION
];
exports.UnownsStage3 = [
    Pkm.UNOWN_B,
    Pkm.UNOWN_G,
    Pkm.UNOWN_H,
    Pkm.UNOWN_J,
    Pkm.UNOWN_K,
    Pkm.UNOWN_L,
    Pkm.UNOWN_M,
    Pkm.UNOWN_N,
    Pkm.UNOWN_O,
    Pkm.UNOWN_P,
    Pkm.UNOWN_R,
    Pkm.UNOWN_S,
    Pkm.UNOWN_T,
    Pkm.UNOWN_U,
    Pkm.UNOWN_V,
    Pkm.UNOWN_W,
    Pkm.UNOWN_X,
    Pkm.UNOWN_Y,
    Pkm.UNOWN_Z,
    Pkm.UNOWN_QUESTION,
    Pkm.UNOWN_EXCLAMATION
];
function getUnownsPoolPerStage(stageLevel) {
    if (stageLevel < 10)
        return exports.UnownsStage1;
    else if (stageLevel < 20)
        return exports.UnownsStage2;
    else
        return exports.UnownsStage3;
}
exports.AnimationConfig = {
    [Pkm.DEFAULT]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Attack
    },
    [Pkm.EGG]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.LostBalance,
        emote: Animation_1.AnimationType.LostBalance
    },
    [Pkm.DITTO]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Hop
    },
    [Pkm.BULBASAUR]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Rotate,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.IVYSAUR]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Rotate,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.VENUSAUR]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Rotate,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.CHARMANDER]: {
        attack: Animation_1.AnimationType.Kick,
        ability: Animation_1.AnimationType.DeepBreath,
        emote: Animation_1.AnimationType.Pose
    },
    [Pkm.CHARMELEON]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.DeepBreath,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.CHARIZARD]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.SQUIRTLE]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.DeepBreath,
        emote: Animation_1.AnimationType.Pose
    },
    [Pkm.WARTORTLE]: {
        attack: Animation_1.AnimationType.Ricochet,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.BLASTOISE]: {
        attack: Animation_1.AnimationType.Ricochet,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.GEODUDE]: {
        attack: Animation_1.AnimationType.Punch,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.GRAVELER]: {
        attack: Animation_1.AnimationType.Slam,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.GOLEM]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.AZURILL]: {
        attack: Animation_1.AnimationType.Swing,
        ability: Animation_1.AnimationType.Special0,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.MARILL]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Withdraw,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.AZUMARILL]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Twirl,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.ZUBAT]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Charge
    },
    [Pkm.GOLBAT]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Charge
    },
    [Pkm.CROBAT]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.MAREEP]: {
        attack: Animation_1.AnimationType.Emit,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.FLAFFY]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Pose
    },
    [Pkm.AMPHAROS]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.CLEFFA]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Rotate,
        emote: Animation_1.AnimationType.Dance
    },
    [Pkm.CLEFAIRY]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Rotate,
        emote: Animation_1.AnimationType.Dance
    },
    [Pkm.CLEFABLE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Rotate,
        emote: Animation_1.AnimationType.Dance
    },
    [Pkm.IGGLYBUFF]: {
        attack: Animation_1.AnimationType.Special1,
        ability: Animation_1.AnimationType.Special6,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.WIGGLYTUFF]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Sleep,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.JIGGLYPUFF]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.CATERPIE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.METAPOD]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.BUTTERFREE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.WEEDLE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Strike,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.KAKUNA]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.BEEDRILL]: {
        attack: Animation_1.AnimationType.Jab,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.PIDGEY]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.FlapAround,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.PIDGEOTTO]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.FlapAround,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.PIDGEOT]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.FlapAround,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.HOPPIP]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Twirl,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.SKIPLOOM]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Twirl,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.JUMPLUFF]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.SEEDOT]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.NUZLEAF]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.SHIFTRY]: {
        attack: Animation_1.AnimationType.MultiStrike,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.STARLY]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.STARAVIA]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.STARAPTOR]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.CHIKORITA]: {
        attack: Animation_1.AnimationType.Slam,
        ability: Animation_1.AnimationType.DeepBreath,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.BAYLEEF]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.MEGANIUM]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shake,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.CYNDAQUIL]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.QUILAVA]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Strike,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.TYPHLOSION]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.TOTODILE]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.HitGround,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.CROCONAW]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.FERALIGATR]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.TREECKO]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Pose,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.GROVYLE]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Special17,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.SCEPTILE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Strike,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.TORCHIC]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Hop,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.COMBUSKEN]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.BLAZIKEN]: {
        attack: Animation_1.AnimationType.Slam,
        ability: Animation_1.AnimationType.Kick,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.MUDKIP]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Twirl,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.MARSHTOMP]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Swing,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.SWAMPERT]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Swing,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.TURTWIG]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Hop,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.GROTLE]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Hop,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.TORTERRA]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Hop,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.CHIMCHAR]: {
        attack: Animation_1.AnimationType.MultiStrike,
        ability: Animation_1.AnimationType.DeepBreath,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.MONFERNO]: {
        attack: Animation_1.AnimationType.MultiStrike,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.INFERNAPE]: {
        attack: Animation_1.AnimationType.MultiStrike,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.PIPLUP]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Strike,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.PRINPLUP]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.EMPOLEON]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.NIDORANF]: {
        attack: Animation_1.AnimationType.MultiScratch,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.NIDORINA]: {
        attack: Animation_1.AnimationType.MultiScratch,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.NIDOQUEEN]: {
        attack: Animation_1.AnimationType.MultiScratch,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.NIDORANM]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Emit,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.NIDORINO]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Emit,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.NIDOKING]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.RearUp,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.PICHU]: {
        attack: Animation_1.AnimationType.Appeal,
        ability: Animation_1.AnimationType.Shock,
        emote: Animation_1.AnimationType.Pose
    },
    [Pkm.PIKACHU]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shock,
        emote: Animation_1.AnimationType.Pose
    },
    [Pkm.RAICHU]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shock,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.MACHOP]: {
        attack: Animation_1.AnimationType.Kick,
        ability: Animation_1.AnimationType.Strike,
        emote: Animation_1.AnimationType.Yawn
    },
    [Pkm.MACHOKE]: {
        attack: Animation_1.AnimationType.Kick,
        ability: Animation_1.AnimationType.Punch,
        emote: Animation_1.AnimationType.Charge
    },
    [Pkm.MACHAMP]: {
        attack: Animation_1.AnimationType.Kick,
        ability: Animation_1.AnimationType.Punch,
        emote: Animation_1.AnimationType.Charge
    },
    [Pkm.HORSEA]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.SEADRA]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.KINGDRA]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.TRAPINCH]: {
        attack: Animation_1.AnimationType.Bite,
        ability: Animation_1.AnimationType.Swing,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.VIBRAVA]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Swing,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.FLYGON]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Swing,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.SPHEAL]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.SEALEO]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.WALREIN]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.ARON]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Hop,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.LAIRON]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Hop,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.AGGRON]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.DigOut,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.MAGNEMITE]: {
        attack: Animation_1.AnimationType.SpAttack,
        ability: Animation_1.AnimationType.Double,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.MAGNETON]: {
        attack: Animation_1.AnimationType.SpAttack,
        ability: Animation_1.AnimationType.Double,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.MAGNEZONE]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.SpAttack,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.RHYHORN]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Stomp,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.RHYDON]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Stomp,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.RHYPERIOR]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Rumble,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.TOGEPI]: {
        attack: Animation_1.AnimationType.Appeal,
        ability: Animation_1.AnimationType.Dance,
        emote: Animation_1.AnimationType.Dance
    },
    [Pkm.TOGETIC]: {
        attack: Animation_1.AnimationType.Hover,
        ability: Animation_1.AnimationType.DeepBreath,
        emote: Animation_1.AnimationType.Pose
    },
    [Pkm.TOGEKISS]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Hover,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.DUSKULL]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.SpAttack,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.DUSCLOPS]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.SpAttack,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.DUSKNOIR]: {
        attack: Animation_1.AnimationType.Emit,
        ability: Animation_1.AnimationType.Special3,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.LOTAD]: {
        attack: Animation_1.AnimationType.Shake,
        ability: Animation_1.AnimationType.Double,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.LOMBRE]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Double,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.LUDICOLO]: {
        attack: Animation_1.AnimationType.Special0,
        ability: Animation_1.AnimationType.Double,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.SHINX]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Pose
    },
    [Pkm.LUXIO]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Pose
    },
    [Pkm.LUXRAY]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shake
    },
    [Pkm.POLIWAG]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Appeal
    },
    [Pkm.POLIWHIRL]: {
        attack: Animation_1.AnimationType.RearUp,
        ability: Animation_1.AnimationType.Rotate,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.POLITOED]: {
        attack: Animation_1.AnimationType.RearUp,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.ABRA]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.KADABRA]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.SpAttack
    },
    [Pkm.ALAKAZAM]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Special1
    },
    [Pkm.GASTLY]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Lick,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.HAUNTER]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Lick
    },
    [Pkm.GENGAR]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Special2,
        emote: Animation_1.AnimationType.Pose
    },
    [Pkm.DRATINI]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.RearUp,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.DRAGONAIR]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.DRAGONITE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Emit,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.LARVITAR]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.PUPITAR]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.TYRANITAR]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.SLAKOTH]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Appeal,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.VIGOROTH]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Dance,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.SLAKING]: {
        attack: Animation_1.AnimationType.Punch,
        ability: Animation_1.AnimationType.Dance,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.RALTS]: {
        attack: Animation_1.AnimationType.Appeal,
        ability: Animation_1.AnimationType.Pull,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.KIRLIA]: {
        attack: Animation_1.AnimationType.Twirl,
        ability: Animation_1.AnimationType.Pose,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.GARDEVOIR]: {
        attack: Animation_1.AnimationType.Appeal,
        ability: Animation_1.AnimationType.Special2,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.BAGON]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Bite,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.SHELGON]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.SALAMENCE]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.BELDUM]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Swing,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.METANG]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.MultiScratch,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.METAGROSS]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Ricochet,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.GIBLE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.GABITE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.GARCHOMP]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.RearUp,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.ELEKID]: {
        attack: Animation_1.AnimationType.Punch,
        ability: Animation_1.AnimationType.Shock,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.ELECTABUZZ]: {
        attack: Animation_1.AnimationType.Punch,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.ELECTIVIRE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Emit,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.MAGBY]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.DeepBreath,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.MAGMAR]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.MAGMORTAR]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.MUNCHLAX]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.SNORLAX]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Stomp,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.GROWLITHE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Rumble
    },
    [Pkm.ARCANINE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Rumble
    },
    [Pkm.HISUI_GROWLITHE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.HISUI_ARCANINE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.QuickStrike,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.ONIX]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.STEELIX]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.MEGA_STEELIX]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        shinyUnavailable: true
    },
    [Pkm.SCYTHER]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Slice,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.SCIZOR]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.MultiScratch,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.KLEAVOR]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.RIOLU]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.RearUp,
        emote: Animation_1.AnimationType.Pose
    },
    [Pkm.LUCARIO]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.RearUp,
        emote: Animation_1.AnimationType.Pose
    },
    [Pkm.MAGIKARP]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Hop,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.RATTATA]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.ALOLAN_RATTATA]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.TailWhip,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.RATICATE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.ALOLAN_RATICATE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.TailWhip,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.SPEAROW]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.FEAROW]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.GYARADOS]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.RearUp
    },
    [Pkm.LUGIA]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Hover,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.SHADOW_LUGIA]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Dance,
        emote: Animation_1.AnimationType.Charge,
        shinyUnavailable: true
    },
    [Pkm.GIRATINA]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.SpAttack,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.ZAPDOS]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Emit,
        emote: Animation_1.AnimationType.Emit
    },
    [Pkm.MOLTRES]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Pose,
        emote: Animation_1.AnimationType.Pose
    },
    [Pkm.ARTICUNO]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.RearUp,
        emote: Animation_1.AnimationType.Pose
    },
    [Pkm.GALARIAN_ZAPDOS]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.SpAttack,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.GALARIAN_MOLTRES]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Charge
    },
    [Pkm.GALARIAN_ARTICUNO]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.SpAttack,
        emote: Animation_1.AnimationType.RearUp,
        shinyUnavailable: true
    },
    [Pkm.DIALGA]: {
        attack: Animation_1.AnimationType.RearUp,
        ability: Animation_1.AnimationType.Special0,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.PALKIA]: {
        attack: Animation_1.AnimationType.Special0,
        ability: Animation_1.AnimationType.RearUp,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.SUICUNE]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.SpAttack
    },
    [Pkm.RAIKOU]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.QuickStrike,
        emote: Animation_1.AnimationType.Roar
    },
    [Pkm.ENTEI]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.SpAttack
    },
    [Pkm.REGICE]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.RearUp,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.REGIROCK]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.RearUp
    },
    [Pkm.REGISTEEL]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.RearUp,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.KYOGRE]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Swell,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.GROUDON]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Emit,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.RAYQUAZA]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.RearUp,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.REGIGIGAS]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Special0,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.EEVEE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.DeepBreath,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.VAPOREON]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.RearUp,
        emote: Animation_1.AnimationType.Shoot,
        shinyUnavailable: true
    },
    [Pkm.JOLTEON]: {
        attack: Animation_1.AnimationType.Shock,
        ability: Animation_1.AnimationType.DeepBreath,
        emote: Animation_1.AnimationType.Pose
    },
    [Pkm.FLAREON]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.ESPEON]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.UMBREON]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.DeepBreath,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.LEAFEON]: {
        attack: Animation_1.AnimationType.QuickStrike,
        ability: Animation_1.AnimationType.DeepBreath,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.SYLVEON]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Rotate,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.MEDITITE]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.SpAttack,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.MEDICHAM]: {
        attack: Animation_1.AnimationType.Charge,
        ability: Animation_1.AnimationType.SpAttack,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.NUMEL]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.RearUp,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.CAMERUPT]: {
        attack: Animation_1.AnimationType.Rotate,
        ability: Animation_1.AnimationType.RearUp,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.MEGA_CAMERUPT]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.DARKRAI]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Sink,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.LITWICK]: {
        attack: Animation_1.AnimationType.Sink,
        ability: Animation_1.AnimationType.Pose,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.LAMPENT]: {
        attack: Animation_1.AnimationType.Emit,
        ability: Animation_1.AnimationType.Rotate,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.CHANDELURE]: {
        attack: Animation_1.AnimationType.Emit,
        ability: Animation_1.AnimationType.Rotate,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.SLOWPOKE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.SLOWBRO]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shake
    },
    [Pkm.SLOWKING]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.RearUp
    },
    [Pkm.BELLSPROUT]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Rotate,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.WEEPINBELL]: {
        attack: Animation_1.AnimationType.MultiStrike,
        ability: Animation_1.AnimationType.Rotate,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.VICTREEBEL]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Swing,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.SWINUB]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Shake,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.PILOSWINE]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Hop,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.MAMOSWINE]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Special0,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.SNORUNT]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Strike,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.GLALIE]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Bite,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.FROSLASS]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.SNOVER]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.RearUp,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.ABOMASNOW]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.RearUp,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.MEGA_ABOMASNOW]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.VANILLITE]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.DeepBreath,
        emote: Animation_1.AnimationType.Pose
    },
    [Pkm.VANILLISH]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Rotate
    },
    [Pkm.VANILLUXE]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Rotate
    },
    [Pkm.GLACEON]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Pose,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.LARVESTA]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.VOLCARONA]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.LANDORUS]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.THUNDURUS]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.TORNADUS]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.ENAMORUS]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.KELDEO]: {
        attack: Animation_1.AnimationType.Swing,
        ability: Animation_1.AnimationType.RearUp,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.TERRAKION]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.RearUp
    },
    [Pkm.VIRIZION]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.RearUp
    },
    [Pkm.COBALION]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.MANAPHY]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.RearUp,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.ROTOM]: {
        attack: Animation_1.AnimationType.Emit,
        ability: Animation_1.AnimationType.Double,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.ROTOM_DRONE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        shinyUnavailable: true
    },
    [Pkm.SPIRITOMB]: {
        attack: Animation_1.AnimationType.Withdraw,
        ability: Animation_1.AnimationType.Special1,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.ABSOL]: {
        attack: Animation_1.AnimationType.QuickStrike,
        ability: Animation_1.AnimationType.SpAttack,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.LAPRAS]: {
        attack: Animation_1.AnimationType.Swing,
        ability: Animation_1.AnimationType.RearUp,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.LATIAS]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.RearUp
    },
    [Pkm.LATIOS]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.RearUp
    },
    [Pkm.MESPRIT]: {
        attack: Animation_1.AnimationType.Hover,
        ability: Animation_1.AnimationType.DeepBreath,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.AZELF]: {
        attack: Animation_1.AnimationType.Hover,
        ability: Animation_1.AnimationType.Special1,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.UXIE]: {
        attack: Animation_1.AnimationType.Hover,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.MEWTWO]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Punch,
        emote: Animation_1.AnimationType.Pose
    },
    [Pkm.KYUREM]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Charge
    },
    [Pkm.RESHIRAM]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.ZEKROM]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.CELEBI]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.DeepBreath,
        emote: Animation_1.AnimationType.Special0
    },
    [Pkm.VICTINI]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.JIRACHI]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Pose,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.ARCEUS]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Pose,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.SHAYMIN]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Emit,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.CRESSELIA]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Twirl,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.HEATRAN]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Emit,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.HO_OH]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Jab,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.AERODACTYL]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Strike,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.PRIMAL_KYOGRE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Swell,
        emote: Animation_1.AnimationType.Shoot,
        shinyUnavailable: true
    },
    [Pkm.PRIMAL_GROUDON]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.MEOWTH]: {
        attack: Animation_1.AnimationType.MultiStrike,
        ability: Animation_1.AnimationType.Pose,
        emote: Animation_1.AnimationType.DeepBreath
    },
    [Pkm.PERSIAN]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.ALOLAN_MEOWTH]: {
        attack: Animation_1.AnimationType.MultiStrike,
        ability: Animation_1.AnimationType.Pose,
        emote: Animation_1.AnimationType.DeepBreath
    },
    [Pkm.ALOLAN_PERSIAN]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.DEINO]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.ZWEILOUS]: {
        attack: Animation_1.AnimationType.Jab,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.HYDREIGON]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.SANDILE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.KROKOROK]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.RearUp
    },
    [Pkm.KROOKODILE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.SOLOSIS]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.DUOSION]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.RearUp,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.REUNICLUS]: {
        attack: Animation_1.AnimationType.MultiStrike,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.MEGA_RAYQUAZA]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.SWABLU]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Hop,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.ODDISH]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Twirl,
        emote: Animation_1.AnimationType.Twirl
    },
    [Pkm.GLOOM]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Twirl,
        emote: Animation_1.AnimationType.Twirl
    },
    [Pkm.VILEPLUME]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Twirl,
        emote: Animation_1.AnimationType.Twirl
    },
    [Pkm.BELLOSSOM]: {
        attack: Animation_1.AnimationType.Special0,
        ability: Animation_1.AnimationType.Twirl,
        emote: Animation_1.AnimationType.Pose
    },
    [Pkm.AMAURA]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.DeepBreath,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.AURORUS]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.RearUp,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.ANORITH]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Scratch,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.ARMALDO]: {
        attack: Animation_1.AnimationType.Scratch,
        ability: Animation_1.AnimationType.Special0,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.ARCHEN]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.FlapAround,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.ARCHEOPS]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Strike,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.SHIELDON]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.BASTIODON]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.LILEEP]: {
        attack: Animation_1.AnimationType.SpAttack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.CRADILY]: {
        attack: Animation_1.AnimationType.SpAttack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.CRANIDOS]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.RAMPARDOS]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.KABUTO]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.KABUTOPS]: {
        attack: Animation_1.AnimationType.MultiStrike,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.OMANYTE]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Withdraw,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.OMASTAR]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Withdraw,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.TYRUNT]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Bite,
        emote: Animation_1.AnimationType.RearUp,
        shinyUnavailable: true
    },
    [Pkm.TYRANTRUM]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.BUDEW]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Swing,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.ROSELIA]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Swing,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.ROSERADE]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Swing,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.BUNEARY]: {
        attack: Animation_1.AnimationType.QuickStrike,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.LOPUNNY]: {
        attack: Animation_1.AnimationType.QuickStrike,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.MEGA_LOPUNNY]: {
        attack: Animation_1.AnimationType.QuickStrike,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.AXEW]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Swing,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.FRAXURE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Swing,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.HAXORUS]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Swing,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.VENIPEDE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.WHIRLIPEDE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.SCOLIPEDE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.PORYGON]: {
        attack: Animation_1.AnimationType.RearUp,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.PORYGON_2]: {
        attack: Animation_1.AnimationType.RearUp,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.PORYGON_Z]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Swing,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.ELECTRIKE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shock,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.MANECTRIC]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shock,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.MEGA_MANECTRIC]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shock,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.SHUPPET]: {
        attack: Animation_1.AnimationType.SpAttack,
        ability: Animation_1.AnimationType.Double,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.BANETTE]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Double,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.MEGA_BANETTE]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Double,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.HONEDGE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Head,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.DOUBLADE]: {
        attack: Animation_1.AnimationType.Slice,
        ability: Animation_1.AnimationType.SpAttack,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.AEGISLASH]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Special0,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.AEGISLASH_BLADE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Special0,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.CUBONE]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.SpAttack,
        emote: Animation_1.AnimationType.Pose
    },
    [Pkm.MAROWAK]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge
    },
    [Pkm.ALOLAN_MAROWAK]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Punch,
        emote: Animation_1.AnimationType.Charge
    },
    [Pkm.WHISMUR]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Appeal,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.LOUDRED]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Appeal,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.EXPLOUD]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.TYMPOLE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.PALPITOAD]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        shinyUnavailable: true
    },
    [Pkm.SEISMITOAD]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.SEWADDLE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.SWADLOON]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.LEAVANNY]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.FLABEBE]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Swell,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.FLOETTE]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Twirl,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.FLORGES]: {
        attack: Animation_1.AnimationType.Appeal,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.JANGMO_O]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.HAKAMO_O]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.KOMMO_O]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.MELOETTA]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Twirl,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.PIROUETTE_MELOETTA]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Swing,
        emote: Animation_1.AnimationType.Twirl
    },
    [Pkm.ALTARIA]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Hop,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.MEGA_ALTARIA]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.CASTFORM]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Rotate,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.CASTFORM_SUN]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.CASTFORM_RAIN]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Hop,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.CASTFORM_HAIL]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Twirl,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.CORPHISH]: {
        attack: Animation_1.AnimationType.Bite,
        ability: Animation_1.AnimationType.Hop,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.CRAWDAUNT]: {
        attack: Animation_1.AnimationType.Bite,
        ability: Animation_1.AnimationType.Hop,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.JOLTIK]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Hop,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.GALVANTULA]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Hop,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.GENESECT]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.RELICANTH]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.HATENNA]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.HATTREM]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.HATTERENE]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.FENNEKIN]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.BRAIXEN]: {
        attack: Animation_1.AnimationType.Appeal,
        ability: Animation_1.AnimationType.Hop,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.DELPHOX]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.MAKUHITA]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.HARIYAMA]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.REGIELEKI]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Attack
    },
    [Pkm.REGIDRAGO]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.GUZZLORD]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.ETERNATUS]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Charge
    },
    [Pkm.PONYTA]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Walk,
        emote: Animation_1.AnimationType.RearUp
    },
    [Pkm.RAPIDASH]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Walk,
        emote: Animation_1.AnimationType.RearUp
    },
    [Pkm.GALARIAN_PONYTA]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Walk,
        emote: Animation_1.AnimationType.RearUp
    },
    [Pkm.GALARIAN_RAPIDASH]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Walk,
        emote: Animation_1.AnimationType.RearUp
    },
    [Pkm.NINCADA]: {
        attack: Animation_1.AnimationType.MultiScratch,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.NINJASK]: {
        attack: Animation_1.AnimationType.MultiScratch,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.SHEDINJA]: {
        attack: Animation_1.AnimationType.Scratch,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.NOIBAT]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Hover,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.NOIVERN]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Hover,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.PUMPKABOO]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.GOURGEIST]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Hover,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.CACNEA]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.SpAttack,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.CACTURNE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.SpAttack,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.TAUROS]: {
        attack: Animation_1.AnimationType.Stomp,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Charge
    },
    [Pkm.HAPPINY]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shake,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.CHANSEY]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.SpAttack,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.BLISSEY]: {
        attack: Animation_1.AnimationType.MultiStrike,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.TAPU_KOKO]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Emit,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.TAPU_LELE]: {
        attack: Animation_1.AnimationType.Hop,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Pose
    },
    [Pkm.STAKATAKA]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Sleep,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.BLACEPHALON]: {
        attack: Animation_1.AnimationType.Hop,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.HOUNDOUR]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.RearUp,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.HOUNDOOM]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.RearUp,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.MEGA_HOUNDOOM]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shake,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.CLAMPERL]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Hop,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.HUNTAIL]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.GOREBYSS]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.SMOOCHUM]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Twirl
    },
    [Pkm.JYNX]: {
        attack: Animation_1.AnimationType.Slap,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.SALANDIT]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Hop,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.SALAZZLE]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Hop,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.VENONAT]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.VENOMOTH]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.FlapAround
    },
    [Pkm.VOLTORB]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Hurt,
        emote: Animation_1.AnimationType.Pose
    },
    [Pkm.ELECTRODE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Hurt,
        emote: Animation_1.AnimationType.Twirl
    },
    [Pkm.HISUI_VOLTORB]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Pose,
        emote: Animation_1.AnimationType.Twirl
    },
    [Pkm.HISUI_ELECTRODE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Hurt,
        emote: Animation_1.AnimationType.Twirl,
        shinyUnavailable: true
    },
    [Pkm.SLUGMA]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.MAGCARGO]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Hurt,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.SNEASEL]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.DeepBreath,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.WEAVILE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.CROAGUNK]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Strike,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.TOXICROAK]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Strike,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.CHINCHOU]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Hop,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.LANTURN]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Hop,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.POOCHYENA]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.MIGHTYENA]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.BRONZOR]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.SpAttack,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.BRONZONG]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Emit,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.DRIFLOON]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Swell,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.DRIFBLIM]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Idle,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.SHROOMISH]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.BRELOOM]: {
        attack: Animation_1.AnimationType.MultiStrike,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.TENTACOOL]: {
        attack: Animation_1.AnimationType.Slam,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Twirl
    },
    [Pkm.TENTACRUEL]: {
        attack: Animation_1.AnimationType.Slam,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.SNUBULL]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.GRANBULL]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.SEVIPER]: {
        attack: Animation_1.AnimationType.Bite,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.VULPIX]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.RearUp,
        emote: Animation_1.AnimationType.Pose
    },
    [Pkm.NINETALES]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.RearUp,
        emote: Animation_1.AnimationType.DeepBreath
    },
    [Pkm.ALOLAN_VULPIX]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.RearUp,
        emote: Animation_1.AnimationType.Pose
    },
    [Pkm.ALOLAN_NINETALES]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.RearUp,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.BUIZEL]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.FLOATZEL]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.MAWILE]: {
        attack: Animation_1.AnimationType.Bite,
        ability: Animation_1.AnimationType.Swing,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.KECLEON]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.CARBINK]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Hop,
        emote: Animation_1.AnimationType.Rotate
    },
    [Pkm.DIANCIE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Hurt,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.CHATOT]: {
        attack: Animation_1.AnimationType.Special0,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.GOOMY]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.SLIGOO]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.GOODRA]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.HISUI_SLIGGOO]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.HISUI_GOODRA]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.MEW]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.BOUNSWEET]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Hop,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.STEENEE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Hop,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.TSAREENA]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Kick,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.VOLCANION]: {
        attack: Animation_1.AnimationType.Charge,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.APPLIN]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Hurt,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.APPLETUN]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Hurt,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.OSHAWOTT]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Swing,
        emote: Animation_1.AnimationType.Pose
    },
    [Pkm.DEWOTT]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Swing,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.SAMUROTT]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Strike,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.SNOM]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.FROSMOTH]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Hop,
        emote: Animation_1.AnimationType.Shoot,
        shinyUnavailable: true
    },
    [Pkm.WAILMER]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Hurt,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.WAILORD]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Hurt,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.DREEPY]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.DRAKLOAK]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.DRAGAPULT]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.SNIVY]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Appeal,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.SERVINE]: {
        attack: Animation_1.AnimationType.Slice,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.SERPERIOR]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.SCORBUNNY]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Kick,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.RABOOT]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Kick,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.CINDERACE]: {
        attack: Animation_1.AnimationType.Slam,
        ability: Animation_1.AnimationType.Kick,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.POPPLIO]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.BRIONNE]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.PRIMARINA]: {
        attack: Animation_1.AnimationType.Charge,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.GOTHITA]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.GOTHORITA]: {
        attack: Animation_1.AnimationType.Appeal,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.GOTHITELLE]: {
        attack: Animation_1.AnimationType.Appeal,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.SANDSHREW]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.LostBalance
    },
    [Pkm.SANDSLASH]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.DeepBreath
    },
    [Pkm.FARFETCH_D]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Charge
    },
    [Pkm.UNOWN_A]: {
        attack: Animation_1.AnimationType.Rotate,
        ability: Animation_1.AnimationType.Rotate,
        emote: Animation_1.AnimationType.Rotate
    },
    [Pkm.UNOWN_B]: {
        attack: Animation_1.AnimationType.Rotate,
        ability: Animation_1.AnimationType.Rotate,
        emote: Animation_1.AnimationType.Rotate
    },
    [Pkm.UNOWN_C]: {
        attack: Animation_1.AnimationType.Rotate,
        ability: Animation_1.AnimationType.Rotate,
        emote: Animation_1.AnimationType.Rotate
    },
    [Pkm.UNOWN_D]: {
        attack: Animation_1.AnimationType.Rotate,
        ability: Animation_1.AnimationType.Rotate,
        emote: Animation_1.AnimationType.Rotate
    },
    [Pkm.UNOWN_E]: {
        attack: Animation_1.AnimationType.Rotate,
        ability: Animation_1.AnimationType.Rotate,
        emote: Animation_1.AnimationType.Rotate
    },
    [Pkm.UNOWN_F]: {
        attack: Animation_1.AnimationType.Rotate,
        ability: Animation_1.AnimationType.Rotate,
        emote: Animation_1.AnimationType.Rotate
    },
    [Pkm.UNOWN_G]: {
        attack: Animation_1.AnimationType.Rotate,
        ability: Animation_1.AnimationType.Rotate,
        emote: Animation_1.AnimationType.Rotate
    },
    [Pkm.UNOWN_H]: {
        attack: Animation_1.AnimationType.Rotate,
        ability: Animation_1.AnimationType.Rotate,
        emote: Animation_1.AnimationType.Rotate
    },
    [Pkm.UNOWN_I]: {
        attack: Animation_1.AnimationType.Rotate,
        ability: Animation_1.AnimationType.Rotate,
        emote: Animation_1.AnimationType.Rotate
    },
    [Pkm.UNOWN_J]: {
        attack: Animation_1.AnimationType.Rotate,
        ability: Animation_1.AnimationType.Rotate,
        emote: Animation_1.AnimationType.Rotate
    },
    [Pkm.UNOWN_K]: {
        attack: Animation_1.AnimationType.Rotate,
        ability: Animation_1.AnimationType.Rotate,
        emote: Animation_1.AnimationType.Rotate
    },
    [Pkm.UNOWN_L]: {
        attack: Animation_1.AnimationType.Rotate,
        ability: Animation_1.AnimationType.Rotate,
        emote: Animation_1.AnimationType.Rotate
    },
    [Pkm.UNOWN_M]: {
        attack: Animation_1.AnimationType.Rotate,
        ability: Animation_1.AnimationType.Rotate,
        emote: Animation_1.AnimationType.Rotate
    },
    [Pkm.UNOWN_N]: {
        attack: Animation_1.AnimationType.Rotate,
        ability: Animation_1.AnimationType.Rotate,
        emote: Animation_1.AnimationType.Rotate
    },
    [Pkm.UNOWN_O]: {
        attack: Animation_1.AnimationType.Rotate,
        ability: Animation_1.AnimationType.Rotate,
        emote: Animation_1.AnimationType.Rotate
    },
    [Pkm.UNOWN_P]: {
        attack: Animation_1.AnimationType.Rotate,
        ability: Animation_1.AnimationType.Rotate,
        emote: Animation_1.AnimationType.Rotate
    },
    [Pkm.UNOWN_Q]: {
        attack: Animation_1.AnimationType.Rotate,
        ability: Animation_1.AnimationType.Rotate,
        emote: Animation_1.AnimationType.Rotate
    },
    [Pkm.UNOWN_R]: {
        attack: Animation_1.AnimationType.Rotate,
        ability: Animation_1.AnimationType.Rotate,
        emote: Animation_1.AnimationType.Rotate
    },
    [Pkm.UNOWN_S]: {
        attack: Animation_1.AnimationType.Rotate,
        ability: Animation_1.AnimationType.Rotate,
        emote: Animation_1.AnimationType.Rotate
    },
    [Pkm.UNOWN_T]: {
        attack: Animation_1.AnimationType.Rotate,
        ability: Animation_1.AnimationType.Rotate,
        emote: Animation_1.AnimationType.Rotate
    },
    [Pkm.UNOWN_U]: {
        attack: Animation_1.AnimationType.Rotate,
        ability: Animation_1.AnimationType.Rotate,
        emote: Animation_1.AnimationType.Rotate
    },
    [Pkm.UNOWN_V]: {
        attack: Animation_1.AnimationType.Rotate,
        ability: Animation_1.AnimationType.Rotate,
        emote: Animation_1.AnimationType.Rotate
    },
    [Pkm.UNOWN_W]: {
        attack: Animation_1.AnimationType.Rotate,
        ability: Animation_1.AnimationType.Rotate,
        emote: Animation_1.AnimationType.Rotate
    },
    [Pkm.UNOWN_X]: {
        attack: Animation_1.AnimationType.Rotate,
        ability: Animation_1.AnimationType.Rotate,
        emote: Animation_1.AnimationType.Rotate
    },
    [Pkm.UNOWN_Y]: {
        attack: Animation_1.AnimationType.Rotate,
        ability: Animation_1.AnimationType.Rotate,
        emote: Animation_1.AnimationType.Rotate
    },
    [Pkm.UNOWN_Z]: {
        attack: Animation_1.AnimationType.Rotate,
        ability: Animation_1.AnimationType.Rotate,
        emote: Animation_1.AnimationType.Rotate
    },
    [Pkm.UNOWN_QUESTION]: {
        attack: Animation_1.AnimationType.Rotate,
        ability: Animation_1.AnimationType.Rotate,
        emote: Animation_1.AnimationType.Rotate
    },
    [Pkm.UNOWN_EXCLAMATION]: {
        attack: Animation_1.AnimationType.Rotate,
        ability: Animation_1.AnimationType.Rotate,
        emote: Animation_1.AnimationType.Rotate
    },
    [Pkm.TAPU_FINI]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.TAPU_BULU]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.DIGLETT]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.DigIn,
        emote: Animation_1.AnimationType.Special0
    },
    [Pkm.ALOLAN_DIGLETT]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.DigIn,
        emote: Animation_1.AnimationType.Special0
    },
    [Pkm.DUGTRIO]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.DigIn,
        emote: Animation_1.AnimationType.Special0
    },
    [Pkm.ALOLAN_DUGTRIO]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Walk,
        emote: Animation_1.AnimationType.Hop
    },
    [Pkm.ROWLET]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.DARTIX]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.DECIDUEYE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.ZORUA]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.ZOROARK]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.HISUI_ZORUA]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.HISUI_ZOROARK]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.FROAKIE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.FROGADIER]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot,
        shinyUnavailable: true
    },
    [Pkm.GRENINJA]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Hurt,
        emote: Animation_1.AnimationType.Attack
    },
    [Pkm.TYROGUE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.HITMONLEE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Kick,
        emote: Animation_1.AnimationType.Withdraw
    },
    [Pkm.HITMONCHAN]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Uppercut,
        emote: Animation_1.AnimationType.Punch
    },
    [Pkm.HITMONTOP]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Swing,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.MIMIKYU]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.MIMIKYU_BUSTED]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.GRIMER]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Pose
    },
    [Pkm.MUK]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge
    },
    [Pkm.ALOLAN_GRIMER]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Pose
    },
    [Pkm.ALOLAN_MUK]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge
    },
    [Pkm.CARVANHA]: {
        attack: Animation_1.AnimationType.Bite,
        ability: Animation_1.AnimationType.Swell,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.SHARPEDO]: {
        attack: Animation_1.AnimationType.Bite,
        ability: Animation_1.AnimationType.Swell,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.PINECO]: {
        attack: Animation_1.AnimationType.Ricochet,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.FORRETRESS]: {
        attack: Animation_1.AnimationType.Ricochet,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.SEEL]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.DEWGONG]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.ALOLAN_GEODUDE]: {
        attack: Animation_1.AnimationType.Punch,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.ALOLAN_GRAVELER]: {
        attack: Animation_1.AnimationType.Slam,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.ALOLAN_GOLEM]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.EKANS]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.ARBOK]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.MIME_JR]: {
        attack: Animation_1.AnimationType.MultiStrike,
        ability: Animation_1.AnimationType.Twirl,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.MR_MIME]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.ORIGIN_GIRATINA]: {
        attack: Animation_1.AnimationType.Scratch,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.MELMETAL]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Punch,
        emote: Animation_1.AnimationType.Charge
    },
    [Pkm.HOOPA]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Hop
    },
    [Pkm.HOOPA_UNBOUND]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Cringe
    },
    [Pkm.SILVALLY]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.TYPE_NULL]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.ZERAORA]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.RearUp
    },
    [Pkm.XERNEAS]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.YVELTAL]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.MARSHADOW]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.HOOTHOOT]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.NOCTOWL]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.BONSLEY]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.SUDOWOODO]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Slam,
        emote: Animation_1.AnimationType.Charge
    },
    [Pkm.PHIONE]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Twirl,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.COMBEE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Hover,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.VESPIQUEEN]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.SpAttack,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.SHUCKLE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Withdraw,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.TEPIG]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.PIGNITE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.EMBOAR]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.WYNAUT]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.WOBBUFFET]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Withdraw,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.LUNATONE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Rotate,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.SOLROCK]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Rotate,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.POLIWRATH]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.RearUp,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.SHAYMIN_SKY]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.WURMPLE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.SILCOON]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Withdraw,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.BEAUTIFLY]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.FlapAround,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.CASCOON]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Withdraw,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.DUSTOX]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.FlapAround,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.TINKATINK]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Strike,
        emote: Animation_1.AnimationType.Strike
    },
    [Pkm.TINKATUFF]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Strike,
        emote: Animation_1.AnimationType.Strike
    },
    [Pkm.TINKATON]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Cringe
    },
    [Pkm.PARAS]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.PARASECT]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.MILTANK]: {
        attack: Animation_1.AnimationType.Stomp,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.MANKEY]: {
        attack: Animation_1.AnimationType.MultiStrike,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Twirl
    },
    [Pkm.PRIMEAPE]: {
        attack: Animation_1.AnimationType.MultiStrike,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Strike
    },
    [Pkm.ANNIHILAPE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.RearUp,
        emote: Animation_1.AnimationType.RearUp
    },
    [Pkm.SUNKERN]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.SUNFLORA]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Pose
    },
    [Pkm.MARACTUS]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Twirl,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.PLUSLE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shock,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.MINUN]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shock,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.PINSIR]: {
        attack: Animation_1.AnimationType.Slice,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Slice
    },
    [Pkm.NATU]: {
        attack: Animation_1.AnimationType.Jab,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Hover
    },
    [Pkm.XATU]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.GLIGAR]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.MultiStrike,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.GLISCOR]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.SHELLDER]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Withdraw,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.CLOYSTER]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Withdraw,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.SENTRET]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.RearUp,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.FURRET]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.RearUp,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.SPECTRIER]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.RearUp
    },
    [Pkm.TORKOAL]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge
    },
    [Pkm.DELIBIRD]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.IRON_BUNDLE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.KARTANA]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.CHINGLING]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Emit,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.CHIMECHO]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Twirl,
        emote: Animation_1.AnimationType.Pose
    },
    [Pkm.ALOLAN_RAICHU]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shock,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.DHELMISE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.KOFFING]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Gas,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.WEEZING]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Gas,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.STARYU]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Charge
    },
    [Pkm.STARMIE]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Charge
    },
    [Pkm.NOSEPASS]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Emit,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.PROBOPASS]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Emit,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.WOOBAT]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Rotate,
        emote: Animation_1.AnimationType.Hover
    },
    [Pkm.SWOOBAT]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Rotate,
        emote: Animation_1.AnimationType.Hover
    },
    [Pkm.CLAUNCHER]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Double,
        emote: Animation_1.AnimationType.Charge
    },
    [Pkm.CLAWITZER]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Double,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.YANMA]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.YANMEGA]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.QuickStrike,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.HELIOPTILE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.HELIOLISK]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shock,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.BIDOOF]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.BIBAREL]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.SPINDA]: {
        attack: Animation_1.AnimationType.Slam,
        ability: Animation_1.AnimationType.Twirl,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.BALTOY]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Rotate,
        emote: Animation_1.AnimationType.RearUp
    },
    [Pkm.CLAYDOL]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Rotate,
        emote: Animation_1.AnimationType.RearUp
    },
    [Pkm.HERACROSS]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Slam,
        emote: Animation_1.AnimationType.Charge
    },
    [Pkm.PURRLOIN]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.LIEPARD]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.BARBOACH]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Dance
    },
    [Pkm.WHISCASH]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Dance
    },
    [Pkm.SCRAGGY]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.SCRAFTY]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.FINNEON]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.RearUp
    },
    [Pkm.LUMINEON]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.RearUp
    },
    [Pkm.STUNKY]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.RearUp,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.SKUNTANK]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.DeepBreath,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.ILLUMISE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.VOLBEAT]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Appeal,
        emote: Animation_1.AnimationType.Appeal
    },
    [Pkm.NECROZMA]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Idle,
        emote: Animation_1.AnimationType.Charge
    },
    [Pkm.ULTRA_NECROZMA]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.RearUp,
        emote: Animation_1.AnimationType.Charge
    },
    [Pkm.CHERRUBI]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shake
    },
    [Pkm.CHERRIM]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shake
    },
    [Pkm.CHERRIM_SUNLIGHT]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Dance
    },
    [Pkm.MISDREAVUS]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.SpAttack,
        emote: Animation_1.AnimationType.Charge
    },
    [Pkm.MISMAGIUS]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.RearUp,
        emote: Animation_1.AnimationType.Charge
    },
    [Pkm.DODUO]: {
        attack: Animation_1.AnimationType.Jab,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.MultiStrike
    },
    [Pkm.DODRIO]: {
        attack: Animation_1.AnimationType.Jab,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.MultiStrike
    },
    [Pkm.XURKITREE]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Shock,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.TANDEMAUS]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge
    },
    [Pkm.MAUSHOLD_THREE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge
    },
    [Pkm.MAUSHOLD_FOUR]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge
    },
    [Pkm.KRICKETOT]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Emit,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.KRICKETUNE]: {
        attack: Animation_1.AnimationType.MultiStrike,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.HIPPOPOTAS]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.RearUp
    },
    [Pkm.HIPPODOWN]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.RearUp
    },
    [Pkm.WINGULL]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge
    },
    [Pkm.PELIPPER]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.SpAttack
    },
    [Pkm.NIHILEGO]: {
        attack: Animation_1.AnimationType.Slam,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.SOBBLE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.DRIZZILE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        shinyUnavailable: true
    },
    [Pkm.INTELEON]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Strike
    },
    [Pkm.TROPIUS]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.EXEGGCUTE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Twirl
    },
    [Pkm.EXEGGUTOR]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Dance
    },
    [Pkm.ALOLAN_EXEGGUTOR]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Dance
    },
    [Pkm.COMFEY]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Rotate,
        emote: Animation_1.AnimationType.Hop
    },
    [Pkm.CARNIVINE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.RearUp
    },
    [Pkm.HISUIAN_QWILFISH]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Withdraw
    },
    [Pkm.OVERQWIL]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge
    },
    [Pkm.HISUIAN_TYPHLOSION]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.LILLIPUP]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Pose
    },
    [Pkm.HERDIER]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.RearUp
    },
    [Pkm.STOUTLAND]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.ZIGZAGOON]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.RearUp
    },
    [Pkm.LINOONE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.RearUp
    },
    [Pkm.PHEROMOSA]: {
        attack: Animation_1.AnimationType.Kick,
        ability: Animation_1.AnimationType.Swing,
        emote: Animation_1.AnimationType.Charge
    },
    [Pkm.SABLEYE]: {
        attack: Animation_1.AnimationType.MultiStrike,
        ability: Animation_1.AnimationType.SpAttack,
        emote: Animation_1.AnimationType.Charge
    },
    [Pkm.MEGA_SABLEYE]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.SpAttack,
        emote: Animation_1.AnimationType.Charge
    },
    [Pkm.DRACOVISH]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Hop,
        shinyUnavailable: true
    },
    [Pkm.CORSOLA]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Shake,
        emote: Animation_1.AnimationType.Shake
    },
    [Pkm.GALAR_CORSOLA]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shake
    },
    [Pkm.CURSOLA]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.SpAttack
    },
    [Pkm.GIMMIGHOUL]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Swing,
        emote: Animation_1.AnimationType.RearUp
    },
    [Pkm.GHOLDENGO]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.SpAttack,
        emote: Animation_1.AnimationType.Charge
    },
    [Pkm.PHANTUMP]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.SpAttack,
        emote: Animation_1.AnimationType.Charge
    },
    [Pkm.TREVENANT]: {
        attack: Animation_1.AnimationType.Punch,
        ability: Animation_1.AnimationType.Swing,
        emote: Animation_1.AnimationType.Charge
    },
    [Pkm.SMEARGLE]: {
        attack: Animation_1.AnimationType.SpAttack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Pose
    },
    [Pkm.TOXEL]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.TOXTRICITY]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shock,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.BRUXISH]: {
        attack: Animation_1.AnimationType.Bite,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge
    },
    [Pkm.SUBSTITUTE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Charge,
        shinyUnavailable: true
    },
    [Pkm.CYCLIZAR]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge
    },
    [Pkm.PAWNIARD]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Appeal
    },
    [Pkm.BISHARP]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Pose
    },
    [Pkm.KINGAMBIT]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.MINIOR]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge
    },
    [Pkm.MINIOR_KERNEL_RED]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge,
        shinyUnavailable: true
    },
    [Pkm.MINIOR_KERNEL_BLUE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge,
        shinyUnavailable: true
    },
    [Pkm.MINIOR_KERNEL_ORANGE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge,
        shinyUnavailable: true
    },
    [Pkm.MINIOR_KERNEL_GREEN]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge,
        shinyUnavailable: true
    },
    [Pkm.FEEBAS]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Dance,
        emote: Animation_1.AnimationType.Charge
    },
    [Pkm.MILOTIC]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.RearUp,
        emote: Animation_1.AnimationType.RearUp
    },
    [Pkm.MORPEKO]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shock,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.MORPEKO_HANGRY]: {
        attack: Animation_1.AnimationType.Swing,
        ability: Animation_1.AnimationType.Special0,
        emote: Animation_1.AnimationType.Rotate
    },
    [Pkm.KANGASKHAN]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.TEDDIURSA]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.MultiScratch,
        emote: Animation_1.AnimationType.Appeal
    },
    [Pkm.URSARING]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.MultiStrike,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.URSALUNA]: {
        attack: Animation_1.AnimationType.Idle,
        ability: Animation_1.AnimationType.Idle,
        emote: Animation_1.AnimationType.Idle
    },
    [Pkm.URSALUNA_BLOODMOON]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        shinyUnavailable: true
    },
    [Pkm.AIPOM]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Dance,
        emote: Animation_1.AnimationType.Dance
    },
    [Pkm.AMBIPOM]: {
        attack: Animation_1.AnimationType.MultiStrike,
        ability: Animation_1.AnimationType.RearUp,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.DEERLING]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.RearUp,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.SAWSBUCK]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.RearUp,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.LICKITUNG]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Lick,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.LICKILICKY]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Withdraw
    },
    [Pkm.PATRAT]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Rotate,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.WATCHOG]: {
        attack: Animation_1.AnimationType.MultiScratch,
        ability: Animation_1.AnimationType.Rotate,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.SPINARAK]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.ARIADOS]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.DEWPIDER]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.ARAQUANID]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.ROCKRUFF]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.DeepBreath
    },
    [Pkm.LYCANROC_DAY]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.RearUp
    },
    [Pkm.LYCANROC_DUSK]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.RearUp
    },
    [Pkm.LYCANROC_NIGHT]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.QuickStrike,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.DRUDDIGON]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.RearUp,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.COSMOG]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Rotate
    },
    [Pkm.COSMOEM]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Rotate
    },
    [Pkm.SOLGALEO]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Hop,
        emote: Animation_1.AnimationType.Attack
    },
    [Pkm.LUNALA]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.MAGEARNA]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge
    },
    [Pkm.IMPIDIMP]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.MORGREM]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.GRIMMSNARL]: {
        attack: Animation_1.AnimationType.Punch,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Charge
    },
    [Pkm.DEOXYS]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Emit
    },
    [Pkm.DEOXYS_DEFENSE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Withdraw,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.DEOXYS_ATTACK]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.SpAttack,
        emote: Animation_1.AnimationType.Charge
    },
    [Pkm.DEOXYS_SPEED]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.SpAttack,
        emote: Animation_1.AnimationType.Charge
    },
    [Pkm.CRABRAWLER]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.CRABOMINABLE]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge
    },
    [Pkm.CUTIEFLY]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge
    },
    [Pkm.RIBOMBEE]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge
    },
    [Pkm.ZANGOOSE]: {
        attack: Animation_1.AnimationType.MultiScratch,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge
    },
    [Pkm.NICKIT]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge
    },
    [Pkm.THIEVUL]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge
    },
    [Pkm.DROWZEE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge
    },
    [Pkm.HYPNO]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.SpAttack,
        emote: Animation_1.AnimationType.Charge
    },
    [Pkm.WATTREL]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.FlapAround
    },
    [Pkm.KILOWATTREL]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.FlapAround
    },
    [Pkm.STANTLER]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge
    },
    [Pkm.BURMY_PLANT]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Swing,
        emote: Animation_1.AnimationType.Attack
    },
    [Pkm.BURMY_SANDY]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Swing,
        emote: Animation_1.AnimationType.Attack
    },
    [Pkm.BURMY_TRASH]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Swing,
        emote: Animation_1.AnimationType.Attack
    },
    [Pkm.WORMADAM_PLANT]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Swing,
        emote: Animation_1.AnimationType.Shake
    },
    [Pkm.WORMADAM_SANDY]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Swing,
        emote: Animation_1.AnimationType.Shake
    },
    [Pkm.WORMADAM_TRASH]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Swing,
        emote: Animation_1.AnimationType.Shake
    },
    [Pkm.MOTHIM]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Swing,
        emote: Animation_1.AnimationType.Hover
    },
    [Pkm.PALDEA_WOOPER]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Pose
    },
    [Pkm.CLODSIRE]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.FUECOCO]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.RearUp
    },
    [Pkm.CROCALOR]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.RearUp
    },
    [Pkm.SKELEDIRGE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.RearUp,
        shinyUnavailable: true
    },
    [Pkm.TANGELA]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shake
    },
    [Pkm.TANGROWTH]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Emit
    },
    [Pkm.PSYDUCK]: {
        attack: Animation_1.AnimationType.MultiScratch,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.GOLDUCK]: {
        attack: Animation_1.AnimationType.MultiScratch,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.PHANPY]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.TumbleBack,
        emote: Animation_1.AnimationType.Eat
    },
    [Pkm.DONPHAN]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.TumbleBack,
        emote: Animation_1.AnimationType.Idle
    },
    [Pkm.SPOINK]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Hop,
        emote: Animation_1.AnimationType.Twirl
    },
    [Pkm.GRUMPIG]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Hop,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.SINISTEA]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Hop,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.POLTEAGEIST]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Hop,
        emote: Animation_1.AnimationType.Shoot,
        shinyUnavailable: true
    },
    [Pkm.FERROSEED]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Special0,
        emote: Animation_1.AnimationType.DeepBreath
    },
    [Pkm.FERROTHORN]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Special0,
        emote: Animation_1.AnimationType.Special0
    },
    [Pkm.GOLETT]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Tumble,
        emote: Animation_1.AnimationType.Pose
    },
    [Pkm.GOLURK]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.SpAttack,
        emote: Animation_1.AnimationType.Charge
    },
    [Pkm.TRUBBISH]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Pose,
        shinyUnavailable: true
    },
    [Pkm.GARBODOR]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Idle,
        shinyUnavailable: true
    },
    [Pkm.GRUBBIN]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot,
        shinyUnavailable: true
    },
    [Pkm.CHARJABUG]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot,
        shinyUnavailable: true
    },
    [Pkm.VIKAVOLT]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.SHELLOS_WEST_SEA]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.GASTRODON_WEST_SEA]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.SHELLOS_EAST_SEA]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.GASTRODON_EAST_SEA]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.MUNNA]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.MUSHARNA]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.KLEFKI]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Attack
    },
    [Pkm.RUFFLET]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.BRAVIARY]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.HEATMOR]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge
    },
    [Pkm.HAWLUCHA]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Cringe,
        emote: Animation_1.AnimationType.Kick
    },
    [Pkm.MIENFOO]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Strike,
        emote: Animation_1.AnimationType.Charge
    },
    [Pkm.MIENSHAO]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge
    },
    [Pkm.STONJOURNER]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shake,
        emote: Animation_1.AnimationType.Shake
    },
    [Pkm.HISUI_SNEASEL]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.MultiScratch,
        emote: Animation_1.AnimationType.Pose
    },
    [Pkm.SNEASLER]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Charge
    },
    [Pkm.POIPOLE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge
    },
    [Pkm.NAGANADEL]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.RearUp,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.CRAMORANT]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge
    },
    [Pkm.ARROKUDA]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge
    },
    [Pkm.WISHIWASHI]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Swing,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.WISHIWASHI_SCHOOL]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Swing,
        emote: Animation_1.AnimationType.RearUp,
        shinyUnavailable: true
    },
    [Pkm.PAWMI]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge
    },
    [Pkm.PAWMO]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shock,
        emote: Animation_1.AnimationType.Charge
    },
    [Pkm.PAWMOT]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shock,
        emote: Animation_1.AnimationType.Charge
    },
    [Pkm.PYUKUMUKU]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Rumble
    },
    [Pkm.GOLDEEN]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.RearUp,
        emote: Animation_1.AnimationType.RearUp
    },
    [Pkm.SEAKING]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.RearUp,
        emote: Animation_1.AnimationType.RearUp
    },
    [Pkm.LUVDISC]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Twirl
    },
    [Pkm.AUDINO]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Pose,
        emote: Animation_1.AnimationType.Pose
    },
    [Pkm.PETILIL]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Twirl,
        emote: Animation_1.AnimationType.Pose
    },
    [Pkm.LILIGANT]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.DeepBreath,
        emote: Animation_1.AnimationType.Pose
    },
    [Pkm.MANTYKE]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Hover,
        emote: Animation_1.AnimationType.Strike
    },
    [Pkm.MANTINE]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Hover,
        emote: Animation_1.AnimationType.Strike
    },
    [Pkm.REMORAID]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.RearUp
    },
    [Pkm.OCTILLERY]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.RearUp
    },
    [Pkm.SIGILYPH]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.SpAttack,
        emote: Animation_1.AnimationType.Charge
    },
    [Pkm.FRIGIBAX]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge
    },
    [Pkm.ARCTIBAX]: {
        attack: Animation_1.AnimationType.Scratch,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge
    },
    [Pkm.BAXCALIBUR]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge
    },
    [Pkm.BINACLE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.RearUp,
        emote: Animation_1.AnimationType.Charge
    },
    [Pkm.BARBARACLE]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge
    },
    [Pkm.SKARMORY]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge
    },
    [Pkm.DURANT]: {
        attack: Animation_1.AnimationType.Bite,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge,
        shinyUnavailable: true
    },
    [Pkm.OGERPON_TEAL]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge
    },
    [Pkm.OGERPON_TEAL_MASK]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge,
        shinyUnavailable: true
    },
    [Pkm.OGERPON_WELLSPRING]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge
    },
    [Pkm.OGERPON_WELLSPRING_MASK]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge,
        shinyUnavailable: true
    },
    [Pkm.OGERPON_HEARTHFLAME]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge
    },
    [Pkm.OGERPON_HEARTHFLAME_MASK]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge,
        shinyUnavailable: true
    },
    [Pkm.OGERPON_CORNERSTONE]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge
    },
    [Pkm.OGERPON_CORNERSTONE_MASK]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge,
        shinyUnavailable: true
    },
    [Pkm.IRON_HANDS]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Strike,
        emote: Animation_1.AnimationType.Hop
    },
    [Pkm.ROOKIDEE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge
    },
    [Pkm.CORVISQUIRE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge,
        shinyUnavailable: true
    },
    [Pkm.CORVIKNIGHT]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge,
        shinyUnavailable: true
    },
    [Pkm.MURKROW]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge
    },
    [Pkm.HONCHKROW]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge
    },
    [Pkm.SANDYGAST]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge
    },
    [Pkm.PALOSSAND]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge
    },
    [Pkm.TURTONATOR]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Idle
    },
    [Pkm.SKORUPI]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Jab,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.DRAPION]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Jab,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.DARUMAKA]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Dance
    },
    [Pkm.DARMANITAN]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.QuickStrike,
        emote: Animation_1.AnimationType.Rumble
    },
    [Pkm.DARMANITAN_ZEN]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Charge,
        shinyUnavailable: true
    },
    [Pkm.KRABBY]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Slam,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.KINGLER]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Strike,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.ZYGARDE_10]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.RearUp
    },
    [Pkm.ZYGARDE_50]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Charge,
        shinyUnavailable: true
    },
    [Pkm.ZYGARDE_100]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Emit,
        emote: Animation_1.AnimationType.Emit,
        shinyUnavailable: true
    },
    [Pkm.SIZZLIPEDE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge,
        shinyUnavailable: true
    },
    [Pkm.CENTISKORCH]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge,
        shinyUnavailable: true
    },
    [Pkm.STUFFUL]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.SpAttack,
        emote: Animation_1.AnimationType.Charge
    },
    [Pkm.BEWEAR]: {
        attack: Animation_1.AnimationType.Slap,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge,
        shinyUnavailable: true
    },
    [Pkm.GLIMMET]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Twirl,
        emote: Animation_1.AnimationType.Charge
    },
    [Pkm.GLIMMORA]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge
    },
    [Pkm.FLETCHLING]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.FLETCHINDER]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Hover,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.TALONFLAME]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Hover,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pkm.VULLABY]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge,
        shinyUnavailable: true
    },
    [Pkm.MANDIBUZZ]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge
    },
    [Pkm.INKAY]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Twirl
    },
    [Pkm.MALAMAR]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge
    },
    [Pkm.TIMBURR]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Swing,
        emote: Animation_1.AnimationType.Pose
    },
    [Pkm.GURDURR]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Punch,
        emote: Animation_1.AnimationType.RearUp,
        shinyUnavailable: true
    },
    [Pkm.CONKELDURR]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Strike,
        emote: Animation_1.AnimationType.Shoot,
        shinyUnavailable: true
    },
    [Pkm.PILLAR_WOOD]: {
        attack: Animation_1.AnimationType.Idle,
        ability: Animation_1.AnimationType.Idle,
        emote: Animation_1.AnimationType.Idle,
        shinyUnavailable: true,
        noShadow: true
    },
    [Pkm.PILLAR_IRON]: {
        attack: Animation_1.AnimationType.Idle,
        ability: Animation_1.AnimationType.Idle,
        emote: Animation_1.AnimationType.Idle,
        shinyUnavailable: true,
        noShadow: true
    },
    [Pkm.PILLAR_CONCRETE]: {
        attack: Animation_1.AnimationType.Idle,
        ability: Animation_1.AnimationType.Idle,
        emote: Animation_1.AnimationType.Idle,
        shinyUnavailable: true,
        noShadow: true
    }
};
//# sourceMappingURL=Pokemon.js.map