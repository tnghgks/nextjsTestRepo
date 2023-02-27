import styled from "@emotion/styled";
import Link from "next/link";

export const Nav = () => {
  return (
    <Container>
      <MenuContainer>
        <li>
          <Link href="/">홈</Link>
        </li>
        <li>
          <Link href="/project">프로젝트 모집</Link>
        </li>
        <li>
          <Link href="/study">스터디 모집</Link>
        </li>
        <li>
          <Link href="/chat">채팅</Link>
        </li>
      </MenuContainer>
      <AuthContainer>
        <li>
          <Link href="/myInfo">내정보</Link>
        </li>
        <li>
          <Link href="/auth/signIn">로그인</Link>
        </li>
        <li>
          <Link href="/auth/signUp">회원가입</Link>
        </li>
      </AuthContainer>
    </Container>
  );
};
const Container = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  height: 60px;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: antiquewhite;
`;

const MenuContainer = styled.ul`
  display: flex;
  gap: 5px;
  list-style: none;
`;

const AuthContainer = styled.ul`
  display: flex;
  gap: 5px;
  list-style: none;
  margin-right: 16px;
`;
