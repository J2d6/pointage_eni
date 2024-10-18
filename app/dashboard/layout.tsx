import { inter } from "@/utils/ui/font";

export default function DashBoardLayoutPage({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
        <html>
        <head>
          <title> Dashborad </title>
        </head>
        <body className = {` ${inter.className}  bg-base antialised `} >
            {children}
        </body>
      </html>  
    )
}