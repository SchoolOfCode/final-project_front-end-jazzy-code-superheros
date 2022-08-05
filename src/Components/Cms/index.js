import { Auth0Provider } from "@auth0/auth0-react";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogOutButton";

const Cms = () => {
  return (
    <Auth0Provider
      domain="ylfb.eu.auth0.com"
      clientId="zrlZu6p7qj4yAdHBVzmFyygtZoYTIyfW"
      redirectUri={window.location.origin}
    >
      <LoginButton />
      <LogoutButton />
    </Auth0Provider>
  );
};

export default Cms;
