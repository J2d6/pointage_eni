import CoursListItem from "./CoursListItem"
import CoursFilter from "./ListCoursFilter"

export default function ListCours() {
    const listCours = [
        {nom : "MERISE", classe : "M1 GB", horaire : "9h - 10h30", salle : "S01"},
        {nom : "ROUTE IP", classe : "M1 IG" , horaire : "13h30 - 15h", salle : "S05"},
        {nom : "TECH JAVA", classe : "L3" , horaire : "7h30 - 9h", salle : "S03"},
    ]
    
    return (
        <main className="flex-1  border-black">
            {/* <div>
                <CoursFilter />
            </div> */}
            {
                listCours.map(
                    (cours, index) => CoursListItem(cours)
                )
            }
        </main>
    )
}