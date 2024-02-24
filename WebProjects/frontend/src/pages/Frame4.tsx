import { FunctionComponent } from "react";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";

const AnotherFrameGroupChild = styled.img`
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
const TitleFrame = styled.div`
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
const CommunityText = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 0px var(--padding-12xs) 0px 0px;
`;
const AnotherFrameGroup = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px 0px;
  gap: 0px 6px;
`;
const AnotherFrameGroupWrapper = styled.button`
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
const BackgroundFramesIcon = styled.img`
  height: 14px;
  width: 12px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
`;
const HoldersGroupsFrames = styled.button`
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
const Subframes = styled.div`
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
const Group = styled.button`
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
const EllipseShape = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const HelpTheProjectText = styled.button`
  cursor: pointer;
  border: none;
  padding: var(--padding-11xs) var(--padding-11xs) 0px 0px;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const InputFieldPhoneNumber = styled.div`
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
const LoginFrame = styled.button`
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
const ProjectFrame = styled.div`
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
const FrameInstance = styled.div`
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
const FrameInstanceWrapper = styled.header`
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
  color: var(--color-black);
  text-align: center;
  flex-shrink: 0;
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
const PhoneNumberInput = styled.label`
  cursor: pointer;
  align-self: stretch;
  border-radius: 20px;
  margin-top: 70px;
  width: 350px;
  margin-left: 40px;
  background-color: var(--color4);
  border: 1px solid black;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-smi) var(--padding-13xl);
  white-space: nowrap;
  font-size: var(--font4-size);
  color: var(--color);
  font-family: var(--font-inter);
`;
const Button = styled.button`
  cursor: pointer;
  border: none;
  padding: 0;
  background-color: transparent;
  position: relative;
  font-size: var(--font-size-sm);
  text-decoration: underline;
  font-family: var(--font-inter);
  color: var(--color7);
  text-align: left;
  display: inline-block;
`;
const VerifyCode = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 10px 0px;
`;
const P = styled.p`
  margin: 0;
`;
const Div4 = styled.div`
  align-self: stretch;
  position: relative;
`;
const FrameInner = styled.input`
  border: 0.7px solid black;
  outline: none;
  background-color: var(--color4);
  height: 52.1px;
  flex: 1;
  border-radius: 6.51px;
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 9.39941692352295px 12.291544914245605px;
  font-family: var(--font-inter);
  font-size: var(--font-size-9xl-9);
  color: black;
  min-width: 24px;
`;
const FrameInput = styled.input`
  border: 0.7px solid black;
  outline: none;
  background-color: var(--color4);
  height: 52.1px;
  flex: 1;
  border-radius: 6.51px;
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 9.39941692352295px 12.291544914245605px;
  font-family: var(--font-inter);
  font-size: var(--font-size-9xl-9);
  color: black;
  min-width: 24px;
`;
const FrameParent = styled.div`
  width: 248px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0px 12.29px;
`;
const Div5 = styled.div`
  align-self: stretch;
  position: relative;
  font-size: 10px;
  font-family: var(--font-inter);
  color: var(--color7);
  text-align: center;
`;
const Container = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px 0px;
  color: var(--color);
`;
const EditPhoneNum = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 31px 0px;
  @media screen and (max-width: 450px) {
    gap: 31px 0px;
  }
`;
const InputPhoneNum = styled.div`
  align-self: stretch;
  border-radius: 30px;
  border: 1px solid var(--color2);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-21xl) var(--padding-22xl) var(--padding-21xl)
    var(--padding-20xl);
  flex-shrink: 0;
  font-size: var(--font-size-sm);
  font-family: var(--font1);
`;
const SignUpButton = styled.input`
  margin: 0;
  height: 24px;
  width: 24px;
  position: relative;
  border-radius: var(--br-9xs);
  border: 1px solid var(--color6);
  box-sizing: border-box;
`;
const Div6 = styled.div`
  flex: 1;
  position: relative;
  display: inline-block;
  min-width: 211px;
  max-width: 100%;
`;
const HelpButton = styled.div`
  width: 368px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  padding: 0px var(--padding-12xs) 0px 0px;
  box-sizing: border-box;
  gap: 0px 18px;
  max-width: 100%;
