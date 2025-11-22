export interface Episode {
  id: string;
  name: string;
  episode: string;
  characters: Character[];
}

export interface Character {
  id: string;
  name: string;
  image: string;
}

export interface EpisodesResponse {
  episodes: {
    results: Episode[];
  };
}

export interface EpisodesList extends Omit<Episode, "episode"> {
  description: string;
}

