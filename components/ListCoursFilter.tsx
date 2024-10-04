export default function CoursFilter() {
    return(

    <div className="flex flex-wrap items-end border border-red-900 ">
        <div className="flex items-center me-4">
            <input id="red-radio" type="radio" value="" name="colored-radio" className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label htmlFor="red-radio" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Red</label>
        </div>
        <div className="flex items-center me-4">
            <input id="green-radio" type="radio" value="" name="colored-radio" className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label htmlFor="green-radio" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Green</label>
        </div>
        <div className="flex items-center me-4">
            <input  id="purple-radio" type="radio" value="" name="colored-radio" className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label htmlFor="purple-radio" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Purple</label>
        </div>
        <div className="flex items-center me-4">
            <input id="teal-radio" type="radio" value="" name="colored-radio" className="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 focus:ring-teal-500 dark:focus:ring-teal-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label htmlFor="teal-radio" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Teal</label>
        </div>
        <div className="flex items-center me-4">
            <input id="yellow-radio" type="radio" value="" name="colored-radio" className="w-4 h-4 text-yellow-400 bg-gray-100 border-gray-300 focus:ring-yellow-500 dark:focus:ring-yellow-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label htmlFor="yellow-radio" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Yellow</label>
        </div>
        <div className="flex items-center me-4">
            <input id="orange-radio" type="radio" value="" name="colored-radio" className="w-4 h-4 text-orange-500 bg-gray-100 border-gray-300 focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label htmlFor="orange-radio" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Orange</label>
        </div>
    </div>

    )
}