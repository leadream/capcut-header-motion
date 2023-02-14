import styled, { css } from "styled-components";

interface Props {
  isActive?: boolean;
}

export const Panel = styled.div`
  position: absolute;
  top: 68px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: flex-start;
  gap: 64px;
  margin: 0;
  padding-top: 30px;
  padding-bottom: 60px;
  padding-left: 180px;
  padding-right: 180px;
  transition: opacity 0.24s;
  opacity: ${({ isActive = true }: Props) => (isActive ? 1 : 0)};
  pointer-events: ${({ isActive = true }: Props) =>
    isActive ? "auto" : "none"};
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

export const VerticalDivdider = styled.hr`
  margin: 0;
  width: 0;
  border: none;
  border-right: 1px solid rgba(255, 255, 255, 0.16);
`;
