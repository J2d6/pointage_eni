import { CoursWithClasse, EleveWithNotification, EleveWithNotificationAndClasse, PointageWithEleveAndCoursAndNotification, Tables } from "@/services/db_services/supabase";
import EleveListItem from "./eleveItem";
import { useEffect, useState } from "react";
import { mapToPointage } from "@/lib/eleve";
import { togglePresenceStatus } from "@/lib/pointage";

interface EleveListProps {
    elevesList: EleveWithNotificationAndClasse[],
    cours : CoursWithClasse
}

export default function EleveList({ elevesList , cours }: EleveListProps) {
    const [listEleve, setListEleve] = useState(elevesList)
    const [ready, setReady] = useState<boolean>(false)
    const [pointageList, setPointageList] = useState<PointageWithEleveAndCoursAndNotification[]>([])

    const handlePresenceStatus = function (pointage : PointageWithEleveAndCoursAndNotification) {
        togglePresenceStatus(pointageList!, pointage, setPointageList)
    }
    useEffect(() => {
        const constructData = async () => {
            try { 
                const listPointage = mapToPointage(elevesList, cours)
                setPointageList(listPointage)
                if (pointageList) {
                    setReady(true)
                } else {
                    setReady(false)
                }

            } catch (error) {
                console.error('Erreur de récupération des données:', error);
            }
        };

         constructData();     
       
    }, [elevesList, cours]);

    return (
        <div className="flex flex-col gap-2 mt-4 p-4">
            {
                ready ? 
                    pointageList!.map((pointage) => (
                        <EleveListItem key={pointage.id_eleve} pointage = {pointage} handlePresenceStatus={handlePresenceStatus} />
                    ))
                : " Loading ..."
            }
            {/* {
                ready ? JSON.stringify(pointageList) : "Loading ..."
            } */}
        </div>
    );
}
