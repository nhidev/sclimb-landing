import { StyledButton } from "./styles";
import { IButtonProps } from "../types";

export const Button = ({
  color,
  fixedWidth,
  type,
  children,
  onClick,
}: IButtonProps) => (
  <StyledButton type={type} color={color} fixedWidth={fixedWidth} onClick={onClick}>
    {children}
  </StyledButton>
);