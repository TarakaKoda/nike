interface Props {
  label: string;
  iconURL?: string;
  garyButton?: Boolean;
  fullWidth?: Boolean;
}

const Button = ({ label, iconURL, garyButton, fullWidth }: Props) => {
  return (
    <button
      className={`flex items-center justify-center gap-2 rounded-full border ${
        garyButton
          ? "border-slate-gray  text-slate-gray"
          : "border-coral-red bg-coral-red  text-white"
      } px-7 py-4 font-montserrat text-lg leading-none ${
        fullWidth && "w-full"
      }`}
    >
      {label}
      {iconURL && (
        <img src={iconURL} alt="" className="ml-2 h-5 w-5 rounded-full " />
      )}
    </button>
  );
};

export default Button;
