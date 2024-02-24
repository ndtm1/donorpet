import { FunctionComponent } from "react";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";

const BusinessHandshakeChild = styled.img`
  height: 27.8px;
  width: 33.6px;
  position: relative;
`;
const Donorsearch = styled.div`
  position: relative;
  font-weight: 600;
  white-space: nowrap;
`;
const ChelseaImage = styled.div`
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
  white-space: nowrap;
  margin-left: -110px;
`;
const EllipseShape = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 0px var(--padding-12xs) 0px 0px;
`;
const BusinessHandshake = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px 0px;
  gap: 0px 6px;
`;
const BusinessHandshakeWrapper = styled.div`
  height: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const Div1 = styled.div`
  position: relative;
  font-family: "SF Pro";
  font-weight: 300;
`;
const UnionGroupIcon = styled.img`
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
const RectangleShape = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-11xs) var(--padding-7xs) 0px 0px;
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
const Div2 = styled.div`
  position: relative;
  font-family: "SF Pro";
  font-weight: 300;
  white-space: nowrap;
`;
const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0px var(--padding-11xs) 0px 0px;
  gap: 0px 3px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const PerformanceIncreaseClipboard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-11xs) var(--padding-11xs) 0px 0px;
`;
const ParentFrame = styled.div`
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
const TextNode = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  gap: 7.23px 0px;
`;
const TextNode1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-11xs) 0px var(--padding-10xs);
  box-sizing: border-box;
  gap: 0px 41px;
  max-width: 100%;
  font-size: var(--font1-size);
  color: var(--color);
  font-family: var(--font1);
  @media screen and (max-width: 750px) {
    gap: 0px 41px;
  }
`;
const RectangleShape1 = styled.div`
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
const RectangleShapeWrapperRoot = styled.header`
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
  top: 0;
  z-index: 99;
  position: sticky;
  max-width: 100%;
  text-align: left;
  font-size: var(--font-size-lgi-2);
  color: var(--color3);
  font-family: var(--font-roboto-flex);
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

const GroupComponent3: FunctionComponent = () => {
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
    <RectangleShapeWrapperRoot>
      <RectangleShape1>
        <CommunityTextWrapper id = "main">
        <BusinessHandshakeWrapper>
          <BusinessHandshake>
            <BusinessHandshakeChild
              loading="eager"
              alt=""
              src="/group-26.svg"
            />
              <EllipseShape onClick={navigateMain}>
                  <ChelseaImage>
                    <Donorsearch>DonorSearch</Donorsearch>
                  </ChelseaImage>
                  <Div>Сообщество доноров крови</Div>
              </EllipseShape>
          </BusinessHandshake>
        </BusinessHandshakeWrapper>
        </CommunityTextWrapper>
        <TextNode1>
          <RectangleShape>
            <Parent1>
              <ButtonFrame id = "owners">
                <Div1>Хозяевам</Div1>
                <UnionGroupIcon
                  alt=""
                  src="/group-frame-project-details@2x.png"
                />
              </ButtonFrame>
            </Parent1>
          </RectangleShape>
          <RectangleShape>
            <Parent1>
              <ButtonFrame id = "partners">
                <Div1>Партнерам</Div1>
                <UnionGroupIcon
                  alt=""
                  src="/group-frame-project-details@2x.png"
                />
              </ButtonFrame>
            </Parent1>
          </RectangleShape>
          <RectangleShape>
            <Container>
              <ButtonFrame id = "about">
                <Div2>О проекте</Div2>
                <UnionGroupIcon
                  alt=""
                  src="/group-frame-project-details@2x.png"
                />
              </ButtonFrame>
            </Container>
          </RectangleShape>
          <PerformanceIncreaseClipboard>
            <Wrapper>
              <ButtonFrame id = "help">
                <Div2>Помочь проекту</Div2>
              </ButtonFrame>
            </Wrapper>
          </PerformanceIncreaseClipboard>
          <TextNode>
            <ParentFrame />
            <UnionIcon loading="eager" alt="" src="/union@2x.png" />
          </TextNode>
        </TextNode1>
      </RectangleShape1>
    </RectangleShapeWrapperRoot>
  );
};

export default GroupComponent3;
