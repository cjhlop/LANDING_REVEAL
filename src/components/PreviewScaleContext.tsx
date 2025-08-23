import React, { createContext, useContext, useState } from "react";

type PreviewScaleContextType = {
  scale: number;
  setScale: (value: number) => void;
};

const PreviewScaleContext = createContext<PreviewScaleContextType | null>(null);

export const PreviewScaleProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [scale, setScale] = useState<number>(1); // 100% by default
  return (
    <PreviewScaleContext.Provider value={{ scale, setScale }}>
      {children}
    </PreviewScaleContext.Provider>
  );
};

export function usePreviewScale() {
  const ctx = useContext(PreviewScaleContext);
  if (!ctx) {
    throw new Error("usePreviewScale must be used within a PreviewScaleProvider");
  }
  return ctx;
}