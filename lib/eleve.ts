import { CoursWithClasse, EleveWithNotificationAndClasse, PointageWithEleveAndCoursAndNotification, Tables } from "@/services/db_services/supabase";



export const mapToPointage = function (
    elevesList : EleveWithNotificationAndClasse[], 
    cours : CoursWithClasse
) : PointageWithEleveAndCoursAndNotification[] {
    const pointageTable : PointageWithEleveAndCoursAndNotification[] = elevesList.map(
        eleve => {
            const tmp = {
                date: cours.horaire,
                id_cours: cours.id_cours,
                id_eleve: eleve.id_eleve,
                statut_presence: true, 
                eleve : eleve,
                cours : cours
            }
            console.log(tmp);
            
            return tmp
        }
    )

    return pointageTable
}