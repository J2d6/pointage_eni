import Identity   from "@/components/identity";
import LogOutButton from "@/components/logOutButton";



export default function ListCoursNav () {
    return (
        <div className="nav bg-vert_clair h-16 flex flex-row justify-between "> 
            <Identity name="RALAIVAO Jean Christian" />
            < LogOutButton />
        </div>
    )
}