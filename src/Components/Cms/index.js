import { Auth0Provider } from "@auth0/auth0-react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogOutButton";
import Profile from "./UserProfile";
import "./style.css";

const Cms = () => {
  console.log(process.env.REACT_APP_DOMAIN);
  return (
    <Auth0Provider
      domain={process.env.REACT_APP_DOMAIN}
      clientId={process.env.REACT_APP_CLIENTID}
      redirectUri={process.env.REACT_APP_REDIRECTURI}
      audience={process.env.REACT_APP_AUDIENCE}
      scope={process.env.REACT_APP_SCOPE}
    >
      <LoginButton />
      <LogoutButton />
      <Profile />
    </Auth0Provider>
  );
};

export default Cms;
