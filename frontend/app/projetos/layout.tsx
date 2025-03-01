import NavBar from "@/components/NavBar";
import { Providers } from "../providers/ThemeProvider";

export default function ProjetosLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
     <Providers>
      {children}
      </Providers>
    </>
  );
}