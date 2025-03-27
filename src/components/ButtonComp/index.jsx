import { Button } from "@heroui/react";
import classNames from "classnames"; 

const CustomButton = ({
  variant = "primary",
  otherClasses = "",
  label,
  onClick,
  href,
  icon,
  ...props
}) => {
  const buttonClasses = classNames(
    "cursor-pointer font-instrument-sans transition-all duration-300 ease-in-out group relative overflow-hidden flex items-center gap-2",
    {
      "border border-2-[#302952] hover:bg-[#302952] hover:text-white": variant === "bordered",
      "bg-primary px-5 py-2 text-white hover:bg-primary-dark": variant === "primary",
    },
    otherClasses
  );

  const handleClick = (e) => {
    console.log("Button clicked!");
    if (onClick) {
      onClick(e); 
    }
  };

  const buttonContent = (
    <>
      {icon && typeof icon === "string" && <img src={icon} alt="icon" className="w-5 h-5" />}
      <span className="relative z-10">{label}</span>
      <span className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
    </>
  );

  if (href) {
    return (
      <a href={href} className={buttonClasses} {...props}>
        {buttonContent}
      </a>
    );
  }

  return (
    <Button color={variant} onClick={handleClick} {...props} className={buttonClasses}>
      {buttonContent}
    </Button>
  );
};

export default CustomButton;
