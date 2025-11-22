import { ArrowRight } from "./icons/ArrowRight";

interface Props {
  children: React.ReactNode;
  extraChildren: React.ReactNode;
  image: string;
  href: string;
}

export const Card = ({ image, children, extraChildren }: Props) => {
  return (
    <div className="flex  gap-x-2 rounded-xl h-25 bg-[#151c23]">
      <img
        width="150"
        className="aspect-4/5 object-fit rounded-tl-xl rounded-bl-xl"
        src={image}
        alt=""
      />
      <div className="flex flex-col gap-2 justify-center flex-1">
        {children}
        {extraChildren}
      </div>
      <div className="flex justify-center items-center text-[#787e82]">
        <ArrowRight />
      </div>
    </div>
  );
};
