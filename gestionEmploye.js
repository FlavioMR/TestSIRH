// Tableau contenant les données des employés. Chaque employé est représenté par un objet avec plusieurs propriétés.
let employes = [
  { id: 1, nom: "Jacques", prenom: "Clémence", statut: "CDI", date: "2019-03-26", salaire: 1905.05, poste: "Chef de Projet", dep: "Recherche & Développement" },
  { id: 2, nom: "Joly", prenom: "Paul", statut: "CDD", date: "2018-01-24", salaire: 2386.06, poste: "Responsable Marketing", dep: "Production" },
  { id: 3, nom: "Étienne", prenom: "Théophile", statut: "CDI", date: "2024-10-27", salaire: 4280.07, poste: "Ingénieur R&D", dep: "Recherche & Développement" },
  { id: 4, nom: "Bernard", prenom: "Jacques", statut: "CDI", date: "2016-10-01", salaire: 2718.28, poste: "Responsable Qualité", dep: "Production" },
  { id: 5, nom: "Albert", prenom: "Brigitte", statut: "CDI", date: "2020-03-29", salaire: 4157.23, poste: "Spécialiste en Matériaux Innovants", dep: "Production" }
];

// Fonction pour remplir le menu déroulant (select) avec les employés existants
function remplirSelect() {
  const select = document.getElementById('select-employe');
  // On vide le contenu actuel du select
  select.innerHTML = '';
  
  // Pour chaque employé, on crée une option et on l'ajoute au menu déroulant
  employes.forEach(emp => {
    const option = document.createElement('option');
    option.value = emp.id; // L'ID de l'employé est stocké comme valeur de l'option
    option.textContent = `${emp.nom} ${emp.prenom}`; // Le texte affiché est le nom et prénom de l'employé
    select.appendChild(option); // On ajoute l'option au select
  });
  
  // On appelle la fonction pour afficher les informations du premier employé après avoir rempli le select
  changerEmploye(employes[0].id);
}

// Fonction pour afficher les informations d'un employé en fonction de son ID
function changerEmploye(id) {
  const emp = employes.find(e => e.id == id); // Recherche l'employé par son ID dans le tableau employes
  // On met à jour le contenu des éléments HTML avec les informations de l'employé sélectionné
  document.getElementById("nom-prenom").textContent = `${emp.nom} ${emp.prenom}`;
  document.getElementById("statut").textContent = emp.statut;
  document.getElementById("date").textContent = emp.date;
  document.getElementById("salaire").textContent = emp.salaire + " €";
  document.getElementById("poste").textContent = emp.poste;
  document.getElementById("dep").textContent = emp.dep;
}

// Fonction pour ajouter un nouvel employé
function ajouterEmploye(event) {
  event.preventDefault(); // Empêche le formulaire de se soumettre de manière traditionnelle (rechargement de la page)

  // Création d'un nouvel objet employé à partir des valeurs du formulaire
  const nouvelEmploye = {
    id: employes.length > 0 ? employes[employes.length - 1].id + 1 : 1, // L'ID est généré en fonction du dernier employé
    nom: document.getElementById("ajout-nom").value,
    prenom: document.getElementById("ajout-prenom").value,
    statut: document.getElementById("ajout-statut").value,
    date: document.getElementById("ajout-date").value,
    salaire: document.getElementById("ajout-salaire").value,
    poste: document.getElementById("ajout-poste").value,
    dep: document.getElementById("ajout-dep").value,
    competences: [], // Liste vide pour les compétences de l'employé
    demandes: [] // Liste vide pour les demandes de l'employé
  };

  // Vérification que tous les champs ont été remplis
  if (!nouvelEmploye.nom || !nouvelEmploye.prenom || !nouvelEmploye.statut || !nouvelEmploye.date || !nouvelEmploye.salaire || !nouvelEmploye.poste || !nouvelEmploye.dep) {
    alert("Veuillez remplir tous les champs !"); // Si un champ est vide, on alerte l'utilisateur
    return; // On arrête l'exécution de la fonction si des champs sont vides
  }

  // On ajoute le nouvel employé au tableau employes
  employes.push(nouvelEmploye);
  // On met à jour le select avec l'employé ajouté
  remplirSelect();
  // On sélectionne le nouvel employé dans le menu déroulant
  document.getElementById("select-employe").value = nouvelEmploye.id;
  // On affiche les informations du nouvel employé
  changerEmploye(nouvelEmploye.id);
  // On réinitialise le formulaire d'ajout
  document.getElementById("form-ajout").reset();
}

// Fonction pour supprimer un employé
function supprimerEmploye() {
  const select = document.getElementById("select-employe");
  const empId = parseInt(select.value); // On récupère l'ID de l'employé sélectionné
  
  // On filtre le tableau employes pour supprimer l'employé avec l'ID correspondant
  employes = employes.filter(e => e.id !== empId);
  
  // On met à jour le select avec les employés restants
  remplirSelect();
  
  // Si la liste d'employés est vide, on réinitialise l'affichage des informations
  if (employes.length === 0) {
    document.getElementById("nom-prenom").textContent = "-";
    document.getElementById("statut").textContent = "-";
    document.getElementById("date").textContent = "-";
    document.getElementById("salaire").textContent = "-";
    document.getElementById("poste").textContent = "-";
    document.getElementById("dep").textContent = "-";
  }
}

// Fonction pour afficher le formulaire de modification des informations d'un employé
function afficherFormulaireModification() {
  document.getElementById('modal-modif').style.display = 'block'; // On affiche la fenêtre modale
  // On sépare le nom et le prénom pour les insérer dans les champs du formulaire de modification
  const nomPrenom = document.getElementById('nom-prenom').textContent.split(' ');
  document.getElementById('modif-nom').value = nomPrenom[0]; // On insère le nom dans le champ correspondant
  document.getElementById('modif-prenom').value = nomPrenom[1]; // On insère le prénom dans le champ correspondant
  document.getElementById('modif-statut').value = document.getElementById('statut').textContent;
  document.getElementById('modif-date').value = document.getElementById('date').textContent;
  document.getElementById('modif-salaire').value = document.getElementById('salaire').textContent.replace(" €", ""); // On retire le symbole € pour le champ salaire
  document.getElementById('modif-poste').value = document.getElementById('poste').textContent;
  document.getElementById('modif-dep').value = document.getElementById('dep').textContent;
}

// Fonction pour fermer la fenêtre modale de modification
function fermerModal() {
  document.getElementById('modal-modif').style.display = 'none'; // On masque la fenêtre modale
}

// Fonction pour enregistrer les modifications d'un employé
function modifierEmploye(event) {
  event.preventDefault(); // Empêche l'envoi traditionnel du formulaire

  // On met à jour les informations de l'employé sélectionné avec les nouvelles valeurs du formulaire
  document.getElementById('nom-prenom').textContent = `${document.getElementById('modif-nom').value} ${document.getElementById('modif-prenom').value}`;
  document.getElementById('statut').textContent = document.getElementById('modif-statut').value;
  document.getElementById('date').textContent = document.getElementById('modif-date').value;
  document.getElementById('salaire').textContent = document.getElementById('modif-salaire').value + " €";
  document.getElementById('poste').textContent = document.getElementById('modif-poste').value;
  document.getElementById('dep').textContent = document.getElementById('modif-dep').value;
  
  // On ferme la fenêtre modale après la modification
  fermerModal();
}

// Appel initial de la fonction pour remplir le select avec les employés existants au chargement de la page
remplirSelect();
