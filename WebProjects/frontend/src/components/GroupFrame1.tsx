import { FunctionComponent } from "react";
import styled from "styled-components";

const FrameTextChild = styled.img`
  height: 411px;
  flex: 1;
  position: relative;
  max-width: 100%;
  overflow: hidden;
  top: 470px;
  left: -200px;
  @media screen and (max-width: 1200px) {
    flex: 1;
  }
`;
const H = styled.h1`
  margin: 0 !important;
  width: 1073px;
  position: absolute;
  top: 200px;
  right: -793.02px;
  font-size: inherit;
  font-weight: 400;
  font-family: inherit;
  display: inline-block;
  text-shadow: 1px 0 0 #6c8776, 0 1px 0 #6c8776, -1px 0 0 #6c8776,
    0 -1px 0 #6c8776;
  transform: rotate(5.49deg);
  transform-origin: 0 0;
  z-index: 1;
  font-family: "Super Webcomic Bros. (Rus by yakustick)";
  @media screen and (max-width: 1050px) {
    font-size: var(--font-size-29xl);
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-10xl);
  }
`;
const FrameText = styled.div`
  width: 568px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  min-width: 568px;
  max-width: 100%;
  @media screen and (max-width: 1200px) {
    flex: 1;
  }
  @media screen and (max-width: 750px) {
    min-width: 100%;
  }
`;
const Div = styled.div`
  width: 286px;
  position: relative;
  line-height: 24px;
  display: inline-block;
  flex-shrink: 0;
  min-width: 286px;
  left: -150px;
  font-family: "SF Pro";
  font-size: var(--font-size-lgi);
  top: 500px;
  @media screen and (max-width: 750px) {
    flex: 1;
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font1-size);
  }
`;
const FrameTextItem = styled.img`
  align-self: stretch;
  height: 41.3px;
  position: relative;
  max-width: 100%;
  top: 330px;
  overflow: hidden;
  flex-shrink: 0;
`;
const Li = styled.li`
  font-size: var(--font-size-lgi);
  font-family: "SF Pro";
`;
const Ul = styled.ul`
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  padding-left: var(--padding-8xl);
`;
const Div1 = styled.div`
  flex: 1;
  position: relative;
  top: 500px;
  left: -100px;
  @media screen and (max-width: 450px) {
    font-size: var(--font1-size);
  }
`;
const FrameText1 = styled.div`
  width: 372px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-15xl);
  box-sizing: border-box;
  max-width: 100%;
`;
const FrameText2 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 48px 0px;
  max-width: 100%;
  @media screen and (max-width: 450px) {
    gap: 48px 0px;
  }
`;
const FrameText3 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 37px 0px;
  max-width: 100%;
  @media screen and (max-width: 450px) {
    gap: 37px 0px;
  }
`;
const FrameText4 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px var(--padding-2xs);
  box-sizing: border-box;
  min-width: 268px;
  max-width: 100%;
`;
const Parent1 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  row-gap: 20px;
  max-width: 100%;
  @media screen and (max-width: 750px) {
    flex-wrap: wrap;
  }
`;
const UnionParent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-9xs) 0px 0px;
  box-sizing: border-box;
  min-width: 454px;
  max-width: 100%;
  font-size: var(--font4-size);
  color: var(--color);
  font-family: var(--font1);
  @media screen and (max-width: 750px) {
    min-width: 100%;
  }
`;
const FrameText5 = styled.div`
  width: 1393px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0px 0px 0px var(--padding-xl);
  box-sizing: border-box;
  gap: 0px 107px;
  max-width: 100%;
  @media screen and (max-width: 1200px) {
    flex-wrap: wrap;
  }
  @media screen and (max-width: 750px) {
    gap: 0px 107px;
  }
  @media screen and (max-width: 450px) {
    gap: 0px 107px;
  }
`;
const GroupFrameRoot = styled.section`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px var(--padding-2xs);
  box-sizing: border-box;
  max-width: 100%;
  text-align: left;
  font-size: var(--font2-size);
  color: var(--color2);
  font-family: var(--font);
`;

const GroupFrame1: FunctionComponent = () => {
  return (
    <GroupFrameRoot>
      <FrameText5>
        <FrameText>
          <FrameTextChild loading="eager" alt="" src="/group-30.svg" />
          <H>Об организации</H>
        </FrameText>
        <UnionParent>
          <Parent1>
            <Div>
              Мы начинали с путь с волонтерской группы ВКонтакте и сайта для
              поиска доноров крови для людей. В 2013 году была создана
              юридическая организация. Ассоциация «Некоммерческое партнерство
              развития донорства «Донор-Сёрч»» была основана, чтобы наш
              социальный проект мог работать в юридическом поле.
            </Div>
            <FrameText4>
              <FrameText3>
                <FrameText2>
                  <FrameTextItem loading="eager" alt="" src="/group-48.svg" />
                  <FrameText1>
                    <Div1>
                      <Ul>
                        <Li>
                          В 2024 году Ассоциация была реорганизована в форме
                          преобразования в Автономная некоммерческая организация
                          "Институт развития донорства "Донор-Сёрч (Поиск
                          доноров)"
                        </Li>
                      </Ul>
                    </Div1>
                  </FrameText1>
                </FrameText2>
                <FrameText1>
                  <Div1>
                    <Ul>
                      <Li>
                        В 2024 году мы приняли решение создать проект для помощи
                        питомцев.
                      </Li>
                    </Ul>
                  </Div1>
                </FrameText1>
              </FrameText3>
            </FrameText4>
          </Parent1>
        </UnionParent>
      </FrameText5>
    </GroupFrameRoot>
  );
};

export default GroupFrame1;
