import { useParams } from "react-router";

import { CardDetail } from "./components/CardDetail";
import { Actors } from "./components/CardDetail/Actors";
import { useEpisodeDetails } from "./hooks/useEpisodeDetails";
import { SkeletonContainer } from "../../shared/components/Skeleton";
import { ViewDetailHoc } from "../../shared/components/ViewDetailHoc";

export const View = () => {
  const { id } = useParams();
  const { data, isError, isFetching, refetch } = useEpisodeDetails(id ?? "");

  return (
    <ViewDetailHoc
      title="Episode details"
      isError={isError}
      status={isFetching}
      refetch={refetch}
      skeleton={
        <SkeletonContainer
          type="detail"
          number={1}
          className="col-span-full items-center mt-50"
        />
      }
    >
      <CardDetail
        className="mt-5"
        name={data?.name}
        episode={data?.episode}
        airDate={data?.date}
        charactersTotal={data?.characters.length ?? 1}
      >
        <Actors actors={data?.actors ?? []} />
      </CardDetail>
    </ViewDetailHoc>
  );
};
