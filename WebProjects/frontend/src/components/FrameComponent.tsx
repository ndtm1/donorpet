import { FunctionComponent } from "react";
import styled from "styled-components";

const Div = styled.div`
  position: relative;
`;
const WrapperFrame6Child = styled.input`
  outline: none;
  padding: var(--padding-7xs) var(--padding-3xl) var(--padding-7xs)
    var(--padding-13xl);
  font-family: var(--font1);
  font-size: var(--font-size-sm);
  color: var(--color6);
  border: none;
  width: 100%;
  height: 100%;
  background: transparent;
  position: relative;
  z-index: 3;
`;
const NotesBook1Icon = styled.img`
  height: 24px;
  width: 9%;
  position: absolute;
  overflow: hidden;
  flex-shrink: 0;
  z-index: 1;
  right: 22px;
  top: 6px;
  pointer-events: none;
`;
const WrapperFrame = styled.div`
  position: relative;
  border: 1px solid var(--color6);
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

const FrameComponent: FunctionComponent = () => {
  return (
    <ParentRoot>
      <Div>Дата рождения</Div>
      <WrapperFrame>
        <WrapperFrame6Child id="date" placeholder="дд.мм.гггг" type="date" />
        <NotesBook1Icon alt="" />
        <NotesBook1Icon alt="" />
      </WrapperFrame>
    </ParentRoot>
  );
};

export default FrameComponent;
