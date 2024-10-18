import { Tables } from "@/services/db_services/supabase";
import Link from "next/link";

interface EleveIdentityCardProps {
    eleve: Tables<'eleve'>
}

export default function EleveIdentityCard({ eleve }: EleveIdentityCardProps) {
    

    return ( 
        <div className="flex flex-row items-center  flex-1 h-22   border-rose-600" >
            <Link
                href={`/dashboard?id_eleve=${eleve.id_eleve}`}
            >    
                <div className="flex flex-row items-center  border-green-500">
                        <img className="rounded-full w-11 h-11 " src={`/images/${eleve.id_eleve}.jpg`} alt="profile picture" />
                        <div className="space-y-0.5 text-xl font-bold dark:text-white text-left rtl:text-right ms-3">
                            <div>{eleve.prenom}</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400 ">{eleve.id_eleve}</div>
                        </div>
                </div>
            </Link>
        </div>   
    )
}

