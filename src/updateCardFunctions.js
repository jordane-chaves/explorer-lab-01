function updateCardNumber(number) {
  const ccNumber = document.querySelector(".cc-number");
  ccNumber.innerText =
    !number || number.length === 0 ? "1234 5678 9012 3456" : number;
}

function updateCardHolder(text) {
  const ccHolder = document.querySelector(".cc-holder .value");
  ccHolder.innerText = !text || text.length === 0 ? "FULANO DA SILVA" : text;
}

function updateExpirationDate(date) {
  const ccExpiration = document.querySelector(".cc-expiration .value");
  ccExpiration.innerText = !date || date.length === 0 ? "02/32" : date;
}

function updateSecurityCode(code) {
  const ccSecurity = document.querySelector(".cc-security .value");
  ccSecurity.innerText = !code || code.length === 0 ? "123" : code;
}

export {
  updateCardNumber,
  updateCardHolder,
  updateExpirationDate,
  updateSecurityCode,
};
