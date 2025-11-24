import { useQuery } from "@tanstack/react-query";
import type {
  Character,
  Location,
  Origin,
} from "../../../shared/interfaces/Character";
import { clientFactory } from "../../../shared/utils/clientFactory";

//SEGREGATION INTERFACE
interface CharacterResponseAxios extends Character {
  origin: Origin;
  location: Location;
}

export const useCharacterDetails = (characterId: string) => {
  const httpClient = clientFactory["axios-client"];
  const { isLoading, isError, error, data, isFetching, refetch } = useQuery({
    queryKey: ["character", "details", characterId],
    queryFn: () => {
      return httpClient.get<CharacterResponseAxios>(
        `/character/${characterId}`
      );
    },
    staleTime: 1000 * 60 * 5,
    select: (data) => {
      const newCharacter = {
        character: {
          ...data,
        },
      };

      return newCharacter;
    },
  });

  return {
    isLoading,
    isError,
    error,
    data,
    isFetching,
    refetch,
  };
};
