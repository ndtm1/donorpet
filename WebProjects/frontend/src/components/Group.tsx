import { FunctionComponent } from "react";
import styled from "styled-components";
import GroupComponent2 from "./GroupComponent2";

const H = styled.h1`
  margin: 0 !important;
  height: 220px;
  width: 907px;
  position: absolute;
  bottom: 61.28px;
  left: 167px;
  top: 2800px;
  font-size: inherit;
  font-weight: 400;
  font-family: inherit;
  display: inline-block;
  transform: rotate(-2.51deg);
  transform-origin: 0 0;
  font-family: "Super Webcomic Bros. (Rus by yakustick)";
  @media screen and (max-width: 1050px) {
    font-size: var(--font-size-29xl);
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-10xl);
  }
`;
const UnionIcon = styled.img`
  height: 108.3px;
  width: 108.9px;
  position: absolute;
  margin: 0 !important;
  right: 323.1px;
  bottom: 212.7px;
  object-fit: contain;
  z-index: 1;
`;
const H1 = styled.h1`
  margin: 0 !important;
  position: absolute;
  right: 435.66px;
  bottom: 821px;
  font-size: inherit;
  font-weight: 400;
  font-family: inherit;
  transform: rotate(2.78deg);
  transform-origin: 0 0;
  z-index: 1;
  top: 800px;
  font-family: "Super Webcomic Bros. (Rus by yakustick)";
  @media screen and (max-width: 1050px) {
    font-size: var(--font-size-29xl);
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-10xl);
  }
`;
const BloodDonorsChild = styled.img`
  position: absolute;
  height: 100%;
  width: 200%;
  width: 2000px;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 200px;
  max-width: 200%;
  overflow: hidden;
  max-height: 100%;
  object-fit: cover;
`;
const BloodDonorsItem = styled.img`
  position: absolute;
  top: 210.4px;
  left: 374.1px;
  width: 496px;
  height: 75.8px;
  object-fit: contain;
  z-index: 2;
`;
const BloodDonors = styled.div`
  width: calc(100% - 367px);
  height: calc(100% - 2px);
  position: absolute;
  margin: 0 !important;
  top: 0px;
  right: 367px;
  bottom: 2px;
  left: 0px;
`;
const H2 = styled.h2`
  margin: 0 !important;
  width: calc(100% - 62.2px);
  height: calc(100% - 151.2px);
  position: absolute;
  top: 155.71px;
  left: -0.5px;
  font-size: inherit;
  font-weight: 400;
  font-family: inherit;
  display: inline-block;
  transform: rotate(-7.52deg);
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
const GroupBChild = styled.img`
  height: 298.9px;
  flex: 1;
  position: relative;
  max-width: 100%;
  overflow: hidden;
  z-index: 2;
`;
const P = styled.p`
  font-family: "SF Pro";
  font-size: var(--font-size-lgi);
  margin: 0;
`;
const Div = styled.div`
  width: 635px;
  position: relative;
  display: inline-block;
  flex-shrink: 0;
  max-width: 100%;
  @media screen and (max-width: 450px) {
    font-size: var(--font1-size);
  }
`;
const BoneMarrowBuddy = styled.div`
  width: 665px;
  margin: 0 !important;
  position: absolute;
  top: -65px;
  right: -300.6px;
  background-color: var(--color-darkslategray-100);
  backdrop-filter: blur(5px);
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  z-index: 3;
`;
const GroupB = styled.div`
  width: 471px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  max-width: 100%;
  font-size: var(--font4-size);
  font-family: var(--font1);
`;
const ReasonWhySafe = styled.div`
  align-self: stretch;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding: var(--padding-112xl) var(--padding-xl);
  box-sizing: border-box;
  position: relative;
  max-width: 100%;
  @media screen and (max-width: 750px) {
    padding-top: var(--padding-66xl);
    padding-bottom: var(--padding-66xl);
    box-sizing: border-box;
  }
`;
const FrameTextChild = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  margin: 0 !important;
  top: 0px;
  right: 0.2px;
  bottom: 0.4px;
  left: 0px;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  z-index: 3;
`;
const UnionIcon1 = styled.img`
  width: 161.4px;
  height: 159.5px;
  position: absolute;
  margin: 0 !important;
  bottom: -5.5px;
  left: -187.5px;
  object-fit: contain;
  z-index: 4;
`;
const UnionIcon2 = styled.img`
  width: 79.5px;
  height: 78.4px;
  position: absolute;
  margin: 0 !important;
  bottom: 133.6px;
  left: 104px;
  object-fit: contain;
  z-index: 5;
`;
const UnionIcon3 = styled.img`
  width: 60.7px;
  height: 58.3px;
  position: relative;
  object-fit: contain;
  z-index: 4;
`;
const FrameText = styled.div`
  width: 549px;
  height: 529px;
  margin: 0 !important;
  position: absolute;
  bottom: 34px;
  left: -40.5px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  padding: var(--padding-135xl) var(--padding-lg);
  box-sizing: border-box;
`;
const PupName = styled.div`
  align-self: stretch;
  width: 1272px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px var(--padding-xl) 0px 0px;
  box-sizing: border-box;
  position: relative;
  max-width: 100%;
`;
const TextInfo = styled.div`
  width: 1330px;
  height: 707px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 100%;
  font-size: var(--font-size);
`;
const ChelseaImage = styled.div`
  width: 1368px;
  overflow-x: auto;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0px 43px;
  max-width: 100%;
  z-index: 1;
  @media screen and (max-width: 750px) {
    gap: 0px 43px;
  }
`;
const ChelsyWithPets = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-xl) 0px 0px;
  box-sizing: border-box;
  max-width: 100%;
  font-size: var(--font-size-6xl-6);
  font-family: var(--font3);
