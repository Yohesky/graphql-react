import { Link } from "react-router";

export const Actions = ({ action, id }: { action: string; id: string }) => {
  return (
    <Link
      to={`/characters/details/${id}`}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-sm"
    >
      {action}
    </Link>
  );
};
