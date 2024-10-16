import { EleveWithNotification, Tables } from "@/services/db_services/supabase";
import { Calendar } from 'lucide-react';
import EleveIdentityCard from "./eleveIdentityCard";

interface EleveListItem {
    eleve : EleveWithNotification
}


export default function EleveListItem({eleve} : EleveListItem) {
    const handleNotifClick = function () {
        alert(JSON.stringify(eleve.notification))
    }
    return (
        <div
            className= {`
                flex flex-row   
                border border-border_green 
                p-2
                rounded
            `}
        >
            <EleveIdentityCard eleve={eleve}/>
            <div
                className={`
                    flex flex-col flex-1
                     border-yellow-500
                `}
            >
                <div className={`flex flex-row justify-evenly `}>
                    { eleve.notification?.length ? 
                        <div 
                            className={` p-1 rounded  hover:shadow-lg hover:border hover:border-border_grey_clair `}
                            onClick={handleNotifClick}
                        > <Calendar /> </div>  
                        : "" 
                    }
                    <span>Autre</span>
                </div>
                <div></div>
            </div>
        </div>
    )
}