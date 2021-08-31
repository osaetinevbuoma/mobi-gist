import React, {
  createContext,
  useContext,
  useState
} from "react";

interface IBadgeProvider {
  children: any;
}

const BadgeContext = createContext({});

export const BadgeProvider = (props: IBadgeProvider): JSX.Element => {
  const [colors, setColors] = useState<any>({});

  const createColor = (fileType: string): string | null => {
    if (!colors[fileType]) {
      const c = { ...colors };
      c[fileType] = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
      setColors(c);

      return c[fileType];
    }

    return null;
  }

  return (
    <BadgeContext.Provider value={{
      colors,
      createColor,
    }}>
      {props.children}
    </BadgeContext.Provider>
  )
}

export const useBadgeContext = () => useContext(BadgeContext);