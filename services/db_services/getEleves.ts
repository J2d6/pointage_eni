import { createClient }  from "@supabase/supabase-js";
import { CoursWithClasse, Database, EleveWithNotificationAndClasse, Tables } from "./supabase";
import { getCoursById } from "./getCours";
// import { createClient } from "jsr:@supabase/supabase-js@2";
import { resetTimeToMidnight } from "@/lib/date";

// const supabaseServer = createClient<Database>(
//     process.env.NEXT_PUBLIC_SUPABASE_URL!,
//     process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
// )

const supabaseServer = createClient<Database>(
    "https://qcspkygapnefculxdyjy.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFjc3BreWdhcG5lZmN1bHhkeWp5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc4NjgxNDQsImV4cCI6MjA0MzQ0NDE0NH0.9VQ3b2r_FevWIfDb_4ztGW2FiOEh6H6VF0-CR1pvwBc"
)



export const getElevesPerClass = async function (id_classe : number) : Promise<Tables<'eleve'>[]> {

    const { data: elevesData, error } = await supabaseServer
        .from('eleve')
        .select('*')
        .eq('id_classe', id_classe);

    if (error) {
        throw new Error(error.message)
    }

    return elevesData || [] ;
}

// const eleves = await getElevesPerClass(1)
// console.log(eleves);

export const getEleveById = async function (id_eleve : number) : Promise<Tables<'eleve'>[]> {
  const { data: eleve, error } = await supabaseServer
        .from('eleve')
        .select('*')
        .eq('id_eleve', id_eleve);

    if (error) {
        throw new Error(error.message)
    }

    return eleve || [] ;
}


export async function getStudentsWithNotificationsByCourse(
  courseId: number
) {
 
    let cours : CoursWithClasse
    try {
        cours = (await getCoursById(courseId))[0]
    } catch (error : any) {
        throw new Error(error.message)
    }

    const idClasse = cours.id_classe;

  if (!idClasse) {
    throw new Error('Class ID not found for the given course.');
  }

  const { data: studentsData, error: studentsError } = await supabaseServer
  .from('eleve')
  .select(`
    *,
    notification (
      *
    )
  `)
  .eq('id_classe', idClasse)
  .or(`notification.id_professeur.eq.${cours.id_professeur},notification.date.eq.${resetTimeToMidnight(cours.horaire)}`);



  if (studentsError) {
    console.error('Error fetching students with notifications:', studentsError);
    throw studentsError;
  }

  

  return studentsData;
}


export async function getStudentsWithNotificationsByKnownCourse(
    cours: CoursWithClasse
  ) : Promise<EleveWithNotificationAndClasse[]> {
   

  
    const { data: studentsData, error: studentsError } = await supabaseServer
      .from('eleve')
      .select(`
        *,
        notification (
          *
        ),
        classe (
          *
        )
      `)
      .eq('id_classe', cours.id_classe)
      //.or(`notification.id_professeur.eq.${cours.id_professeur}, notification.date.eq.${resetTimeToMidnight(cours.horaire)}`)
     // .eq('notification.id_cours', courseId);
  
    if (studentsError) {
      console.error('Error fetching students with notifications:', studentsError);
      throw studentsError;
    }
  
    return studentsData;
  }
  


// const elevesByCours = await getStudentsWithNotificationsByCourse(7)
// console.log(elevesByCours);
