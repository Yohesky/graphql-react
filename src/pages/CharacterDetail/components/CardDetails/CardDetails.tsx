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
      {/* CARD */}
      <div className="bg-[#0F172A] rounded-3xl p-6 shadow-lg">
        {/* Imagen */}
        <div className="w-full flex justify-center mb-6">
          <img
            src={image}
            alt={name}
            className="h-40 rounded-2xl object-cover shadow-md w-full"
          />
        </div>

        {/* Nombre */}
        <h1 className="text-white text-3xl font-bold mb-2">{name}</h1>

        {/* Estado + Especie */}
        <div className="mb-2">
          <Status status={status} />
        </div>

        {/* Info Section */}
        <div className="space-y-4">{children}</div>
      </div>
    </div>
  );
};
