import { Tables } from "@/services/db_services/supabase";

interface EleveInfoProps {
    eleve: Tables<'eleve'>
}

export default function EleveInfoSection({ eleve }: EleveInfoProps) {
    return (
        <section className={`
            w-full
            flex flex-row items-center
            border border-gray-200 
            rounded-lg shadow
            h-32  
            overflow-hidden
            bg-white
        `}>
            <img 
                className="object-cover w-48 h-full rounded-l-lg" 
                src={`/images/${eleve.id_eleve}.jpg`} 
                alt={`${eleve.nom} image`} 
            />
            <div className="flex flex-col justify-center p-4 leading-normal">
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {eleve.nom.toUpperCase()}
                </h5>
            </div>
        </section>
    );
}