`;
const Div7 = styled.div`
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
  padding: var(--padding-lg) var(--padding-2xl) var(--padding-lg)
    var(--padding-xl);
  background-color: var(--color3);
  align-self: stretch;
  border-radius: var(--br-22xl);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: var(--color-tomato);
  }
`;
const TermsAgreement = styled.div`
  width: 419px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-xl);
  box-sizing: border-box;
  gap: 22px 0px;
  flex-shrink: 0;
  max-width: 100%;
  font-size: 11px;
  font-family: var(--font-inter);
`;
const PersonCabinet = styled.div`
  width: 487px;
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
  padding: 0px 0px 149px;
  box-sizing: border-box;
  gap: 66px 0px;
  letter-spacing: normal;
  text-align: left;
  font-size: var(--font-size);
  color: var(--color7);
  font-family: var(--font);
  @media screen and (max-width: 750px) {
    gap: 66px 0px;
  }
  @media screen and (max-width: 450px) {
    gap: 66px 0px;
  }
`;

const Frame4: FunctionComponent = () => {

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/mypets`;
    navigate(path);
  };


  return (
    <DivRoot>
      <FrameInstanceWrapper>
        <FrameInstance>
          <AnotherFrameGroupWrapper id="main">
            <AnotherFrameGroup>
              <AnotherFrameGroupChild
                loading="eager"
                alt=""
                src="/group-26.svg"
              />
              <CommunityText>
                <TitleFrame>
                  <Donorsearch>DonorSearch</Donorsearch>
                </TitleFrame>
                <Div>Сообщество доноров крови</Div>
              </CommunityText>
            </AnotherFrameGroup>
          </AnotherFrameGroupWrapper>
          <ProjectFrame>
            <Subframes>
              <HoldersGroupsFrames id="owners">
                <Div1>Хозяевам</Div1>
                <BackgroundFramesIcon
                  alt=""
                  src="/group-frame-project-details@2x.png"
                />
              </HoldersGroupsFrames>
            </Subframes>
            <Subframes>
              <HoldersGroupsFrames id="partners">
                <Div1>Партнерам</Div1>
                <BackgroundFramesIcon
                  alt=""
                  src="/group-frame-project-details@2x.png"
                />
              </HoldersGroupsFrames>
            </Subframes>
            <Subframes>
              <Group id="about">
                <Div2>О проекте</Div2>
                <BackgroundFramesIcon
                  alt=""
                  src="/group-frame-project-details@2x.png"
                />
              </Group>
            </Subframes>
            <HelpTheProjectText id="help">
              <EllipseShape>
                <Div2>Помочь проекту</Div2>
              </EllipseShape>
            </HelpTheProjectText>
            <LoginFrame id="profile">
              <InputFieldPhoneNumber />
              <UnionIcon loading="eager" alt="" src="/union@2x.png"/>
            </LoginFrame>
          </ProjectFrame>
        </FrameInstance>
      </FrameInstanceWrapper>
      <PersonCabinet>
        <H>Личный кабинет</H>
        <InputPhoneNum>
          <EditPhoneNum>
            <VerifyCode>
              <PhoneNumberInput htmlFor="phone">
                <Div3>+ 7 (965) 274-11-00</Div3>
              </PhoneNumberInput>
              <Button id="change">Изменить номер телефона</Button>
            </VerifyCode>
            <Container>
              <Div4>
                <P>На введенный номер выслан СМС с кодом.</P>
                <P>Пожалуйста, введите его в поле ниже</P>
              </Div4>
              <FrameParent>
                <FrameInner id="1" type="text" />
                <FrameInput id="2" type="text" />
                <FrameInput id="3" type="text" />
                <FrameInput id="4" type="text" />
                <FrameInput id="4" type="text" />
              </FrameParent>
              <Div5>Выслать код повторно (53 сек)</Div5>
            </Container>
          </EditPhoneNum>
        </InputPhoneNum>
        <TermsAgreement>
          <HelpButton>
            <SignUpButton type="checkbox" />
            <Div6>
              Я ознакомился с пользовательскими соглашениями и принимаю его
              условия
            </Div6>
          </HelpButton>
          <Wrapper onClick={routeChange}>
            <Div7>Продолжить</Div7>
          </Wrapper>
        </TermsAgreement>
      </PersonCabinet>
    </DivRoot>
  );
};

export default Frame4;
