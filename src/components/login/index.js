import { Button } from "@material-ui/core";
import React from "react";
import { auth, provider } from "../../firebase";
import { LoginContainer, LoginInnerContainer } from "./styles";

function Login() {
  const signIn = (e) => {
    e.preventDefault();
    auth.signInWithPopup(provider).catch((error) => {
      console.log(error);
    });
  };
  return (
    <LoginContainer>
      <LoginInnerContainer>
        <img
          src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg"
          alt=""
        />

        <h1>Sign In to Slack Clone</h1>
        <p>by: mgarreaza13</p>

        <Button onClick={signIn}>Sign in with Google</Button>
      </LoginInnerContainer>
    </LoginContainer>
  );
}

export default Login;
