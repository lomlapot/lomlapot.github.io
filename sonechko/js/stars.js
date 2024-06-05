for (let index = 0; index < 290; index++) {
  const star = document.createElement("span");
  star.innerText = ".";
  star.classList = "star";
  star.style.setProperty("top", `${Math.random() * 100}%`);
  star.style.setProperty("left", `${Math.random() * 100}%`);
  document.querySelector(".container").append(star);
}
