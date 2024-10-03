import { LogOut } from "lucide-react";

export default function LogOutButton() {
    return (
        <div className=" flex flex-row gap-4 items-center justify-evenly border-gray-50 mx-4 min-h-0">
            <span>Se déconnecter</span>
            <LogOut />
        </div>
    );
}
