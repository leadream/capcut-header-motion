import { useState, useMemo } from "react";
import styled, { css } from "styled-components";
import { HelpCircle, X } from "react-feather";
import Button from "../common/Button";
import ChevronDown from "../common/ChevronDown";
import List from "../common/List";
import LargeMenus from "./Large";
import MediumMenus from "./Medium";
import SmallMenus from "./Small";

const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 68px;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.4) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  z-index: 10000;
  @media (max-width: 1080px) {
    background: transparent;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 2000px;
  padding: 6px 20px;
`;

const MediumMenuIcon = styled.div`
  width: 24px;
  height: 24px;
  cursor: pointer;
  display: none;
`;

const MobileMenuIcon = styled.div`
  width: 24px;
  height: 24px;
  cursor: pointer;
  display: none;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  margin-right: 32px;
  @media (max-width: 1080px) and (min-width: 481px) {
    ${MediumMenuIcon} {
      display: block;
    }
  }
  @media (max-width: 480px) {
    ${MobileMenuIcon} {
      display: block;
    }
  }
`;

const activeCSS = css`
  color: var(--primary);
  > svg {
    transform: translateY(2px);
  }
`;

const Link = styled.a`
  display: flex;
  align-items: center;
  gap: 4px;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-size: 14px;
  font-weight: bold;
  transition: color 0.24s;
  cursor: pointer;
  ${({ isActive }: { isActive: boolean }) => (isActive ? activeCSS : "")}
  > svg {
    transition: transform 0.24s;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 32px;
  flex: 1;
  > img {
    display: block;
    height: 24px;
  }
  @media (max-width: 1080px) {
    ${Link} {
      display: none;
    }
  }
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  @media (max-width: 480px) {
    display: none;
  }
`;

const MobileRight = styled.div`
  padding: 4px;
  @media (min-width: 480px) {
    display: none;
  }
`;

// PC 端不同菜单的高度
const heights: any = {
  tools: 416,
  create: 362,
  resource: 362,
  downloads: 284,
};

function Header() {
  const [isHover, setIsHover] = useState<boolean>(false);
  const [tab, setTab] = useState<any>("");
  const [verticalExpanded, setVerticalExpanded] = useState<boolean>(false);
  const [mobileExpanded, setMobileExpanded] = useState<boolean>(false);

  const height = useMemo(() => {
    return isHover && tab ? heights[tab] : 0;
  }, [isHover, heights, tab]);

  function toggleHover() {
    const newIsHover = !isHover;
    setIsHover(newIsHover);
    // 鼠标离开菜单区域
    if (!newIsHover) {
      setTab("");
    }
  }

  return (
    <div onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
      <Container>
        <Wrapper>
          <Left>
            <MediumMenuIcon
              onClick={() => setVerticalExpanded(!verticalExpanded)}
            >
              {verticalExpanded ? <X /> : <List />}
            </MediumMenuIcon>
            <MobileMenuIcon onClick={() => setMobileExpanded(!mobileExpanded)}>
              {mobileExpanded ? <X /> : <List />}
            </MobileMenuIcon>
            <img alt="logo" src="/Logo.svg" />
          </Left>
          <Nav>
            <Link
              isActive={tab === "tools" && isHover}
              onMouseEnter={() => setTab("tools")}
            >
              Tools
              <ChevronDown />
            </Link>
            <Link
              isActive={tab === "create" && isHover}
              onMouseEnter={() => setTab("create")}
            >
              Create
              <ChevronDown />
            </Link>
            <Link
              isActive={tab === "resource" && isHover}
              onMouseEnter={() => setTab("resource")}
            >
              Resource
              <ChevronDown />
            </Link>
            <Link
              isActive={tab === "downloads" && isHover}
              onMouseEnter={() => setTab("downloads")}
            >
              Download
              <ChevronDown />
            </Link>
          </Nav>
          <Right>
            <Button variant="outline">Log in</Button>
            <Button>Sign up</Button>
          </Right>
          <MobileRight>
            <HelpCircle />
          </MobileRight>
        </Wrapper>
      </Container>
      <LargeMenus height={height} tab={tab} />
      <MediumMenus
        visible={verticalExpanded}
        onClose={() => setVerticalExpanded(false)}
      />
      <SmallMenus visible={mobileExpanded} />
    </div>
  );
}

export default Header;
