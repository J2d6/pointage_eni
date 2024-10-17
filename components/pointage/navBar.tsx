import Identity from "../identity";
import ListCoursLink from "./ListCoursLink";

export default function NavBarPointage() {

    return (
        <div className="nav fixed top-0 w-full bg-vert_clair h-16 flex flex-row justify-between "> 
            <Identity name="RALAIVAO Jean Christian" />
            <ListCoursLink />
            
        </div>
    )
    
}