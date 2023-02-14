import styled, { css } from "styled-components";

const smallSize = css`
  height: 32px;
  padding: 4px 12px;
  font-size: 14px;
`;

const normalSize = css`
  height: 48px;
  padding: 8px 16px;
  font-size: 16px;
`;

const primaryVariant = css`
  border: 1px solid var(--primary);
  color: #fff;
  background: var(--primary);
`;

const outlineVariant = css`
  border: 1px solid rgba(255, 255, 255, 0.32);
  color: #fff;
  background: transparent;
`;

const linkVariant = css`
  font-weight: 500;
  border: 1px solid transparent;
  color: var(--primary);
  background: transparent;
`;

const variantsMap = {
  primary: primaryVariant,
  outline: outlineVariant,
  link: linkVariant,
};

interface Props {
  full?: boolean;
  size?: "default" | "large";
  variant?: "primary" | "outline" | "link";
}

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  width: ${({ full }: Props) => (full ? "100%" : "auto")};
  ${({ size = "default" }: Props) =>
    size === "default" ? smallSize : normalSize}
  border-radius: 6px;
  font-weight: 600;
  text-align: center;
  line-height: 16px;
  text-decoration: none;
  ${({ variant = "primary" }: Props) => variantsMap[variant]}
  cursor: pointer;
  &:disabled {
    opacity: 0.32;
    cursor: not-allowed;
  }
`;

export default Button;
