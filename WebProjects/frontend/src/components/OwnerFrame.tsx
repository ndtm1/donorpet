import { FunctionComponent } from "react";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";

const Div = styled.div`
  position: relative;
  font-size: var(--font4-size);
  font-family: "SF Pro";
  color: var(--color-black);
  text-align: left;
  @media screen and (max-width: 450px) {
    font-size: var(--font1-size);
  }
`;
const ProfileLine = styled.div`
  height: 1px;
  width: 234px;
  position: absolute;
  margin: 0 !important;
  bottom: -1px;
  left: -108px;
  border-top: 1px solid var(--color3);
  box-sizing: border-box;
`;
const Button = styled.button`
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
const Div1 = styled.div`
  height: 32px;
  position: relative;
  font-size: var(--font4-size);
  font-family: "SF Pro";
  color: var(--color-black);
  text-align: left;
  display: inline-block;
  @media screen and (max-width: 450px) {
    font-size: var(--font1-size);
  }
`;
const Button1 = styled.button`
  cursor: pointer;
  border: none;
  padding: 0;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const Div2 = styled.div`
  height: 32px;
  flex: 1;
  position: relative;
  font-size: var(--font4-size);
  font-family: "SF Pro";
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
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 35px 0px;
    margin-left: 30px;
`;
const ProfileInstance = styled.div`
  width: 126px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-11xl) 0px 0px;
  box-sizing: border-box;
`;
const GroupFrame = styled.div`
  height: 121px;
  width: 1px;
  position: relative;
  border-right: 1px solid var(--color8);
  box-sizing: border-box;
`;
const CommunityText = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--gap-xl);
`;
const DonorSearchInput = styled.div`
  width: 181px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-31xl) 0px 0px;
  box-sizing: border-box;
`;
const CatSymbolChild = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 409px;
  height: 393px;
`;
const CatIcon = styled.img`
  position: absolute;
  top: 190px;
  left: 70px;
  width: 152.4px;
  height: 215px;
  object-fit: cover;
  z-index: 1;
`;
const CatSymbol = styled.div`
  height: 405px;
  width: 409px;
  position: relative;
  max-width: 100%;
`;
const ProjectSection = styled.div`
  width: 988px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--gap-xl);
  max-width: 100%;
  @media screen and (max-width: 750px) {
    flex-wrap: wrap;
  }
`;
const PartnerFrame = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 100%;
`;
const Div3 = styled.div`
  position: relative;
  font-size: var(--font4-size);
  font-weight: 500;
  font-family:"SF Pro";
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
  width: 515px;
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
const HelpButton = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 37px 0px;
  max-width: 100%;
  @media screen and (max-width: 750px) {
    gap: 37px 0px;
  }
`;
const OwnerFrameRoot = styled.section`
  width: 1155px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-42xl);
  box-sizing: border-box;
  max-width: 100%;
  @media screen and (max-width: 1125px) {
    padding-left: var(--padding-11xl);
    padding-right: var(--padding-11xl);
    box-sizing: border-box;
  }
`;

const OwnerFrame: FunctionComponent = () => {


  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/myprofile`;
    navigate(path);
  };



  return (
    <OwnerFrameRoot>
      <HelpButton>
        <PartnerFrame>
          <ProjectSection>
            <DonorSearchInput>
              <CommunityText>
                <ProfileInstance>
                  <Parent1>
                    <Button id="mypet">
                      <Div>Мой питомец</Div>
                      <ProfileLine />
                    </Button>
                    <Button1 id="myprofile" onClick={routeChange}>
                      <Div1>Мой профиль</Div1>
                    </Button1>
                    <Button2 id="events">
                      <Div2>События</Div2>
                    </Button2>
                  </Parent1>
                </ProfileInstance>
                <GroupFrame />
              </CommunityText>
            </DonorSearchInput>
            <CatSymbol>
              <CatSymbolChild loading="eager" alt="" src="/Group 40.svg"/>
              <CatIcon loading="eager" alt="" src="/Cat2.svg"/>
            </CatSymbol>
          </ProjectSection>
        </PartnerFrame>
        <Wrapper>
          <Div3>Зарегистрировать питомца</Div3>
        </Wrapper>
      </HelpButton>
    </OwnerFrameRoot>
  );
};

export default OwnerFrame;
