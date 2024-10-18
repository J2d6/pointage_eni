import { createClient }  from "@supabase/supabase-js";
import {  Database, Tables} from "./supabase";

// import { createClient } from "jsr:@supabase/supabase-js@2";


const supabaseServer = createClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

// const supabaseServer = createClient<Database>(
//     "https://qcspkygapnefculxdyjy.supabase.co",
//     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFjc3BreWdhcG5lZmN1bHhkeWp5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc4NjgxNDQsImV4cCI6MjA0MzQ0NDE0NH0.9VQ3b2r_FevWIfDb_4ztGW2FiOEh6H6VF0-CR1pvwBc"
// )


export const getProfesseurById = async function (id_prof : number) : Promise<Tables<'professeur'>[]> {
    const { data : professeurs, error } = await supabaseServer
        .from('professeur')
        .select(`*`)
        .eq('id_professeur', id_prof)
    if (error) {
        throw new Error(error.message)
    }

    return professeurs || []
} 