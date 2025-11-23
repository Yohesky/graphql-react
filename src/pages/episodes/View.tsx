import { Button } from "../../shared/components/Button";
import { HeaderTitle } from "../../shared/components/HeaderTitle";
import { ViewHOC } from "../../shared/components/ViewHOC";
import { useInfiniteScroll } from "../../shared/hooks/useInfiniteScroll";
import { EpisodesList } from "./components/EpisodesList";
import { baseConfig } from "./config/baseConfig";

export const View = () => {
  const {
    data = [],
    isFetching,
    fetchNextPage,
  } = useInfiniteScroll(baseConfig);
  const hasData = data && data.length > 0;

  return (
    <ViewHOC
      header={<HeaderTitle label="Episodes" className="pb-2" />}
      list={<EpisodesList episodes={data} />}
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
