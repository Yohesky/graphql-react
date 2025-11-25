import { Card } from "../../../shared/components/Card";
import type { EpisodesList as EpisodesListInterface } from "../interfaces/Episodes";
import { Description } from "./Description";
import { Title } from "./Title";

interface Props {
  episodes: Array<EpisodesListInterface>;
}

export const EpisodesList = ({ episodes }: Props) => {
  return (
    <div className="grid grid-cols-6 gap-4 row-auto auto-rows-auto">
      {episodes.map((episode, index) => (
        <Card
          className="col-span-full md:col-span-2 "
          href={`/episodes/details/${episode.id}`}
          key={index}
          itemPosition={index + 1}
          extraChildren={<Description description={episode.description} />}
        >
          <Title title={episode.name} />
        </Card>
      ))}
    </div>
  );
};
