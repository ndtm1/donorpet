import { FunctionComponent } from "react";
import GroupComponent5 from "../components/GroupComponent5";
import OwnerFrame from "../components/OwnerFrame";
import styled from "styled-components";

const DivRoot = styled.div`
  width: 100%;
  position: relative;
  background-color: var(--color4);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 247px;
  box-sizing: border-box;
  gap: 72px 0px;
  letter-spacing: normal;
  @media screen and (max-width: 750px) {
    gap: 72px 0px;
  }
  @media screen and (max-width: 450px) {
    gap: 72px 0px;
  }
`;

const Frame: FunctionComponent = () => {
  return (
    <DivRoot>
      <GroupComponent5 />
      <OwnerFrame />
    </DivRoot>
  );
};

export default Frame;
