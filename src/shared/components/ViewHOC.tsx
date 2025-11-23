import { AlertContainer } from "./Alert";

interface ViewHOCProps {
  // Define any props that the HOC might need\
  header: React.ReactNode;
  list: React.ReactNode;
  actions?: React.ReactNode;
  callback: () => void;
  messageError: string;
}

export const ViewHOC = ({
  header,
  list,
  actions,
  callback,
  messageError,
}: ViewHOCProps) => {
  return (
    <div className="flex flex-col gap-y-5 col-span-full">
      {header}

      {list}

      {actions}

      <AlertContainer callback={callback} message={messageError} />
    </div>
  );
};
