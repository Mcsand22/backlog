// Crear tablero
window.addEventListener("load", function () {
  let newBoardEvent = document.querySelector("#newBoardEvent");
  let boardContainerEvent = document.querySelector("#boardContainerEvent");

  newBoardEvent.addEventListener("click", function () {
    boardContainerEvent.innerHTML += `
      <a href="">
              <section class="board-card">
                  <figure class="board-image">
                      <img src="../public/img/first-board.jpg" class="board-thumb" alt="tu tablero">
                  </figure>
                  <figcaption class="board-info">
                      <h2 class="board-brand">Tablero 1</h2>
                  </figcaption>
            </section>
       </a> 
      `;
  });
});
