import { FunctionComponent } from "react";
import styled from "styled-components";

const UnionIcon = styled.img`
  height: 160.6px;
  width: 162.7px;
  position: absolute;
  margin: 0 !important;
  top: 299px;
  left: -34px;
  object-fit: contain;
`;
const UnionIcon1 = styled.img`
  height: 75.7px;
  width: 77.2px;
  position: absolute;
  margin: 0 !important;
  top: 114px;
  right: 545.8px;
  object-fit: contain;
  z-index: 1;
`;
const Donorsearch = styled.h1`
  margin: 0 !important;
  width: 600px;
  position: absolute;
  top: -52.83px;
  left: -119px;
  font-size: inherit;
  font-weight: 400;
  font-family: inherit;
  display: inline-block;
  transform: rotate(-6.14deg);
  transform-origin: 0 0;
  @media screen and (max-width: 1050px) {
    font-size: var(--font-size-29xl);
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-10xl);
  }
`;
const CompanyHistoryChild = styled.img`
  height: 203px;
  width: 398.1px;
  position: absolute;
  margin: 0 !important;
  bottom: 2px;
  left: -17px;
`;
const Div = styled.div`
  width: 380px;
  position: relative;
  line-height: 24px;
  display: inline-block;
  flex-shrink: 0;
  max-width: 100%;
  @media screen and (max-width: 450px) {
    font-size: var(--font1-size);
  }
`;
const FrameWithText = styled.div`
  align-self: stretch;
  background-color: var(--color-darkslategray-100);
  backdrop-filter: blur(14px);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  z-index: 1;
`;
const FrameWithinFrame = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-53xl) 0px 0px;
  box-sizing: border-box;
  max-width: 100%;
  font-size: var(--font4-size);
  color: var(--color);
  font-family: var(--font1);
`;
const CompanyHistory = styled.div`
  width: 410px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-xl) 0px;
  box-sizing: border-box;
  position: relative;
  min-width: 410px;
  max-width: 100%;
  @media screen and (max-width: 1050px) {
    flex: 1;
  }
  @media screen and (max-width: 750px) {
    min-width: 100%;
  }
`;
const AchievementsFrameChild = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
`;
const UnionIcon2 = styled.img`
  position: absolute;
  top: 145px;
  left: 481px;
  width: 37px;
  height: 35.5px;
  object-fit: contain;
  z-index: 1;
`;
const UnionIcon3 = styled.img`
  position: absolute;
  top: 110.6px;
  left: 199.1px;
  width: 48.8px;
  height: 48.3px;
  object-fit: contain;
  z-index: 1;
`;
const AchievementsFrame = styled.div`
  height: 532px;
  flex: 1;
  position: relative;
  min-width: 357px;
  max-width: 100%;
  @media screen and (max-width: 450px) {
    min-width: 100%;
  }
`;
const DonorSearchText = styled.div`
  width: 1065px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0px 106px;
  max-width: 100%;
  @media screen and (max-width: 1050px) {
    flex-wrap: wrap;
    gap: 0px 106px;
  }
  @media screen and (max-width: 750px) {
    gap: 0px 106px;
  }
`;
const ThirdChildFrame = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 0px var(--padding-293xl);
  box-sizing: border-box;
  max-width: 100%;
  @media screen and (max-width: 1050px) {
    padding-bottom: var(--padding-184xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 450px) {
    padding-bottom: var(--padding-113xl);
    box-sizing: border-box;
  }
`;
const UnionIcon4 = styled.img`
  height: 48.3px;
  width: 48.8px;
  position: absolute;
  margin: 0 !important;
  right: 552.2px;
  bottom: 366.7px;
  object-fit: contain;
  z-index: 1;
`;
const H = styled.h1`
  margin: 0 !important;
  width: 840px;
  position: absolute;
  right: -30.52px;
  bottom: 88px;
  font-size: inherit;
  font-weight: 400;
  font-family: inherit;
  color: var(--color);
  display: inline-block;
  text-shadow: 1px 0 0 #6c8776, 0 1px 0 #6c8776, -1px 0 0 #6c8776,
    0 -1px 0 #6c8776;
  transform: rotate(5.49deg);
  transform-origin: 0 0;
  @media screen and (max-width: 1050px) {
    font-size: var(--font-size-29xl);
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-10xl);
  }
`;
const SecondChildFrameRoot = styled.section`
  width: 1254px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-xl);
  box-sizing: border-box;
  position: relative;
  flex-shrink: 0;
  max-width: 100%;
  text-align: left;
  font-size: var(--font2-size);
  color: var(--color2);
  font-family: var(--font);
`;

const SecondChildFrame: FunctionComponent = () => {
  return (
    <SecondChildFrameRoot>
      <UnionIcon loading="eager" alt="" />
      <UnionIcon1 alt="" />
      <ThirdChildFrame>
        <DonorSearchText>
          <CompanyHistory>
            <Donorsearch>Donorsearch</Donorsearch>
            <CompanyHistoryChild loading="eager" alt="" />
            <FrameWithinFrame>
              <FrameWithText>
                <Div>
                  История нашей команды берет начало в 2010 году. За долгое
                  время мы выросли из волонтерской соцсеть группы в организацию
                  спасающую жизни по всей России. В наши задачи входит
                  организация волонтерской деятельности, сбор грантов и
                  пожертвований, а также информирование общества.
                </Div>
              </FrameWithText>
            </FrameWithinFrame>
          </CompanyHistory>
          <AchievementsFrame>
            <AchievementsFrameChild alt="" />
            <UnionIcon2 loading="eager" alt="" />
            <UnionIcon3 loading="eager" alt="" />
          </AchievementsFrame>
        </DonorSearchText>
      </ThirdChildFrame>
      <UnionIcon4 alt="" />
      <H>Наши достижения</H>
    </SecondChildFrameRoot>
  );
};

export default SecondChildFrame;
