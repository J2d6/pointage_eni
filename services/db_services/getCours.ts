
import { createClient }  from "@supabase/supabase-js";
import { Database, Tables } from "./supabase";
import { formatISO, startOfWeek, endOfWeek } from 'date-fns';
// deno
//mport { createClient } from "jsr:@supabase/supabase-js@2";

const supabaseServer = createClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)


export const getCoursById = async function (idCours : number) : Promise<Tables<'cours'>[]> {

        const {data : cours , error } = await supabaseServer
            .from('cours')
            .select('*')
            .eq('id_cours', idCours)

        if (error) {
            throw new Error(error.message)
        } 


        return cours || [];
}


const makeWeekDateRange = function () {
    const startOfWeekDate = formatISO(startOfWeek(new Date(), { weekStartsOn: 1 })); 
    const endOfWeekDate = formatISO(endOfWeek(new Date(), { weekStartsOn: 1 })); 
    
    return {
        startOfWeekDate, endOfWeekDate
    }
}


export const getCoursForProfesseurThisWeek = async function (id_professeur: number): Promise<Tables<'cours'>[]> {
    const { startOfWeekDate, endOfWeekDate } = makeWeekDateRange()
    console.log(startOfWeekDate);
    
    
    const { data, error } = await supabaseServer
        .from('cours')
        .select(`
            *,
            classe (
              id_classe,
              nom_classe
            )
          `)
        .eq('id_professeur', id_professeur)
        .gte('horaire', startOfWeekDate)
        .lte('horaire', endOfWeekDate);

    if (error) {
        console.error('Erreur lors de la récupération des cours:', error.message);
        throw new Error('Erreur lors de la récupération des cours');
    }

    return data || [];
}



// const coursThisWeek = await getCoursForProfesseurThisWeek(1)
// console.log(coursThisWeek);

// const cours = await getCoursById(2)
// console.log(cours);

