'use client'

import DayAside from "@/components/dayAside"
import ListCoursNav from "@/components/listCoursNav"



export default function Page() {
    return (
        <div className="wrap h-screen flex flex-col">
        <ListCoursNav />
        <div className=" flex flex-row content flex-1">
            <DayAside />
            <main className=" flex-1">
                
            </main>    
        </div>            
    </div>
    )
}