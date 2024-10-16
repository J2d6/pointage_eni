"use client"


import HeaderSection from "@/components/pointage/headerSection";
import PointagePage from "@/components/pointage/pointagePage";
import { useRouter, useParams, useSearchParams } from "next/navigation";

export default function Page() {

    const params  = useSearchParams();
    const  idCours  = params.get("idCours")

    return (
        <main>
            <HeaderSection idCours={parseInt(idCours!)}/>
            <PointagePage idCours={parseInt(idCours!)} />
        </main>
    )
    
}