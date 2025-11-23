import type { ApiResponse } from "../../../shared/interfaces/ApiResponse";
import type { Episode } from "../../../shared/interfaces/Episode";

export type EpisodesResponse = ApiResponse<"episodes", Episode>;

export interface EpisodesList extends Omit<Episode, "episode"> {
  description: string;
}
