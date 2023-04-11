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

interface ModalProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface SpellModalProps extends ModalProps {
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

export interface RuneModalProps extends ModalProps {
  item: RuneDescription;
}

interface ItemType {
  header: string;
  tags: string[];
}

interface ItemGold {
  base: number;
  purchasable: boolean;
  total: number;
  sell: number;
}

interface ItemImages {
  full: string;
  h: number;
  w: number;
}

interface ItemMaps {
  [index: number]: boolean;
}

export interface Item {
  from: string[];
  gold: ItemGold;
  image: ItemImages;
  name: string;
  plaintext: string;
  description: string;
  tags: string[];
  inStore?: false;
  maps: ItemMaps;
}

interface Items {
  [key: number]: Item;
}

export interface ItemsData {
  data: Items;
  tree: ItemType[];
}
