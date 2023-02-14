import { CSSProperties } from "react";
import styled from "styled-components";
import { Panel, AnimatingListItem, HorizontalDivdider } from "./styled";
import { startTimes } from "../constants";
import { products, tools } from "../data/tools.json";

const Container = styled(Panel)`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 480px;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
`;

const Block = styled.div`
  h2 {
    margin: 0;
    margin-bottom: 32px;
    font-weight: 700;
    font-size: 20px;
    line-height: 32px;
  }
`;

const ProductsBlock = styled.div``;

const ToolsBlock = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  h3 {
    margin: 0;
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    color: #7a7a85;
    font-weight: 700;
  }
  > ul {
    flex: 1;
  }
`;

const Item = styled(AnimatingListItem)`
  font-size: 14px;
  font-weight: 500;
  a {
    display: flex;
    align-items: center;
    gap: 16px;
    color: #fff;
    transition: 0.24s color;
    &:hover {
      color: var(--primary);
    }
    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

function Tools({ isActive, isExpanded }: any) {
  return (
    <Container isActive={isActive}>
      <Block>
        <h2>CapCut Products</h2>
        <ProductsBlock as="ul">
          {products.map((item: any, i: number) => (
            <Item
              key={i}
              isExpanded={isExpanded}
              style={
                {
                  "--delay": `${startTimes[0] + i * 20 + 80}ms`,
                } as CSSProperties
              }
            >
              <a href={`#${item.text}`}>
                <svg dangerouslySetInnerHTML={{ __html: item.icon }} />
                {item.text}
              </a>
            </Item>
          ))}
        </ProductsBlock>
      </Block>
      <HorizontalDivdider />
      <Block>
        <h2>Tools</h2>
        <ToolsBlock>
          {tools.map((items: any, i: number) => (
            <ul key={i}>
              {items.map((text: string, j: number) => (
                <Item
                  isExpanded={isExpanded}
                  key={i + "-" + j}
                  style={
                    {
                      "--delay": `${
                        startTimes[i + 1] + j * 20 + (j === 0 ? 80 : 100)
                      }ms`,
                    } as CSSProperties
                  }
                >
                  {j === 0 ? <h3>{text}</h3> : <a href={`#${text}`}>{text}</a>}
                </Item>
              ))}
            </ul>
          ))}
        </ToolsBlock>
      </Block>
    </Container>
  );
}

export default Tools;
