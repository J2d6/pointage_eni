import { PointageWithEleveAndCoursAndNotification } from "@/services/db_services/supabase"

interface TogglePresenceFormProps {
    handlePresence : (status: boolean, retard: boolean) => void,
    status : boolean, 
    retard : boolean,
    id_eleve : number
}


export default function TogglePresenceForm ({handlePresence, status, retard, id_eleve} : TogglePresenceFormProps) {
    
    return (  
        <div className="flex flex-1 ">
            <div className="flex items-center me-4">
                <input
                    id="status_retard" 
                    type="radio" 
                    value="retard" 
                    name={`${id_eleve}_presence_status`}  
                    checked = {retard}
                    onChange={() => handlePresence(false, true)}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" 
                />
                <label htmlFor="status_retard" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Retard</label>
            </div>
            <div className="flex items-center me-4">
                <input 
                    id="status_present" 
                    type="radio" 
                    value="present" 
                    name={`${id_eleve}_presence_status`} 
                    checked = {status}
                    onChange={() => handlePresence(true, false)}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" 
                />
                <label htmlFor="status_present" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Present(e)</label>
            </div>
            <div className="flex items-center me-4">
                <input 
                    id="status_absent" 
                    type="radio" 
                    value="absent" 
                    name={`${id_eleve}_presence_status`} 
                    checked = {!status}
                    onChange={() => handlePresence(false, false)}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" 
                />
                <label htmlFor="status_absent" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Absent(e)</label>
            </div>
        </div>
    )
}