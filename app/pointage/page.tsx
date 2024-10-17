"use client"


import HeaderSection from "@/components/pointage/headerSection";
import PointagePage from "@/components/pointage/pointagePage";
import { useSearchParams } from "next/navigation";

export default function Page() {

    const params  = useSearchParams();
    const  idCours  = params.get("idCours")

    return (
        <main className=" h-screen flex flex-col">
            <HeaderSection idCours={parseInt(idCours!)}/>
            <PointagePage idCours={parseInt(idCours!)} />
        </main>
    )
    
}