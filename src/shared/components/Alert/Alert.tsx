export const Alert = ({
  message,
  callback,
}: {
  message: string;
  callback: () => void;
}) => {
  return (
    <div
      className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative top-120 animate-bounce flex justify-between items-center"
      role="alert"
    >
      <strong className="font-bold">{message}</strong>
      <button onClick={callback} className="btn">
        Try again
      </button>
    </div>
  );
};
