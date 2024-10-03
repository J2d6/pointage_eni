import Image from "next/image";


export default function Identity({ name }: { name: string }) {
  return (
    <div className=" px-4 h-full flex flex-row gap-4  items-center justify-between mx-4">
      <div className="w-12 h-12 rounded-full overflow-hidden   flex items-center justify-center">
        <Image
          src="/images/ralaivao.jpg"  // Chemin de l'image relative au dossier 'public'
          alt="pdp_professeur"
          width={48}                  // Largeur de l'image
          height={48}                 // Hauteur de l'image
          className="object-cover"    // Assure que l'image remplit bien son conteneur
        />
      </div>
      <div>{name}</div>
    </div>
  );
}
