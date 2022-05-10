const textArea = document.getElementsByTagName("textarea");
const textAreaDecode = document.getElementById("text-area");

for (let i = 0; i < textArea.length; i++) {
  textArea[i].setAttribute(
    "style",
    "height:" + textArea[i].scrollHeight + "px;overflow-y:hidden;"
  );
  textArea[i].addEventListener("input", OnInput, false);
}

for (let i = 0; i < textAreaDecode.length; i++) {
  textAreaDecode[i].setAttribute(
    "style",
    "height:" + textAreaDecode[i].scrollHeight + "px;overflow-y:hidden;"
  );
  textAreaDecode[i].addEventListener("input", OnInput, false);
}

function OnInput() {
  this.style.height = "auto";
  this.style.height = this.scrollHeight + "px";
}
