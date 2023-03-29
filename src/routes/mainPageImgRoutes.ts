import apiRoutes from '.';

const imageRoutes = [
  apiRoutes.champion.image('Leblanc', 2),
  apiRoutes.item.image(3078),
  apiRoutes.runesReforged.image('perk-images/Styles/Domination/Electrocute/Electrocute.png'),
  apiRoutes.summoner.spell('SummonerDot'),
];

export default imageRoutes;
