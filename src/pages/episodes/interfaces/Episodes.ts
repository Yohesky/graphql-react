import type { ApiResponse } from "../../../shared/interfaces/ApiResponse";
import type { Character } from "../../../shared/interfaces/Character";

export interface Episode {
  id: string;
  name: string;
  episode: string;
  characters: Character[];
}

export type EpisodesResponse = ApiResponse<"episodes", Episode>;

export interface EpisodesList extends Omit<Episode, "episode"> {
  description: string;
}
