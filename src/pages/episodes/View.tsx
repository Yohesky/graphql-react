import { HeaderTitle } from "../../shared/components/HeaderTitle";
import { EpisodesList } from "./components/EpisodesList";
import { useEpisodes } from "./hooks/useEpisodes";

export const View = () => {
  const { data = [] } = useEpisodes();

  return (
    <div className="flex flex-col gap-y-2 col-span-full">
      <HeaderTitle label="Episodes" />

      <EpisodesList episodes={data} />
    </div>
  );
};
