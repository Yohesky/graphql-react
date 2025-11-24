import { Link } from "react-router";
import { ArrowRight } from "./icons/ArrowRight";

interface Props {
  children: React.ReactNode;
  extraChildren: React.ReactNode;
  image: string;
  href: string;
  className?: string;
}

export const Card = ({
  image,
  children,
  extraChildren,
  className = "",
  href,
}: Props) => {
  return (
    <div className={`flex gap-x-2 rounded-xl h-25 bg-[#151c23] ${className}`}>
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
      <Link
        to={href}
        className="flex justify-center items-center text-[#787e82]"
      >
        <div>
          <ArrowRight />
        </div>
      </Link>
    </div>
  );
};
