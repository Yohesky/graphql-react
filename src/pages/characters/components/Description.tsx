export const Description = ({
  description,
  title,
}: {
  description: string;
  title: string;
}) => {
  return (
    <div className="flex flex-col items-center gap-y-2">
      <p className="text-sm text-[#787e82] line-clamp-1">{title} </p>
      <p className="text-sm text-[#787e82]">{description}</p>
    </div>
  );
};
