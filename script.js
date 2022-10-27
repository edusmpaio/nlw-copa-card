const card = document.querySelector(".card")
let isIgnite = false

function changeCard() {
  const bg = isIgnite ? "explorer" : "ignite"
  isIgnite = !isIgnite

  card.style.backgroundImage = `url(./assets/bg-${bg}.svg)`
}

card.addEventListener("click", changeCard)
