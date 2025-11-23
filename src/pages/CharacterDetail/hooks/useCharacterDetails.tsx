import { useQuery } from "@tanstack/react-query";
// import { GraphQLClient } from "../../../lib/clients/graphql/GraphQLClient";
import { HttpClient } from "../../../lib/HttpClient";
import { AxiosClient } from "../../../lib/clients/axios/axiosClient";
import type {
  Character,
  Location,
  Origin,
} from "../../../shared/interfaces/Character";

// AxiosClient for demonstration purposes

// const queryClient = new GraphQLClient();

//SEGREGATION INTERFACE
interface CharacterResponseAxios extends Character {
  origin: Origin;
  location: Location;
}
const axiosClient = new AxiosClient();
const httpClient = new HttpClient(axiosClient);

export const useCharacterDetails = (characterId: string) => {
  const { isLoading, isError, error, data, isFetching } = useQuery({
    queryKey: ["character", "details", characterId],
    queryFn: () =>
      httpClient.get<CharacterResponseAxios>(`/character/${characterId}`),
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
  };
};
