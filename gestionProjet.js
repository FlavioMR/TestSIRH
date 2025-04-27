// Fonction pour basculer l'affichage des tâches d'un projet
function toggleProject(card) {
  // On récupère l'en-tête du projet pour savoir si le projet est replié ou déplié
  const header = card.querySelector('.project-header');
  
  // On récupère toutes les tâches du projet
  const tasks = card.querySelectorAll('.task');
  
  // On récupère la flèche permettant de montrer ou cacher les tâches
  const arrow = card.querySelector('.toggle-arrow');
  
  // On vérifie si l'en-tête est actuellement replié, et on bascule cet état
  const isCollapsed = header.classList.toggle('collapsed');
  
  // On boucle sur toutes les tâches pour les afficher ou les cacher
  tasks.forEach(task => {
    task.style.display = isCollapsed ? 'none' : 'block'; // Si replié, on cache, sinon on affiche
  });
}

// Fonction pour ouvrir une fenêtre de dialogue lorsque l'utilisateur clique sur une tâche
function openDialog(taskElement) {
  // On récupère l'élément <dialog> dans l'élément de la tâche
  const dialog = taskElement.querySelector('dialog');
  
  // Si un <dialog> est trouvé, on l'affiche
  if (dialog) dialog.showModal();
}

// On ajoute un événement à chaque bouton de fermeture des dialogues
document.querySelectorAll('.close-dialog').forEach(button => {
  // Lorsqu'on clique sur un bouton de fermeture
  button.addEventListener('click', (e) => {
    e.stopPropagation(); // On empêche la propagation de l'événement pour éviter des fermetures supplémentaires
    
    // On récupère le dialog le plus proche et on le ferme
    const dialog = button.closest('dialog');
    dialog.close();
  });
});

// Fonction qui calcule et met à jour les statuts des tâches et des projets
function calculerStatuts() {
  // On récupère toutes les tâches de la page
  const tasks = document.querySelectorAll('.task');
  
  tasks.forEach(task => {
    // On récupère la date de la tâche et son statut
    const delaiSpan = task.querySelector('.date-tache');
    const statusSpan = task.querySelector('.status');

    // Si la tâche a une date limite et un statut, on la traite
    if (delaiSpan && statusSpan && !statusSpan.textContent.includes('Terminée')) {
      // On transforme la date limite en un objet Date
      const dateLimite = new Date(delaiSpan.textContent.trim());
      const aujourdHui = new Date();
      
      // On calcule le nombre de jours restants avant la date limite
      const diff = Math.ceil((dateLimite - aujourdHui) / (1000 * 60 * 60 * 24));

      // Définition des valeurs par défaut pour le statut
      let statut = 'Prévu';
      let classe = 'prevu';

      // On met à jour le statut selon la différence de jours
      if (diff < 0) {
        statut = 'En retard';
        classe = 'en-retard';
      } else if (diff <= 2) {
        statut = 'Urgent';
        classe = 'urgent';
      } else if (diff <= 7) {
        statut = 'À faire';
        classe = 'a-faire';
      }

      // On met à jour le texte du statut et sa classe CSS
      statusSpan.textContent = `${statut} (${diff >= 0 ? diff + ' j restants' : 'dépassé de ' + Math.abs(diff) + ' j'})`;
      statusSpan.className = `status ${classe}`;
    }
  });

  // Mise à jour des statuts pour chaque projet
  const projets = document.querySelectorAll('.project-header');
  
  projets.forEach(projet => {
    const dateProjet = projet.querySelector('.date-projet');
    const statusSpan = projet.querySelector('.status');

    // Si le projet a une date limite et un statut, on le traite
    if (dateProjet && statusSpan && !statusSpan.textContent.includes('Terminée')) {
      const dateLimite = new Date(dateProjet.textContent.trim());
      const aujourdHui = new Date();
      const diff = Math.ceil((dateLimite - aujourdHui) / (1000 * 60 * 60 * 24));

      let statut = 'Prévu';
      let classe = 'prevu';

      // On met à jour le statut en fonction des jours restants
      if (diff < 0) {
        statut = 'En retard';
        classe = 'en-retard';
      } else if (diff <= 2) {
        statut = 'Urgent';
        classe = 'urgent';
      } else if (diff <= 7) {
        statut = 'À faire';
        classe = 'a-faire';
      }

      // On met à jour le texte du statut du projet
      statusSpan.textContent = `${statut} (${diff >= 0 ? diff + ' j restants' : 'dépassé de ' + Math.abs(diff) + ' j'})`;
      statusSpan.className = `status ${classe}`;
    }
  });
}

