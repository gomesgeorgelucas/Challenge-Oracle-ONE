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

var encryptButton = document.getElementById("encrypt-button");
var decryptButton = document.getElementById("decrypt-button");
var decodedCopyButton = document.getElementById("decoded-copy");

var decodedImg = document.getElementById("decoded-img");
var decodedMessage = document.getElementById("decoded-message");

var textAreaInput = document.getElementById("text-area");
//let decodedMessageResult = document.getElementById("decoded-message-result");

var decodedMessageResultText = document.getElementById(
  "decoded-message-result-text"
);
function updateHTML(text) {
  if (text.trim() !== "") {
    decodedImg.remove();
    decodedMessage.remove();
    decodedMessageResultText.style = "visibility:visible";
    decodedMessageResultText.value = text;
    decodedMessageResultText.dispatchEvent(new Event("input"));
    decodedCopyButton.style = "visibility:visible";
  }
}

function encryptButtonOnClick() {
  console.log(encrypt(textAreaInput.value));
  let textEncrypted = encrypt(textAreaInput.value);
  updateHTML(textEncrypted);
  return textEncrypted;
}

function decryptButtonOnClick() {
  console.log(decrypt(textAreaInput.value));
  let textDecrypted = decrypt(textAreaInput.value);
  updateHTML(textDecrypted);
  return textDecrypted;
}

encryptButton.onclick = encryptButtonOnClick;
decryptButton.onclick = decryptButtonOnClick;
decodedCopyButton.onclick = () => {
  var copiedText = decodedMessageResultText;
  copiedText.select();
  copiedText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copiedText.value);
};
