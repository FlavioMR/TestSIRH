// Envoi du message lorsque le formulaire est soumis
document.getElementById("form-message").addEventListener("submit", function (e) {
  // Empêche le comportement par défaut du formulaire (rechargement de la page)
  e.preventDefault();

  // Création de l'objet message avec les données du formulaire
  const message = {
    nom: document.getElementById("messageNom").value, // Récupère le nom de l'employé sélectionné
    sujet: document.getElementById("sujetMessage").value, // Récupère l'objet du message
    contenu: document.getElementById("contenuMessage").value, // Récupère le contenu du message
    date: new Date().toLocaleString() // Ajoute la date et l'heure actuelles
  };

  // Récupère les messages déjà stockés dans le localStorage ou initialise un tableau vide si aucun message n'existe
  const messages = JSON.parse(localStorage.getItem("messagesRH") || "[]");

  // Ajoute le nouveau message au tableau des messages
  messages.push(message);

  // Sauvegarde le tableau des messages mis à jour dans le localStorage
  localStorage.setItem("messagesRH", JSON.stringify(messages));

  // Affiche un message de confirmation que le message a été envoyé
  document.getElementById("confirmationMessage").style.display = "block";

  // Masque le message de confirmation après 2,5 secondes
  setTimeout(() => document.getElementById("confirmationMessage").style.display = "none", 2500);

  // Réinitialise le formulaire après l'envoi
  this.reset();
});

// Fonction pour afficher les demandes des employés
function afficherDemandes() {
  // Récupère les demandes stockées dans le localStorage ou initialise un tableau vide si aucune demande n'existe
  const demandes = JSON.parse(localStorage.getItem("demandesRH") || "[]");

  // Récupère l'élément de la liste où les demandes seront affichées
  const liste = document.getElementById("liste-demandes");

  // Vide la liste actuelle pour réinitialiser l'affichage
  liste.innerHTML = "";

  // Parcourt chaque demande et génère un élément de liste HTML pour chaque demande
  demandes.forEach((d, index) => {
    // Crée un nouvel élément <li> pour chaque demande
    const li = document.createElement("li");
    li.className = "demande-item"; // Ajoute une classe pour le style

    // Insère le contenu HTML de la demande dans l'élément <li>
    li.innerHTML = `
      <p><strong>${d.nom}</strong> a demandé un <em>${d.type}</em> – <small>${d.date}</small></p>
      <p>${d.commentaire}</p>
      <p><strong>Statut :</strong> ${d.statut}</p>
      <!-- Si le statut est "En attente", ajoute des boutons pour accepter ou refuser la demande -->
      ${d.statut === "En attente" ? `
        <button class="accepter" onclick="changerStatut(${index}, 'Acceptée')">Accepter</button>
        <button class="refuser" onclick="changerStatut(${index}, 'Refusée')">Refuser</button>` : ""}
      <!-- Bouton pour supprimer la demande -->
      <button class="supprimer" onclick="confirmerSuppression(${index})">Supprimer</button>
    `;

    // Ajoute l'élément <li> à la liste des demandes
    liste.appendChild(li);
  });
}

// Fonction pour changer le statut d'une demande (Acceptée ou Refusée)
function changerStatut(index, statut) {
  // Récupère les demandes existantes depuis le localStorage
  const demandes = JSON.parse(localStorage.getItem("demandesRH") || "[]");

  // Modifie le statut de la demande à l'index donné
  demandes[index].statut = statut;

  // Sauvegarde les demandes mises à jour dans le localStorage
  localStorage.setItem("demandesRH", JSON.stringify(demandes));

  // Rafraîchit l'affichage des demandes pour montrer le nouveau statut
  afficherDemandes();
}

// Fonction de suppression d'une demande avec confirmation
function confirmerSuppression(index) {
  // Affiche une boîte de dialogue pour confirmer la suppression
  if (confirm("Êtes-vous sûr de vouloir supprimer cette demande ?")) {
    // Récupère les demandes existantes depuis le localStorage
    const demandes = JSON.parse(localStorage.getItem("demandesRH") || "[]");

    // Supprime la demande à l'index spécifié
    demandes.splice(index, 1);

    // Sauvegarde les demandes mises à jour dans le localStorage
    localStorage.setItem("demandesRH", JSON.stringify(demandes));

    // Rafraîchit l'affichage des demandes après suppression
    afficherDemandes();
  }
}

// Initialisation : affiche les demandes existantes au chargement de la page
afficherDemandes();
