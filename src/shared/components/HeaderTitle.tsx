export const HeaderTitle: React.FC<{ label: string }> = ({ label }) => {
  return (
    <header className="flex items-center justify-between pb-2">
      <h1 className="text-[24px] font-bold leading-[1.1] text-[#F2F5F9]">
        {label}
      </h1>
    </header>
  );
};
