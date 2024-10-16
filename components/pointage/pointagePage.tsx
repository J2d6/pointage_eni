import { getCoursById } from "@/services/db_services/getCours";
import { getStudentsWithNotificationsByKnownCourse } from "@/services/db_services/getEleves";
import { CoursWithClasse, Tables } from "@/services/db_services/supabase"
import { useEffect, useState } from "react";
import EleveList from "./eleveList";

interface PointagePageProps {
    idCours : number
}

export default function PointagePage({idCours} : PointagePageProps) {
    let cours : CoursWithClasse;
    const [elevesList, setElevesList] = useState<Tables<'eleve'>[]>()

    useEffect(() => {
        const getData = async () => {
            try { 
                cours = (await getCoursById(idCours))[0]
                const eleves = await getStudentsWithNotificationsByKnownCourse(cours)
                setElevesList(eleves)

            } catch (error) {
                console.error('Erreur de récupération des données:', error);
            }
        };

        getData();     
       
    }, []);
    return (
        <EleveList elevesList={elevesList!}/>
    )
}