import { Tables } from "@/services/db_services/supabase";
import Identity from "../identity";



interface DashboradNavBarProps {
    prof : Tables<'professeur'>
}
export default function DashboardNavBar({prof} : DashboradNavBarProps) {

    return (
        <div className="nav fixed top-0 w-full bg-vert_clair h-16 flex flex-row justify-between "> 
            <Identity name={prof.nom}/>
        </div>
    )
    
}