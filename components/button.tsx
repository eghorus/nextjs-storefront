type ButtonProps = {
  variant: "primary" | "secondary";
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
};

const Button = ({ variant, onClick, children }: ButtonProps) => {
  return (
    <button
      type="button"
      className={`${
        variant === "primary" ? "bg-indigo-600 text-white" : "bg-indigo-200"
      } flex items-center gap-x-2 rounded border-2 border-transparent p-2 font-semibold transition-all hover:border-indigo-600 hover:bg-white hover:text-indigo-900`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
