import type { Episode } from "../../../shared/interfaces/Episode";

export const episodeMapper = (episodes: Episode[]) => {
  return episodes.map((episode) => ({
    id: episode.id,
    name: episode.name,
    description: episode.episode,
    characters: episode.characters.slice(0, 5),
  }));
};
