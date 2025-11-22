import { Card } from "../../../shared/components/Card";
import random0to4 from "../../../shared/utils/randomNumber";
import type { EpisodesList as EpisodesListInterface } from "../interfaces/Episodes";
import { Description } from "./Description";
import { Title } from "./Title";

interface Props {
  episodes: Array<EpisodesListInterface>;
}

export const EpisodesList = ({ episodes }: Props) => {
  return episodes.map((episode, index) => (
    <Card
      href="#"
      key={index}
      image={episode.characters[random0to4()]?.image}
      extraChildren={<Description description={episode.description} />}
    >
      <Title title={episode.name} />
    </Card>
  ));
};
