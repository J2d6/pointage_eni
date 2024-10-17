
import { createClient }  from "@supabase/supabase-js";
import { CoursWithClasse, Database, Tables } from "./supabase";
import { getTimestampsOfCurrentWeek, makeWeekDateRange , getMidnightTimestamps } from "@/lib/date";


// {
//     // deno
// // import { createClient } from "jsr:@supabase/supabase-js@2";


// // const supabaseServer = createClient<Database>(
// //     process.env.NEXT_PUBLIC_SUPABASE_URL!,
// //     process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
// // )
// }


const supabaseServer = createClient(
    "https://qcspkygapnefculxdyjy.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFjc3BreWdhcG5lZmN1bHhkeWp5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc4NjgxNDQsImV4cCI6MjA0MzQ0NDE0NH0.9VQ3b2r_FevWIfDb_4ztGW2FiOEh6H6VF0-CR1pvwBc"
)




export const getCoursById = async function (idCours : number) : Promise<CoursWithClasse[]> {

        const {data : cours , error } = await supabaseServer
            .from('cours')
            .select('*, classe(*)')
            .eq('id_cours', idCours)

        if (error) {
            throw new Error(error.message)
        } 


        return cours || [];
}



export const getCoursForProfesseurThisWeek = async function (id_professeur: number): Promise<CoursWithClasse[]> {

    const dateOfWeek = getTimestampsOfCurrentWeek()
    console.log(dateOfWeek[0]);
    
    
    const { data, error } = await supabaseServer
        .from('cours')
        .select(`
            *,
            classe (
              *
            )
          `)
        .eq('id_professeur', id_professeur)
        .gte('horaire', dateOfWeek[0])
        .lte('horaire', dateOfWeek[6]);

    if (error) {
        console.error('Erreur lors de la récupération des cours:', error.message);
        throw new Error('Erreur lors de la récupération des cours');
    }

    return data || [];
}


export const getCoursesByDate = async function (
  timestamp: string 
) :Promise<CoursWithClasse[]>{

    const dayDateRange = getMidnightTimestamps(timestamp)

  const { data, error } = await supabaseServer
    .from('cours')
    .select('*, classe(*)')
    .gte('horaire', dayDateRange[0])
    .lte('horaire', dayDateRange[1]);


  if (error) {
    console.error('Error fetching courses:', error);
    throw error;
  }

  return data || [];
}

export const getAllCours = async function () {
    const dateOfWeek = getTimestampsOfCurrentWeek()
    console.log(dateOfWeek);
    
    
    const { data, error } = await supabaseServer
        .from('cours')
        .select(`
            *,
            classe (*)
          `)
       

    if (error) {
        console.error('Erreur lors de la récupération des cours:', error.message);
        throw new Error('Erreur lors de la récupération des cours');
    }

    return data || [];
}




















// {

// const dateOfWeeks = getTimestampsOfCurrentWeek()

// // console.log(dateOfWeeks[2]);

// const cours = await getCoursesByDate(dateOfWeeks[2])
// console.log(cours);

// // const forThisWeek = await getCoursForProfesseurThisWeek(1);
// // console.log(forThisWeek);





// // const all = await getAllCours()
// // console.log(all);
// }
