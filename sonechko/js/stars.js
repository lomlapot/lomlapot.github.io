for (let index = 0; index < 390; index++) {
  const star = document.createElement("span");
  star.innerText = ".";
  star.classList = "star";
  star.style.setProperty("top", `${Math.random() * 100}%`);
  star.style.setProperty("left", `${Math.random() * 100}%`);
  document.querySelector(".stars").append(star);
}
