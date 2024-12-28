import { IPokemonsStatistic } from "../../../../../models/mongo-models/pokemons-statistic";
import { Rarity } from "../../../../../types/enum/Game";
import { Synergy } from "../../../../../types/enum/Synergy";
export default function PokemonStatistic(props: {
    pokemons: IPokemonsStatistic[];
    rankingBy: string;
    synergy: Synergy | "all";
    rarity: Rarity | "all";
    selectedPkm: string;
}): import("react/jsx-runtime").JSX.Element;
