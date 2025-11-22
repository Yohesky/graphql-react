import type { Character } from "../../../../shared/interfaces/Character";
import { StatusFactory } from "./StatusFactory";

export const Status = ({ status }: { status: Character["status"] }) => {
  return (
    <div
      className="text-gray-300 text-sm font-normal leading-relaxed text-center"
    >
      <StatusFactory status={status} />
    </div>
  );
};
