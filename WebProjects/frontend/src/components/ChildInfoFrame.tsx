import { FunctionComponent } from "react";
import styled from "styled-components";

const H = styled.h2`
  margin: 0 !important;
  width: 463.3px;
  position: absolute;
  right: 20.7px;
  bottom: 154.71px;
  font-size: inherit;
  font-weight: 400;
  font-family: inherit;
  display: inline-block;
  transform: rotate(-4.12deg);
  transform-origin: 0 0;
  z-index: 1;
  font-family: "Super Webcomic Bros. (Rus by yakustick)";
  @media screen and (max-width: 1050px) {
    font-size: var(--font-size-7xl);
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lgi);
  }
`;
const H1 = styled.h1`
  margin: 0 !important;
  width: 558px;
  position: absolute;
  top: 141.68px;
  right: 230px;
  font-size: var(--font2-size);
  font-weight: 400;
  font-family: inherit;
  display: inline-block;
  transform: rotate(-6.14deg);
  transform-origin: 0 0;
  z-index: 2;
  font-family: "Super Webcomic Bros. (Rus by yakustick)";
  @media screen and (max-width: 1050px) {
    font-size: var(--font-size-29xl);
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-10xl);
  }
`;
const UnionIcon = styled.img`
  height: 160.6px;
  width: 162.7px;
  position: absolute;
  margin: 0 !important;
  top: -12px;
  right: 33.3px;
  object-fit: contain;
`;
const UnionIcon1 = styled.img`
  height: 65.6px;
  width: 66.5px;
  position: absolute;
  margin: 0 !important;
  right: -16.5px;
  bottom: -16.6px;
  object-fit: contain;
  z-index: 1;
`;
const H2 = styled.h2`
  margin: 0;
  position: absolute;
  top: 62.95px;
  right: 65.5px;
  font-size: inherit;
  font-weight: 400;
  font-family: inherit;
  display: inline-block;
  width: 315.5px;
  height: 74.3px;
  transform: rotate(-3.08deg);
  transform-origin: 0 0;
  z-index: 1;
  font-family: "Super Webcomic Bros. (Rus by yakustick)";
  @media screen and (max-width: 1050px) {
    font-size: var(--font-size-7xl);
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lgi);
  }
`;
const TextItemChild = styled.img`
  position: absolute;
  height: 100%;
  width: 100%;
  top: -0.1px;
  right: 0.1px;
  bottom: 0px;
  left: 0px;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: cover;
  z-index: 3;
`;
const TextItem = styled.div`
  align-self: stretch;
  height: 442px;
  position: relative;
`;
const TextContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  min-width: 497px;
  min-height: 500px;
  max-width: 100%;
  @media screen and (max-width: 1050px) {
    min-height: auto;
  }
  @media screen and (max-width: 750px) {
    min-width: 100%;
  }
`;
const A = styled.a`
  color: inherit;
`;
const P = styled.p`
  font-family: "SF Pro";
  margin: 0;
  white-space: pre-wrap;
`;
const BlankLine = styled.p`
  font-family: "SF Pro";
  margin: 0;
`;
const Div = styled.div`
  position: relative;
  line-height: 24px;
  @media screen and (max-width: 450px) {
    font-size: var(--font1-size);
  }
`;
const SquareShape = styled.div`
  position: absolute;
  margin: 0 !important;
  bottom: 19px;
  left: 31.84px;
  font-size: var(--font-size-21xl);
  font-family: var(--font);
  color: var(--color5);
  transform: rotate(3.54deg);
  transform-origin: 0 0;
  z-index: 1;
  font-family: "SF Pro";
  @media screen and (max-width: 1050px) {
    font-size: var(--font-size);
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font3-size);
  }
`;
const TextElement = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  min-width: 432px;
  max-width: 100%;
  font-size: var(--font4-size);
  font-family: var(--font1);
  @media screen and (max-width: 1050px) {
    flex: 1;
  }
  @media screen and (max-width: 750px) {
    min-width: 100%;
  }
`;
const TextNode = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 0px 116px;
  max-width: 100%;
  color: var(--color);
  @media screen and (max-width: 1050px) {
    flex-wrap: wrap;
  }
  @media screen and (max-width: 750px) {
    gap: 0px 116px;
  }
  @media screen and (max-width: 450px) {
    gap: 0px 116px;
  }
`;
const SquareShape1 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  max-width: 100%;
  color: var(--color2);
  font-family: var(--font);
`;
const FrameWithinAFrameChild = styled.img`
  height: 129.2px;
  width: 43.5px;
  position: relative;
`;
const FrameWithinAFrame = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-17xl) 0px 0px;
`;
const Div1 = styled.div`
  align-self: stretch;
  position: relative;
  @media screen and (max-width: 450px) {
    font-size: var(--font1-size);
  }
