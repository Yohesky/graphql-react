import { SHOW_ALERT_EVENT } from "../../constants/constants";
import { AlertContainer } from "./Alert";

interface ViewHOCProps {
  header: React.ReactNode;
  list: React.ReactNode;
  actions?: React.ReactNode;
  callback: () => void;
  messageError: string;
  isError: boolean;
}

export const ViewHOC = ({
  header,
  list,
  actions,
  callback,
  messageError,
  isError,
}: ViewHOCProps) => {
  if (isError) {
    document.dispatchEvent(new Event(SHOW_ALERT_EVENT));
  }
  return (
    <div className="flex flex-col gap-y-5 col-span-full">
      {header}

      {list}

      {actions}

      <AlertContainer callback={callback} message={messageError} />
    </div>
  );
};
