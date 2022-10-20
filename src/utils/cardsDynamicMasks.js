export const cardsDynamicMasks = [
  {
    mask: "0000 0000 0000 0000",
    regex: /^4\d{0,15}$/,
    cardType: "visa",
    colors: ["#2D57F2", "#436D99"],
  },
  {
    mask: "0000 0000 0000 0000",
    regex: /^(5[1-5]\d{0,2}|22[2-9]\d|2[3-7]\d{0,2})\d{0,12}$/,
    cardType: "mastercard",
    colors: ["#C69347", "#DF6F29"],
  },
  {
    mask: "0000 0000 0000 0000",
    regex: /^(?:5[0678]\d{0,2}|6304|67\d{0,2})\d{0,12}/,
    cardType: "maestro",
    colors: ["#CC2131", "#D93A3A"],
  },
  {
    mask: "0000 000000 00000",
    regex: /^3[47]\d{0,13}/,
    cardType: "american-express",
    colors: ["#0077A6", "#507585"],
  },
  {
    mask: "0000 0000 0000 0000",
    regex: /^(?:6011|65\d{0,2}|64[4-9]\d?)\d{0,12}/,
    cardType: "discover",
    colors: ["#DB8131", "#DBC4B0"],
  },
];

export async function getCardsColors() {
  const colors = {};

  cardsDynamicMasks.forEach((cards) => (colors[cards.cardType] = cards.colors));

  return colors;
}
