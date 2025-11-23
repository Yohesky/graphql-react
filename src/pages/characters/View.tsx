import { HeaderTitle } from "../../shared/components/HeaderTitle";
import { Button } from "../../shared/components/Button";
import { CharactersList } from "./components/CharactersList";
import { ViewHOC } from "../../shared/components/ViewHOC";
import { baseConfig } from "./config/baseConfig";
import { useInfiniteScroll } from "../../shared/hooks/useInfiniteScroll";
import { NavStatus } from "../episodes/components/NavStatus";
import { useParams } from "react-router";
import { SHOW_ALERT_EVENT } from "../../constants/constants";

export const View = () => {
  const { status = "all" } = useParams();

  const { data, isFetching, isError, refetch, fetchNextPage } =
    useInfiniteScroll({
      ...baseConfig,
      status,
    });
  const hasData = data && data.length > 0;

  console.log("🚀 ~ View ~ isError:", isError)
  if (isError) {
    document.dispatchEvent(new Event(SHOW_ALERT_EVENT));
  }

  return (
    <ViewHOC
      messageError="Something went wrong"
      callback={refetch}
      header={
        <>
          <NavStatus />
          <HeaderTitle label="Characters" className="pb-2" />
        </>
      }
      list={<CharactersList characters={data || []} />}
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
