import { LogOut } from "lucide-react";

export default function LogOutButton() {
    return (
        <div className=" px-4 rounded rounded-md m-2 hover:border hover:bg-vert_fonce_hover hover:border-white hover:text-white hover:font-bold flex flex-row gap-4 items-center justify-evenly border-gray-50 min-h-0">
            <span>Se déconnecter</span>
            <LogOut />
        </div>
    );
}
