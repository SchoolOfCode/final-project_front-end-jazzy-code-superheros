import { Auth0Provider } from "@auth0/auth0-react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogOutButton";
import Profile from "./UserProfile";

const Cms = () => {
  return (
    <Auth0Provider
      domain="ylfb.eu.auth0.com"
      clientId="zrlZu6p7qj4yAdHBVzmFyygtZoYTIyfW"
      redirectUri="http://localhost:3000/admin"
      audience="https://ylfb.eu.auth0.com/api/v2/"
      scope="read:current_user update:current_user_metadata"
    >
      <LoginButton />
      <LogoutButton />
      <Profile />
    </Auth0Provider>
  );
};

export default Cms;
