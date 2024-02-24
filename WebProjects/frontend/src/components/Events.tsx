import { FunctionComponent, type CSSProperties } from "react";
import styled from "styled-components";

export type GroupComponentType = {
  prop?: string;
  image7?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
};

const AdditionalSaveChild = styled.img`
  height: 100%;
  width: 100%;
  position: absolute;
  margin: 0 !important;
  top: 0.2px;
  right: -0.3px;
  bottom: -0.2px;
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
const YoungCentreV = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: -0.4px;
  right: 0px;
  bottom: 0.4px;
  left: 0px;
  border-radius: 50%;
  background-color: var(--color1);
  border: 1px solid var(--color-black);
  box-sizing: border-box;
  z-index: 1;
`;
const MoveCrossOverIcon = styled.img`
  position: absolute;
  top: 12px;
  left: 93.8px;
  width: 38.4px;
  height: 38.4px;
  overflow: hidden;
  object-fit: contain;
  z-index: 2;
`;
const YoungCentreVParent = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  margin: 0 !important;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
`;
const ImageFrame = styled.div`
  width: 159px;
  margin: 0 !important;
  position: absolute;
  right: -50px;
  bottom: -33.4px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-mid) var(--padding-12xl) var(--padding-xl);
  box-sizing: border-box;
`;
const Div1 = styled.div`
  flex: 1;
  position: relative;
  font-size: var(--font1-size);
  font-family: var(--font-inter);
  color: var(--color);
  display: inline-block;
  max-width: 100%;
  z-index: 1;
`;
const Image7Icon = styled.img`
  height: 277.5px;
  width: 466.1px;
  position: absolute;
  margin: 0 !important;
  top: -44px;
  left: -81px;
  border-radius: var(--br-2xs-1);
  object-fit: cover;
  z-index: 1;
`;
const AdditionalSave = styled.div<{ propPadding?: CSSProperties["padding"] }>`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-end;
  padding: var(--padding-26xl) var(--padding-21xl) var(--padding-26xl)
    var(--padding-52xl);
  box-sizing: border-box;
  position: relative;
  min-height: 404px;
  max-width: 100%;
  @media screen and (max-width: 450px) {
    padding-left: var(--padding-16xl);
    box-sizing: border-box;
  }
  padding: ${(p) => p.propPadding};
`;
const AdditionalSaveWrapperRoot = styled.div`
  width: 590px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  padding: var(--padding-14xl) var(--padding-31xl) var(--padding-14xl)
    var(--padding-62xl);
  box-sizing: border-box;
  max-width: 100%;
  text-align: left;
  font-size: var(--font-size-6xl-6);
  color: var(--color-black);
  font-family: var(--font-krivulya);
  @media screen and (max-width: 750px) {
    padding: var(--padding-2xl) var(--padding-6xl) var(--padding-2xl)
      var(--padding-21xl);
    box-sizing: border-box;
  }
`;

const Events: FunctionComponent<GroupComponentType> = ({
  prop,
  image7,
  propPadding,
}) => {
  return (
    <AdditionalSaveWrapperRoot>
      <AdditionalSave propPadding={propPadding}>
        <AdditionalSaveChild loading="eager" alt="" src="/greenVector.svg"/>
        <ImageFrame>
          <Div>еще</Div>
          <YoungCentreVParent>
            <YoungCentreV />
            <MoveCrossOverIcon loading="eager" alt="" src="/next.svg"/>
          </YoungCentreVParent>
        </ImageFrame>
        <Div1>{prop}</Div1>
        <Image7Icon loading="eager" alt="" src="/shodka.png" />
      </AdditionalSave>
    </AdditionalSaveWrapperRoot>
  );
};

export default Events;
