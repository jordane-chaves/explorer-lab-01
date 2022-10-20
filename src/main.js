import "./css/index.css";

import { setCardType } from "./setCardType";
import {
  updateCardHolder,
  updateCardNumber,
  updateExpirationDate,
  updateSecurityCode,
} from "./updateCardFunctions";

import { cardNumberMasked } from "./masks/cardNumberMask";
import { expirationDateMasked } from "./masks/expirationDateMask";
import { securityCodeMasked } from "./masks/securityCodeMask";

const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  alert("Cartão adicionado!");

  form.reset();

  updateCardHolder(null);
  updateCardNumber(null);
  updateExpirationDate(null);
  updateSecurityCode(null);
});

cardNumberMasked.on("accept", () => {
  setCardType(cardNumberMasked.masked.currentMask.cardType);
  updateCardNumber(cardNumberMasked.value);
});

const cardHolder = document.querySelector("#card-holder");

cardHolder.addEventListener("input", () => {
  updateCardHolder(cardHolder.value);
});

securityCodeMasked.on("accept", () => {
  updateSecurityCode(securityCodeMasked.value);
});

expirationDateMasked.on("accept", () => {
  updateExpirationDate(expirationDateMasked.value);
});