`;
const UnionIcon4 = styled.img`
  width: 203.2px;
  height: 202.2px;
  position: absolute;
  margin: 0 !important;
  top: 111.5px;
  right: 460.7px;
  object-fit: contain;
  z-index: 2;
`;
const RescuedLives = styled.div`
  width: 1837px;
  display: flex;
  top: 1000px;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-87xl) 0px var(--padding-140xl) var(--padding-63xl);
  box-sizing: border-box;
  position: relative;
  gap: 323px 0px;
  max-width: 101%;
  flex-shrink: 0;
  left: 200px;
  @media screen and (max-width: 1200px) {
    gap: 323px 0px;
    padding-left: var(--padding-22xl);
    padding-top: var(--padding-50xl);
    padding-bottom: var(--padding-84xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 1050px) {
    padding-top: var(--padding-26xl);
    padding-bottom: var(--padding-48xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 750px) {
    gap: 323px 0px;
    padding-top: var(--padding-10xl);
    padding-bottom: var(--padding-25xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 450px) {
    gap: 323px 0px;
  }
`;
const Group1 = styled.div`
  width: 1817px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px 0px;
  box-sizing: border-box;
  max-width: 126%;
  flex-shrink: 0;
`;
const Group2 = styled.div`
  width: 1440px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 0px var(--padding-555xl) 0px;
  box-sizing: border-box;
  max-width: 100%;
  color: var(--color-linen);
  @media screen and (max-width: 1200px) {
    padding-bottom: var(--padding-223xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 750px) {
    padding-bottom: var(--padding-138xl);
    box-sizing: border-box;
  }
`;
const GroupRoot = styled.section`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  max-width: 100%;
  text-align: left;
  font-size: var(--font2-size);
  color: var(--color2);
  font-family: var(--font);
`;

const Group: FunctionComponent = () => {
  return (
    <GroupRoot>
      <H>Ваш питомец - донор</H>
      <UnionIcon alt="" src="/union-10@2x.png" />
      <Group2>
        <Group1>
          <RescuedLives>
            <H1>спасенные жизни</H1>
            <BloodDonors>
              <BloodDonorsChild alt="" src="/rectangle-37.svg" />
              <BloodDonorsItem loading="eager" alt="" src="/group-32@2x.png" />
            </BloodDonors>
            <TextInfo>
              <PupName>
                <ReasonWhySafe>
                  <H2>Почему питомцу безопасно быть донором</H2>
                  <GroupB>
                    <GroupBChild loading="eager" alt="" src="/group-31.svg" />
                    <BoneMarrowBuddy>
                      <Div>
                        <P>{`Донорство крови безопасно для питомцев, и даже полезно. Ведь перед этим он пройдет осмотр ветеринаром, сдаст необходимые анализы для исследования. `}</P>
                        <P>{`Это позволит его хозяину быть уверенным в правильном питании, образе жизни своего любимца, держать руку на пульсе и не упустить какие-либо проблемы с его здоровьем. `}</P>
                        <P>&nbsp;</P>
                        <P>{`При заборе крови ветеринар берет лишь необходимый ее объем, учитывая возраст, вес и особенности конкретной кошки или собаки. `}</P>
                        <P>
                          Во время процедуры (а это около получаса) животному
                          следует лежать спокойно, поэтому некоторым собакам и
                          большинству кошек вводят успокаивающие препараты. Они
                          имеют короткое действие, безопасны, уменьшают стресс и
                          делают саму процедуру более комфортной.
                        </P>
                      </Div>
                    </BoneMarrowBuddy>
                  </GroupB>
                </ReasonWhySafe>
                <FrameText>
                  <FrameTextChild alt="" src="/group-40.svg" />
                  <UnionIcon1 alt="" src="/union-11@2x.png" />
                  <UnionIcon2 alt="" src="/union-12@2x.png" />
                  <UnionIcon3 alt="" src="/union-13@2x.png" />
                </FrameText>
              </PupName>
            </TextInfo>
            <ChelsyWithPets>
              <ChelseaImage>
                <GroupComponent2 />
                <GroupComponent2 />
                <GroupComponent2 />
              </ChelseaImage>
            </ChelsyWithPets>
            <UnionIcon4 alt="" src="/union-14@2x.png" />
          </RescuedLives>
        </Group1>
      </Group2>
    </GroupRoot>
  );
};

export default Group;
