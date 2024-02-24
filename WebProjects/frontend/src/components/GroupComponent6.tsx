import { FunctionComponent } from "react";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";

const CommunityDonorsChild = styled.img`
  height: 27.8px;
  width: 33.6px;
  position: relative;
`;
const Donorsearch = styled.div`
  position: relative;
  font-size: var(--font-size-lgi-2);
  font-weight: 600;
  font-family: var(--font-roboto-flex);
  color: var(--color3);
  text-align: left;
  white-space: nowrap;
`;
const DonorsearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px var(--padding-6xs);
`;
const Div = styled.div`
  position: relative;
  font-size: var(--font-size-5xs-7);
  letter-spacing: 0.01em;
  font-weight: 600;
  font-family: var(--font-roboto-flex);
  color: var(--color3);
  text-align: left;
  white-space: nowrap;
  margin-left: -110px;
`;
const FrameParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 0px var(--padding-12xs) 0px 0px;
`;
const CommunityDonors = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px 0px;
  gap: 0px 6px;
`;
const CommunityDonorsWrapper = styled.button`
  cursor: pointer;
  border: none;
  padding: 0;
  background-color: transparent;
  height: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const Div1 = styled.div`
  position: relative;
  font-size: var(--font1-size);
  font-weight: 300;
  font-family: var(--font1);
  color: var(--color);
  text-align: left;
`;
const TextIcon = styled.img`
  height: 14px;
  width: 12px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
`;
const Parent1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0px var(--padding-12xs) 0px 0px;
  gap: 0px 6px;
`;
const Group = styled.button`
  cursor: pointer;
  border: none;
  padding: var(--padding-11xs) var(--padding-7xs) 0px 0px;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const Div2 = styled.div`
  position: relative;
  font-size: var(--font1-size);
  font-weight: 300;
  font-family: var(--font1);
  color: var(--color);
  text-align: left;
  white-space: nowrap;
`;
const FrameDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0px var(--padding-11xs) 0px 0px;
  gap: 0px 3px;
`;
const Ellipse = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const EllipseWrapper = styled.button`
  cursor: pointer;
  border: none;
  padding: var(--padding-11xs) var(--padding-11xs) 0px 0px;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const Frame = styled.div`
  width: 37.6px;
  height: 37.6px;
  position: relative;
  border-radius: 50%;
  background-color: var(--color2);
`;
const UnionIcon = styled.img`
  width: 19.2px;
  height: 18.5px;
  position: absolute;
  margin: 0 !important;
  top: calc(50% - 9.4px);
  left: calc(50% - 8.9px);
  object-fit: cover;
  z-index: 1;
`;
const Instance = styled.button`
  cursor: pointer;
  border: none;
  padding: 0;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  gap: 7.23px 0px;
`;
const GroupParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-11xs) 0px var(--padding-10xs);
  box-sizing: border-box;
  gap: 0px 41px;
  max-width: 100%;
  @media screen and (max-width: 725px) {
    gap: 0px 41px;
  }
`;
const Group1 = styled.div`
  width: 1263px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px var(--padding-12xs) 0px 0px;
  box-sizing: border-box;
  gap: var(--gap-xl);
  max-width: 100%;
`;
const GroupWrapperRoot = styled.header`
  align-self: stretch;
  background-color: var(--color-gray-100);
  backdrop-filter: blur(30px);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-6xs) var(--padding-2xl) var(--padding-6xs)
    var(--padding-xl);
  box-sizing: border-box;
  max-width: 100%;
  position: sticky;
  top: 0;
  z-index: 99;
`;

const GroupComponent6: FunctionComponent = () => {



  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/`;
    navigate(path);
  };

  const aboutChange = () => {
    let path = `/about`;
    navigate(path);
  };


  return (
    <GroupWrapperRoot>
      <Group1>
        <CommunityDonorsWrapper id="main" onClick={routeChange}>
          <CommunityDonors>
            <CommunityDonorsChild loading="eager" alt="" src="/group-26.svg"/>
            <FrameParent>
              <DonorsearchWrapper>
                <Donorsearch>DonorSearch</Donorsearch>
              </DonorsearchWrapper>
              <Div>Сообщество доноров крови</Div>
            </FrameParent>
          </CommunityDonors>
        </CommunityDonorsWrapper>
        <GroupParent>
          <Group id="owners">
            <Parent1>
              <Div1>Хозяевам</Div1>
              <TextIcon alt="" src="/group-frame-project-details@2x.png" />
            </Parent1>
          </Group>
          <Group id="partners">
            <Parent1>
              <Div1>Партнерам</Div1>
              <TextIcon alt="" src="/group-frame-project-details@2x.png" />
            </Parent1>
          </Group>
          <Group id="about" onClick={aboutChange}>
            <FrameDiv>
              <Div2>О проекте</Div2>
              <TextIcon alt="" src="/group-frame-project-details@2x.png" />
            </FrameDiv>
          </Group>
          <EllipseWrapper id="help">
            <Ellipse>
              <Div2>Помочь проекту</Div2>
            </Ellipse>
          </EllipseWrapper>
          <Instance id="profile">
            <Frame />
            <UnionIcon loading="eager" alt="" src="/union@2x.png" />
          </Instance>
        </GroupParent>
      </Group1>
    </GroupWrapperRoot>
  );
};

export default GroupComponent6;
