const add_btn = document.querySelector(".btn_add");
const dec_btn = document.querySelector(".btn_decrease");

add_btn.addEventListener("click", add);
dec_btn.addEventListener("click", dec);

const count_text = document.querySelector(".count");

let count_text_number = parseInt(count_text.innerHTML);

function colorCheck(count_text_number) {
  if (count_text_number > 0) count_text.style.color = "green";
  else if (count_text_number == 0) count_text.style.color = "black";
  else count_text.style.color = "red";
}

function add() {
  count_text_number++;
  colorCheck(count_text_number);
  count_text.textContent = count_text_number;
}

function dec() {
  count_text_number--;
  colorCheck(count_text_number);
  count_text.textContent = count_text_number;
}
