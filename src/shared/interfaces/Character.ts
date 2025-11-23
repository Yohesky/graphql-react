import type { Episode } from "./Episode";

export interface Character {
  id: string;
  name: string;
  image: string;
  species: string;
  status: "Alive" | "Dead" | "Unknown";
  episode: Episode[];
}

export interface Origin {
  name: string;
  dimension: string;
}

export interface Location {
  name: string;
  dimension: string;
}
