import React, { createContext, useState } from "react";

export type Total = {
  total: number;
};

type TotalContextType = {
  total: number;
  setTotal: React.Dispatch<React.SetStateAction<number>>;
};

type TotalContextProviderProps = {
  children: React.ReactNode;
};

export const TotalContext = createContext<TotalContextType>({
  total: 0.0,
  setTotal: () => {},
});

export const TotalContextProvider = ({
  children,
}: TotalContextProviderProps) => {
  const [total, setTotal] = useState(0.0);
  return (
    <TotalContext.Provider value={{ total, setTotal }}>
      {children}
    </TotalContext.Provider>
  );
};
