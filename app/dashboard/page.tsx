'use client'

import PresenceBarChartPerSubject from "@/components/dashboard/BarChartPresence";
import DashboardNavBar from "@/components/dashboard/dashboadNavBar";
import EleveInfoSection from "@/components/dashboard/EleveInfo";

import { getEleveById } from "@/services/db_services/getEleves";
import { getProfesseurById } from "@/services/db_services/professeur";
import { Tables } from "@/services/db_services/supabase";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function DashBoardPage() {
    const [eleve, setEleve] = useState<Tables<'eleve'> | null>(null);
    const [prof, setProf] = useState<Tables<'professeur'> | null>(null);
    const [loadingProf, setLoadingProf] = useState(true);
    
    const params = useSearchParams();
    const idEleve = params.get("id_eleve");
    const idProf = params.get("id_prof");

    useEffect(() => {
        if (!idEleve || !idProf) {
            alert("Missing parameters.");
            return;
        }

        const getData = async function (idEleve: string) {
            try {
                const eleveId = parseInt(idEleve);
                const eleveTable = await getEleveById(eleveId);

                if (!eleveTable.length) {
                    throw new Error("Eleve not found");
                } else {
                    setEleve(eleveTable[0]);
                }

                const profTable = await getProfesseurById(parseInt(idProf));
                if (!profTable.length) {
                    throw new Error("Professeur not found");
                } else {
                    setProf(profTable[0]);
                }
            } catch (error) {
                console.error(error);
                alert("An error occurred while fetching data.");
            } finally {
                setLoadingProf(false);
            }
        };

        getData(idEleve);
    }, [idEleve, idProf]);

    if (loadingProf) {
        return <div>Loading...</div>;
    }

    return (
        <>
            {/* Navigation bar */}
            {prof && <DashboardNavBar prof={prof} />}
            <main className="h-screen flex flex-col pt-16"> {/* Ajustez le padding-top */}
                <div className="flex-1 p-4 overflow-auto"> {/* Ajoutez overflow-auto pour la flexibilité */}
                    <EleveInfoSection eleve={eleve!} />
                    <PresenceBarChartPerSubject idEleve={eleve?.id_eleve!} idProf={prof?.id_professeur!} />
                </div>
            </main>
        </>
    );
    
}
