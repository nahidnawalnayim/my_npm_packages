const next = document.getElementById("next");
const prev = document.getElementById("prev");
const progress = document.getElementById("progess");
const circles = document.querySelectorAll(".circle");

let activeIndex = 1;

next.addEventListener("click", () => {
  activeIndex++;
  if (activeIndex > circles.length) {
    activeIndex = circles.length;
  }
  update();
});

prev.addEventListener("click", () => {
  activeIndex--;
  if (activeIndex < 1) {
    activeIndex = 1;
  }
  update();
});

function update() {
  circles.forEach((circle, idx) => {
    if (idx < activeIndex) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");
  progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

  if (activeIndex == 1) {
    prev.disabled = true;
  } else if (activeIndex == circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
