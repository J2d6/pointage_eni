import Image from "next/image";


export default function Identity({ name }: { name: string }) {
  return (
    <div className=" px-4 h-full flex flex-row gap-4  items-center justify-between mx-4">
      <div className="w-12 h-12 rounded-full overflow-hidden   flex items-center justify-center">
        <Image
          src="/images/ralaivao.jpg"  
          alt="pdp_professeur"
          width={48}                  
          height={48}                 
          className="object-cover border border-border_green"  
        />
      </div>
      <div className="font-bold">{name}</div>
    </div>
  );
}
