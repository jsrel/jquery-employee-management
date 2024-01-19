import { Layout } from "./Layout";
import "../components/auth-page/signIn";
import "../components/auth-page/signUp";

export const Auth = Layout(`
  <h1>This was Auth-Page</h1>
  <sign-up></sign-up>
  <sign-in></sign-in>
`);
