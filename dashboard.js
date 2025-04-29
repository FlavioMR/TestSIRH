
// Nombre total d'employes
document.getElementById("total-employes").textContent = `Nombre total d'employés : ${employes.length}`;

// Repartition CDI / CDD
const statuts = employes.reduce((acc, e) => {
  acc[e.Statut] = (acc[e.Statut] || 0) + 1;
  return acc;
}, {});
document.getElementById("repartition-statut").textContent =
  `CDI : ${statuts['CDI'] || 0}, CDD : ${statuts['CDD'] || 0}`;

// Salaire moyen
const salaires = employes.map(e => e.Salaire_brut);
const moyenneSalaire = (salaires.reduce((a, b) => a + b, 0) / salaires.length).toFixed(2);
document.getElementById("salaire-moyen").textContent = `Salaire moyen : ${moyenneSalaire} €`;

// Anciennete moyenne (en annees)
function getAnciennete(dateStr) {
  const embauche = new Date(dateStr.split("/").reverse().join("-"));
  const now = new Date();
  return (now - embauche) / (1000 * 60 * 60 * 24 * 365.25);
}
const anciennetes = employes.map(e => getAnciennete(e.Date_embauche));
const moyenneAnciennete = (anciennetes.reduce((a, b) => a + b, 0) / anciennetes.length).toFixed(1);
document.getElementById("anciennete-moyenne").textContent = `Ancienneté moyenne : ${moyenneAnciennete} ans`;

// Repartition par departement
const repartitionDep = employes.reduce((acc, e) => {
  acc[e.Id_dep] = (acc[e.Id_dep] || 0) + 1;
  return acc;
}, {});
const depLabels = Object.keys(repartitionDep).map(id => `${id}`);
const depCounts = Object.values(repartitionDep);

var options = {
  chart: { type: 'bar', height: 350 },
  series: [{ name: "Employés", data: depCounts }],
  xaxis: { categories: depLabels }
};
var chart = new ApexCharts(document.querySelector("#chart-departements"), options);
chart.render();
