import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
// import { useFetch } from "../../../hooks/useFetch";

import FormData from "../FormData";

const Profile = () => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [userMetadata, setUserMetadata] = useState(null);
  const [userFoodBank, setUserFoodBank] = useState("vauxhall");
  const [foodbankData, setFoodbankData] = useState(null);
  const [foodbankId, setFoodbankId] = useState("62f4cd5bfd2ea8e0823cdb64");
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
    // const rootUrl = `https://yourlocalfoodbank.herokuapp.com/foodbanks/search/${userFoodBank}/`;
    const rootUrl = `https://yourlocalfoodbank.herokuapp.com/foodbank/${foodbankId}`;
    console.log("rootUrl :>> ", rootUrl);
    // console.log("userMetadata :>> ", foodbankId);
    getData(rootUrl);
  }, [userMetadata]);

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
        setFoodbankId(userMetadata.foodbank_id);
      } catch (e) {
        console.log(e.message);
      }
    };

    getUserMetadata();
  }, [getAccessTokenSilently, user?.sub]);
  console.log("userFoodBank :>> ", userFoodBank);
  console.log("userMetadata :>> ", userMetadata);
  return (
    isAuthenticated && (
      <div>
        <h1>Admin</h1>
        <p>
          <span style={{ "font-weight": "bold" }}>Foodbank:</span>{" "}
          {foodbankData.payload[0].name}
          <br />
          <span style={{ "font-weight": "bold" }}>Address:</span>{" "}
          {foodbankData.payload[0].address}
          <br />
          <span style={{ "font-weight": "bold" }}>Phone:</span>{" "}
          {foodbankData.payload[0].phone}
          <br />
          <span style={{ "font-weight": "bold" }}>Email:</span>{" "}
          {foodbankData.payload[0].email}
        </p>
        <FormData fetchedFoodbankData={foodbankData.payload[0]}></FormData>
        <hr />
        <br />
        <h3>Username: {user.name}</h3>
        <p>User Email: {user.email}</p>
        {/* <h3>User Metadata</h3>
        {userMetadata ? (
          <>
            <pre>{JSON.stringify(userMetadata, null, 2)}</pre>
          </>
        ) : (
          "No user metadata defined"
        )} */}
      </div>
    )
  );
};

export default Profile;
