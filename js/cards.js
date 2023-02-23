// Crear card
let crearFormulario = document.querySelector("#form");
let toDoCreate = document.querySelector("#toDoCreate");
let taskContainer = document.querySelector("#taskContainer");
let contador = 0;

toDoCreate.addEventListener("click", function () {
  crearFormulario.innerHTML += `
      <form action="" method="GET" id="formularioCard${contador}" class="formularioCard" draggable= "true">
        <input type="text" name="titleToDo" id="titleToDo${contador}" class= "titleToDo" />
        <input type="text" name="descriptionToDo" id="descriptionToDo${contador}" class="descriptionToDo"/>
        <button type="submit" id="confirmCard${contador}" class="confirmCard"><i class="fa-solid fa-check"></i></button>
      </form>
      `;

  let formularioCard = document.querySelector(`#formularioCard${contador}`);

  console.log(formularioCard);

  formularioCard.addEventListener("submit", function (event) {
    event.preventDefault();

    let titleToDo = event.target.titleToDo;
    let descriptionToDo = event.target.descriptionToDo;

    let card = `
        <form id="card${contador}" class= cardValue draggable= "true">
          <input name="title" id="titleToDo${contador}" class="titleToDo" value=${titleToDo.value}>
          <input name="description" id="descriptionToDo${contador}" class="descriptionToDo" value=${descriptionToDo.value}>
        <section class="edicion">
          <button type="submit" id="edit"><i class="fa-solid fa-pen" id="editar"></i></button>
          <button type="delete" id="delete${contador}" class="delete"><i class="fa-solid fa-trash-can" id= "delete"></i></button></section>
        </section>
        `;

    let confirmCard = document.querySelector(".confirmCard");
    confirmCard.remove();

    taskContainer.innerHTML += card;

    // Seleccionar el último elemento de la lista de cards
    const newCard = taskContainer.lastElementChild;

    // Establecer el ID de la nueva card
    newCard.setAttribute("id", `card-${contador}`);

    // Seleccionar los input dentro de la nueva card
    const titleInput = newCard.querySelector('input[name="title"]');
    const descriptionInput = newCard.querySelector('input[name="description"]');

    // Cambiar el atributo "readonly" de los input
    titleInput.setAttribute("readonly", true);
    descriptionInput.setAttribute("readonly", true);

    formularioCard.remove();

    contador++;

    //Drag
    //Selecciono las cards
    const cards = document.querySelectorAll(".cardValue");
    console.log(cards);

    cards.forEach((card) => {
      card.addEventListener("dragstart", dragstart_handler);
      card.addEventListener("dragenter", dragenter_handler);
      card.addEventListener("dragleave", dragleave_handler);
    });
    function dragstart_handler(event) {
      event.dataTransfer.setData("text/plain", event.target.id);
      console.log(event.target.id);
      // Agrego el ID de la tarjeta a los datos de transferencia
      event.dataTransfer.setData("cardId", event.target.id);
      // Agrego la clase "dragging" a la tarjeta actual
      event.currentTarget.classList.add("dragging");
    }

    function dragenter_handler(event) {
      event.preventDefault();
      // Agrego la clase "dragover" a la tarjeta actual
      event.currentTarget.classList.add("dragover");
      // Evito el comportamiento predeterminado de "dragover" para que se pueda soltar en este contenedor
      event.dataTransfer.dropEffect = "move";
    }

    function dragleave_handler(event) {
      event.preventDefault();
      // Elimino la clase "dragover" de la tarjeta actual
      event.currentTarget.classList.remove("dragover");
    }

    let boardProcess = document.querySelector("#taskContainerProcess");

    boardProcess.addEventListener("dragover", function (event) {
      event.preventDefault();
    });

    boardProcess.addEventListener("drop", function (event) {
      event.preventDefault();
      // Obtengo el ID de la tarjeta desde los datos de transferencia
      const cardId = event.dataTransfer.getData("cardId");

      // Muevo solo la tarjeta que estoy arrastrando (con la clase "dragging")
      const card = document.getElementById(cardId);
      boardProcess.appendChild(card);

      // Elimino las clases "dragover" y "dragging" de la tarjeta actual
      const cards = document.querySelectorAll(".cardValue");
      cards.forEach((card) => {
        card.classList.remove("dragover");
        card.classList.remove("dragging");
      });
    });

    let boardDone = document.querySelector("#taskContainerDone");

    boardDone.addEventListener("dragover", function (event) {
      event.preventDefault();
    });

    boardDone.addEventListener("drop", function (event) {
      event.preventDefault();

      // Obtengo el ID de la tarjeta desde los datos de transferencia
      const cardId = event.dataTransfer.getData("cardId");
      console.log(cardId);

      // Muevo solo la tarjeta que estoy arrastrando (con la clase "dragging")
      const card = document.getElementById(cardId);
      boardDone.appendChild(card);

      // Elimino las clases "dragover" y "dragging" de la tarjeta actual
      const cards = document.querySelectorAll(".cardValue");
      cards.forEach((card) => {
        card.classList.remove("dragover");
        card.classList.remove("dragging");
      });
    });

    //Edit cards

    //Eliminar card

    let eliminar = document.querySelector(`#delete${contador - 1}`);
    eliminar.addEventListener("click", function (e) {
      e.preventDefault();
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: "btn btn-success",
          cancelButton: "btn btn-danger",
        },
        buttonsStyling: false,
      });

      swalWithBootstrapButtons
        .fire({
          title: "¿Estás seguro que querés eliminar esta task?",
          text: "¡No vas a poder revertirlo!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Si, eliminar",
          cancelButtonText: "No, Cancelar",
          reverseButtons: true,
        })
        .then((result) => {
          if (result.isConfirmed) {
            swalWithBootstrapButtons.fire(
              "Eliminado",
              "La task fue eliminada",
              "success"
            );
            // Acceder al elemento padre y eliminarlo
            eliminar.parentNode.parentNode.remove();
          } else if (result.dismiss === Swal.DismissReason.cancel) {
            swalWithBootstrapButtons.fire(
              "Canelado",
              "Tu card fue salvada :)",
              "error"
            );
          }
        });
    });
  });
});
