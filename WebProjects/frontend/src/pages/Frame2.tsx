import { FunctionComponent } from "react";
import GroupComponent4 from "../components/GroupComponent4";
import styled from "styled-components";
import Registrationbutton from "../components/Registrationbutton";

const H = styled.h1`
  margin: 0;
  position: relative;
  font-size: var(--font-size);
  font-weight: 400;
  font-family: var(--font);
  color: var(--color-black);
  text-align: center;
  @media screen and (max-width: 750px) {
    font-size: var(--font-size-7xl);
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lgi);
  }
`;
const Fullnameinput = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 31px 0px;
  @media screen and (max-width: 450px) {
    gap: 31px 0px;
  }
`;
const Div = styled.div`
  position: relative;
  font-size: var(--font4-size);
  font-weight: 500;
  font-family: var(--font1);
  color: var(--color4);
  text-align: left;
  @media screen and (max-width: 450px) {
    font-size: var(--font1-size);
  }
`;
const Wrapper = styled.button`
  cursor: pointer;
  border: none;
  padding: var(--padding-lg) var(--padding-mid);
  background-color: var(--color3);
  width: 321px;
  border-radius: var(--br-22xl);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  max-width: 100%;
  &:hover {
    background-color: var(--color-tomato);
  }
`;
const Registrationframe = styled.form`
  margin: 0;
  width: 380px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 0px var(--padding-xl);
  box-sizing: border-box;
  gap: 53px 0px;
  max-width: 100%;
  @media screen and (max-width: 450px) {
    gap: 53px 0px;
  }
`;
const DivRoot = styled.div`
  width: 100%;
  position: relative;
  background-color: var(--color4);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 0px 0px 254px;
  box-sizing: border-box;
  gap: 66px 0px;
  letter-spacing: normal;
  @media screen and (max-width: 750px) {
    gap: 66px 0px;
  }
  @media screen and (max-width: 450px) {
    gap: 66px 0px;
  }
`;

const Frame: FunctionComponent = () => {
  return (
    <DivRoot>
      <GroupComponent4 />
      <Registrationframe>
        <Fullnameinput>
          <Registrationbutton />
        </Fullnameinput>
      </Registrationframe>
    </DivRoot>
  );
};

export default Frame;
