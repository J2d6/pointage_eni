import { getCoursById } from "@/services/db_services/getCours";
import { getStudentsWithNotificationsByKnownCourse } from "@/services/db_services/getEleves";
import { CoursWithClasse, EleveWithNotificationAndClasse } from "@/services/db_services/supabase";
import { useEffect, useState } from "react";
import EleveList from "./eleveList";

interface PointagePageProps {
    idCours: number;
}

export default function PointagePage({ idCours }: PointagePageProps) {
    const [cours, setCours] = useState<CoursWithClasse | null>(null);
    const [elevesList, setElevesList] = useState<EleveWithNotificationAndClasse[]>([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const course = await getCoursById(idCours);
                const eleves = await getStudentsWithNotificationsByKnownCourse(course[0]);
                setCours(course[0]);
                setElevesList(eleves);
            } catch (error) {
                alert('Erreur de récupération des données');
            }
        };

        getData();
    }, [idCours]);

    if (!cours) {
        return <div>Chargement des données du cours...</div>;
    }

    return (
        <section className="mt-[12rem] overflow-y-auto h-[calc(100vh-12rem)]">
            <EleveList elevesList={elevesList} cours={cours} />
        </section>
    );
}
