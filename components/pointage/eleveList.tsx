import { CoursWithClasse, EleveWithNotificationAndClasse, PointageWithEleveAndCoursAndNotification } from "@/services/db_services/supabase";
import EleveListItem from "./eleveItem";
import { useEffect, useState } from "react";
import { mapToPointage } from "@/lib/eleve";
import PointageValidator from "./pointageValidator";
import { validate } from "@/lib/pointage";
import { getPonintageListByCoursId } from "@/services/db_services/pointage";

interface EleveListProps {
    elevesList: EleveWithNotificationAndClasse[];
    cours: CoursWithClasse;
}

export default function EleveList({ elevesList, cours }: EleveListProps) {
    const [pointageList, setPointageList] = useState<PointageWithEleveAndCoursAndNotification[]>([]);
    
    const validatePointage = async function () {
        await validate(pointageList)
    }
    useEffect(() => {

        const getPointageList = async function () {
            const listPointage = await getPonintageListByCoursId(cours.id_cours)
            if (!listPointage.length) {
                const newList = mapToPointage(elevesList, cours);
                setPointageList(newList)
            } else {
                setPointageList(listPointage)
            }
        };

        getPointageList();
    }, [elevesList, cours]);

    const handlePresenceStatus = (updatedPointage: PointageWithEleveAndCoursAndNotification) => {
        setPointageList(prevList =>
            prevList.map(pointage =>
                pointage.id_eleve === updatedPointage.id_eleve ? updatedPointage : pointage
            )
        );
    };

    return (
        <>
            <div className="flex flex-col gap-2 mt-4 p-4">
                {pointageList.length > 0 ? (
                    pointageList.map((pointage) => (
                        <EleveListItem
                            key={pointage.id_eleve}
                            pointage={pointage}
                            handlePresenceStatus={handlePresenceStatus}
                        />
                    ))
                ) : (
                    "Chargement des élèves..."
                )}
            </div>
            < PointageValidator validator={validatePointage}/>
        </>
        
    );
}
