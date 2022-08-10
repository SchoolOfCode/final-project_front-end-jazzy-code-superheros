import { useEffect, useState } from "react";

export const useFetch = (url,dependency) => {
  //This use state is being used to get the data
  //fetched from the API

  const [data, setData] = useState();

const getData = async () => {
    const response = await fetch(url);

    const data = await response.json();

    //dev feedback only remove
    console.log(`data in func >>>`, data);

    // if (data === "I am so sorry, there doesnt seem to be any results here. Please could you try another search term?") {
    //   console.log(`in if within custom hook, this is the time and data >>`, Date(), data)
    //   setData(null)
    //   return;
    // }
    console.log(`within custom hook, this is the time and data >>`, Date(), data)
    setData(data);
  };
  //Render the data with the home page
  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, [dependency]);

  return data;
};
