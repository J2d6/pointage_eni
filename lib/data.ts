import { CoursWithClasse } from "@/services/db_services/supabase";

export const courses: CoursWithClasse[] = [
    {
        horaire: new Date("2024-10-14T08:00:00").toISOString(), // 15 octobre 2024 à 08:00
        id_annee_scolaire: 2024,
        id_classe: 1,
        id_cours: 101,
        id_professeur: 3,
        nom_cours: "Mathématiques",
        salle: "S 101",
        classe: {
            nom_classe: "M1 GB",
            id_classe: 1,
            id_annee_scolaire: 1
        }
    },
    {
        horaire: new Date("2024-10-16T09:30:00").toISOString(), // 15 octobre 2024 à 09:30
        id_annee_scolaire: 2024,
        id_classe: 2,
        id_cours: 102,
        id_professeur: 4,
        nom_cours: "Physique",
        salle: "S 001",
        classe: {
            nom_classe: "L3 GB",
            id_classe: 1,
            id_annee_scolaire: 1
        }
    },
    {
        horaire: new Date("2024-10-15T11:00:00").toISOString(), // 15 octobre 2024 à 11:00
        id_annee_scolaire: 2024,
        id_classe: 1,
        id_cours: 103,
        id_professeur: 5,
        nom_cours: "Chimie",
        salle: "S 201",
        classe: {
            nom_classe: "L2 GB",
            id_classe: 1,
            id_annee_scolaire: 1
        }
    },
    {
        horaire: new Date("2024-10-18T13:30:00").toISOString(), // 15 octobre 2024 à 13:30
        id_annee_scolaire: 2024,
        id_classe: 3,
        id_cours: 104,
        id_professeur: 6,
        nom_cours: "Histoire",
        salle: "S 112",
        classe: {
            nom_classe: "M2 GB",
            id_classe: 1,
            id_annee_scolaire: 1
        }
    },
    {
        horaire: new Date("2024-10-15T17:00:00").toISOString(), // 15 octobre 2024 à 15:00
        id_annee_scolaire: 2024,
        id_classe: 2,
        id_cours: 105,
        id_professeur: 7,
        nom_cours: "Géographie",
        salle: "S 103",
        classe: {
            nom_classe: "L1 IG",
            id_classe: 1,
            id_annee_scolaire: 1
        }
    }
];

