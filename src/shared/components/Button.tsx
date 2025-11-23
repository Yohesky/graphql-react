interface ButtonProps {
  className?: string;
  label: string;
  callback: () => void;
  status: boolean;
}

export const Button = ({
  className = "",
  label,
  status,
  callback,
}: ButtonProps) => {
  return (
    <button
      disabled={status}
      className={`btn w-full md:w-1/3 mx-auto mt-4 mb-8 ${className}`}
      onClick={callback}
    >
      {label}
    </button>
  );
};
