import React, { createContext, useState, useEffect } from 'react';

interface ApiData {
    data: any; 
    loading: boolean;
    error: string | null;
    state: string | null;
    stateHandler: () => void;
    setData: (prevState: ApiData) => void;
    setState: (prevState: ApiData) => void;

  }
  
  const initialState: ApiData = {
    data: null,
    loading: false,
    error: null,
    state: 'NSW',
    stateHandler: () => {},
      setData: (prevState) => prevState,
      setState: (prevState) => prevState

}
  

export const DataContext = createContext<ApiData>(initialState);

export const FetchDataContext = createContext<() => Promise<void>>(() => {
    return new Promise((resolve) => resolve()); // Empty Promise
  });

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = useState<ApiData>(initialState);
  const [state,] = useState('NSW');
  const fetchData = async () => {
    setData((prevState) => ({ ...prevState, loading: true }));
    try {
        const response = await fetch(`https://myhospitalsapi.aihw.gov.au/api/v0/retired-myhospitals-api/hospitals?state=${data.state}`);
        const responseData = await response.json();
      setData({...data, data: responseData, loading: false, error: null });
    } catch (error) {
      setData({ ...data,data: null, loading: false, error: 'error' });
    }
  };
  

  useEffect(() => {
    fetchData();
  }, [data.state]);
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <DataContext.Provider value={{ ...data, setData, state }}>
      <FetchDataContext.Provider value={fetchData}>
        {children}
      </FetchDataContext.Provider>
    </DataContext.Provider>
  );
};
