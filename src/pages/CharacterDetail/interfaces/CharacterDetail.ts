import type {
  Character,
  Origin,
  Location,
} from "../../../shared/interfaces/Character";

export interface CharacterDetail {
  character: Character & {
    origin: Origin;
    location: Location;
  };
}
