import { Fragment, CSSProperties } from "react";
import styled from "styled-components";
import { Panel, AnimatingListItem, VerticalDivdider } from "./styled";
import { startTimes } from "../constants";
import data from "../data/create.json";

const Container = styled(Panel)`
  gap: 60px;
  ul {
    list-style: none;
    width: 160px;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
`;

const Item = styled(AnimatingListItem)`
  font-size: 14px;
  font-weight: 500;
  &.title {
    color: #7a7a85;
    font-weight: 700;
  }
  a {
    color: #fff;
    transition: 0.24s color;
    &:hover {
      color: var(--primary);
    }
  }
`;

function Create({ isActive, isExpanded }: any) {
  return (
    <Container isActive={isActive}>
      {data.map((items, i) => (
        <Fragment key={i}>
          <ul>
            {items.map((text: string, j: number) => (
              <Item
                key={i + "-" + j}
                className={j === 0 ? "title" : ""}
                style={
                  {
                    "--delay": `${
                      startTimes[i] + j * 20 + (j === 0 ? 80 : 100)
                    }ms`,
                  } as CSSProperties
                }
                isExpanded={isExpanded}
              >
                {j === 0 ? text : <a href={`#${text}`}>{text}</a>}
              </Item>
            ))}
          </ul>
          {i !== data.length - 1 && <VerticalDivdider key={"divider" + i} />}
        </Fragment>
      ))}
    </Container>
  );
}

export default Create;
