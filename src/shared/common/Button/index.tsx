import { StyledButton } from "./styles";
import { IButtonProps } from "../types";

export const Button = ({
  color,
  fixedWidth,
  type,
  btnSize,
  children,
  onClick,
}: IButtonProps) => (
  <StyledButton btnSize={btnSize} type={type} color={color} fixedWidth={fixedWidth} onClick={onClick}>
    {children}
  </StyledButton>
);