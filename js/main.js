const main = document.querySelector("main");
const btns = main.querySelectorAll("#nav li");
const btnsLen = btns.length;
// 쿼리셀렉터 올로 부르면 0이라고 배열해줘야함,

let before = -1;
for (let i = 0; i < btnsLen; i++) {
  btns[i].addEventListener("click", function () {
    if (before === -1 && i !== 0) {
      before = i;
      btns[0].classList.remove("on");
      btns[1].classList.add("on");
    } else if (before !== i) {
      btns[before].classList.remove("on");
      btns[i].classList.add("on");
      before = i;
    }
  });
}
