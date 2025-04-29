const employes = [
  {
    "Nom": "Jacques",
    "Prenom": "Clémence",
    "Statut": "CDI",
    "Date_embauche": "26/03/2019",
    "Salaire_brut": 1905.05,
    "Id_dep": "Recherche & Développement"
  },
  {
    "Nom": "Joly",
    "Prenom": "Paul",
    "Statut": "CDD",
    "Date_embauche": "24/01/2018",
    "Salaire_brut": 2386.06,
    "Id_dep": "Production"
  },
  {
    "Nom": "Étienne",
    "Prenom": "Théophile",
    "Statut": "CDI",
    "Date_embauche": "27/10/2024",
    "Salaire_brut": 4280.07,
    "Id_dep": "Recherche & Développement"
  },
  {
    "Nom": "Bernard",
    "Prenom": "Jacques",
    "Statut": "CDI",
    "Date_embauche": "01/10/2016",
    "Salaire_brut": 2718.28,
    "Id_dep": "Production"
  },
  {
    "Nom": "Albert",
    "Prenom": "Brigitte",
    "Statut": "CDI",
    "Date_embauche": "29/03/2020",
    "Salaire_brut": 4157.23,
    "Id_dep": "Production"
  },
  {
    "Nom": "De Oliveira",
    "Prenom": "Manon",
    "Statut": "Stage",
    "Date_embauche": "02/06/2023",
    "Salaire_brut": 2725.85,
    "Id_dep": "Marketing & Commercial"
  },
  {
    "Nom": "Chauvin",
    "Prenom": "Michelle",
    "Statut": "CDI",
    "Date_embauche": "06/09/2020",
    "Salaire_brut": 4986.99,
    "Id_dep": "Production"
  },
  {
    "Nom": "Dupuy",
    "Prenom": "Gabriel",
    "Statut": "Stage",
    "Date_embauche": "17/05/2021",
    "Salaire_brut": 3229.05,
    "Id_dep": "Recherche & Développement"
  },
  {
    "Nom": "Brunet",
    "Prenom": "Stéphanie",
    "Statut": "Alternance",
    "Date_embauche": "26/07/2023",
    "Salaire_brut": 2229.28,
    "Id_dep": "Recherche & Développement"
  },
  {
    "Nom": "Munoz",
    "Prenom": "Anouk",
    "Statut": "Alternance",
    "Date_embauche": "01/03/2022",
    "Salaire_brut": 5359.48,
    "Id_dep": "Marketing & Commercial"
  },
  {
    "Nom": "Michaud",
    "Prenom": "Pierre",
    "Statut": "CDI",
    "Date_embauche": "18/01/2025",
    "Salaire_brut": 4864.87,
    "Id_dep": "Recherche & Développement"
  },
  {
    "Nom": "David",
    "Prenom": "Stéphane",
    "Statut": "Stage",
    "Date_embauche": "22/01/2018",
    "Salaire_brut": 2130.96,
    "Id_dep": "Production"
  },
  {
    "Nom": "Renaud",
    "Prenom": "Thibault",
    "Statut": "Alternance",
    "Date_embauche": "16/04/2020",
    "Salaire_brut": 4224.88,
    "Id_dep": "Recherche & Développement"
  },
  {
    "Nom": "Pinto",
    "Prenom": "Emmanuelle",
    "Statut": "CDI",
    "Date_embauche": "31/10/2017",
    "Salaire_brut": 4577.31,
    "Id_dep": "Marketing & Commercial"
  },
  {
    "Nom": "Hervé",
    "Prenom": "Arnaude",
    "Statut": "CDI",
    "Date_embauche": "05/05/2020",
    "Salaire_brut": 5392.33,
    "Id_dep": "Recherche & Développement"
  },
  {
    "Nom": "Brunel",
    "Prenom": "Michel",
    "Statut": "Stage",
    "Date_embauche": "25/12/2018",
    "Salaire_brut": 2967.49,
    "Id_dep": "Marketing & Commercial"
  },
  {
    "Nom": "Tessier",
    "Prenom": "Alphonse",
    "Statut": "CDD",
    "Date_embauche": "07/02/2024",
    "Salaire_brut": 3354.76,
    "Id_dep": "Production"
  },
  {
    "Nom": "Étienne",
    "Prenom": "Clémence",
    "Statut": "Alternance",
    "Date_embauche": "22/03/2025",
    "Salaire_brut": 4747.65,
    "Id_dep": "Production"
  },
  {
    "Nom": "Imbert",
    "Prenom": "Cécile",
    "Statut": "CDI",
    "Date_embauche": "21/06/2017",
    "Salaire_brut": 4358.35,
    "Id_dep": "Production"
  },
  {
    "Nom": "Renaud",
    "Prenom": "Inès",
    "Statut": "CDD",
    "Date_embauche": "23/02/2021",
    "Salaire_brut": 2486.29,
    "Id_dep": "Marketing & Commercial"
  },
  {
    "Nom": "Olivier",
    "Prenom": "Céline",
    "Statut": "CDD",
    "Date_embauche": "29/05/2017",
    "Salaire_brut": 4675.38,
    "Id_dep": "Recherche & Développement"
  },
  {
    "Nom": "Chevalier",
    "Prenom": "Alain",
    "Statut": "CDD",
    "Date_embauche": "02/09/2018",
    "Salaire_brut": 5251.57,
    "Id_dep": "Marketing & Commercial"
  },
  {
    "Nom": "Gillet",
    "Prenom": "Jeannine",
    "Statut": "Stage",
    "Date_embauche": "02/01/2016",
    "Salaire_brut": 2924.51,
    "Id_dep": "Production"
  },
  {
    "Nom": "Olivier",
    "Prenom": "Luc",
    "Statut": "Alternance",
    "Date_embauche": "04/09/2022",
    "Salaire_brut": 2693.03,
    "Id_dep": "Marketing & Commercial"
  },
  {
    "Nom": "Parent",
    "Prenom": "Sébastien",
    "Statut": "Stage",
    "Date_embauche": "07/10/2021",
    "Salaire_brut": 2400.06,
    "Id_dep": "Recherche & Développement"
  },
  {
    "Nom": "Brunet",
    "Prenom": "Patrick",
    "Statut": "Alternance",
    "Date_embauche": "10/04/2020",
    "Salaire_brut": 4937.46,
    "Id_dep": "Production"
  },
  {
    "Nom": "Robert",
    "Prenom": "Pénélope",
    "Statut": "Stage",
    "Date_embauche": "31/07/2016",
    "Salaire_brut": 3320.39,
    "Id_dep": "Production"
  },
  {
    "Nom": "Maurice",
    "Prenom": "Hortense",
    "Statut": "Stage",
    "Date_embauche": "04/08/2022",
    "Salaire_brut": 2181.82,
    "Id_dep": "Recherche & Développement"
  },
  {
    "Nom": "Masson",
    "Prenom": "Susanne",
    "Statut": "CDD",
    "Date_embauche": "27/09/2020",
    "Salaire_brut": 4435.27,
    "Id_dep": "Production"
  },
  {
    "Nom": "Laine",
    "Prenom": "Claude",
    "Statut": "Stage",
    "Date_embauche": "02/01/2016",
    "Salaire_brut": 4304.92,
    "Id_dep": "Marketing & Commercial"
  },
  {
    "Nom": "Riou",
    "Prenom": "Émile",
    "Statut": "Stage",
    "Date_embauche": "30/01/2020",
    "Salaire_brut": 4022.28,
    "Id_dep": "Recherche & Développement"
  },
  {
    "Nom": "Moreau",
    "Prenom": "Zacharie",
    "Statut": "CDI",
    "Date_embauche": "18/09/2018",
    "Salaire_brut": 4663.18,
    "Id_dep": "Marketing & Commercial"
  },
  {
    "Nom": "François",
    "Prenom": "Cécile",
    "Statut": "Alternance",
    "Date_embauche": "22/06/2024",
    "Salaire_brut": 2268.52,
    "Id_dep": "Recherche & Développement"
  },
  {
    "Nom": "Imbert",
    "Prenom": "Roger",
    "Statut": "Stage",
    "Date_embauche": "16/10/2018",
    "Salaire_brut": 1813.63,
    "Id_dep": "Production"
  },
  {
    "Nom": "Blanchard",
    "Prenom": "Michel",
    "Statut": "Alternance",
    "Date_embauche": "17/12/2018",
    "Salaire_brut": 5881.93,
    "Id_dep": "Recherche & Développement"
  },
  {
    "Nom": "Rémy",
    "Prenom": "Gilles",
    "Statut": "CDI",
    "Date_embauche": "17/12/2017",
    "Salaire_brut": 5456.18,
    "Id_dep": "Production"
  },
  {
    "Nom": "Bazin",
    "Prenom": "Denise",
    "Statut": "CDD",
    "Date_embauche": "17/02/2022",
    "Salaire_brut": 2441.92,
    "Id_dep": "Recherche & Développement"
  },
  {
    "Nom": "Parent",
    "Prenom": "Camille",
    "Statut": "CDI",
    "Date_embauche": "18/12/2022",
    "Salaire_brut": 4315.57,
    "Id_dep": "Recherche & Développement"
  },
  {
    "Nom": "Pruvost",
    "Prenom": "Inès",
    "Statut": "CDI",
    "Date_embauche": "22/12/2024",
    "Salaire_brut": 5702.21,
    "Id_dep": "Marketing & Commercial"
  },
  {
    "Nom": "Fabre",
    "Prenom": "Édith",
    "Statut": "CDD",
    "Date_embauche": "30/07/2024",
    "Salaire_brut": 2043.29,
    "Id_dep": "Production"
  },
  {
    "Nom": "Valette",
    "Prenom": "Agathe",
    "Statut": "CDI",
    "Date_embauche": "22/09/2021",
    "Salaire_brut": 2159.74,
    "Id_dep": "Recherche & Développement"
  },
  {
    "Nom": "Perrier",
    "Prenom": "Honoré",
    "Statut": "CDD",
    "Date_embauche": "21/07/2018",
    "Salaire_brut": 2339.24,
    "Id_dep": "Production"
  },
  {
    "Nom": "Roy",
    "Prenom": "Gérard",
    "Statut": "CDD",
    "Date_embauche": "06/02/2021",
    "Salaire_brut": 2913.24,
    "Id_dep": "Production"
  },
  {
    "Nom": "Sauvage",
    "Prenom": "Arthur",
    "Statut": "Stage",
    "Date_embauche": "30/09/2022",
    "Salaire_brut": 5850.32,
    "Id_dep": "Production"
  },
  {
    "Nom": "Renard",
    "Prenom": "Aimée",
    "Statut": "CDD",
    "Date_embauche": "15/07/2024",
    "Salaire_brut": 4794.39,
    "Id_dep": "Production"
  },
  {
    "Nom": "Samson",
    "Prenom": "Michelle",
    "Statut": "Alternance",
    "Date_embauche": "23/04/2016",
    "Salaire_brut": 3640.02,
    "Id_dep": "Marketing & Commercial"
  },
  {
    "Nom": "Léger",
    "Prenom": "Suzanne",
    "Statut": "CDI",
    "Date_embauche": "25/12/2021",
    "Salaire_brut": 2841.2,
    "Id_dep": "Marketing & Commercial"
  },
  {
    "Nom": "Peltier",
    "Prenom": "Maryse",
    "Statut": "CDI",
    "Date_embauche": "11/09/2024",
    "Salaire_brut": 4270.9,
    "Id_dep": "Production"
  },
  {
    "Nom": "Regnier",
    "Prenom": "Martin",
    "Statut": "CDD",
    "Date_embauche": "06/10/2019",
    "Salaire_brut": 1830.2,
    "Id_dep": "Production"
  },
  {
    "Nom": "Roy",
    "Prenom": "Anaïs",
    "Statut": "CDI",
    "Date_embauche": "27/10/2015",
    "Salaire_brut": 2761.56,
    "Id_dep": "Recherche & Développement"
  },
  {
    "Nom": "Faivre",
    "Prenom": "Noémi",
    "Statut": "Alternance",
    "Date_embauche": "16/12/2019",
    "Salaire_brut": 2097.6,
    "Id_dep": "Marketing & Commercial"
  },
  {
    "Nom": "Gros",
    "Prenom": "Joséphine",
    "Statut": "Stage",
    "Date_embauche": "30/11/2018",
    "Salaire_brut": 2699.79,
    "Id_dep": "Production"
  },
  {
    "Nom": "Pineau",
    "Prenom": "Marianne",
    "Statut": "Stage",
    "Date_embauche": "19/04/2017",
    "Salaire_brut": 2820.59,
    "Id_dep": "Marketing & Commercial"
  },
  {
    "Nom": "Boyer",
    "Prenom": "Émile",
    "Statut": "CDD",
    "Date_embauche": "12/07/2023",
    "Salaire_brut": 2196.17,
    "Id_dep": "Marketing & Commercial"
  },
  {
    "Nom": "Thibault",
    "Prenom": "Victoire",
    "Statut": "Alternance",
    "Date_embauche": "26/09/2022",
    "Salaire_brut": 3579.03,
    "Id_dep": "Production"
  },
  {
    "Nom": "Laroche",
    "Prenom": "Julie",
    "Statut": "CDI",
    "Date_embauche": "08/12/2017",
    "Salaire_brut": 4628.13,
    "Id_dep": "Recherche & Développement"
  },
  {
    "Nom": "Clément",
    "Prenom": "Danielle",
    "Statut": "CDI",
    "Date_embauche": "23/08/2018",
    "Salaire_brut": 3491.01,
    "Id_dep": "Recherche & Développement"
  },
  {
    "Nom": "Le Goff",
    "Prenom": "Célina",
    "Statut": "CDD",
    "Date_embauche": "12/05/2017",
    "Salaire_brut": 2604.68,
    "Id_dep": "Marketing & Commercial"
  },
  {
    "Nom": "Muller",
    "Prenom": "Laure",
    "Statut": "CDD",
    "Date_embauche": "02/04/2018",
    "Salaire_brut": 3571.9,
    "Id_dep": "Marketing & Commercial"
  },
  {
    "Nom": "De Sousa",
    "Prenom": "Léon",
    "Statut": "CDD",
    "Date_embauche": "17/08/2018",
    "Salaire_brut": 5472.84,
    "Id_dep": "Marketing & Commercial"
  },
  {
    "Nom": "Perrot",
    "Prenom": "Marie",
    "Statut": "CDI",
    "Date_embauche": "27/04/2022",
    "Salaire_brut": 2012.47,
    "Id_dep": "Recherche & Développement"
  },
  {
    "Nom": "Gillet",
    "Prenom": "Julien",
    "Statut": "CDI",
    "Date_embauche": "31/08/2024",
    "Salaire_brut": 5690.74,
    "Id_dep": "Recherche & Développement"
  },
  {
    "Nom": "Masse",
    "Prenom": "Robert",
    "Statut": "CDD",
    "Date_embauche": "25/12/2023",
    "Salaire_brut": 3506.94,
    "Id_dep": "Recherche & Développement"
  },
  {
    "Nom": "Morel",
    "Prenom": "Léon",
    "Statut": "Stage",
    "Date_embauche": "02/12/2020",
    "Salaire_brut": 5590.26,
    "Id_dep": "Marketing & Commercial"
  },
  {
    "Nom": "Berger",
    "Prenom": "Pénélope",
    "Statut": "CDI",
    "Date_embauche": "21/07/2019",
    "Salaire_brut": 5938.3,
    "Id_dep": "Marketing & Commercial"
  },
  {
    "Nom": "Chevallier",
    "Prenom": "Maryse",
    "Statut": "Alternance",
    "Date_embauche": "22/02/2019",
    "Salaire_brut": 3576.63,
    "Id_dep": "Production"
  },
  {
    "Nom": "Blanchard",
    "Prenom": "Charles",
    "Statut": "Stage",
    "Date_embauche": "11/01/2024",
    "Salaire_brut": 2450.15,
    "Id_dep": "Recherche & Développement"
  },
  {
    "Nom": "Barre",
    "Prenom": "Hugues",
    "Statut": "CDI",
    "Date_embauche": "17/07/2016",
    "Salaire_brut": 4232.56,
    "Id_dep": "Recherche & Développement"
  },
  {
    "Nom": "Masse",
    "Prenom": "Joséphine",
    "Statut": "Alternance",
    "Date_embauche": "29/10/2018",
    "Salaire_brut": 2040.09,
    "Id_dep": "Marketing & Commercial"
  },
  {
    "Nom": "Millet",
    "Prenom": "Christine",
    "Statut": "CDD",
    "Date_embauche": "06/10/2016",
    "Salaire_brut": 2038.89,
    "Id_dep": "Recherche & Développement"
  },
  {
    "Nom": "Perez",
    "Prenom": "Martine",
    "Statut": "CDD",
    "Date_embauche": "04/08/2016",
    "Salaire_brut": 2087.79,
    "Id_dep": "Production"
  },
  {
    "Nom": "Gonzalez",
    "Prenom": "Emmanuelle",
    "Statut": "CDD",
    "Date_embauche": "01/08/2017",
    "Salaire_brut": 3495.86,
    "Id_dep": "Production"
  },
  {
    "Nom": "Ferrand",
    "Prenom": "Alexandre",
    "Statut": "CDD",
    "Date_embauche": "20/05/2021",
    "Salaire_brut": 4231.46,
    "Id_dep": "Production"
  },
  {
    "Nom": "Diallo",
    "Prenom": "Alexandria",
    "Statut": "CDI",
    "Date_embauche": "16/06/2022",
    "Salaire_brut": 3560.74,
    "Id_dep": "Production"
  },
  {
    "Nom": "Aubry",
    "Prenom": "Odette",
    "Statut": "Alternance",
    "Date_embauche": "29/05/2015",
    "Salaire_brut": 5725.77,
    "Id_dep": "Production"
  },
  {
    "Nom": "Bazin",
    "Prenom": "Louis",
    "Statut": "Alternance",
    "Date_embauche": "03/10/2017",
    "Salaire_brut": 2802.48,
    "Id_dep": "Recherche & Développement"
  },
  {
    "Nom": "Bourdon",
    "Prenom": "Gabrielle",
    "Statut": "Alternance",
    "Date_embauche": "07/08/2019",
    "Salaire_brut": 3720.34,
    "Id_dep": "Recherche & Développement"
  },
  {
    "Nom": "Pineau",
    "Prenom": "Dominique",
    "Statut": "CDI",
    "Date_embauche": "15/01/2023",
    "Salaire_brut": 3724.8,
    "Id_dep": "Recherche & Développement"
  },
  {
    "Nom": "Jacquot",
    "Prenom": "Océane",
    "Statut": "CDI",
    "Date_embauche": "27/12/2020",
    "Salaire_brut": 4058.06,
    "Id_dep": "Marketing & Commercial"
  },
  {
    "Nom": "Goncalves",
    "Prenom": "Jacques",
    "Statut": "CDD",
    "Date_embauche": "09/05/2017",
    "Salaire_brut": 5719.69,
    "Id_dep": "Recherche & Développement"
  },
  {
    "Nom": "Chevalier",
    "Prenom": "Alix",
    "Statut": "CDD",
    "Date_embauche": "22/08/2016",
    "Salaire_brut": 3352.01,
    "Id_dep": "Marketing & Commercial"
  },
  {
    "Nom": "Boyer",
    "Prenom": "Vincent",
    "Statut": "Alternance",
    "Date_embauche": "13/02/2021",
    "Salaire_brut": 4369.05,
    "Id_dep": "Production"
  },
  {
    "Nom": "Rossi",
    "Prenom": "Madeleine",
    "Statut": "CDI",
    "Date_embauche": "02/01/2019",
    "Salaire_brut": 4605.03,
    "Id_dep": "Marketing & Commercial"
  },
  {
    "Nom": "Gillet",
    "Prenom": "Camille",
    "Statut": "CDI",
    "Date_embauche": "14/02/2019",
    "Salaire_brut": 5743.51,
    "Id_dep": "Marketing & Commercial"
  },
  {
    "Nom": "Boulay",
    "Prenom": "Geneviève",
    "Statut": "CDI",
    "Date_embauche": "05/07/2024",
    "Salaire_brut": 5536.79,
    "Id_dep": "Production"
  },
  {
    "Nom": "Mendès",
    "Prenom": "Christine",
    "Statut": "CDD",
    "Date_embauche": "24/12/2024",
    "Salaire_brut": 2943.86,
    "Id_dep": "Recherche & Développement"
  },
  {
    "Nom": "Antoine",
    "Prenom": "Claudine",
    "Statut": "Alternance",
    "Date_embauche": "06/06/2019",
    "Salaire_brut": 2655.11,
    "Id_dep": "Marketing & Commercial"
  },
  {
    "Nom": "Hervé",
    "Prenom": "Thibaut",
    "Statut": "Stage",
    "Date_embauche": "04/01/2018",
    "Salaire_brut": 2854.71,
    "Id_dep": "Recherche & Développement"
  },
  {
    "Nom": "Le Gall",
    "Prenom": "Alfred",
    "Statut": "CDI",
    "Date_embauche": "04/01/2017",
    "Salaire_brut": 4463.99,
    "Id_dep": "Marketing & Commercial"
  },
  {
    "Nom": "Guérin",
    "Prenom": "Marcel",
    "Statut": "CDI",
    "Date_embauche": "05/05/2017",
    "Salaire_brut": 1814.89,
    "Id_dep": "Recherche & Développement"
  },
  {
    "Nom": "Pichon",
    "Prenom": "Pierre",
    "Statut": "Alternance",
    "Date_embauche": "08/05/2022",
    "Salaire_brut": 2478.64,
    "Id_dep": "Production"
  },
  {
    "Nom": "Roche",
    "Prenom": "Manon",
    "Statut": "Stage",
    "Date_embauche": "22/04/2023",
    "Salaire_brut": 4155.81,
    "Id_dep": "Recherche & Développement"
  },
  {
    "Nom": "Guibert",
    "Prenom": "Augustin",
    "Statut": "CDD",
    "Date_embauche": "18/01/2021",
    "Salaire_brut": 4091.48,
    "Id_dep": "Marketing & Commercial"
  },
  {
    "Nom": "Olivier",
    "Prenom": "Alexandre",
    "Statut": "CDD",
    "Date_embauche": "10/10/2018",
    "Salaire_brut": 3605.1,
    "Id_dep": "Marketing & Commercial"
  },
  {
    "Nom": "Guyot",
    "Prenom": "Laetitia",
    "Statut": "Alternance",
    "Date_embauche": "04/03/2022",
    "Salaire_brut": 5575.72,
    "Id_dep": "Recherche & Développement"
  },
  {
    "Nom": "Lagarde",
    "Prenom": "Augustin",
    "Statut": "Alternance",
    "Date_embauche": "02/12/2016",
    "Salaire_brut": 2682.32,
    "Id_dep": "Production"
  },
  {
    "Nom": "Martin",
    "Prenom": "Diane",
    "Statut": "CDI",
    "Date_embauche": "25/11/2020",
    "Salaire_brut": 3285.45,
    "Id_dep": "Marketing & Commercial"
  },
  {
    "Nom": "Vasseur",
    "Prenom": "Hortense",
    "Statut": "CDD",
    "Date_embauche": "16/08/2018",
    "Salaire_brut": 5688.21,
    "Id_dep": "Recherche & Développement"
  },
  {
    "Nom": "Richard",
    "Prenom": "Aimée",
    "Statut": "CDD",
    "Date_embauche": "05/12/2021",
    "Salaire_brut": 5501.95,
    "Id_dep": "Recherche & Développement"
  },
  {
    "Nom": "Blanchard",
    "Prenom": "Margot",
    "Statut": "Alternance",
    "Date_embauche": "04/07/2019",
    "Salaire_brut": 5086.02,
    "Id_dep": "Production"
  },
  {
    "Nom": "Gay",
    "Prenom": "Nath",
    "Statut": "CDD",
    "Date_embauche": "23/10/2024",
    "Salaire_brut": 2920.58,
    "Id_dep": "Production"
  },
  {
    "Nom": "Thomas",
    "Prenom": "Élise",
    "Statut": "CDI",
    "Date_embauche": "28/01/2020",
    "Salaire_brut": 3406.68,
    "Id_dep": "Marketing & Commercial"
  },
  {
    "Nom": "Laroche",
    "Prenom": "Alexandrie",
    "Statut": "CDD",
    "Date_embauche": "15/08/2024",
    "Salaire_brut": 2638.21,
    "Id_dep": "Marketing & Commercial"
  },
  {
    "Nom": "Gillet",
    "Prenom": "Agnès",
    "Statut": "Alternance",
    "Date_embauche": "13/07/2017",
    "Salaire_brut": 3081.8,
    "Id_dep": "Recherche & Développement"
  },
  {
    "Nom": "Leduc",
    "Prenom": "Honoré",
    "Statut": "CDD",
    "Date_embauche": "23/04/2022",
    "Salaire_brut": 1899.39,
    "Id_dep": "Marketing & Commercial"
  },
  {
    "Nom": "Perrier",
    "Prenom": "Tristan",
    "Statut": "Alternance",
    "Date_embauche": "04/12/2021",
    "Salaire_brut": 2970.13,
    "Id_dep": "Marketing & Commercial"
  },
  {
    "Nom": "Guillon",
    "Prenom": "Stéphanie",
    "Statut": "Alternance",
    "Date_embauche": "30/08/2015",
    "Salaire_brut": 4494.22,
    "Id_dep": "Production"
  },
  {
    "Nom": "Jacques",
    "Prenom": "Capucine",
    "Statut": "Alternance",
    "Date_embauche": "05/04/2019",
    "Salaire_brut": 5744.8,
    "Id_dep": "Marketing & Commercial"
  },
  {
    "Nom": "Lucas",
    "Prenom": "Pierre",
    "Statut": "CDD",
    "Date_embauche": "10/03/2016",
    "Salaire_brut": 4238.48,
    "Id_dep": "Recherche & Développement"
  },
  {
    "Nom": "Gomez",
    "Prenom": "Guillaume",
    "Statut": "CDI",
    "Date_embauche": "18/05/2016",
    "Salaire_brut": 4305.6,
    "Id_dep": "Production"
  },
  {
    "Nom": "Fabre",
    "Prenom": "Tristan",
    "Statut": "Alternance",
    "Date_embauche": "27/10/2024",
    "Salaire_brut": 3632.85,
    "Id_dep": "Recherche & Développement"
  },
  {
    "Nom": "Chartier",
    "Prenom": "Célina",
    "Statut": "Stage",
    "Date_embauche": "08/01/2025",
    "Salaire_brut": 5577.92,
    "Id_dep": "Marketing & Commercial"
  },
  {
    "Nom": "Mary",
    "Prenom": "Lucie",
    "Statut": "CDI",
    "Date_embauche": "29/09/2020",
    "Salaire_brut": 4776.9,
    "Id_dep": "Production"
  },
  {
    "Nom": "Baudry",
    "Prenom": "Marthe",
    "Statut": "CDD",
    "Date_embauche": "12/07/2024",
    "Salaire_brut": 3329.73,
    "Id_dep": "Production"
  },
  {
    "Nom": "Blin",
    "Prenom": "Claude",
    "Statut": "Alternance",
    "Date_embauche": "23/06/2019",
    "Salaire_brut": 4417.25,
    "Id_dep": "Recherche & Développement"
  },
  {
    "Nom": "Dias",
    "Prenom": "Danielle",
    "Statut": "Alternance",
    "Date_embauche": "20/03/2019",
    "Salaire_brut": 3929.91,
    "Id_dep": "Marketing & Commercial"
  },
  {
    "Nom": "Da Silva",
    "Prenom": "Thierry",
    "Statut": "Alternance",
    "Date_embauche": "20/05/2021",
    "Salaire_brut": 3490.08,
    "Id_dep": "Production"
  },
  {
    "Nom": "Bodin",
    "Prenom": "Susanne",
    "Statut": "CDD",
    "Date_embauche": "23/02/2024",
    "Salaire_brut": 2605.73,
    "Id_dep": "Marketing & Commercial"
  },
  {
    "Nom": "Wagner",
    "Prenom": "Stéphanie",
    "Statut": "CDD",
    "Date_embauche": "14/06/2023",
    "Salaire_brut": 4385.16,
    "Id_dep": "Marketing & Commercial"
  },
  {
    "Nom": "Leduc",
    "Prenom": "Laure",
    "Statut": "CDI",
    "Date_embauche": "19/11/2015",
    "Salaire_brut": 3076.27,
    "Id_dep": "Marketing & Commercial"
  },
  {
    "Nom": "Pinto",
    "Prenom": "Georges",
    "Statut": "Alternance",
    "Date_embauche": "20/01/2017",
    "Salaire_brut": 3752.95,
    "Id_dep": "Production"
  },
  {
    "Nom": "Thierry",
    "Prenom": "Élise",
    "Statut": "CDD",
    "Date_embauche": "22/04/2016",
    "Salaire_brut": 3946.93,
    "Id_dep": "Production"
  },
  {
    "Nom": "Martins",
    "Prenom": "Juliette",
    "Statut": "CDD",
    "Date_embauche": "02/10/2017",
    "Salaire_brut": 4567.17,
    "Id_dep": "Production"
  },
  {
    "Nom": "Riou",
    "Prenom": "Gabriel",
    "Statut": "Alternance",
    "Date_embauche": "10/08/2023",
    "Salaire_brut": 2192.23,
    "Id_dep": "Recherche & Développement"
  },
  {
    "Nom": "Le Goff",
    "Prenom": "Anne",
    "Statut": "Alternance",
    "Date_embauche": "15/08/2018",
    "Salaire_brut": 2743.49,
    "Id_dep": "Recherche & Développement"
  },
  {
    "Nom": "Coulon",
    "Prenom": "Thierry",
    "Statut": "CDI",
    "Date_embauche": "29/05/2021",
    "Salaire_brut": 1994.1,
    "Id_dep": "Production"
  },
  {
    "Nom": "Normand",
    "Prenom": "Éric",
    "Statut": "CDI",
    "Date_embauche": "12/05/2015",
    "Salaire_brut": 3712.75,
    "Id_dep": "Production"
  },
  {
    "Nom": "Giraud",
    "Prenom": "Alex",
    "Statut": "CDD",
    "Date_embauche": "18/01/2017",
    "Salaire_brut": 4817.05,
    "Id_dep": "Marketing & Commercial"
  },
  {
    "Nom": "Gay",
    "Prenom": "Patrick",
    "Statut": "Stage",
    "Date_embauche": "01/05/2020",
    "Salaire_brut": 2824.73,
    "Id_dep": "Production"
  },
  {
    "Nom": "Pons",
    "Prenom": "Lucy",
    "Statut": "CDI",
    "Date_embauche": "13/01/2018",
    "Salaire_brut": 5549.17,
    "Id_dep": "Recherche & Développement"
  },
  {
    "Nom": "Ollivier",
    "Prenom": "Louise",
    "Statut": "Stage",
    "Date_embauche": "20/05/2019",
    "Salaire_brut": 2719.13,
    "Id_dep": "Production"
  },
  {
    "Nom": "Dijoux",
    "Prenom": "Claire",
    "Statut": "Stage",
    "Date_embauche": "28/10/2016",
    "Salaire_brut": 2010.92,
    "Id_dep": "Recherche & Développement"
  },
  {
    "Nom": "Launay",
    "Prenom": "Frédérique",
    "Statut": "Stage",
    "Date_embauche": "21/09/2023",
    "Salaire_brut": 2360.02,
    "Id_dep": "Production"
  },
  {
    "Nom": "Ferreira",
    "Prenom": "Denise",
    "Statut": "Alternance",
    "Date_embauche": "25/05/2024",
    "Salaire_brut": 5790.17,
    "Id_dep": "Marketing & Commercial"
  },
  {
    "Nom": "Potier",
    "Prenom": "Tristan",
    "Statut": "Stage",
    "Date_embauche": "27/02/2021",
    "Salaire_brut": 5288.39,
    "Id_dep": "Marketing & Commercial"
  },
  {
    "Nom": "Boyer",
    "Prenom": "Pierre",
    "Statut": "CDD",
    "Date_embauche": "09/10/2024",
    "Salaire_brut": 4923.35,
    "Id_dep": "Marketing & Commercial"
  },
  {
    "Nom": "Morvan",
    "Prenom": "Yves",
    "Statut": "Alternance",
    "Date_embauche": "09/01/2019",
    "Salaire_brut": 4957.46,
    "Id_dep": "Production"
  },
  {
    "Nom": "Diaz",
    "Prenom": "Constance",
    "Statut": "Alternance",
    "Date_embauche": "05/06/2022",
    "Salaire_brut": 5016.42,
    "Id_dep": "Marketing & Commercial"
  },
  {
    "Nom": "Royer",
    "Prenom": "Dorothée",
    "Statut": "CDD",
    "Date_embauche": "31/05/2020",
    "Salaire_brut": 2953.31,
    "Id_dep": "Production"
  },
  {
    "Nom": "Sanchez",
    "Prenom": "Claire",
    "Statut": "Alternance",
    "Date_embauche": "31/10/2018",
    "Salaire_brut": 2784.87,
    "Id_dep": "Marketing & Commercial"
  },
  {
    "Nom": "Texier",
    "Prenom": "Isaac",
    "Statut": "CDI",
    "Date_embauche": "11/07/2017",
    "Salaire_brut": 2381.17,
    "Id_dep": "Marketing & Commercial"
  },
  {
    "Nom": "Guyon",
    "Prenom": "Franck",
    "Statut": "CDD",
    "Date_embauche": "22/02/2017",
    "Salaire_brut": 4766.96,
    "Id_dep": "Marketing & Commercial"
  },
  {
    "Nom": "Garcia",
    "Prenom": "Laurence",
    "Statut": "Stage",
    "Date_embauche": "27/12/2017",
    "Salaire_brut": 3189.7,
    "Id_dep": "Marketing & Commercial"
  },
  {
    "Nom": "Michel",
    "Prenom": "Stéphane",
    "Statut": "CDI",
    "Date_embauche": "27/05/2015",
    "Salaire_brut": 2668.7,
    "Id_dep": "Marketing & Commercial"
  },
  {
    "Nom": "Roche",
    "Prenom": "Richard",
    "Statut": "CDI",
    "Date_embauche": "25/09/2023",
    "Salaire_brut": 5398.27,
    "Id_dep": "Production"
  },
  {
    "Nom": "Ledoux",
    "Prenom": "Geneviève",
    "Statut": "Stage",
    "Date_embauche": "05/01/2022",
    "Salaire_brut": 3803.31,
    "Id_dep": "Marketing & Commercial"
  },
  {
    "Nom": "Renault",
    "Prenom": "Maurice",
    "Statut": "Stage",
    "Date_embauche": "21/06/2018",
    "Salaire_brut": 5384.48,
    "Id_dep": "Marketing & Commercial"
  },
  {
    "Nom": "Perrier",
    "Prenom": "Capucine",
    "Statut": "CDD",
    "Date_embauche": "28/06/2020",
    "Salaire_brut": 3850.56,
    "Id_dep": "Marketing & Commercial"
  },
  {
    "Nom": "Faure",
    "Prenom": "Jérôme",
    "Statut": "Stage",
    "Date_embauche": "19/03/2025",
    "Salaire_brut": 1921.9,
    "Id_dep": "Production"
  },
  {
    "Nom": "Gauthier",
    "Prenom": "Susan",
    "Statut": "Stage",
    "Date_embauche": "08/04/2015",
    "Salaire_brut": 4841.56,
    "Id_dep": "Marketing & Commercial"
  },
  {
    "Nom": "Chauvet",
    "Prenom": "Adrien",
    "Statut": "CDD",
    "Date_embauche": "15/02/2022",
    "Salaire_brut": 5919.03,
    "Id_dep": "Recherche & Développement"
  },
  {
    "Nom": "Martins",
    "Prenom": "Thibault",
    "Statut": "Stage",
    "Date_embauche": "05/03/2022",
    "Salaire_brut": 4285.95,
    "Id_dep": "Recherche & Développement"
  },
  {
    "Nom": "Dupont",
    "Prenom": "Andrée",
    "Statut": "CDI",
    "Date_embauche": "18/05/2016",
    "Salaire_brut": 4499.55,
    "Id_dep": "Marketing & Commercial"
  },
  {
    "Nom": "Moulin",
    "Prenom": "Olivier",
    "Statut": "CDD",
    "Date_embauche": "11/05/2020",
    "Salaire_brut": 2011.2,
    "Id_dep": "Marketing & Commercial"
  },
  {
    "Nom": "Caron",
    "Prenom": "Aurélie",
    "Statut": "CDD",
    "Date_embauche": "14/06/2021",
    "Salaire_brut": 3709.74,
    "Id_dep": "Marketing & Commercial"
  },
  {
    "Nom": "Briand",
    "Prenom": "Nathalie",
    "Statut": "Alternance",
    "Date_embauche": "29/10/2020",
    "Salaire_brut": 4958.44,
    "Id_dep": "Marketing & Commercial"
  },
  {
    "Nom": "Vidal",
    "Prenom": "Guy",
    "Statut": "Alternance",
    "Date_embauche": "28/01/2016",
    "Salaire_brut": 5306.63,
    "Id_dep": "Recherche & Développement"
  },
  {
    "Nom": "Moreau",
    "Prenom": "Margot",
    "Statut": "CDI",
    "Date_embauche": "30/10/2018",
    "Salaire_brut": 5999.61,
    "Id_dep": "Recherche & Développement"
  },
  {
    "Nom": "Duval",
    "Prenom": "Augustin",
    "Statut": "CDI",
    "Date_embauche": "28/08/2015",
    "Salaire_brut": 5081.18,
    "Id_dep": "Recherche & Développement"
  },
  {
    "Nom": "Texier",
    "Prenom": "Alice",
    "Statut": "CDI",
    "Date_embauche": "12/01/2023",
    "Salaire_brut": 5788.37,
    "Id_dep": "Recherche & Développement"
  },
  {
    "Nom": "Bernier",
    "Prenom": "Monique",
    "Statut": "CDD",
    "Date_embauche": "15/06/2015",
    "Salaire_brut": 2801.89,
    "Id_dep": "Production"
  },
  {
    "Nom": "Dumont",
    "Prenom": "Christine",
    "Statut": "CDI",
    "Date_embauche": "26/03/2021",
    "Salaire_brut": 4168.67,
    "Id_dep": "Marketing & Commercial"
  },
  {
    "Nom": "Besson",
    "Prenom": "Pauline",
    "Statut": "Alternance",
    "Date_embauche": "21/11/2017",
    "Salaire_brut": 5020.97,
    "Id_dep": "Production"
  },
  {
    "Nom": "Millet",
    "Prenom": "Agathe",
    "Statut": "CDI",
    "Date_embauche": "11/07/2021",
    "Salaire_brut": 5066.73,
    "Id_dep": "Marketing & Commercial"
  },
  {
    "Nom": "Bourdon",
    "Prenom": "Célina",
    "Statut": "CDI",
    "Date_embauche": "24/12/2016",
    "Salaire_brut": 4230.48,
    "Id_dep": "Marketing & Commercial"
  },
  {
    "Nom": "Dubois",
    "Prenom": "Juliette",
    "Statut": "Stage",
    "Date_embauche": "20/01/2020",
    "Salaire_brut": 3465.95,
    "Id_dep": "Recherche & Développement"
  },
  {
    "Nom": "Laurent",
    "Prenom": "Rémy",
    "Statut": "CDI",
    "Date_embauche": "06/10/2020",
    "Salaire_brut": 4286.81,
    "Id_dep": "Production"
  },
  {
    "Nom": "Morin",
    "Prenom": "Frédéric",
    "Statut": "CDD",
    "Date_embauche": "08/05/2023",
    "Salaire_brut": 2227.99,
    "Id_dep": "Marketing & Commercial"
  },
  {
    "Nom": "Regnier",
    "Prenom": "Alix",
    "Statut": "CDI",
    "Date_embauche": "26/04/2020",
    "Salaire_brut": 5144.15,
    "Id_dep": "Recherche & Développement"
  },
  {
    "Nom": "Renard",
    "Prenom": "Lucy",
    "Statut": "Alternance",
    "Date_embauche": "08/05/2016",
    "Salaire_brut": 4037.53,
    "Id_dep": "Marketing & Commercial"
  },
  {
    "Nom": "Chevallier",
    "Prenom": "Virginie",
    "Statut": "CDI",
    "Date_embauche": "11/03/2018",
    "Salaire_brut": 3925.04,
    "Id_dep": "Recherche & Développement"
  },
  {
    "Nom": "Duval",
    "Prenom": "Charles",
    "Statut": "Stage",
    "Date_embauche": "01/10/2017",
    "Salaire_brut": 5253.79,
    "Id_dep": "Marketing & Commercial"
  },
  {
    "Nom": "Fontaine",
    "Prenom": "Augustin",
    "Statut": "Alternance",
    "Date_embauche": "04/01/2020",
    "Salaire_brut": 4469.46,
    "Id_dep": "Marketing & Commercial"
  },
  {
    "Nom": "Charles",
    "Prenom": "Élise",
    "Statut": "CDD",
    "Date_embauche": "25/05/2022",
    "Salaire_brut": 3629.05,
    "Id_dep": "Production"
  },
  {
    "Nom": "Chauvet",
    "Prenom": "Stéphane",
    "Statut": "Alternance",
    "Date_embauche": "14/02/2016",
    "Salaire_brut": 4386.83,
    "Id_dep": "Production"
  },
  {
    "Nom": "Louis",
    "Prenom": "Charles",
    "Statut": "Stage",
    "Date_embauche": "17/12/2017",
    "Salaire_brut": 3752.47,
    "Id_dep": "Production"
  },
  {
    "Nom": "Rey",
    "Prenom": "Alain",
    "Statut": "Alternance",
    "Date_embauche": "04/03/2017",
    "Salaire_brut": 3153.68,
    "Id_dep": "Recherche & Développement"
  },
  {
    "Nom": "Dumont",
    "Prenom": "Susan",
    "Statut": "Alternance",
    "Date_embauche": "15/08/2019",
    "Salaire_brut": 5502.85,
    "Id_dep": "Marketing & Commercial"
  },
  {
    "Nom": "Allard",
    "Prenom": "Élisabeth",
    "Statut": "Stage",
    "Date_embauche": "02/12/2015",
    "Salaire_brut": 3212.87,
    "Id_dep": "Marketing & Commercial"
  },
  {
    "Nom": "Leroy",
    "Prenom": "Marguerite",
    "Statut": "CDD",
    "Date_embauche": "22/11/2015",
    "Salaire_brut": 3847.71,
    "Id_dep": "Marketing & Commercial"
  },
  {
    "Nom": "Lucas",
    "Prenom": "Laurence",
    "Statut": "Alternance",
    "Date_embauche": "13/06/2019",
    "Salaire_brut": 2974.57,
    "Id_dep": "Production"
  },
  {
    "Nom": "Alexandre",
    "Prenom": "Thomas",
    "Statut": "Alternance",
    "Date_embauche": "23/04/2017",
    "Salaire_brut": 4134.32,
    "Id_dep": "Recherche & Développement"
  },
  {
    "Nom": "Barthelemy",
    "Prenom": "Charles",
    "Statut": "CDI",
    "Date_embauche": "24/06/2016",
    "Salaire_brut": 2813.7,
    "Id_dep": "Marketing & Commercial"
  },
  {
    "Nom": "Becker",
    "Prenom": "Édouard",
    "Statut": "CDD",
    "Date_embauche": "09/05/2018",
    "Salaire_brut": 4700.56,
    "Id_dep": "Production"
  },
  {
    "Nom": "Colin",
    "Prenom": "Édith",
    "Statut": "CDI",
    "Date_embauche": "13/08/2017",
    "Salaire_brut": 3682.33,
    "Id_dep": "Recherche & Développement"
  },
  {
    "Nom": "Hernandez",
    "Prenom": "Raymond",
    "Statut": "Alternance",
    "Date_embauche": "06/07/2022",
    "Salaire_brut": 2730.7,
    "Id_dep": "Recherche & Développement"
  },
  {
    "Nom": "Grégoire",
    "Prenom": "Théophile",
    "Statut": "Alternance",
    "Date_embauche": "08/05/2021",
    "Salaire_brut": 4588.63,
    "Id_dep": "Marketing & Commercial"
  },
  {
    "Nom": "Petitjean",
    "Prenom": "Noël",
    "Statut": "Alternance",
    "Date_embauche": "28/08/2022",
    "Salaire_brut": 3587.12,
    "Id_dep": "Production"
  },
  {
    "Nom": "Lopes",
    "Prenom": "Nathalie",
    "Statut": "Alternance",
    "Date_embauche": "03/08/2019",
    "Salaire_brut": 3277.6,
    "Id_dep": "Marketing & Commercial"
  },
  {
    "Nom": "Guilbert",
    "Prenom": "Alice",
    "Statut": "Alternance",
    "Date_embauche": "22/07/2017",
    "Salaire_brut": 2855.9,
    "Id_dep": "Production"
  },
  {
    "Nom": "Lemaire",
    "Prenom": "Frédérique",
    "Statut": "CDD",
    "Date_embauche": "02/02/2019",
    "Salaire_brut": 3125.3,
    "Id_dep": "Production"
  },
  {
    "Nom": "Renaud",
    "Prenom": "Charlotte",
    "Statut": "CDD",
    "Date_embauche": "23/09/2022",
    "Salaire_brut": 2604.47,
    "Id_dep": "Marketing & Commercial"
  },
  {
    "Nom": "Legrand",
    "Prenom": "Auguste",
    "Statut": "Alternance",
    "Date_embauche": "05/02/2024",
    "Salaire_brut": 4843.26,
    "Id_dep": "Production"
  },
  {
    "Nom": "Berthelot",
    "Prenom": "Christelle",
    "Statut": "Alternance",
    "Date_embauche": "18/06/2018",
    "Salaire_brut": 5918.14,
    "Id_dep": "Recherche & Développement"
  },
  {
    "Nom": "Bazin",
    "Prenom": "Chantal",
    "Statut": "Alternance",
    "Date_embauche": "16/02/2020",
    "Salaire_brut": 2755.43,
    "Id_dep": "Marketing & Commercial"
  },
  {
    "Nom": "Roger",
    "Prenom": "Léon",
    "Statut": "CDI",
    "Date_embauche": "24/08/2015",
    "Salaire_brut": 4773.68,
    "Id_dep": "Marketing & Commercial"
  },
  {
    "Nom": "Dupuy",
    "Prenom": "Michelle",
    "Statut": "CDI",
    "Date_embauche": "17/12/2023",
    "Salaire_brut": 5892.04,
    "Id_dep": "Marketing & Commercial"
  },
  {
    "Nom": "Coulon",
    "Prenom": "Alexandrie",
    "Statut": "CDD",
    "Date_embauche": "17/02/2020",
    "Salaire_brut": 4479.05,
    "Id_dep": "Marketing & Commercial"
  },
  {
    "Nom": "Renault",
    "Prenom": "Éléonore",
    "Statut": "CDI",
    "Date_embauche": "26/07/2024",
    "Salaire_brut": 5465.42,
    "Id_dep": "Marketing & Commercial"
  },
  {
    "Nom": "Munoz",
    "Prenom": "Frédérique",
    "Statut": "Stage",
    "Date_embauche": "07/05/2018",
    "Salaire_brut": 3810.6,
    "Id_dep": "Recherche & Développement"
  },
  {
    "Nom": "Cousin",
    "Prenom": "Agnès",
    "Statut": "CDI",
    "Date_embauche": "17/05/2024",
    "Salaire_brut": 2860.41,
    "Id_dep": "Marketing & Commercial"
  },
  {
    "Nom": "Hamel",
    "Prenom": "Laure",
    "Statut": "CDI",
    "Date_embauche": "06/12/2022",
    "Salaire_brut": 5252.89,
    "Id_dep": "Marketing & Commercial"
  },
  {
    "Nom": "Gosselin",
    "Prenom": "Yves",
    "Statut": "CDI",
    "Date_embauche": "02/12/2024",
    "Salaire_brut": 4223.49,
    "Id_dep": "Recherche & Développement"
  },
  {
    "Nom": "Laroche",
    "Prenom": "Élodie",
    "Statut": "CDD",
    "Date_embauche": "24/04/2017",
    "Salaire_brut": 2426.63,
    "Id_dep": "Marketing & Commercial"
  },
  {
    "Nom": "Hoareau",
    "Prenom": "Suzanne",
    "Statut": "CDI",
    "Date_embauche": "28/08/2017",
    "Salaire_brut": 5974.46,
    "Id_dep": "Production"
  },
  {
    "Nom": "Turpin",
    "Prenom": "Audrey",
    "Statut": "Stage",
    "Date_embauche": "24/02/2022",
    "Salaire_brut": 4346.53,
    "Id_dep": "Production"
  },
  {
    "Nom": "Laine",
    "Prenom": "Danielle",
    "Statut": "CDD",
    "Date_embauche": "17/08/2018",
    "Salaire_brut": 5057.91,
    "Id_dep": "Marketing & Commercial"
  },
  {
    "Nom": "Cordier",
    "Prenom": "Paulette",
    "Statut": "Stage",
    "Date_embauche": "28/02/2017",
    "Salaire_brut": 3048.88,
    "Id_dep": "Marketing & Commercial"
  },
  {
    "Nom": "Baron",
    "Prenom": "Georges",
    "Statut": "Alternance",
    "Date_embauche": "02/03/2024",
    "Salaire_brut": 4188.24,
    "Id_dep": "Production"
  },
  {
    "Nom": "Jacquot",
    "Prenom": "Roger",
    "Statut": "CDI",
    "Date_embauche": "15/11/2024",
    "Salaire_brut": 5779.88,
    "Id_dep": "Production"
  },
  {
    "Nom": "François",
    "Prenom": "Isabelle",
    "Statut": "CDD",
    "Date_embauche": "14/05/2016",
    "Salaire_brut": 2911.51,
    "Id_dep": "Recherche & Développement"
  },
  {
    "Nom": "Ruiz",
    "Prenom": "Océane",
    "Statut": "CDD",
    "Date_embauche": "13/12/2016",
    "Salaire_brut": 2530.02,
    "Id_dep": "Recherche & Développement"
  },
  {
    "Nom": "Colin",
    "Prenom": "Célina",
    "Statut": "CDI",
    "Date_embauche": "04/10/2017",
    "Salaire_brut": 3515.77,
    "Id_dep": "Production"
  },
  {
    "Nom": "Marie",
    "Prenom": "Arthur",
    "Statut": "Stage",
    "Date_embauche": "12/12/2016",
    "Salaire_brut": 3023.29,
    "Id_dep": "Marketing & Commercial"
  },
  {
    "Nom": "Neveu",
    "Prenom": "Véronique",
    "Statut": "Alternance",
    "Date_embauche": "23/08/2015",
    "Salaire_brut": 4752.55,
    "Id_dep": "Recherche & Développement"
  },
  {
    "Nom": "De Sousa",
    "Prenom": "Catherine",
    "Statut": "CDD",
    "Date_embauche": "27/01/2023",
    "Salaire_brut": 5680.43,
    "Id_dep": "Production"
  },
  {
    "Nom": "Gay",
    "Prenom": "Marcelle",
    "Statut": "CDD",
    "Date_embauche": "23/09/2015",
    "Salaire_brut": 3585.58,
    "Id_dep": "Recherche & Développement"
  },
  {
    "Nom": "Gérard",
    "Prenom": "Adèle",
    "Statut": "CDD",
    "Date_embauche": "25/11/2020",
    "Salaire_brut": 5615.33,
    "Id_dep": "Recherche & Développement"
  },
  {
    "Nom": "Thibault",
    "Prenom": "Thibaut",
    "Statut": "CDI",
    "Date_embauche": "10/02/2016",
    "Salaire_brut": 2050.48,
    "Id_dep": "Marketing & Commercial"
  },
  {
    "Nom": "Lopes",
    "Prenom": "Georges",
    "Statut": "Alternance",
    "Date_embauche": "11/09/2016",
    "Salaire_brut": 3644.44,
    "Id_dep": "Production"
  },
  {
    "Nom": "Thomas",
    "Prenom": "Louise",
    "Statut": "Alternance",
    "Date_embauche": "17/05/2023",
    "Salaire_brut": 4738.88,
    "Id_dep": "Production"
  },
  {
    "Nom": "Thomas",
    "Prenom": "Édouard",
    "Statut": "Stage",
    "Date_embauche": "26/05/2021",
    "Salaire_brut": 3638.59,
    "Id_dep": "Recherche & Développement"
  },
  {
    "Nom": "Deschamps",
    "Prenom": "Julien",
    "Statut": "Stage",
    "Date_embauche": "07/05/2017",
    "Salaire_brut": 4885.04,
    "Id_dep": "Marketing & Commercial"
  },
  {
    "Nom": "Henry",
    "Prenom": "Élodie",
    "Statut": "CDI",
    "Date_embauche": "14/01/2016",
    "Salaire_brut": 2183.57,
    "Id_dep": "Production"
  },
  {
    "Nom": "Mary",
    "Prenom": "Christine",
    "Statut": "CDI",
    "Date_embauche": "09/06/2019",
    "Salaire_brut": 5998.2,
    "Id_dep": "Marketing & Commercial"
  },
  {
    "Nom": "Coste",
    "Prenom": "Marie",
    "Statut": "CDI",
    "Date_embauche": "08/05/2021",
    "Salaire_brut": 5005.06,
    "Id_dep": "Marketing & Commercial"
  },
  {
    "Nom": "Monnier",
    "Prenom": "Matthieu",
    "Statut": "Stage",
    "Date_embauche": "21/04/2016",
    "Salaire_brut": 5647.51,
    "Id_dep": "Production"
  },
  {
    "Nom": "Bernard",
    "Prenom": "Élisabeth",
    "Statut": "Stage",
    "Date_embauche": "18/03/2021",
    "Salaire_brut": 4466.1,
    "Id_dep": "Recherche & Développement"
  },
  {
    "Nom": "Rodriguez",
    "Prenom": "Gabriel",
    "Statut": "Stage",
    "Date_embauche": "26/07/2016",
    "Salaire_brut": 3261.44,
    "Id_dep": "Marketing & Commercial"
  },
  {
    "Nom": "Perrier",
    "Prenom": "Joséphine",
    "Statut": "CDI",
    "Date_embauche": "26/01/2016",
    "Salaire_brut": 5402.48,
    "Id_dep": "Marketing & Commercial"
  },
  {
    "Nom": "Boulanger",
    "Prenom": "Margaux",
    "Statut": "Stage",
    "Date_embauche": "21/10/2019",
    "Salaire_brut": 3010.51,
    "Id_dep": "Production"
  },
  {
    "Nom": "Marty",
    "Prenom": "Roger",
    "Statut": "CDI",
    "Date_embauche": "20/07/2015",
    "Salaire_brut": 3710.27,
    "Id_dep": "Marketing & Commercial"
  },
  {
    "Nom": "Laroche",
    "Prenom": "Simone",
    "Statut": "Alternance",
    "Date_embauche": "17/09/2023",
    "Salaire_brut": 2286.87,
    "Id_dep": "Marketing & Commercial"
  },
  {
    "Nom": "Pages",
    "Prenom": "Hortense",
    "Statut": "CDI",
    "Date_embauche": "20/06/2023",
    "Salaire_brut": 4562.17,
    "Id_dep": "Marketing & Commercial"
  },
  {
    "Nom": "Gomes",
    "Prenom": "Hortense",
    "Statut": "Stage",
    "Date_embauche": "20/10/2021",
    "Salaire_brut": 2027.66,
    "Id_dep": "Marketing & Commercial"
  },
  {
    "Nom": "Maillot",
    "Prenom": "Victor",
    "Statut": "Stage",
    "Date_embauche": "25/06/2021",
    "Salaire_brut": 4426.72,
    "Id_dep": "Recherche & Développement"
  },
  {
    "Nom": "Bazin",
    "Prenom": "Andrée",
    "Statut": "CDD",
    "Date_embauche": "11/10/2019",
    "Salaire_brut": 2921.64,
    "Id_dep": "Marketing & Commercial"
  },
  {
    "Nom": "Nguyen",
    "Prenom": "Jérôme",
    "Statut": "Stage",
    "Date_embauche": "04/09/2017",
    "Salaire_brut": 5499.56,
    "Id_dep": "Recherche & Développement"
  },
  {
    "Nom": "Garcia",
    "Prenom": "Théodore",
    "Statut": "CDI",
    "Date_embauche": "25/05/2021",
    "Salaire_brut": 5887.22,
    "Id_dep": "Recherche & Développement"
  },
  {
    "Nom": "Ferrand",
    "Prenom": "Édouard",
    "Statut": "CDD",
    "Date_embauche": "25/05/2019",
    "Salaire_brut": 3105.15,
    "Id_dep": "Production"
  },
  {
    "Nom": "Morel",
    "Prenom": "Charlotte",
    "Statut": "Stage",
    "Date_embauche": "01/01/2021",
    "Salaire_brut": 2191.48,
    "Id_dep": "Recherche & Développement"
  },
  {
    "Nom": "Michaud",
    "Prenom": "Rémy",
    "Statut": "Stage",
    "Date_embauche": "02/04/2023",
    "Salaire_brut": 5777.66,
    "Id_dep": "Recherche & Développement"
  },
  {
    "Nom": "Martinez",
    "Prenom": "Sébastien",
    "Statut": "Stage",
    "Date_embauche": "25/03/2024",
    "Salaire_brut": 5717.14,
    "Id_dep": "Production"
  },
  {
    "Nom": "Pelletier",
    "Prenom": "Alfred",
    "Statut": "Alternance",
    "Date_embauche": "06/03/2021",
    "Salaire_brut": 3545.06,
    "Id_dep": "Marketing & Commercial"
  },
  {
    "Nom": "Weber",
    "Prenom": "Nathalie",
    "Statut": "CDD",
    "Date_embauche": "08/09/2019",
    "Salaire_brut": 3718.5,
    "Id_dep": "Marketing & Commercial"
  },
  {
    "Nom": "Dufour",
    "Prenom": "Élise",
    "Statut": "CDD",
    "Date_embauche": "24/10/2020",
    "Salaire_brut": 5671.85,
    "Id_dep": "Production"
  },
  {
    "Nom": "Laporte",
    "Prenom": "Denise",
    "Statut": "CDD",
    "Date_embauche": "21/07/2015",
    "Salaire_brut": 5428.91,
    "Id_dep": "Marketing & Commercial"
  },
  {
    "Nom": "Jacquet",
    "Prenom": "Anouk",
    "Statut": "Alternance",
    "Date_embauche": "11/05/2020",
    "Salaire_brut": 5723.84,
    "Id_dep": "Marketing & Commercial"
  },
  {
    "Nom": "Henry",
    "Prenom": "Anouk",
    "Statut": "CDI",
    "Date_embauche": "29/11/2015",
    "Salaire_brut": 2987.92,
    "Id_dep": "Production"
  },
  {
    "Nom": "Pereira",
    "Prenom": "Margaud",
    "Statut": "Stage",
    "Date_embauche": "13/06/2022",
    "Salaire_brut": 5434.09,
    "Id_dep": "Production"
  },
  {
    "Nom": "Étienne",
    "Prenom": "Nicolas",
    "Statut": "Stage",
    "Date_embauche": "23/02/2025",
    "Salaire_brut": 3249.52,
    "Id_dep": "Production"
  },
  {
    "Nom": "Adam",
    "Prenom": "Amélie",
    "Statut": "Stage",
    "Date_embauche": "05/05/2015",
    "Salaire_brut": 3712.45,
    "Id_dep": "Recherche & Développement"
  },
  {
    "Nom": "David",
    "Prenom": "Lucy",
    "Statut": "CDD",
    "Date_embauche": "21/06/2018",
    "Salaire_brut": 4201.55,
    "Id_dep": "Marketing & Commercial"
  },
  {
    "Nom": "Teixeira",
    "Prenom": "Nathalie",
    "Statut": "CDI",
    "Date_embauche": "03/01/2022",
    "Salaire_brut": 3136.34,
    "Id_dep": "Production"
  },
  {
    "Nom": "Meunier",
    "Prenom": "Sabine",
    "Statut": "Stage",
    "Date_embauche": "02/02/2020",
    "Salaire_brut": 3421.53,
    "Id_dep": "Production"
  },
  {
    "Nom": "Pinto",
    "Prenom": "Aurélie",
    "Statut": "CDD",
    "Date_embauche": "15/04/2019",
    "Salaire_brut": 3880.38,
    "Id_dep": "Recherche & Développement"
  },
  {
    "Nom": "Gomez",
    "Prenom": "Nath",
    "Statut": "Alternance",
    "Date_embauche": "21/10/2022",
    "Salaire_brut": 5452.74,
    "Id_dep": "Marketing & Commercial"
  },
  {
    "Nom": "Toussaint",
    "Prenom": "Agathe",
    "Statut": "CDI",
    "Date_embauche": "15/11/2016",
    "Salaire_brut": 4008.99,
    "Id_dep": "Recherche & Développement"
  },
  {
    "Nom": "Picard",
    "Prenom": "Emmanuelle",
    "Statut": "CDD",
    "Date_embauche": "30/08/2016",
    "Salaire_brut": 3521.91,
    "Id_dep": "Recherche & Développement"
  },
  {
    "Nom": "Michaud",
    "Prenom": "Caroline",
    "Statut": "CDI",
    "Date_embauche": "22/03/2019",
    "Salaire_brut": 3771.86,
    "Id_dep": "Marketing & Commercial"
  },
  {
    "Nom": "Delattre",
    "Prenom": "Adélaïde",
    "Statut": "Stage",
    "Date_embauche": "21/12/2023",
    "Salaire_brut": 4529.31,
    "Id_dep": "Marketing & Commercial"
  },
  {
    "Nom": "Goncalves",
    "Prenom": "Thibault",
    "Statut": "Stage",
    "Date_embauche": "14/09/2015",
    "Salaire_brut": 5807.39,
    "Id_dep": "Production"
  },
  {
    "Nom": "Henry",
    "Prenom": "Colette",
    "Statut": "Stage",
    "Date_embauche": "28/12/2015",
    "Salaire_brut": 5464.01,
    "Id_dep": "Production"
  },
  {
    "Nom": "Marion",
    "Prenom": "Sabine",
    "Statut": "CDI",
    "Date_embauche": "04/09/2019",
    "Salaire_brut": 2786.04,
    "Id_dep": "Marketing & Commercial"
  },
  {
    "Nom": "Lebon",
    "Prenom": "Dominique",
    "Statut": "CDD",
    "Date_embauche": "17/06/2016",
    "Salaire_brut": 4936.42,
    "Id_dep": "Recherche & Développement"
  },
  {
    "Nom": "Vidal",
    "Prenom": "Paul",
    "Statut": "CDI",
    "Date_embauche": "13/08/2022",
    "Salaire_brut": 3663.45,
    "Id_dep": "Marketing & Commercial"
  },
  {
    "Nom": "Brunel",
    "Prenom": "Maurice",
    "Statut": "CDI",
    "Date_embauche": "14/12/2018",
    "Salaire_brut": 1993.16,
    "Id_dep": "Recherche & Développement"
  },
  {
    "Nom": "Petitjean",
    "Prenom": "Bernard",
    "Statut": "Alternance",
    "Date_embauche": "07/12/2020",
    "Salaire_brut": 3305.55,
    "Id_dep": "Recherche & Développement"
  },
  {
    "Nom": "Blanchard",
    "Prenom": "Marthe",
    "Statut": "CDD",
    "Date_embauche": "02/08/2020",
    "Salaire_brut": 4030.9,
    "Id_dep": "Production"
  },
  {
    "Nom": "Martins",
    "Prenom": "Lucas",
    "Statut": "CDD",
    "Date_embauche": "15/05/2016",
    "Salaire_brut": 2513.93,
    "Id_dep": "Production"
  },
  {
    "Nom": "Bodin",
    "Prenom": "Théodore",
    "Statut": "Stage",
    "Date_embauche": "15/02/2025",
    "Salaire_brut": 4402.78,
    "Id_dep": "Marketing & Commercial"
  },
  {
    "Nom": "Lemaire",
    "Prenom": "Jules",
    "Statut": "CDD",
    "Date_embauche": "24/10/2018",
    "Salaire_brut": 2775.19,
    "Id_dep": "Marketing & Commercial"
  },
  {
    "Nom": "Lemaître",
    "Prenom": "Jean",
    "Statut": "Stage",
    "Date_embauche": "02/07/2024",
    "Salaire_brut": 2872.37,
    "Id_dep": "Marketing & Commercial"
  },
  {
    "Nom": "Guérin",
    "Prenom": "Alex",
    "Statut": "Alternance",
    "Date_embauche": "17/11/2018",
    "Salaire_brut": 4645.97,
    "Id_dep": "Recherche & Développement"
  },
  {
    "Nom": "Meyer",
    "Prenom": "Gilbert",
    "Statut": "Stage",
    "Date_embauche": "03/08/2021",
    "Salaire_brut": 5769.99,
    "Id_dep": "Marketing & Commercial"
  },
  {
    "Nom": "Hervé",
    "Prenom": "Noémi",
    "Statut": "Stage",
    "Date_embauche": "30/09/2022",
    "Salaire_brut": 4699.32,
    "Id_dep": "Marketing & Commercial"
  },
  {
    "Nom": "Rousset",
    "Prenom": "William",
    "Statut": "CDD",
    "Date_embauche": "04/01/2024",
    "Salaire_brut": 5997.37,
    "Id_dep": "Marketing & Commercial"
  },
  {
    "Nom": "Royer",
    "Prenom": "Marc",
    "Statut": "CDI",
    "Date_embauche": "04/02/2021",
    "Salaire_brut": 2796.26,
    "Id_dep": "Marketing & Commercial"
  },
  {
    "Nom": "Nguyen",
    "Prenom": "Tristan",
    "Statut": "Alternance",
    "Date_embauche": "21/03/2025",
    "Salaire_brut": 5969.31,
    "Id_dep": "Recherche & Développement"
  },
  {
    "Nom": "Jourdan",
    "Prenom": "Aimé",
    "Statut": "Stage",
    "Date_embauche": "10/07/2022",
    "Salaire_brut": 2952.82,
    "Id_dep": "Production"
  },
  {
    "Nom": "Ribeiro",
    "Prenom": "Émilie",
    "Statut": "CDI",
    "Date_embauche": "05/06/2024",
    "Salaire_brut": 5624.59,
    "Id_dep": "Marketing & Commercial"
  },
  {
    "Nom": "Verdier",
    "Prenom": "Josette",
    "Statut": "Alternance",
    "Date_embauche": "02/04/2016",
    "Salaire_brut": 5058.11,
    "Id_dep": "Production"
  },
  {
    "Nom": "Paris",
    "Prenom": "Gilbert",
    "Statut": "Alternance",
    "Date_embauche": "05/08/2020",
    "Salaire_brut": 2719.82,
    "Id_dep": "Production"
  },
  {
    "Nom": "Garnier",
    "Prenom": "Luce",
    "Statut": "Alternance",
    "Date_embauche": "16/12/2024",
    "Salaire_brut": 4646.61,
    "Id_dep": "Production"
  },
  {
    "Nom": "Boulay",
    "Prenom": "Nathalie",
    "Statut": "CDD",
    "Date_embauche": "21/02/2025",
    "Salaire_brut": 4438.64,
    "Id_dep": "Production"
  },
  {
    "Nom": "Wagner",
    "Prenom": "Yves",
    "Statut": "CDI",
    "Date_embauche": "21/08/2020",
    "Salaire_brut": 3097.52,
    "Id_dep": "Recherche & Développement"
  },
  {
    "Nom": "Daniel",
    "Prenom": "Nicole",
    "Statut": "Alternance",
    "Date_embauche": "10/05/2016",
    "Salaire_brut": 4875.91,
    "Id_dep": "Marketing & Commercial"
  },
  {
    "Nom": "Voisin",
    "Prenom": "Arthur",
    "Statut": "Alternance",
    "Date_embauche": "18/05/2015",
    "Salaire_brut": 4939.42,
    "Id_dep": "Recherche & Développement"
  },
  {
    "Nom": "Imbert",
    "Prenom": "Michelle",
    "Statut": "CDD",
    "Date_embauche": "24/03/2021",
    "Salaire_brut": 5103.35,
    "Id_dep": "Marketing & Commercial"
  },
  {
    "Nom": "Daniel",
    "Prenom": "Isabelle",
    "Statut": "Alternance",
    "Date_embauche": "23/01/2024",
    "Salaire_brut": 5287.99,
    "Id_dep": "Marketing & Commercial"
  },
  {
    "Nom": "Maury",
    "Prenom": "Isaac",
    "Statut": "Alternance",
    "Date_embauche": "24/01/2020",
    "Salaire_brut": 4935.55,
    "Id_dep": "Recherche & Développement"
  },
  {
    "Nom": "Tessier",
    "Prenom": "Marianne",
    "Statut": "Stage",
    "Date_embauche": "08/08/2020",
    "Salaire_brut": 5844.15,
    "Id_dep": "Recherche & Développement"
  },
  {
    "Nom": "Morel",
    "Prenom": "Alexandrie",
    "Statut": "Stage",
    "Date_embauche": "13/10/2018",
    "Salaire_brut": 5862.53,
    "Id_dep": "Production"
  },
  {
    "Nom": "Chevalier",
    "Prenom": "Marguerite",
    "Statut": "Alternance",
    "Date_embauche": "13/11/2018",
    "Salaire_brut": 2179.27,
    "Id_dep": "Recherche & Développement"
  },
  {
    "Nom": "Faivre",
    "Prenom": "Philippine",
    "Statut": "Alternance",
    "Date_embauche": "04/05/2022",
    "Salaire_brut": 4053.6,
    "Id_dep": "Marketing & Commercial"
  },
  {
    "Nom": "Pottier",
    "Prenom": "Audrey",
    "Statut": "Alternance",
    "Date_embauche": "07/10/2023",
    "Salaire_brut": 4255.15,
    "Id_dep": "Production"
  },
  {
    "Nom": "François",
    "Prenom": "Christiane",
    "Statut": "Alternance",
    "Date_embauche": "07/09/2019",
    "Salaire_brut": 2255.05,
    "Id_dep": "Marketing & Commercial"
  },
  {
    "Nom": "Brunet",
    "Prenom": "Sophie",
    "Statut": "CDI",
    "Date_embauche": "19/12/2022",
    "Salaire_brut": 4402.1,
    "Id_dep": "Marketing & Commercial"
  },
  {
    "Nom": "Samson",
    "Prenom": "Hugues",
    "Statut": "CDD",
    "Date_embauche": "01/02/2019",
    "Salaire_brut": 4520.14,
    "Id_dep": "Marketing & Commercial"
  },
  {
    "Nom": "Mendès",
    "Prenom": "Roland",
    "Statut": "Alternance",
    "Date_embauche": "29/07/2018",
    "Salaire_brut": 4526.81,
    "Id_dep": "Recherche & Développement"
  },
  {
    "Nom": "Le Roux",
    "Prenom": "Éléonore",
    "Statut": "CDI",
    "Date_embauche": "28/12/2016",
    "Salaire_brut": 5774.3,
    "Id_dep": "Marketing & Commercial"
  },
  {
    "Nom": "Grondin",
    "Prenom": "Andrée",
    "Statut": "CDI",
    "Date_embauche": "25/02/2016",
    "Salaire_brut": 2208.21,
    "Id_dep": "Production"
  },
  {
    "Nom": "Petitjean",
    "Prenom": "Margot",
    "Statut": "CDD",
    "Date_embauche": "17/03/2018",
    "Salaire_brut": 3432.31,
    "Id_dep": "Production"
  },
  {
    "Nom": "Allain",
    "Prenom": "Stéphanie",
    "Statut": "Stage",
    "Date_embauche": "14/06/2021",
    "Salaire_brut": 4266.83,
    "Id_dep": "Recherche & Développement"
  },
  {
    "Nom": "Barre",
    "Prenom": "Pauline",
    "Statut": "Stage",
    "Date_embauche": "12/06/2017",
    "Salaire_brut": 4550.67,
    "Id_dep": "Marketing & Commercial"
  },
  {
    "Nom": "Clerc",
    "Prenom": "Alain",
    "Statut": "Stage",
    "Date_embauche": "19/03/2019",
    "Salaire_brut": 5744.02,
    "Id_dep": "Recherche & Développement"
  },
  {
    "Nom": "Gomes",
    "Prenom": "Paulette",
    "Statut": "Alternance",
    "Date_embauche": "19/04/2020",
    "Salaire_brut": 2712.53,
    "Id_dep": "Recherche & Développement"
  },
  {
    "Nom": "Guérin",
    "Prenom": "Bernadette",
    "Statut": "Alternance",
    "Date_embauche": "26/01/2018",
    "Salaire_brut": 2217.29,
    "Id_dep": "Marketing & Commercial"
  },
  {
    "Nom": "Millet",
    "Prenom": "Nathalie",
    "Statut": "Alternance",
    "Date_embauche": "26/03/2018",
    "Salaire_brut": 2054.31,
    "Id_dep": "Recherche & Développement"
  },
  {
    "Nom": "Martin",
    "Prenom": "Maggie",
    "Statut": "CDI",
    "Date_embauche": "29/05/2019",
    "Salaire_brut": 5785.85,
    "Id_dep": "Marketing & Commercial"
  },
  {
    "Nom": "Lejeune",
    "Prenom": "Michèle",
    "Statut": "CDI",
    "Date_embauche": "25/02/2019",
    "Salaire_brut": 4583.63,
    "Id_dep": "Production"
  },
  {
    "Nom": "Delmas",
    "Prenom": "Julien",
    "Statut": "CDI",
    "Date_embauche": "24/09/2016",
    "Salaire_brut": 2012.43,
    "Id_dep": "Recherche & Développement"
  },
  {
    "Nom": "Humbert",
    "Prenom": "Marianne",
    "Statut": "CDD",
    "Date_embauche": "29/05/2019",
    "Salaire_brut": 5105.31,
    "Id_dep": "Recherche & Développement"
  },
  {
    "Nom": "Coste",
    "Prenom": "Anne",
    "Statut": "CDD",
    "Date_embauche": "20/03/2019",
    "Salaire_brut": 4262.81,
    "Id_dep": "Recherche & Développement"
  },
  {
    "Nom": "François",
    "Prenom": "Isaac",
    "Statut": "Alternance",
    "Date_embauche": "31/03/2019",
    "Salaire_brut": 5052.35,
    "Id_dep": "Production"
  },
  {
    "Nom": "Morvan",
    "Prenom": "Michèle",
    "Statut": "CDI",
    "Date_embauche": "23/02/2022",
    "Salaire_brut": 2964.55,
    "Id_dep": "Recherche & Développement"
  },
  {
    "Nom": "Moreno",
    "Prenom": "Benoît",
    "Statut": "Alternance",
    "Date_embauche": "05/12/2020",
    "Salaire_brut": 5153.76,
    "Id_dep": "Production"
  },
  {
    "Nom": "Vaillant",
    "Prenom": "Théophile",
    "Statut": "CDI",
    "Date_embauche": "25/07/2024",
    "Salaire_brut": 2353.57,
    "Id_dep": "Recherche & Développement"
  },
  {
    "Nom": "Paul",
    "Prenom": "Cécile",
    "Statut": "Alternance",
    "Date_embauche": "24/07/2020",
    "Salaire_brut": 1866.28,
    "Id_dep": "Recherche & Développement"
  },
  {
    "Nom": "Mercier",
    "Prenom": "Susanne",
    "Statut": "CDD",
    "Date_embauche": "21/02/2017",
    "Salaire_brut": 4915.22,
    "Id_dep": "Recherche & Développement"
  },
  {
    "Nom": "Grondin",
    "Prenom": "Arthur",
    "Statut": "CDI",
    "Date_embauche": "13/11/2022",
    "Salaire_brut": 3800.23,
    "Id_dep": "Marketing & Commercial"
  },
  {
    "Nom": "Diaz",
    "Prenom": "Margaret",
    "Statut": "CDI",
    "Date_embauche": "09/08/2020",
    "Salaire_brut": 3698.42,
    "Id_dep": "Production"
  },
  {
    "Nom": "Didier",
    "Prenom": "Alexandrie",
    "Statut": "CDI",
    "Date_embauche": "03/04/2021",
    "Salaire_brut": 4854.42,
    "Id_dep": "Production"
  },
  {
    "Nom": "Huet",
    "Prenom": "Corinne",
    "Statut": "Alternance",
    "Date_embauche": "24/08/2022",
    "Salaire_brut": 3723.78,
    "Id_dep": "Recherche & Développement"
  },
  {
    "Nom": "Henry",
    "Prenom": "Lorraine",
    "Statut": "Stage",
    "Date_embauche": "22/07/2021",
    "Salaire_brut": 5358.65,
    "Id_dep": "Production"
  },
  {
    "Nom": "Aubert",
    "Prenom": "Victoire",
    "Statut": "CDI",
    "Date_embauche": "20/03/2016",
    "Salaire_brut": 3859.13,
    "Id_dep": "Marketing & Commercial"
  },
  {
    "Nom": "Legendre",
    "Prenom": "Roger",
    "Statut": "CDI",
    "Date_embauche": "09/06/2016",
    "Salaire_brut": 5576.92,
    "Id_dep": "Production"
  },
  {
    "Nom": "Morvan",
    "Prenom": "Véronique",
    "Statut": "CDD",
    "Date_embauche": "07/12/2021",
    "Salaire_brut": 2075.87,
    "Id_dep": "Production"
  },
  {
    "Nom": "Morvan",
    "Prenom": "Alexandrie",
    "Statut": "Alternance",
    "Date_embauche": "13/11/2018",
    "Salaire_brut": 3399.8,
    "Id_dep": "Production"
  },
  {
    "Nom": "Laporte",
    "Prenom": "Alain",
    "Statut": "Alternance",
    "Date_embauche": "25/02/2022",
    "Salaire_brut": 3705.6,
    "Id_dep": "Marketing & Commercial"
  },
  {
    "Nom": "Letellier",
    "Prenom": "Laetitia",
    "Statut": "CDI",
    "Date_embauche": "05/04/2020",
    "Salaire_brut": 5131.0,
    "Id_dep": "Production"
  },
  {
    "Nom": "Ledoux",
    "Prenom": "Alphonse",
    "Statut": "CDD",
    "Date_embauche": "05/06/2024",
    "Salaire_brut": 3606.29,
    "Id_dep": "Recherche & Développement"
  },
  {
    "Nom": "Hervé",
    "Prenom": "Jérôme",
    "Statut": "Stage",
    "Date_embauche": "03/04/2023",
    "Salaire_brut": 3223.51,
    "Id_dep": "Marketing & Commercial"
  },
  {
    "Nom": "Leblanc",
    "Prenom": "Marine",
    "Statut": "Stage",
    "Date_embauche": "29/12/2022",
    "Salaire_brut": 4864.37,
    "Id_dep": "Marketing & Commercial"
  },
  {
    "Nom": "Lagarde",
    "Prenom": "Sébastien",
    "Statut": "Alternance",
    "Date_embauche": "26/11/2019",
    "Salaire_brut": 4593.45,
    "Id_dep": "Recherche & Développement"
  },
  {
    "Nom": "Gay",
    "Prenom": "Alphonse",
    "Statut": "Stage",
    "Date_embauche": "02/12/2023",
    "Salaire_brut": 2081.96,
    "Id_dep": "Recherche & Développement"
  },
  {
    "Nom": "Buisson",
    "Prenom": "Océane",
    "Statut": "CDI",
    "Date_embauche": "20/05/2023",
    "Salaire_brut": 3613.88,
    "Id_dep": "Production"
  },
  {
    "Nom": "Marchal",
    "Prenom": "Brigitte",
    "Statut": "Alternance",
    "Date_embauche": "01/09/2021",
    "Salaire_brut": 5209.43,
    "Id_dep": "Recherche & Développement"
  },
  {
    "Nom": "Weiss",
    "Prenom": "Julien",
    "Statut": "Alternance",
    "Date_embauche": "14/04/2018",
    "Salaire_brut": 4614.06,
    "Id_dep": "Marketing & Commercial"
  },
  {
    "Nom": "Dubois",
    "Prenom": "Roland",
    "Statut": "Stage",
    "Date_embauche": "24/06/2021",
    "Salaire_brut": 5445.99,
    "Id_dep": "Recherche & Développement"
  }
];