import styles from "./Button.module.scss";
import PropTypes from "prop-types";

export enum ButtonTypes {
  PRIMARY = "primary",
  OUTLINE = "outline",
  WHITE = "white",
}

const Button = ({
  type,
  onClick = () => {},
  name,
  href,
  classes = "",
  otherProps,
}: {
  type: ButtonTypes;
  onClick?: () => void;
  name: string;
  href: string;
  classes?: string;
  otherProps?: Record<string, string>;
}) => {
  const baseClasses = "inline-flex items-center justify-center font-display font-semibold transition-all duration-300 active:scale-95";
  
  const typeClasses = {
    [ButtonTypes.PRIMARY]: "bg-gradient-to-r from-accent-primary to-accent-secondary text-white shadow-lg shadow-accent-primary/20 hover:shadow-accent-primary/40 hover:-translate-y-1",
    [ButtonTypes.OUTLINE]: "border border-white/20 bg-white/5 backdrop-blur-md hover:bg-white/10 hover:border-white/40 text-white hover:-translate-y-1",
    [ButtonTypes.WHITE]: "bg-white text-black hover:bg-gray-100",
  };

  return (
    <a
      {...otherProps}
      onClick={onClick}
      href={href}
      className={`${baseClasses} ${typeClasses[type]} ${classes}`}
    >
      {name}
    </a>
  );
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  name: PropTypes.string.isRequired,
  href: PropTypes.string,
  classes: PropTypes.string,
};

export default Button;
