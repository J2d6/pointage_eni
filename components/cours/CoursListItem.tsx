import { getDayFromTimestamp, getHourFromTimestamp } from "@/lib/date";
import { CoursWithClasse } from "@/services/db_services/supabase";

interface CoursListItemProps { // Définir une interface pour les props
    cours: CoursWithClasse; // Définir cours comme une prop
}

export default function CoursListItem({ cours }: CoursListItemProps) { // Déstructurer les props
    return (
        <div className={`
            border border-border_green
            rounded 
            flex flex-col
            hover:shadow-md
            bg-base_blanc
        `}>
            <div className={`
                py-2 px-4
                flex justify-between flex-row items-center 
                w-full
            `}>
                <span className="font-bold ml-4"> {cours.nom_cours}</span>
                <span className="mr-4 font-bold"> {cours.classe?.nom_classe} </span>
            </div>
            <div className={`
                py-2 px-4
                flex justify-between flex-row items-center 
                w-full
            `}>
                <span className="text-text_grey ml-4"> {` ${getHourFromTimestamp(cours.horaire)}`}</span>
                <span className="mr-4 "> {cours.salle} </span>
            </div>
        </div>
    )
}
