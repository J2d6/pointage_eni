import { Tables } from "@/services/db_services/supabase";

interface EleveIdentityCardProps {
    eleve: Tables<'eleve'>
}

export default function EleveIdentityCard({ eleve }: EleveIdentityCardProps) {
    // return (
    //     <div className={`
    //         border border-rose-700 
    //         flex flex-col items-stretch
    //         bg-white 
    //         rounded-lg shadow 
    //         md:flex-row md:max-w-xl 
    //         hover:bg-gray-100
    //         // Supprimer la hauteur fixe pour ne pas forcer le div externe à avoir une hauteur
    //     `}>
    //         <div className="border border-y-purple-600 overflow-hidden">
    //             <img 
    //                 src="/images/ralaivao.jpg"  
    //                 alt="pdp_eleve"
    //                 className={`
    //                     object-cover 
    //                     w-full 
    //                     h-14 
    //                 `}
    //             />
    //         </div>
    //         <div className={`
    //             flex flex-col justify-between leading-normal border border-violet-900 
    //             p-2 // Ajout d'un padding pour un meilleur espacement
    //         `}>
    //             <span className="mb-2 text-xl font-bold tracking-tight text-gray-900"> {eleve.prenom} </span>
    //             <span className="mb-3 font-normal text-gray-700 dark:text-gray-400"> {eleve.id_eleve} </span>
    //         </div>
    //     </div>
    // );

    return (
        <div className="flex flex-row items-center  flex-1   border-rose-600" >
           <div className="flex flex-row items-center  border-green-500">
                <img className="rounded-full w-9 h-9 " src="/images/ralaivao.jpg" alt="profile picture" />
                <div className="space-y-0.5 text-xl font-bold dark:text-white text-left rtl:text-right ms-3">
                    <div>{eleve.prenom}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 ">{eleve.id_eleve}</div>
                </div>
           </div>
        </div>   
    )
}


// export function Card() {
//     return (
//         <figcaption className="flex items-center justify-center " >
//             <img className="rounded-full w-9 h-9" src="/images/ralaivao.jpg" alt="profile picture" />
//             <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
//                 <div>Bonnie Green</div>
//                 <div className="text-sm text-gray-500 dark:text-gray-400 ">Developer at Open AI</div>
//             </div>
//         </figcaption>   
//     )
// }