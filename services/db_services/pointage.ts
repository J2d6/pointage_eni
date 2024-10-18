import { createClient } from "@supabase/supabase-js"
import { Database, PointageWithEleveAndCoursAndNotification, TablesInsert , EleveWithNotification, PointageWithCours} from "./supabase"


// const supabaseServer = createClient<Database>(
//     process.env.NEXT_PUBLIC_SUPABASE_URL!,
//     process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
// )

const supabaseServer = createClient<Database>(
    "https://qcspkygapnefculxdyjy.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFjc3BreWdhcG5lZmN1bHhkeWp5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc4NjgxNDQsImV4cCI6MjA0MzQ0NDE0NH0.9VQ3b2r_FevWIfDb_4ztGW2FiOEh6H6VF0-CR1pvwBc"
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
    .order('id_eleve', {ascending : true})
   
    if (error) {
        throw new Error(error.message)
    }

    return  pointagesData || [] 
}


export const getPointagesForEleveAndProf = async function (id_eleve: number, id_professeur: number) : Promise<PointageWithCours[]>{
  const { data, error } = await supabaseServer
    .from('pointage')
    .select(`
      *,
      cours (
        *
      )
    `)
    .eq('id_eleve', id_eleve)
    .eq('cours.id_professeur', id_professeur);

  if (error) {
    console.error('Erreur lors de la récupération des pointages:', error);
   
  }

  return data || [];
}