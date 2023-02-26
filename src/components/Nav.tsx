import Link from "next/link";

export const Nav = () => {
  return (
    <ul>
      <li>
        <Link href="/">프로젝트 모집</Link>
      </li>
      <li>
        <Link href="/chat">채팅</Link>
      </li>
      <li>
        <Link href="/myInfo">내정보</Link>
      </li>
      <li>
        <Link href="/auth/signIn">로그인</Link>
      </li>
      <li>
        <Link href="/auth/signUp">회원가입</Link>
      </li>
    </ul>
  );
};
