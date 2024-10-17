export default function TogglePresenceForm () {
    return (  
        <div className="flex flex-1 ">
            <div className="flex items-center me-4">
                <input id="status_retard" type="radio" value="retard" name="presence_status" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label htmlFor="status_retard" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Retard</label>
            </div>
            <div className="flex items-center me-4">
                <input id="status_present" type="radio" value="retard" name="presence_status" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label htmlFor="status_present" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Present(e)</label>
            </div>
            <div className="flex items-center me-4">
                <input id="status_absent" type="radio" value="retard" name="presence_status" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label htmlFor="status_absent" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Absent(e)</label>
            </div>
        </div>
    )
}