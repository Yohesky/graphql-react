import { useQuery } from "@tanstack/react-query";
import type { Location, Origin } from "../../../shared/interfaces/Character";
import { clientFactory } from "../../../shared/utils/clientFactory";
import type { Episode } from "../../../shared/interfaces/Episode";
import { getCharacterId } from "../../../shared/utils/getCharacterId";

const BASE_IMAGE = "https://rickandmortyapi.com/api/character/avatar";
//SEGREGATION INTERFACE
interface EpisodeResponseAxios extends Omit<Episode, "characters"> {
  origin: Origin;
  location: Location;
  air_date: string;
  characters: string[];
}

export const useEpisodeDetails = (episodeId: string) => {
  const httpClient = clientFactory["axios-client"];
  const { isLoading, isError, error, data, isFetching, refetch } = useQuery({
    queryKey: ["episodes", "details", episodeId],
    queryFn: () =>
      httpClient.get<EpisodeResponseAxios>(`/episode/${episodeId}`),
    staleTime: 1000 * 60 * 5,
    select: (data) => {
      return {
        ...data,
        actors: data.characters.map(
          (character) => `${BASE_IMAGE}/${getCharacterId(character)}.jpeg`
        ),
        date: data.air_date,
      };
    },
  });

  return {
    isLoading,
    isError,
    error,
    data: data!,
    isFetching,
    refetch,
  };
};
