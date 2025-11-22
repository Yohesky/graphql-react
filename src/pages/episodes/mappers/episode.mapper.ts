import type { Episode } from "../interfaces/Episodes";

export const episodeMapper = (episodes: Episode[]) => {
  return episodes.map((episode) => ({
    id: episode.id,
    name: episode.name,
    description: episode.episode,
    characters: episode.characters.slice(0, 5),
  }));
};
