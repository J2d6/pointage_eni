import CoursListItem from "./CoursListItem";
import { CoursWithClasse } from "@/services/db_services/supabase";

interface ListCoursProps {
    courses: CoursWithClasse[]; 
}

export default function ListCours({ courses }: ListCoursProps) { 
    
    
    
    return (
        <main className="flex-1 flex flex-col p-8 border-black gap-2 bg-base">
            {courses.map((cours, index) => (
                <CoursListItem key={index} cours={cours} /> 
            ))}
        </main>
    );
}
