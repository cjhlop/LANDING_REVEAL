export interface CustomerLogoProps {
  name: string;
  logoSrc?: string;
  width: number;
  height: number;
}

export const fallbackCustomerLogos: CustomerLogoProps[] = [
  { name: "Imagine AI", width: 131, height: 31 },
  { name: "Astra", width: 109, height: 31 },
  { name: "Atlas", width: 99, height: 31 },
  { name: "Audlabs", width: 120, height: 31 },
  { name: "Shape", width: 107, height: 31 },
  { name: "Queue", width: 116, height: 31 },
  { name: "Layer", width: 102, height: 31 },
  { name: "Bolt", width: 73, height: 35 },
  { name: "Graphite", width: 127, height: 32 },
  { name: "Base", width: 90, height: 31 },
];