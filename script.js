document.addEventListener("DOMContentLoaded", function () {
  const tacheInput = document.getElementById("tache");
  const ajouterBtn = document.getElementById("ajouter");
  const message = document.getElementById("message");
  const liste = document.getElementById("liste");
  const supprimerBtn = document.getElementById("supprimer");

  function afficherMessage(texte, couleur) {
    message.textContent = texte;
    message.style.color = couleur;
  }

  function verifierListe() {
    supprimerBtn.style.display = liste.children.length > 0 ? "inline" : "none";
  }

  function ajouterTache() {
    const texte = tacheInput.value.trim();
    if (texte === "") {
      afficherMessage("Le champ ne doit pas etre vide.", "red");
      return;
    }

    const li = document.createElement("li");
    li.style.cursor = "pointer";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const span = document.createElement("span");
    span.textContent = " " + texte;
    span.style.marginLeft = "5px";

    li.appendChild(checkbox);
    li.appendChild(span);
    liste.appendChild(li);

    afficherMessage("Tache ajoutee !", "green");
    tacheInput.value = "";
    verifierListe();

    // Hover effect
    li.addEventListener("mouseover", () => li.style.backgroundColor = "#f0f0f0");
    li.addEventListener("mouseout", () => li.style.backgroundColor = "transparent");

    // Clique sur toute la ligne
    li.addEventListener("click", () => checkbox.checked = !checkbox.checked);
  }

  function supprimerTaches() {
    const taches = document.querySelectorAll("#liste li");
    let compteur = 0;
    taches.forEach(tache => {
      const checkbox = tache.querySelector("input[type='checkbox']");
      if (checkbox.checked) {
        tache.remove();
        compteur++;
      }
    });

    if (compteur > 0) {
      afficherMessage(`Tache(s) supprimee(s) !`, "orange");
    }
    verifierListe();
  }

  ajouterBtn.addEventListener("click", ajouterTache);
  tacheInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      ajouterTache();
    }
  });
  supprimerBtn.addEventListener("click", supprimerTaches);

  verifierListe();
});
