export const Title: React.FC<{ title: string }> = ({ title }) => {
  return (
    <h3 className="text-white text-lg font-semibold leading-tight">{title}</h3>
  );
};
