import { FunctionComponent } from "react";
import GroupComponent6 from "../components/GroupComponent6";
import ProfileFrame from "../components/ProfileFrame";
import styled from "styled-components";

const DivRoot = styled.div`
  width: 100%;
  position: relative;
  background-color: var(--color4);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 0px 0px 502px;
  box-sizing: border-box;
  gap: 122px 0px;
  letter-spacing: normal;
  @media screen and (max-width: 975px) {
    gap: 122px 0px;
  }
  @media screen and (max-width: 450px) {
    gap: 122px 0px;
  }
`;

const Frame: FunctionComponent = () => {
  return (
    <DivRoot>
      <GroupComponent6 />
      <ProfileFrame />
    </DivRoot>
  );
};

export default Frame;
