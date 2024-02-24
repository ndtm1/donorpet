import { FunctionComponent } from "react";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";

const FrameChild = styled.img`
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
const FrameGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 0px var(--padding-12xs) 0px 0px;
`;
const FrameParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px 0px;
  gap: 0px 6px;
`;
const FrameEmptyInner = styled.button`
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
const FrameItem = styled.img`
  height: 14px;
  width: 12px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
`;
const Parent1 = styled.button`
  cursor: pointer;
  border: none;
  padding: 0px var(--padding-12xs) 0px 0px;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0px 6px;
`;
const FrameAboutUs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-11xs) var(--padding-7xs) 0px 0px;
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
const Container = styled.button`
  cursor: pointer;
  border: none;
  padding: 0px var(--padding-11xs) 0px 0px;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0px 3px;
`;
const EllipseCircle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const FrameAssistProject = styled.button`
  cursor: pointer;
  border: none;
  padding: var(--padding-11xs) var(--padding-11xs) 0px 0px;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const FrameHelp = styled.div`
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
const RegistrationFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  gap: 7.23px 0px;
`;
const FramePartnersAndProject = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-11xs) 0px var(--padding-10xs);
  box-sizing: border-box;
  gap: 0px 41px;
  max-width: 100%;
  @media screen and (max-width: 675px) {
    gap: 0px 41px;
  }
`;
const FrameEmpty = styled.div`
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
const FrameEmptyWrapperRoot = styled.header`
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

const GroupComponent4: FunctionComponent = () => {
  let navigate = useNavigate();

  const routeChange = () => {
    let path = `/about`;
    navigate(path);
  };

  const navigateMain = () => {
    let path = "/";
    navigate(path)
  }


  return (
    <FrameEmptyWrapperRoot>
      <FrameEmpty>
        <FrameEmptyInner id="main">
          <FrameParent>
            <FrameChild loading="eager" alt="" src="/group-26.svg"/>
            <FrameGroup onClick={navigateMain}>
              <DonorsearchWrapper>
                <Donorsearch>DonorSearch</Donorsearch>
              </DonorsearchWrapper>
              <Div>Сообщество доноров крови</Div>
            </FrameGroup>
          </FrameParent>
        </FrameEmptyInner>
        <FramePartnersAndProject>
          <FrameAboutUs>
            <Parent1 id="owners">
              <Div1>Хозяевам</Div1>
              <FrameItem loading="eager" alt="" src="/group-frame-project-details@2x.png"/>
            </Parent1>
          </FrameAboutUs>
          <FrameAboutUs>
            <Parent1 id="partners">
              <Div1>Партнерам</Div1>
              <FrameItem loading="eager" alt="" src="/group-frame-project-details@2x.png" />
            </Parent1>
          </FrameAboutUs>
          <FrameAboutUs onClick={routeChange}>
            <Container id="about">
              <Div2>О проекте</Div2>
              <FrameItem loading="eager" alt="" src="/group-frame-project-details@2x.png" />
            </Container>
          </FrameAboutUs>
          <FrameAssistProject id="help">
            <EllipseCircle>
              <Div2>Помочь проекту</Div2>
            </EllipseCircle>
          </FrameAssistProject>
          <RegistrationFrame>
            <FrameHelp />
            <UnionIcon loading="eager" alt="" src="/union@2x.png" />
          </RegistrationFrame>
        </FramePartnersAndProject>
      </FrameEmpty>
    </FrameEmptyWrapperRoot>
  );
};

export default GroupComponent4;
