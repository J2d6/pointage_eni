interface TogglePresenceFormProps {
    handlePresence: (status: boolean, retard: boolean) => void;
    status: boolean;
    retard: boolean;
    id_eleve: number;
}

export default function TogglePresenceForm({ handlePresence, status, retard, id_eleve }: TogglePresenceFormProps) {
    return (
        <div className="flex flex-1">
            <div className="flex items-center me-4">
                <input
                    id={`status_retard_${id_eleve}`}
                    type="radio"
                    value="retard"
                    name={`${id_eleve}_presence_status`}
                    checked={retard}
                    onChange={() => handlePresence(false, true)}
                    className="w-4 h-4"
                />
                <label htmlFor={`status_retard_${id_eleve}`} className="ms-2 text-sm">Retard</label>
            </div>
            <div className="flex items-center me-4">
                <input
                    id={`status_present_${id_eleve}`}
                    type="radio"
                    value="present"
                    name={`${id_eleve}_presence_status`}
                    checked={status}
                    onChange={() => handlePresence(true, false)}
                    className="w-4 h-4"
                />
                <label htmlFor={`status_present_${id_eleve}`} className="ms-2 text-sm">Present(e)</label>
            </div>
            <div className="flex items-center me-4">
                <input
                    id={`status_absent_${id_eleve}`}
                    type="radio"
                    value="absent"
                    name={`${id_eleve}_presence_status`}
                    checked={!status && !retard}
                    onChange={() => handlePresence(false, false)}
                    className="w-4 h-4"
                />
                <label htmlFor={`status_absent_${id_eleve}`} className="ms-2 text-sm">Absent(e)</label>
            </div>
        </div>
    );
}
