import { FunctionComponent } from "react";
import styled from "styled-components";
import "fonts.css"

const SearchEllipseChild = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  margin: 0 !important;
  top: 0.2px;
  right: -0.3px;
  bottom: 0px;
  left: 0px;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const Div = styled.div`
  position: relative;
  z-index: 2;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-xl);
  }
`;
const SvetlanaExperience = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0px;
  right: -0.4px;
  bottom: 0px;
  left: 0.4px;
  border-radius: 50%;
  background-color: var(--color1);
  border: 1px solid var(--color-black);
  box-sizing: border-box;
  z-index: 1;
`;
const MoveCrossOverIcon = styled.img`
  position: absolute;
  top: 12.3px;
  left: 94.2px;
  width: 38.4px;
  height: 38.4px;
  overflow: hidden;
  object-fit: contain;
  z-index: 2;
`;
const ChelseaStory = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  margin: 0 !important;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
`;
const SaveLifeText = styled.div`
  width: 159px;
  margin: 0 !important;
  position: absolute;
  right: 47px;
  bottom: -33px;
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
  font-family: "Krivulya-Regular",cursive;
  display: inline-block;
  max-width: 100%;
  z-index: 1;
  @media screen and (max-width: 1050px) {
    font-size: var(--font-size-29xl);
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-10xl);
  }
`;
const P = styled.p`
  margin: 0;
`;
const Div1 = styled.div`
  width: 338px;
  position: relative;
  line-height: 19px;
  display: inline-block;
  flex-shrink: 0;
  max-width: 100%;
  z-index: 1;
`;
const RectangleFrame = styled.div`
  width: 664px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  max-width: 100%;
  font-size: var(--font1-size);
  font-family: var(--font1);
`;
const Image7Icon = styled.img`
  width: 501.1px;
  height: 431.1px;
  position: absolute;
  margin: 0 !important;
  top: -100px;
  left: 48.4px;
  border-radius: 8.02px;
  object-fit: contain;
  z-index: 1;
`;
const SearchEllipse = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  padding: var(--padding-43xl) var(--padding-46xl) var(--padding-37xl);
  box-sizing: border-box;
  position: relative;
  gap: 37px 0px;
  max-width: 100%;
  @media screen and (max-width: 1050px) {
    padding-left: var(--padding-13xl);
    padding-right: var(--padding-13xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 450px) {
    gap: 37px 0px;
    padding-top: var(--padding-21xl);
    padding-bottom: var(--padding-17xl);
    box-sizing: border-box;
  }
`;
const HistoryFrame = styled.div`
  width: 1166px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  max-width: 100%;
`;
const DonorSearchRoot = styled.section`
  width: 1248px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px var(--padding-xl) var(--padding-123xl);
  box-sizing: border-box;
  flex-shrink: 0;
  max-width: 100%;
  text-align: left;
  font-size: var(--font-size-6xl-6);
  color: var(--color);
  font-family: var(--font-krivulya);
  @media screen and (max-width: 750px) {
    padding-bottom: var(--padding-73xl);
    box-sizing: border-box;
  }
`;

const DonorSearchFirst: FunctionComponent = () => {
  return (
    <DonorSearchRoot>
      <HistoryFrame>
        <SearchEllipse>
          <SearchEllipseChild loading="eager" alt="" src="/bigVector.svg"/>
          <SaveLifeText>
            <Div>еще</Div>
            <ChelseaStory>
              <SvetlanaExperience />
              <MoveCrossOverIcon loading="eager" alt="" src="/next.svg"/>
            </ChelseaStory>
          </SaveLifeText>
          <H>История Челси</H>
          <RectangleFrame>
            <Div1>
              <P>
                Светлана Терлюк поделилась опытом в поиске донора крови для
                своей собаки
              </P>
              <P>{`Лабрадор перенесла несколько серьезных операций из за своей опухоли. `}</P>
              <P>&nbsp;</P>
              <P>
                Собака находилась на грани смерти ей срочно была нужна кровь.
                Светлана выложила пост на который откликнулись другие владельцы
                и вскоре собаке нашли подходящего донора...
              </P>
            </Div1>
          </RectangleFrame>
          <Image7Icon loading="eager" alt="" src="/chelsi.png"/>
        </SearchEllipse>
      </HistoryFrame>
    </DonorSearchRoot>
  );
};

export default DonorSearchFirst;
