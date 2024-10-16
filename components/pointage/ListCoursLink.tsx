import Link from "next/link";
import { BookOpen } from 'lucide-react';

export default function ListCoursLink() {
    return (
        <div className=" px-4 rounded m-2 hover:border hover:bg-vert_fonce_hover hover:border-white hover:text-white hover:font-bold flex flex-row gap-4 items-center justify-evenly border-gray-50 min-h-0">
            <span>Cours</span>
            <BookOpen />
        </div>
    );
}
