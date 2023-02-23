// Loading

window.addEventListener("load", () => {
  const contenedorLoader = document.querySelector(".contenedorLoader");
  contenedorLoader.style.opacity = 0;
  contenedorLoader.style.visibility = "hidden";
});

//Carrousel

const boardContainers = [...document.querySelectorAll(".board-container")];
const nxtBtn = [...document.querySelectorAll(".nxt-btn")];
const preBtn = [...document.querySelectorAll(".pre-btn")];

boardContainers.forEach((item, i) => {
  //El método Element.getBoundingClientRect() devuelve el tamaño de un elemento y su posición relativa respecto a la ventana de visualización (viewport).
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtn[i].addEventListener("click", () => {
    //La propiedad Element.scrollLeft obtiene o establece el número de píxeles que desplaza el contenido de un elemento hacia la izquierda.
    item.scrollLeft += containerWidth;
  });

  preBtn[i].addEventListener("click", () => {
    //La propiedad Element.scrollLeft obtiene o establece el número de píxeles que desplaza el contenido de un elemento hacia la izquierda.
    item.scrollLeft -= containerWidth;
  });
});
