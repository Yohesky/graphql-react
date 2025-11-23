export const HeaderTitle: React.FC<{ label: string; className?: string }> = ({
  label,
  className = "",
}) => {
  return (
    <header className={`flex items-center justify-between  ${className}`}>
      <h1 className="text-[24px] font-bold leading-[1.1] text-[#F2F5F9]">
        {label}
      </h1>
    </header>
  );
};
