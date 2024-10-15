import { getCoursForProfesseurThisWeek } from "@/services/db_services/getCours";
import CoursListItem from "./CoursListItem"

export default async function ListCours() {
   
    let courses;
    try {
        courses = await getCoursForProfesseurThisWeek(1)
        console.log(courses);
    } catch (error) {
        console.error(error);
    }
     const listCours = courses
    return (
        <main className="flex-1 p-4 border-black">

            {
                listCours!.map(
                    (cours, index) => CoursListItem(cours)
                )
            }
        </main>
    )
}