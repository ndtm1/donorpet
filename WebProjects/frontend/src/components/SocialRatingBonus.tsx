import { FunctionComponent } from "react";
import styled from "styled-components";

const H = styled.h2`
  margin: 0 !important;
  position: absolute;
  top: 1750px;
  right: 299px;
  font-size: inherit;
  font-weight: 400;
  font-family: inherit;
  transform: rotate(-3.78deg);
  transform-origin: 0 0;
  z-index: 3;
  font-family: "Super Webcomic Bros. (Rus by yakustick)";
  @media screen and (max-width: 1050px) {
    font-size: var(--font-size-7xl);
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lgi);
  }
`;
const Li = styled.li`
  font-family: "SF Pro";
  font-size: var(--font-size-lgi);
  margin-bottom: 16px;
`;
const Li1 = styled.li``;
const Ol = styled.ol`
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  padding-left: var(--padding-13xl);
`;
const Div = styled.div`
  flex: 1;
  position: relative;
  top: 1560px;
  right: 250px;
  display: inline-block;
  max-width: 100%;
  z-index: 1;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lgi);
  }
`;
const TextBlockChild = styled.img`
  height: 299.6px;
  width: 301px;
  position: absolute;
  margin: 0 !important;
  top: 1470px;
  right: -220px;
  z-index: 2;
`;
const TextBlock = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  top: 200px;
  max-width: 100%;
`;
const TextBlock1 = styled.div`
  width: 540px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px var(--padding-20xl);
  box-sizing: border-box;
  min-width: 540px;
  max-width: 100%;
  @media screen and (max-width: 1050px) {
    flex: 1;
  }
  @media screen and (max-width: 750px) {
    min-width: 100%;
  }
`;
const Div1 = styled.div`
  width: 403px;
  position: relative;
  display: inline-block;
  flex-shrink: 0;
  top: 1800px;
  right: 40px;
  min-width: 403px;
  max-width: 100%;
  z-index: 3;
  @media screen and (max-width: 1050px) {
    flex: 1;
  }
  @media screen and (max-width: 750px) {
    min-width: 100%;
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lgi);
  }
`;
const TextBlock2 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  gap: var(--gap-xl);
  max-width: 100%;
  font-size: var(--font3-size);
  color: var(--color-black);
  font-family: var(--font3);
  @media screen and (max-width: 1050px) {
    flex-wrap: wrap;
  }
`;
const Div2 = styled.div`
  position: relative;
  font-size: var(--font4-size);
  font-family: var(--font1);
  color: var(--color4);
  text-align: left;
`;
const Wrapper = styled.button`
  cursor: pointer;
  border: none;
  padding: var(--padding-lg);
  background-color: var(--color3);
  width: 397px;
  border-radius: var(--br-22xl);
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  max-width: 100%;
  white-space: nowrap;
  &:hover {
    background-color: var(--color-tomato);
  }
`;
const FrameInstance = styled.div`
  width: 865px;
  top: -3000px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0px var(--padding-xl);
  box-sizing: border-box;
  max-width: 100%;
`;
const TextBlock3 = styled.div`
  width: 1108px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 123px 0px;
  max-width: 100%;
  @media screen and (max-width: 1200px) {
    gap: 123px 0px;
  }
  @media screen and (max-width: 750px) {
    gap: 123px 0px;
  }
  @media screen and (max-width: 450px) {
    gap: 123px 0px;
  }
`;
const SocialRatingBonusRoot = styled.section`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px var(--padding-25xl) var(--padding-148xl);
  box-sizing: border-box;
  max-width: 100%;
  text-align: left;
  font-size: var(--font-size);
  color: var(--color);
  font-family: var(--font);
  @media screen and (max-width: 1200px) {
    padding-left: var(--padding-3xl);
    padding-right: var(--padding-3xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 750px) {
    padding-bottom: var(--padding-90xl);
    box-sizing: border-box;
  }
`;

const SocialRatingBonus: FunctionComponent = () => {
  return (
    <SocialRatingBonusRoot>
      <TextBlock3>
        <TextBlock>
          <H>Кошкам</H>
          <TextBlock2>
            <TextBlock1>
              <TextBlock>
                <Div>
                  <Ol>
                    <Li>Старше 1 года и младше 8 лет</Li>
                    <Li>Вакцинирована</Li>
                    <Li>Не имеет хронических заболеваний</Li>
                    <Li>Достаточно упитана и обработана от паразитов</Li>
                    <Li>
                      Нельзя сдавать кровь собаке в период течки, беременности и
                      кормления.
                    </Li>
                  </Ol>
                </Div>
                <TextBlockChild loading="eager" alt="" src="/group-52.svg" />
              </TextBlock>
            </TextBlock1>
            <Div1>
              <Ol>
                <Li>
                  Старше 1 года и младше 7 лет, а лучше от полутора до 5 лет.
                </Li>
                <Li>Весит не менее 4 кг.</Li>
                <Li>Не имеет хронических заболеваний.</Li>
                <Li>Достаточно упитана и обработана от паразитов.</Li>
              </Ol>
            </Div1>
          </TextBlock2>
        </TextBlock>
        <FrameInstance>
          <Wrapper>
            <Div2>Стать донором</Div2>
          </Wrapper>
        </FrameInstance>
      </TextBlock3>
    </SocialRatingBonusRoot>
  );
};

export default SocialRatingBonus;
