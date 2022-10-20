import IMask from "imask";

const securityCode = document.querySelector("#security-code");

const securityCodePattern = {
  mask: "0000",
};

export const securityCodeMasked = IMask(securityCode, securityCodePattern);
