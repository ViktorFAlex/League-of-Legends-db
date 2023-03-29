import champions from '../../public/champions.jpg';
import runes from '../../public/runes.png';
import spells from '../../public/spells.png';
import items from '../../public/items.png';

const mainPageImgs = [
  {
    image: champions,
    description: 'Champions',
    width: 250,
    height: 300,
    route: 'champions',
  },
  {
    image: runes,
    description: 'Runes',
    route: 'runes',
  },

  {
    image: spells,
    description: 'Spells',
    route: 'spells',
  },
  {
    image: items,
    description: 'Items',
    route: 'items',
  },
];

export default mainPageImgs;
