const textArea = document.getElementsByTagName("textarea");
for (let i = 0; i < textArea.length; i++) {
  textArea[i].setAttribute(
    "style",
    "height:" + textArea[i].scrollHeight + "px;overflow-y:hidden;"
  );
  textArea[i].addEventListener("input", OnInput, false);
}

function OnInput() {
  this.style.height = "auto";
  this.style.height = this.scrollHeight + "px";
}