// Fonction pour filtrer les projets en fonction du statut sélectionné
function filtrerProjets() {
  // On récupère le statut sélectionné dans le filtre
  const filtre = document.getElementById('filtre-statut').value;
  
  // On récupère tous les projets
  const projets = document.querySelectorAll('.card');

  // On parcourt tous les projets
  projets.forEach(projet => {
    const statutProjet = projet.querySelector('.project-header .status');
    
    // Si aucun filtre n'est appliqué ou si le projet a le statut correspondant au filtre, on l'affiche
    if (!filtre || statutProjet.classList.contains(filtre)) {
      projet.style.display = 'block';
    } else {
      projet.style.display = 'none'; // Sinon, on le cache
    }
  });
}

// Données des employés assignés à chaque projet
const employesParProjet = {
  "projet-1": ["Renard Aimée"],
  "projet-2": ["Lagarde	Augustine"],
  "projet-3": ["Thomas Louise"],
  "projet-4": ["Perrier	Joséphine","Colin	Édith"]
};

// Données des compétences nécessaires pour chaque projet
const competencesParProjet = {
  "projet-1": ["Négociation commerciale", "Maintenance industrielle", "Data Science"],
  "projet-2": ["Conception graphique"],
  "projet-3": ["Négociation commerciale", "Data Science", "Conception graphique"],
  "projet-4": ["Négociation commerciale", "Data Science", "Conception graphique"]
};

// Fonction pour afficher les employés et les compétences nécessaires pour chaque projet sur la page
function afficherEmployesEtCompetences() {
  
  // Pour chaque projet dans la liste des employés assignés (employesParProjet),
  // on parcourt les paires clé-valeur (id, employes)
  Object.entries(employesParProjet).forEach(([id, employes]) => {
    
    // On récupère l'élément <ul> correspondant aux employés pour ce projet
    const ulEmployes = document.getElementById("employes-" + id);
    
    // Si l'élément <ul> existe (si ce projet a une liste d'employés à afficher)
    if (ulEmployes) {
      
      // On vide l'élément <ul> pour éviter d'ajouter plusieurs fois les mêmes éléments
      ulEmployes.innerHTML = "";
      
      // On vérifie si la liste des employés est vide
      if (employes.length === 0) {
        
        // Si aucun employé n'est assigné à ce projet, on affiche un message indiquant cela
        const li = document.createElement("li");
        li.textContent = "Aucun employé assigné."; // Message indiquant qu'il n'y a pas d'employé
        ulEmployes.appendChild(li); // On ajoute ce message à la liste <ul>
        
      } else {
        
        // Si des employés sont assignés, on les affiche un par un dans la liste
        employes.forEach(emp => {
          
          // On crée un nouvel élément <li> pour chaque employé
          const li = document.createElement("li");
          li.textContent = emp; // On met le nom de l'employé dans l'élément <li>
          
          // On ajoute l'élément <li> à la liste <ul>
          ulEmployes.appendChild(li);
        });
      }
    }
  });

  // Pour chaque projet dans la liste des compétences nécessaires (competencesParProjet),
  // on parcourt également les paires clé-valeur (id, competences)
  Object.entries(competencesParProjet).forEach(([id, competences]) => {
    
    // On récupère l'élément <ul> correspondant aux compétences nécessaires pour ce projet
    const ulCompetences = document.getElementById("competences-" + id);
    
    // Si l'élément <ul> existe (si ce projet a une liste de compétences à afficher)
    if (ulCompetences) {
      
      // On vide l'élément <ul> pour éviter d'ajouter plusieurs fois les mêmes éléments
      ulCompetences.innerHTML = "";
      
      // On vérifie si la liste des compétences est vide
      if (competences.length === 0) {
        
        // Si aucune compétence n'est nécessaire pour ce projet, on affiche un message
        const li = document.createElement("li");
        li.textContent = "Aucune compétence nécessaire."; // Message indiquant qu'aucune compétence n'est requise
        ulCompetences.appendChild(li); // On ajoute ce message à la liste <ul>
        
      } else {
        
        // Si des compétences sont nécessaires, on les affiche une par une dans la liste
        competences.forEach(comp => {
          
          // On crée un nouvel élément <li> pour chaque compétence
          const li = document.createElement("li");
          li.textContent = comp; // On met la compétence dans l'élément <li>
          
          // On ajoute l'élément <li> à la liste <ul>
          ulCompetences.appendChild(li);
        });
      }
    }
  });
}

// Lancement de la fonction de calcul des statuts lorsque la page est chargée
window.addEventListener('DOMContentLoaded', calculerStatuts);

// Lancement de la fonction d'affichage des employés et des compétences au chargement de la page
window.onload = afficherEmployesEtCompetences;
