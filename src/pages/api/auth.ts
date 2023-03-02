import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { code } = req.query;

  if (code && typeof code === "string") {
    const API_ENDPOINT = "https://discord.com/api/oauth2/token";
    const CLIENT_ID = process.env.CLIENT_ID || "";
    const CLIENT_SECRET = process.env.CLIENT_SECRET || "";
    const REDIRECT_URI = `${process.env.PUBLIC_URL}/api/auth`;
    const headers = { "Content-type": "application/x-www-form-urlencoded" };

    const params = new URLSearchParams();
    params.append("client_id", CLIENT_ID);
    params.append("client_secret", CLIENT_SECRET);
    params.append("grant_type", "authorization_code");
    params.append("code", code);
    params.append("redirect_uri", REDIRECT_URI);
    params.append("scope", "identify");

    const resp = await axios.post<any, any>(API_ENDPOINT, params, {
      headers,
    });

    res.setHeader("Set-Cookie", `access_token=${resp.data.access_token}; path=/;`);
    res.redirect("/");
  }
}
