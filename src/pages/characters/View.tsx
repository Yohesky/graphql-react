import { HeaderTitle } from "../../shared/components/HeaderTitle";
import { CharactersList } from "./components/CharactersList";
import { useCharacters } from "./hooks/useCharacters";

export const View = () => {
  const { data } = useCharacters();

  return (
    <div className="flex flex-col col-span-full">
      <HeaderTitle label="Characters" />

      <CharactersList characters={data?.characters.results || []} />
    </div>
  );
};
