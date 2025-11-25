import { Status } from "../../../../shared/components/Status";
import type { CharacterDetail } from "../../interfaces/CharacterDetail";

interface CharacterDetailsProps
  extends Pick<
    CharacterDetail["character"],
    "id" | "name" | "image" | "status"
  > {
  children?: React.ReactNode;
}

interface Props extends Omit<CharacterDetailsProps, "id"> {}

export const CardDetails = ({ name, image, status, children }: Props) => {
  return (
    <div className="w-full mx-auto max-w-md ">
      <div className="bg-[#0F172A] rounded-3xl p-6 shadow-lg">
        <div className="w-full flex justify-center mb-6">
          <img
            src={image}
            alt={name}
            className="rounded-2xl object-contain h-full w-full shadow-md"
          />
        </div>

        <h1 className="text-white text-3xl font-bold mb-2">{name}</h1>

        <div className="mb-2">
          <Status status={status} />
        </div>

        <div className="space-y-4">{children}</div>
      </div>
    </div>
  );
};
