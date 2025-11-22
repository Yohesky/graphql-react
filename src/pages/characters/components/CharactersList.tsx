import type { Character } from "../../../shared/interfaces/Character";
import { Actions } from "./Actions";
import { Card } from "./Card";
import { Description } from "./Description";
import { Status } from "./Status";

interface Props {
  characters: Character[];
}

export const CharactersList = ({ characters }: Props) => {
  return (
    <div className="grid grid-cols-6 gap-4 row-auto auto-rows-auto">
      {characters.map((character, index) => (
        <Card
          href="#"
          key={index}
          image={character.image}
          className="col-span-3 h-fit"
          actions={<Actions action="View Profile" />}
          status={<Status status={character.status} />}
        >
          <Description description={character.species} title={character.name} />
        </Card>
      ))}
    </div>
  );
};
