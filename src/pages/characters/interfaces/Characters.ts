import type { ApiResponse } from "../../../shared/interfaces/ApiResponse";
import type { Character } from "../../../shared/interfaces/Character";

export type CharactersResponse = ApiResponse<"characters", Character>;