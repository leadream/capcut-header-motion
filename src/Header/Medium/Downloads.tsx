import { CSSProperties } from "react";
import styled from "styled-components";
import { Panel, AnimatingListItem } from "./styled";

const Container = styled(Panel)`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding-left: 52px;
  padding-right: 52px;
  width: 384px;
`;

const Texts = styled.div`
  h3 {
    margin: 0;
    margin-bottom: 12px;
    font-weight: 700;
    font-size: 20px;
  }
  p {
    margin: 0;
    font-size: 16px;
    color: #7a7a85;
  }
`;

const Item = styled(AnimatingListItem)`
  text-align: center;
  > img {
    height: 126px;
    margin-bottom: 20px;
  }
  > h3 {
    margin-bottom: 12px;
  }
`;

interface Props {
  isActive: boolean;
  isExpanded: boolean;
}

function Downloads({ isActive, isExpanded }: Props) {
  return (
    <Container as="ul" isActive={isActive}>
      <Item
        isExpanded={isExpanded}
        style={
          {
            "--delay": "80ms",
          } as CSSProperties
        }
      >
        <img src="/capcut-desktop.png" />
        <Texts>
          <h3>Download for Mac</h3>
          <p>The most professional video editing software on the desktop</p>
        </Texts>
      </Item>
      <Item
        isExpanded={isExpanded}
        style={
          {
            "--delay": "160ms",
          } as CSSProperties
        }
      >
        <img src="/capcut-mobile.png" />
        <Texts>
          <h3>Download for mobile</h3>
          <p>Edit wonderful videos anytime, anywhere with your mobile phone</p>
        </Texts>
      </Item>
    </Container>
  );
}

export default Downloads;
