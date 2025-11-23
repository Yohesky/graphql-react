interface Props {
  children: React.ReactNode;
  actions?: React.ReactNode;
  image: string;
  className?: string;
  status: React.ReactNode;
}

export const Card = ({
  image,
  children,
  actions,
  status,
  className = "",
}: Props) => {
  return (
    <div
      className={`flex flex-col gap-y-2 rounded-xl h-25 bg-[#151c23] ${className}`}
    >
      <div className="p-2 md:mx-auto md:p-0.5">
        <img className="object-fit rounded-xl" src={image} alt="" />
      </div>
      <div className="flex gap-2 justify-center">{children}</div>
      <div className="flex gap-2 justify-center">{status}</div>
      <div className="flex gap-2 justify-center pb-5">{actions}</div>
    </div>
  );
};
