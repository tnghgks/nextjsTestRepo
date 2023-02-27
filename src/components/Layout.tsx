import styled from "@emotion/styled";
import Head from "next/head";
import { PropsWithChildren } from "react";
import { Nav } from "./Nav";

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Head>
        <title>프로젝트 모집</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      {children}
      <Footer></Footer>
    </>
  );
};

const Footer = styled.footer`
  width: 100%;
  height: 60px;
  background-color: red;
`;
