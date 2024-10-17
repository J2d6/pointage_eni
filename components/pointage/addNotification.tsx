import { Plus } from 'lucide-react';

export default function AddNotif() {
    return (
        <button
            className={`
                border border-border_grey 
                rounded 
                flex flex-row gap-1 justify-center items-center
                p-1
                hover:shadow-lg
                `}
        >
            <span className='ml-1'>Autre</span>
            <Plus />
        </button>
    )
    
}