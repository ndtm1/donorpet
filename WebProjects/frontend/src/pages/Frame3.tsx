import { FunctionComponent } from "react";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";

const GroupDChild = styled.img`
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
const DonorSearch = styled.div`
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
const GroupF = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 0px var(--padding-12xs) 0px 0px;
`;
const GroupD = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px 0px;
  gap: 0px 6px;
`;
const GroupDWrapper = styled.button`
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
const TextOIcon = styled.img`
  height: 14px;
  width: 12px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
`;
const GroupKLM = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0px var(--padding-12xs) 0px 0px;
  gap: 0px 6px;
`;
const FramesHIJ = styled.button`
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
const Group = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0px var(--padding-11xs) 0px 0px;
  gap: 0px 3px;
`;
const FrameP = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const HelpTheProject = styled.button`
  cursor: pointer;
  border: none;
  padding: var(--padding-11xs) var(--padding-11xs) 0px 0px;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const PersonalCabinet = styled.div`
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
const Union = styled.button`
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
const FrameG = styled.div`
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
const GroupB = styled.div`
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
const GroupBWrapper = styled.header`
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
const H = styled.h1`
  margin: 0;
  position: relative;
  font-size: inherit;
  font-weight: 400;
  font-family: inherit;
  @media screen and (max-width: 750px) {
    font-size: var(--font-size-7xl);
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lgi);
  }
`;
const Div3 = styled.div`
  position: relative;
`;
const Placeholdertext = styled.input`
  border: 1px solid black;
  outline: none;
  background-color: var(--color4);
  align-self: stretch;
  height: 50px;
  border-radius: 19px;
  box-sizing: border-box;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-smi) var(--padding-13xl);
  font-family: var(--font-inter);
  font-size: var(--font4-size);
  color: var(--color);
  min-width: 219px;
`;
const Registerbutton = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 17px 0px;
`;
const Buttonframe = styled.div`
  width: 365px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  @media screen and (max-width: 450px) {
    gap: 54px 0px;
  }
`;
const Inputframe = styled.div`
  align-self: stretch;
  height: 135px;
  border-radius: 20px;
  background-color: var(--color4);
  border: 1px solid black;
  box-sizing: border-box;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--padding-43xl) var(--padding-xl);
  max-width: 100%;
`;
const Div4 = styled.div`
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
  padding: var(--padding-lg) var(--padding-xl) var(--padding-lg)
    var(--padding-2xl);
  background-color: var(--color3);
  flex: 1;
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
const Projectinfoframe = styled.div`
  width: 381px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-11xs) 0px 0px;
  box-sizing: border-box;
  max-width: 100%;
`;
const Personaldataframe = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 56px 0px;
  max-width: 100%;
  text-align: left;
  font-size: var(--font-size-sm);
  color: var(--color);
  font-family: var(--font-inter);
  @media screen and (max-width: 675px) {
    gap: 56px 0px;
  }
`;
const Loginframe = styled.div`
  width: 543px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 0px var(--padding-xl);
  box-sizing: border-box;
  gap: 30px 0px;
  max-width: 100%;
`;
const DivRoot = styled.div`
  width: 1440px;
  background-color: var(--color4);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 0px 0px 381px;
  box-sizing: border-box;
  gap: 66px 0px;
  letter-spacing: normal;
  text-align: center;
  font-size: var(--font-size);
  color: var(--color-black);
  font-family: var(--font);
  @media screen and (max-width: 750px) {
    gap: 66px 0px;
  }
  @media screen and (max-width: 450px) {
    gap: 66px 0px;
  }
`;

const Frame3: FunctionComponent = () => {

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/otp`;
    navigate(path);
  };


  return (
        <DivRoot>
          <GroupBWrapper>
            <GroupB>
              <GroupDWrapper id="main">
                <GroupD>
                  <GroupDChild loading="eager" alt="" src="/group-26.svg"/>
                  <GroupF>
                    <DonorSearch>
                      <Donorsearch>DonorSearch</Donorsearch>
                    </DonorSearch>
                    <Div>Сообщество доноров крови</Div>
                  </GroupF>
                </GroupD>
              </GroupDWrapper>
              <FrameG>
                <FramesHIJ id="owners">
                  <GroupKLM>
                    <Div1>Хозяевам</Div1>
                    <TextOIcon alt="" src="/group-frame-project-details@2x.png"/>
                  </GroupKLM>
                </FramesHIJ>
                <FramesHIJ id="partners">
                  <GroupKLM>
                    <Div1>Партнерам</Div1>
                    <TextOIcon alt="" src="/group-frame-project-details@2x.png"/>
                  </GroupKLM>
                </FramesHIJ>
                <FramesHIJ id="about">
                  <Group>
                    <Div2>О проекте</Div2>
                    <TextOIcon alt="" src="/group-frame-project-details@2x.png"/>
                  </Group>
                </FramesHIJ>
                <HelpTheProject id="help">
                  <FrameP>
                    <Div2>Помочь проекту</Div2>
                  </FrameP>
                </HelpTheProject>
                <Union id="profile">
                  <PersonalCabinet/>
                  <UnionIcon loading="eager" alt="" src="/union@2x.png"/>
                </Union>
              </FrameG>
            </GroupB>
          </GroupBWrapper>
          <Loginframe>
            <H>Личный кабинет</H>
            <Personaldataframe>
              <Inputframe>
                <Buttonframe>
                  <Registerbutton>
                    <Div3>Введите номер телефона</Div3>
                    <Placeholdertext name="phone" placeholder="_" type="tel"/>
                  </Registerbutton>
                </Buttonframe>
              </Inputframe>
              <Projectinfoframe>
                <Wrapper id="continue">
                  <Div4 onClick={routeChange}>Продолжить</Div4>
                </Wrapper>
              </Projectinfoframe>
            </Personaldataframe>
          </Loginframe>
        </DivRoot>
    )
  };

export default Frame3;
