const btn = document.getElementById("btn_count");
let count = document.getElementById("span_count");
let number = 0;

btn.addEventListener("click", () => {
    number += 1;
    document.getElementById("span_count").innerHTML = number;
});