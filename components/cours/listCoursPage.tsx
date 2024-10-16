import { getTimestampsOfCurrentWeek, resetTimeToMidnight } from "@/lib/date";
import { getCoursesByDate, getCoursForProfesseurThisWeek } from "@/services/db_services/getCours";
import { CoursWithClasse } from "@/services/db_services/supabase";
import { useEffect, useState } from "react";
import ListCoursNav from "./listCoursNav";
import DayAside from "./dayAside";
import ListCours from "./ListCours";


interface ListCoursPageProps {
    coursWeekList: CoursWithClasse[]; 
}

export default function ListCoursPage({coursWeekList} : ListCoursPageProps) {
    const dateOfWeeks = getTimestampsOfCurrentWeek();

    const [day, setDay] = useState<string>(dateOfWeeks[0]);
 
    const [dayCoursList, setDayCoursList] = useState<CoursWithClasse[]>([]);
    

  
    
    useEffect(() => {
        const getData = async () => {
            try { 
                const dayCours = coursWeekList.filter(
                    cours => (resetTimeToMidnight(cours.horaire) == resetTimeToMidnight(day))
                )
                setDayCoursList(dayCours)
            } catch (error) {
                console.error('Erreur de récupération des données:', error);
            }
        };

        getData();     
       
    }, [day]);

    return (
        <div className="wrap h-screen flex flex-col">
            {/* {day} */}
            <ListCoursNav />
            <div className="flex flex-row content flex-1">
                <DayAside setDay={setDay} coursList={coursWeekList} day ={day} /> 
                <ListCours courses={dayCoursList} />
            </div>     
        </div> 
    );
}
