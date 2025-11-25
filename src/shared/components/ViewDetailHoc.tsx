import { useNavigate } from "react-router";
import { ArrowLeft } from "./icons/ArrowLeft";
import { HeaderTitle } from "./HeaderTitle";
import { AlertContainer } from "./Alert";
import { SHOW_ALERT_EVENT } from "../../constants/constants";

interface ViewDetailHOCProps {
  title: string;
  skeleton: React.ReactNode;
  children: React.ReactNode;
  status: boolean;
  isError: boolean;
  refetch: () => void;
}

export const ViewDetailHoc = ({
  title,
  refetch,
  skeleton,
  status,
  children,
  isError = false,
}: ViewDetailHOCProps) => {
  const navigate = useNavigate();
  if (isError) {
    document.dispatchEvent(new Event(SHOW_ALERT_EVENT));
  }
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

        <HeaderTitle label={title} className="w-full " />
      </div>

      {status ? skeleton : children}

      <AlertContainer callback={refetch} message="Something went wrong" />
    </div>
  );
};
