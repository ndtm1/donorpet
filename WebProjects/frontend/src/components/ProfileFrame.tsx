import { FunctionComponent } from "react";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";

const Div = styled.div`
  height: 32px;
  position: relative;
  font-size: var(--font4-size);
  font-family: var(--font1);
  color: var(--color-black);
  text-align: left;
  display: inline-block;
  @media screen and (max-width: 450px) {
    font-size: var(--font1-size);
  }
`;
const Button = styled.button`
  cursor: pointer;
  border: none;
  padding: 0;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const Div1 = styled.div`
  position: relative;
  font-size: var(--font4-size);
  font-family: var(--font1);
  color: var(--color-black);
  text-align: left;
  @media screen and (max-width: 450px) {
    font-size: var(--font1-size);
  }
`;
const Child = styled.div`
  height: 1px;
  width: 234px;
  position: absolute;
  margin: 0 !important;
  bottom: -1px;
  left: -108px;
  border-top: 1px solid var(--color3);
  box-sizing: border-box;
`;
const Button1 = styled.button`
  cursor: pointer;
  border: none;
  padding: 0px var(--padding-12xs) var(--padding-5xs) 0px;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  position: relative;
`;
const Div2 = styled.div`
  height: 32px;
  flex: 1;
  position: relative;
  font-size: var(--font4-size);
  font-family: var(--font1);
  color: var(--color-black);
  text-align: left;
  display: inline-block;
  @media screen and (max-width: 450px) {
    font-size: var(--font1-size);
  }
`;
const Button2 = styled.button`
  cursor: pointer;
  border: none;
  padding: 0;
  background-color: transparent;
  width: 121px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const Parent1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 35px 0px;
`;
const DonorSearch = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-11xl) 0px 0px;
`;
const EllipseFrame = styled.div`
  height: 121px;
  width: 1px;
  position: relative;
  border-right: 1px solid var(--color8);
  box-sizing: border-box;
`;
const TextFrame = styled.div`
  width: 181px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0px 55px;
  min-width: 181px;
  @media screen and (max-width: 725px) {
    flex: 1;
  }
`;
const NameAndContact = styled.img`
  height: 145px;
  width: 145px;
  position: relative;
  border-radius: 50%;
  object-fit: cover;
`;
const AvatarFrame = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  margin-left: 30px;
  margin-top: 20px;
`;
const Div3 = styled.div`
  position: relative;
  font-family: "SF Pro";
  margin-left: 30px;
  @media screen and (max-width: 450px) {
    font-size: var(--font1-size);
  }
`;
const Yasminachilovayahoocom = styled.div`
  position: relative;
  white-space: nowrap;
  font-family: "SF Pro";
  margin-left: 30px;
  @media screen and (max-width: 450px) {
    font-size: var(--font1-size);
  }
`;
const ContactFrame = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 11px 0px;
`;
const FrameWithText = styled.div`
  flex: 1;
  border-radius: 20px;
  border: 1px solid var(--color2);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-32xl) var(--padding-26xl);
  gap: 38px 0px;
  min-width: 217px;
  max-width: 100%;
  height: 350px;
  @media screen and (max-width: 450px) {
    gap: 38px 0px;
    padding: var(--padding-14xl) var(--padding-xl);
    box-sizing: border-box;
  }
`;
const GroupFrame = styled.div`
  width: 683px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0px 168px;
  min-width: 683px;
  max-width: 100%;
  @media screen and (max-width: 1000px) {
    flex: 1;
  }
  @media screen and (max-width: 975px) {
    min-width: 100%;
  }
  @media screen and (max-width: 725px) {
    flex-wrap: wrap;
    gap: 0px 168px;
  }
  @media screen and (max-width: 450px) {
    gap: 0px 168px;
  }
`;
const DesignToolMagicWandIcon = styled.img`
  height: 24px;
  width: 24px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  min-height: 24px;
`;
const Div4 = styled.div`
  position: relative;
  font-size: var(--font4-size);
  text-decoration: underline;
  font-family: var(--font1);
  color: var(--color2);
  text-align: left;
  @media screen and (max-width: 450px) {
    font-size: var(--font1-size);
  }
`;
const DesignToolMagicWand = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0px 10px;
`;
const EditProfile = styled.button`
  cursor: pointer;
  border: none;
  padding: var(--padding-4xl) 0px 0px;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const HeaderFrame = styled.div`
  width: 1268px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--gap-xl);
  max-width: 100%;
  @media screen and (max-width: 1000px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;
const ProfileFrameRoot = styled.section`
  width: 1358px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-xl);
  box-sizing: border-box;
  max-width: 100%;
  text-align: left;
  font-size: var(--font4-size);
  color: var(--color);
  font-family: var(--font1);
`;

const ProfileFrame: FunctionComponent = () => {


  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/mypets`;
    navigate(path);
  };



  return (
    <ProfileFrameRoot>
      <HeaderFrame>
        <GroupFrame>
          <TextFrame>
            <DonorSearch>
              <Parent1>
                <Button id="mypet" onClick={routeChange}>
                  <Div>Мой питомец</Div>
                </Button>
                <Button1 id="myprofile">
                  <Div1>Мой профиль</Div1>
                  <Child />
                </Button1>
                <Button2 id="events">
                  <Div2>События</Div2>
                </Button2>
              </Parent1>
            </DonorSearch>
            <EllipseFrame />
          </TextFrame>
          <FrameWithText>
            <AvatarFrame>
              <NameAndContact loading="eager" alt="" src="/Ellipse 13.svg"/>
            </AvatarFrame>
            <ContactFrame>
              <Div3>Ачилова Ясмин Анваровна</Div3>
              <Yasminachilovayahoocom>
                yasmin.achilova@yahoo.com
              </Yasminachilovayahoocom>
              <Div3>21 год</Div3>
              <Div3>Адрес: ул. Тверская д.50</Div3>
            </ContactFrame>
          </FrameWithText>
        </GroupFrame>
        <EditProfile id="edit">
          <DesignToolMagicWand>
            <DesignToolMagicWandIcon loading="eager" alt="" src="/design-tool-magic-wand.svg"/>
            <Div4>Редактировать профиль</Div4>
          </DesignToolMagicWand>
        </EditProfile>
      </HeaderFrame>
    </ProfileFrameRoot>
  );
};

export default ProfileFrame;
