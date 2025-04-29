const heures = [
    "08:00 - 09:00",
    "09:00 - 10:00",
    "10:00 - 11:00",
    "11:00 - 12:00",
    "13:00 - 14:00",
    "14:00 - 15:00",
    "15:00 - 16:00",
    "16:00 - 17:00"
  ];
  
  const jours = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi"];
  const semaines = ["Semaine 1", "Semaine 2", "Semaine 3", "Semaine 4"];
  
  let modeMois = false;
  
  const tableHead = document.getElementById("tableHead");
  const tbody = document.querySelector("#schedule tbody");
  const toggleViewBtn = document.getElementById("toggleViewBtn");
  
  function genererTableau() {
    // Nettoyer l'ancien tableau
    tbody.innerHTML = '';
    tableHead.innerHTML = '<th>Heure</th>';
  
    let joursAffiches = [];
  
    if (modeMois) {
      // Vue mois : 4 semaines
      semaines.forEach(semaine => {
        jours.forEach(jour => {
          joursAffiches.push(`${semaine} - ${jour}`);
        });
      });
    } else {
      // Vue semaine simple
      joursAffiches = [...jours];
    }
  
    // Remplir l'entête
    joursAffiches.forEach(jour => {
      const th = document.createElement("th");
      th.textContent = jour;
      tableHead.appendChild(th);
    });
  
    // Remplir le corps
    heures.forEach(heure => {
      const row = document.createElement("tr");
  
      const heureCell = document.createElement("td");
      heureCell.textContent = heure;
      row.appendChild(heureCell);
  
      joursAffiches.forEach(jour => {
        const cell = document.createElement("td");
        cell.classList.add("available");
        cell.addEventListener("click", () => {
          const currentActivity = cell.textContent;
          const newActivity = prompt("Entrez le nom de l'activité :", currentActivity);
          if (newActivity !== null) {
            cell.textContent = newActivity.trim();
            if (newActivity.trim() !== '') {
              cell.classList.remove("available");
              cell.classList.add("busy");
            } else {
              cell.classList.remove("busy");
              cell.classList.add("available");
            }
          }
        });
        row.appendChild(cell);
      });
  
      tbody.appendChild(row);
    });
  }
  
  toggleViewBtn.addEventListener("click", () => {
    modeMois = !modeMois;
    toggleViewBtn.textContent = modeMois ? "Passer en vue Semaine" : "Passer en vue Mois";
    genererTableau();
  });

  function logout() {
    localStorage.removeItem("auth");
    window.location.href = "login.html";
  }
  
  // Générer au chargement
  genererTableau();
  