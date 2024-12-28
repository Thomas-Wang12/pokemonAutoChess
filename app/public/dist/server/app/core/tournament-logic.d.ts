import { ITournament, ITournamentBracket, ITournamentPlayer } from "../types/interfaces/Tournament";
export declare function getRemainingPlayers(tournament: ITournament): (ITournamentPlayer & {
    id: string;
})[];
export declare function getTournamentStage(tournament: ITournament): string;
export declare function makeBrackets(tournament: ITournament): ITournamentBracket[];
