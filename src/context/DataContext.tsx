import React, { createContext, useState, useEffect } from "react";

interface ApiData {
  data: any;
  loading: boolean;
  error: string | null;
  setData: (prevState: ApiData) => void;
}

const initialState: ApiData = {
  data: null,
  loading: false,
  error: null,
  setData: (prevState) => prevState,
};

export const DataContext = createContext<ApiData>(initialState);

export const FetchDataContext = createContext<() => Promise<void>>(() => {
  return new Promise((resolve) => resolve()); // Empty Promise
});

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = useState<ApiData>(initialState);
  const fetchData = async () => {
    setData((prevState) => ({ ...prevState, loading: true }));
    try {
      const response = await fetch(
        `https://myhospitalsapi.aihw.gov.au/api/v0/retired-myhospitals-api/hospitals?state=NSW`
      );
      const responseData = await response.json();
      setData({ ...data, data: responseData, loading: false, error: null });
    } catch (error) {
      setData({ ...data, data: null, loading: false, error: "error" });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <DataContext.Provider value={{ ...data, setData }}>
      <FetchDataContext.Provider value={fetchData}>
        {children}
      </FetchDataContext.Provider>
    </DataContext.Provider>
  );
};
