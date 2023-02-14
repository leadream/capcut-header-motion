import { useState } from "react";
import styled from "styled-components";
import { HorizontalDivdider } from "./styled";
import data from "../data/tools.json";
import create from "../data/create.json";
import resources from "../data/resource.json";
import ChevronDown from "../../common/ChevronDown";

interface Props {
  visible: boolean;
}

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: ${({ visible }: Props) => (visible ? "100vh" : 0)};
  width: 100%;
  background: rgba(0, 0, 0, 0.97);
  transition: 0.32s all;
  overflow: auto;
  z-index: 1002;
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  height: calc(100vh - 68px);
  margin-top: 68px;
  padding: 20px;
  padding-bottom: 64px;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  overflow: auto;
`;

const Block = styled.div`
  flex: 0 0 auto;
  text-align: left;
  overflow: hidden;
  transition: 0.32s all;
  h2 {
    margin: 0;
    margin-bottom: 26px;
    font-weight: 800;
    font-size: 24px;
    line-height: 32px;
  }
  h3 {
    display: flex;
    align-items: center;
    gap: 4px;
    margin: 0;
    margin-bottom: 32px;
    font-weight: 800;
    font-size: 24px;
    line-height: 32px;
    > svg {
      width: 16px;
      height: 16px;
      transform: rotate(
        ${({ isExpanded }: { isExpanded: boolean }) =>
          isExpanded ? 0 : "180deg"}
      );
      transition: 0.24s transform;
    }
  }
`;

const Columns = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
`;

const Menus = styled.ul`
  list-style: none;
  display: block;
  margin: 0;
  padding: 0;
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: ${({ isTitle }: { isTitle: boolean }) =>
    isTitle ? "20px" : "12px"};
  text-align: left;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  cursor: pointer;
  transition: 0.24s color;
  color: ${({ isTitle }: { isTitle: boolean }) =>
    isTitle ? "#E6E6E6" : "#7A7A85"};
  &:hover {
    color: var(--primary);
  }
`;

const ProductLink = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
  svg {
    width: 20px;
    height: 20px;
  }
`;

const defaultHeights = {
  create: 452,
  resources: 400,
};

function MobileMenus({ visible }: Props) {
  const [tab, setTab] = useState("");
  const [isHover, setIsHover] = useState(false);
  const [heights, setHeights] = useState(defaultHeights);

  function toggleExpand(section) {
    const currentHeight = heights[section];
    setHeights({
      ...heights,
      [section]: currentHeight === 32 ? defaultHeights[section] : 32,
    });
  }

  return (
    <Container visible={visible}>
      <Inner>
        <Block>
          <h2>CapCut Products</h2>
          {data.products.map(({ icon, text }, i) => (
            <ProductLink key={i} href={`#${text}`}>
              <svg dangerouslySetInnerHTML={{ __html: icon }} />
              {text}
            </ProductLink>
          ))}
        </Block>
        <HorizontalDivdider />
        <Block>
          <h3>Tools</h3>
          <Columns>
            {data.tools.map((section, i) => (
              <Menus key={i}>
                {section.map((tool, j) => (
                  <Item key={i + "-" + j} isTitle={j === 0}>
                    {tool}
                  </Item>
                ))}
              </Menus>
            ))}
          </Columns>
        </Block>
        <HorizontalDivdider />
        <Block
          style={{ height: heights.create + "px" }}
          isExpaned={heights.create !== 32}
        >
          <h3 onClick={() => toggleExpand("create")}>
            Create
            <ChevronDown />
          </h3>
          <Columns>
            {create.map((section, i) => (
              <Menus key={i}>
                {section.map((tool, j) => (
                  <Item key={i + "-" + j} isTitle={j === 0}>
                    {tool}
                  </Item>
                ))}
              </Menus>
            ))}
          </Columns>
        </Block>
        <HorizontalDivdider />
        <Block
          style={{ height: heights.resources + "px" }}
          isExpaned={heights.resources !== 32}
        >
          <h3 onClick={() => toggleExpand("resources")}>
            Resources
            <ChevronDown />
          </h3>
          <Columns>
            {resources.map((section, i) => (
              <Menus key={i}>
                {section.map((tool, j) => (
                  <Item key={i + "-" + j} isTitle={j === 0}>
                    {tool}
                  </Item>
                ))}
              </Menus>
            ))}
          </Columns>
        </Block>
      </Inner>
    </Container>
  );
}

export default MobileMenus;
