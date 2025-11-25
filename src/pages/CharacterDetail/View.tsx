import { useParams } from "react-router";
import { useCharacterDetails } from "./hooks/useCharacterDetails";
import { CardDetails } from "./components/CardDetails/CardDetails";
import { InfoItem } from "./components/CardDetails/InfoItem";
import { SkeletonContainer } from "../../shared/components/Skeleton";
import { useEffect } from "react";
import { TrackBuilder } from "../../shared/utils/TrackBuilder";
import { ViewDetailHoc } from "../../shared/components/ViewDetailHoc";
const initTracks = new TrackBuilder("detail")
  .setLocation("colombia")
  .setTime(Date.now())
  .setView("character-detail");

export const View = () => {
  const { id } = useParams();
  const { data, isFetching, isError, refetch } = useCharacterDetails(id ?? "1");

  useEffect(() => {
    const clonedTracks = initTracks
      .clone()
      .setPath(`character/details/${id}`)
      .build();
    console.log("🚀 ~ initTracks:", clonedTracks);
  }, []);

  return (
    <ViewDetailHoc
      title="Character details"
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
      <CardDetails
        image={data?.character.image ?? ""}
        name={data?.character.name ?? ""}
        status={data?.character.status ?? "Unknown"}
      >
        <div className="space-y-4">
          <InfoItem
            label="Origin"
            value={data?.character.origin?.name ?? "Unknown"}
          />
          <InfoItem
            label="Current location"
            value={data?.character.location?.name ?? "Unknown"}
          />
          <InfoItem
            label="Episodes participations"
            value={`${data?.character.episode.length ?? 0}`}
          />
        </div>
      </CardDetails>
    </ViewDetailHoc>
  );
};
