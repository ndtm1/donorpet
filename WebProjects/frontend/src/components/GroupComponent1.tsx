import { FunctionComponent } from "react";
import styled from "styled-components";

const WorldwideUsersFrameChild = styled.img`
  position: absolute;
  top: 0.2px;
  left: 0.8px;
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
const WorldwideWebUsersIcon = styled.img`
  position: absolute;
  top: 46.7px;
  left: 0px;
  width: 126.7px;
  height: 126.7px;
  overflow: hidden;
  z-index: 1;
`;
const WorldwideUsersFrame = styled.div`
  position: absolute;
  top: -0.2px;
  left: 0px;
  width: 415px;
  height: 232px;
`;
const Span = styled.span``;
const Span1 = styled.span`
  color: var(--color3);
  font-size: var(--font3-size);
  font-family: var(--font3);
`;
const Div = styled.div`
  position: absolute;
  top: 48.4px;
  left: 161.4px;
  display: inline-block;
  width: 314.3px;
  z-index: 1;
`;
const WorldwideUsersFrameParent = styled.div`
  position: absolute;
  top: 4.2px;
  left: 0px;
  width: 475.7px;
  height: 232.2px;
`;
const RectangleVectorChild = styled.img`
  position: absolute;
  top: 0px;
  left: 0.1px;
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
const MobilePhoneHandHoldIcon = styled.img`
  position: absolute;
  top: 47.3px;
  left: 11.9px;
  width: 107.3px;
  height: 107.3px;
  overflow: hidden;
  z-index: 1;
`;
const RectangleVector = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
`;
const FrameInstance = styled.div`
  position: absolute;
  top: 0px;
  left: -0.1px;
  width: 100%;
  height: 100%;
`;
const Div1 = styled.div`
  position: absolute;
  top: 63px;
  left: 158px;
  display: inline-block;
  width: 256.9px;
  z-index: 1;
`;
const FrameInstanceParent = styled.div`
  position: absolute;
  top: 0px;
  left: 577.1px;
  width: 414.9px;
  height: 203px;
`;
const FrameGroupsChild = styled.img`
  position: absolute;
  top: 0.4px;
  left: 9px;
  width: 413.4px;
  height: 213.8px;
  object-fit: contain;
`;
const BusinessDealHandshakeIcon = styled.img`
  position: absolute;
  top: 40.9px;
  left: -0.4px;
  width: 121.7px;
  height: 121.7px;
  overflow: hidden;
  z-index: 1;
`;
const FrameGroups = styled.div`
  position: absolute;
  top: -0.4px;
  left: 0.4px;
  width: 423px;
  height: 214px;
`;
const P = styled.p`
  margin: 0;
`;
const P1 = styled.p`
  margin: 0;
  white-space: pre-wrap;
`;
const Div2 = styled.div`
  position: absolute;
  top: 44.3px;
  left: 152.9px;
  display: inline-block;
  width: 313.5px;
  z-index: 1;
`;
const FrameGroupsParent = styled.div`
  position: absolute;
  top: 216.4px;
  left: 258.6px;
  width: 466.4px;
  height: 213.8px;
  z-index: 2;
`;
const FrameParentRoot = styled.div`
  height: 430.2px;
  flex: 1;
  position: relative;
  max-width: 100%;
  text-align: left;
  font-size: var(--font1-size);
  color: var(--color);
  font-family: var(--font1);
`;

const GroupComponent1: FunctionComponent = () => {
  return (
    <FrameParentRoot>
      <WorldwideUsersFrameParent>
        <WorldwideUsersFrame>
          <WorldwideUsersFrameChild alt="" />
          <WorldwideWebUsersIcon alt="" />
        </WorldwideUsersFrame>
        <Div>
          <Span>
            <Span>За 14 лет работы наша онлайн платформа объединила более</Span>
            <Span1>{` `}</Span1>
          </Span>
          <Span1>
            <Span>{`200 000 `}</Span>
          </Span1>
          <Span>{`человек. За последние пару лет мы вышли на направление корпоративного донорства, тем самым увеличив охват участников проекта. . `}</Span>
        </Div>
      </WorldwideUsersFrameParent>
      <FrameInstanceParent>
        <FrameInstance>
          <RectangleVector>
            <RectangleVectorChild alt="" />
            <MobilePhoneHandHoldIcon loading="eager" alt="" />
          </RectangleVector>
        </FrameInstance>
        <Div1>
          Уменьшение порога вхождения в донорскую среду и цифровизация сделали
          процесс сдачи а также получение крови намного проще
        </Div1>
      </FrameInstanceParent>
      <FrameGroupsParent>
        <FrameGroups>
          <FrameGroupsChild loading="eager" alt="" />
          <BusinessDealHandshakeIcon alt="" />
        </FrameGroups>
        <Div2>
          <P>{`Партнёрские программы и коллаборации стали одним из ключевых способов для привлечения новых людей. `}</P>
          <P1>
            Вырученные деньги с пожертвований развили проект, без этих средств
            организация была бы невозможна
          </P1>
        </Div2>
      </FrameGroupsParent>
    </FrameParentRoot>
  );
};

export default GroupComponent1;
