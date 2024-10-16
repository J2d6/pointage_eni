import {getUniqueDaysWithTimeFromCourses } from "@/lib/date";
import { CoursWithClasse } from "@/services/db_services/supabase";
import DayItem from "./dayItem";

interface DayAsideProps {
    setDay: (day: string) => void; 
    coursList: CoursWithClasse[]; 
    day : string
}

export default function DayAside({ setDay, coursList, day }: DayAsideProps) { 
    const dayDateList = getUniqueDaysWithTimeFromCourses(coursList);
    console.log(dayDateList);
    

    return (
        <div className="bg-base w-32 flex border-r border-line_grey flex-col px-1 justify-evenly items-center">
            {dayDateList.map((dayDate , index) => (
                <DayItem date={dayDate} setDay={setDay} key={index} day={day}/>
            ))}
        </div>
    );
}
