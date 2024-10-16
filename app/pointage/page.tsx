"use client"


import { useRouter, useParams, useSearchParams } from "next/navigation";

export default function PointagePage() {

    const params  = useSearchParams();
    const  idCours  = params.get("idCours")

    return (
        <div>
            {idCours}
        </div>
    )
    
}