import { createClient } from "@supabase/supabase-js"
import { Database, PointageWithEleveAndCoursAndNotification, TablesInsert } from "./supabase"


const supabaseServer = createClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export const pointer = async function (pointage : PointageWithEleveAndCoursAndNotification) {
    const pointageFined : TablesInsert<'pointage'> =  {
        date: pointage.cours.horaire,
        id_cours: pointage.id_cours,
        id_eleve: pointage.id_eleve,
        retard: pointage.retard,
        statut_presence: pointage.statut_presence
    }

    const { data : pointageDone, error } = await supabaseServer
        .from('pointage')
        .insert(pointageFined)
        .select()

    if (error) {
        throw new Error(error.message)
    }
}