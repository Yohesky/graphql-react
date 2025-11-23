import type { Character } from "../../../../shared/interfaces/Character";

export const Alive = () => {
  return (
    <div className="flex">
      <span className="h-3 w-3 bg-green-500 rounded-full mt-1 mr-2"></span>Alive
    </div>
  );
};

export const Dead = () => {
  return (
    <div className="flex">
      <span className="h-3 w-3 bg-red-500 rounded-full mt-1 mr-2"></span>Dead
    </div>
  );
};

export const Unknown = () => {
  return (
    <div className="flex">
      <span className="h-3 w-3 bg-gray-500 rounded-full mt-1 mr-2"></span>
      Unknown
    </div>
  );
};

interface StatusFactoryProps {
  status: Character["status"];
}

export const StatusFactory = ({ status }: StatusFactoryProps) => {
  switch (status) {
    case "Alive":
      return <Alive />;
    case "Dead":
      return <Dead />;
    default:
      return <Unknown />;
  }
};
