import { LogOut } from "lucide-react";

export default function LogOutButton() {
    return (
        <div className=" px-4 hover:text-white hover:bg-lime-700  flex flex-row gap-4 items-center justify-evenly border-gray-50 min-h-0">
            <span>Se déconnecter</span>
            <LogOut />
        </div>
    );
}
