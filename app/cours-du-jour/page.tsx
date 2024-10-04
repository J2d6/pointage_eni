'use client'

import DayAside from "@/components/dayAside"
import ListCoursNav from "@/components/listCoursNav"
import ListCours from "@/components/ListCours"


export default function Page() {
    return (
        <div className="wrap h-screen flex flex-col">
        <ListCoursNav />
        <div className=" flex flex-row content flex-1">
            <DayAside />
            <ListCours />
        </div>            
    </div>
    )
}