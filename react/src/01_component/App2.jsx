import Header from "./Header2";
import Body from "./Body2";
import ProjectCard from "./ProjectCard.jsx";

const App2 = () => {
  const title = "급식 혼잡도 알림 서비스";
  const role = "프론트엔드 개발자";
  const count = 2;

  return (
    <>
      <Header />
      <Body />
      <ProjectCard title={title} role={role} count={count}>
        <p>급식실의 시간대별 혼잡도를 학생들에게 알리는 프로젝트입니다.</p>
      </ProjectCard>
    </>
  );
};

export default App2;
