import IMask from "imask";

const expirationDate = document.querySelector("#expiration-date");

const expirationDatePattern = {
  mask: "MM{/}YY",
  blocks: {
    YY: {
      mask: IMask.MaskedRange,
      from: String(new Date().getFullYear()).slice(2),
      to: String(new Date().getFullYear() + 10).slice(2),
    },
    MM: {
      mask: IMask.MaskedRange,
      from: 1,
      to: 12,
    },
  },
};

export const expirationDateMasked = IMask(
  expirationDate,
  expirationDatePattern
);
