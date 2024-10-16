import { CoursWithClasse } from '@/services/db_services/supabase';
import { formatISO, startOfWeek, endOfWeek } from 'date-fns';


export const getHourFromTimestamp = function (timestamp: string): string {
    const date = new Date(timestamp); 
    const hours = String(date.getHours()).padStart(2, '0'); 
    const minutes = String(date.getMinutes()).padStart(2, '0'); 
    return `${hours}:${minutes}`;
}

export const getDateFromTimestamp = function (timestamp: string): string {
    const date = new Date(timestamp); 
    const year = date.getFullYear(); 
    const month = String(date.getMonth() + 1).padStart(2, '0'); 
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`; 
}

function extractDateFromTimestamp(timestamp: string | number | Date): string {
    const date = new Date(timestamp);
    return date.toISOString().split('T')[0];
  }
  

export const getDayFromTimestamp = function (timestamp: string): string {
    const date = new Date(timestamp); 
    const jours = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"]; 
    const jourNom = jours[date.getDay()]; 
    return jourNom; 
}



export const makeWeekDateRange = function () {
    const startOfWeekDate = startOfWeek(new Date(), { weekStartsOn: 1 });
    const endOfWeekDate = endOfWeek(new Date(), { weekStartsOn: 1 });
    return {
        startOfWeekDate, 
        endOfWeekDate
    }
}

export const getTimestampsOfCurrentWeek = function (): string[] {
    const { startOfWeekDate } = makeWeekDateRange();
    const timestampsOfWeek: string[] = [];

    for (let i = 0; i < 7; i++) {
        const currentDate = new Date(startOfWeekDate);
        currentDate.setDate(currentDate.getDate() + i);
        currentDate.setHours(0, 0, 0, 0);

        // Formatage personnalisé sans fuseau horaire ni Z
        const year = currentDate.getFullYear();
        const month = String(currentDate.getMonth() + 1).padStart(2, '0');
        const day = String(currentDate.getDate()).padStart(2, '0');
        const formattedTimestamp = `${year}-${month}-${day} 00:00:00`; // Format: YYYY-MM-DD HH:mm:ss

        timestampsOfWeek.push(formattedTimestamp);
    }

    return timestampsOfWeek;
}

export const resetTimeToMidnight = function (timestamp: string): string {

    const date = new Date(timestamp);
    date.setHours(0, 0, 0, 0)
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); 
    const day = String(date.getDate()).padStart(2, '0');
    const formattedTimestamp = `${year}-${month}-${day} 00:00:00`;

    return formattedTimestamp; 
}

export const getMidnightTimestamps = function (timestamp: string): string[] {
    const todayMidnight = resetTimeToMidnight(timestamp);
    const date = new Date(timestamp);
    date.setDate(date.getDate() + 1); 
    const tomorrowMidnight = resetTimeToMidnight(date.toISOString());
    return [todayMidnight, tomorrowMidnight];
}

export const getUniqueDaysWithTimeFromCourses = function (coursList : CoursWithClasse[]) : string[] {
    const uniqueDays : Set<string>= new Set(); 
 
    coursList.forEach(cours => {
        const timestamp = resetTimeToMidnight(cours.horaire); 
        const date = new Date(timestamp); 

        
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); 
        const day = String(date.getDate()).padStart(2, '0'); 
        const hour = String(date.getHours()).padStart(2, '0'); 
        const minute = String(date.getMinutes()).padStart(2, '0'); 
        const second = String(date.getSeconds()).padStart(2, '0'); 

        // Construire la chaîne au format YYYY-MM-DD HH:mm:ss
        const dayWithTime = `${year}-${month}-${day} ${hour}:${minute}:${second}`;
        uniqueDays.add(dayWithTime); 
    });

   
    return Array.from(uniqueDays);
}