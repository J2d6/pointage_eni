import { getDayFromTimestamp } from "@/lib/date";

interface DayItemProps {
    setDay: (day: string) => void; 
    date: string; 
    day : string
}

export default function DayItem ({ date, setDay, day }: DayItemProps) {
    const handleClick = () => {
        setDay(date);
    };
    const today = getDayFromTimestamp(date)

    return (
        <span 
            onClick={handleClick}
            className={`
                p-4 
                w-full 
                font-bold italic text-center 
                block rounded 
                hover:font-bold hover:text-white hover:bg-vert_clair
                border-t-teal-200 
                ${today==getDayFromTimestamp(day) ? "bg-vert_clair text-white font-bold " : ""}
                `}>
            {today} 
        </span>
    );
}
