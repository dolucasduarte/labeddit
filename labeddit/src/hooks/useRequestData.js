import { useState, useLayoutEffect } from "react";
import { requestData } from "../services/api";

const useRequestData = (initialData, endpoint) => {
  const [data, setData] = useState(initialData);

  // useLayoutEffect(() => {
  //   const token = window.localStorage.getItem("token");
  //   if (token) return requestData();
  // }, []);

  requestData(setData);

  return { data, requestData };
};

export default useRequestData;
