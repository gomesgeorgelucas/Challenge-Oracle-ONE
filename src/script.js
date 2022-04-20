"use strict";

// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

function encrypt(textUnencrypted = "") {
  if (
    !(typeof textUnencrypted === "string" || textUnencrypted instanceof String)
  ) {
    return textUnencrypted;
  }

  let encryptedText = "";

  [...textUnencrypted].forEach((i) => {
    if (i === "a") {
      encryptedText += "ai";
    } else if (i === "e") {
      encryptedText += "enter";
    } else if (i === "i") {
      encryptedText += "imes";
    } else if (i === "o") {
      encryptedText += "ober";
    } else if (i === "u") {
      encryptedText += "ufat";
    } else {
      encryptedText += i;
    }
  });

  return encryptedText;
}

function decrypt(textEncrypted = "") {
  if (!(typeof textEncrypted === "string" || textEncrypted instanceof String)) {
    return textEncrypted;
  }

  let decryptedText = "";

  decryptedText = textEncrypted.replaceAll("ai", "a");
  decryptedText = decryptedText.replaceAll("enter", "e");
  decryptedText = decryptedText.replaceAll("imes", "i");
  decryptedText = decryptedText.replaceAll("ober", "o");
  decryptedText = decryptedText.replaceAll("ufat", "u");

  return decryptedText;
}

let randomText =
  "Pariatur cillum cupidatat voluptate sint dolore labore aute commodo cupidatat commodo commodo sunt veniam esse. Ad cillum ullamco mollit voluptate aliquip velit. Do in esse consectetur ullamco ex amet aliquip.";

console.assert(
  randomText === decrypt(encrypt(randomText)),
  "Encryption or Decryption not working."
);

let encryptButton = document.getElementById("encrypt-button");

let decryptButton = document.getElementById("decrypt-button");

function encryptButtonOnClick() {
  let textAreaInput = document.getElementById("text-area").value;
  console.log(encrypt(textAreaInput));
  return encrypt(textAreaInput);
}

function decryptButtonOnClick() {
  let textAreaInput = document.getElementById("text-area").value;
  console.log(decrypt(textAreaInput));
  return decrypt(textAreaInput);
}

encryptButton.onclick = encryptButtonOnClick;
decryptButton.onclick = decryptButtonOnClick;
