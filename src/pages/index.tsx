import ProjectList from "@/components/ProjectList";
import SearchBar from "@/components/SearchBar";
import StudyList from "@/components/StudyList";
import dbConnect from "@/lib/util/db/dbConnect";
import User from "@/lib/util/db/schema/User";
import styled from "@emotion/styled";
import axios from "axios";
import { NextPageContext } from "next";
import cookies from "next-cookies";
import Router from "next/router";

export default function Home() {
  return (
    <Container>
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

export async function getServerSideProps(ctx: NextPageContext) {
  const { access_token } = cookies(ctx);
  dbConnect();

  if (!access_token || access_token === "") {
    if (ctx.req && ctx.res) {
      ctx.res.writeHead(302, { Location: "/auth/signIn" });
      ctx.res.end();
    } else {
      Router.push("/auth/signIn");
    }
  }

  const {
    data: {
      user: { id, username, avatar },
    },
  } = await axios.get("https://discord.com/api/oauth2/@me", {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  const user = await User.findOne({ discordId: id });

  if (!user) {
    await User.create({ discordId: id, username, avatarUrl: avatar });
  }

  return {
    props: {
      user: {
        discordId: user.discordId,
        username: user.username,
        avatarUrl: user.avatarUrl,
      },
    },
  };
}
