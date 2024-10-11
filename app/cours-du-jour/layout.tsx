import { inter, lusitana } from "@/utils/ui/font";

export default function Layout({
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
          {children}
        </body>
      </html>   
    )
}