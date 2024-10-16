import NavBarPointage from "@/components/pointage/navBar";
import { inter } from "@/utils/ui/font";

export default function PointagePageLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
        <html>
        <head>
          <title> Pointage-ENI </title>
        </head>
        <body className = {` ${inter.className}   antialised `} >
            <NavBarPointage />
            {children}
        </body>
      </html>   
    )
    
}