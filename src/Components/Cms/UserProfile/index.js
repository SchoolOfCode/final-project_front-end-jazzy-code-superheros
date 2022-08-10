import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
// import { useFetch } from "../../../hooks/useFetch";

import FormData from "../FormData";

const Profile = () => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [userMetadata, setUserMetadata] = useState(null);
  const [userFoodBank, setUserFoodBank] = useState("vauxhall");
  const [foodbankData, setFoodbankData] = useState(null);

  // const fetchedFoodbankData = useFetch(
  //   `https://yourlocalfoodbank.herokuapp.com/foodbanks/search/${userFoodBank}/`,
  //   userMetadata
  // );

  useEffect(() => {
    const getData = async (url) => {
      const response = await fetch(url);

      const data = await response.json();

      //dev feedback only remove
      console.log(`data in func >>>`, data);

      setFoodbankData(data);
    };
    const url = `https://yourlocalfoodbank.herokuapp.com/foodbanks/search/${userFoodBank}/`;
    getData(url);
  }, [userFoodBank]);

  // console.log(fetchedFoodbankData);

  console.log("foodbankData :>> ", foodbankData);
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
        <h1>Admin Page</h1>
        <p>Your foodbank: {userFoodBank}</p>
        <FormData fetchedFoodbankData={foodbankData[0]}></FormData>
        <h2>Username: {user.name}</h2>
        <p>User Email: {user.email}</p>
        <h3>User Metadata</h3>
        {userMetadata ? (
          <>
            <pre>{JSON.stringify(userMetadata, null, 2)}</pre>
          </>
        ) : (
          "No user metadata defined"
        )}
      </div>
    )
  );
};

export default Profile;
