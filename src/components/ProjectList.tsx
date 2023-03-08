import styled from "@emotion/styled";
import Project from "./Project/Project";

export default function ProjectList() {
  return (
    <Container>
      <ProjectContainer>
        <Project></Project>
      </ProjectContainer>
    </Container>
  );
}

const Container = styled.section`
  width: 100%;
  height: 250px;
  border: 3px solid #000000;
  overflow: hidden;
`;

const ProjectContainer = styled.section`
  width: 100%;
  height: 250px;
  border: 3px solid #000000;
  overflow: hidden;
`;
