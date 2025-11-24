export const Actors = ({ actors }: { actors: string[] }) => {
  return (
    <div className="flex flex-wrap mx-auto gap-4">
      {actors.map((actor) => (
        <img className="rounded-md h-12" src={actor} alt="" />
      ))}
    </div>
  );
};
