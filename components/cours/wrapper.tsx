import { resetTimeToMidnight } from "@/lib/date";
import { getCoursForProfesseurThisWeek } from "@/services/db_services/getCours";
import { CoursWithClasse } from "@/services/db_services/supabase";
import { useEffect, useState } from "react";
import ListCoursPage from "./listCoursPage";


interface WrapperProps {
    idProf : number
}

export default function Wrapper ({idProf} : WrapperProps) {
    const [coursWeekList, setCoursWeekList] = useState<CoursWithClasse[]>([]);

      useEffect(() => {
        const getData = async () => {
            try {
                const weekCourses = await getCoursForProfesseurThisWeek(idProf); 
                setCoursWeekList(weekCourses);
            } catch (error) {
                console.error('Erreur de récupération des données:', error);
            }
        };

        getData();     
       
    }, []);

    return < ListCoursPage coursWeekList={coursWeekList}/>

}