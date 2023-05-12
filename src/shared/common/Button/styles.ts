import styled from "styled-components";

export const StyledButton = styled.button<any>`
  background: ${(p) => p.type === 'outline' ? "transparent": p.color || "#2e186a" };
  color: ${(p) => (p.color ? "#2E186A" : "#fff")};
  font-size: 1rem;
  width: fit-content;
  border: 1px solid ${(p) => p.type === 'outline' ? p.color : p.color || "#2e186a" };;
  border-radius: 0;
  padding: 6px 16px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 16px 30px rgb(23 31 114 / 20%);

  &:hover,
  &:active,
  &:focus {
    color: #fff;
    border: 1px solid rgb(255, 130, 92);
    background-color: rgb(255, 130, 92);
  }
`;