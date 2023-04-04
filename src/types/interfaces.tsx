export interface MetaProps {
  title: string;
  description: string;
}

export interface SpellsData {
  id: string;
  name: string;
  description: string;
  cooldownBurn: string;
  rangeBurn: string;
  effectBurn: string | null[];
  summonerLevel: number;
  modes: string[];
  imgUrl: string;
}

export interface SpellsModal {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  item: SpellsData;
}

export interface RuneDescription {
  icon: string;
  id: number;
  name: string;
  longDesc: string;
}

export interface RunesTier {
  runes: RuneDescription[];
}

export interface RunesData {
  icon: string;
  id: number;
  name: string;
  slots: RunesTier[];
}

