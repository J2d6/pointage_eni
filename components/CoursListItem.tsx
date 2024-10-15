import { Tables } from "@/services/db_services/supabase";



export default function CoursListItem( cours  : Tables<'cours'>) {
    return (
        <div className=" px-12 h-16 border w-full border-lime-2600 flex flex-row justify-between ">
            <div className="  border-blue-950 flex flex-col">
                <span className=" font-bold "> {cours.nom_cours} </span>
                <span> {cours.horaire} </span>
            </div>
            <div className=" border-green-700 flex flex-col items-end ">
               <span className=" font-bold "> {cours.id_classe} </span>
             {/* <span> {cours.salle} </span> */}
            </div>
        </div>
    )
}