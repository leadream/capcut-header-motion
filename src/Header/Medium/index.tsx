import { useState, useMemo } from "react";
import styled, { css } from "styled-components";
import ChevronRight from "../../common/ChevronRight";
import Tools from "./Tools";
import Create from "./Create";
import Resource from "./Resource";
import Downloads from "./Downloads";

interface Props {
  visible: boolean;
  onClose: () => void;
}

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vh;
  background: rgba(0, 0, 0, 0.2);
  opacity: ${({ visible }: Props) => (visible ? 1 : 0)};
  backdrop-filter: blur(15px);
  transition: 0.32s all;
  z-index: 1000;
  @media (min-width: 1080px) {
    display: none;
  }
`;

const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  height: 100vh;
  width: 240px;
  padding: 40px;
  padding-top: 88px;
  background: rgba(0, 0, 0, 0.97);
  transform: translateX(${({ visible }: Props) => (visible ? 0 : "-100%")});
  transition: 0.32s all;
  z-index: 1002;
  @media (min-width: 1080px) {
    display: none;
  }
`;

const Menus = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const activeCSS = css`
  color: var(--primary);
  > svg {
    transform: translateX(2px);
  }
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 4px;
  padding-top: 20px;
  padding-bottom: 20px;
  text-align: left;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.16);
  cursor: pointer;
  transition: 0.24s color;
  ${({ isActive }: { isActive?: boolean }) => (isActive ? activeCSS : "")}
  &:last-child {
    border-bottom: none;
  }
  &:hover {
    color: var(--primary);
  }
  > svg {
    transition: transform 0.24s;
  }
`;

interface PanelProps {
  $width: number | string;
}

const AnimatingPanel = styled.div`
  position: fixed;
  top: 0;
  left: 240px;
  height: 100vh;
  width: ${(p: PanelProps) =>
    typeof p.$width === "string" ? p.$width : p.$width + "px"};
  transition: width 0.32s cubic-bezier(0.4, 0, 0.6, 1);
  background: rgba(0, 0, 0, 0.9);
  overflow: hidden;
`;

// PC 端不同菜单的宽度
const widths: any = {
  home: 0,
  tools: 480,
  create: 480,
  resources: 480,
  downloads: 384,
};

function MediumMenus({ visible, onClose }: Props) {
  const [tab, setTab] = useState("");
  const [isHover, setIsHover] = useState(false);

  function toggleHover() {
    const newIsHover = !isHover;
    setIsHover(newIsHover);
    // 鼠标离开菜单区域
    if (!newIsHover) {
      setTab("");
    }
  }

  const width = useMemo(
    () => (isHover && tab ? widths[tab] : 0),
    [isHover, widths, tab]
  );

  return (
    <div>
      <Overlay visible={visible} onClick={onClose} />
      <Container
        visible={visible}
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
      >
        <Menus>
          <Item
            isActive={tab === "home" && isHover}
            onMouseEnter={() => setTab("home")}
          >
            Home
          </Item>
          <Item
            isActive={tab === "tools" && isHover}
            onMouseEnter={() => setTab("tools")}
          >
            Tools
            <ChevronRight />
          </Item>
          <Item
            isActive={tab === "create" && isHover}
            onMouseEnter={() => setTab("create")}
          >
            Create
            <ChevronRight />
          </Item>
          <Item
            isActive={tab === "resources" && isHover}
            onMouseEnter={() => setTab("resources")}
          >
            Resources
            <ChevronRight />
          </Item>
          <Item
            isActive={tab === "downloads" && isHover}
            onMouseEnter={() => setTab("downloads")}
          >
            Downloads
            <ChevronRight />
          </Item>
        </Menus>
        <AnimatingPanel $width={width}>
          <Tools isActive={tab === "tools"} isExpanded={width !== 0} />
          <Create isActive={tab === "create"} isExpanded={width !== 0} />
          <Resource isActive={tab === "resources"} isExpanded={width !== 0} />
          <Downloads isActive={tab === "downloads"} isExpanded={width !== 0} />
        </AnimatingPanel>
      </Container>
    </div>
  );
}

export default MediumMenus;
