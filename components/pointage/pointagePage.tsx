import { getCoursById } from "@/services/db_services/getCours";
import { getStudentsWithNotificationsByKnownCourse } from "@/services/db_services/getEleves";
import { CoursWithClasse, EleveWithNotification, Tables } from "@/services/db_services/supabase"
import { useEffect, useState } from "react";
import EleveList from "./eleveList";

interface PointagePageProps {
    idCours : number
}

export default function PointagePage({idCours} : PointagePageProps) {
    const [cours, setCours ] = useState<CoursWithClasse>()
    const [elevesList, setElevesList] = useState<EleveWithNotification[]>()

    useEffect(() => {
        const getData = async () => {
            try { 
                const course = (await getCoursById(idCours))[0]
                setCours(course)
                const eleves = await getStudentsWithNotificationsByKnownCourse(cours!)
                setElevesList(eleves)

            } catch (error) {
                console.error('Erreur de récupération des données:', error);
            }
        };

        getData();     
       
    }, []);
    return (
        <EleveList elevesList={elevesList!} cours = {cours!} />
    )
}