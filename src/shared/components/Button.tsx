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
    <button disabled={status} className={`btn ${className}`} onClick={callback}>
      {label}
    </button>
  );
};
