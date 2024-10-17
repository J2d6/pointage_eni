import { CoursWithClasse, EleveWithNotificationAndClasse, PointageWithEleveAndCoursAndNotification, Tables } from "@/services/db_services/supabase";


const tete : Tables<'eleve'>  | null = null ; 
export const mapTiPointage = function (
    elevesList : EleveWithNotificationAndClasse[], 
    cours : CoursWithClasse
) : PointageWithEleveAndCoursAndNotification[] {
    const pointageTable : PointageWithEleveAndCoursAndNotification[] = elevesList.map(
        eleve => {
            return {
                date: cours.horaire,
                id_cours: cours.id_cours,
                id_eleve: eleve.id_eleve,
                statut_presence: true, 
                eleve : eleve,
                cours : cours
            }
        }
    )

    return pointageTable
}