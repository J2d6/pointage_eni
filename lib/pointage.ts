import { PointageWithEleveAndCoursAndNotification } from "@/services/db_services/supabase";


export const togglePresenceStatus = function (
    pointageList : PointageWithEleveAndCoursAndNotification[],
    pointageEleve : PointageWithEleveAndCoursAndNotification,
    setListPointage : any
) {   
    setListPointage(
        pointageList.map(
            pointage => {
                if(pointageEleve.id_eleve == pointage.id_eleve) {
                    return pointageEleve
                }
            }
        )
    )
}