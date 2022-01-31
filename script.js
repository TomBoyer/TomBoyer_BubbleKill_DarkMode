//11. création de variables pour incrémenter le compteur de killbubble
const counterDisplay = document.querySelector("h3");
let counter = 0;

//7. création de la fonction contenant la logique de création d'une bulle
const bubbleMaker = () => {
  //1. création de la bulle
  const bubble = document.createElement("span");
  console.log(bubble);

  //2. ajout de la bulle dans le HTML
  bubble.classList.add("bubble");
  document.body.appendChild(bubble);

  //3. dimensions de la bulle
  const size = Math.random() * 200 + 100 + "px";
  console.log(size);

  bubble.style.height = size;
  bubble.style.width = size;

  //4. position de la bulle à son apparition
  const pozTop = Math.random() * 100 + 50 + "%";
  const pozLeft = Math.random() * 100 + "%";

  bubble.style.top = pozTop;
  bubble.style.left = pozLeft;

  //5. création d'une randomisation de chiffre pour la position en x de la bulle (positive ou négative) en vertion ternaire (comme un if/else en plus court)
  const plusMinus = Math.random() > 0.5 ? 1 : -1;

  //6. deplacement en x de la bulle
  bubble.style.setProperty("--left", Math.random() * 100 * plusMinus + "%");

  //9. suppression auto des bulles après la fin de l'animation de mouvement (même timing)
  setTimeout(() => {
    bubble.remove();
  }, 8000);

  //10. suppression d'une bulle au click de la souris
  bubble.addEventListener("click", () => {
    counter++;
    console.log(counter);
    counterDisplay.textContent = counter;
    bubble.remove();
  });
};

//8. appel de la fonction et définition du timing
setInterval(bubbleMaker, 1000);

//12. création darkMode
const darkMode = document.getElementById("dark-mode");

darkMode.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});