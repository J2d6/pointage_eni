import { PointageWithEleveAndCoursAndNotification } from "@/services/db_services/supabase";
import { Calendar } from 'lucide-react';
import EleveIdentityCard from "./eleveIdentityCard";
import AddNotif from "./addNotification";
import TogglePresenceForm from "./togglePresenceStatus";
import _ from "lodash";

interface EleveListItemProps {
    pointage: PointageWithEleveAndCoursAndNotification;
    handlePresenceStatus: (pointage: PointageWithEleveAndCoursAndNotification) => void;
}

export default function EleveListItem({ pointage, handlePresenceStatus }: EleveListItemProps) {
    const handlePresence = (status: boolean, retard: boolean) => {
        const updatedPointage = _.cloneDeep(pointage);
        updatedPointage.statut_presence = status;
        updatedPointage.retard = retard;
        handlePresenceStatus(updatedPointage);
    };

    return (
        <div className="flex flex-row border border-border_green p-2 rounded bg-base_blanc h-24">
            <EleveIdentityCard eleve={pointage.eleve} />
            <div className="flex flex-col flex-1">
                <div className="flex flex-row justify-between items-center">
                    {pointage.eleve!.notification?.length ? (
                        <div onClick={() => alert(JSON.stringify(pointage.eleve!.notification))}>
                            <Calendar />
                        </div>
                    ) : (
                        <div>&nbsp;</div>
                    )}
                    <div className="mr-4">
                        <AddNotif />
                    </div>
                </div>
                <TogglePresenceForm
                    id_eleve={pointage.id_eleve}
                    status={pointage.statut_presence}
                    retard={pointage.retard}
                    handlePresence={handlePresence}
                />
            </div>
        </div>
    );
}
