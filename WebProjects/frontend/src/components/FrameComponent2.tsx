import { FunctionComponent } from "react";
import styled from "styled-components";

export type FrameComponent2Type = {
  prop?: string;
  frame6Id?: string;
};

const Div = styled.div`
  position: relative;
`;
const ComponentChild = styled.input`
  border: 1px solid var(--color6);
  outline: none;
  background-color: var(--color4);
  align-self: stretch;
  height: 36px;
  border-radius: var(--br-2xs);
  box-sizing: border-box;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-4xs) var(--padding-12xl) var(--padding-3xs);
  font-family: var(--font1);
  font-size: var(--font-size-sm);
  color: var(--color4);
  min-width: 154px;
`;
const ParentRoot = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-11xs);
  gap: 6px 0px;
  text-align: left;
  font-size: var(--font-size-sm);
  color: var(--color7);
  font-family: var(--font1);
`;

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  prop,
  frame6Id,
}) => {
  return (
    <ParentRoot>
      <Div>{prop}</Div>
      <ComponentChild id={frame6Id} type="text" />
    </ParentRoot>
  );
};

export default FrameComponent2;
