import Image from "next/image";

type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon?: string;
  variant:
    | "btn_dark_green"
    | "btn_white"
    | "btn_dark_green_outline"
    | "btn_green"
    | "btn_white_text";
  full?: boolean;
};
const Button = ({ type, title, full, icon, variant }: ButtonProps) => {
  return (
    <div>
      <button
        className={`flexCenter gap-3 rounded-full border ${variant} ${full && "w-full"}`}
        type={type}>
        {icon && <Image src={icon} alt={title} width={24} height="24" />}
        <label className="bold-16 whitespace-nowrap">{title}</label>
      </button>
    </div>
  );
};

export default Button;
