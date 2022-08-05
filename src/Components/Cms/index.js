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
    >
      <LoginButton/>
      <LogoutButton />
      <Profile/>
    </Auth0Provider>

  );
};

export default Cms;
