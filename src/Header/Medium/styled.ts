import styled, { css } from "styled-components";

interface Props {
  isActive?: boolean;
}

export const Panel = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding-top: 100px;
  padding-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
  transition: opacity 0.24s;
  text-align: left;
  opacity: ${({ isActive = true }: Props) => (isActive ? 1 : 0)};
  pointer-events: ${({ isActive = true }: Props) =>
    isActive ? "auto" : "none"};
  z-index: 1001;
`;

interface ItemProps {
  isExpanded: boolean;
}

const fading = css`
  opacity: 1;
  transform: translateY(0);
`;

export const AnimatingListItem = styled.li`
  opacity: 0;
  transform: translateY(-4px);
  transition-property: opacity, transform;
  transition-duration: 0.32s;
  transition-delay: var(--delay);
  ${(p: ItemProps) => (p.isExpanded ? fading : "")}
`;

export const HorizontalDivdider = styled.hr`
  margin: 0;
  width: 100%;
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.16);
`;
