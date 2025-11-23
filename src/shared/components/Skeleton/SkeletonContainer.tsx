import { SkeletonCharacter } from "./SkeletonCharacter";
import { SkeletonDetail } from "./SkeletonDetail";
import { SkeletonEpisodes } from "./SkeletonEpisodes";

const skeletons = {
  character: SkeletonCharacter,
  episode: SkeletonEpisodes,
  detail: SkeletonDetail,
};

export const SkeletonContainer: React.FC<{
  type: "character" | "episode" | "detail";
  number: number;
  className?: string;
}> = ({ type, number, className = "" }) => {
  const Component = skeletons[type];
  return (
    <div className="grid grid-cols-6 gap-5 row-auto auto-rows-auto">
      {Array.from({ length: number }).map((_, index) => (
        <Component className={className} key={index} />
      ))}
    </div>
  );
};
