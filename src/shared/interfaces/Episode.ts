import type { Character } from "./Character";

export interface Episode {
  id: string;
  name: string;
  episode: string;
  characters: Character[];
}
