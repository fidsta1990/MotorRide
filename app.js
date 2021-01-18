const bars = document.querySelectorAll(".bars");
const sidebar = document.querySelector(".sidebar");

console.log(bars);

bars.forEach((bar) => {
  bar.addEventListener("click", () => {
    bar.classList.toggle("checked");
    sidebar.classList.toggle("active");
  });
});
