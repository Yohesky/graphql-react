import { useNavigate, useParams } from "react-router";
import { HeaderTitle } from "../../shared/components/HeaderTitle";
import { useCharacterDetails } from "./hooks/useCharacterDetails";
import { CardDetails } from "./components/CardDetails/CardDetails";
import { InfoItem } from "./components/CardDetails/InfoItem";
import { ArrowLeft } from "../../shared/components/icons/ArrowLeft";
import { AlertContainer } from "../../shared/components/Alert";
import { SkeletonContainer } from "../../shared/components/Skeleton";

export const View = () => {
  const { id } = useParams();
  const { data, isFetching, refetch } = useCharacterDetails(id ?? "1");

  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-y-2 col-span-full ">
      <div className="flex gap-5 items-center  mt-5 w-full mx-auto max-w-md ">
        <div
          className="flex-1 cursor-pointer"
          onClick={() => navigate(-1)}
          role="button"
          aria-label="Go back"
          tabIndex={0}
        >
          <ArrowLeft />
        </div>

        <HeaderTitle label="Character Details" className="w-full " />
      </div>

      {isFetching ? (
        <SkeletonContainer
          type="detail"
          number={1}
          className="col-span-full items-center mt-50"
        />
      ) : (
        <CardDetails
          image={data?.character.image ?? ""}
          name={data?.character.name ?? ""}
          status={data?.character.status ?? "Unknown"}
        >
          <div className="space-y-4">
            <InfoItem
              label="Origen"
              value={data?.character.origin?.name ?? "Unknown"}
            />
            <InfoItem
              label="Ubicación actual"
              value={data?.character.location?.name ?? "Unknown"}
            />
            <InfoItem
              label="Apariciones en episodios"
              value={`${data?.character.episode.length ?? 0}`}
            />
          </div>
        </CardDetails>
      )}

      <AlertContainer callback={refetch} message="Something went wrong" />
    </div>
  );
};
