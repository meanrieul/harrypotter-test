import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Checkbox from "Components/checkbox";
import img from "assets/question.jpg";

const questions = [
  {
    title: "복도를 걷던 중,\n선배에게 괴롭힘을 당하는 친구를 발견했다.",
    size: 4,
    options: [
      { text: "도움이 될 만한 사람을\n찾아 불러온다.", score: [33, 0, 0, 0] },
      { text: "선배에게 직접\n그만두라고 얘기한다.", score: [100, 0, 0, 0] },
      {
        text: "'다른 사람이 도와주겠지'\n생각하고 지나친다.",
        score: [0, 0, 0, 0],
      },
      { text: "선배의 관심사를 돌릴\n방법을 찾아본다.", score: [66, 20, 0, 0] },
    ],
  },
  {
    title: "산책을 하던 중 길을 잃은 강아지를 발견했다.",
    size: 3,
    options: [
      {
        text: "한 동안 지켜보다가 집으로 데려간다.",
        score: [0, 0, 0, 0],
      },
      {
        text: "인식표를 확인한 뒤,\n주변 동물병원에 가서 주인을 찾아본다.",
        score: [0, 90, 0, 0],
      },
      {
        text: "신경 쓰지 않고 지나간다.",
        score: [0, 45, 0, 0],
      },
    ],
  },
  {
    title:
      "외국인 친구가 다른 친구들 사이에서\n인종차별로 괴롭힘을 당하고 있다.",
    size: 4,
    options: [
      {
        text: "같이 괴롭힘을 당할지도\n모르니 다른 친구들의 말에\n조금씩 호응을 해준다.",
        score: [0, 0, -50, 0],
      },
      {
        text: "그 상황이 지난 뒤\n외국인 친구를 따로 만나\n이야기를 나눈다.",
        score: [0, 0, 50, 0],
      },
      {
        text: "다른 친구들에게\n옳지 못한 행동임을\n말해준 뒤\n친구에게 도움을 준다.",
        score: [0, 0, 100, 0],
      },
      {
        text: "본인의 문제가 아니니\n옹호하지도 도와주지도\n않는다.",
        score: [0, 0, 0, 0],
      },
    ],
  },
  {
    title:
      "확실하진 않지만 빨리 도착할 수 있는 지름길과,\n확실하지만 먼 길의 갈래길에 서있다.",
    size: 2,
    options: [
      {
        text: "확실하지 않은 길은 두렵기에\n시간이 걸려도 확실한 길로 간다.",
        score: [0, 0, 0, 0],
      },
      {
        text: "고민없이 빨리 도착할 수 있는 길을 믿고 간다.",
        score: [0, 0, 0, 100],
      },
    ],
  },
  {
    title: "평소 좋아하지 않는 팀원이\n상사의 전달을 제대로 받지 못했다.",
    size: 4,
    options: [
      {
        text: "팀의 원활한 소통을 위해\n직접 알려준다.",
        score: [0, 90, 0, 0],
      },
      {
        text: "'누군가 알려주겠지'\n생각하고 내버려둔다.",
        score: [0, 0, 0, 0],
      },
      {
        text: "일부러 잘못된 정보를\n알려준다.",
        score: [0, 0, 0, 20],
      },
      {
        text: "알고 있는 정보가\n잘못되었다는 사실만\n인지시킨다.",
        score: [0, 50, 0, 0],
      },
    ],
  },
  {
    title: "여행을 하던 중 길을 잃어 낯선 곳에 도착했다.",
    size: 3,
    options: [
      {
        text: "설레는 마음으로 즉흥적인 여행을 시작한다.",
        score: [100, 0, 0, 0],
      },
      {
        text: "왔던 길을 되짚어서 원래의 여행지로 돌아간다.",
        score: [0, 0, 0, 0],
      },
      {
        text: "지구는 둥그니까 걷다보면 길을 찾을 것이다.",
        score: [50, 0, 0, 0],
      },
    ],
  },
  {
    title: "정당하지 못한 방식으로 승진을 할 수 있는 기회가 생겼다.",
    size: 3,
    options: [
      {
        text: "주변의 시선들을 무시하고 기회를 잡는다.",
        score: [0, 0, 0, 100],
      },
      {
        text: "기회가 좀 더 필요한 이를 추천하여 도와준다.",
        score: [0, 0, 0, 0],
      },
      {
        text: "정중하게 거절하고 맡은 바에 최선을 다한다.",
        score: [0, 0, 0, 50],
      },
    ],
  },
  {
    title: "조별과제의 리더가 된 당신, \n그룹에 겉 도는 멤버가 보인다.",
    size: 4,
    options: [
      {
        text: "그 멤버의 성향을\n파악하여 적절한 역할을\n부여하고자 노력한다.",
        score: [0, 20, 100, 0],
      },
      {
        text: "어떻게든 다른 멤버들과\n녹아들 수 있도록 한다.",
        score: [0, 0, 33, 0],
      },
      {
        text: "다른 신경 쓸 일이 많으니\n남는 역할을 부여한다.",
        score: [0, 0, 0, 0],
      },
      {
        text: "스스로 본인의 역할을\n얻어낼 수 있도록 한다.",
        score: [0, 0, 66, 0],
      },
    ],
  },
];
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 370px;
`;

const Theme = styled.form`
  width: 100%;
  display: flex;
  margin-top: 50px;
  flex-direction: column;
  align-items: center;
`;

const Question = styled.div`
  margin: 50px 0;
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Save = styled.button`
  position: absolute;
  top: 550px;
  height: 50px;
  width: 80px;
  background-color: #0c0c18;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Result = styled.button`
  position: absolute;
  top: 550px;
  height: 50px;
  width: 80px;
  background-color: white;
  color: #0c0c18;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const QuestionTitle = styled.h2`
  color: white;
  width: 90%;
  height: 60px;
  font-size: 18px;
  font-weight: 400;
  line-height: 30px;
  background-color: rgba(0, 0, 0, 0.6);
  box-shadow: 0 0 18px 14px rgba(0, 0, 0, 0.6);
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 50px;
  white-space: pre-wrap;
`;
const Cover = styled.img`
  position: absolute;
  width: 375px;
  height: 720px;
  top: 0;
  z-index: -1;
  filter: blur(1.5px);
  opacity: 0.8;
`;

const Page = styled.div`
  position: absolute;
  top: 565px;
  right: 30px;
  height: 15px;
  background-color: rgba(0, 0, 0, 0.6);
  box-shadow: 0 0 5px 10px rgba(0, 0, 0, 0.6);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 50%;
`;
const QuestPresenter = ({ handleSubmit, questionId }) => (
  <Container>
    <Cover src={img} />
    <Theme onSubmit={handleSubmit}>
      <QuestionTitle>{questions[questionId - 1].title}</QuestionTitle>
      <Question>
        <Checkbox
          num="Question"
          size={questions[questionId - 1].size}
          options={questions[questionId - 1].options}
        />
      </Question>
      <Page>{questionId}/8</Page>
      <ButtonContainer>
        {questionId === "8" ? (
          <Result>결과 보기</Result>
        ) : (
          <Save>다음 질문</Save>
        )}
      </ButtonContainer>
    </Theme>
  </Container>
);
export default QuestPresenter;
