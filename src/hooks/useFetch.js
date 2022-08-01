import { useEffect, useState } from "react";

export const useFetch = (url) => {
  //This use state is being used to get the data
  //fetched from the API

  const renderOnceVar = 1;
  const [data, setData] = useState();

  const getData = async () => {
    const response = await fetch(url);

    const data = await response.json();

    //dev feedback only remove
    console.log(`data in func >>>`, data);

    setData(data);
  };
  //Render the data with the home page
  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, [renderOnceVar]);

  return data;
};