`;
const LogicalUnion = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 18px 0px;
  max-width: 100%;
`;
const NestedFrames = styled.div`
  width: 512px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-3xl);
  box-sizing: border-box;
  max-width: 100%;
  font-size: var(--font4-size);
`;
const UnionIcon2 = styled.img`
  height: 74.5px;
  width: 75.5px;
  position: absolute;
  margin: 0 !important;
  top: 261.8px;
  left: -33.4px;
  object-fit: contain;
  z-index: 4;
`;
const Div2 = styled.div`
  align-self: stretch;
  position: relative;
  font-weight: 300;
  z-index: 2;
  top: 300px;
  left: 350px;
  font-size: var(--font-size1);
  font-family: "SF Pro";
  padding: var(--padding-43xl);
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lgi);
  }
`;
const FrameChild = styled.img`
  position: absolute;
  top: 0px;
  left: 434px;
  width: 311.8px;
  height: 229.9px;
`;
const FrameItem = styled.img`
  position: absolute;
  top: 231.7px;
  left: 178px;
  width: 454.6px;
  height: 374.6px;
  object-fit: contain;
`;
const FrameInner = styled.img`
  position: absolute;
  top: 269.1px;
  left: 167.4px;
  width: 434.1px;
  height: 373.3px;
  object-fit: contain;
  z-index: 1;
`;
const GroupIcon = styled.img`
  position: absolute;
  top: 223px;
  left: 0px;
  width: 431.3px;
  height: 272px;
  object-fit: contain;
  z-index: 3;
`;
const CatIcon = styled.img`
  position: absolute;
  top: 405px;
  left: 186px;
  width: 199.1px;
  height: 281px;
  object-fit: cover;
  z-index: 4;
`;
const FrameParent = styled.div`
  width: 746px;
  height: 686px;
  position: absolute;
  margin: 0 !important;
  top: -50px;
  left: -50px;
`;
const Rectangle = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;
const UnionGroup = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-52xl) 0px 0px;
  box-sizing: border-box;
  min-width: 242px;
  max-width: 100%;
`;
const UnionIcon3 = styled.img`
  height: 25.5px;
  width: 26.6px;
  position: relative;
  object-fit: cover;
`;
const UnionIcon4 = styled.img`
  height: 60.4px;
  width: 62.2px;
  position: absolute;
  margin: 0 !important;
  right: 72.6px;
  bottom: -43.8px;
  object-fit: contain;
`;
const FrameText = styled.div`
  width: 834px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-343xl) 0px var(--padding-147xl) var(--padding-366xl);
  box-sizing: border-box;
  position: relative;
  gap: 0px 49px;
  max-width: 100%;
  @media screen and (max-width: 1050px) {
    padding-left: var(--padding-173xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 750px) {
    padding-top: var(--padding-216xl);
    padding-bottom: var(--padding-89xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 450px) {
    gap: 0px 49px;
    padding-left: var(--padding-xl);
    box-sizing: border-box;
  }
`;
const UnionGroup1 = styled.div`
  width: 1254px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0px var(--padding-xl);
  box-sizing: border-box;
  max-width: 100%;
  font-size: var(--font3-size);
`;
const TextElement1 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 30px 0px;
  max-width: 100%;
`;
const ChildInfoFrameRoot = styled.div`
  width: 1326px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-sm) 0px 0px;
  box-sizing: border-box;
  max-width: 100%;
  text-align: left;
  font-size: var(--font-size);
  color: var(--color);
  font-family: var(--font1);
`;

const ChildInfoFrame: FunctionComponent = () => {
  return (
    <ChildInfoFrameRoot>
      <TextElement1>
        <SquareShape1>
          <H>Мы помогаем спасти жизнь домашним животным</H>
          <H1>О проекте -</H1>
          <UnionIcon alt="" src="/union-1@2x.png" />
          <UnionIcon1 alt="" src="/union-2@2x.png" />
          <TextNode>
            <TextContainer>
              <TextItem>
                <H2>Хотим немного рассказать</H2>
                <TextItemChild loading="eager" alt="" src="/group-59@2x.png" />
              </TextItem>
            </TextContainer>
            <TextElement>
              <Div>
                <P>
                  По 
                  <A
                    href="https://www.interfax.ru/russia/759814"
                    target="_blank"
                  >
                    официальным данным
                  </A>
                   количество домашних животных в России растёт с каждым годом.
                </P>
                <BlankLine>&nbsp;</BlankLine>
                <P>{`В                         году количество кошек `}</P>
                <BlankLine>{`составило 40,8 млн., а собак – 22,6 млн. `}</BlankLine>
              </Div>
              <SquareShape>2021</SquareShape>
            </TextElement>
          </TextNode>
        </SquareShape1>
        <NestedFrames>
          <LogicalUnion>
            <FrameWithinAFrame>
              <FrameWithinAFrameChild
                loading="eager"
                alt=""
                src="/group-47.svg"
              />
            </FrameWithinAFrame>
            <Div1>
              <BlankLine>
                В то же время и растёт количество случаев, когда питомцу
                требуется срочная помощь.
              </BlankLine>
              <BlankLine>В наших с вами руках сделать мир лучше</BlankLine>
            </Div1>
          </LogicalUnion>
        </NestedFrames>
        <UnionGroup1>
          <FrameText>
            <UnionIcon2 alt="" src="/union-4@2x.png" />
            <UnionGroup>
              <Rectangle>
                <Div2>
                  Это сделать так, чтобы каждый день в каждый центр крови
                  приходило нужное число доноров.
                </Div2>
                <FrameParent>
                  <FrameChild loading="eager" alt="" src="/group-45.svg" />
                  <FrameItem alt="" src="/rectangle-38.svg" />
                  <FrameInner alt="" src="/rectangle-36.svg" />
                  <GroupIcon alt="" src="/group-29@2x.png" />
                  <CatIcon loading="eager" alt="" src="/cat@2x.png" />
                </FrameParent>
              </Rectangle>
            </UnionGroup>
            <UnionIcon3 alt="" src="/union-3@2x.png" />
            <UnionIcon4 alt="" src="/union-5@2x.png" />
          </FrameText>
        </UnionGroup1>
      </TextElement1>
    </ChildInfoFrameRoot>
  );
};

export default ChildInfoFrame;
