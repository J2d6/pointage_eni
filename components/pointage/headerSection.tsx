import { getCoursById } from "@/services/db_services/getCours";
import { CoursWithClasse } from "@/services/db_services/supabase"
import { useEffect, useState } from "react"



interface HeaderSectionProps {
    idCours : number
}


export default function HeaderSection({
    idCours
} : HeaderSectionProps ) {
    const [cours, setCours] = useState<CoursWithClasse>()

    useEffect(() => {
        const getData = async () => {
            try { 
                const cours = await getCoursById(idCours)
                setCours(cours[0])
            } catch (error) {
                console.error('Erreur de récupération des données:', error);
            }
        };

        getData();     
       
    }, []);
    
    return (
        <section
            className={`
                flex flex-col gap-1    w-full 
                fixed top-16
            `}
        >
            <div
                className={`
                    flex flex-row  
                     border-black  
                    py-4 px-8
                    font-bold
                `}
            >
                <span>
                    {cours?.nom_cours.toUpperCase()}
                </span>

            </div>

            <div
                className={`
                    flex flex-row justify-between items-center 
                     border-rose-800  
                    py-4 px-8
                `}
            >
                <span> {cours?.horaire} </span>
                <span className="font-bold"> {cours?.classe?.nom_classe} | {cours?.salle} </span>
            </div>
            <hr />
        </section>
    )
    
}