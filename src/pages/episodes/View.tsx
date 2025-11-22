import { Card } from "../../shared/components/Card";
import { HeaderTitle } from "../../shared/components/HeaderTitle";
import { Description } from "./components/Description";
import { EpisodesList } from "./components/EpisodesList";
import { Title } from "./components/Title";
import { useEpisodes } from "./hooks/useEpisodes";

export const View = () => {
  const { data, isLoading, isError, error, isFetching } = useEpisodes();

  return (
    <div className="flex flex-col gap-y-2 col-span-full">
      <HeaderTitle label="Episodes" />

      <EpisodesList episodes={data || []} />
    </div>
  );
};
