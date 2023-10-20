let search = document.getElementById("search");
let btn = document.getElementById("btn");
let data = document.getElementById("data");
let clear = document.getElementById("clear");
let close = document.getElementById("close");
let open = document.getElementById("open");
let cnt = document.getElementById("cnt");
let error = document.getElementById("error");
let tedd = document.getElementById("tedd");
let exit = document.getElementById("exit");

btn.addEventListener("click", function () {
  let input = document.getElementById("search").value;
  let replaceData = new RegExp(input, "ig");
  let replacedText = data.innerText.replace(
    replaceData,
    `<span>${input}</span>`
  );
  data.innerHTML = replacedText;

  if (replacedText === data.innerText) {
    error.style.display = "block";
  }
  countHighlightedWords();
});
clear.addEventListener("click", function () {
  search.value = "";
  data.innerHTML = data.innerText;
  error.style.display = "none";
  countHighlightedWords();
});
close.addEventListener("click", function () {
  cnt.style.display = "none";
});
open.addEventListener("click", function () {
  cnt.style.display = "block";
});
search.addEventListener("focusin", function () {
  search.style.scale = "1.1";
  search.style.transition = "all 200ms linear";
  search.style.border = "2px solid gray";
});
search.addEventListener("focusout", function () {
  search.style.scale = "1";
  search.style.transition = "all 200ms linear";
  search.style.border = "none";
});
function countHighlightedWords() {
  let highlightedWords = data.getElementsByTagName("span");
  let count = highlightedWords.length;
  tedd.innerHTML = count;
}
exit.addEventListener("click", function () {
  error.style.display = "none";
  search.value = "";
});
