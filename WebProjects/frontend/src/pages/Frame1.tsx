import { FunctionComponent } from "react";
import styled from "styled-components";
import GroupComponent3 from "../components/GroupComponent3";
import ChildInfoFrame from "../components/ChildInfoFrame";
import GroupFrame1 from "../components/GroupFrame1";
import Group from "../components/Group";
import CriteriasDonor from "../components/CriteriasDonor";
import SocialRatingBonus from "../components/SocialRatingBonus";

const WrapperGroup43Child = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  position: absolute;
  left: 0px;
  top: 95px;
  transform: scale(1.258);
`;
const WrapperGroup = styled.div`
  width: 1085.2px;
  height: 923.6px;
  position: absolute;
  margin: 0 !important;
  top: 0px;
  left: -153px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 0;
`;
const YearFrame = styled.section`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 0px 0px 134px;
  box-sizing: border-box;
  gap: 43px 0px;
  max-width: 100%;
    top: -100px;
  @media screen and (max-width: 1200px) {
    padding-bottom: 87px;
    box-sizing: border-box;
  }
  @media screen and (max-width: 1050px) {
    padding-bottom: 57px;
    box-sizing: border-box;
  }
  @media screen and (max-width: 750px) {
    gap: 43px 0px;
  }
  @media screen and (max-width: 450px) {
    padding-bottom: 37px;
    box-sizing: border-box;
  }
`;
const FrameChild = styled.img`
  height: 38.5px;
  flex: 1;
  position: relative;
  max-width: 100%;
    top: 400px;
  overflow: hidden;
`;
const Inner = styled.div`
  width: 376px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px var(--padding-xl) var(--padding-123xl) 0px;
  box-sizing: border-box;
  max-width: 100%;
`;
const UnionIcon = styled.img`
  width: 122.2px;
  height: 119.2px;
  position: absolute;
  margin: 0 !important;
  top: 1457.7px;
  right: 234.8px;
  object-fit: contain;
  z-index: 1;
`;
const UnionIcon1 = styled.img`
  width: 162.3px;
  height: 159.2px;
  position: absolute;
  margin: 0 !important;
  right: -43.3px;
  bottom: 1189.8px;
  object-fit: contain;
`;
const UnionIcon2 = styled.img`
  width: 81.7px;
  height: 79.5px;
  position: absolute;
  margin: 0 !important;
  right: 87.3px;
  bottom: 1087.5px;
  object-fit: contain;
`;
const UnionIcon3 = styled.img`
  width: 98.9px;
  height: 95.6px;
  position: absolute;
  margin: 0 !important;
  right: -11.1px;
  bottom: 1008.1px;
  object-fit: contain;
  z-index: 1;
`;
const DonorRectangle = styled.section`
  align-self: stretch;
  height: 382px;
  position: relative;
  background-color: var(--color-gainsboro);
`;
const DivRoot = styled.div`
  width: 100%;
    height: 6589px;
  position: relative;
  background-color: var(--color4);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 30px 0px;
  letter-spacing: normal;
`;

const Frame1: FunctionComponent = () => {
  return (
    <DivRoot>
      <WrapperGroup>
        <WrapperGroup43Child alt="" src="/group-43.svg" />
      </WrapperGroup>
      <YearFrame>
        <GroupComponent3 />
        <ChildInfoFrame />
      </YearFrame>
      <Inner>
        <FrameChild loading="eager" alt="" src="/group-49.svg" />
      </Inner>
      <GroupFrame1 />
      <UnionIcon alt="" src="/union-6@2x.png" />
      <UnionIcon1 alt="" src="/union-7@2x.png" />
      <UnionIcon2 alt="" src="/union-8@2x.png" />
      <UnionIcon3 alt="" src="/union-9@2x.png" />
      <Group />
      <CriteriasDonor />
      <SocialRatingBonus />
      <DonorRectangle />
    </DivRoot>
  );
};

export default Frame1;
