interface Automobile {
  name: string;
  brand: string;
  color: string;
  doors: number;
  gears: number;
  turnOn: () => void;
  turnOf: () => void;
  speedUp: () => void;
  speedDown: () => void;
  break: () => void;
}

interface Feline {
  name: string; 
  subFamilies: string;
  walk: () => void;
  hunt: () => void;
  eat: () => void;
  sleep: () => void;
}

interface Aircraft {
  model: string;
  brand: string;
  wings: string;
  engines: number;
  isManned: boolean;
  turnOn: () => void;
  turnOff: () => void;
  speedUp: () => void;
  speedDown: () => void;
}