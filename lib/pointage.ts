import { pointer } from "@/services/db_services/pointage";
import { PointageWithEleveAndCoursAndNotification, Tables, TablesInsert } from "@/services/db_services/supabase";


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


function attendre(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export const validate = async function (pointageList : PointageWithEleveAndCoursAndNotification[]) : Promise<boolean> {
    await attendre(2000)
    
    try {
        await Promise.all(
            pointageList.map( pointage => pointer(pointage))
        )

        return true
    } catch (error) {
        alert(JSON.stringify(error))
        return false
    }
}