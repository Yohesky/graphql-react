interface ViewHOCProps {
  // Define any props that the HOC might need\
  header: React.ReactNode;
  list: React.ReactNode;
  actions?: React.ReactNode;
}

export const ViewHOC = ({ header, list, actions }: ViewHOCProps) => {
  return (
    <div className="flex flex-col gap-y-5 col-span-full">
      {header}

      {list}

      {actions}
    </div>
  );
};
