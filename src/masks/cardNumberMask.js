import IMask from "imask";

import { cardsDynamicMasks } from "../utils/cardsDynamicMasks";

const cardNumber = document.querySelector("#card-number");

const cardNumberPattern = {
  mask: [
    ...cardsDynamicMasks,
    {
      mask: "0000 0000 0000 0000",
      cardType: "default",
    },
  ],
  dispatch: function (appended, dynamicMasked) {
    const number = (dynamicMasked.value + appended).replace(/\D/g, "");
    const foundMask = dynamicMasked.compiledMasks.find(({ regex }) =>
      number.match(regex)
    );

    return foundMask;
  },
};

export const cardNumberMasked = IMask(cardNumber, cardNumberPattern);
