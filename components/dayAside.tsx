import React from 'react';

export default function DayAside() {
    const dayList = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];
    
    // Fonction pour gérer le clic sur un jour
    const handleClick = (day : String ) => {
        alert(`Vous avez cliqué sur ${day}`);
        // Ici, vous pouvez ajouter d'autres actions à effectuer lors du clic
    };

    return (
        <div className="bg-lime-700 w-32 flex flex-col px-1 justify-evenly items-center ">
            {dayList.map((day, index) => (
                <span 
                    key={index} 
                    onClick={() => handleClick(day)}
                    className="p-4  border-t-teal-200 hover:text-white active:text-white"
                >
                    {day}
                </span>
            ))}
        </div>
    );
}
