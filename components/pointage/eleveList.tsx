import { Tables } from "@/services/db_services/supabase";
import EleveListItem from "./eleveItem";

interface EleveListProps {
    elevesList: Tables<'eleve'>[];
}

export default function EleveList({ elevesList = [] }: EleveListProps) {
    return (
        <div className="flex flex-col gap-2 mt-4">
            {elevesList.map((eleve) => (
                <EleveListItem key={eleve.id_eleve} eleve={eleve} />
            ))}
        </div>
    );
}
