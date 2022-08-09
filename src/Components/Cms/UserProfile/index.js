import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

import FormData from "../FormData";

const Profile = () => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [userMetadata, setUserMetadata] = useState(null);
  const [userFoodBank, setUserFoodBank] = useState();

  useEffect(() => {
    const getUserMetadata = async () => {
      const domain = "ylfb.eu.auth0.com";

      try {
        const accessToken = await getAccessTokenSilently({
          audience: `https://${domain}/api/v2/`,
          scope: "read:current_user",
        });

        const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user.sub}`;

        const metadataResponse = await fetch(userDetailsByIdUrl, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        const { user_metadata } = await metadataResponse.json();

        setUserMetadata(user_metadata);
        setUserFoodBank(user_metadata.foodbank);
      } catch (e) {
        console.log(e.message);
      }
    };

    getUserMetadata();
  }, [getAccessTokenSilently, user?.sub]);

  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <h3>User Metadata</h3>
        {userMetadata ? (
          <>
            <pre>{JSON.stringify(userMetadata, null, 2)}</pre>
            <FormData></FormData>
            <p>Your foodbank: {userFoodBank}</p>
          </>
        ) : (
          "No user metadata defined"
        )}
      </div>
    )
  );
};

export default Profile;
