import { HeaderTitle } from "../../shared/components/HeaderTitle";
import { Button } from "../../shared/components/Button";
import { CharactersList } from "./components/CharactersList";
import { ViewHOC } from "../../shared/components/ViewHOC";
import { baseConfig } from "./config/baseConfig";
import { useInfiniteScroll } from "../../shared/hooks/useInfiniteScroll";

export const View = () => {
  const { data, isFetching, fetchNextPage } = useInfiniteScroll(baseConfig);
  const hasData = data && data.length > 0;
  return (
    <ViewHOC
      header={<HeaderTitle label="Characters" className="pb-2" />}
      list={<CharactersList characters={data || []} />}
      actions={
        hasData && (
          <Button
            status={isFetching}
            callback={() => fetchNextPage()}
            label={isFetching ? "Loading..." : "Load More"}
            className="w-full"
          />
        )
      }
    />
  );
};
