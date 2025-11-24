import { HeaderTitle } from "../../shared/components/HeaderTitle";
import { Button } from "../../shared/components/Button";
import { CharactersList } from "./components/CharactersList";
import { ViewHOC } from "../../shared/components/ViewHOC";
import { baseConfig } from "./config/baseConfig";
import { useInfiniteScroll } from "../../shared/hooks/useInfiniteScroll";
import { NavStatus } from "../episodes/components/NavStatus";
import { useParams } from "react-router";
import { SHOW_ALERT_EVENT } from "../../constants/constants";
import { SkeletonContainer } from "../../shared/components/Skeleton";
import { TrackBuilder } from "../../shared/utils/TrackBuilder";
import { useEffect } from "react";

const initTracks = new TrackBuilder("/characters/all")
  .setLocation("colombia")
  .setTime(Date.now())
  .setView("characters");

export const View = () => {
  const { status = "all" } = useParams();

  useEffect(() => {
    const clonedTracks = initTracks
      .clone()
      .setPath(`characters/${status}`)
      .build();
    console.log("🚀 ~ initTracks:", clonedTracks);
  }, [status]);

  const { data, isFetching, isError, refetch, fetchNextPage } =
    useInfiniteScroll({
      ...baseConfig,
      status,
    });
  const hasData = data && data.length > 0;

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
      list={
        <>
          <CharactersList characters={data ?? []} />
          {isFetching && (
            <SkeletonContainer
              className="col-span-3 md:col-span-1 h-fit"
              type="character"
              number={6}
            />
          )}
        </>
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
