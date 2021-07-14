import React from 'react';
import {createContext, useState} from 'react';

interface ImageColors {
  primary: string;
  secondary: string;
}

interface ContextProps {
  colors: ImageColors;
  previousColors: ImageColors;
  setMainColors: (colors: ImageColors) => void;
  setPrevMainColors: (colors: ImageColors) => void;
}
export const GradientContext = createContext({} as ContextProps); // TODO: Definir tipo

export const GradientProvider = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  const [colors, setColors] = useState<ImageColors>({
    primary: 'red',
    secondary: 'blue',
  });
  const [previousColors, setPreviousColors] = useState<ImageColors>({
    primary: 'transparent',
    secondary: 'transparent',
  });

  const setMainColors = (colors: ImageColors) => {
    setColors(colors);
  };

  const setPrevMainColors = (colors: ImageColors) => {
    setPreviousColors(colors);
  };
  return (
    <GradientContext.Provider
      value={{colors, previousColors, setMainColors, setPrevMainColors}}>
      {children}
    </GradientContext.Provider>
  );
};
