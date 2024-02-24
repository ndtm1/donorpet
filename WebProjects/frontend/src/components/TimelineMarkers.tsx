import { FunctionComponent } from "react";
import GroupComponent from "./GroupComponent";
import styled from "styled-components";

const Div = styled.div`
  align-self: stretch;
  width: 48px;
  position: relative;
  display: inline-block;
  z-index: 2;
  @media screen and (max-width: 450px) {
    font-size: var(--font4-size);
  }
`;
const FrameChild = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: -0.4px;
  right: 0px;
  bottom: 0.4px;
  left: 0px;
  border-radius: 50%;
  background-color: var(--color1);
  border: 0px solid var(--color-black);
  box-sizing: border-box;
  z-index: 1;
`;
const MoveCrossOverIcon = styled.img`
  position: absolute;
  top: 12px;
  left: 93.8px;
  width: 38.4px;
  height: 38.4px;
  overflow: hidden;
  object-fit: contain;
  z-index: 2;
`;
const EllipseParent = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  margin: 0 !important;
  top: 0.4px;
  right: 0px;
  bottom: -0.4px;
  left: 0px;
`;
const Parent1 = styled.div`
  height: 66px;
  width: 159px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-mid) var(--padding-14xl) var(--padding-xl);
  box-sizing: border-box;
  position: relative;
`;
const SharingExperienceChild = styled.img`
  height: 100%;
  width: 100%;
  position: absolute;
  margin: 0 !important;
  top: 0.6px;
  right: -0.3px;
  bottom: -0.6px;
  left: 0px;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const Div1 = styled.div`
  height: 95px;
  flex: 1;
  position: relative;
  display: inline-block;
  max-width: 100%;
  z-index: 1;
`;
const Image7Icon = styled.img`
  height: 277.5px;
  width: 466.1px;
  position: absolute;
  margin: 0 !important;
  top: -43px;
  left: -81px;
  border-radius: var(--br-2xs-1);
  object-fit: cover;
  z-index: 1;
`;
const SharingExperience = styled.div`
  width: 459px;
  margin: 0 !important;
  position: absolute;
  right: 50px;
  bottom: 34px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-end;
  padding: var(--padding-26xl) var(--padding-21xl) var(--padding-26xl)
    var(--padding-52xl);
  box-sizing: border-box;
  min-height: 404px;
  max-width: 100%;
  font-size: var(--font1-size);
  color: var(--color);
  font-family: var(--font-inter);
`;
const FrameParent = styled.div`
  height: 481px;
  width: 590px;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-end;
  position: relative;
  max-width: 100%;
`;
const ChelseaStory = styled.div`
  width: 1377px;
  overflow-x: auto;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px var(--padding-xl);
  box-sizing: border-box;
  gap: 0px 44px;
  max-width: 100%;
  z-index: 1;
  @media screen and (max-width: 750px) {
    gap: 0px 44px;
  }
`;
const H = styled.h1`
  margin: 0 !important;
  width: 420px;
  position: absolute;
  right: 110.42px;
  bottom: 78px;
  font-size: var(--font-size);
  font-weight: 400;
  font-family: var(--font);
  color: var(--color);
  display: inline-block;
  transform: rotate(5.55deg);
  transform-origin: 0 0;
  @media screen and (max-width: 1050px) {
    font-size: var(--font-size-7xl);
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lgi);
  }
`;
const TimelineMarkersRoot = styled.section`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 0px var(--padding-347xl) 0px;
  box-sizing: border-box;
  position: relative;
  flex-shrink: 0;
  max-width: 100%;
  text-align: left;
  font-size: var(--font-size-6xl-6);
  color: var(--color-black);
  font-family: var(--font3);
  @media screen and (max-width: 1050px) {
    padding-bottom: var(--padding-219xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 450px) {
    padding-bottom: var(--padding-136xl);
    box-sizing: border-box;
  }
`;

const TimelineMarkers: FunctionComponent = () => {
  return (
    <TimelineMarkersRoot>
      <ChelseaStory>
        <GroupComponent
          prop="С 10 по 12 ноября 2023 года в Молодёжном центре «Волга» состоялось образовательное мероприятие для организаторов донорского движения в Республике Татарстан."
          image7="466.1x277.48x1056089411"
        />
        <GroupComponent
          prop="1 октября в Казани состоялся Национальный полумарафон. Бегуны проверяли свои силы на дистанциях 21.1, 10 и 3 км..."
          image7="466.1x277.48x-1954780313"
          propPadding="var(--padding-45xl) var(--padding-21xl) var(--padding-45xl) var(--padding-52xl)"
        />
        <FrameParent>
          <Parent1>
            <Div>еще</Div>
            <EllipseParent>
              <FrameChild />
              <MoveCrossOverIcon loading="eager" alt="" />
            </EllipseParent>
          </Parent1>
          <SharingExperience>
            <SharingExperienceChild alt="" />
            <Div1>
              С 10 по 12 ноября 2023 года в Молодёжномцентре «Волга» состоялось
              образовательное мероприятие для организаторовдонорского движения в
              Республике Татарстан.
            </Div1>
            <Image7Icon alt="" />
          </SharingExperience>
        </FrameParent>
      </ChelseaStory>
      <H>еще одна спасенная жизнь</H>
    </TimelineMarkersRoot>
  );
};

export default TimelineMarkers;
