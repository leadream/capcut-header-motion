import styled from "styled-components";
import Tools from "./Tools";
import Create from "./Create";
import Downloads from "./Downloads";
import Resource from "./Resource";

interface Props {
  height: number | string;
}

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: ${(p: Props) =>
    typeof p.height === "string" ? p.height : p.height + "px"};
  backdrop-filter: blur(10px);
  background: rgba(0, 0, 0, 0.8);
  border-bottom: 1px solid;
  border-color: rgba(255, 255, 255, 0.16);
  overflow: hidden;
  transition: height 0.24s cubic-bezier(0.4, 0, 0.6, 1);
  text-align: left;
  z-index: 9999;
`;

const Box = styled.div`
  height: 68px;
`;

function LargeMenus({ height, tab }: any) {
  const isExpanded = height !== 0;
  return (
    <Container height={height}>
      <Box />
      <Tools isActive={tab === "tools"} isExpanded={isExpanded} />
      <Create isActive={tab === "create"} isExpanded={isExpanded} />
      <Downloads isActive={tab === "downloads"} isExpanded={isExpanded} />
      <Resource isActive={tab === "resource"} isExpanded={isExpanded} />
    </Container>
  );
}

export default LargeMenus;
