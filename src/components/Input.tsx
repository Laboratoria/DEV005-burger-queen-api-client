import { SVGProps, ComponentType, InputHTMLAttributes, useState } from "react";
import EyeSlashIcon from "../icons/EyeSlashIcon";
import EyeIcon from "../icons/EyeIcon";
interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon?: ComponentType<SVGProps<SVGSVGElement>>;
  type?: string;
}
const Input = ({ label, icon, type, ...props }: Props) => {
  const [showPassword, setShowPassword] = useState(false);
  const Icon = icon;
  return (
    <>
      <label>{label}:</label>
      <div className="relative mt-0.5 mb-2">
        <input
          placeholder={label}
          type={
            type === "password" ? (showPassword ? "text" : "password") : type
          }
          {...props}
          className={`border-2 border-[#161515] border-opacity-40 rounded-[9.5px] w-full h-[53px] ${
            icon ? "pl-11 pr-5" : "px-3"
          }`}
        />
        {Icon && <Icon className="absolute top-3 left-2" />}
        {type === "password" && (
          <>
            {showPassword ? (
              <button type="button" onClick={() => setShowPassword(false)}>
                <EyeSlashIcon className="cursor-pointer absolute right-2 top-3" />
              </button>
            ) : (
              <button type="button" onClick={() => setShowPassword(true)}>
                <EyeIcon className="cursor-pointer absolute right-2 top-3" />
              </button>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default Input;
