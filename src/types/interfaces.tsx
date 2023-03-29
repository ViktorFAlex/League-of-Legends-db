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