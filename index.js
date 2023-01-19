// pointer sur le texte saisi à ajouter dans la toDo liste
const textSaisi = document.querySelector("input");
const ajouter = document.querySelector(".ajouter");
// evenement du button ajouter todo liste
ajouter.addEventListener("click", function () {
  // Creation de la liste
  let listes = document.createElement("li");
  listes.className = "liste list-group-item d-flex w-75 gap-3";
  let radio = document.createElement("input");
  // creation du radiobox pour cocher si le toDo est fait ou non
  radio.className = "checkbox form-check-input flex-shrink-0";
  radio.setAttribute("type", "checkbox");
  listes.appendChild(radio);
  // recuprer le texte de l'input et le mettre dans liste
  let toDo = document.createElement("span");
  toDo.className = "form-checked-content";
  toDo.innerHTML = textSaisi.value;
  listes.appendChild(toDo);
  // ajouter l'icon de la suppression
  let icon = document.createElement("i");
  icon.className = "delete bi bi-trash-fill ms-auto";
  icon.style.cursor = "pointer";
  listes.appendChild(icon);
  // ajouter la liste dans le container
  document.querySelector(".contain").appendChild(listes);
  textSaisi.value = "";
  textSaisi.placeholder = "Add new task";

  // marquer que la to do est faite
  let checkboxes = document.querySelectorAll(".checkbox");
  // checkboxes[0].getAttribute
  if (checkboxes) {
    for (i = 0; i < checkboxes.length; i++) {
      checkboxes[i].addEventListener("click", function () {
        if (this.checked == true) {
          this.nextSibling.style.textDecorationLine = "line-through";
          this.parentNode.style.backgroundColor = "lightgrey";
        } else {
          this.nextSibling.style.textDecorationLine = "none";
          this.parentNode.style.backgroundColor = "white";
        }
      });
    }
  }
  // supprimer une liste
  let deletes = document.querySelectorAll(".delete");
  if (deletes) {
    for (i = 0; i < deletes.length; i++) {
      deletes[i].addEventListener("click", function () {
        this.parentNode.remove();
      });
    }
  }
});
// refraichir la todo liste
const reset = document.querySelector(".reset");
reset.addEventListener("click", function () {
  let childs = document.querySelectorAll(".liste");
  childs.forEach((e) => e.remove());
});
