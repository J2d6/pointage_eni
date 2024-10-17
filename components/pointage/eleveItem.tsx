import { EleveWithNotification, PointageWithEleveAndCoursAndNotification, Tables } from "@/services/db_services/supabase";
import { Calendar } from 'lucide-react';
import EleveIdentityCard from "./eleveIdentityCard";
import AddNotif from "./addNotification";

interface EleveListItem {
    pointage : PointageWithEleveAndCoursAndNotification
}


export default function EleveListItem({pointage} : EleveListItem) {
    const handleNotifClick = function () {
        alert(JSON.stringify(pointage.eleve.notification))
    }
    return (
        <div
            className= {`
                flex flex-row   
                border border-border_green 
                p-2
                rounded
                bg-base_blanc
                h-24
            `}
        >
            <EleveIdentityCard eleve={pointage.eleve}/>
            <div
                className={`
                    flex flex-col flex-1
                     border-yellow-500
                `}
            >
                <div className={`flex flex-1  border-green-600 flex-row justify-between items-center `}>
                    { pointage.eleve.notification?.length ? 
                        <div 
                            className={` ml-2 rounded  hover:shadow-lg hover:border hover:border-border_grey_clair `}
                            onClick={handleNotifClick}
                        > <Calendar /> </div>  
                        : <div>&nbsp;</div>
                    }
                    <div>&nbsp;</div>
                    <div className=" mr-4 border-emerald-500">
                        <AddNotif />
                    </div>
                </div>
                <div className={`flex flex-1  border-green-600 flex-row items-center justify-evenly `}>
                    <span>En retard</span>
                    <span> Absent(e) </span>
                    <span> Present(e)</span>
                </div>
            </div>
        </div>
    )
}