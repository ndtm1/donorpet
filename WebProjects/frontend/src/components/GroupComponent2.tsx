import { FunctionComponent } from "react";
import styled from "styled-components";

const FrameChild = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  margin: 0 !important;
  top: -0.4px;
  right: 0.4px;
  bottom: 0.7px;
  left: 0px;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const Div = styled.div`
  position: relative;
  z-index: 2;
  @media screen and (max-width: 450px) {
    font-size: var(--font4-size);
  }
`;
const MoveCrossover = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  border-radius: 50%;
  background-color: var(--color1);
  border: 0px solid var(--color-black);
  box-sizing: border-box;
  z-index: 1;
`;
const MoveCrossOverIcon = styled.img`
  position: absolute;
  top: 12.3px;
  left: 93.8px;
  width: 38.4px;
  height: 38.4px;
  overflow: hidden;
  object-fit: contain;
  z-index: 2;
`;
const MoveCrossoverParent = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  margin: 0 !important;
  top: 0px;
  right: 0.5px;
  bottom: 0px;
  left: -0.5px;
`;
const Parent1 = styled.div`
  width: 159px;
  margin: 0 !important;
  position: absolute;
  right: 33.5px;
  bottom: -32px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-mid) var(--padding-12xl) var(--padding-xl);
  box-sizing: border-box;
  color: var(--color-black);
`;
const H = styled.h1`
  margin: 0;
  position: relative;
  font-size: var(--font2-size);
  font-weight: 400;
  font-family: inherit;
  z-index: 2;
  @media screen and (max-width: 1050px) {
    font-size: var(--font-size-29xl);
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-10xl);
  }
`;
const Image7Icon = styled.img`
  width: 360px;
  height: 314.6px;
  position: absolute;
  margin: 0 !important;
  top: -54px;
  left: -10px;
  border-radius: var(--br-2xs-1);
  object-fit: contain;
  z-index: 1;
`;
const P = styled.p`
  font-family: "SF Pro";
  margin: 0;
`;
const Div1 = styled.div`
  width: 348px;
  position: relative;
  line-height: 19px;
  display: inline-block;
  flex-shrink: 0;
  max-width: 100%;
  z-index: 1;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-51xl) 0px var(--padding-23xl);
  box-sizing: border-box;
  max-width: 100%;
  font-size: var(--font1-size);
  font-family: var(--font1);
  @media screen and (max-width: 450px) {
    padding-left: var(--padding-2xl);
    padding-right: var(--padding-16xl);
    box-sizing: border-box;
  }
`;
const FrameParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  padding: var(--padding-65xl) var(--padding-24xl) var(--padding-42xl);
  box-sizing: border-box;
  position: relative;
  gap: 82px 0px;
  max-width: 100%;
  left: 300px;
  top: -100px;
  @media screen and (max-width: 750px) {
    gap: 82px 0px;
    padding: var(--padding-36xl) var(--padding-2xl) var(--padding-21xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 450px) {
    gap: 82px 0px;
  }
`;
const ChelseaImageInnerRoot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding: var(--padding-14xl) 0px var(--padding-14xl) var(--padding-3xs);
  box-sizing: border-box;
  min-height: 595px;
  max-width: 100%;
  text-align: left;
  font-size: var(--font-size-6xl-6);
  color: var(--color-linen);
  font-family: var(--font3);
  @media screen and (max-width: 750px) {
    padding-top: var(--padding-2xl);
    padding-bottom: var(--padding-2xl);
    box-sizing: border-box;
  }
`;

const GroupComponent2: FunctionComponent = () => {
  return (
    <ChelseaImageInnerRoot>
      <FrameParent>
        <FrameChild alt="" src="/group-33.svg" />
        <Parent1>
          <Div>еще</Div>
          <MoveCrossoverParent>
            <MoveCrossover />
            <MoveCrossOverIcon
              loading="eager"
              alt=""
              src="/movecrossover@2x.png"
            />
          </MoveCrossoverParent>
        </Parent1>
        <H>Челси</H>
        <Image7Icon alt="" src="/image-7@2x.png" />
        <Wrapper>
          <Div1>
            <P>
              Светлана Терлюк поделилась опытом в поиске донора крови для своей
              собаки
            </P>
            <P>{`Лабрадор перенесла несколько серьезных операций из за своей опухоли. `}</P>
            <P>&nbsp;</P>
            <P>
              Собака находилась на грани смерти ей срочно была нужна кровь.
              Светлана выложила пост на который откликнулись другие владельцы и
              вскоре собаке нашли подходящего донора.
            </P>
          </Div1>
        </Wrapper>
      </FrameParent>
    </ChelseaImageInnerRoot>
  );
};

export default GroupComponent2;
