export const Description: React.FC<{ description: string }> = ({
  description,
}) => {
  return (
    <p className="text-gray-300 text-sm font-normal leading-relaxed ">
      {description}
    </p>
  );
};
