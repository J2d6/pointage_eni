import { createClient } from "@supabase/supabase-js"
import { Database, PointageWithEleveAndCoursAndNotification, TablesInsert , EleveWithNotification} from "./supabase"


const supabaseServer = createClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export const pointer = async function (pointage : PointageWithEleveAndCoursAndNotification) {
    const pointageFined : TablesInsert<'pointage'> =  {
        date: pointage.cours!.horaire,
        id_cours: pointage.id_cours,
        id_eleve: pointage.id_eleve,
        retard: pointage.retard,
        statut_presence: pointage.statut_presence
    }

    const { data : pointageDone, error } = await supabaseServer
        .from('pointage')
        .upsert(pointageFined)
        .select()

    if (error) {
        throw new Error(error.message)
    }
}

export const getPonintageListByCoursId = async function (id_cours : number ) : Promise<PointageWithEleveAndCoursAndNotification[]  > {
    const { data: pointagesData, error } = await supabaseServer
    .from('pointage')
    .select(`
      *,
      eleve (
        *,
        notification (*)
      ),
      cours (*, classe(*))
    `)
    .eq('id_cours', id_cours) 
   
    if (error) {
        throw new Error(error.message)
    }

    return  pointagesData || [] 
}