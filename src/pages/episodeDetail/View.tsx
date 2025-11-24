import { useNavigate, useParams } from "react-router";

import { ArrowLeft } from "../../shared/components/icons/ArrowLeft";
import { CardDetail } from "./components/CardDetail";
import { HeaderTitle } from "../../shared/components/HeaderTitle";
import { Actors } from "./components/CardDetail/Actors";
import { useEpisodeDetails } from "./hooks/useEpisodeDetails";
import { AlertContainer } from "../../shared/components/Alert";
import { SkeletonContainer } from "../../shared/components/Skeleton";
import { SHOW_ALERT_EVENT } from "../../constants/constants";

export const View = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isError, isFetching, refetch } = useEpisodeDetails(id ?? "");

  if (isError) {
    document.dispatchEvent(new Event(SHOW_ALERT_EVENT));
  }

  return (
    <div className="flex flex-col gap-y-2 col-span-full px-4">
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

        <HeaderTitle label="Episodes Details" className="w-full " />
      </div>

      {isFetching ? (
        <>
          <SkeletonContainer
            number={1}
            type="detail"
            className="col-span-full items-center mt-50"
          />
        </>
      ) : (
        <CardDetail
          className="mt-5"
          name={data?.name ?? ""}
          episode={data?.episode ?? ""}
          airDate={data?.date ?? ""}
          charactersTotal={data?.characters.length ?? 1}
        >
          <Actors actors={data?.actors ?? []} />
        </CardDetail>
      )}

      <AlertContainer callback={refetch} message="Something went wrong" />
    </div>
  );
};
