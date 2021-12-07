import React, { useState } from "react";
import SocialButton from "./SocialButton";
import { useHistory } from "react-router-dom";

export default function SocialLogin() {
  // console.log(user)
  let history = useHistory();
  const [info, setInfo] = useState({});
  const handleSocialLogin = (user) => {
    if (user !== null) {
      setInfo(user._profile);
    }
    history.push("/page");

    // setInfo(user)
    console.log(user._profile);
  };
  const handleSocialLoginFailure = (err) => {
    console.error(err);
  };
  console.log(info);
  return (
    <div>
      <h1>Social Login</h1>
      <SocialButton
        provider="facebook"
        appId="380754813776401"
        onLoginSuccess={handleSocialLogin}
        onLoginFailure={handleSocialLoginFailure}
      >
        Login with Facebook
      </SocialButton>
      <SocialButton
        provider="google"
        appId="294113458692-tam3rf5kg5vh8u4jsj3jgp8t6u8g7372.apps.googleusercontent.com"
        onLoginSuccess={handleSocialLogin}
        onLoginFailure={handleSocialLoginFailure}
      >
        Login with Google
      </SocialButton>

      <ul>
        <li>
          <img src={info.profilePicURL}></img>
        </li>
        <li>
          {info.firstName}&nbsp;{info.lastName}
        </li>
        <li>{info.id}</li>
        <li>{info.email}</li>
      </ul>
    </div>
  );
}
