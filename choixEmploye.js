// --- Données des employés simulées ---
const employes = [
  {
    nom: "Julie Dupont",
    statut: "CDI",
    date: "2021-01-01",
    salaire: 32000,
    poste: "Développeuse",
    departement: "IT",
    competences: ["JavaScript", "React", "Node.js"],
    demandes: [
      "Congé payé - demandé le 10/03/2025",
      "Télétravail - demandé le 14/03/2025"
    ]
  },
  {
    nom: "Marc Bernard",
    statut: "CDD",
    date: "2022-06-10",
    salaire: 28000,
    poste: "Assistant RH",
    departement: "RH",
    competences: ["Recrutement", "Paie", "Communication"],
    demandes: [
      "Formation gestion RH - en attente de validation"
    ]
  }
];

// Chargement du sélecteur employé
function chargerSelectEmploye() {
  const select = document.getElementById("select-employe");
  if (!select) return;

  employes.forEach((emp, index) => {
    const option = document.createElement("option");
    option.value = index;
    option.textContent = emp.nom;
    select.appendChild(option);
  });
}

// Changement d'employé sélectionné
function changerEmploye(index) {
  const emp = employes[index];

  if (document.getElementById("nom-prenom")) {
    document.getElementById("nom-prenom").textContent = emp.nom;
    document.getElementById("statut").textContent = emp.statut;
    document.getElementById("date").textContent = emp.date;
    document.getElementById("salaire").textContent = emp.salaire;
    document.getElementById("poste").textContent = emp.poste;
    document.getElementById("dep").textContent = emp.departement;
  }

  if (document.getElementById("liste-competences")) {
    const ul = document.getElementById("liste-competences");
    ul.innerHTML = "";
    emp.competences.forEach(c => {
      const li = document.createElement("li");
      li.textContent = c;
      ul.appendChild(li);
    });
  }

  if (document.getElementById("contenu-dynamique")) {
    document.getElementById("contenu-dynamique").innerHTML = `
      <p>${emp.nom} a été embauché(e) en ${emp.date} et travaille dans le département ${emp.departement}.</p>
    `;
  }
}

// Fonction pour afficher une section dynamique : compétences ou demandes
function afficher(section) {
  const container = document.getElementById("contenu-dynamique");
  if (!container) return;

  const select = document.getElementById("select-employe");
  if (!select) return;

  const selectedIndex = select.value;
  const emp = employes[selectedIndex];

  if (section === "competences") {
    container.innerHTML = `
      <h4>Compétences</h4>
      <ul>
        ${emp.competences.map(c => `<li>${c}</li>`).join("")}
      </ul>
    `;
  } else if (section === "demandes") {
    container.innerHTML = `
      <h4>Demandes</h4>
      <ul>
        ${emp.demandes.map(d => `<li>${d}</li>`).join("")}
      </ul>
    `;
  }
}

// Initialisation
window.onload = () => {
  chargerSelectEmploye();
};




























































































































/*const employes = [
    {
      id: 1,
      nom: "Bertrand",
      prenom: "Lucas",
      statut: "CDI",
      date: "2021-01-01",
      salaire: 7500,
      poste: "Directeur R&D (1)",
      dep: "Recherche & Développement (1)",
      competences: ["Analyse des matériaux"],
      demandes: ["Congé annuel"]
    },
    {
      id: 2,
      nom: "Petit",
      prenom: "Emma",
      statut: "CDD",
      date: "2022-05-31",
      salaire: 4800,
      poste: "Chefs de projet R&D (2)",
      dep: "Recherche & Développement (1)",
      competences: ["Négociation commerciale"],
      demandes: ["Maladie"]
    },
    {
      id: 3,
      nom: "Petit",
      prenom: "Elodie",
      statut: "CDI",
      date: "2021-12-30",
      salaire: 4800,
      poste: "Chefs de projet R&D (2)",
      dep: "Recherche & Développement (1)",
      competences: ["Maintenance industrielle"],
      demandes: []
    },
    {
      id: 4,
      nom: "Dubois",
      prenom: "Julie",
      statut: "CDI",
      date: "2022-08-25",
      salaire: 4800,
      poste: "Chefs de projet R&D (2)",
      dep: "Recherche & Développement (1)",
      competences: [],
      demandes: []
    },
    {
      id: 5,
      nom: "Richard",
      prenom: "Arthur",
      statut: "CDD",
      date: "2022-08-19",
      salaire: 4800,
      poste: "Chefs de projet R&D 2",
      dep: "Recherche & Développement (1)",
      competences: [],
      demandes: []
    }
  ];
  

function remplirSelect() {
    const select = document.getElementById('select-employe');
    employes.forEach(emp => {
        const option = document.createElement('option');
        option.value = emp.id;
        option.textContent = `${emp.nom} ${emp.prenom}`;
        select.appendChild(option);
    });
    changerEmploye(employes[0].id);
}

function changerEmploye(id) {
    const emp = employes.find(e => e.id == id);
    document.getElementById("nom-prenom").textContent = `${emp.nom} ${emp.prenom}`;
    document.getElementById("statut").textContent = emp.statut;
    document.getElementById("date").textContent = emp.date;
    document.getElementById("salaire").textContent = emp.salaire;
    document.getElementById("poste").textContent = emp.poste;
    document.getElementById("dep").textContent = emp.dep;
    document.getElementById("contenu-dynamique").innerHTML = `<p>Choisissez une section à gauche.</p>`;
}

function afficher(type) {
    const contenu = document.getElementById("contenu-dynamique");
    if (type === "competences") {
        contenu.innerHTML = `
        <ul>
            <li>Travail en équipe</li>
            <li>Communication</li>
            <li>Maîtrise de logiciels</li>
        </ul>`;
    } else {
        contenu.innerHTML = `
        <ul>
            <li>Demande de congé : 15/04/2025</li>
            <li>Demande de formation : Excel avancé</li>
        </ul>`;
    }
}

window.onload = remplirSelect;*/
