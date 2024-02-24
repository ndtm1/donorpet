import "fonts/your-custom-font.css"
import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import {FunctionComponent} from "react";

const CatIcon = styled.img`
  display: grid;
  width: 1700px;
  height: 852px;
  position: absolute;
  top: 0px;
  bottom: 0.6px;
  left: 0;
  max-height: 200%;
  object-fit: cover;
`;
const VectorCircle = styled.div`
  width: 821px;
  height: 314px;
  position: absolute;
  margin: 0 !important;
  top: 176px;
  left: -19px;
  border-radius: 50%;
  background-color: var(--color);
  filter: blur(600px);
  opacity: 0.5;
  z-index: 1;
`;
const Div = styled.div`
    width: 411.9px;
    position: absolute;
    margin: 0 !important;
    top: 258.05px;
    left: 167px;
    display: inline-block;
    transform: rotate(-7.26deg);
    transform-origin: 0 0;
    z-index: 2;
    font-family: "Super Webcomic Bros. (Rus by yakustick)", serif;
    @media screen and (max-width: 1050px) {
      font-size: var(--font-size-29xl);
    }
    @media screen and (max-width: 450px) {
      font-size: var(--font-size-17xl);
    }
  `;
const CommunityTextChild = styled.img`
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
const Div1 = styled.div`
  position: relative;
  font-size: var(--font-size-5xs-7);
  letter-spacing: 0.01em;
  font-weight: 600;
  font-family: var(--font-roboto-flex);
  color: var(--color3);
  text-align: left;
  white-space: nowrap;
  margin-top: -2px;
`;
const TextButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const CommunityText = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px 0px;
  gap: 0px 6px;
`;
const CommunityTextWrapper = styled.button`
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
const Div2 = styled.div`
  position: relative;
  font-size: var(--font1-size);
  font-weight: 300;
  font-family: "SF Pro";
  color: var(--color);
  text-align: left;
`;
const GroupFrameProjectDetails = styled.img`
  height: 14px;
  width: 12px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
`;
const ButtonFrame = styled.button`
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
const TextFrameFrameFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-11xs) var(--padding-7xs) 0px 0px;
`;
const Parent1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0px var(--padding-12xs) 0px 0px;
  gap: 0px 6px;
`;
const TextFrameFrameFrame1 = styled.button`
  cursor: pointer;
  border: none;
  padding: var(--padding-11xs) var(--padding-7xs) 0px 0px;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const Div3 = styled.div`
  position: relative;
  font-size: var(--font1-size);
  font-weight: 300;
  font-family: "SF Pro";
  color: var(--color);
  text-align: left;
  white-space: nowrap;
`;
const Group = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0px var(--padding-11xs) 0px 0px;
  gap: 0px 3px;
`;
const TextButtonHelpProject = styled.button`
  cursor: pointer;
  border: none;
  padding: 0;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const CircleUnion = styled.button`
  cursor: pointer;
  border: none;
  padding: var(--padding-11xs) var(--padding-11xs) 0px 0px;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const MainFrame = styled.div`
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
const CircleUnion1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  gap: 7.23px 0px;
`;
const InfoFrameCompanyHelpAnimal = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-11xs) 0px var(--padding-10xs);
  box-sizing: border-box;
  gap: 0px 41px;
  max-width: 100%;
  @media screen and (max-width: 750px) {
    gap: 0px 41px;
  }
`;
const FrameFrameOwnersFrame = styled.div`
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
const FrameFrameOwnersFrameWrapper = styled.header`
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
const Div4 = styled.div`
  position: relative;
  font-size: var(--font-size-xl);
  font-family: "SF Pro";
  color: var(--color4);
  text-align: left;
  @media screen and (max-width: 450px) {
    font-size: var(--font1-size);
  }
`;
const Wrapper = styled.button`
  cursor: pointer;
  border: none;
  padding: var(--padding-lg);
  background-color: var(--color3);
  width: 447px;
  border-radius: var(--br-22xl);
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  max-width: 100%;
  z-index: 1;
  &:hover {
    background-color: var(--color-tomato);
  }
`;
const GroupOfFrames = styled.div`
  width: 733px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0px var(--padding-xl);
  box-sizing: border-box;
  max-width: 100%;
`;
const GroupFrameRoot = styled.section`
  align-self: stretch;
  height: 855px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  gap: 520px 0px;
  max-width: 100%;
  text-align: left;
  font-size: var(--font-size-40xl-4);
  color: var(--color-linen);
  font-family: var(--font);
  @media screen and (max-width: 750px) {
    gap: 520px 0px;
  }
  @media screen and (max-width: 450px) {
    gap: 520px 0px;
  }
`;

const Header: FunctionComponent = () => {

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/about`;
    navigate(path);
  };

  const registerChange = () => {
    let path = `/register`;
    navigate(path);
  };


  return (
    <GroupFrameRoot>
      <CatIcon loading="eager" alt="" src="/Cat.svg" width="2000"/>
      <VectorCircle />
      <Div>Мы компания помогающая животным</Div>
      <FrameFrameOwnersFrameWrapper>
        <FrameFrameOwnersFrame>
          <CommunityTextWrapper id="donorsearch">
            <CommunityText>
              <CommunityTextChild loading="eager" alt="" src="/group-26.svg" />
              <TextButton>
                <Donorsearch>DonorSearch</Donorsearch>
                <Div1>Сообщество доноров крови</Div1>
              </TextButton>
            </CommunityText>
          </CommunityTextWrapper>
          <InfoFrameCompanyHelpAnimal>
            <TextFrameFrameFrame>
              <ButtonFrame id="owners">
                <Div2>Хозяевам</Div2>
                <GroupFrameProjectDetails
                  loading="eager"
                  alt=""
                  src="/group-frame-project-details@2x.png"
                />
              </ButtonFrame>
            </TextFrameFrameFrame>
            <TextFrameFrameFrame1 id="partners">
              <Parent1>
                <Div2>Партнерам</Div2>
                <GroupFrameProjectDetails
                  loading="eager"
                  alt=""
                  src="/group-frame-project-details@2x.png"
                />
              </Parent1>
            </TextFrameFrameFrame1>
            <TextFrameFrameFrame1 id="about">
              <Group>
                <Div3 onClick={routeChange}>О проекте</Div3>
                <GroupFrameProjectDetails
                  loading="eager"
                  alt=""
                  src="/group-frame-project-details@2x.png"
                />
              </Group>
            </TextFrameFrameFrame1>
            <CircleUnion id="help">
              <TextButtonHelpProject>
                <Div3>Помочь проекту</Div3>
              </TextButtonHelpProject>
            </CircleUnion>
            <CircleUnion1>
              <MainFrame />
              <UnionIcon loading="eager" alt="" src="/union@2x.png" />
            </CircleUnion1>
          </InfoFrameCompanyHelpAnimal>
        </FrameFrameOwnersFrame>
      </FrameFrameOwnersFrameWrapper>
      <GroupOfFrames onClick={registerChange}>
        <Wrapper>
          <Div4>Зарегистрироваться</Div4>
        </Wrapper>
      </GroupOfFrames>
    </GroupFrameRoot>
  );
};

export default Header;