import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type RegionChoice = "both" | "toronto" | "boston";

interface RegionContextValue {
  region: RegionChoice;
  setRegion: (r: RegionChoice) => void;
}

const RegionContext = createContext<RegionContextValue | undefined>(undefined);

const STORAGE_KEY = "pwm-region";

export const RegionProvider = ({ children }: { children: ReactNode }) => {
  const [region, setRegionState] = useState<RegionChoice>("both");

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as RegionChoice | null;
    if (stored === "toronto" || stored === "boston" || stored === "both") {
      setRegionState(stored);
    }
  }, []);

  const setRegion = (r: RegionChoice) => {
    setRegionState(r);
    localStorage.setItem(STORAGE_KEY, r);
  };

  return <RegionContext.Provider value={{ region, setRegion }}>{children}</RegionContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useRegion = () => {
  const ctx = useContext(RegionContext);
  if (!ctx) throw new Error("useRegion must be used within RegionProvider");
  return ctx;
};

export const regionLabel: Record<RegionChoice, string> = {
  both: "Toronto / Boston",
  toronto: "Toronto",
  boston: "Boston",
};
