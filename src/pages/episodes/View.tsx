import { Button } from "../../shared/components/Button";
import { HeaderTitle } from "../../shared/components/HeaderTitle";
import { SkeletonContainer } from "../../shared/components/Skeleton/SkeletonContainer";
import { ViewHOC } from "../../shared/components/ViewHOC";
import { useInfiniteScroll } from "../../shared/hooks/useInfiniteScroll";
import { EpisodesList } from "./components/EpisodesList";
import { baseConfig } from "./config/baseConfig";

export const View = () => {
  const {
    data = [],
    isFetching,
    fetchNextPage,
    refetch,
  } = useInfiniteScroll(baseConfig);
  const hasData = data && data.length > 0;

  return (
    <ViewHOC
      callback={refetch}
      messageError="Something went wrong"
      header={<HeaderTitle label="Episodes" className="pb-2" />}
      list={
        isFetching ? (
          <SkeletonContainer
            className="col-span-full md:col-span-2 items-start"
            type="episode"
            number={5}
          />
        ) : (
          <EpisodesList episodes={data} />
        )
      }
      actions={
        hasData && (
          <Button
            status={isFetching}
            callback={() => fetchNextPage()}
            label={isFetching ? "Loading..." : "Load More"}
          />
        )
      }
    />
  );
};
