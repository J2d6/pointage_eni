import { PointageWithEleveAndCoursAndNotification } from "@/services/db_services/supabase";
import { Calendar } from 'lucide-react';
import EleveIdentityCard from "./eleveIdentityCard";
import AddNotif from "./addNotification";
import TogglePresenceForm from "./togglePresenceStatus";
import _ from "lodash";

interface EleveListItem {
    pointage : PointageWithEleveAndCoursAndNotification,
    handlePresenceStatus : (pointage: PointageWithEleveAndCoursAndNotification) => void
}


export default function EleveListItem({pointage, handlePresenceStatus} : EleveListItem) {
    const handleNotifClick = function () {
        alert(JSON.stringify(pointage.eleve.notification))
    }

    const handlePresence = function (status : boolean, retard : boolean) {
        const pointageUpdated = _.cloneDeep(pointage); // DEEP COPY
        pointageUpdated.retard = retard;
        pointageUpdated.statut_presence = status
        handlePresenceStatus(pointageUpdated)
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
                < TogglePresenceForm id_eleve={pointage.id_eleve} status={pointage.statut_presence} retard={pointage.retard}  handlePresence={handlePresence}/>
            </div>
        </div>
    )
}