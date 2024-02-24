import { FunctionComponent } from "react";
import Header from "../components/Header";
import styled from "styled-components";
import History from "../components/History";
import CompanyInfo from "../components/CompanyInfo";
import EventsText from "../components/EventsText";
import DonorSearchFirst from "../components/DonorSearchFirst";

const EventsFrameChild = styled.img`
  height: 855.4px;
  flex: 1;
  position: relative;
  max-width: 100%;
  overflow: hidden;
  object-fit: fill;
`;
const H = styled.h1`
  margin: 0 !important;
  width: 429px;
  position: absolute;
  top: 102.66px;
  left: 608px;
  font-size: inherit;
  font-weight: 400;
  font-family: "Super Webcomic Bros. (Rus by yakustick)";
  display: inline-block;
  transform: rotate(-5.09deg);
  transform-origin: 0 0;
  z-index: 1;
  @media screen and (max-width: 1050px) {
    font-size: var(--font-size-29xl);
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-10xl);
  }
`;
const EventsFrame = styled.section`
  width: 2210px;
  margin: 0 !important;
  position: absolute;
  bottom: 1322px;
  left: -450px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: left;
  font-size: var(--font2-size);
  color: var(--color);
  font-family: var(--font);
`;
const GroupFrames = styled.section`
  width: 1032px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-xl) 296px;
  box-sizing: border-box;
  max-width: 100%;
  @media screen and (max-width: 750px) {
    padding-bottom: 192px;
    box-sizing: border-box;
  }
`;
const Child = styled.div`
  width: 100px;
  height: 100px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  display: none;
  z-index: 6;
`;
const GroupFrames1 = styled.div`
  align-self: stretch;
  width: 1440px;
  position: relative;
  background-color: #d9d9d9;
  flex-shrink: 0;
  max-width: 104%;
`;
const ChelseaRectangle = styled.section`
  align-self: stretch;
  height: 382px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 61px 0px 0px;
  box-sizing: border-box;
  max-width: 100%;
  @media screen and (max-width: 1200px) {
    padding-right: 30px;
    box-sizing: border-box;
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
  padding: 0px 0px var(--padding-43xl);
  box-sizing: border-box;
  gap: 24px 0px;
  letter-spacing: normal;
`;

const Frame: FunctionComponent = () => {
  return (
    <DivRoot>
      <Header />
      <EventsFrame>
        <EventsFrameChild loading="eager" alt="" src="/blob4.png"/>
        <H>События</H>
      </EventsFrame>
      <History />
      <GroupFrames>
        <CompanyInfo />
      </GroupFrames>
      <EventsText />
      <DonorSearchFirst />
      <Child />
      <ChelseaRectangle>
        <GroupFrames1 />
      </ChelseaRectangle>
    </DivRoot>
  );
};

export default Frame;
