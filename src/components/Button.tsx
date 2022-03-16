import { FC } from "react";

interface ButtonProps {
  text: string;
  customStyle: string;
  clickHnadler: () => void;
}

const Button: FC<ButtonProps> = ({ text, customStyle, clickHnadler }) => {
  return (
    <button className={customStyle} onClick={clickHnadler}>
      {text}
    </button>
  );
};

export default Button;
