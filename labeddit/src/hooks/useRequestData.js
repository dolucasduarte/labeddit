import { useState, useLayoutEffect } from "react";

const useRequestData = (initialData, requestData) => {
  const [data, setData] = useState(initialData);

  useLayoutEffect(() => {
    const token = window.localStorage.getItem("token");

    if (token) return requestData(setData);
  }, [requestData]);

  return { data, requestData };
};

export default useRequestData;
