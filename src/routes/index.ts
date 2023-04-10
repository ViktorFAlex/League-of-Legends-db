const jsonRoute = 'http://ddragon.leagueoflegends.com/cdn/13.7.1/data/';
const championRoute = 'https://ddragon.leagueoflegends.com/cdn/img/';
const assetsRoute = 'https://ddragon.leagueoflegends.com/cdn/13.7.1/img/';
const runesImgRoute = 'https://ddragon.canisback.com/img/';

const apiRoutes = {
  json: (lang: string, name: string) => new URL(`${lang}/${name}.json`, jsonRoute),
  champion: {
    json: (lang: string, champion: string) => new URL(`${lang}/champion/${champion}`, jsonRoute),
    image: (champion: string, id: number, format = 'loading') =>
      new URL(`champion/${format}/${champion}_${id}.jpg`, championRoute),
    square: (champion: string) => new URL(`champion/${champion}.png`, assetsRoute),
    passive: (champion: string) => new URL(`passive/${champion}_P.png`, assetsRoute),
    spell: (spell: string) => new URL(`spell/${spell}.png`, assetsRoute),
  },
  item: {
    image: (id: number) => new URL(`item/${id}.png`, assetsRoute),
  },
  summoner: {
    spell: (spell: string) => new URL(`spell/${spell}.png`, assetsRoute),
  },
  runesReforged: {
    image: (route: string) => new URL(route, runesImgRoute),
  },
};

export default apiRoutes;
