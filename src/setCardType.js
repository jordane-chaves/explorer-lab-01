import { getCardsColors } from "./utils/cardsDynamicMasks";

const ccBackgroundColor01 = document.querySelector(
  ".cc-bg svg > g g:nth-child(1) path"
);

const ccBackgroundColor02 = document.querySelector(
  ".cc-bg svg > g g:nth-child(2) path"
);

const creditCardLogo = document.querySelector(".cc-logo span:nth-child(2) img");

export async function setCardType(type) {
  const cardsColors = await getCardsColors();
  const colors = {
    ...cardsColors,
    default: ["black", "gray"],
  };

  ccBackgroundColor01.setAttribute("fill", colors[type][0]);
  ccBackgroundColor02.setAttribute("fill", colors[type][1]);
  creditCardLogo.setAttribute("src", `cc-${type}.svg`);
}
