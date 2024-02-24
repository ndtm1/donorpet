import { FunctionComponent, type CSSProperties } from "react";
import styled from "styled-components";

export type FrameComponent1Type = {
  prop?: string;

  /** Style props */
  divDisplay?: CSSProperties["display"];
};

const Div = styled.div<{ divDisplay?: CSSProperties["display"] }>`
  position: relative;
  font-size: var(--font-size-xs);
  font-family: var(--font-inter);
  color: var(--color7);
  text-align: left;
  display: ${(p) => p.divDisplay};
`;
const WrapperRoot = styled.button`
  cursor: pointer;
  border: 1px solid var(--color6);
  padding: var(--padding-smi) var(--padding-13xl);
  background-color: var(--color4);
  height: 32px;
  width: 78px;
  border-radius: var(--br-2xs);
  box-sizing: border-box;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: var(--color-gainsboro-100);
    border: 1px solid var(--color-silver);
    box-sizing: border-box;
  }
`;

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  prop,
  divDisplay,
}) => {
  return (
    <WrapperRoot>
      <Div divDisplay={divDisplay}>{prop}</Div>
    </WrapperRoot>
  );
};

export default FrameComponent1;
