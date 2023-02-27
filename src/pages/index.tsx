import MainBanner from "@/components/MainBanner";
import ProjectList from "@/components/ProjectList";
import SearchBar from "@/components/SearchBar";
import StudyList from "@/components/StudyList";
import styled from "@emotion/styled";

export default function Home() {
  return (
    <Container>
      <MainBanner></MainBanner>
      <SearchBar></SearchBar>
      <ProjectList></ProjectList>
      <StudyList></StudyList>
    </Container>
  );
}

const Container = styled.main`
  width: 100%;
  padding: 0px 100px;
  background-color: aliceblue;
`;
